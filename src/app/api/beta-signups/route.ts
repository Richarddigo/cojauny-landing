import { NextResponse, type NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

import { betaSignupSchema, type BetaSignupInput } from '@/lib/validation';
import { createServiceRoleClient } from '@/lib/supabase';
import { getClientIp, isHuman } from '@/lib/utils';
import { triggerEdgeEmailFunction } from '@/lib/email';

export const runtime = 'edge';

const WINDOW_MINUTES = 10;
const MAX_ATTEMPTS = 3;
const WAITLIST_TABLE = 'waitlist';

export async function POST(request: NextRequest) {
  const payload = await request.json().catch(() => null);
  if (!payload) {
    return NextResponse.json({ error: 'Payload inválido' }, { status: 400 });
  }

  const validation = betaSignupSchema.safeParse(payload);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.issues[0]?.message ?? 'Datos inválidos' },
      { status: 422 }
    );
  }

  const data = validation.data as BetaSignupInput;

  data.email = data.email.trim().toLowerCase();
  data.fullName = data.fullName.trim();
  const normalizedUseCase = data.useCase?.trim();
  data.useCase = normalizedUseCase && normalizedUseCase.length > 0 ? normalizedUseCase : undefined;
  const normalizedHomeAirport = data.homeAirport?.trim();
  data.homeAirport = normalizedHomeAirport && normalizedHomeAirport.length > 0 ? normalizedHomeAirport : undefined;

  if (!isHuman(data.honeypot)) {
    return NextResponse.json({ error: 'Detección de bot' }, { status: 400 });
  }

  const ipAddress = getClientIp(request.headers) ?? '0.0.0.0';
  const supabase = createServiceRoleClient();

  const since = new Date(Date.now() - WINDOW_MINUTES * 60 * 1000).toISOString();

  const recentAttempts = await supabase
    .from(WAITLIST_TABLE)
    .select('id', { count: 'exact', head: true })
    .gte('created_at', since)
    .eq('ip_address', ipAddress);

  if (recentAttempts.error) {
    console.error('Error comprobando rate limit', recentAttempts.error);
    return NextResponse.json({ error: 'No se pudo validar el rate limit' }, { status: 500 });
  }

  if ((recentAttempts.count ?? 0) >= MAX_ATTEMPTS) {
    return NextResponse.json(
      { error: 'Has alcanzado el límite de solicitudes. Inténtalo más tarde.' },
      { status: 429 }
    );
  }

  const confirmationToken = uuidv4();

  const insertPayload = {
    email: data.email,
    name: data.fullName,
    flight_frequency: data.flightFrequency,
    home_airport: data.homeAirport ?? null,
    marketing_opt_in: Boolean(data.updatesOptIn),
    beta_tester: true,
    terms_accepted: data.termsAccepted,
    privacy_accepted: data.privacyAccepted,
    language: data.locale,
    confirmation_token: confirmationToken,
    ip_address: ipAddress,
    user_agent: request.headers.get('user-agent') ?? ''
  } as Record<string, unknown>;

  if (data.useCase) {
    insertPayload.use_case = data.useCase;
  }

  if (data.country) {
    insertPayload.country = data.country;
  }

  const insertResult = await supabase
    .from(WAITLIST_TABLE)
    .insert({
      email: data.email,
      name: data.fullName,
      company: data.company ?? null,
      use_case: data.useCase,
      beta_tester: true,
      terms_accepted: data.termsAccepted,
      language: data.locale,
      confirmation_token: confirmationToken,
      ip_address: ipAddress,
      user_agent: request.headers.get('user-agent') ?? '',
      referral_code_used: data.referralCode ?? null
    })
    .insert(insertPayload)
    .select()
    .single();

  if (insertResult.error) {
    console.error('Error insertando beta signup', insertResult.error);
    if (insertResult.error.code === '23505') {
      return NextResponse.json({ errorCode: 'beta_duplicate_email' }, { status: 409 });
    }
    return NextResponse.json({ error: 'No se pudo guardar tu registro' }, { status: 500 });
  }

  // If user signed up via referral, increment the signup counter
  // Si el usuario se registró vía referral, incrementar el contador de signups
  // Wenn Benutzer über Empfehlung registriert, Anmeldungszähler erhöhen
  // Si l'utilisateur s'est inscrit via parrainage, incrémenter le compteur
  if (data.referralCode) {
    try {
      await supabase.rpc('increment_referral_signups', {
        ref_code: data.referralCode
      });
    } catch (error) {
      console.error('Error incrementing referral signups', error);
    }
  }

  // Fetch referral stats for this new user to include in email
  // Obtener estadísticas de referral para incluir en el email
  // Empfehlungsstatistiken abrufen / Récupérer les stats de parrainage
  let referralLink = '';
  try {
    const { data: referralData, error: referralError } = await supabase
      .from('referral_stats')
      .select('referral_link')
      .eq('user_id', insertResult.data.id)
      .single();

    if (!referralError && referralData) {
      referralLink = referralData.referral_link;
    }
  } catch (error) {
    console.error('Error fetching referral link', error);
  }

  try {
    await triggerEdgeEmailFunction({
      email: data.email,
      template: 'beta-confirmation',
      locale: data.locale,
      variables: {
        name: data.fullName,
        confirmation_token: confirmationToken,
        referral_link: referralLink
      }
    });
  } catch (error: any) {
    console.error('Error invocando función de email', error);
    // Return 502 with error details for easier debugging in dev
    return NextResponse.json(
      { error: 'Error invocando función de email', details: { message: error.message, status: error.status ?? null, body: error.body ?? null } },
      { status: 502 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      id: insertResult.data.id,
      confirmationToken,
      referralLink
    },
    { status: 201 }
  );
}
