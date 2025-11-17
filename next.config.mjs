/**
 * Next.js configuration tuned for multilingual SEO and performance.
 * Defines i18n locales, security headers and aggressive caching for static assets.
 */
const LOCALES = ['es', 'en', 'fr', 'de'];

const securityHeaders = [
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
        value: 'geolocation=()'
    }
];

const cacheHeaders = [
    {
        source: '/:path*',
        headers: securityHeaders
    },
    {
        source: '/(assets|images|fonts)/:path*',
        headers: [
            {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable'
            }
        ]
    },
    {
        source: '/_next/static/:path*',
        headers: [
            {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable'
            }
        ]
    }
];

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        optimizeCss: true,
        scrollRestoration: true
    },
    i18n: {
        locales: LOCALES,
        defaultLocale: 'es',
        localeDetection: true
    },
    images: {
        formats: ['image/avif', 'image/webp']
    },
    headers: async () => cacheHeaders
};

export default nextConfig;
