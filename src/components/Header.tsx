"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import type { Locale } from '@/locales/config';
import type { LandingCopy } from '@/locales/copy';
import { getCommonCopy, type CommonCopy } from '@/locales/common';
import { ENABLE_PREMIUM } from '@/lib/flags';
import {
    NAVIGATION_CONTRACT,
    emitMobileMenuTelemetry,
    type MobileMenuTelemetryReason,
} from '@/lib/navigationContract';
import { useMenuPortal } from '@/hooks/useMenuPortal';
import { useMobileMenuA11y } from '@/hooks/useMobileMenuA11y';
import { useScrollToHash } from '@/hooks/useScrollToHash';

interface HeaderProps {
    locale: Locale;
    copy: LandingCopy['header'];
    common?: CommonCopy;
}

type NavItem = { href: string; label: string; external?: boolean };

const buildNavItems = (copy: LandingCopy['header'], locale: Locale): NavItem[] => [
    { href: '#home', label: copy.home },
    { href: '#benefits', label: copy.benefits },
    { href: '#how-it-works', label: copy.workflow },
    { href: '#demo', label: copy.demo },
    { href: '#features', label: copy.features },
    { href: '#impact', label: copy.impact },
    // PRICING -- re-enable by setting NEXT_PUBLIC_ENABLE_PREMIUM=true
    ...(ENABLE_PREMIUM ? [{ href: '#pricing', label: copy.pricing }] : []),
    { href: '#beta', label: copy.beta },
    { href: `https://studio.cojauny.com/${locale}/contact`, label: copy.contact, external: true },
    { href: '#faq', label: copy.faq },
    { href: '#feedback', label: copy.feedback },
];

const Header = ({ locale, copy, common }: HeaderProps) => {
    const resolvedCommon = common ?? getCommonCopy(locale);
    const navItems = buildNavItems(copy, locale);
    const desktopNavItems = navItems.filter((item) => item.href !== '#home');
    const pathname = usePathname() ?? `/${locale}`;

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeHash, setActiveHash] = useState('');

    const openButtonRef = useRef<HTMLButtonElement | null>(null);
    const closeButtonRef = useRef<HTMLButtonElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const portalEl = useMenuPortal();
    const scrollToHash = useScrollToHash(locale);
    const isHydrated = useSyncExternalStore(
        () => () => { },
        () => true,
        () => false,
    );

    useMobileMenuA11y(
        {
            open: mobileMenuOpen,
            menuRef,
            openerRef: openButtonRef,
            closerRef: closeButtonRef,
            portalEl,
            onEscapeClose: () => emitMobileMenuTelemetry('close', 'escape'),
        },
        setMobileMenuOpen,
    );

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const syncHash = () => setActiveHash(window.location.hash || '');
        syncHash();
        window.addEventListener('hashchange', syncHash);
        return () => window.removeEventListener('hashchange', syncHash);
    }, []);

    const openMobileMenu = () => {
        emitMobileMenuTelemetry('open', 'open-button');
        setMobileMenuOpen(true);
    };

    const closeMobileMenu = (reason: MobileMenuTelemetryReason) => {
        emitMobileMenuTelemetry('close', reason);
        setMobileMenuOpen(false);
    };

    const handleDesktopNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (!href.startsWith('#')) {
            return;
        }
        e.preventDefault();
        setActiveHash(href);
        scrollToHash(href);
    };

    const handleMobileNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (!href.startsWith('#')) {
            closeMobileMenu('nav-link');
            return;
        }
        e.preventDefault();
        setActiveHash(href);
        closeMobileMenu('nav-link');
        // wait for close animation/inert removal before scrolling
        setTimeout(() => scrollToHash(href), 250);
    };

    // shared swipe-to-close handlers for overlay & panel
    const swipeHandlers = {
        onTouchStart: (e: React.TouchEvent<HTMLDivElement>) => {
            (e.currentTarget as unknown as { _touchStartX: number })._touchStartX = e.touches?.[0]?.clientX ?? 0;
        },
        onTouchEnd: (e: React.TouchEvent<HTMLDivElement>) => {
            const startX = (e.currentTarget as unknown as { _touchStartX?: number })._touchStartX ?? 0;
            const endX = e.changedTouches?.[0]?.clientX ?? 0;
            if (endX - startX > 50) closeMobileMenu('swipe');
        },
    };

    const isRouteLinkActive = (href: string) => {
        if (href.startsWith('#')) return activeHash === href;
        if (!href.startsWith('/')) return false;
        if (href === `/${locale}`) return pathname === href;
        return pathname.startsWith(href);
    };

    const desktopLinkClass = (active: boolean) => (
        `group relative whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium leading-5 transition-all duration-200 ${active
            ? 'text-white [text-shadow:0_0_10px_rgba(255,255,255,0.55)]'
            : 'text-white/85 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.55)]'
        }`
    );

    const desktopUnderlineClass = (active: boolean) => (
        `pointer-events-none absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[var(--accent)] transition-all duration-200 ${active
            ? 'scale-x-100 opacity-100'
            : 'scale-x-50 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
        }`
    );

    const mobileLinkClass = (active: boolean) => (
        `group relative block w-full rounded-lg px-4 py-3.5 text-right text-sm font-medium leading-5 transition-colors ${active
            ? 'text-white [text-shadow:0_0_10px_rgba(255,255,255,0.55)]'
            : 'text-white/85 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.55)]'
        } cursor-pointer`
    );

    const mobileUnderlineClass = (active: boolean) => (
        `pointer-events-none absolute bottom-1 right-4 h-0.5 w-4 rounded-full bg-[var(--accent)] transition-all duration-200 ${active
            ? 'scale-x-100 opacity-100'
            : 'scale-x-50 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
        }`
    );

    const headerStateClass = scrolled
        ? 'border-b border-white/10 bg-studio-bg/95 shadow-xl shadow-black/40 backdrop-blur-xl'
        : 'bg-studio-bg/95 backdrop-blur-xl';

    return (
        <>
            <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${headerStateClass}`}>
                <nav className="container-studio flex items-center justify-between py-4" aria-label={resolvedCommon.navAriaLabel}>
                    <div className="flex lg:flex-1">
                        <a href={`/${locale}`} className="group -m-1.5 flex items-center gap-2 p-1.5 sm:gap-3">
                            <Image
                                src="/assets/logo/mountain_white.svg"
                                alt="Cojauny"
                                width={32}
                                height={32}
                                className="h-7 w-7 transition-all duration-200 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.55)] min-[900px]:h-8 min-[900px]:w-8"
                                priority
                            />
                            <span className="hidden min-[380px]:inline text-base font-bold text-white transition-all duration-200 group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.55)] min-[900px]:text-lg">Cojauny</span>
                        </a>
                    </div>

                    <div className="flex lg:hidden">
                        <button
                            ref={openButtonRef}
                            type="button"
                            className="focus-ring inline-flex items-center justify-center rounded-lg p-2 text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
                            onClick={openMobileMenu}
                            aria-label={resolvedCommon.openMainMenu}
                            aria-expanded={mobileMenuOpen}
                            aria-controls="__menu_portal"
                        >
                            <span className="sr-only">{resolvedCommon.openMainMenu}</span>
                            <Bars3Icon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="hidden lg:flex lg:flex-nowrap lg:items-center lg:gap-x-1 xl:gap-x-2">
                        {desktopNavItems.map(item => {
                            const active = isRouteLinkActive(item.href);
                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={e => handleDesktopNav(e, item.href)}
                                    className={desktopLinkClass(active)}
                                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    {...(active ? { 'aria-current': 'page' as const } : {})}
                                >
                                    {item.label}
                                    <span className={desktopUnderlineClass(active)} aria-hidden="true" />
                                </a>
                            );
                        })}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
                        <LanguageSwitcher currentLocale={locale} />
                    </div>
                </nav>
            </header>

            {isHydrated && portalEl && createPortal(
                <div
                    className={`fixed inset-0 z-[9999] flex justify-end transition-all duration-300 ${mobileMenuOpen ? 'visible' : 'invisible pointer-events-none'}`}
                    aria-modal="true"
                    role="dialog"
                    aria-hidden={!mobileMenuOpen}
                >
                    {/* overlay */}
                    <div
                        className={`flex-1 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                        data-testid="menu-overlay"
                        role="button"
                        tabIndex={0}
                        onClick={() => closeMobileMenu('overlay')}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
                                e.preventDefault();
                                closeMobileMenu('overlay');
                            }
                        }}
                        {...swipeHandlers}
                    />
                    {/* panel */}
                    <div
                        ref={menuRef}
                        className={`relative h-full max-w-[95vw] bg-studio-bg px-4 py-6 sm:px-6 sm:ring-1 sm:ring-white/10 flex flex-col overflow-y-auto max-h-screen transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                        style={{ width: `${NAVIGATION_CONTRACT.mobileMenuPanelWidthPx}px` }}
                        {...swipeHandlers}
                    >
                        <div className="flex items-center justify-end">
                            <button
                                ref={closeButtonRef}
                                type="button"
                                className="focus-ring rounded-lg p-2 text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
                                onClick={() => closeMobileMenu('close-button')}
                                aria-label={resolvedCommon.closeMenu}
                            >
                                <span className="sr-only">{resolvedCommon.closeMenu}</span>
                                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flex-1 flex flex-col justify-start">
                            <div className="space-y-1 flex flex-col items-end pr-6">
                                {navItems.map(item => {
                                    const active = isRouteLinkActive(item.href);
                                    return (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            onClick={e => handleMobileNav(e, item.href)}
                                            className={mobileLinkClass(active)}
                                            {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                            {...(active ? { 'aria-current': 'page' as const } : {})}
                                        >
                                            {item.label}
                                            <span className={mobileUnderlineClass(active)} aria-hidden="true" />
                                        </a>
                                    );
                                })}
                            </div>
                            <div className="py-6 w-full flex flex-col items-end pr-6 gap-4">
                                <div className="sm:hidden w-full flex justify-end">
                                    <LanguageSwitcher currentLocale={locale} onSelect={() => closeMobileMenu('nav-link')} fullWidth />
                                </div>
                                <div className="hidden sm:block">
                                    <LanguageSwitcher currentLocale={locale} onSelect={() => closeMobileMenu('nav-link')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                portalEl,
            )}
        </>
    );
};

export default Header;

