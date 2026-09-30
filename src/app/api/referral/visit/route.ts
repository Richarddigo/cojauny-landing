import { readRequestJson, RequestBodyError } from '@/lib/request-body';
import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { referralRatelimit } from '@/lib/ratelimit';

export const runtime = 'nodejs';

const ALLOWED_ORIGINS = new Set([
  'https://cojauny.com',
  'https://www.cojauny.com',
  'https://cojauny-landing.vercel.app',
  ...(process.env.SUBMISSION_ALLOWED_ORIGINS ?? '').split(',').map(value => value.trim()).filter(value => /^https:\/\//.test(value)),
  ...(process.env.NODE_ENV !== 'production'
    ? ['http://localhost:3000', 'http://127.0.0.1:3000']
    : []),
]);

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return NextResponse.json({ error: 'Forbidden.' }, { status: 403 });
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (!referralRatelimit && process.env.NODE_ENV === 'production') return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  try {
    if (referralRatelimit && !(await referralRatelimit.limit(ip)).success) return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  } catch { return NextResponse.json({ error: 'Service unavailable' }, { status: 503 }); }

  let body: { referralCode?: string };
  try {
    body = await readRequestJson(req) as { referralCode?: string };
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: error instanceof RequestBodyError ? error.status : 400 });
  }

  const referralCode = typeof body?.referralCode === 'string' ? body.referralCode.trim() : '';
  if (!/^[A-Za-z0-9]{1,32}$/.test(referralCode)) {
    return NextResponse.json({ error: 'referralCode is required' }, { status: 400 });
  }

  const db = getDb();
  if (!db) {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }

  try {
    const result = (await db`SELECT increment_referral_visits(${referralCode}) AS r`) as Array<{
      r: { error?: string; success?: boolean; visits?: number; signups?: number };
    }>;
    const payload = result[0]?.r;
    if (payload?.error) {
      return NextResponse.json({ error: payload.error }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[referral/visit] DB error:', err);
    return NextResponse.json({ error: 'Failed to track visit' }, { status: 500 });
  }
}
