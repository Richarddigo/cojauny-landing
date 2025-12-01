import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import LegalArticle from '@/components/LegalArticle';
import { locales, type Locale } from '@/locales/config';
import { getLegalCopy } from '@/locales/legal';

interface CookiesPageProps {
    params: { locale: string };
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: CookiesPageProps): Metadata {
    const locale = params.locale as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getLegalCopy(locale).cookies;

    return {
        title: copy.title,
        description: copy.intro
    };
}

const CookiesPage = ({ params }: CookiesPageProps) => {
    const locale = params.locale as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getLegalCopy(locale).cookies;

    return <LegalArticle copy={copy} />;
};

export default CookiesPage;
