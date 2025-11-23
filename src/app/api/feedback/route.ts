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
    console.error('Rate limit check failed:', error);
    // Fail safe: allow if DB check fails to avoid blocking legitimate users
    return { allowed: true };
  }

  const currentCount = count ?? 0;
  return { allowed: currentCount < MAX_ATTEMPTS, count: currentCount };
}


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = feedbackSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: result.error.errors },
        { status: 400 }
      );
    }

    const data = result.data;
    const ipAddress = request.headers.get('x-forwarded-for') || 'unknown';

    // Rate limiting
    const rateLimitResult = await checkRateLimit(ipAddress);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: 'Demasiados intentos. Por favor espera unos minutos.' },
        { status: 429 }
      );
    }

    // Create Supabase client
    const supabase = createServiceRoleClient();

    // Insert into Supabase
    const { error: insertError } = await supabase
      .from('feedback')
      .insert({
        email: data.email,
        name: data.name,
        message: data.message,
        sentiment: data.sentiment,
        language: data.locale,
        ip_address: ipAddress,
        user_agent: request.headers.get('user-agent') ?? ''
      });

    if (insertError) {
      console.error('Feedback insert error:', insertError);
      return NextResponse.json(
        { error: 'No se pudo guardar el feedback.' },
        { status: 500 }
      );
    }

    // Trigger email notifications via Edge Function
    try {
      const adminRecipient = env.EMAIL_ADMIN_RECIPIENT || INTERNAL_FEEDBACK_EMAIL;

      // 1. Send confirmation to user
      await triggerEdgeEmailFunction({
        email: data.email,
        template: 'feedback-thanks',
        locale: data.locale,
        variables: {
          name: data.name
        }
      });

      // 2. Send notification to admin
      await triggerEdgeEmailFunction({
        email: adminRecipient,
        template: 'internal-notification',
        locale: 'es',
        variables: {
          type: 'Feedback',
          name: data.name,
          email: data.email,
          message: data.message,
          sentiment: data.sentiment,
          locale: data.locale
        }
      });
    } catch (error) {
      console.error('Email notification failed:', error);
      // Continue execution, email failure shouldn't block success response
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Feedback API error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor.' },
      { status: 500 }
    );
  }
}
