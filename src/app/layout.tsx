import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';

import '@/styles/globals.css';
import { env } from '@/lib/env';
import { defaultLocale, locales } from '@/locales/config';
import { siteMetadata, ogImages } from '@/lib/site';
import StructuredData from '@/components/StructuredData';
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.url),
    title: {
        default: `${siteMetadata.name} · Movilidad colaborativa sin fricciones`,
        template: `%s · ${siteMetadata.name}`
    },
    description: siteMetadata.description,
    keywords: ['movilidad', 'espera', 'invitaciones', 'listas', 'viajes compartidos'],
    authors: [{ name: siteMetadata.author }],
    openGraph: {
        title: `${siteMetadata.name} · Movilidad colaborativa sin fricciones`,
        description: siteMetadata.description,
        url: siteMetadata.url,
        siteName: siteMetadata.name,
        images: ogImages,
        locale: siteMetadata.locale,
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteMetadata.name} · Movilidad colaborativa sin fricciones`,
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
    },
    icons: {
        icon: '/icons/icon.svg',
        apple: '/icons/icon.svg',
        other: [
            {
                rel: 'mask-icon',
                url: '/icons/icon-mask.svg',
                color: siteMetadata.primaryColor
            }
        ]
    }
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang={defaultLocale} suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link rel="preload" href="/images/mockup-hero.svg" as="image" type="image/svg+xml" />
                <StructuredData id="ld-org" data={buildOrganizationJsonLd()} />
                <StructuredData id="ld-website" data={buildWebsiteJsonLd(defaultLocale)} />
                {env.NEXT_PUBLIC_ANALYTICS_ID && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_ANALYTICS_ID}`}
                            strategy="afterInteractive"
                        />
                        <Script id="ga" strategy="afterInteractive">
                            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${env.NEXT_PUBLIC_ANALYTICS_ID}', { anonymize_ip: true });
              `}
                        </Script>
                    </>
                )}
            </head>
            <body className="bg-white" data-prefers-reduced-motion="dynamic">
                {children}
            </body>
        </html>
    );
}
