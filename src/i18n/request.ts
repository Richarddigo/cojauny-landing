import { getRequestConfig } from 'next-intl/server';
import type { Locale } from '@/locales/config';
import { routing } from './routing';
import { getLocaleMessages } from './messages';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: getLocaleMessages(locale as Locale),
    };
});
