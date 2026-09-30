"use client";

import { useSyncExternalStore } from 'react';
import { buildConsent, hasAnalyticsConsent, type ConsentState } from '@/lib/consent';
import { readConsent, saveConsent, subscribeConsent } from '@/lib/consent-store';

export function useConsent() {
  const consent = useSyncExternalStore(subscribeConsent, readConsent, (): ConsentState => 'unknown');
  return {
    consent,
    analyticsAllowed: hasAnalyticsConsent(consent),
    acceptAll: () => saveConsent(buildConsent(true)),
    rejectAnalytics: () => saveConsent(buildConsent(false)),
    savePreferences: (analytics: boolean) => saveConsent(buildConsent(analytics)),
    isConfigured: consent !== 'unknown',
  };
}
