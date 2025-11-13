import { NextResponse, type NextRequest } from 'next/server';

import { feedbackSchema, type FeedbackInput } from '@/lib/validation';
import { createServiceRoleClient } from '@/lib/supabase';
import { getClientIp, isHuman } from '@/lib/utils';
import { triggerEdgeEmailFunction } from '@/lib/email';
import { env } from '@/lib/env';

export const runtime = 'edge';

const WINDOW_MINUTES = 10;
const MAX_ATTEMPTS = 5;

export async function POST(request: NextRequest) {
  const payload = await request.json().catch(() => null);
  if (!payload) {
    return NextResponse.json({ error: 'Payload inválido' }, { status: 400 });
  }

  const validation = feedbackSchema.safeParse(payload);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.issues[0]?.message ?? 'Datos inválidos' },
      { status: 422 }
    );
  }

  const data = validation.data as FeedbackInput;

  data.email = data.email.trim().toLowerCase();
  data.name = data.name.trim();
  data.message = data.message.trim();

  if (!isHuman(data.honeypot)) {
    return NextResponse.json({ error: 'Detección de bot' }, { status: 400 });
  }

  const ipAddress = getClientIp(request.headers) ?? '0.0.0.0';
  const supabase = createServiceRoleClient();
  const since = new Date(Date.now() - WINDOW_MINUTES * 60 * 1000).toISOString();

  const recent = await supabase
    .from('feedback')
    .select('id', { count: 'exact', head: true })
    .gte('created_at', since)
    .eq('ip_address', ipAddress);

  if (recent.error) {
    console.error('Error comprobando rate limit feedback', recent.error);
    return NextResponse.json({ error: 'No se pudo validar el rate limit' }, { status: 500 });
  }

  if ((recent.count ?? 0) >= MAX_ATTEMPTS) {
    return NextResponse.json(
      { error: 'Has alcanzado el límite de envíos. Inténtalo más tarde.' },
      { status: 429 }
    );
  }

  const insertResult = await supabase
    .from('feedback')
    .insert({
      email: data.email,
      name: data.name,
      message: data.message,
      sentiment: data.sentiment,
      locale: data.locale,
      ip_address: ipAddress,
      user_agent: request.headers.get('user-agent') ?? ''
    })
    .select()
    .single();

  if (insertResult.error) {
    console.error('Error guardando feedback', insertResult.error);
    return NextResponse.json({ error: 'No se pudo guardar tu feedback' }, { status: 500 });
  }

  try {
    await triggerEdgeEmailFunction({
      email: data.email,
      template: 'feedback-thanks',
      variables: {
        name: data.name,
        locale: data.locale
      }
    });

    if (env.EMAIL_ADMIN_RECIPIENT) {
      await triggerEdgeEmailFunction({
        email: env.EMAIL_ADMIN_RECIPIENT,
        template: 'internal-notification',
        variables: {
          name: data.name,
          email: data.email,
          message: data.message,
          sentiment: data.sentiment,
          locale: data.locale
        }
      });
    }
  } catch (error) {
    console.error('Error enviando notificaciones de feedback', error);
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
