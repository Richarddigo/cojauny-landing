import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email')?.toLowerCase().trim();
  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const db = getDb();
  if (!db) {
    return NextResponse.json({
      referralCode: null,
      referralCount: 0,
      queuePosition: null,
    });
  }

  try {
    const stats = (await db`
      SELECT rs.referral_code, rs.referral_link, rs.visits, rs.signups
        FROM waitlist w
        JOIN referral_stats rs ON rs.waitlist_id = w.id
       WHERE lower(w.email) = ${email}
       LIMIT 1
    `) as Array<{ referral_code: string; referral_link: string; visits: number; signups: number }>;

    if (stats.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: stats });
  } catch (err) {
    console.error('[referral/stats] DB error:', err);
    return NextResponse.json({ error: 'Failed to fetch referral stats' }, { status: 500 });
  }
}
