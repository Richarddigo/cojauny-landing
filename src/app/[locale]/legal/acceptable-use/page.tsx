import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import LegalArticle from '@/components/LegalArticle';
import { locales, type Locale } from '@/locales/config';
import { getLegalCopy } from '@/locales/legal';

interface AcceptableUsePageProps {
    params: { locale: string };
}

export function generateMetadata({ params }: AcceptableUsePageProps): Metadata {
    const locale = params.locale as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getLegalCopy(locale).acceptableUse;

    return {
        title: copy.title,
        description: copy.intro
    };
}

const AcceptableUsePage = ({ params }: AcceptableUsePageProps) => {
    const locale = params.locale as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getLegalCopy(locale).acceptableUse;

    return <LegalArticle copy={copy} />;
};

export default AcceptableUsePage;
