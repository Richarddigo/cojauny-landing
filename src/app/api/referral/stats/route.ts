import { NextResponse, type NextRequest } from 'next/server';
import { createServiceRoleClient } from '@/lib/supabase';

export const runtime = 'edge';

// Get referral stats for a user by email / Obtener estadísticas de referral por email
// Empfehlungsstatistiken per E-Mail abrufen / Obtenir les stats de parrainage par email
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const supabase = createServiceRoleClient();

  try {
    // First, find the user in waitlist / Primero, encontrar el usuario en waitlist
    // Zuerst Benutzer in Waitlist finden / D'abord, trouver l'utilisateur dans la waitlist
    const { data: userData, error: userError } = await supabase
      .from('waitlist')
      .select('id')
      .eq('email', email.toLowerCase().trim())
      .single();

    if (userError || !userData) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Fetch referral stats / Obtener estadísticas de referral
    // Empfehlungsstatistiken abrufen / Récupérer les statistiques de parrainage
    const { data: referralData, error: referralError } = await supabase
      .from('referral_stats')
      .select('referral_code, referral_link, visits, signups')
      .eq('user_id', userData.id)
      .single();

    if (referralError) {
      return NextResponse.json({ error: 'Failed to fetch referral stats' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      data: referralData
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
