import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import HeroBetaCapture from '@/components/HeroBetaCapture';
import { apiClient } from '@/lib/api-client';
import { getLandingCopy } from '@/locales/copy';
import { localeValues } from '@/locales/config';

jest.mock('@/lib/api-client', () => ({
  apiClient: { beta: { signup: jest.fn().mockResolvedValue({ success: true }) } },
  ApiError: class extends Error {},
}));
jest.mock('@/lib/analytics', () => ({
  trackBetaSignup: jest.fn(),
  trackSignupStep: jest.fn(),
}));

describe('hero capture through the upgraded validation schema', () => {
  it.each(localeValues)(
    'preserves consent and localized success in %s',
    async (locale) => {
      const copy = getLandingCopy(locale);
      render(
        <HeroBetaCapture
          locale={locale}
          copy={copy.heroQuickSignup}
          betaCopy={copy.forms.beta}
        />,
      );
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'synthetic@example.org' },
      });
      fireEvent.click(screen.getByRole('checkbox'));
      fireEvent.submit(
        screen.getByRole('form', { name: copy.heroQuickSignup.ariaLabel }),
      );
      await waitFor(() =>
        expect(screen.getByRole('status')).toHaveTextContent(
          copy.heroQuickSignup.success,
        ),
      );
      expect(apiClient.beta.signup).toHaveBeenCalledWith(
        expect.objectContaining({
          email: 'synthetic@example.org',
          locale,
          termsAccepted: true,
          privacyAccepted: true,
        }),
      );
    },
  );

  it.each(['missing-consent', 'invalid-email'])(
    'rejects %s locally with no submission',
    async (invalid) => {
      const copy = getLandingCopy('es');
      render(
        <HeroBetaCapture
          locale="es"
          copy={copy.heroQuickSignup}
          betaCopy={copy.forms.beta}
        />,
      );
      fireEvent.change(screen.getByRole('textbox'), {
        target: {
          value: invalid === 'invalid-email' ? 'invalid' : 'synthetic@example.org',
        },
      });
      if (invalid === 'invalid-email') fireEvent.click(screen.getByRole('checkbox'));
      fireEvent.submit(
        screen.getByRole('form', { name: copy.heroQuickSignup.ariaLabel }),
      );
      await waitFor(() =>
        expect(screen.getByRole('status')).toHaveTextContent(copy.forms.beta.error),
      );
      expect(apiClient.beta.signup).not.toHaveBeenCalled();
    },
  );
});
