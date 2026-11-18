import {
  CONSENT_STORAGE_KEY,
  parseConsent,
  serializeConsent,
  type ConsentPreferences,
  type ConsentState,
} from './consent';

const eventName = 'cojauny:consent';
let cachedRaw: string | null | undefined;
let cached: ConsentState = 'unknown';
let fallback: string | null = null;
// A failed write cannot make the preceding durable grant override this choice.
// This overlay lasts for the document; only a successful write or a fresh
// cross-document storage notification supersedes it.
let failedWriteOverride: string | undefined;

export function readConsent(): ConsentState {
  if (typeof window === 'undefined') return 'unknown';
  let raw: string | null;
  if (failedWriteOverride !== undefined) raw = failedWriteOverride;
  else
    try {
      raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
      // Remember the latest observed state, including removal/corruption/denial.
      // A later read error must not resurrect an older accepted snapshot.
      fallback = raw;
    } catch {
      raw = fallback;
    }
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cached = parseConsent(raw);
  }
  if (cached !== 'unknown' && parseConsent(raw) === 'unknown') cached = 'unknown';
  return cached;
}

export function saveConsent(preferences: ConsentPreferences): void {
  fallback = serializeConsent(preferences);
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, fallback);
    failedWriteOverride = undefined;
  } catch {
    failedWriteOverride = fallback;
  }
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `cojauny_analytics_consent=${preferences.analytics ? 'granted' : 'denied'}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
  if (!preferences.analytics)
    document.cookie = `hero_variant=; Path=/; Max-Age=0; SameSite=Lax${secure}`;
  window.dispatchEvent(new Event(eventName));
}

export function subscribeConsent(listener: () => void): () => void {
  const onStorage = (event: StorageEvent) => {
    if (event.key === CONSENT_STORAGE_KEY || event.key === null) {
      failedWriteOverride = undefined;
      fallback = null;
      listener();
    }
  };
  window.addEventListener(eventName, listener);
  window.addEventListener('storage', onStorage);
  const timer = window.setInterval(listener, 60_000);
  return () => {
    window.removeEventListener(eventName, listener);
    window.removeEventListener('storage', onStorage);
    window.clearInterval(timer);
  };
}
