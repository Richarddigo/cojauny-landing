"use client";

import { useState, useSyncExternalStore, useEffect } from 'react';
import { useConsent } from '@/hooks/useConsent';
import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';

interface CookieBannerProps {
    copy: LandingCopy['cookie'];
    locale: Locale;
}

const subscribeToHydration = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

const CookieBanner = ({ copy, locale }: CookieBannerProps) => {
    const { isConfigured, acceptAll, rejectAnalytics, savePreferences } = useConsent();
    const hydrated = useSyncExternalStore(subscribeToHydration, clientSnapshot, serverSnapshot);
    const [dismissed, setDismissed] = useState(false);
    const [reopened, setReopened] = useState(false);
    useEffect(() => {
        const reopen = () => setReopened(true);
        window.addEventListener('cojauny:cookie-settings', reopen);
        return () => window.removeEventListener('cojauny:cookie-settings', reopen);
    }, []);
    const open = hydrated && (reopened || (!isConfigured && !dismissed));
    const [customize, setCustomize] = useState(false);
    const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

    const close = () => {
        setDismissed(true);
        setReopened(false);
        setCustomize(false);
    };

    return (
        <div
            className={`fixed bottom-4 left-1/2 z-50 w-[95%] max-w-2xl -translate-x-1/2 rounded-2xl bg-slate-900/95 backdrop-blur-sm p-6 shadow-lg border border-white/10 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            role="dialog"
            aria-live="polite"
            aria-label={copy.message}
            aria-hidden={!open}
            inert={!open}
        >
            <p className="mb-4 text-sm text-white/80">{copy.message}</p>

            {customize && (
                <div className="mb-4 space-y-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-sm font-semibold text-white">{copy.essentialLabel}</p>
                            <p className="mt-1 text-xs text-white/60">{copy.essentialDescription}</p>
                        </div>
                        <span className="text-xs font-medium text-studio-accent">{copy.alwaysOn}</span>
                    </div>
                    <label className="flex items-start justify-between gap-4 cursor-pointer">
                        <div>
                            <p className="text-sm font-semibold text-white">{copy.analyticsLabel}</p>
                            <p className="mt-1 text-xs text-white/60">{copy.analyticsDescription}</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={analyticsEnabled}
                            onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                            className="mt-1 h-5 w-5 rounded border-white/20 bg-studio-surface-2 text-brand-500 focus:ring-brand-500"
                        />
                    </label>
                </div>
            )}

            <div className="flex flex-wrap gap-3">
                <button
                    type="button"
                    onClick={() => {
                        acceptAll();
                        close();
                    }}
                    className="rounded-xl bg-action px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-action-dim focus-visible:bg-action-dim"
                    tabIndex={open ? 0 : -1}
                >
                    {copy.acceptAll}
                </button>
                <button
                    type="button"
                    onClick={() => {
                        rejectAnalytics();
                        close();
                    }}
                    className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                    tabIndex={open ? 0 : -1}
                >
                    {copy.reject}
                </button>
                {customize ? (
                    <button
                        type="button"
                        onClick={() => {
                            savePreferences(analyticsEnabled);
                            close();
                        }}
                        className="rounded-xl border border-studio-accent/40 px-4 py-2 text-sm font-semibold text-studio-accent transition hover:bg-studio-accent/10"
                        tabIndex={open ? 0 : -1}
                    >
                        {copy.savePreferences}
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={() => setCustomize(true)}
                        className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                        tabIndex={open ? 0 : -1}
                    >
                        {copy.customize}
                    </button>
                )}
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
