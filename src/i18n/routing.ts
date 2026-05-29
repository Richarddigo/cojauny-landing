import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'es', 'de', 'fr'],
    defaultLocale: 'en',
    localePrefix: 'as-needed',
    // Server-side detection via Accept-Language header (next-intl middleware).
    // Faster than the previous client-side DetectLocale redirect (avoids double paint + wasted ~2.8s).
    localeDetection: true,
});

export type Locale = (typeof routing.locales)[number];
