import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import LegalFaq from '@/components/LegalFaq';
import StructuredData from '@/components/StructuredData';
import { getAppMessages } from '@/lib/i18nMessages';
import { buildFaqJsonLd } from '@/lib/jsonld';
import { locales, type Locale } from '@/locales/config';

interface FaqPageProps {
    params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: FaqPageProps): Promise<Metadata> {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = (await getAppMessages(locale)).legal.faq;

    return {
        title: copy.title,
        description: copy.intro
    };
}

const FaqPage = async ({ params }: FaqPageProps) => {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = (await getAppMessages(locale)).legal.faq;
    const faqItems = copy.categories.flatMap((category) => category.questions);

    return (
        <>
            <StructuredData id={`ld-legal-faq-${locale}`} data={buildFaqJsonLd(faqItems)} />
            <LegalFaq copy={copy} />
        </>
    );
};

export default FaqPage;
