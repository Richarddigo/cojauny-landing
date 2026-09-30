'use client';

import { Analytics } from '@vercel/analytics/react';
import { hasAnalyticsConsent } from '@/lib/consent';
import { readConsent } from '@/lib/consent-store';
import { useConsent } from '@/hooks/useConsent';

/** Renders Vercel Analytics only after analytics cookie consent. */
export default function ConsentGatedVercelAnalytics() {
  const { analyticsAllowed } = useConsent();

  if (!analyticsAllowed) {
    return null;
  }

  return <Analytics beforeSend={(event) => {
    if (!hasAnalyticsConsent(readConsent())) return null;
    const url = new URL(event.url, window.location.origin);
    url.search = '';
    url.hash = '';
    return { ...event, url: url.toString() };
  }} />;
}
