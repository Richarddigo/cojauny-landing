import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import LegalFaq from '@/components/LegalFaq';
import { locales, type Locale } from '@/locales/config';
import { getLegalCopy } from '@/locales/legal';

interface FaqPageProps {
    params: { locale: string };
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: FaqPageProps): Metadata {
    const locale = params.locale as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getLegalCopy(locale).faq;

    return {
        title: copy.title,
        description: copy.intro
    };
}

const FaqPage = ({ params }: FaqPageProps) => {
    const locale = params.locale as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getLegalCopy(locale).faq;

    return <LegalFaq copy={copy} />;
};

export default FaqPage;
