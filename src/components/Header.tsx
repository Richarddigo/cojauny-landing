"use client";

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import type { Locale } from '@/locales/config';
import type { LandingCopy } from '@/locales/copy';

interface HeaderProps {
    locale: Locale;
    copy: LandingCopy['header'];
}

const Header = ({ locale, copy }: HeaderProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const openButtonRef = useRef<HTMLButtonElement | null>(null);
    const closeButtonRef = useRef<HTMLButtonElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const portalElRef = useRef<HTMLElement | null>(null);
    const inertLoadedRef = useRef<boolean | null>(null);

    // block body scroll when menu open and apply inert to everything except portal
    useEffect(() => {
        if (typeof window === 'undefined') return;
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

        const ensurePolyfill = async () => {
            if (inertLoadedRef.current !== null) return inertLoadedRef.current;
            const supported = 'inert' in HTMLElement.prototype;
            if (!supported) {
                try {
                    // @ts-ignore
                    await import('wicg-inert');
                    inertLoadedRef.current = true;
                    return true;
                } catch (e) {
                    inertLoadedRef.current = false;
                    return false;
                }
            }
            inertLoadedRef.current = true;
            return true;
        };

        const applyInertToSiblings = async (apply: boolean) => {
            await ensurePolyfill();
            const portal = portalElRef.current;
            const bodyChildren = Array.from(document.body.children) as HTMLElement[];
            bodyChildren.forEach((child) => {
                // keep the portal and any scripts/styles untouched
                if (child === portal) return;
                if (child.tagName === 'SCRIPT' || child.tagName === 'STYLE' || child.tagName === 'LINK') return;
                try {
                    // prefer inert when available
                    // @ts-ignore
                    if ('inert' in child) {
                        // @ts-ignore
                        child.inert = apply;
                    } else if (apply) {
                        child.setAttribute('aria-hidden', 'true');
                    } else {
                        child.removeAttribute('aria-hidden');
                    }
                } catch (e) {
                    if (apply) child.setAttribute('aria-hidden', 'true');
                    else child.removeAttribute('aria-hidden');
                }
            });
        };

        if (mobileMenuOpen) {
            applyInertToSiblings(true).catch(() => null);
        } else {
            applyInertToSiblings(false).catch(() => null);
        }

        return () => {
            document.body.style.overflow = '';
            applyInertToSiblings(false).catch(() => null);
        };
    }, [mobileMenuOpen]);

    // focus trap and restore focus (focus close button on open)
    useEffect(() => {
        if (!mobileMenuOpen) return;
        const menu = menuRef.current;
        if (!menu) return;

        const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

        // focus close button if present, else first element
        const focusFirst = () => {
            const focusable = Array.from(menu.querySelectorAll<HTMLElement>(focusableSelector)).filter((el) => el.offsetParent !== null);
            const first = focusable[0];
            if (closeButtonRef.current) {
                closeButtonRef.current.focus();
            } else {
                first?.focus();
            }
        };

        focusFirst();

        // ensure close button receives focus after animations/paint
        const focusTimer = setTimeout(() => {
            requestAnimationFrame(() => {
                if (closeButtonRef.current) closeButtonRef.current.focus();
            });
        }, 120);

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                setMobileMenuOpen(false);
                return;
            }
            if (e.key === 'Tab') {
                const focusable = Array.from(menu.querySelectorAll<HTMLElement>(focusableSelector)).filter((el) => el.offsetParent !== null);
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (!first || !last) return;
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        // ensure focus cannot leave the menu using focusin
        const handleFocusIn = (e: FocusEvent) => {
            const target = e.target as Node | null;
            if (!menu.contains(target)) {
                // redirect focus back to menu
                if (closeButtonRef.current) closeButtonRef.current.focus();
                else {
                    const focusable = Array.from(menu.querySelectorAll<HTMLElement>(focusableSelector)).filter((el) => el.offsetParent !== null);
                    focusable[0]?.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('focusin', handleFocusIn);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('focusin', handleFocusIn);
            // restore focus to open button
            openButtonRef.current?.focus();
            clearTimeout(focusTimer);
        };
    }, [mobileMenuOpen]);

    // As a safety, when the menu closes, ensure the opener regains focus after inert removal/animations
    useEffect(() => {
        if (mobileMenuOpen) return;
        // schedule focus restoration after a short delay to allow inert removal and paint
        const timer = setTimeout(() => {
            requestAnimationFrame(() => {
                try {
                    openButtonRef.current?.focus();
                } catch (e) {
                    // ignore
                }
            });
        }, 80);
        return () => clearTimeout(timer);
    }, [mobileMenuOpen]);

    // ensure portal is available client-side
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    // create a dedicated portal container so we can inert siblings safely
    useEffect(() => {
        if (typeof document === 'undefined') return;
        if (!portalElRef.current) {
            const el = document.createElement('div');
            el.setAttribute('id', '__menu_portal');
            portalElRef.current = el;
            document.body.appendChild(el);
        }
        return () => {
            if (portalElRef.current && portalElRef.current.parentElement) {
                portalElRef.current.parentElement.removeChild(portalElRef.current);
                portalElRef.current = null;
            }
        };
    }, []);

    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    return (
        <>
            <header className="fixed left-0 right-0 top-0 z-50 bg-slate-900/95 shadow-lg backdrop-blur-sm">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href={`/${locale}`} className="-m-1.5 flex items-center gap-2 p-1.5 sm:gap-3">
                            <Image
                                src="/assets/logo/mountain_white.svg"
                                alt="Cojauny"
                                width={32}
                                height={32}
                                className="h-7 w-auto sm:h-8"
                                priority
                            />
                            <span className="text-lg font-bold text-white sm:text-xl">Cojauny™</span>
                        </Link>
                    </div>

                    <div className="flex lg:hidden">
                        <button
                            ref={openButtonRef}
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white transition-colors hover:bg-white/10"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open main menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="hidden lg:flex lg:gap-x-3 xl:gap-x-4">
                        <Link href={`/${locale}#home`} className="text-xs font-semibold leading-6 text-white/90 transition hover:text-brand-200 xl:text-sm">{copy.home}</Link>
                        <Link href={`/${locale}#demo`} className="text-xs font-semibold leading-6 text-white/90 transition hover:text-brand-200 xl:text-sm">{copy.demo}</Link>
                        <Link href={`/${locale}#benefits`} className="text-xs font-semibold leading-6 text-white/90 transition hover:text-brand-200 xl:text-sm">{copy.benefits}</Link>
                        <Link href={`/${locale}#impact`} className="text-xs font-semibold leading-6 text-white/90 transition hover:text-brand-200 xl:text-sm">{copy.impact}</Link>
                        <Link href={`/${locale}#features`} className="text-xs font-semibold leading-6 text-white/90 transition hover:text-brand-200 xl:text-sm">{copy.features}</Link>
                        <Link href={`/${locale}#how-it-works`} className="text-xs font-semibold leading-6 text-white/90 transition hover:text-brand-200 xl:text-sm">{copy.workflow}</Link>
                        <Link href={`/${locale}#pricing`} className="text-xs font-semibold leading-6 text-white/90 transition hover:text-brand-200 xl:text-sm">{copy.pricing}</Link>
                        <Link href={`/${locale}#beta`} className="text-xs font-semibold leading-6 text-white/90 transition hover:text-brand-200 xl:text-sm">{copy.beta}</Link>
                        <Link href={`/${locale}#faq`} className="text-xs font-semibold leading-6 text-white/90 transition hover:text-brand-200 xl:text-sm">{copy.faq}</Link>
                        <Link href={`/${locale}#feedback`} className="text-xs font-semibold leading-6 text-white/90 transition hover:text-brand-200 xl:text-sm">{copy.feedback}</Link>
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <LanguageSwitcher currentLocale={locale} />
                    </div>
                </nav>
            </header>

            {mounted && typeof window !== 'undefined' && createPortal(
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <div className="fixed inset-0 z-[9999] flex justify-end" aria-modal="true" role="dialog">
                            {/* Sin overlay translúcido, solo el panel */}
                            <motion.div
                                ref={menuRef}
                                initial={prefersReducedMotion ? undefined : { x: '100%' }}
                                animate={prefersReducedMotion ? undefined : { x: 0 }}
                                exit={prefersReducedMotion ? undefined : { x: '100%' }}
                                transition={prefersReducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 30 }}
                                className="relative h-full w-auto min-w-max max-w-[95vw] bg-slate-900 px-4 py-6 sm:px-6 sm:ring-1 sm:ring-white/10 flex flex-col"
                                onTouchStart={(e) => {
                                    (e.currentTarget as any)._touchStartX = e.touches?.[0]?.clientX ?? 0;
                                }}
                                onTouchEnd={(e) => {
                                    const touchEndX = e.changedTouches?.[0]?.clientX ?? 0;
                                    const touchStartX = (e.currentTarget as any)._touchStartX ?? 0;
                                    const delta = touchEndX - touchStartX;
                                    // if swiped right more than 50px, close
                                    if (delta > 50) {
                                        setMobileMenuOpen(false);
                                    }
                                }}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <Link href={`/${locale}`} className="-m-1.5 flex items-center gap-2 p-1.5 sm:gap-3" onClick={() => setMobileMenuOpen(false)}>
                                        <Image src="/assets/logo/mountain_white.svg" alt="Cojauny" width={32} height={32} className="h-7 w-auto sm:h-8" />
                                        <span className="text-lg font-bold text-white sm:text-xl">Cojauny™</span>
                                    </Link>
                                    <button
                                        ref={closeButtonRef}
                                        type="button"
                                        className="-m-2.5 rounded-md p-2.5 text-white transition-colors hover:bg-white/10"
                                        onClick={() => setMobileMenuOpen(false)}
                                        aria-label="Close menu"
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="mt-6 flex-1 flex flex-col justify-start">
                                    <div className="space-y-1 flex flex-col items-end pr-6">
                                        {[
                                            { href: '#home', label: copy.home },
                                            { href: '#demo', label: copy.demo },
                                            { href: '#benefits', label: copy.benefits },
                                            { href: '#impact', label: copy.impact },
                                            { href: '#features', label: copy.features },
                                            { href: '#how-it-works', label: copy.workflow },
                                            { href: '#pricing', label: copy.pricing },
                                            { href: '#beta', label: copy.beta },
                                            { href: '#faq', label: copy.faq },
                                            { href: '#feedback', label: copy.feedback }
                                        ].map((item) => (
                                            <Link
                                                key={item.href}
                                                href={`/${locale}${item.href}`}
                                                className="block w-full px-3 py-2 text-base font-semibold leading-6 text-white text-right transition-colors hover:bg-white/10 active:bg-white/20"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="py-6 w-full flex flex-col items-end pr-6">
                                        <div className="sm:hidden w-full flex justify-end">
                                            <LanguageSwitcher currentLocale={locale} onSelect={() => setMobileMenuOpen(false)} fullWidth />
                                        </div>
                                        <div className="hidden sm:block">
                                            <LanguageSwitcher currentLocale={locale} onSelect={() => setMobileMenuOpen(false)} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                portalElRef.current || document.body
            )}
        </>
    );
};

export default Header;
