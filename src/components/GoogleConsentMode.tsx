'use client';

import { useEffect } from 'react';
import { hasAnalyticsConsent } from '@/lib/consent';
import { readConsent, subscribeConsent } from '@/lib/consent-store';
import { env } from '@/lib/env';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Sets Google Consent Mode v2 defaults and updates when the user chooses. */
export default function GoogleConsentMode() {
  useEffect(() => {
    window.dataLayer ??= [];
    window.gtag ??= (...args: unknown[]) => window.dataLayer?.push(args);
    const id = env.NEXT_PUBLIC_ANALYTICS_ID;
    if (id)
      (window as unknown as Record<string, unknown>)[`ga-disable-${id}`] =
        !hasAnalyticsConsent(readConsent());
    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    const synchronize = () => {
      const allowed = hasAnalyticsConsent(readConsent());
      if (id)
        (window as unknown as Record<string, unknown>)[`ga-disable-${id}`] = !allowed;
      window.gtag?.('consent', 'update', {
        analytics_storage: allowed ? 'granted' : 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    };
    synchronize();
    // The listener runs during saveConsent, before another SDK callback can run.
    return subscribeConsent(synchronize);
  }, []);
  return null;
}
