import { NextResponse, type NextRequest } from 'next/server';

import { contactSchema, type ContactInput } from '@/lib/validation';
import { createServiceRoleClient } from '@/lib/supabase';
import { getClientIp, isHuman } from '@/lib/utils';
import { triggerEdgeEmailFunction } from '@/lib/email';
import { env } from '@/lib/env';

export const runtime = 'edge';

const WINDOW_MINUTES = 10;
const MAX_ATTEMPTS = 5;
const INTERNAL_CONTACT_EMAIL = 'support@cojauny.com';

/**
 * Generate a unique request ID for tracking and debugging
 */
function generateRequestId(): string {
  return `contact_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

function getLanguageName(locale: string): string {
  const names: Record<string, string> = {
    es: 'Español',
    en: 'English',
    de: 'Deutsch',
    fr: 'Français'
  };
  return names[locale] ?? locale;
}

export async function POST(request: NextRequest) {
  const requestId = generateRequestId();

  try {
    // Parse and validate payload
    const payload = await request.json().catch(() => null);
    if (!payload) {
      return NextResponse.json(
        { error: 'El formato de los datos es inválido. Por favor, inténtalo de nuevo.', requestId },
        { status: 400 }
      );
    }

  // Validate with Zod schema
  const validation = contactSchema.safeParse(payload);
  if (!validation.success) {
    const firstError = validation.error.issues[0];
    return NextResponse.json(
      { error: firstError?.message ?? 'Los datos proporcionados no son válidos.' },
      { status: 422 }
    );
  }

  const data = validation.data as ContactInput;

  // Sanitize input data
  data.email = data.email.trim().toLowerCase();
  data.name = data.name.trim();
  data.message = data.message.trim();
  data.topic = data.topic.trim();

  // Bot detection via honeypot
  if (!isHuman(data.honeypot)) {
    return NextResponse.json(
      { error: 'Tu solicitud no pudo ser procesada. Si crees que esto es un error, contacta a support@cojauny.com.' },
      { status: 403 }
    );
  }

  const ipAddress = getClientIp(request.headers) ?? '0.0.0.0';

  // Initialize Supabase client
  let supabase;
  try {
    supabase = createServiceRoleClient();
  } catch (error) {
    return NextResponse.json(
      { error: 'Error de configuración del servidor. Por favor, inténtalo más tarde.' },
      { status: 500 }
    );
  }

  const since = new Date(Date.now() - WINDOW_MINUTES * 60 * 1000).toISOString();

  // Check rate limit: max 5 requests per 10 minutes per IP
  const recent = await supabase
    .from('feedback')
    .select('id', { count: 'exact', head: true })
    .gte('created_at', since)
    .eq('ip_address', ipAddress);

  if (recent.error) {
    return NextResponse.json(
      { error: 'No se pudo verificar el límite de envíos. Por favor, inténtalo de nuevo.', requestId },
      { status: 500 }
    );
  }

  const recentCount = recent.count ?? 0;
  if (recentCount >= MAX_ATTEMPTS) {
    return NextResponse.json(
      {
        error: `Has alcanzado el límite de ${MAX_ATTEMPTS} envíos en ${WINDOW_MINUTES} minutos. Por favor, inténtalo más tarde.`
      },
      { status: 429 }
    );
  }

  // Insert into Supabase
  const insertResult = await supabase
    .from('feedback')
    .insert({
      email: data.email,
      name: data.name,
      message: data.message,
      usecase: 'contact',
      topic: data.topic,
      language: getLanguageName(data.locale),
      ip_address: ipAddress,
      user_agent: request.headers.get('user-agent') ?? ''
    })
    .select()
    .single();

  if (insertResult.error) {
    return NextResponse.json(
      { error: 'No se pudo guardar tu mensaje. Por favor, inténtalo de nuevo en unos minutos.', requestId },
      { status: 500 }
    );
  }

  // Trigger email notifications via Edge Function
  try {
    const adminRecipient = env.EMAIL_ADMIN_RECIPIENT || INTERNAL_CONTACT_EMAIL;

    // 1. Send confirmation to user
    await triggerEdgeEmailFunction({
      email: data.email,
      template: 'contact-confirmation',
      locale: data.locale,
      variables: {
        name: data.name
      }
    });

    // 2. Send notification to admin
    await triggerEdgeEmailFunction({
      email: adminRecipient,
      template: 'contact-internal',
      locale: 'es',
      variables: {
        name: data.name,
        email: data.email,
        message: data.message,
        topic: data.topic,
        locale: getLanguageName(data.locale)
      }
    });

  } catch (error) {
    // Log error but don't fail the request since the data is already saved
  }

  return NextResponse.json({ success: true }, { status: 201 });
  } catch (err: any) {
    // Catch any unexpected error and always return JSON so frontend can show helpful info
    return NextResponse.json(
      { error: 'No fue posible enviar el formulario. Inténtalo de nuevo en breve.', requestId, details: err.message ?? String(err) },
      { status: 500 }
    );
  }
  return NextResponse.json({ success: true }, { status: 201 });
}
