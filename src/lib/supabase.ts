import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { env } from './env';

export const supabaseUrl = env.NEXT_PUBLIC_BASE_URL ?? env.NEXT_PUBLIC_BASE_URL ?? env.BASE_URL ?? '';
export const supabaseAnonKey = env.NEXT_PUBLIC_BASE_ANON_KEY ?? '';

if (!supabaseUrl) {
}

if (!supabaseAnonKey) {
}

let browserClient: SupabaseClient | undefined;

export const createBrowserSupabaseClient = () => {
  if (browserClient) return browserClient;

  browserClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true
    }
  });

  return browserClient;
};

export const createServiceRoleClient = () => {
  if (!supabaseUrl) {
    throw new Error('No se encontró ninguna URL de Supabase (NEXT_PUBLIC_BASE_URL o BASE_URL)');
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
