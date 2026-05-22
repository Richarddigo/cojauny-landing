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
  BASE_URL: optionalUrl,
  CURRENT_SITE_URL: optionalUrl,
  NEXT_PUBLIC_ANALYTICS_ID: z.string().optional(),
  DATABASE_URL: z.string().optional(),
});

export type AppEnv = z.infer<typeof envSchema>;

export const env: AppEnv = envSchema.parse({
  BASE_URL: process.env.BASE_URL,
  CURRENT_SITE_URL: process.env.CURRENT_SITE_URL,
  NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  DATABASE_URL: process.env.DATABASE_URL,
});
