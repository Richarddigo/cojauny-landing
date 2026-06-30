'use client';

import { Analytics } from '@vercel/analytics/react';
import { useConsent } from '@/hooks/useConsent';

/** Renders Vercel Analytics only after analytics cookie consent. */
export default function ConsentGatedVercelAnalytics() {
  const { analyticsAllowed } = useConsent();

  if (!analyticsAllowed) {
    return null;
  }

  return <Analytics />;
}
