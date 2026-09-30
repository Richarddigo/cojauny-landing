'use client';

import { useEffect } from 'react';
import { useConsent } from '@/hooks/useConsent';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Sets Google Consent Mode v2 defaults and updates when the user chooses. */
export default function GoogleConsentMode() {
  const { analyticsAllowed, isConfigured } = useConsent();

  useEffect(() => {
    window.dataLayer ??= [];
    window.gtag ??= (...args: unknown[]) => window.dataLayer?.push(args);
    const id = process.env.NEXT_PUBLIC_ANALYTICS_ID;
    if (id) (window as unknown as Record<string, unknown>)[`ga-disable-${id}`] = !analyticsAllowed;
    window.gtag('consent', 'update', {
      analytics_storage: analyticsAllowed && isConfigured ? 'granted' : 'denied',
      ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
    });
  }, [analyticsAllowed, isConfigured]);
  return null;
}
