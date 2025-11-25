// Use global fetch if available (Node 18+), otherwise try node-fetch
let fetchImpl = globalThis.fetch;
try {
    if (!fetchImpl) fetchImpl = require('node-fetch');
} catch (_) { }

(async () => {
    const tests = [
        { template: 'beta-confirmation', vars: { name: 'Prueba Beta 1', confirmation_token: 'BETA1' } },
        { template: 'contact-thanks', vars: { name: 'Prueba Contacto 1' } },
        { template: 'feedback-thanks', vars: { name: 'Prueba Feedback 1' } },
        { template: 'beta-confirmation', vars: { name: 'Prueba Beta 2', confirmation_token: 'BETA2' } },
        { template: 'contact-thanks', vars: { name: 'Prueba Contacto 2' } },
        { template: 'feedback-thanks', vars: { name: 'Prueba Feedback 2' } },
        { template: 'beta-confirmation', vars: { name: 'Prueba Beta 3', confirmation_token: 'BETA3' } },
        { template: 'contact-thanks', vars: { name: 'Prueba Contacto 3' } },
        { template: 'feedback-thanks', vars: { name: 'Prueba Feedback 3' } }
    ];
    for (const t of tests) {
        try {
            const res = await fetch('http://127.0.0.1:8000', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ email: 'richarddigo+852@gmail.com', template: t.template, locale: 'es', variables: t.vars })
            });
            const text = await res.text();
        } catch (e) {
        }
        await new Promise(r => setTimeout(r, 700));
    }
})();
