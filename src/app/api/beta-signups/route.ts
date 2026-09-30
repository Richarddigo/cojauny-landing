import { readRequestJson, RequestBodyError } from '@/lib/request-body';
import { randomUUID } from 'node:crypto';
import { verifyBot } from '@/lib/verify-bot';
import { drainMailOutbox } from '@/lib/mail-outbox';
import { NextRequest, NextResponse, after } from 'next/server';
import { REFERRAL_COOKIE, createReferralSession, referralCookieOptions } from '@/lib/referral-session';
import { Resend } from 'resend';
import { betaSignupSchema } from '@/lib/validation';
import { getDb } from '@/lib/db';
import { betaSignupRatelimit } from '@/lib/ratelimit';
import { buildBetaAdminEmail, buildBetaUserEmail, sanitizeHeader } from '@/lib/email';

export const runtime = 'nodejs';

let _resend: Resend | null = null;
const getResend = () => (_resend ??= new Resend(process.env.RESEND_API_KEY!));

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
  if (!betaSignupRatelimit && process.env.NODE_ENV === 'production') return NextResponse.json({ error: 'Service unavailable.' }, { status: 503 });
  try {
    if (betaSignupRatelimit && !(await betaSignupRatelimit.limit(ip)).success) return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });
  } catch { return NextResponse.json({ error: 'Service unavailable.' }, { status: 503 }); }

  let body: unknown;
  try {
    body = await readRequestJson(req);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: error instanceof RequestBodyError ? error.status : 400 });
  }

  const parsed = betaSignupSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation error.', issues: parsed.error.issues }, { status: 422 });
  }

  const bot = await verifyBot(parsed.data.cfTurnstileResponse, ip);
  if (bot !== 'ok') return NextResponse.json({ error: bot === 'invalid' ? 'Bot verification failed.' : 'Service unavailable.' }, { status: bot === 'invalid' ? 400 : 503 });

  const {
    email,
    fullName: rawFullName,
    country,
    flightFrequency,
    useCase,
    homeAirport,
    updatesOptIn,
    termsAccepted,
    privacyAccepted,
    locale,
    referralCode,
  } = parsed.data;
  const fullName =
    rawFullName && rawFullName.trim().length >= 3
      ? rawFullName.trim()
      : email.split('@')[0] || 'Beta user';
  const fromEmail = 'Cojauny <noreply@cojauny.com>';
  const toEmail = process.env.BETA_TO_EMAIL;
  const segmentId = process.env.RESEND_SEGMENT_BETA;

  const db = getDb();
  if (!db || !process.env.RESEND_API_KEY || !process.env.REFERRAL_SESSION_SECRET || process.env.REFERRAL_SESSION_SECRET.length < 32) {
    return NextResponse.json({ error: 'Service unavailable.' }, { status: 503 });
  }
  const proposedId = randomUUID();
  let ownerId = '';
  let referralLink = '';
  let isDuplicate = false;
  const userEmail = buildBetaUserEmail(fullName, locale);
  const adminEmail = buildBetaAdminEmail({ fullName, email, country, flightFrequency, useCase, locale });
  const userMail = JSON.stringify({ from: fromEmail, to: email, subject: sanitizeHeader(userEmail.subject), html: userEmail.html });
  const adminMail = JSON.stringify({ from: fromEmail, to: toEmail, subject: sanitizeHeader(adminEmail.subject), html: adminEmail.html });
  try {
    // Registration, attribution and notifications commit together. A failed queue write rolls back the signup.
    const inserted = await db`
      WITH registered AS (
        INSERT INTO waitlist (id, email, full_name, use_case, country, flight_frequency, home_airport,
          updates_opt_in, terms_accepted, privacy_accepted, locale, referral_code_used)
        VALUES (${proposedId}::uuid, ${email}, ${fullName}, ${useCase ?? null}, ${country ?? 'es'},
          ${flightFrequency ?? 'once'}, ${homeAirport ?? null}, ${updatesOptIn ?? false},
          ${termsAccepted}, ${privacyAccepted}, ${locale}, ${referralCode ?? null})
        ON CONFLICT ((lower(email))) DO NOTHING RETURNING id
      ), attribution AS (
        UPDATE referral_stats SET signups = signups + 1, updated_at = now()
        WHERE referral_code = ${referralCode ?? null} AND EXISTS (SELECT 1 FROM registered)
        RETURNING waitlist_id
      ), user_notification AS (
        INSERT INTO mail_outbox (id, payload)
        SELECT 'beta-user-' || id::text, ${userMail}::jsonb FROM registered RETURNING id
      ), admin_notification AS (
        INSERT INTO mail_outbox (id, payload)
        SELECT 'beta-admin-' || id::text, ${adminMail}::jsonb FROM registered
        WHERE ${Boolean(toEmail)} RETURNING id
      ) SELECT id FROM registered
    ` as Array<{ id: string }>;
    isDuplicate = inserted.length === 0;
    ownerId = inserted[0]?.id ?? '';
  } catch {
    console.error('[beta-signups] transaction failed');
    return NextResponse.json({ error: 'Service unavailable.' }, { status: 503 });
  }
  if (ownerId) {
    try {
      const stats = await db`SELECT referral_link FROM referral_stats WHERE waitlist_id = ${ownerId}::uuid` as Array<{ referral_link: string }>;
      referralLink = stats[0]?.referral_link ?? '';
    } catch { console.error('[beta-signups] referral display unavailable'); }
  }

  if (segmentId && updatesOptIn === true && !isDuplicate) {
    try {
      await getResend().contacts.create({
        email,
        firstName: fullName.split(' ')[0] ?? fullName,
        lastName: fullName.split(' ').slice(1).join(' ') || undefined,
        unsubscribed: false,
        segments: [{ id: segmentId }],
      });
    } catch (err) {
      console.error('[beta-signups] subscription pending', err instanceof Error ? err.name : 'unknown');
    }
  }

  after(() => drainMailOutbox().then(() => {}).catch(() => console.error('[beta-signups] delivery pending')));

  const response = NextResponse.json({
    success: true,
    duplicate: isDuplicate,
    ...(isDuplicate ? { errorCode: 'beta_duplicate_email' } : {}),
    confirmationToken: '',
    referralLink,
  });
  if (ownerId) response.cookies.set(REFERRAL_COOKIE, createReferralSession(ownerId), referralCookieOptions);
  response.headers.set('Cache-Control', 'no-store');
  return response;
}
