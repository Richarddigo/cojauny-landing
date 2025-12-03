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
    // No forzar export estático en producción: permite runtime 'edge' y API routes
    poweredByHeader: false,
    compress: true,

    experimental: {
        optimizeCss: true,
        scrollRestoration: true,
        optimizePackageImports: ['@heroicons/react', '@headlessui/react']
    },

    // Allow cross-origin dev requests from known local development origins.
    // Next.js will warn in future versions unless these are explicitly allowed.
    // Add your local machine IP and localhost (with port) used for testing.
    allowedDevOrigins: [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'http://192.168.0.169:3000'
    ],

    images: {
        unoptimized: true,
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

    // Headers are not supported in 'output: export'
    // headers: async () => cacheHeaders
};

export default nextConfig;
