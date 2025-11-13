import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';

import { createServiceRoleClient } from '@/lib/supabase';

const payloadSchema = z.object({
  email: z.string().email('Introduce un correo válido')
});

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  const payload = await request.json().catch(() => null);
  if (!payload) {
    return NextResponse.json({ error: 'Payload inválido' }, { status: 400 });
  }

  const validation = payloadSchema.safeParse(payload);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.issues[0]?.message ?? 'Datos inválidos' },
      { status: 422 }
    );
  }

  const supabase = createServiceRoleClient();

  const email = validation.data.email.trim().toLowerCase();

  const { data, error } = await supabase.rpc('anonymize_user_data', {
    target_email: email
  });

  if (error) {
    console.error('Error ejecutando anonymize_user_data', error);
    return NextResponse.json({ error: 'No se pudo procesar la solicitud' }, { status: 500 });
  }

  return NextResponse.json({ success: true, result: data }, { status: 200 });
}
