'use client';

import Hero from '@/components/Hero';
import HeroVariantTracker from '@/components/HeroVariantTracker';
import { useHeroVariant } from '@/hooks/useHeroVariant';
import { resolveHeroCopy } from '@/lib/heroVariant';
import type { Locale } from '@/locales/config';
import type { LandingCopy } from '@/locales/copy';

interface HeroWithVariantProps {
  hero: LandingCopy['hero'];
  heroVariants?: LandingCopy['heroVariants'];
  quickSignupCopy: LandingCopy['heroQuickSignup'];
  betaCopy: LandingCopy['forms']['beta'];
  locale: Locale;
  airportsHubTitle: string;
  airportsHubAll: string;
}

/** Resolves A/B hero copy from the middleware cookie without forcing SSR. */
export default function HeroWithVariant({
  hero,
  heroVariants,
  quickSignupCopy,
  betaCopy,
  locale,
  airportsHubTitle,
  airportsHubAll,
}: HeroWithVariantProps) {
  const heroVariant = useHeroVariant();
  const heroCopy = resolveHeroCopy(hero, heroVariants, heroVariant);

  return (
    <>
      <HeroVariantTracker variant={heroVariant} />
      <Hero
        copy={heroCopy}
        quickSignupCopy={quickSignupCopy}
        betaCopy={betaCopy}
        locale={locale}
        airportsHubTitle={airportsHubTitle}
        airportsHubAll={airportsHubAll}
      />
    </>
  );
}
