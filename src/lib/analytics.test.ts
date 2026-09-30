import { trackBetaSignup, trackHeroVariant, trackSignupStep } from './analytics';
import { buildConsent } from './consent';
import { saveConsent } from './consent-store';

describe('analytics consent boundary', () => {
  beforeEach(() => { localStorage.clear(); window.gtag = jest.fn(); });
  it('does not emit conversions, impressions or starts without consent', () => {
    trackBetaSignup('hero'); trackHeroVariant('trust'); trackSignupStep('start', 'hero');
    expect(window.gtag).not.toHaveBeenCalled();
  });
  it('stops event emission after revocation', () => {
    saveConsent(buildConsent(true));
    trackBetaSignup('full_form');
    expect(window.gtag).toHaveBeenCalledWith('event', 'beta_signup', expect.objectContaining({ event_label: 'full_form' }));
    jest.mocked(window.gtag!).mockClear();
    saveConsent(buildConsent(false));
    trackBetaSignup('hero'); trackHeroVariant('savings');
    expect(window.gtag).not.toHaveBeenCalled();
  });
});
