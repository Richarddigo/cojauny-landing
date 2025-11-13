"use client";

import { Transition } from '@headlessui/react';
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

    if (!open) {
        return null;
    }

    return (
        <Transition
            show={open}
            enter="transition-all duration-500"
            enterFrom="opacity-0 translate-y-6"
            enterTo="opacity-100 translate-y-0"
            leave="transition-all duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed bottom-4 left-1/2 z-50 w-[95%] max-w-2xl -translate-x-1/2 rounded-2xl bg-white p-6 shadow-soft-glow">
                <p className="mb-4 text-sm text-slate-600">{copy.message}</p>
                <div className="flex flex-wrap gap-3">
                    <button
                        type="button"
                        onClick={() => {
                            accept();
                            setOpen(false);
                        }}
                        className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft-glow transition hover:bg-brand-500 focus-visible:bg-brand-700"
                    >
                        {copy.acceptAll}
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            reject();
                            setOpen(false);
                        }}
                        className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                        {copy.reject}
                    </button>
                    <a
                        href={`/${locale}/legal/cookies`}
                        className="ml-auto text-sm font-medium text-brand-600 underline-offset-4 hover:underline"
                    >
                        {copy.moreInfo}
                    </a>
                </div>
            </div>
        </Transition>
    );
};

export default CookieBanner;
