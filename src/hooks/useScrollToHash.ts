"use client";

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import type { Locale } from '@/locales/config';

/**
 * Returns a stable `scrollToHash(hrefOrId, opts)` function that:
 *   • finds the element by id
 *   • applies a header-aware offset
 *   • on mobile + id="home" jumps to top (0)
 *   • falls back to router.push("/{locale}#id") if id not on current page
 */
export function useScrollToHash(locale: Locale) {
    const router = useRouter();

    return useCallback((hrefOrId: string, opts: { isMobile?: boolean } = {}) => {
        const targetId = hrefOrId.replace('#', '');
        const isMobile = opts.isMobile ?? (typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches);

        const performScroll = () => {
            const element = document.getElementById(targetId);
            if (!element) return false;
            if (isMobile && targetId === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return true;
            }
            const header = document.querySelector('header');
            const headerHeight = header ? header.getBoundingClientRect().height : 0;
            const elementTop = element.getBoundingClientRect().top + window.scrollY;
            const baseOffset = 50;
            // desktop: -80 nudge for #home; mobile uses early-return above
            const homeAdjustment = targetId === 'home' ? (isMobile ? -20 : -80) : 0;
            const offsetPosition = Math.max(0, elementTop - headerHeight + baseOffset + homeAdjustment);
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            return true;
        };

        if (performScroll()) return;

        try {
            router.push(`/${locale}#${targetId}`);
        } catch { /* ignore */ }
        setTimeout(performScroll, 300);
    }, [locale, router]);
}
