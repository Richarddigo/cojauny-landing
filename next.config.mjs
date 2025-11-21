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
    },
    {
        source: '/icons/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
    }
];

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    poweredByHeader: false,
    compress: true,

    experimental: {
        optimizeCss: true,
        scrollRestoration: true,
        optimizePackageImports: ['@heroicons/react', '@headlessui/react']
    },



    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**'
            }
        ]
    },

    compiler: {
        removeConsole: process.env.NODE_ENV === 'production'
    },

    headers: async () => cacheHeaders
};

export default nextConfig;
