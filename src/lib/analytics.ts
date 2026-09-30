import { readConsent } from './consent-store';
import { hasAnalyticsConsent } from './consent';
import type { HeroVariant } from '@/lib/heroVariant';

export type BetaSignupSource = 'hero' | 'full_form';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function readHeroVariantFromCookie(): HeroVariant {
  if (typeof document === 'undefined') {
    return 'trust';
  }

  const match = document.cookie.match(/(?:^|;\s*)hero_variant=(trust|savings)/);
  return match?.[1] === 'savings' ? 'savings' : 'trust';
}

/** Fires a conversion event when a beta signup succeeds. No-op without analytics consent/scripts. */
export function trackBetaSignup(source: BetaSignupSource): void {
  if (typeof window === 'undefined' || !hasAnalyticsConsent(readConsent())) {
    return;
  }

  const heroVariant = readHeroVariantFromCookie();

  window.gtag?.('event', 'beta_signup', {
    event_category: 'conversion',
    event_label: source,
    locale: document.documentElement.lang,
    hero_variant: heroVariant,
  });

  void import('@vercel/analytics')
    .then(({ track }) => {
      if (!hasAnalyticsConsent(readConsent())) return;
      track('beta_signup', { source, hero_variant: heroVariant });
    })
    .catch(() => {
      // Optional dependency path — ignore if unavailable
    });
}

/** Records which hero copy arm was shown (trust vs savings experiment). */
export function trackHeroVariant(variant: HeroVariant): void {
  if (typeof window === 'undefined' || !hasAnalyticsConsent(readConsent())) {
    return;
  }

  window.gtag?.('event', 'hero_variant_impression', {
    event_category: 'experiment',
    event_label: variant,
  });

  void import('@vercel/analytics')
    .then(({ track }) => {
      if (!hasAnalyticsConsent(readConsent())) return;
      track('hero_variant_impression', { variant });
    })
    .catch(() => {
      // Optional dependency path — ignore if unavailable
    });
}

export function trackSignupStep(step: 'start' | 'error', source: BetaSignupSource): void {
  if (typeof window === 'undefined' || !hasAnalyticsConsent(readConsent())) return;
  window.gtag?.('event', `beta_signup_${step}`, {
    source, locale: document.documentElement.lang, hero_variant: readHeroVariantFromCookie(),
  });
}
