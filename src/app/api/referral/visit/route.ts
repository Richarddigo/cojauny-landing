import { NextResponse, type NextRequest } from 'next/server';
import { createServiceRoleClient } from '@/lib/supabase';

export const runtime = 'edge';

// Track anonymous referral visit / Rastrear visita anónima de referral
// Anonymen Empfehlungsbesuch verfolgen / Suivre la visite anonyme de parrainage
export async function POST(request: NextRequest) {
  const payload = await request.json().catch(() => null);
  
  if (!payload || !payload.referralCode) {
    return NextResponse.json({ error: 'referralCode is required' }, { status: 400 });
  }

  const { referralCode } = payload;
  const supabase = createServiceRoleClient();

  try {
    // Call RPC function to increment visit counter / Llamar función RPC para incrementar visitas
    // RPC-Funktion aufrufen / Appeler la fonction RPC
    const { data, error } = await supabase.rpc('increment_referral_visits', {
      ref_code: referralCode
    });

    if (error) {
      console.error('Error incrementing referral visits:', error);
      return NextResponse.json({ error: 'Failed to track visit' }, { status: 500 });
    }

    if (data && data.error) {
      return NextResponse.json({ error: data.error }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
