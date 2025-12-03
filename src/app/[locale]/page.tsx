import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import LandingPageContent from '@/components/LandingPageContent';
import StructuredData from '@/components/StructuredData';
import { locales, type Locale } from '@/locales/config';
import { getLandingCopy } from '@/locales/copy';
import { siteMetadata } from '@/lib/site';
import {
    buildSoftwareAppJsonLd,
    buildFaqJsonLd,
    buildBreadcrumbJsonLd,
    buildLocaleAlternates
} from '@/lib/jsonld';
import { getFaqEntries } from '@/lib/faq';

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

    const copy = getLandingCopy(locale);

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

    const copy = getLandingCopy(locale);
    const faqItems = getFaqEntries(locale);

    const breadcrumb = buildBreadcrumbJsonLd(locale, [
        { name: 'Cojauny', absoluteUrl: siteMetadata.url },
        { name: copy.header.home, path: '' }
    ]);

    return (
        <>
            <StructuredData id={`ld-app-${locale}`} data={buildSoftwareAppJsonLd(locale)} />
            <StructuredData id={`ld-faq-${locale}`} data={buildFaqJsonLd(faqItems)} />
            <StructuredData id={`ld-breadcrumb-${locale}`} data={breadcrumb} />
            <LandingPageContent copy={copy} locale={locale} />
        </>
    );
}
