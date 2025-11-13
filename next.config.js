/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ['es', 'en', 'de', 'fr'],
        defaultLocale: 'es'
    },
    images: {
        formats: ['image/avif', 'image/webp'],
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
    output: 'standalone'
};

module.exports = nextConfig;
