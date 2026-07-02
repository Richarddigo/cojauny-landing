"use client";

import { useEffect, useState } from 'react';
import { useConsent } from '@/hooks/useConsent';
import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';
import Button from '@/components/ui/Button';

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
            aria-label={copy.message}
            aria-hidden={!open}
        >
            <p className="mb-4 text-sm text-white/80">{copy.message}</p>
            <div className="flex flex-wrap gap-3">
                <Button
                    size="sm"
                    onClick={() => {
                        accept();
                        setOpen(false);
                    }}
                    tabIndex={open ? 0 : -1}
                >
                    {copy.acceptAll}
                </Button>
                <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                        reject();
                        setOpen(false);
                    }}
                    tabIndex={open ? 0 : -1}
                >
                    {copy.reject}
                </Button>
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

