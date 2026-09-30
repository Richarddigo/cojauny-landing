import { createHmac, timingSafeEqual } from 'node:crypto';

export const REFERRAL_COOKIE = 'cojauny_referral_session';
const maxAge = 30 * 24 * 60 * 60;
export const referralCookieOptions = { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict' as const, path: '/', maxAge };

function secret(): string {
  const value = process.env.REFERRAL_SESSION_SECRET;
  if (!value || value.length < 32) throw new Error('Referral session secret is unavailable');
  return value;
}

export function createReferralSession(id: string): string {
  const payload = Buffer.from(JSON.stringify({ id, expires: Date.now() + maxAge * 1000 })).toString('base64url');
  return `${payload}.${createHmac('sha256', secret()).update(payload).digest('base64url')}`;
}

export function verifyReferralSession(token?: string): string | null {
  if (!token || token.length > 1024) return null;
  try {
    const [payload, signature, extra] = token.split('.');
    if (!payload || !signature || extra) return null;
    const expected = createHmac('sha256', secret()).update(payload).digest();
    const supplied = Buffer.from(signature, 'base64url');
    if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) return null;
    const parsed = JSON.parse(Buffer.from(payload, 'base64url').toString());
    return typeof parsed.id === 'string' && /^[0-9a-f-]{36}$/i.test(parsed.id) && Number.isFinite(parsed.expires) && parsed.expires > Date.now() ? parsed.id : null;
  } catch { return null; }
}
