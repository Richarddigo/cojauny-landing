import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/react';
import AccessibilitySkipLink from '@/components/AccessibilitySkipLink';
import CookieBanner from '@/components/CookieBannerLazy';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
    getCommonCopyFromMessages,
    getFooterCopyFromMessages,
    getHeaderCopyFromMessages,
} from '../../i18n/message-adapters';
import { locales, type Locale } from '@/locales/config';
import { getLandingCopy } from '@/locales/copy';
import { siteMetadata, ogImages } from '@/lib/site';
import { buildLocaleAlternates, buildRobotsMeta } from '@/lib/jsonld';

interface LocaleLayoutProps {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}

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
    const otherLocales = locales.filter((value) => value !== locale);
    const alternates = buildLocaleAlternates(locale);

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
        alternates,
        robots: buildRobotsMeta()
    };
}

export const dynamicParams = false;

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;

    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getLandingCopy(locale);
    setRequestLocale(locale);
    const landingT = await getTranslations({ locale, namespace: 'landing' });
    const headerT = await getTranslations({ locale, namespace: 'landing.header' });
    const footerT = await getTranslations({ locale, namespace: 'landing.footer' });
    const commonT = await getTranslations({ locale, namespace: 'common' });

    const commonCopy = getCommonCopyFromMessages(commonT);
    const headerCopy = getHeaderCopyFromMessages(headerT);
    const footerCopy = getFooterCopyFromMessages(footerT);

    return (
        <NextIntlClientProvider locale={locale}>
            <AccessibilitySkipLink label={landingT('skipLink')} />
            <Header locale={locale} copy={headerCopy} common={commonCopy} />
            <main id="main-content" className="relative pt-24">
                {children}
            </main>
            <Footer copy={footerCopy} locale={locale} common={commonCopy} />
            <CookieBanner copy={copy.cookie} locale={locale} />
            <Analytics />
        </NextIntlClientProvider>
    );
}
