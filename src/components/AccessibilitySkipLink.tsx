"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getCommonCopy } from '@/locales/common';
import { locales } from '@/locales/config';

interface AccessibilitySkipLinkProps {
    label?: string;
}

const AccessibilitySkipLink = ({ label }: AccessibilitySkipLinkProps) => {
    const pathname = usePathname();
    const locale = locales.find((loc) => pathname?.startsWith(`/${loc}`)) ?? 'es';
    const resolved = label ?? getCommonCopy(locale).skipToMainContent;
    return (
        <Link
            href="#main-content"
            className="absolute left-1/2 top-2 -translate-x-1/2 rounded-md bg-brand-600 px-4 py-2 text-white opacity-0 focus-visible:opacity-100"
        >
            {resolved}
        </Link>
    );
};

export default AccessibilitySkipLink;
