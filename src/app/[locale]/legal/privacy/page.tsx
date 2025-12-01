import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import LegalArticle from '@/components/LegalArticle';
import { locales, type Locale } from '@/locales/config';
import { getLegalCopy } from '@/locales/legal';

interface PrivacyPageProps {
    params: { locale: string };
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: PrivacyPageProps): Metadata {
    const locale = params.locale as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getLegalCopy(locale).privacy;

    return {
        title: copy.title,
        description: copy.intro
    };
}

const PrivacyPage = ({ params }: PrivacyPageProps) => {
    const locale = params.locale as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getLegalCopy(locale).privacy;

    return <LegalArticle copy={copy} />;
};

export default PrivacyPage;
