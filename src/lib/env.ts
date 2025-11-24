import { z } from 'zod';

const optionalUrl = z.preprocess((value) => {
  if (typeof value !== 'string') {
    return undefined;
  }
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    return undefined;
  }
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }
  return `https://${trimmed}`;
}, z.string().url().optional());

const envSchema = z.object({
  NEXT_PUBLIC_BASE_URL: optionalUrl,
  BASE_URL: optionalUrl,
  NEXT_PUBLIC_BASE_ANON_KEY: z.string().min(1).optional(),
  BASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),
  BASE_JWT_SECRET: z.string().optional(),
  ZOHO_SMTP_USER: z.string().email().optional(),
  ZOHO_SMTP_PASSWORD: z.string().optional(),
  ZOHO_API_KEY: z.string().optional(),
  ZOHO_ACCOUNT_ID: z.string().optional(),
  CURRENT_SITE_URL: optionalUrl,
  NEXT_PUBLIC_ANALYTICS_ID: z.string().optional(),
  EMAIL_FROM_ADDRESS: z.string().email().optional(),
  EMAIL_ADMIN_RECIPIENT: z.string().email().optional(),
  BASE_PROJECT_ID: z.string().optional(),
});

export type AppEnv = z.infer<typeof envSchema>;

export const env: AppEnv = envSchema.parse({
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  BASE_URL: process.env.BASE_URL,
  NEXT_PUBLIC_BASE_ANON_KEY: process.env.NEXT_PUBLIC_BASE_ANON_KEY,
  BASE_SERVICE_ROLE_KEY: process.env.BASE_SERVICE_ROLE_KEY,
  BASE_JWT_SECRET: process.env.BASE_JWT_SECRET,
  ZOHO_SMTP_USER: process.env.ZOHO_SMTP_USER,
  ZOHO_SMTP_PASSWORD: process.env.ZOHO_SMTP_PASSWORD,
  ZOHO_API_KEY: process.env.ZOHO_API_KEY,
  ZOHO_ACCOUNT_ID: process.env.ZOHO_ACCOUNT_ID,
  CURRENT_SITE_URL: process.env.CURRENT_SITE_URL,
  NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  EMAIL_FROM_ADDRESS: process.env.EMAIL_FROM_ADDRESS,
  EMAIL_ADMIN_RECIPIENT: process.env.EMAIL_ADMIN_RECIPIENT,
  BASE_PROJECT_ID: process.env.BASE_PROJECT_ID,
});
