import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { REFERRAL_COOKIE, verifyReferralSession } from '@/lib/referral-session';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  const ownerId = verifyReferralSession(req.cookies.get(REFERRAL_COOKIE)?.value);
  if (!ownerId) return NextResponse.json({ error: 'Authentication required' }, { status: 401, headers: { 'Cache-Control': 'no-store' } });

  const db = getDb();
  if (!db) {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }

  try {
    const stats = (await db`
      SELECT rs.referral_code, rs.referral_link, rs.visits, rs.signups
        FROM waitlist w
        JOIN referral_stats rs ON rs.waitlist_id = w.id
       WHERE w.id = ${ownerId}::uuid
       LIMIT 1
    `) as Array<{ referral_code: string; referral_link: string; visits: number; signups: number }>;

    if (stats.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: stats }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (err) {
    console.error('[referral/stats] DB error:', err);
    return NextResponse.json({ error: 'Failed to fetch referral stats' }, { status: 500 });
  }
}
