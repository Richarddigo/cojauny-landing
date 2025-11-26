const { spawn } = require('child_process');
const http = require('http');

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

async function sendTests() {
    const tests = [
        { template: 'beta-confirmation', vars: { name: 'Prueba Beta 1', confirmation_token: 'BETA1' } },
        { template: 'contact-confirmation', vars: { name: 'Prueba Contacto 1' } },
        { template: 'feedback-confirmation', vars: { name: 'Prueba Feedback 1', usecase: 'feedback' } },
        { template: 'beta-confirmation', vars: { name: 'Prueba Beta 2', confirmation_token: 'BETA2' } },
        { template: 'contact-confirmation', vars: { name: 'Prueba Contacto 2' } },
        { template: 'idea-confirmation', vars: { name: 'Prueba Feedback 2', usecase: 'idea' } },
        { template: 'beta-confirmation', vars: { name: 'Prueba Beta 3', confirmation_token: 'BETA3' } },
        { template: 'contact-confirmation', vars: { name: 'Prueba Contacto 3' } },
        { template: 'business-proposal-confirmation', vars: { name: 'Prueba Feedback 3', usecase: 'business_proposal' } }
    ];

    const recipient = process.env.TEST_RECIPIENT || 'richarddigo@gmail.com';
    for (const t of tests) {
        const payload = JSON.stringify({ email: recipient, template: t.template, locale: 'es', variables: t.vars });
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
        await new Promise(r => setTimeout(r, 500));
    }
}

(async () => {
    // Load .env.production and .env.local if present to pass to child process
    const fs = require('fs');
    const path = require('path');
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

    // If RESEND_API_KEY present, set USE_RESEND
    if (childEnv.RESEND_API_KEY && !childEnv.USE_RESEND) childEnv.USE_RESEND = 'true';

    const denoArgs = ['run', '--allow-net', '--allow-env', '--allow-read'];
    if (childEnv.TEST_CAPTURE === 'true') denoArgs.push('--allow-write');
    denoArgs.push('supabase/functions/manage-forms/index.ts');
    const deno = spawn('deno', denoArgs, { env: childEnv });
    try {
        await waitForListening(deno, 20000);
        await sendTests();
    } catch (e) {
    } finally {
        deno.kill();
    }
})();
