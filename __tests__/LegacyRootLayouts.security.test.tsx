/** @jest-environment node */
import { renderToStaticMarkup } from 'react-dom/server';
import { redirect } from 'next/navigation';
import LegalLayout from '../src/app/legal/layout';
import DocsLayout from '../src/app/docs/layout';
import CookiesPage from '../src/app/legal/cookies/page';
import FaqPage from '../src/app/legal/faq/page';
import PrivacyPage from '../src/app/legal/privacidad/page';
import SubprocessorsPage from '../src/app/legal/subprocesadores/page';
import TermsPage from '../src/app/legal/terminos/page';
import AcceptableUsePage from '../src/app/legal/uso-aceptable/page';
import SdkPlanPage from '../src/app/docs/sdk-plan/page';
import { defaultLocale } from '@/locales/config';

jest.mock('next/font/google', () => ({
  Inter: () => ({ variable: 'synthetic-font-variable' }),
}));
jest.mock('next/navigation', () => ({
  redirect: jest.fn(() => {
    throw new Error('synthetic-next-redirect');
  }),
}));
jest.mock('@/components/FloatingSocialBar', () => () => null);
jest.mock('@/components/GoogleConsentMode', () => () => null);
jest.mock('@/components/ConsentGatedGoogleAnalytics', () => () => null);

describe('legacy redirect roots after the patched Next upgrade', () => {
  it.each([
    ['legal', LegalLayout],
    ['docs', DocsLayout],
  ])('renders one actual document for the %s subtree', (_, Layout) => {
    const html = renderToStaticMarkup(
      <Layout><main>synthetic-child-content</main></Layout>,
    );
    expect(html.match(/<html\b/g)).toHaveLength(1);
    expect(html.match(/<body\b/g)).toHaveLength(1);
    expect(html).toContain(`<html lang="${defaultLocale}"`);
    expect(html).toContain('<main>synthetic-child-content</main>');
  });

  it.each([
    ['cookies', CookiesPage, 'legal/cookies'],
    ['faq', FaqPage, 'legal/faq'],
    ['privacy', PrivacyPage, 'legal/privacy'],
    ['subprocessors', SubprocessorsPage, 'legal/subprocessors'],
    ['terms', TermsPage, 'legal/terms'],
    ['acceptable use', AcceptableUsePage, 'legal/acceptable-use'],
    ['SDK plan', SdkPlanPage, 'docs/sdk-plan'],
  ])('preserves the existing %s handler destination', (_, Page, target) => {
    expect(Page).toThrow('synthetic-next-redirect');
    expect(redirect).toHaveBeenCalledTimes(1);
    expect(redirect).toHaveBeenCalledWith(`/${defaultLocale}/${target}`);
  });
});
