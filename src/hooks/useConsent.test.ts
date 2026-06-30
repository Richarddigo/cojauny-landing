/**
 * @jest-environment jsdom
 */
import { renderHook, act } from '@testing-library/react';
import { useConsent } from './useConsent';
import {
  buildConsent,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  serializeConsent,
} from '@/lib/consent';

describe('useConsent', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('starts unknown when no stored preferences exist', () => {
    const { result } = renderHook(() => useConsent());
    expect(result.current.consent).toBe('unknown');
    expect(result.current.analyticsAllowed).toBe(false);
  });

  it('restores analytics-enabled preferences', () => {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      serializeConsent(buildConsent(true)),
    );
    const { result } = renderHook(() => useConsent());
    expect(result.current.analyticsAllowed).toBe(true);
    expect(result.current.isConfigured).toBe(true);
  });

  it('restores analytics-disabled preferences', () => {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      serializeConsent(buildConsent(false)),
    );
    const { result } = renderHook(() => useConsent());
    expect(result.current.analyticsAllowed).toBe(false);
    expect(result.current.isConfigured).toBe(true);
  });

  it('acceptAll enables analytics', () => {
    const { result } = renderHook(() => useConsent());

    act(() => {
      result.current.acceptAll();
    });

    expect(result.current.analyticsAllowed).toBe(true);
    const stored = JSON.parse(window.localStorage.getItem(CONSENT_STORAGE_KEY)!);
    expect(stored.analytics).toBe(true);
    expect(stored.version).toBe(CONSENT_VERSION);
  });

  it('rejectAnalytics disables analytics', () => {
    const { result } = renderHook(() => useConsent());

    act(() => {
      result.current.rejectAnalytics();
    });

    expect(result.current.analyticsAllowed).toBe(false);
  });

  it('savePreferences stores custom analytics choice', () => {
    const { result } = renderHook(() => useConsent());

    act(() => {
      result.current.savePreferences(true);
    });

    expect(result.current.analyticsAllowed).toBe(true);
  });
});
