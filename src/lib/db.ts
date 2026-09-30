/**
 * Neon Postgres client — Cojauny Landing.
 *
 * The helper returns null without configuration. Submission routes fail closed:
 * durable storage and the mail outbox are required before acknowledging an application.
 *
 * Provisioning (free tier, no credit card):
 *   1. Vercel → Storage → Create Database → Neon
 *   2. Run `schema.sql` once in the Neon SQL Editor
 *   3. `DATABASE_URL` is injected automatically by Vercel
 */
import { neon, type NeonQueryFunction } from '@neondatabase/serverless';

let cachedClient: NeonQueryFunction<false, false> | null | undefined;

export function getDb(): NeonQueryFunction<false, false> | null {
    if (cachedClient !== undefined) return cachedClient;
    const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
    if (!url) {
        cachedClient = null;
        return null;
    }
    cachedClient = neon(url);
    return cachedClient;
}

export function isDbConfigured(): boolean {
    return Boolean(process.env.DATABASE_URL || process.env.POSTGRES_URL);
}
