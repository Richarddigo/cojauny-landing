import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import LegalArticle from '@/components/LegalArticle';
import { getAppMessages } from '@/lib/i18nMessages';
import { locales, type Locale } from '@/locales/config';

interface CookiesPageProps {
    params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: CookiesPageProps): Promise<Metadata> {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = (await getAppMessages(locale)).legal.cookies;

    return {
        title: copy.title,
        description: copy.intro
    };
}

const CookiesPage = async ({ params }: CookiesPageProps) => {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = (await getAppMessages(locale)).legal.cookies;

    return <LegalArticle copy={copy} />;
};

export default CookiesPage;
