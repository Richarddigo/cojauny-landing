import type { LandingCopy } from '@/locales/copy';

export type HeroVariant = 'trust' | 'savings';

/** Build-time hero experiment arm. Set NEXT_PUBLIC_HERO_VARIANT=savings to test savings-led copy. */
export function getHeroVariant(): HeroVariant {
  return process.env.NEXT_PUBLIC_HERO_VARIANT === 'savings' ? 'savings' : 'trust';
}

export function resolveHeroCopy(
  hero: LandingCopy['hero'],
  variants?: LandingCopy['heroVariants'],
): LandingCopy['hero'] {
  const variant = getHeroVariant();

  if (variant === 'savings' && variants?.savings) {
    return {
      ...hero,
      title: variants.savings.title,
      subtitle: variants.savings.subtitle,
    };
  }

  return hero;
}
