import { mkdirSync, writeFileSync } from 'node:fs';
import { load } from 'cheerio';
import { allBlogPosts } from '../src/content/blog/posts';
import { featuredAirports } from '../src/content/airports';
import { buildBlogAlternates } from '../src/lib/blogAlternates';
import { buildCanonicalUrl, buildLocaleAlternates } from '../src/lib/jsonld';
import { locales, type Locale } from '../src/locales/config';

// Validate actual served HTML, not a second copy of URL construction.
const base = process.env.SEO_CHECK_BASE_URL ?? 'http://localhost:3000';
const pages: Array<{locale: Locale; path: string; expected: ReturnType<typeof buildLocaleAlternates>}> = [];
for (const locale of locales) {
  for (const path of ['', '/blog', '/airports', '/legal/privacy', '/legal/cookies', '/legal/terms', '/legal/faq', '/legal/subprocessors', '/legal/acceptable-use', '/account-deletion', '/docs/sdk-plan']) {
    pages.push({ locale, path, expected: buildLocaleAlternates(locale, path) });
  }
  for (const airport of featuredAirports.slice(0, 3)) {
    const path = `/airports/${airport.slug}`;
    pages.push({ locale, path, expected: buildLocaleAlternates(locale, path) });
  }
}
for (const post of allBlogPosts) pages.push({ locale: post.locale, path: `/blog/${post.slug}`, expected: buildBlogAlternates(post) });

async function main() {
  const results = [];
  for (const { locale, path, expected } of pages) {
    const canonical = buildCanonicalUrl(locale, path);
    const localUrl = new URL(new URL(canonical).pathname, base);
    const issues: string[] = [];
    try {
      const response = await fetch(localUrl, { headers: { 'Accept-Language': locale }, signal: AbortSignal.timeout(15000) });
      if (!response.ok) issues.push(`HTTP ${response.status}`);
      const $ = load(await response.text());
      if ($('html').attr('lang') !== locale) issues.push('Incorrect server-rendered language');
      if ($('link[rel="canonical"]').attr('href') !== canonical) issues.push('Incorrect canonical');
      const actual = Object.fromEntries($('link[rel="alternate"][hreflang]').toArray().map(el => [$(el).attr('hreflang'), $(el).attr('href')]));
      const wanted = expected?.languages ?? {};
      if (JSON.stringify(Object.entries(actual).sort()) !== JSON.stringify(Object.entries(wanted).sort())) issues.push('Incorrect hreflang set');
      if ($('h1').length !== 1) issues.push('Expected one main heading');
      $('script[type="application/ld+json"]').each((_, el) => { try { JSON.parse($(el).text()); } catch { issues.push('Invalid JSON-LD'); } });
    } catch (error) { issues.push(error instanceof Error ? error.message : 'Request failed'); }
    results.push({ url: canonical, locale, issues });
  }
  const report = { checked: results.length, failed: results.filter(row => row.issues.length).length, results };
  mkdirSync('reports', { recursive: true });
  writeFileSync('reports/seo-html.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ checked: report.checked, failed: report.failed }));
  if (report.failed) { console.error(JSON.stringify(results.filter(row => row.issues.length), null, 2)); process.exitCode = 1; }
}
void main();
