'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
            <div
                className="mb-6 text-6xl font-black text-studio-accent"
                aria-hidden="true"
            >
                ⚠
            </div>
            <h1 className="mb-3 text-2xl font-bold">Something went wrong</h1>
            <p className="mb-8 text-base text-gray-500">An unexpected error occurred. Please try again.</p>
            <div className="flex flex-wrap gap-3 justify-center">
                <button
                    onClick={reset}
                    className="focus-ring rounded-xl bg-studio-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-studio-accent-dim"
                >
                    Try again
                </button>
                <Link
                    href="/"
                    className="rounded-xl border border-white/20 bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                    ← Go home
                </Link>
            </div>
        </div>
    );
}
