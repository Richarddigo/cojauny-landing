"use client";

import { Fragment, useMemo } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { localeValues, type Locale } from '@/locales/config';

interface LanguageSwitcherProps {
    currentLocale: Locale;
    label?: string;
}

const languageLabels: Record<Locale, string> = {
    es: 'Español',
    en: 'English',
    de: 'Deutsch',
    fr: 'Français'
};

const languageFlags: Record<Locale, string> = {
    es: '🇪🇸',
    en: '🇬🇧',
    de: '🇩🇪',
    fr: '🇫🇷'
};

const LanguageSwitcher = ({ currentLocale, label }: LanguageSwitcherProps) => {
    const router = useRouter();
    const pathname = usePathname() ?? '/';
    const searchParams = useSearchParams();

    const options = useMemo(
        () =>
            localeValues.map((value) => ({
                value,
                label: languageLabels[value],
                flag: languageFlags[value]
            })),
        []
    );

    const navigateToLocale = (nextLocale: Locale) => {
        if (nextLocale === currentLocale) {
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

    const activeOption = options.find((option) => option.value === currentLocale);
    const buttonLabel = activeOption?.label ?? currentLocale.toUpperCase();
    const buttonFlag = activeOption?.flag ?? '🌐';

    const buttonAriaLabel = label ?? 'Change language';

    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button
                aria-label={buttonAriaLabel}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-brand-200 hover:text-brand-700 focus:outline-none focus-visible:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-200"
            >
                <span aria-hidden className="text-base leading-none">{buttonFlag}</span>
                <span>{buttonLabel}</span>
                <ChevronDownIcon className="h-4 w-4 text-slate-400" aria-hidden />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right overflow-hidden rounded-3xl border border-slate-100 bg-white/95 p-2 shadow-xl backdrop-blur">
                    {options.map((option) => {
                        const isActive = option.value === currentLocale;
                        return (
                            <Menu.Item key={option.value}>
                                {({ active }) => (
                                    <button
                                        type="button"
                                        onClick={() => navigateToLocale(option.value)}
                                        className={`flex w-full items-center justify-between gap-3 rounded-2xl px-3 py-2 text-left text-sm transition ${active ? 'bg-brand-50 text-brand-700' : 'text-slate-700'
                                            }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            <span aria-hidden className="flex h-8 w-8 items-center justify-center text-xl">
                                                {option.flag}
                                            </span>
                                            <span className="font-medium">{option.label}</span>
                                        </span>
                                        {isActive ? <CheckIcon className="h-4 w-4 text-brand-600" aria-hidden /> : null}
                                    </button>
                                )}
                            </Menu.Item>
                        );
                    })}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default LanguageSwitcher;
