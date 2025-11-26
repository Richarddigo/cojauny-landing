const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

function waitForListening(proc, timeout = 15000) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error('Timeout waiting for deno')), timeout);
        proc.stdout.on('data', (chunk) => {
            const s = chunk.toString();
            process.stdout.write(s);
            if (s.includes('Listening on')) {
                clearTimeout(timer);
                resolve();
            }
        });
        proc.stderr.on('data', (chunk) => process.stderr.write(chunk.toString()));
        proc.on('exit', (code) => reject(new Error('Deno exited prematurely: ' + code)));
    });
}

(async () => {
    // Load env files
    const envFiles = ['.env.production', '.env.local'];
    const childEnv = Object.assign({}, process.env);
    for (const f of envFiles) {
        const p = path.resolve(f);
        if (fs.existsSync(p)) {
            const content = fs.readFileSync(p, 'utf8');
            content.split(/\r?\n/).forEach(line => {
                const l = line.trim();
                if (!l || l.startsWith('#')) return;
                const idx = l.indexOf('=');
                if (idx === -1) return;
                let name = l.slice(0, idx).trim();
                let value = l.slice(idx + 1).trim();
                if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
                childEnv[name] = value;
            });
        }
    }
    if (childEnv.RESEND_API_KEY && !childEnv.USE_RESEND) childEnv.USE_RESEND = 'true';

    const deno = spawn('deno', ['run', '--allow-net', '--allow-env', '--allow-read', 'supabase/functions/manage-forms/index.ts'], { env: childEnv });
    try {
        await waitForListening(deno, 20000);
        // send contact-confirmation
        const payload = JSON.stringify({ email: 'richarddigo+852@gmail.com', template: 'contact-confirmation', locale: 'es', variables: { name: 'Prueba Contacto' } });
        const res = await new Promise((resolve) => {
            const req = http.request({ hostname: '127.0.0.1', port: 8000, path: '/', method: 'POST', headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) } }, (res) => {
                let body = '';
                res.on('data', (c) => body += c.toString());
                res.on('end', () => resolve({ status: res.statusCode, body }));
            });
            req.on('error', (e) => resolve({ error: e.message }));
            req.write(payload);
            req.end();
        });
    } catch (e) {
    } finally {
        deno.kill();
    }
})();
