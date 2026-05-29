"use client";

import { useEffect, useState } from 'react';
import { useConsent } from '@/hooks/useConsent';
import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';

interface CookieBannerProps {
    copy: LandingCopy['cookie'];
    locale: Locale;
}

const CookieBanner = ({ copy, locale }: CookieBannerProps) => {
    const { consent, accept, reject } = useConsent();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(consent === 'unknown');
    }, [consent]);

    // Always render the node (position: fixed) and toggle visibility with
    // classes. Avoids the layout-shift that mounting a new body child can
    // cause post-hydration, and removes the headlessui Transition runtime
    // from the critical path.
    return (
        <div
            className={`fixed bottom-4 left-1/2 z-50 w-[95%] max-w-2xl -translate-x-1/2 rounded-2xl bg-slate-900/95 backdrop-blur-sm p-6 shadow-lg border border-white/10 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            role="dialog"
            aria-live="polite"
            aria-hidden={!open}
        >
            <p className="mb-4 text-sm text-white/80">{copy.message}</p>
            <div className="flex flex-wrap gap-3">
                <button
                    type="button"
                    onClick={() => {
                        accept();
                        setOpen(false);
                    }}
                    className="rounded-xl bg-studio-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-studio-accent-dim focus-visible:bg-studio-accent-dim"
                    tabIndex={open ? 0 : -1}
                >
                    {copy.acceptAll}
                </button>
                <button
                    type="button"
                    onClick={() => {
                        reject();
                        setOpen(false);
                    }}
                    className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                    tabIndex={open ? 0 : -1}
                >
                    {copy.reject}
                </button>
                <a
                    href={`/${locale}/legal/cookies`}
                    className="ml-auto text-sm font-medium text-white/70 underline-offset-4 hover:text-white hover:underline"
                    tabIndex={open ? 0 : -1}
                >
                    {copy.moreInfo}
                </a>
            </div>
        </div>
    );
};

export default CookieBanner;

