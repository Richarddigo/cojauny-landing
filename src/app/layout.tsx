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
        default: `${siteMetadata.name} - Verified airport ride sharing`,
        template: `%s - ${siteMetadata.name}`
    },
    description:
        'Match with verified passengers on your exact flight to share airport transfers. Flight-number matching, ID-verified profiles, and star ratings.',
    keywords: [
        'verified airport ride share',
        'airport transfer sharing',
        'flight coordination',
        'airport carpool app',
        'collaborative mobility'
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
        title: `${siteMetadata.name} - Verified airport ride sharing`,
        description:
            'Match with verified passengers on your exact flight to share airport transfers. Flight-number matching, ID-verified profiles, and star ratings.',
        url: siteMetadata.url,
        siteName: siteMetadata.name,
        images: ogImages,
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteMetadata.name} - Verified airport ride sharing`,
        description:
            'Match with verified passengers on your exact flight to share airport transfers.',
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

