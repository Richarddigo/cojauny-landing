"use client";

import Link from 'next/link';

import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface FooterProps {
    copy: LandingCopy['footer'];
    locale: Locale;
}

const socialLinks = [
    {
        label: 'Instagram',
        href: 'https://instagram.com/cojauny',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                aria-hidden
            >
                <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17" cy="7" r="1" fill="currentColor" />
            </svg>
        )
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/cojauny',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                aria-hidden
            >
                <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <path
                    d="M8 17V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <circle cx="8" cy="7" r="1" fill="currentColor" />
                <path
                    d="M12 17V13.5C12 12.6716 12.6716 12 13.5 12V12C14.3284 12 15 12.6716 15 13.5V17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>
        )
    },
    {
        label: 'X (Twitter)',
        href: 'https://twitter.com/cojauny',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                aria-hidden
            >
                <path
                    d="M4 4L20 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <path
                    d="M20 4L4 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>
        )
    }
];

const Footer = ({ copy, locale }: FooterProps) => (
    <footer className="mt-24 border-t border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
            <div>
                <p className="text-lg font-semibold text-slate-900">Cojauny™</p>
                <p className="mt-2 max-w-xs text-sm text-slate-600">{copy.description}</p>
                <div className="mt-4 flex gap-4">
                    <Link
                        href="https://cojauny.com/app-store"
                        className="text-sm text-brand-600 underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {copy.appStoreSoon}
                    </Link>
                    <Link
                        href="https://cojauny.com/google-play"
                        className="text-sm text-brand-600 underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {copy.playStoreSoon}
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
                <div className="flex gap-4 text-slate-600">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            aria-label={link.label}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-transparent p-2 text-slate-500 transition hover:border-brand-200 hover:text-brand-600 focus-visible:border-brand-400"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
                <nav className="flex flex-wrap justify-end gap-4 text-sm text-slate-600">
                    <Link href={`/${locale}/legal/privacy`} className="hover:text-brand-600">
                        {copy.privacy}
                    </Link>
                    <Link href={`/${locale}/legal/cookies`} className="hover:text-brand-600">
                        {copy.cookies}
                    </Link>
                    <Link href={`/${locale}/legal/terms`} className="hover:text-brand-600">
                        {copy.terms}
                    </Link>
                    <Link href={`/${locale}/contact`} className="hover:text-brand-600">
                        {copy.contact}
                    </Link>
                </nav>
                <LanguageSwitcher currentLocale={locale} label={copy.languageLabel} />
                <p className="text-xs text-slate-500">© {new Date().getFullYear()} Cojauny™. {copy.rights}</p>
            </div>
        </div>
    </footer>
);

export default Footer;
