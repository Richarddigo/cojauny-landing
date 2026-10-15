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
