import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/validation';
import { getDb } from '@/lib/db';

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

// Simple in-memory rate limiter (per process)
const rateMap = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_REQ = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const ts = (rateMap.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (ts.length >= MAX_REQ) return true;
  ts.push(now);
  rateMap.set(ip, ts);
  return false;
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return NextResponse.json({ error: 'Forbidden.' }, { status: 403 });
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Try again later.' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation error.', issues: parsed.error.issues }, { status: 422 });
  }

  const { name, email, topic, message, locale } = parsed.data;

  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = 'noreply@cojauny.com';

  if (!toEmail) {
    console.error('[contact] CONTACT_TO_EMAIL env var not set');
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 503 });
  }

  // Persist to Neon if configured (logged as feedback rows with usecase='contact')
  const db = getDb();
  if (db) {
    try {
      const ipAddress = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null;
      const userAgent = req.headers.get('user-agent') ?? null;
      await db`
        INSERT INTO feedback (email, name, message, usecase, topic, locale, ip_address, user_agent)
        VALUES (${email}, ${name}, ${message}, 'contact', ${topic}, ${locale}, ${ipAddress}::inet, ${userAgent})
      `;
    } catch (err) {
      console.error('[contact] DB insert error:', err);
    }
  }

  try {
    await getResend().emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `[Cojauny Contact] ${topic} — from ${name}`,
      text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`,
    });
  } catch (err) {
    console.error('[contact] Resend error:', err);
    return NextResponse.json({ error: 'Failed to send message. Try again later.' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
