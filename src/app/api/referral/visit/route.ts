import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export const runtime = 'nodejs';

const ALLOWED_ORIGINS = new Set([
  'https://cojauny.com',
  'https://www.cojauny.com',
  'https://cojauny-landing.vercel.app',
  ...(process.env.NODE_ENV !== 'production'
    ? ['http://localhost:3000', 'http://127.0.0.1:3000']
    : []),
]);

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return NextResponse.json({ error: 'Forbidden.' }, { status: 403 });
  }

  let body: { referralCode?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const referralCode = body.referralCode?.trim();
  if (!referralCode) {
    return NextResponse.json({ error: 'referralCode is required' }, { status: 400 });
  }

  const db = getDb();
  if (!db) {
    return NextResponse.json({ success: true });
  }

  try {
    const result = (await db`SELECT increment_referral_visits(${referralCode}) AS r`) as Array<{
      r: { error?: string; success?: boolean; visits?: number; signups?: number };
    }>;
    const payload = result[0]?.r;
    if (payload?.error) {
      return NextResponse.json({ error: payload.error }, { status: 404 });
    }
    return NextResponse.json({ success: true, ...payload });
  } catch (err) {
    console.error('[referral/visit] DB error:', err);
    return NextResponse.json({ error: 'Failed to track visit' }, { status: 500 });
  }
}
