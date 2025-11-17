/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    compress: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**'
            }
        ],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production'
    },
    output: 'standalone',

    // HTTP headers for caching, security and SEO
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    { key: 'X-DNS-Prefetch-Control', value: 'on' },
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
                ]
            },
            {
                source: '/icons/:path*',
                headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
            },
            {
                source: '/images/:path*',
                headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
            }
        ];
    },

    // Optimized package imports for smaller bundles
    experimental: {
        optimizePackageImports: ['@heroicons/react', '@headlessui/react']
    }
};

module.exports = nextConfig;
