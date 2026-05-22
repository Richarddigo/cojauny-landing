/**
 * Feature flags for cojauny-landing.
 *
 * All flags are resolved at build time from environment variables.
 * Set the corresponding NEXT_PUBLIC_* variable in your Vercel project
 * (or .env.local) and re-deploy to toggle a feature.
 *
 * NEXT_PUBLIC_ENABLE_PREMIUM=true  → show premium/pricing section
 * NEXT_PUBLIC_ENABLE_PREMIUM=false → hide it (default / safe for beta)
 */

export const ENABLE_PREMIUM =
  process.env.NEXT_PUBLIC_ENABLE_PREMIUM === 'true';
