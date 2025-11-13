import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),
  SUPABASE_JWT_SECRET: z.string().optional(),
  ZOHO_SMTP_USER: z.string().email().optional(),
  ZOHO_SMTP_PASSWORD: z.string().optional(),
  ZOHO_API_KEY: z.string().optional(),
  ZOHO_ACCOUNT_ID: z.string().optional(),
  CURRENT_SITE_URL: z.string().url().optional(),
  NEXT_PUBLIC_ANALYTICS_ID: z.string().optional(),
  EMAIL_FROM_ADDRESS: z.string().email().optional(),
  EMAIL_ADMIN_RECIPIENT: z.string().email().optional(),
  SUPABASE_PROJECT_ID: z.string().optional()
});

export type AppEnv = z.infer<typeof envSchema>;

export const env: AppEnv = envSchema.parse({
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_JWT_SECRET: process.env.SUPABASE_JWT_SECRET,
  ZOHO_SMTP_USER: process.env.ZOHO_SMTP_USER,
  ZOHO_SMTP_PASSWORD: process.env.ZOHO_SMTP_PASSWORD,
  ZOHO_API_KEY: process.env.ZOHO_API_KEY,
  ZOHO_ACCOUNT_ID: process.env.ZOHO_ACCOUNT_ID,
  CURRENT_SITE_URL: process.env.CURRENT_SITE_URL,
  NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  EMAIL_FROM_ADDRESS: process.env.EMAIL_FROM_ADDRESS,
  EMAIL_ADMIN_RECIPIENT: process.env.EMAIL_ADMIN_RECIPIENT,
  SUPABASE_PROJECT_ID: process.env.SUPABASE_PROJECT_ID
});
