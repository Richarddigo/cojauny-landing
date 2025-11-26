"use client";

import { useEffect } from 'react';

const getHeaderOffset = () => {
    const hdr = document.querySelector('header');
    return hdr ? hdr.getBoundingClientRect().height : 0;
};

const scrollToId = (id: string) => {
    if (!id) return false;
    const el = document.getElementById(id);
    if (!el) return false;
    const headerHeight = getHeaderOffset();
    const elementTop = el.getBoundingClientRect().top + window.scrollY;
    const baseOffset = 50;
    const homeAdjustment = id === 'home' ? -80 : 0;
    const offsetPosition = Math.max(0, elementTop - headerHeight + baseOffset + homeAdjustment);
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    return true;
};

export default function HashScrollHandler() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const tryScroll = () => {
            const hash = window.location.hash;
            if (!hash) return;
            const id = hash.replace('#', '');
            // delay slightly to allow content paint
            setTimeout(() => scrollToId(id), 50);
        };

        // scroll on mount
        tryScroll();

        // listen for hashchange
        window.addEventListener('hashchange', tryScroll);
        return () => window.removeEventListener('hashchange', tryScroll);
    }, []);

    return null;
}
