"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';
import { getCommonCopy } from '@/locales/common';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { socialLinks } from '@/components/SocialLinks';

interface FooterProps {
    copy: LandingCopy['footer'];
    locale: Locale;
}

const Footer = ({ copy, locale }: FooterProps) => {
    const router = useRouter();
    const common = getCommonCopy(locale);

    const handleBetaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById('beta');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push(`/${locale}#beta`);
        }
    };

    return (
        <footer style={{ background: '#0C1120', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 'auto' }}>
            <div className="mx-auto max-w-[1180px] px-6 py-16 lg:px-12">
                {/* 4-column grid */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

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
                        <p className="text-sm leading-relaxed" style={{ color: '#94A3B8', maxWidth: '18ch' }}>
                            {copy.description}
                        </p>
                        <div className="flex gap-2">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    aria-label={link.label}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full p-1.5 text-white/50 transition-colors hover:text-white"
                                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2: App */}
                    <div>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: '#5B7BFF' }}>{common.footerSectionApp}</p>
                        <nav className="flex flex-col gap-2">
                            {[
                                { href: `/${locale}#home`, label: copy.appStoreSoon, isAnchor: true },
                                { href: `/${locale}#demo`, label: copy.playStoreSoon, isAnchor: true },
                                { href: `/${locale}/blog`, label: copy.blog },
                                { href: `/${locale}/contact`, label: copy.contact },
                            ].map(({ href, label, isAnchor }) => (
                                isAnchor ? (
                                    <a
                                        key={href}
                                        href={href}
                                        onClick={handleBetaClick}
                                        className="text-sm transition-colors hover:text-white"
                                        style={{ color: '#94A3B8' }}
                                    >
                                        {label}
                                    </a>
                                ) : (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="text-sm transition-colors hover:text-white"
                                        style={{ color: '#94A3B8' }}
                                    >
                                        {label}
                                    </Link>
                                )
                            ))}
                        </nav>
                    </div>

                    {/* Col 3: Legal */}
                    <div>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: '#5B7BFF' }}>{common.footerSectionLegal}</p>
                        <nav className="flex flex-col gap-2">
                            <Link href={`/${locale}/legal/privacy`} className="text-sm transition-colors hover:text-white" style={{ color: '#94A3B8' }}>{copy.privacy}</Link>
                            <Link href={`/${locale}/legal/cookies`} className="text-sm transition-colors hover:text-white" style={{ color: '#94A3B8' }}>{copy.cookies}</Link>
                            <Link href={`/${locale}/legal/terms`} className="text-sm transition-colors hover:text-white" style={{ color: '#94A3B8' }}>{copy.terms}</Link>
                            <Link href={`/${locale}/legal/acceptable-use`} className="text-sm transition-colors hover:text-white" style={{ color: '#94A3B8' }}>{copy.acceptableUse ?? 'Uso Aceptable'}</Link>
                            <Link href={`/${locale}/legal/faq`} className="text-sm transition-colors hover:text-white" style={{ color: '#94A3B8' }}>{copy.faq ?? 'FAQ'}</Link>
                            <Link href={`/${locale}/legal/subprocessors`} className="text-sm transition-colors hover:text-white" style={{ color: '#94A3B8' }}>{copy.subprocessors ?? 'Subprocesadores'}</Link>
                        </nav>
                    </div>

                    {/* Col 4: Language */}
                    <div>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: '#5B7BFF' }}>{copy.languageLabel}</p>
                        <LanguageSwitcher currentLocale={locale} dropdownDirection="up" />
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-3 sm:flex-row" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2rem' }}>
                    <p className="text-xs" style={{ color: '#94A3B8' }} suppressHydrationWarning>
                        © {new Date().getFullYear()} Cojauny. {copy.rights}
                    </p>
                    <p className="text-xs" style={{ color: '#94A3B8' }}>
                        {copy.madeInEurope}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

