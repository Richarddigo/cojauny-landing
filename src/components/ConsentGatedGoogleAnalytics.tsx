'use client';

import Script from 'next/script';
import { useConsent } from '@/hooks/useConsent';
import { env } from '@/lib/env';

/** Loads Google Analytics only after the user accepts analytics cookies. */
export default function ConsentGatedGoogleAnalytics() {
  const { consent } = useConsent();
  const analyticsId = env.NEXT_PUBLIC_ANALYTICS_ID;

  if (!analyticsId || consent !== 'accepted') {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="ga" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${analyticsId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
