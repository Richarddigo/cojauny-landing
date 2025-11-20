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
  data.useCase = data.useCase.trim();
  const normalizedHomeAirport = data.homeAirport?.trim();
  data.homeAirport = normalizedHomeAirport && normalizedHomeAirport.length > 0 ? normalizedHomeAirport : undefined;
  const normalizedJoinReason = data.joinReason?.trim();
  data.joinReason = normalizedJoinReason && normalizedJoinReason.length > 0 ? normalizedJoinReason : undefined;

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

  const insertResult = await supabase
    .from(WAITLIST_TABLE)
    .insert({
      email: data.email,
      name: data.fullName,
      use_case: data.useCase,
      country: data.country,
      flight_frequency: data.flightFrequency,
      home_airport: data.homeAirport ?? null,
      join_reason: data.joinReason ?? null,
      marketing_opt_in: Boolean(data.updatesOptIn),
      beta_tester: true,
      terms_accepted: data.termsAccepted,
      privacy_accepted: data.privacyAccepted,
      language: data.locale,
      confirmation_token: confirmationToken,
      ip_address: ipAddress,
      user_agent: request.headers.get('user-agent') ?? ''
    })
    .select()
    .single();

  if (insertResult.error) {
    console.error('Error insertando beta signup', insertResult.error);
    return NextResponse.json({ error: 'No se pudo guardar tu registro' }, { status: 500 });
  }

  try {
    await triggerEdgeEmailFunction({
      email: data.email,
      template: 'beta-confirmation',
      locale: data.locale,
      variables: {
        name: data.fullName,
        confirmation_token: confirmationToken
      }
    });
  } catch (error) {
    console.error('Error invocando función de email', error);
  }

  return NextResponse.json(
    {
      success: true,
      id: insertResult.data.id,
      confirmationToken
    },
    { status: 201 }
  );
}
