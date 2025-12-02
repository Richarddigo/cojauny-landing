"use client";

import Link from 'next/link';

import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { socialLinks } from '@/components/SocialLinks';

interface FooterProps {
    copy: LandingCopy['footer'];
    locale: Locale;
}

const Footer = ({ copy, locale }: FooterProps) => (
    <footer className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between" style={{ paddingLeft: 'calc(var(--social-bar-offset) + 1.5rem)' }}>
            <div>
                <p className="text-lg font-semibold text-white">Cojauny</p>
                <p className="mt-2 max-w-xs text-sm text-white/80">{copy.description}</p>
                <div className="mt-4 flex gap-4">
                    <a
                        href="#beta"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('beta')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-sm text-brand-200 underline hover:text-white"
                    >
                        {copy.appStoreSoon}
                    </a>
                    <a
                        href="#beta"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('beta')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-sm text-brand-200 underline hover:text-white"
                    >
                        {copy.playStoreSoon}
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
                <div className="flex gap-4 text-white/80">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            aria-label={link.label}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-transparent p-2 text-white/60 transition hover:border-brand-200 hover:text-brand-200 focus-visible:border-brand-400"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
                <nav className="flex flex-wrap justify-end gap-4 text-sm text-white/80">
                    <Link href={`/${locale}/legal/privacy`} className="hover:text-brand-200">
                        {copy.privacy}
                    </Link>
                    <Link href={`/${locale}/legal/cookies`} className="hover:text-brand-200">
                        {copy.cookies}
                    </Link>
                    <Link href={`/${locale}/legal/terms`} className="hover:text-brand-200">
                        {copy.terms}
                    </Link>
                    <Link href={`/${locale}/legal/acceptable-use`} className="hover:text-brand-200">
                        {copy.acceptableUse ?? 'Uso Aceptable'}
                    </Link>
                    <Link href={`/${locale}/legal/faq`} className="hover:text-brand-200">
                        {copy.faq ?? 'FAQ'}
                    </Link>
                    <Link href={`/${locale}/legal/subprocessors`} className="hover:text-brand-200">
                        {copy.subprocessors ?? 'Subprocesadores'}
                    </Link>
                    <Link href={`/${locale}/blog`} className="hover:text-brand-200">
                        {copy.blog}
                    </Link>
                    <Link href={`/${locale}/contact`} className="hover:text-brand-200">
                        {copy.contact}
                    </Link>
                </nav>
                <LanguageSwitcher currentLocale={locale} label={copy.languageLabel} dropdownDirection="up" />
                <p className="text-xs text-white/60" suppressHydrationWarning>© {new Date().getFullYear()} Cojauny. {copy.rights}</p>
            </div>
        </div>
    </footer>
);

export default Footer;
