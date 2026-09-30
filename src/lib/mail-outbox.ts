import { Resend } from 'resend';
import { getDb } from './db';

type Mail = { from: string; to: string; subject: string; html: string; replyTo?: string };

export async function drainMailOutbox(): Promise<{ sent: number; pending: number }> {
  const db = getDb();
  if (!db || !process.env.RESEND_API_KEY) throw new Error('Mail delivery unavailable');
  const rows = await db`
    WITH candidates AS (
      SELECT id FROM mail_outbox WHERE sent_at IS NULL AND next_attempt_at <= now()
      ORDER BY created_at LIMIT 20 FOR UPDATE SKIP LOCKED
    )
    UPDATE mail_outbox m SET next_attempt_at = now() + interval '5 minutes', attempts = attempts + 1
    FROM candidates c WHERE m.id = c.id RETURNING m.id, m.payload
  ` as Array<{ id: string; payload: Mail }>;
  let sent = 0;
  const resend = new Resend(process.env.RESEND_API_KEY);
  for (const row of rows) {
    try {
      const result = await resend.emails.send(row.payload, { idempotencyKey: row.id });
      if (result.error) throw new Error('Delivery rejected');
      await db`UPDATE mail_outbox SET sent_at = now() WHERE id = ${row.id}`;
      sent++;
    } catch { console.error('[mail-outbox] delivery pending'); }
  }
  return { sent, pending: rows.length - sent };
}
