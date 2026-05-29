import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { betaSignupSchema } from '@/lib/validation';
import { getDb } from '@/lib/db';
import { betaSignupRatelimit } from '@/lib/ratelimit';

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
  if (betaSignupRatelimit) {
    const { success } = await betaSignupRatelimit.limit(ip);
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

  const parsed = betaSignupSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation error.', issues: parsed.error.issues }, { status: 422 });
  }

  // Turnstile bot verification — enforced only when secret key is configured.
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

  const { email, fullName, country, flightFrequency, useCase, homeAirport, updatesOptIn, termsAccepted, privacyAccepted, locale, referralCode } = parsed.data;
  const fromEmail = 'noreply@cojauny.com';
  const toEmail = process.env.BETA_TO_EMAIL;
  const segmentId = process.env.RESEND_SEGMENT_BETA;

  // Persist to Neon if configured — trigger auto-creates referral_stats row
  const db = getDb();
  let referralLink = '';
  if (db) {
    try {
      const ipAddress = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null;
      const userAgent = req.headers.get('user-agent') ?? null;
      const inserted = await db`
        INSERT INTO waitlist (
          email, full_name, use_case, country, flight_frequency, home_airport,
          updates_opt_in, terms_accepted, privacy_accepted, locale,
          referral_code_used, ip_address, user_agent
        ) VALUES (
          ${email}, ${fullName}, ${useCase ?? null}, ${country ?? 'es'}, ${flightFrequency ?? 'once'}, ${homeAirport ?? null},
          ${updatesOptIn ?? false}, ${termsAccepted}, ${privacyAccepted}, ${locale},
          ${referralCode ?? null}, ${ipAddress}::inet, ${userAgent}
        )
        ON CONFLICT ((lower(email))) DO NOTHING
        RETURNING id
      ` as Array<{ id: string }>;

      // If new row, increment referrer counter and fetch the new referral link
      if (inserted.length > 0) {
        if (referralCode) {
          try {
            await db`
              UPDATE referral_stats
                 SET signups = signups + 1, updated_at = now()
               WHERE referral_code = ${referralCode}
            `;
          } catch (err) {
            console.error('[beta-signups] referrer increment error:', err);
          }
        }
        const stats = await db`
          SELECT referral_link FROM referral_stats WHERE waitlist_id = ${inserted[0].id}
        ` as Array<{ referral_link: string }>;
        referralLink = stats[0]?.referral_link ?? '';
      }
    } catch (err) {
      console.error('[beta-signups] DB insert error:', err);
    }
  }

  // Add to Resend Contacts (beta-waitlist segment) if configured
  if (segmentId) {
    try {
      await getResend().contacts.create({
        email,
        firstName: fullName.split(' ')[0] ?? fullName,
        lastName: fullName.split(' ').slice(1).join(' ') || undefined,
        unsubscribed: false,
        segments: [{ id: segmentId }],
      });
    } catch (err) {
      console.error('[beta-signups] Resend contacts error:', err);
      // Non-fatal: continue to send confirmation email
    }
  }

  // Send confirmation email to user
  try {
    await getResend().emails.send({
      from: fromEmail,
      to: email,
      subject: '¡Estás en la lista de espera de Cojauny! 🎉',
      text: `Hola ${fullName},\n\nGracias por apuntarte a la lista de espera beta de Cojauny.\n\nTe avisaremos en cuanto tengamos acceso disponible.\n\n— El equipo de Cojauny`,
    });
  } catch (err) {
    console.error('[beta-signups] confirmation email error:', err);
  }

  // Notify admin
  if (toEmail) {
    try {
      await getResend().emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `[Cojauny Beta] Nueva solicitud — ${fullName}`,
        text: `Nueva solicitud beta\n\nNombre: ${fullName}\nEmail: ${email}\nPaís: ${country ?? 'N/A'}\nFrecuencia: ${flightFrequency ?? 'N/A'}\nUso: ${useCase ?? 'N/A'}`,
      });
    } catch (err) {
      console.error('[beta-signups] admin notification error:', err);
    }
  }

  return NextResponse.json({ success: true, confirmationToken: '', referralLink });
}
