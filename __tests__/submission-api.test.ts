/** @jest-environment node */
import { NextRequest } from 'next/server';
import { POST } from '../src/app/api/beta-signups/route';
import { GET } from '../src/app/api/referral/stats/route';
import { getDb } from '@/lib/db';
import { verifyBot } from '@/lib/verify-bot';
import { createReferralSession, REFERRAL_COOKIE } from '@/lib/referral-session';

jest.mock('@/lib/db', () => ({ getDb: jest.fn() }));
jest.mock('@/lib/verify-bot', () => ({ verifyBot: jest.fn() }));
jest.mock('@/lib/ratelimit', () => ({ betaSignupRatelimit: { limit: jest.fn().mockResolvedValue({ success: true }) } }));
jest.mock('@/lib/mail-outbox', () => ({ drainMailOutbox: jest.fn().mockResolvedValue({ sent: 0, pending: 0 }) }));
jest.mock('next/server', () => ({ ...jest.requireActual('next/server'), after: jest.fn() }));

const owner = '08b42a36-0216-4f06-a237-c022241e59f9';
const payload = { email: 'test@example.org', locale: 'es', termsAccepted: true, privacyAccepted: true };
const request = () => new NextRequest('https://cojauny.com/api/beta-signups', { method: 'POST', body: JSON.stringify(payload), headers: { origin: 'https://cojauny.com' } });

describe('durable signup and private referral statistics', () => {
  beforeEach(() => {
    process.env.RESEND_API_KEY = 'test-key';
    process.env.REFERRAL_SESSION_SECRET = 'test-only-secret-with-at-least-32-characters';
    jest.mocked(verifyBot).mockResolvedValue('ok');
  });
  it('returns 503 when durable storage is not configured', async () => {
    jest.mocked(getDb).mockReturnValue(null);
    expect((await POST(request())).status).toBe(503);
  });
  it('never acknowledges a failed transaction', async () => {
    jest.mocked(getDb).mockReturnValue(jest.fn().mockRejectedValue(new Error('database unavailable')) as unknown as NonNullable<ReturnType<typeof getDb>>);
    const response = await POST(request());
    expect(response.status).toBe(503);
    expect((await response.json()).success).toBeUndefined();
  });
  it('sets an HttpOnly session for a newly stored registration', async () => {
    const db = jest.fn().mockResolvedValueOnce([{ id: owner }]).mockResolvedValueOnce([{ referral_link: 'https://cojauny.com/?ref=TEST1234' }]);
    jest.mocked(getDb).mockReturnValue(db as unknown as NonNullable<ReturnType<typeof getDb>>);
    const response = await POST(request());
    expect(response.status).toBe(200);
    expect(response.headers.get('set-cookie')).toContain('HttpOnly');
    expect((await response.json()).referralLink).toContain('TEST1234');
    expect(db.mock.calls[0][0].join(' ')).toContain('INSERT INTO mail_outbox');
  });
  it('does not disclose an existing user’s link or mint an owner session from their email', async () => {
    jest.mocked(getDb).mockReturnValue(jest.fn().mockResolvedValue([]) as unknown as NonNullable<ReturnType<typeof getDb>>);
    const response = await POST(request());
    expect(response.headers.get('set-cookie')).toBeNull();
    expect(await response.json()).toMatchObject({ duplicate: true, referralLink: '' });
  });
  it('rejects an email-only statistics lookup', async () => {
    const response = await GET(new NextRequest('https://cojauny.com/api/referral/stats?email=test@example.org'));
    expect(response.status).toBe(401);
  });
  it('queries only the signed owner and prevents caching', async () => {
    const db = jest.fn().mockResolvedValue([{ referral_code: 'TEST1234', visits: 2, signups: 1 }]);
    jest.mocked(getDb).mockReturnValue(db as unknown as NonNullable<ReturnType<typeof getDb>>);
    const response = await GET(new NextRequest('https://cojauny.com/api/referral/stats?email=someone-else@example.org', { headers: { cookie: `${REFERRAL_COOKIE}=${createReferralSession(owner)}` } }));
    expect(response.status).toBe(200);
    expect(response.headers.get('cache-control')).toBe('no-store');
    expect(db.mock.calls[0]).toContain(owner);
  });
});
