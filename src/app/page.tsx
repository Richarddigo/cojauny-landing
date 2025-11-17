import { defaultLocale } from '@/locales/config';
import LandingPageContent from '@/components/LandingPageContent';
import { getLandingCopy } from '@/locales/copy';

export const revalidate = 60;

export default function Page() {
    const locale = defaultLocale;
    const copy = getLandingCopy(locale);

    return <LandingPageContent copy={copy} locale={locale} />;
}
