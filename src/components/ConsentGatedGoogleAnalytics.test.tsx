import { act, render } from '@testing-library/react';
import ConsentGatedGoogleAnalytics from './ConsentGatedGoogleAnalytics';
import GoogleConsentMode from './GoogleConsentMode';
import { buildConsent, CONSENT_STORAGE_KEY, serializeConsent } from '@/lib/consent';
import { readConsent, saveConsent } from '@/lib/consent-store';
import { trackSignupStep } from '@/lib/analytics';

type DeferredScript = {
  id?: string;
  src?: string;
  children?: unknown;
  onReady?: () => void;
};
const mockScripts: DeferredScript[] = [];
const analyticsId = 'G-LOCAL-TEST-ONLY';

jest.mock('@/lib/env', () => ({
  env: { NEXT_PUBLIC_ANALYTICS_ID: 'G-LOCAL-TEST-ONLY' },
}));
jest.mock('next/script', () => ({
  __esModule: true,
  default: (props: DeferredScript) => {
    mockScripts.push(props);
    return null;
  },
}));

function captureDeferredInitialization() {
  const inline = [...mockScripts].reverse().find((script) => script.id === 'ga');
  if (typeof inline?.children === 'string') {
    const source = inline.children;
    return () => {
      window.eval(source);
    };
  }
  const script = [...mockScripts]
    .reverse()
    .find((item) => item.src?.includes('googletagmanager.com'));
  if (!script?.onReady)
    throw new Error('No deferred Google Analytics initialization was prepared');
  return script.onReady;
}

const calls = () =>
  (window.dataLayer ?? []).map((item) => Array.from(item as ArrayLike<unknown>));
const optedOut = () =>
  (window as unknown as Record<string, unknown>)[`ga-disable-${analyticsId}`];

describe('Google Analytics consent at SDK initialization and revocation', () => {
  const originalAnalyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  beforeEach(() => {
    act(() => saveConsent(buildConsent(false)));
    localStorage.clear();
    mockScripts.length = 0;
    process.env.NEXT_PUBLIC_ANALYTICS_ID = analyticsId;
    window.dataLayer = [];
    window.gtag = jest.fn((...args: unknown[]) => {
      window.dataLayer?.push(args);
    });
  });
  afterEach(() => {
    jest.restoreAllMocks();
    act(() => saveConsent(buildConsent(false)));
    if (originalAnalyticsId === undefined) delete process.env.NEXT_PUBLIC_ANALYTICS_ID;
    else process.env.NEXT_PUBLIC_ANALYTICS_ID = originalAnalyticsId;
  });

  it('does not prepare the SDK without a valid choice', () => {
    render(
      <>
        <GoogleConsentMode />
        <ConsentGatedGoogleAnalytics />
      </>,
    );
    expect(mockScripts).toHaveLength(0);
    expect(optedOut()).toBe(true);
    expect(calls().some((call) => call[0] === 'config')).toBe(false);
  });

  it('configures the test SDK after a real accepted choice', () => {
    render(
      <>
        <GoogleConsentMode />
        <ConsentGatedGoogleAnalytics />
      </>,
    );
    act(() => saveConsent(buildConsent(true)));
    act(() => captureDeferredInitialization()());
    expect(optedOut()).toBe(false);
    expect(calls()).toContainEqual(['config', analyticsId, { anonymize_ip: true }]);
  });

  it('does not let initialization queued before revocation re-enable analytics', () => {
    render(
      <>
        <GoogleConsentMode />
        <ConsentGatedGoogleAnalytics />
      </>,
    );
    act(() => saveConsent(buildConsent(true)));
    const delayed = captureDeferredInitialization();
    act(() => saveConsent(buildConsent(false)));
    window.dataLayer = [];
    act(() => delayed());
    expect(optedOut()).toBe(true);
    expect(calls().some((call) => call[0] === 'config')).toBe(false);
    expect(
      calls().some(
        (call) =>
          call[0] === 'consent' &&
          (call[2] as { analytics_storage?: string })?.analytics_storage === 'granted',
      ),
    ).toBe(false);
  });

  it('revokes an already initialized SDK synchronously even when persistence fails', () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, serializeConsent(buildConsent(true)));
    render(
      <>
        <GoogleConsentMode />
        <ConsentGatedGoogleAnalytics />
      </>,
    );
    act(() => captureDeferredInitialization()());
    window.dataLayer = [];
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('Storage full', 'QuotaExceededError');
    });
    let disabledBeforeReturn: unknown;
    act(() => {
      saveConsent(buildConsent(false));
      disabledBeforeReturn = optedOut();
    });
    expect(JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY)!).analytics).toBe(true);
    expect(readConsent()).toEqual(expect.objectContaining({ analytics: false }));
    expect(disabledBeforeReturn).toBe(true);
    expect(calls()).toContainEqual([
      'consent',
      'update',
      expect.objectContaining({ analytics_storage: 'denied' }),
    ]);
    trackSignupStep('start', 'hero');
    expect(calls().some((call) => call[0] === 'event')).toBe(false);
  });

  it('replaces a failed-write override after a later successful explicit choice', () => {
    render(
      <>
        <GoogleConsentMode />
        <ConsentGatedGoogleAnalytics />
      </>,
    );
    act(() => saveConsent(buildConsent(true)));
    const write = jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('Storage full', 'QuotaExceededError');
    });
    act(() => saveConsent(buildConsent(false)));
    expect(optedOut()).toBe(true);
    write.mockRestore();
    act(() => saveConsent(buildConsent(true)));
    expect(readConsent()).toEqual(expect.objectContaining({ analytics: true }));
    expect(optedOut()).toBe(false);
    act(() => captureDeferredInitialization()());
    expect(calls()).toContainEqual(['config', analyticsId, { anonymize_ip: true }]);
  });

  it('retires a local override when another document clears the stored preference', () => {
    render(
      <>
        <GoogleConsentMode />
        <ConsentGatedGoogleAnalytics />
      </>,
    );
    act(() => saveConsent(buildConsent(true)));
    const delayed = captureDeferredInitialization();
    const write = jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('Storage full', 'QuotaExceededError');
    });
    act(() => saveConsent(buildConsent(false)));
    write.mockRestore();
    act(() => {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      window.dispatchEvent(new StorageEvent('storage', { key: CONSENT_STORAGE_KEY }));
    });
    expect(readConsent()).toBe('unknown');
    expect(optedOut()).toBe(true);
    window.dataLayer = [];
    act(() => delayed());
    expect(calls().some((call) => call[0] === 'config')).toBe(false);
  });

  it('fails closed when a previously valid stored preference is corrupted externally', () => {
    act(() => saveConsent(buildConsent(true)));
    render(
      <>
        <GoogleConsentMode />
        <ConsentGatedGoogleAnalytics />
      </>,
    );
    const delayed = captureDeferredInitialization();
    act(() => {
      localStorage.setItem(CONSENT_STORAGE_KEY, '{invalid');
      window.dispatchEvent(new StorageEvent('storage', { key: CONSENT_STORAGE_KEY }));
    });
    expect(readConsent()).toBe('unknown');
    expect(optedOut()).toBe(true);
    window.dataLayer = [];
    act(() => delayed());
    expect(calls().some((call) => call[0] === 'config')).toBe(false);
  });

  it('honors the current document choice and revocation when storage reads are blocked', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('Blocked', 'SecurityError');
    });
    render(
      <>
        <GoogleConsentMode />
        <ConsentGatedGoogleAnalytics />
      </>,
    );
    expect(optedOut()).toBe(true);
    act(() => saveConsent(buildConsent(true)));
    expect(optedOut()).toBe(false);
    act(() => captureDeferredInitialization()());
    expect(calls()).toContainEqual(['config', analyticsId, { anonymize_ip: true }]);
    act(() => saveConsent(buildConsent(false)));
    expect(readConsent()).toEqual(expect.objectContaining({ analytics: false }));
    expect(optedOut()).toBe(true);
  });

  it.each([null, '{invalid', serializeConsent(buildConsent(false))])(
    'does not resurrect a retired grant if a subsequent storage read fails (%s)',
    (retired) => {
      act(() => saveConsent(buildConsent(true)));
      render(
        <>
          <GoogleConsentMode />
          <ConsentGatedGoogleAnalytics />
        </>,
      );
      if (retired === null) localStorage.removeItem(CONSENT_STORAGE_KEY);
      else localStorage.setItem(CONSENT_STORAGE_KEY, retired);
      expect(readConsent()).not.toEqual(expect.objectContaining({ analytics: true }));
      jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
        throw new DOMException('Blocked', 'SecurityError');
      });
      act(() => window.dispatchEvent(new Event('cojauny:consent')));
      expect(readConsent()).not.toEqual(expect.objectContaining({ analytics: true }));
      expect(optedOut()).toBe(true);
    },
  );
});
