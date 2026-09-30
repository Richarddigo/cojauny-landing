// Presence checks only: never print secret values. Run against the deployment environment.
const groups = [
  ['database', ['DATABASE_URL', 'POSTGRES_URL']],
  ['mail delivery', ['RESEND_API_KEY']],
  ['feedback destination', ['FEEDBACK_TO_EMAIL']],
  ['rate limiting URL', ['UPSTASH_REDIS_REST_URL']],
  ['rate limiting token', ['UPSTASH_REDIS_REST_TOKEN']],
  ['bot verification', ['TURNSTILE_SECRET_KEY']],
  ['browser challenge', ['NEXT_PUBLIC_TURNSTILE_SITE_KEY']],
  ['owner session signing', ['REFERRAL_SESSION_SECRET']],
  ['outbox retry authorization', ['MAIL_OUTBOX_SECRET']],
];
let failures = 0;
for (const [label, keys] of groups) {
  const configured = keys.some(key => Boolean(process.env[key]?.trim()));
  console.log(`${configured ? 'OK' : 'MISSING'}: ${label}`);
  if (!configured) failures++;
}
for (const key of ['REFERRAL_SESSION_SECRET', 'MAIL_OUTBOX_SECRET']) {
  if (process.env[key] && process.env[key].length < 32) { console.error(`INVALID: ${key} must contain at least 32 characters`); failures++; }
}
console.log('Also required: apply the SQL migration, schedule authenticated outbox retries, and verify sender DNS and a test submission.');
process.exitCode = failures ? 1 : 0;
