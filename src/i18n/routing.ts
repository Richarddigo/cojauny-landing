import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['es', 'en', 'de', 'fr'],
    defaultLocale: 'es',
    localePrefix: 'always',
    localeDetection: true,
    localeCookie: {
        name: 'NEXT_LOCALE',
        maxAge: 60 * 60 * 24 * 365 * 2,
    },
});

export type Locale = (typeof routing.locales)[number];
