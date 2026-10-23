import { render, screen } from '@testing-library/react';
import type { ComponentProps } from 'react';
import SupportPage, { generateMetadata } from '../src/app/[locale]/support/page';
import { siteMetadata } from '@/lib/site';

jest.mock('@/i18n/navigation', () => ({
  Link: (props: ComponentProps<'a'>) => <a {...props} />
}));

for (const locale of ['en', 'es', 'de', 'fr']) {
  test(`${locale}: app support uses the owner-confirmed app contact`, async () => {
    const params = Promise.resolve({ locale });
    render(await SupportPage({ params }));
    const contact = screen.getByRole('link', { name: 'support@cojauny.com' });
    expect(contact).toHaveAttribute('href', 'mailto:support@cojauny.com');
    expect(screen.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test(`${locale}: the contact correction preserves support metadata`, async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ locale }) });
    const path = locale === 'en' ? '/support' : `/${locale}/support`;
    expect(metadata.alternates?.canonical).toBe(`https://cojauny.com${path}`);
  });
}

test('the app contact correction preserves the existing shared contact', () => {
  expect(siteMetadata.contactEmail).toBe('support@cojauny.com');
});

const approvedSupportCopy = {
  en: { languages: /Spanish and German; for other languages, please use English/, noIdentity: /Cojauny v1 does not collect identity documents/ },
  es: { languages: /español y alemán; para los demás idiomas, utiliza el inglés/, noIdentity: /Cojauny v1 no recoge documentos de identidad/ },
  de: { languages: /Spanisch und Deutsch; für andere Sprachen verwende bitte Englisch/, noIdentity: /Cojauny v1 erhebt keine Ausweisdokumente/ },
  fr: { languages: /espagnol et en allemand ; pour les autres langues, veuillez utiliser l’anglais/, noIdentity: /Cojauny v1 ne recueille pas de pièces d’identité/ }
};
for (const [locale, copy] of Object.entries(approvedSupportCopy)) {
  test(`${locale}: real support page explains contact languages and rejects identity collection`, async () => {
    render(await SupportPage({ params: Promise.resolve({ locale }) }));
    expect(screen.getByText(copy.languages)).toBeVisible();
    expect(screen.getByText(copy.noIdentity)).toBeVisible();
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'support@cojauny.com' })).toHaveAttribute('href', 'mailto:support@cojauny.com');
  });
}
