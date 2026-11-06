const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const { createRequire, register } = require('node:module');
const { pathToFileURL } = require('node:url');
const root = process.env.TASK056_SOURCE_PROJECT || path.resolve(__dirname, '../..');
// Optional existing dependency tree: no install, network, or dependency mutation.
const depRoot = process.env.TASK056_DEPENDENCY_PROJECT || root;
const deps = createRequire(path.join(depRoot, 'package.json'));
// next-intl uses the bundler-supported next/server alias; resolve that exact
// official module under Node, without mocking routing or NextResponse.
register('data:text/javascript,' + encodeURIComponent(`
export async function resolve(specifier, context, nextResolve) {
  return nextResolve(specifier === 'next/server' ? 'next/server.js' : specifier, context);
}`), pathToFileURL(__filename));
(async () => {
const intlMiddleware = await import(pathToFileURL(deps.resolve('next-intl/middleware')).href);
const intlRouting = await import(pathToFileURL(deps.resolve('next-intl/routing')).href);
const ts = deps('typescript');
const { NextRequest } = deps('next/server');
const { getPathMatch } = deps('next/dist/shared/lib/router/utils/path-match');
const { prepareDestination } = deps('next/dist/shared/lib/router/utils/prepare-destination');
function load(relative) {
  const filename = path.join(root, relative);
  const source = fs.readFileSync(filename, 'utf8');
  const code = ts.transpileModule(source, { fileName: filename.replace(/\.mjs$/, '.ts'), compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
  const module = { exports: {} };
  const localRequire = (name) => name === 'next-intl/middleware' ? { __esModule: true, ...intlMiddleware } : name === 'next-intl/routing' ? intlRouting : name.startsWith('.') ? load(path.relative(root, path.resolve(path.dirname(filename), name)) + '.ts') : deps(name);
  vm.runInThisContext(`(function(require,module,exports,__filename,__dirname){${code}\n})`, { filename })(localRequire, module, module.exports, filename, path.dirname(filename));
  return module.exports;
}
const middleware = load('middleware.ts').default;
const config = load('next.config.mjs').default;
for (const pathname of ['/invite', '/apple-app-site-association']) {
  test(`raw route ${pathname} bypasses locale and cookies with consent granted`, () => {
    const request = new NextRequest(`https://cojauny.com${pathname}?code=a%2Bb`, { headers: { 'accept-language': 'de', cookie: 'cojauny_analytics_consent=granted' } });
    const response = middleware(request);
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('x-middleware-next'), '1');
    assert.equal(response.headers.get('location'), null);
    assert.equal(response.headers.get('set-cookie'), null);
    assert.equal(request.nextUrl.searchParams.get('code'), 'a+b');
  });
}
for (const pathname of ['/support', '/invite-other']) {
  test(`ordinary route ${pathname} keeps real next-intl locale routing`, () => {
    const response = middleware(new NextRequest(`https://cojauny.com${pathname}`, { headers: { 'accept-language': 'de' } }));
    assert.equal(response.status, 307);
    assert.equal(new URL(response.headers.get('location')).pathname, `/de${pathname}`);
  });
}
test('invite internal rewrite preserves opaque query using actual Next destination machinery', async () => {
  assert.equal(typeof config.rewrites, 'function');
  const routes = await config.rewrites();
  const route = routes.find(row => row.source === '/invite');
  assert.ok(route);
  const params = getPathMatch(route.source)('/invite');
  const result = prepareDestination({ destination: route.destination, params, query: { code: 'a+b/&x', other: 'keep' }, appendParamsToQuery: true });
  assert.equal(result.parsedDestination.pathname, '/invite/index.html');
  assert.equal(result.parsedDestination.query.code, 'a+b/&x');
  assert.equal(result.parsedDestination.query.other, 'keep');
  assert.equal(getPathMatch(route.source)('/invite-other'), false);
});
test('all raw association paths have JSON headers and global security headers remain', async () => {
  const rows = await config.headers();
  for (const source of ['/.well-known/assetlinks.json', '/.well-known/apple-app-site-association', '/apple-app-site-association']) {
    const row = rows.find(row => row.source === source);
    assert.ok(row, source);
    assert.equal(row.headers.find(header => header.key === 'Content-Type')?.value, 'application/json');
  }
  assert.ok(rows.find(row => row.source === '/:path*').headers.some(header => header.key === 'X-Content-Type-Options' && header.value === 'nosniff'));
});
test('AASA copies agree and preserve approved Apple identity and invitation paths', () => {
  const wellKnown = fs.readFileSync(path.join(root, 'public/.well-known/apple-app-site-association'));
  assert.deepEqual(wellKnown, fs.readFileSync(path.join(root, 'public/apple-app-site-association')));
  const details = JSON.parse(wellKnown).applinks.details;
  assert.equal(details.length, 1);
  assert.deepEqual(details[0].appIDs, ['352HG7A4HX.com.cojauny.app']);
  assert.deepEqual(details[0].components, [{ '/': '/invite', '?': { code: '?*' } }, { '/': '/invite/*' }]);
});
test('fallback script renders hostile code as literal text and never performs automatic navigation', () => {
  const script = fs.readFileSync(path.join(root, 'public/invite/redirect.js'), 'utf8');
  const code = '<img src=x onerror=alert(1)>+&';
  const text = { textContent: '' }; const container = { hidden: true };
  const window = { location: { search: `?code=${encodeURIComponent(code)}` } };
  vm.runInNewContext(script, { URLSearchParams, window, document: { getElementById(id) { return id === 'invitation-code' ? text : id === 'invitation-code-container' ? container : null; } } });
  assert.equal(text.textContent, code); assert.equal(container.hidden, false);
  assert.deepEqual(window.location, { search: `?code=${encodeURIComponent(code)}` });
  assert.match(fs.readFileSync(path.join(root, 'public/invite/index.html'), 'utf8'), /src="\/invite\/redirect\.js"/);
});

})().catch((error) => { console.error(error); process.exitCode = 1; });
