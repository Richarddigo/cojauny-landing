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

export async function POST(request: NextRequest) {
  const payload = await request.json().catch(() => null);
  if (!payload) {
    return NextResponse.json({ error: 'Payload inválido' }, { status: 400 });
  }

  const validation = contactSchema.safeParse(payload);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.issues[0]?.message ?? 'Datos inválidos' },
      { status: 422 }
    );
  }

  const data = validation.data as ContactInput;

  data.email = data.email.trim().toLowerCase();
  data.name = data.name.trim();
  data.message = data.message.trim();

  if (!isHuman(data.honeypot)) {
    return NextResponse.json({ error: 'Detección de bot' }, { status: 400 });
  }

  const ipAddress = getClientIp(request.headers) ?? '0.0.0.0';
  const supabase = createServiceRoleClient();
  const since = new Date(Date.now() - WINDOW_MINUTES * 60 * 1000).toISOString();

  // Check rate limit: max 5 requests per 10 minutes per IP
  const recent = await supabase
    .from('feedback')
    .select('id', { count: 'exact', head: true })
    .gte('created_at', since)
    .eq('ip_address', ipAddress);

  if (recent.error) {
    console.error('Error checking rate limit for contact form', recent.error);
    return NextResponse.json({ error: 'Error validando límite de envíos' }, { status: 500 });
  }

  if ((recent.count ?? 0) >= MAX_ATTEMPTS) {
    return NextResponse.json(
      { error: 'Has alcanzado el límite de envíos. Por favor, inténtalo más tarde.' },
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
      sentiment: 'contact',
      topic: data.topic,
      language: data.locale,
      ip_address: ipAddress,
      user_agent: request.headers.get('user-agent') ?? ''
    })
    .select()
    .single();

  if (insertResult.error) {
    console.error('Error saving contact form submission', insertResult.error);
    return NextResponse.json({ error: 'No se pudo guardar tu mensaje. Inténtalo de nuevo.' }, { status: 500 });
  }

  // Trigger email notifications via Edge Function
  try {
    // 1. Send confirmation to user
    await triggerEdgeEmailFunction({
      email: data.email,
      template: 'contact-thanks',
      locale: data.locale,
      variables: {
        name: data.name
      }
    });

    const adminRecipient = env.EMAIL_ADMIN_RECIPIENT || INTERNAL_CONTACT_EMAIL;

    // 2. Send notification to admin
    await triggerEdgeEmailFunction({
      email: adminRecipient,
      template: 'contact-notification',
      locale: 'es',
      variables: {
        name: data.name,
        email: data.email,
        message: data.message,
        topic: data.topic,
        locale: data.locale
      }
    });
  } catch (error) {
    // Log error but don't fail the request since the data is already saved
    console.error('Error sending contact notifications', error);
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
