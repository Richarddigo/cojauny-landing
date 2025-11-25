import { NextResponse, type NextRequest } from 'next/server';

import { feedbackSchema, type FeedbackInput } from '@/lib/validation';
import { createServiceRoleClient } from '@/lib/supabase';
import { getClientIp, isHuman } from '@/lib/utils';
import { triggerEdgeEmailFunction } from '@/lib/email';
import { env } from '@/lib/env';

export const runtime = 'edge';

const WINDOW_MINUTES = 10;
const MAX_ATTEMPTS = 5;
const INTERNAL_FEEDBACK_EMAIL = 'feedback@cojauny.com';

/**
 * Generate a unique request ID for tracking and debugging
 */
function generateRequestId(): string {
  return `feedback_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
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

// Helper function for rate limiting (assuming it's defined elsewhere or will be added)
// For the purpose of this edit, we'll include a basic placeholder if not present.
async function checkRateLimit(ipAddress: string): Promise<{ allowed: boolean; count?: number }> {
  // This is a placeholder. In a real scenario, this would interact with a database
  // or a caching layer (like Redis) to track requests per IP.
  // Since the original code had rate limiting, we'll simulate a basic one here
  // to avoid breaking the new POST function's call to it.
  // The actual implementation would be more robust.
  const supabase = createServiceRoleClient();
  const since = new Date(Date.now() - WINDOW_MINUTES * 60 * 1000).toISOString();

  const { count, error } = await supabase
    .from('feedback')
    .select('id', { count: 'exact', head: true })
    .gte('created_at', since)
    .eq('ip_address', ipAddress);

  if (error) {
    // Fail safe: allow if DB check fails to avoid blocking legitimate users
    return { allowed: true };
  }

  const currentCount = count ?? 0;
  return { allowed: currentCount < MAX_ATTEMPTS, count: currentCount };
}


export async function POST(request: Request) {
  const requestId = generateRequestId();

  try {
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { error: 'El formato de los datos es inválido. Por favor, inténtalo de nuevo.', requestId },
        { status: 400 }
      );
    }

    const validation = feedbackSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: validation.error.errors, requestId },
        { status: 400 }
      );
    }

    const data = validation.data as FeedbackInput;

    // Bot detection
    if (!isHuman(data.honeypot)) {
      return NextResponse.json(
        { error: 'Tu solicitud no pudo ser procesada. Si crees que esto es un error, contacta a support@cojauny.com.', requestId },
        { status: 403 }
      );
    }

    const ipAddress = getClientIp((request as any).headers) ?? '0.0.0.0';
    // Rate limiting
    const rateLimitResult = await checkRateLimit(ipAddress);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: 'Demasiados intentos. Por favor espera unos minutos.', requestId },
        { status: 429 }
      );
    }

    // Create Supabase client
    const supabase = createServiceRoleClient();

    // Insert into Supabase
    const insert = await supabase
      .from('feedback')
      .insert({
        email: data.email,
        name: data.name,
        message: data.message,
        usecase: data.usecase,
        language: getLanguageName(data.locale),
        ip_address: ipAddress,
        user_agent: (request as any).headers.get('user-agent') ?? ''
      })
      .select()
      .single();

    if (insert.error) {
      return NextResponse.json(
        { error: 'No se pudo guardar el feedback.', requestId },
        { status: 500 }
      );
    }

    // Trigger emails (non-blocking)
    try {
      const adminRecipient = env.EMAIL_ADMIN_RECIPIENT || INTERNAL_FEEDBACK_EMAIL;

      await triggerEdgeEmailFunction({
        email: data.email,
        template: 'feedback-thanks',
        locale: data.locale,
        variables: { name: data.name }
      });

      await triggerEdgeEmailFunction({
        email: adminRecipient,
        template: 'internal-notification',
        locale: data.locale ?? 'es',
        variables: {
          type: 'Feedback',
          name: data.name,
          email: data.email,
          message: data.message,
          usecase: data.usecase,
          locale: getLanguageName(data.locale)
        }
      });
    } catch (err) {
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Error interno del servidor.', requestId, details: err.message ?? String(err) },
      { status: 500 }
    );
  }
}
