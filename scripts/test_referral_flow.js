const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

function loadEnv() {
    const envFiles = ['.env.production', '.env.local'];
    const env = Object.assign({}, process.env);
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
                env[name] = value;
            });
        }
    }
    return env;
}

async function request(options, body) {
    return new Promise((resolve, reject) => {
        const lib = options.protocol === 'https:' ? https : http;
        const req = lib.request(options, res => {
            let data = '';
            res.on('data', c => data += c.toString());
            res.on('end', () => resolve({ status: res.statusCode, body: data }));
        });
        req.on('error', reject);
        if (body) req.write(body);
        req.end();
    });
}

(async () => {
    const env = loadEnv();
    const baseUrl = env.BASE_URL;
    const svcKey = env.BASE_SERVICE_ROLE_KEY || env.BASE_SERVICE_KEY || env.SUPABASE_SERVICE_ROLE_KEY;
    if (!baseUrl || !svcKey) {
        process.exit(1);
    }

    const headers = { 'apikey': svcKey, 'Authorization': `Bearer ${svcKey}`, 'Content-Type': 'application/json' };
    // ask for return representation when inserting
    const insertHeaders = Object.assign({}, headers, { Prefer: 'return=representation' });
    try {
        const payload = JSON.stringify({ email: `test+${Date.now()}@example.com`, name: 'Test User', country: 'es', flight_frequency: 'once', marketing_opt_in: false, beta_tester: true, terms_accepted: false, privacy_accepted: false, language: 'es' });
        const create = await request({ method: 'POST', protocol: baseUrl.startsWith('https') ? 'https:' : 'http:', hostname: new URL(baseUrl).hostname, port: new URL(baseUrl).port || (baseUrl.startsWith('https') ? 443 : 80), path: '/rest/v1/waitlist', headers: insertHeaders }, payload);
        const created = JSON.parse(create.body)[0];
        const userId = created.id;

        const statsRes = await request({ method: 'GET', protocol: baseUrl.startsWith('https') ? 'https:' : 'http:', hostname: new URL(baseUrl).hostname, port: new URL(baseUrl).port || (baseUrl.startsWith('https') ? 443 : 80), path: `/rest/v1/referral_stats?user_id=eq.${userId}`, headers });
        const stats = JSON.parse(statsRes.body)[0];
        if (!stats) { }
        const code = stats ? stats.referral_code : null;

        if (code) {
            const rpcBody = JSON.stringify({ ref_code: code });
            const rpcRes = await request({ method: 'POST', protocol: baseUrl.startsWith('https') ? 'https:' : 'http:', hostname: new URL(baseUrl).hostname, port: new URL(baseUrl).port || (baseUrl.startsWith('https') ? 443 : 80), path: '/rest/v1/rpc/increment_referral_visits', headers }, rpcBody);

            const rpcRes2 = await request({ method: 'POST', protocol: baseUrl.startsWith('https') ? 'https:' : 'http:', hostname: new URL(baseUrl).hostname, port: new URL(baseUrl).port || (baseUrl.startsWith('https') ? 443 : 80), path: '/rest/v1/rpc/increment_referral_signups', headers }, rpcBody);
        }

        await request({ method: 'DELETE', protocol: baseUrl.startsWith('https') ? 'https:' : 'http:', hostname: new URL(baseUrl).hostname, port: new URL(baseUrl).port || (baseUrl.startsWith('https') ? 443 : 80), path: `/rest/v1/referral_stats?user_id=eq.${userId}`, headers });
        await request({ method: 'DELETE', protocol: baseUrl.startsWith('https') ? 'https:' : 'http:', hostname: new URL(baseUrl).hostname, port: new URL(baseUrl).port || (baseUrl.startsWith('https') ? 443 : 80), path: `/rest/v1/waitlist?id=eq.${userId}`, headers });
    } catch (e) {
    }
})();
