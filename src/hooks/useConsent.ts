"use client";

import { useCallback, useState } from 'react';
import {
  buildConsent,
  CONSENT_STORAGE_KEY,
  hasAnalyticsConsent,
  parseConsent,
  serializeConsent,
  type ConsentPreferences,
  type ConsentState,
} from '@/lib/consent';

export function useConsent() {
  const [consent, setConsent] = useState<ConsentState>(() => {
    if (typeof window === 'undefined') {
      return 'unknown';
    }

    return parseConsent(window.localStorage.getItem(CONSENT_STORAGE_KEY));
  });

  const save = useCallback((preferences: ConsentPreferences) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, serializeConsent(preferences));
    setConsent(preferences);
  }, []);

  const acceptAll = useCallback(() => {
    save(buildConsent(true));
  }, [save]);

  const rejectAnalytics = useCallback(() => {
    save(buildConsent(false));
  }, [save]);

  const savePreferences = useCallback(
    (analytics: boolean) => {
      save(buildConsent(analytics));
    },
    [save],
  );

  const analyticsAllowed = hasAnalyticsConsent(consent);

  return {
    consent,
    analyticsAllowed,
    acceptAll,
    rejectAnalytics,
    savePreferences,
    isConfigured: consent !== 'unknown',
  };
}
