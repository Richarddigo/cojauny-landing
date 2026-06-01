'use client';

import { usePathname } from 'next/navigation';
import { getCommonCopy } from '@/locales/common';
import { locales, defaultLocale } from '@/locales/config';

export default function Loading() {
    const pathname = usePathname();
    const locale = locales.find((loc) => pathname?.startsWith(`/${loc}`)) ?? defaultLocale;
    const { loadingLabel } = getCommonCopy(locale);

    return (
        <div
            className="mx-auto max-w-3xl px-6 py-24"
            aria-label={loadingLabel}
            role="status"
        >
            {/* Title skeleton */}
            <div className="mb-4 h-8 w-1/2 animate-pulse rounded-xl bg-white/10" />
            <div className="mb-2 h-4 w-4/5 animate-pulse rounded-lg bg-white/10" />
            <div className="mb-10 h-4 w-3/5 animate-pulse rounded-lg bg-white/10" />

            {/* Card skeletons */}
            {[1, 2, 3].map((i) => (
                <div
                    key={i}
                    className="mb-4 rounded-2xl border border-white/8 bg-studio-surface p-6"
                    style={{ animationDelay: `${i * 100}ms` }}
                >
                    <div className="mb-3 h-4 w-2/5 animate-pulse rounded-lg bg-white/10" />
                    <div className="mb-2 h-3 w-full animate-pulse rounded-md bg-white/8" />
                    <div className="h-3 w-11/12 animate-pulse rounded-md bg-white/8" />
                </div>
            ))}
        </div>
    );
}

