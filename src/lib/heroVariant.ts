import { cookies } from 'next/headers';

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

/** Server-side variant from cookie (set by middleware A/B assignment). */
export async function getHeroVariant(): Promise<HeroVariant> {
  const envVariant = getHeroVariantFromEnv();
  if (envVariant) {
    return envVariant;
  }

  const cookieStore = await cookies();
  const fromCookie = cookieStore.get(HERO_COOKIE)?.value;
  if (fromCookie === 'savings' || fromCookie === 'trust') {
    return fromCookie;
  }

  return 'trust';
}

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
