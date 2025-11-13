"use client";

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useMemo } from 'react';

import { localeValues, type Locale } from '@/locales/config';

interface LanguageSwitcherProps {
    locale: Locale;
    label: string;
}

const languageLabels: Record<Locale, string> = {
    es: 'Español',
    en: 'English',
    de: 'Deutsch',
    fr: 'Français'
};

const LanguageSwitcher = ({ locale, label }: LanguageSwitcherProps) => {
    const router = useRouter();
    const pathname = usePathname() ?? '/';
    const searchParams = useSearchParams();

    const options = useMemo(
        () =>
            localeValues.map((value) => ({
                value,
                label: languageLabels[value]
            })),
        []
    );

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = event.target.value as Locale;
        if (nextLocale === locale) {
            return;
        }

        const segments = pathname.split('/').filter((segment, index) => !(segment === '' && index !== 0));

        if (segments.length > 1) {
            segments[1] = nextLocale;
        } else if (segments.length === 1) {
            segments.push(nextLocale);
        }

        const nextPath = `/${segments.slice(1).join('/')}` || `/${nextLocale}`;
        const query = searchParams?.toString();

        const target = query ? `${nextPath}?${query}` : nextPath;
        router.push(target);
    };

    return (
        <label className="flex items-center gap-2 text-sm text-slate-500">
            <span className="sr-only md:not-sr-only">{label}</span>
            <select
                className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-brand-300 focus:outline-none"
                value={locale}
                onChange={handleChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default LanguageSwitcher;
