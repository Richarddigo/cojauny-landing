/**
 * Next.js configuration tuned for multilingual SEO and performance.
 * Uses next-intl for locale routing. Defines security headers and caching.
 */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
const isProd = process.env.NODE_ENV === 'production';

const securityHeaders = [
    {
        key: 'Content-Security-Policy-Report-Only',
        value: "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://challenges.cloudflare.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://*.google-analytics.com https://www.googletagmanager.com; font-src 'self'; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.vercel-insights.com; frame-src https://challenges.cloudflare.com"
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    },
    {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin'
    },
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()'
    },
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
    }
];

const cacheHeaders = [
    {
        source: '/:path*',
        headers: securityHeaders
    },
    ...(isProd
        ? [
            {
                source: '/(assets|images|fonts)/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, must-revalidate'
                    }
                ]
            },
            {
                source: '/icons/:path*',
                headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, must-revalidate' }]
            }
        ]
        : [])
];

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,

    experimental: {
        optimizeCss: true,
        scrollRestoration: true,
        optimizePackageImports: ['@heroicons/react', '@headlessui/react', 'next-intl']
    },

    // Allow cross-origin dev requests from known local development origins.
    // Next.js will warn in future versions unless these are explicitly allowed.
    // Add your local machine IP and localhost (with port) used for testing.
    allowedDevOrigins: [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'http://192.168.0.152:3000'
    ],

    images: {
        formats: ['image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000,
        remotePatterns: []
    },

    compiler: {
        removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false
    },

    headers: async () => cacheHeaders,

    redirects: async () => [
        // Contact page is centralized in cojauny-studio. Redirect any legacy traffic.
        { source: '/:locale(es|en|de|fr)/contact', destination: 'https://studio.cojauny.com/:locale/contact', permanent: true },
        { source: '/contact', destination: 'https://studio.cojauny.com/contact', permanent: true }
    ]
};

export default withNextIntl(nextConfig);
