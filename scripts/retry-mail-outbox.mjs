// Fixed production destination; never log authorization headers or message content.
const secret = process.env.MAIL_OUTBOX_SECRET;
if (!secret || secret.length < 32) throw new Error('Missing outbox authorization');
const endpoint = 'https://cojauny.com/api/internal/mail-outbox';
const headers = { authorization: `Bearer ${secret}` };
async function call(method) {
  const response = await fetch(endpoint, {
    method, headers, redirect: 'error', signal: AbortSignal.timeout(60000),
  });
  if (!response.ok) throw new Error(`Outbox ${method} failed: HTTP ${response.status}`);
  return response.json();
}
const delivery = await call('POST');
const queue = await call('GET');
for (const value of [delivery.sent, delivery.pending, queue.pending, queue.oldest_seconds, queue.max_attempts]) {
  if (!Number.isSafeInteger(value) || value < 0) throw new Error('Invalid outbox response');
}
console.log(`Sent: ${delivery.sent}; pending: ${queue.pending}; oldest: ${queue.oldest_seconds}s; attempts: ${queue.max_attempts}`);
if (queue.pending > 0 && queue.oldest_seconds > 900) throw new Error('Pending mail is older than 15 minutes');
