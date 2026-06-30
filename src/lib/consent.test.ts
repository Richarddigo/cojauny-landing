import {
  buildConsent,
  CONSENT_MAX_AGE_MS,
  CONSENT_VERSION,
  parseConsent,
  serializeConsent,
} from './consent';

describe('consent utilities', () => {
  it('parses valid analytics-enabled consent', () => {
    const raw = serializeConsent(buildConsent(true));
    const parsed = parseConsent(raw);
    expect(parsed).not.toBe('unknown');
    if (parsed !== 'unknown') {
      expect(parsed.analytics).toBe(true);
      expect(parsed.version).toBe(CONSENT_VERSION);
    }
  });

  it('returns unknown for legacy string values', () => {
    expect(parseConsent('accepted')).toBe('unknown');
  });

  it('returns unknown for expired consent', () => {
    const expired = serializeConsent({
      version: CONSENT_VERSION,
      analytics: true,
      timestamp: Date.now() - CONSENT_MAX_AGE_MS - 1,
    });
    expect(parseConsent(expired)).toBe('unknown');
  });
});
