export const localeValues = ['en', 'es', 'de', 'fr'] as const;

export type Locale = (typeof localeValues)[number];

export const locales: readonly Locale[] = localeValues;

export const defaultLocale: Locale = 'en';
