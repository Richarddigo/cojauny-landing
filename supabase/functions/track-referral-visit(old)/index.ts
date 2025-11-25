// Edge Function: Track Referral Visit / Rastrear Visita de Referral / Besuch verfolgen / Suivre la visite de parrainage
// deno-lint-ignore-file no-explicit-any
import { serve } from 'https://deno.land/std@0.192.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.6';

interface TrackVisitPayload {
  referralCode: string;
}

const supabaseUrl = Deno.env.get('BASE_URL') ?? Deno.env.get('BASE_URL') ?? '';
const supabaseKey = Deno.env.get('BASE_SERVICE_ROLE_KEY') ?? Deno.env.get('BASE_SERVICE_ROLE_KEY') ?? '';

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
  }
});

serve(async (request) => {
  // Enable CORS / Habilitar CORS / CORS aktivieren / Activer CORS
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { 
      status: 405,
      headers: corsHeaders 
    });
  }

  let payload: TrackVisitPayload;
  try {
    payload = (await request.json()) as TrackVisitPayload;
  } catch (_error) {
    return new Response(JSON.stringify({ error: 'Invalid payload' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  if (!payload.referralCode) {
    return new Response(JSON.stringify({ error: 'Missing referralCode' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  try {
    // Call database function to increment visits / Llamar función para incrementar visitas
    // Datenbankfunktion aufrufen / Appeler la fonction de base de données
    const { data, error } = await supabase.rpc('increment_referral_visits', {
      ref_code: payload.referralCode
    });

    if (error) {
      return new Response(JSON.stringify({ error: 'Failed to track visit' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    if (data && data.error) {
      return new Response(JSON.stringify({ error: data.error }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
