export type BetaSignupSource = 'hero' | 'full_form';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fires a conversion event when a beta signup succeeds. No-op without analytics consent/scripts. */
export function trackBetaSignup(source: BetaSignupSource): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.gtag?.('event', 'beta_signup', {
    event_category: 'conversion',
    event_label: source,
  });

  void import('@vercel/analytics')
    .then(({ track }) => {
      track('beta_signup', { source });
    })
    .catch(() => {
      // Optional dependency path — ignore if unavailable
    });
}
