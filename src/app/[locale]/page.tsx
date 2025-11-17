import { notFound } from 'next/navigation';

import LandingPageContent from '@/components/LandingPageContent';
import { locales, type Locale } from '@/locales/config';
import { getLandingCopy } from '@/locales/copy';

interface LocalePageProps {
    params: { locale: string };
}

export const revalidate = 60;

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default function LocalePage({ params }: LocalePageProps) {
    const locale = params.locale as Locale;

    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getLandingCopy(locale);

    return <LandingPageContent copy={copy} locale={locale} />;
}
