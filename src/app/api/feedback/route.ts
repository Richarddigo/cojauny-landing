import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { feedbackSchema } from '@/lib/validation';
import { getDb } from '@/lib/db';
import { feedbackRatelimit } from '@/lib/ratelimit';
import {
  buildFeedbackAdminEmail,
  buildFeedbackUserEmail,
  sanitizeHeader,
} from '@/lib/email';

export const runtime = 'nodejs';

let _resend: Resend | null = null;
const getResend = () => (_resend ??= new Resend(process.env.RESEND_API_KEY!));

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

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (feedbackRatelimit) {
    const { success } = await feedbackRatelimit.limit(ip);
    if (!success) {
      return NextResponse.json({ error: 'Too many requests. Try again later.' }, { status: 429 });
    }
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = feedbackSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation error.', issues: parsed.error.issues }, { status: 422 });
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const token = parsed.data.cfTurnstileResponse;
    if (!token) {
      return NextResponse.json({ error: 'Bot verification required.' }, { status: 400 });
    }
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret: turnstileSecret, response: token, remoteip: ip }),
    });
    const verifyData = await verifyRes.json() as { success: boolean };
    if (!verifyData.success) {
      return NextResponse.json({ error: 'Bot verification failed. Please try again.' }, { status: 400 });
    }
  }

  const { name, email, message, usecase, locale } = parsed.data;
  const fromEmail = 'Cojauny <noreply@cojauny.com>';
  const toEmail = process.env.FEEDBACK_TO_EMAIL;
  const segmentId = process.env.RESEND_SEGMENT_FEEDBACK;

  const db = getDb();
  if (db) {
    try {
      const ipAddress = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null;
      const userAgent = req.headers.get('user-agent') ?? null;
      await db`
        INSERT INTO feedback (email, name, message, usecase, locale, ip_address, user_agent)
        VALUES (${email}, ${name}, ${message}, ${usecase}, ${locale}, ${ipAddress}::inet, ${userAgent})
      `;
    } catch (err) {
      console.error('[feedback] DB insert error:', err);
    }
  }

  if (!toEmail) {
    console.error('[feedback] FEEDBACK_TO_EMAIL env var not set');
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 503 });
  }

  const adminEmail = buildFeedbackAdminEmail({ name, email, message, usecase, locale });
  try {
    await getResend().emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: sanitizeHeader(email),
      subject: sanitizeHeader(adminEmail.subject),
      html: adminEmail.html,
    });
  } catch (err) {
    console.error('[feedback] Resend error:', err);
    return NextResponse.json({ error: 'Failed to submit feedback. Try again later.' }, { status: 502 });
  }

  const userEmail = buildFeedbackUserEmail(name, locale);
  try {
    await getResend().emails.send({
      from: fromEmail,
      to: email,
      subject: sanitizeHeader(userEmail.subject),
      html: userEmail.html,
    });
  } catch (err) {
    console.error('[feedback] user confirmation email error:', err);
  }

  if (segmentId) {
    try {
      await getResend().contacts.create({
        email,
        firstName: name.split(' ')[0] ?? name,
        lastName: name.split(' ').slice(1).join(' ') || undefined,
        unsubscribed: false,
        segments: [{ id: segmentId }],
      });
    } catch (err) {
      console.error('[feedback] Resend contacts error:', err);
    }
  }

  return NextResponse.json({ success: true });
}
