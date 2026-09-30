/** @jest-environment node */
import { PGlite } from '@electric-sql/pglite';
import { readFileSync } from 'node:fs';
import { NextRequest } from 'next/server';
import { POST } from '../src/app/api/beta-signups/route';
import { getDb } from '@/lib/db';

jest.mock('@/lib/db', () => ({ getDb: jest.fn() }));
jest.mock('@/lib/verify-bot', () => ({ verifyBot: jest.fn().mockResolvedValue('ok') }));
jest.mock('@/lib/ratelimit', () => ({ betaSignupRatelimit: { limit: jest.fn().mockResolvedValue({ success: true }) } }));
jest.mock('@/lib/mail-outbox', () => ({ drainMailOutbox: jest.fn() }));
jest.mock('next/server', () => ({ ...jest.requireActual('next/server'), after: jest.fn() }));

jest.setTimeout(60000);
let pg: PGlite;
const request = (email: string, referralCode?: string) => new NextRequest('https://cojauny.com/api/beta-signups', {
  method: 'POST', body: JSON.stringify({ email, referralCode, locale: 'es', termsAccepted: true, privacyAccepted: true }),
});

beforeAll(async () => {
  process.env.RESEND_API_KEY = 'test-key';
  process.env.BETA_TO_EMAIL = 'team@example.org';
  process.env.REFERRAL_SESSION_SECRET = 'test-only-secret-with-at-least-32-characters';
  pg = new PGlite();
  await pg.exec(readFileSync('schema.sql', 'utf8'));
  await pg.exec(readFileSync('database/migrations/20260930-mail-outbox.sql', 'utf8'));
  const sql = async (strings: TemplateStringsArray, ...values: unknown[]) => {
    const query = strings.reduce((text, part, index) => text + (index ? `$${index}` : '') + part, '');
    return (await pg.query(query, values)).rows;
  };
  jest.mocked(getDb).mockReturnValue(sql as unknown as NonNullable<ReturnType<typeof getDb>>);
});
afterAll(async () => { await pg?.close(); });

it('commits a registration, referral trigger and two queued notifications together', async () => {
  const response = await POST(request('owner@example.org'));
  expect(response.status).toBe(200);
  expect((await response.json()).referralLink).toContain('?ref=');
  expect((await pg.query('SELECT * FROM waitlist')).rows).toHaveLength(1);
  expect((await pg.query('SELECT * FROM referral_stats')).rows).toHaveLength(1);
  expect((await pg.query('SELECT * FROM mail_outbox')).rows).toHaveLength(2);
});

it('counts a referred signup once and queues no extra messages for a duplicate', async () => {
  const stats = await pg.query<{ referral_code: string }>('SELECT referral_code FROM referral_stats LIMIT 1');
  const code = stats.rows[0].referral_code;
  expect((await POST(request('friend@example.org', code))).status).toBe(200);
  expect((await (await POST(request('FRIEND@example.org', code))).json()).duplicate).toBe(true);
  expect((await pg.query<{ signups: number }>('SELECT signups FROM referral_stats WHERE referral_code = $1', [code])).rows[0].signups).toBe(1);
  expect((await pg.query('SELECT * FROM mail_outbox')).rows).toHaveLength(4);
});

it('rolls back the registration and its referral if the outbox is unavailable', async () => {
  await pg.exec('ALTER TABLE mail_outbox RENAME TO temporarily_unavailable');
  expect((await POST(request('rollback@example.org'))).status).toBe(503);
  expect((await pg.query('SELECT * FROM waitlist WHERE email = $1', ['rollback@example.org'])).rows).toHaveLength(0);
  await pg.exec('ALTER TABLE temporarily_unavailable RENAME TO mail_outbox');
});

it('can apply the migration again without losing queued mail', async () => {
  await pg.exec(readFileSync('database/migrations/20260930-mail-outbox.sql', 'utf8'));
  expect((await pg.query('SELECT * FROM mail_outbox')).rows).toHaveLength(4);
});

it('removes queued notification copies when processing erasure', async () => {
  await pg.query('SELECT anonymize_user_data($1)', ['friend@example.org']);
  expect((await pg.query('SELECT * FROM waitlist WHERE lower(email) = $1', ['friend@example.org'])).rows).toHaveLength(0);
  expect((await pg.query('SELECT * FROM mail_outbox')).rows).toHaveLength(2);
});
