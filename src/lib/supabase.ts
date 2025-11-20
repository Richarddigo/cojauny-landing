import { createClient } from '@supabase/supabase-js';
import { env } from './env';

export const supabaseUrl = env.NEXT_PUBLIC_BASE_URL ?? '';
export const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

if (!supabaseUrl) {
  console.warn('NEXT_PUBLIC_BASE_URL no está configurado');
}

if (!supabaseAnonKey) {
  console.warn('NEXT_PUBLIC_SUPABASE_ANON_KEY no está configurado');
}

export const createBrowserSupabaseClient = () =>
  createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true
    }
  });

export const createServiceRoleClient = () => {
  if (!supabaseUrl) {
    throw new Error('NEXT_PUBLIC_BASE_URL no está configurado');
  }
  if (!env.BASE_SERVICE_ROLE_KEY) {
    throw new Error('BASE_SERVICE_ROLE_KEY no está configurada');
  }
  return createClient(supabaseUrl, env.BASE_SERVICE_ROLE_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
};

export const createServerSupabaseClient = () =>
  createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false
    }
  });
