import { getDb } from '@/lib/db';
import { timingSafeEqual } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { drainMailOutbox } from '@/lib/mail-outbox';
export const runtime = 'nodejs';
function authorized(req: NextRequest): boolean {
  const secret = process.env.MAIL_OUTBOX_SECRET;
  const provided = req.headers.get('authorization') ?? '';
  const expected = `Bearer ${secret}`;
  return !!secret && secret.length >= 32 && Buffer.byteLength(provided) === Buffer.byteLength(expected) && timingSafeEqual(Buffer.from(provided), Buffer.from(expected));
}
export async function POST(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try { return NextResponse.json(await drainMailOutbox(), { headers: { 'Cache-Control': 'no-store' } }); }
  catch { return NextResponse.json({ error: 'Service unavailable' }, { status: 503 }); }
}
export async function GET(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const db = getDb();
    if (!db) throw new Error('Unavailable');
    const result = await db`
      SELECT count(*)::int AS pending,
        coalesce(max(extract(epoch from (now() - created_at))), 0)::int AS oldest_seconds,
        coalesce(max(attempts), 0)::int AS max_attempts
      FROM mail_outbox WHERE sent_at IS NULL
    `;
    return NextResponse.json(result[0], { headers: { 'Cache-Control': 'no-store' } });
  } catch { return NextResponse.json({ error: 'Service unavailable' }, { status: 503 }); }
}
