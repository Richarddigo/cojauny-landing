import { readRequestJson, RequestBodyError } from '@/lib/request-body';
import { verifyBot } from '@/lib/verify-bot';
import { NextRequest, NextResponse, after } from 'next/server';
import { drainMailOutbox } from '@/lib/mail-outbox';
import { feedbackSchema } from '@/lib/validation';
import { getDb } from '@/lib/db';
import { feedbackRatelimit } from '@/lib/ratelimit';
import {
  buildFeedbackAdminEmail,
  buildFeedbackUserEmail,
  sanitizeHeader,
} from '@/lib/email';

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
  if (!feedbackRatelimit && process.env.NODE_ENV === 'production') return NextResponse.json({ error: 'Service unavailable.' }, { status: 503 });
  try {
    if (feedbackRatelimit && !(await feedbackRatelimit.limit(ip)).success) return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });
  } catch { return NextResponse.json({ error: 'Service unavailable.' }, { status: 503 }); }

  let body: unknown;
  try {
    body = await readRequestJson(req);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: error instanceof RequestBodyError ? error.status : 400 });
  }

  const parsed = feedbackSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation error.', issues: parsed.error.issues }, { status: 422 });
  }

  const bot = await verifyBot(parsed.data.cfTurnstileResponse, ip);
  if (bot !== 'ok') return NextResponse.json({ error: bot === 'invalid' ? 'Bot verification failed.' : 'Service unavailable.' }, { status: bot === 'invalid' ? 400 : 503 });

  const { name, email, message, usecase, locale } = parsed.data;
  const fromEmail = 'Cojauny <noreply@cojauny.com>';
  const toEmail = process.env.FEEDBACK_TO_EMAIL;


  const db = getDb();
  if (!db || !toEmail || !process.env.RESEND_API_KEY) return NextResponse.json({ error: 'Service unavailable.' }, { status: 503 });
  try {
    const adminEmail = buildFeedbackAdminEmail({ name, email, message, usecase, locale });
    const userEmail = buildFeedbackUserEmail(name, locale);
    const adminMail = JSON.stringify({ from: fromEmail, to: toEmail, replyTo: sanitizeHeader(email), subject: sanitizeHeader(adminEmail.subject), html: adminEmail.html });
    const userMail = JSON.stringify({ from: fromEmail, to: email, subject: sanitizeHeader(userEmail.subject), html: userEmail.html });
    await db`
      WITH saved AS (
        INSERT INTO feedback (email, name, message, usecase, locale)
        VALUES (${email}, ${name}, ${message}, ${usecase}, ${locale}) RETURNING id
      ), admin_notification AS (
        INSERT INTO mail_outbox (id, payload)
        SELECT 'feedback-admin-' || id::text, ${adminMail}::jsonb FROM saved RETURNING id
      ) INSERT INTO mail_outbox (id, payload)
        SELECT 'feedback-user-' || id::text, ${userMail}::jsonb FROM saved
    `;
  } catch {
    console.error('[feedback] transaction failed');
    return NextResponse.json({ error: 'Service unavailable.' }, { status: 503 });
  }
  after(() => drainMailOutbox().then(() => {}).catch(() => console.error('[feedback] delivery pending')));
  return NextResponse.json({ success: true });
}
