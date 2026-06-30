import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import LandingPageContent from '@/components/LandingPageContent';
import StructuredData from '@/components/StructuredData';
import { getCommonCopyFromMessages } from '../../i18n/message-adapters';
import { locales, type Locale } from '@/locales/config';
import { getAppMessages } from '@/lib/i18nMessages';
import { siteMetadata } from '@/lib/site';
import {
    buildSoftwareAppJsonLd,
    buildFaqJsonLd,
    buildBreadcrumbJsonLd,
    buildLocaleAlternates
} from '@/lib/jsonld';
import { getFaqEntries } from '@/lib/faq';
import { filterFaqForPhase } from '@/lib/faqFilters';

interface LocalePageProps {
    params: Promise<{ locale: string }>;
}

export const revalidate = 60;

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;

    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = (await getAppMessages(locale)).landing;

    return {
        title: copy.seo.title,
        description: copy.seo.description,
        alternates: buildLocaleAlternates(locale)
    };
}

export default async function LocalePage({ params }: LocalePageProps) {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;

    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = (await getAppMessages(locale)).landing;
    const commonT = await getTranslations({ locale, namespace: 'common' });
    const commonCopy = getCommonCopyFromMessages(commonT);
    const faqItems = filterFaqForPhase(getFaqEntries(locale));

    const breadcrumb = buildBreadcrumbJsonLd(locale, [
        { name: 'Cojauny', absoluteUrl: siteMetadata.url },
        { name: copy.header.home, path: '' }
    ]);

    return (
        <>
            <StructuredData id={`ld-app-${locale}`} data={buildSoftwareAppJsonLd(locale)} />
            <StructuredData id={`ld-faq-${locale}`} data={buildFaqJsonLd(faqItems)} />
            <StructuredData id={`ld-breadcrumb-${locale}`} data={breadcrumb} />
            <LandingPageContent copy={copy} locale={locale} common={commonCopy} />
        </>
    );
}
