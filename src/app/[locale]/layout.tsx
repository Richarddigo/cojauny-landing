import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

import AccessibilitySkipLink from '@/components/AccessibilitySkipLink';
import CookieBanner from '@/components/CookieBanner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { locales, defaultLocale, type Locale } from '@/locales/config';
import { getLandingCopy } from '@/locales/copy';
import { siteMetadata, ogImages } from '@/lib/site';

interface LocaleLayoutProps {
    children: ReactNode;
    params: { locale: string };
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
    const locale = params.locale as Locale;

    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getLandingCopy(locale);

    const otherLocales = locales.filter((value) => value !== locale);

    return {
        metadataBase: new URL(siteMetadata.url),
        title: copy.seo.title,
        description: copy.seo.description,
        keywords: copy.seo.keywords,
        openGraph: {
            title: copy.seo.ogTitle,
            description: copy.seo.ogDescription,
            url: `${siteMetadata.url}/${locale}`,
            siteName: siteMetadata.name,
            images: ogImages,
            locale,
            alternateLocale: otherLocales
        },
        twitter: {
            card: 'summary_large_image',
            title: copy.seo.ogTitle,
            description: copy.seo.ogDescription,
            site: siteMetadata.twitter,
            creator: siteMetadata.twitter
        },
        alternates: {
            canonical: `${siteMetadata.url}/${locale}`,
            languages: Object.fromEntries(locales.map((value) => [value, `${siteMetadata.url}/${value}`]))
        }
    };
}

export const dynamicParams = false;

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const locale = params.locale as Locale;

    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getLandingCopy(locale);

    return (
        <>
            <AccessibilitySkipLink label={copy.skipLink} />
            <Header locale={locale} copy={copy.header} />
            <main id="main-content" className="relative pt-24">
                {children}
            </main>
            <Footer copy={copy.footer} locale={locale} />
            <CookieBanner copy={copy.cookie} locale={locale} />
        </>
    );
}
