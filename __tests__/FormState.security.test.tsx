import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import BetaSignupForm from '@/components/BetaSignupForm';
import FeedbackForm from '@/components/FeedbackForm';
import { apiClient } from '@/lib/api-client';
import { getLandingCopy } from '@/locales/copy';

jest.mock('@/lib/api-client', () => ({
  apiClient: {
    beta: { signup: jest.fn().mockResolvedValue({ success: true, referralLink: '' }) },
    referral: { visit: jest.fn().mockResolvedValue(undefined) },
  },
  ApiError: class extends Error {},
}));
jest.mock('@/lib/analytics', () => ({
  trackBetaSignup: jest.fn(),
  trackSignupStep: jest.fn(),
}));
jest.mock('@/components/ReferralPanel', () => ({
  __esModule: true,
  default: () => null,
}));
jest.mock('@/i18n/useAppMessages', () => ({
  useAppMessages: () => ({
    landing: jest.requireActual('@/locales/copy').getLandingCopy('es'),
  }),
}));

afterEach(() => {
  window.history.replaceState({}, '', '/');
});

describe('affected form state contracts', () => {
  it.each([
    ['AB12demo', 'AB12demo'],
    ['../malformed', undefined],
  ])('keeps validated referral attribution for %s', async (query, expected) => {
    window.history.replaceState({}, '', `/?ref=${encodeURIComponent(query)}`);
    const copy = getLandingCopy('es');
    render(
      <BetaSignupForm
        copy={copy.forms.beta}
        referralPanelCopy={copy.referralPanel}
        locale="es"
      />,
    );
    const fullNameLabel = copy.forms.beta.fields.fullName;
    if (!fullNameLabel)
      throw new Error('The signup fixture requires the full name label');
    fireEvent.change(screen.getByLabelText(fullNameLabel), {
      target: { value: 'Cojauny Demo' },
    });
    fireEvent.change(screen.getByLabelText(copy.forms.beta.fields.email), {
      target: { value: 'synthetic@example.org' },
    });
    screen.getAllByRole('checkbox').forEach((input) => fireEvent.click(input));
    const submit = screen.getByRole('button', { name: copy.forms.beta.submit });
    fireEvent.submit(submit.closest('form')!);
    await waitFor(() => expect(apiClient.beta.signup).toHaveBeenCalled());
    expect(apiClient.beta.signup).toHaveBeenCalledWith(
      expect.objectContaining({ referralCode: expected }),
    );
    if (expected) expect(apiClient.referral.visit).toHaveBeenCalledTimes(1);
    else expect(apiClient.referral.visit).not.toHaveBeenCalled();
  });

  it('resets feedback input when the locale changes', () => {
    const spanish = getLandingCopy('es');
    const german = getLandingCopy('de');
    const { rerender } = render(
      <FeedbackForm copy={spanish.forms.feedback} locale="es" />,
    );
    fireEvent.change(screen.getByLabelText(spanish.forms.feedback.fields.email), {
      target: { value: 'synthetic@example.org' },
    });
    rerender(<FeedbackForm copy={german.forms.feedback} locale="de" />);
    expect(screen.getByLabelText(german.forms.feedback.fields.email)).toHaveValue('');
  });

  it('preserves feedback input when the locale is unchanged', () => {
    const copy = getLandingCopy('es');
    const { rerender } = render(<FeedbackForm copy={copy.forms.feedback} locale="es" />);
    fireEvent.change(screen.getByLabelText(copy.forms.feedback.fields.email), {
      target: { value: 'synthetic@example.org' },
    });
    rerender(<FeedbackForm copy={copy.forms.feedback} locale="es" />);
    expect(screen.getByLabelText(copy.forms.feedback.fields.email)).toHaveValue(
      'synthetic@example.org',
    );
  });
});
