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
        label: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=61583564731277',
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
                    d="M13 10V8C13 7.44772 13.4477 7 14 7H15V4H13C11.3431 4 10 5.34315 10 7V10H8V13H10V20H13V13H15L16 10H13Z"
                    fill="currentColor"
                />
            </svg>
        )
    },
    {
        label: 'TikTok',
        href: 'https://tiktok.com/@cojauny',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                aria-hidden
            >
                <path
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                    fill="currentColor"
                />
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
    <footer className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
            <div>
                <p className="text-lg font-semibold text-white">Cojauny™</p>
                <p className="mt-2 max-w-xs text-sm text-white/80">{copy.description}</p>
                <div className="mt-4 flex gap-4">
                    <Link
                        href="https://cojauny.com/app-store"
                        className="text-sm text-brand-200 underline hover:text-white"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {copy.appStoreSoon}
                    </Link>
                    <Link
                        href="https://cojauny.com/google-play"
                        className="text-sm text-brand-200 underline hover:text-white"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {copy.playStoreSoon}
                    </Link>
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
                    <Link href={`/${locale}/blog`} className="hover:text-brand-200">
                        {copy.blog}
                    </Link>
                    <Link href={`/${locale}/contact`} className="hover:text-brand-200">
                        {copy.contact}
                    </Link>
                </nav>
                <LanguageSwitcher currentLocale={locale} label={copy.languageLabel} dropdownDirection="up" />
                <p className="text-xs text-white/60" suppressHydrationWarning>© {new Date().getFullYear()} Cojauny™. {copy.rights}</p>
            </div>
        </div>
    </footer>
);

export default Footer;
