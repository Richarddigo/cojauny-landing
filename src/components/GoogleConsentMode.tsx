'use client';

import Script from 'next/script';
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
    if (typeof window === 'undefined' || !isConfigured) {
      return;
    }

    window.gtag?.('consent', 'update', {
      analytics_storage: analyticsAllowed ? 'granted' : 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }, [analyticsAllowed, isConfigured]);

  return (
    <Script id="google-consent-mode" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          wait_for_update: 500
        });
      `}
    </Script>
  );
}
