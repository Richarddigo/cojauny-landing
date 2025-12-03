import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import LegalArticle from '@/components/LegalArticle';
import { locales, type Locale } from '@/locales/config';
import { getLegalCopy } from '@/locales/legal';

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

    const copy = getLegalCopy(locale).cookies;

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

    const copy = getLegalCopy(locale).cookies;

    return <LegalArticle copy={copy} />;
};

export default CookiesPage;
