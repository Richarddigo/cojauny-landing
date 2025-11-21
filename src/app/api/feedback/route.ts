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

export async function POST(request: NextRequest) {
  const requestId = generateRequestId();
  console.log(`[${requestId}] Feedback form submission started`);

  // Parse and validate payload
  const payload = await request.json().catch(() => null);
  if (!payload) {
    console.error(`[${requestId}] Invalid JSON payload received`);
    return NextResponse.json(
      { error: 'El formato de los datos es inválido. Por favor, inténtalo de nuevo.' },
      { status: 400 }
    );
  }

  // Validate with Zod schema
  const validation = feedbackSchema.safeParse(payload);
  if (!validation.success) {
    const firstError = validation.error.issues[0];
    console.warn(`[${requestId}] Validation failed:`, firstError);
    return NextResponse.json(
      { error: firstError?.message ?? 'Los datos proporcionados no son válidos.' },
      { status: 422 }
    );
  }

  const data = validation.data as FeedbackInput;

  // Sanitize input data
  data.email = data.email.trim().toLowerCase();
  data.name = data.name.trim();
  data.message = data.message.trim();

  // Bot detection via honeypot
  if (!isHuman(data.honeypot)) {
    console.warn(`[${requestId}] Bot detected via honeypot field`);
    return NextResponse.json(
      { error: 'Tu solicitud no pudo ser procesada. Si crees que esto es un error, contacta a feedback@cojauny.com.' },
      { status: 403 }
    );
  }

  const ipAddress = getClientIp(request.headers) ?? '0.0.0.0';
  console.log(`[${requestId}] Request from IP: ${ipAddress}, User: ${data.email}, Sentiment: ${data.sentiment}`);

  // Initialize Supabase client
  let supabase;
  try {
    supabase = createServiceRoleClient();
  } catch (error) {
    console.error(`[${requestId}] Failed to create Supabase client:`, error);
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
    console.error(`[${requestId}] Rate limit check failed:`, recent.error);
    return NextResponse.json(
      { error: 'No se pudo verificar el límite de envíos. Por favor, inténtalo de nuevo.' },
      { status: 500 }
    );
  }

  const recentCount = recent.count ?? 0;
  if (recentCount >= MAX_ATTEMPTS) {
    console.warn(`[${requestId}] Rate limit exceeded: ${recentCount} requests in ${WINDOW_MINUTES} minutes`);
    return NextResponse.json(
      {
        error: `Has alcanzado el límite de ${MAX_ATTEMPTS} envíos en ${WINDOW_MINUTES} minutos. Por favor, inténtalo más tarde.`
      },
      { status: 429 }
    );
  }

  console.log(`[${requestId}] Rate limit check passed: ${recentCount}/${MAX_ATTEMPTS} requests`);

  // Insert into Supabase
  const insertResult = await supabase
    .from('feedback')
    .insert({
      email: data.email,
      name: data.name,
      message: data.message,
      sentiment: data.sentiment,
      language: data.locale,
      ip_address: ipAddress,
      user_agent: request.headers.get('user-agent') ?? ''
    })
    .select()
    .single();

  if (insertResult.error) {
    console.error(`[${requestId}] Database insert failed:`, insertResult.error);
    return NextResponse.json(
      { error: 'No se pudo guardar tu feedback. Por favor, inténtalo de nuevo en unos minutos.' },
      { status: 500 }
    );
  }

  console.log(`[${requestId}] Feedback saved to database successfully, ID: ${insertResult.data?.id}`);

  // Trigger email notifications via Edge Function
  try {
    const adminRecipient = env.EMAIL_ADMIN_RECIPIENT || INTERNAL_FEEDBACK_EMAIL;

    // 1. Send confirmation to user
    console.log(`[${requestId}] Sending confirmation email to user: ${data.email}`);
    await triggerEdgeEmailFunction({
      email: data.email,
      template: 'feedback-thanks',
      locale: data.locale,
      variables: {
        name: data.name
      }
    });

    // 2. Send notification to admin
    console.log(`[${requestId}] Sending notification email to admin: ${adminRecipient}`);
    await triggerEdgeEmailFunction({
      email: adminRecipient,
      template: 'internal-notification',
      locale: 'es',
      variables: {
        name: data.name,
        email: data.email,
        message: data.message,
        sentiment: data.sentiment,
        locale: data.locale
      }
    });

    console.log(`[${requestId}] All emails sent successfully`);
  } catch (error) {
    // Log error but don't fail the request since the data is already saved
    console.error(`[${requestId}] Email notification failed (non-critical):`, error);
  }

  console.log(`[${requestId}] Feedback form submission completed successfully`);
  return NextResponse.json({ success: true }, { status: 201 });
}
