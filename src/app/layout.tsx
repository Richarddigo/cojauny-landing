import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';
import FloatingSocialBar from '@/components/FloatingSocialBar';
import ConsentGatedGoogleAnalytics from '@/components/ConsentGatedGoogleAnalytics';
import GoogleConsentMode from '@/components/GoogleConsentMode';
import StructuredData from '@/components/StructuredData';
import { defaultLocale, locales } from '@/locales/config';
import { siteMetadata, ogImages } from '@/lib/site';
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from '@/lib/jsonld';

const inter = Inter({
    subsets: ['latin'],
    display: 'optional',
    variable: '--font-inter'
});

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.url),
    title: {
        default: `${siteMetadata.name} - Traslados compartidos coordinados por vuelo`,
        template: `%s - ${siteMetadata.name}`
    },
    description: siteMetadata.description,
    keywords: [
        'traslado aeropuerto compartido',
        'airport ride sharing',
        'flight coordination',
        'carpool aeropuerto',
        'movilidad colaborativa'
    ],
    authors: [{ name: siteMetadata.author }],
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/icon.svg', type: 'image/svg+xml' }
        ],
        apple: '/apple-icon.png'
    },
    openGraph: {
        title: `${siteMetadata.name} - Traslados compartidos coordinados por vuelo`,
        description: siteMetadata.description,
        url: siteMetadata.url,
        siteName: siteMetadata.name,
        images: ogImages,
        locale: siteMetadata.locale,
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteMetadata.name} - Traslados compartidos coordinados por vuelo`,
        description: siteMetadata.description,
        site: siteMetadata.twitter,
        creator: siteMetadata.twitter
    },
    alternates: {
        canonical: siteMetadata.url,
        languages: Object.fromEntries(
            locales.map((locale) => [locale, `${siteMetadata.url}/${locale}`]).concat([
                ['x-default', siteMetadata.url]
            ])
        )
    },
    category: 'business',
    robots: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1
    }
    // Los iconos se generan automaticamente desde:
    // - src/app/icon.tsx (favicon 32x32)
    // - src/app/apple-icon.tsx (apple-touch-icon 180x180)
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang={defaultLocale} suppressHydrationWarning className={`${inter.variable}`}>
            <head>
                <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <link
                    rel="alternate"
                    type="application/rss+xml"
                    title="Cojauny Blog"
                    href={`${siteMetadata.url}/rss.xml`}
                />
                <GoogleConsentMode />
                <StructuredData id="ld-org" data={buildOrganizationJsonLd()} />
                <StructuredData id="ld-website" data={buildWebsiteJsonLd(defaultLocale)} />
            </head>
            <body className="bg-studio-bg font-sans antialiased text-studio-text" data-prefers-reduced-motion="dynamic">
                <FloatingSocialBar />
                {children}
                <ConsentGatedGoogleAnalytics />
            </body>
        </html>
    );
}

