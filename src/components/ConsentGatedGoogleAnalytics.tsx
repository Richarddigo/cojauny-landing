'use client';

import Script from 'next/script';
import { useConsent } from '@/hooks/useConsent';
import { env } from '@/lib/env';
import { hasAnalyticsConsent } from '@/lib/consent';
import { readConsent } from '@/lib/consent-store';

/** Loads Google Analytics only after the user accepts analytics cookies. */
export default function ConsentGatedGoogleAnalytics() {
  const { analyticsAllowed } = useConsent();
  const analyticsId = env.NEXT_PUBLIC_ANALYTICS_ID;

  if (!analyticsId || !analyticsAllowed) {
    return null;
  }

  const initialize = () => {
    if (
      !hasAnalyticsConsent(readConsent()) ||
      (window as unknown as Record<string, unknown>)[`ga-disable-${analyticsId}`] === true
    )
      return;
    window.dataLayer ??= [];
    window.gtag ??= (...args: unknown[]) => window.dataLayer?.push(args);
    window.gtag('js', new Date());
    window.gtag('config', analyticsId, { anonymize_ip: true });
  };

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsId)}`}
      strategy="afterInteractive"
      onReady={initialize}
    />
  );
}
