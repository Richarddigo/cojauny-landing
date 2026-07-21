import type { LandingCopy } from '@/locales/copy';

export type HeroVariant = 'trust' | 'savings';

const HERO_COOKIE = 'hero_variant';

/** Env override for manual QA; cookie assignment is handled in middleware. */
export function getHeroVariantFromEnv(): HeroVariant | null {
  const env = process.env.NEXT_PUBLIC_HERO_VARIANT;
  if (env === 'savings' || env === 'trust') {
    return env;
  }
  return null;
}

/** Cookie name set by middleware for client-side A/B reads. */
export const HERO_VARIANT_COOKIE = HERO_COOKIE;

export function resolveHeroCopy(
  hero: LandingCopy['hero'],
  variants?: LandingCopy['heroVariants'],
  variant: HeroVariant = 'trust',
): LandingCopy['hero'] {
  if (variant === 'savings' && variants?.savings) {
    return {
      ...hero,
      title: variants.savings.title,
      subtitle: variants.savings.subtitle,
    };
  }

  return hero;
}
