import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';

import '@/styles/globals.css';
import { env } from '@/lib/env';
import { defaultLocale } from '@/locales/config';
import { siteMetadata, structuredData, ogImages } from '@/lib/site';

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
        canonical: siteMetadata.url
    },
    category: 'business',
    robots: {
        index: true,
        follow: true
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
                <Script id="ld-json" type="application/ld+json" strategy="beforeInteractive">
                    {JSON.stringify(structuredData)}
                </Script>
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
