"use client";

import Image from 'next/image';
import Link from 'next/link';

import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';
import { getCommonCopy, type CommonCopy } from '@/locales/common';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface FooterProps {
    copy: LandingCopy['footer'];
    locale: Locale;
    common?: CommonCopy;
}

const navigationSectionLabel: Record<Locale, string> = {
    es: 'Navegacion',
    en: 'Navigation',
    de: 'Navigation',
    fr: 'Navigation',
};

const ecosystemSectionLabel: Record<Locale, string> = {
    es: 'Ecosistema',
    en: 'Ecosystem',
    de: 'Ökosystem',
    fr: 'Écosystème',
};

const ecosystemDescription: Record<Locale, string> = {
    es: 'Cojauny forma parte de un ecosistema de productos digitales en evolución.',
    en: 'Cojauny is part of an evolving ecosystem of digital products.',
    de: 'Cojauny ist Teil eines sich entwickelnden Ökosystems digitaler Produkte.',
    fr: 'Cojauny fait partie d’un écosystème évolutif de produits numériques.',
};

const homeLabel: Record<Locale, string> = {
    es: 'Inicio',
    en: 'Home',
    de: 'Start',
    fr: 'Accueil',
};

const Footer = ({ copy, locale, common }: FooterProps) => {
    const resolvedCommon = common ?? getCommonCopy(locale);

    return (
        <footer className="mt-auto border-t border-[rgba(255,255,255,0.06)] bg-bg">
            <div className="mx-auto max-w-[1180px] px-[100px] py-16">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

                    {/* Col 1: Brand */}
                    <div className="flex flex-col gap-4">
                        <a href={`/${locale}`} className="flex items-center gap-2">
                            <Image
                                src="/assets/logo/mountain_white.svg"
                                alt="Cojauny"
                                width={28}
                                height={28}
                                className="h-7 w-auto"
                            />
                            <span className="text-base font-bold text-white">Cojauny</span>
                        </a>
                        <p className="max-w-[18ch] text-sm leading-relaxed text-studio-muted">
                            {copy.description}
                        </p>
                    </div>

                    {/* Col 2: Ecosystem */}
                    <div>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">{ecosystemSectionLabel[locale]}</p>
                        <div className="mb-3 flex flex-col gap-2">
                            <a
                                href="https://studio.cojauny.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-text bg-[rgba(28,35,54,0.9)] border border-[rgba(91,123,255,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(91,123,255,0.25)]"
                            >
                                <span>Cojauny Studio</span>
                                <svg className="h-3 w-3 opacity-50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a
                                href="https://cuatrosotas.cojauny.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-text bg-[rgba(28,35,54,0.9)] border border-[rgba(91,123,255,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(91,123,255,0.25)]"
                            >
                                <span>Cuatro Sotas</span>
                                <svg className="h-3 w-3 opacity-50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                        <p className="text-sm leading-relaxed text-muted">{ecosystemDescription[locale]}</p>
                    </div>

                    {/* Col 3: Navigation */}
                    <div>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">{navigationSectionLabel[locale]}</p>
                        <nav className="flex flex-col gap-2">
                            <Link href={`/${locale}`} className="text-sm text-muted transition-colors hover:text-text">{homeLabel[locale]}</Link>
                            <Link href={`/${locale}/blog`} className="text-sm text-muted transition-colors hover:text-text">{copy.blog}</Link>
                            <a href={`https://studio.cojauny.com/${locale}/contact`} target="_blank" rel="noopener noreferrer" className="text-sm text-muted transition-colors hover:text-text">{copy.contact}</a>
                        </nav>
                    </div>

                    {/* Col 4: Legal */}
                    <div>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">{resolvedCommon.footerSectionLegal}</p>
                        <nav className="flex flex-col gap-2">
                            <Link href={`/${locale}/legal/privacy`} className="text-sm text-muted transition-colors hover:text-text">{copy.privacy}</Link>
                            <Link href={`/${locale}/legal/cookies`} className="text-sm text-muted transition-colors hover:text-text">{copy.cookies}</Link>
                            <Link href={`/${locale}/legal/terms`} className="text-sm text-muted transition-colors hover:text-text">{copy.terms}</Link>
                            <Link href={`/${locale}/legal/acceptable-use`} className="text-sm text-muted transition-colors hover:text-text">{copy.acceptableUse ?? 'Uso Aceptable'}</Link>
                            <Link href={`/${locale}/legal/faq`} className="text-sm text-muted transition-colors hover:text-text">{copy.faq ?? 'FAQ'}</Link>
                            <Link href={`/${locale}/legal/subprocessors`} className="text-sm text-muted transition-colors hover:text-text">{copy.subprocessors ?? 'Subprocesadores'}</Link>
                        </nav>
                    </div>

                    {/* Col 5: Language */}
                    <div>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">{copy.languageLabel}</p>
                        <LanguageSwitcher currentLocale={locale} dropdownDirection="up" />
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="mt-12 pt-8 flex flex-col items-center justify-between gap-3 border-t border-[rgba(255,255,255,0.06)] sm:flex-row"
                >
                    <p className="text-xs text-muted" suppressHydrationWarning>
                        © {new Date().getFullYear()} Cojauny. {copy.rights}
                    </p>
                    <p className="text-xs text-muted">
                        {copy.madeInEurope}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

