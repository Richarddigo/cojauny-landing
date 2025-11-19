"use client";

import { Fragment, useMemo, Suspense } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { localeValues, type Locale } from '@/locales/config';
import { SpainFlag, UKFlag, GermanyFlag, FranceFlag } from './FlagIcons';

interface LanguageSwitcherProps {
    currentLocale: Locale;
    label?: string;
    dropdownDirection?: 'up' | 'down';
}

const languageLabels: Record<Locale, string> = {
    es: 'Español',
    en: 'English',
    de: 'Deutsch',
    fr: 'Français'
};

const languageFlags: Record<Locale, React.ComponentType<{ className?: string }>> = {
    es: SpainFlag,
    en: UKFlag,
    de: GermanyFlag,
    fr: FranceFlag
};

const languageCodes: Record<Locale, string> = {
    es: 'ES',
    en: 'EN',
    de: 'DE',
    fr: 'FR'
};

const LanguageSwitcherInner = ({ currentLocale, label, dropdownDirection = 'down' }: LanguageSwitcherProps) => {
    const router = useRouter();
    const pathname = usePathname() ?? '/';
    const searchParams = useSearchParams();

    const options = useMemo(
        () =>
            localeValues.map((value) => ({
                value,
                label: languageLabels[value],
                flag: languageFlags[value],
                code: languageCodes[value]
            })),
        []
    );

    const navigateToLocale = (nextLocale: Locale) => {
        if (nextLocale === currentLocale) {
            return;
        }

        // Preserve current hash/section and scroll position
        const currentHash = typeof window !== 'undefined' ? window.location.hash : '';
        const currentScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

        const segments = pathname.split('/').filter((segment, index) => !(segment === '' && index !== 0));

        if (segments.length > 1) {
            segments[1] = nextLocale;
        } else if (segments.length === 1) {
            segments.push(nextLocale);
        }

        const nextPath = `/${segments.slice(1).join('/')}` || `/${nextLocale}`;
        const query = searchParams?.toString();

        const target = query ? `${nextPath}?${query}${currentHash}` : `${nextPath}${currentHash}`;

        router.push(target);

        // Restore scroll position after navigation
        if (typeof window !== 'undefined') {
            // Use requestAnimationFrame to ensure DOM is updated
            requestAnimationFrame(() => {
                window.scrollTo(0, currentScrollY);
            });
        }
    };

    const activeOption = options.find((option) => option.value === currentLocale);
    const buttonLabel = activeOption?.label ?? currentLocale.toUpperCase();
    const ButtonFlag = activeOption?.flag ?? (() => <span>🌐</span>);
    const buttonCode = activeOption?.code ?? currentLocale.toUpperCase();

    const buttonAriaLabel = label ?? 'Change language';

    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button
                aria-label={buttonAriaLabel}
                className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white shadow-soft-glow transition hover:border-brand-200 hover:bg-white/10 focus:outline-none focus-visible:border-brand-200 focus-visible:ring-2 focus-visible:ring-brand-200/50"
            >
                <span aria-hidden className="flex items-center">
                    <ButtonFlag className="h-5 w-5 rounded-sm" />
                </span>
                <span>{buttonLabel}</span>
                <ChevronDownIcon className="h-4 w-4 text-white/60" aria-hidden />
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
                <Menu.Items className={`absolute right-0 z-50 w-56 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 p-2 shadow-soft-glow backdrop-blur ${dropdownDirection === 'up' ? 'bottom-full mb-2 origin-bottom-right' : 'mt-2 origin-top-right'}`}>
                    {options.map((option) => {
                        const isActive = option.value === currentLocale;
                        return (
                            <Menu.Item key={option.value}>
                                {({ active }) => {
                                    const OptionFlag = option.flag;
                                    return (
                                        <button
                                            type="button"
                                            onClick={() => navigateToLocale(option.value)}
                                            className={`flex w-full items-center justify-between gap-3 rounded-2xl px-3 py-2 text-left text-sm transition ${active ? 'bg-white/10 text-white' : 'text-white/80'
                                                }`}
                                        >
                                            <span className="flex items-center gap-3">
                                                <span aria-hidden className="flex h-8 w-8 items-center justify-center">
                                                    <OptionFlag className="h-6 w-6 rounded-sm" />
                                                </span>
                                                <span className="font-medium">{option.label}</span>
                                            </span>
                                            {isActive ? <CheckIcon className="h-4 w-4 text-brand-200" aria-hidden /> : null}
                                        </button>
                                    );
                                }}
                            </Menu.Item>
                        );
                    })}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

const LanguageSwitcher = (props: LanguageSwitcherProps) => {
    const FallbackFlag = languageFlags[props.currentLocale];
    return (
        <Suspense fallback={
            <div className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white">
                <span className="flex items-center">
                    <FallbackFlag className="h-5 w-5 rounded-sm" />
                </span>
                <span>{languageLabels[props.currentLocale]}</span>
            </div>
        }>
            <LanguageSwitcherInner {...props} />
        </Suspense>
    );
};

export default LanguageSwitcher;
