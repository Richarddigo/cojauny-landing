import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import LegalArticle from '@/components/LegalArticle';
import { getAppMessages } from '@/lib/i18nMessages';
import { locales, type Locale } from '@/locales/config';

interface AcceptableUsePageProps {
    params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: AcceptableUsePageProps): Promise<Metadata> {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = (await getAppMessages(locale)).legal.acceptableUse;

    return {
        title: copy.title,
        description: copy.intro
    };
}

const AcceptableUsePage = async ({ params }: AcceptableUsePageProps) => {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = (await getAppMessages(locale)).legal.acceptableUse;

    return <LegalArticle copy={copy} />;
};

export default AcceptableUsePage;
