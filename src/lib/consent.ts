export const CONSENT_STORAGE_KEY = 'cojauny-consent-v2';
export const CONSENT_VERSION = 1;
/** Re-prompt after 12 months (RGPD best practice). */
export const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export interface ConsentPreferences {
  version: number;
  analytics: boolean;
  timestamp: number;
}

export type ConsentState = 'unknown' | ConsentPreferences;

export function parseConsent(raw: string | null): ConsentState {
  if (!raw) {
    return 'unknown';
  }

  try {
    const parsed = JSON.parse(raw) as ConsentPreferences;
    if (
      typeof parsed.analytics !== 'boolean' ||
      typeof parsed.timestamp !== 'number' ||
      parsed.version !== CONSENT_VERSION
    ) {
      return 'unknown';
    }

    if (Date.now() - parsed.timestamp > CONSENT_MAX_AGE_MS) {
      return 'unknown';
    }

    return parsed;
  } catch {
    return 'unknown';
  }
}

export function serializeConsent(preferences: ConsentPreferences): string {
  return JSON.stringify(preferences);
}

export function buildConsent(analytics: boolean): ConsentPreferences {
  return {
    version: CONSENT_VERSION,
    analytics,
    timestamp: Date.now(),
  };
}

export function hasAnalyticsConsent(consent: ConsentState): boolean {
  return consent !== 'unknown' && consent.analytics;
}
