"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import type { Locale } from '@/locales/config';
import type { LandingCopy } from '@/locales/copy';

interface HeaderProps {
    locale: Locale;
    copy: {
        home: string;
        features: string;
        demo: string;
        beta: string;
        blog: string;
    };
}

const Header = ({ locale, copy }: HeaderProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed left-0 right-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href={`/${locale}`} className="-m-1.5 flex items-center gap-3 p-1.5">
                        <Image
                            src="/icons/icon.svg"
                            alt="Cojauny"
                            width={32}
                            height={32}
                            className="h-8 w-auto"
                        />
                        <span className="text-xl font-bold text-slate-900">Cojauny</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-6">
                    <Link href={`/${locale}#inicio`} className="text-sm font-semibold leading-6 text-slate-900 hover:text-brand-600">
                        Inicio
                    </Link>
                    <Link href={`/${locale}#beneficios`} className="text-sm font-semibold leading-6 text-slate-900 hover:text-brand-600">
                        Beneficios
                    </Link>
                    <Link href={`/${locale}#impacto`} className="text-sm font-semibold leading-6 text-slate-900 hover:text-brand-600">
                        Impacto
                    </Link>
                    <Link href={`/${locale}#caracteristicas`} className="text-sm font-semibold leading-6 text-slate-900 hover:text-brand-600">
                        Características
                    </Link>
                    <Link href={`/${locale}#como-funciona`} className="text-sm font-semibold leading-6 text-slate-900 hover:text-brand-600">
                        Cómo Funciona
                    </Link>
                    <Link href={`/${locale}#demo`} className="text-sm font-semibold leading-6 text-slate-900 hover:text-brand-600">
                        Demo
                    </Link>
                    <Link href={`/${locale}#precios`} className="text-sm font-semibold leading-6 text-slate-900 hover:text-brand-600">
                        Precios
                    </Link>
                    <Link href={`/${locale}#faq`} className="text-sm font-semibold leading-6 text-slate-900 hover:text-brand-600">
                        FAQ
                    </Link>
                    <Link href={`/${locale}#beta`} className="text-sm font-semibold leading-6 text-slate-900 hover:text-brand-600">
                        Beta
                    </Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <LanguageSwitcher currentLocale={locale} />
                </div>
            </nav>
            {/* Mobile menu */}
            <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
                <div
                    className="fixed inset-0 bg-slate-900/25"
                    onClick={() => setMobileMenuOpen(false)}
                    onKeyDown={(e) => e.key === 'Escape' && setMobileMenuOpen(false)}
                    role="button"
                    tabIndex={0}
                    aria-label="Close menu"
                />
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
                    <div className="flex items-center justify-between">
                        <Link href={`/${locale}`} className="-m-1.5 flex items-center gap-3 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                            <Image
                                src="/icons/icon.svg"
                                alt="Cojauny"
                                width={32}
                                height={32}
                                className="h-8 w-auto"
                            />
                            <span className="text-xl font-bold text-slate-900">Cojauny</span>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-slate-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-slate-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    href={`/${locale}#inicio`}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Inicio
                                </Link>
                                <Link
                                    href={`/${locale}#beneficios`}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Beneficios
                                </Link>
                                <Link
                                    href={`/${locale}#impacto`}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Impacto
                                </Link>
                                <Link
                                    href={`/${locale}#caracteristicas`}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Características
                                </Link>
                                <Link
                                    href={`/${locale}#como-funciona`}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Cómo Funciona
                                </Link>
                                <Link
                                    href={`/${locale}#demo`}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Demo
                                </Link>
                                <Link
                                    href={`/${locale}#precios`}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Precios
                                </Link>
                                <Link
                                    href={`/${locale}#faq`}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    FAQ
                                </Link>
                                <Link
                                    href={`/${locale}#beta`}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Beta
                                </Link>
                            </div>
                            <div className="py-6">
                                <LanguageSwitcher currentLocale={locale} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
