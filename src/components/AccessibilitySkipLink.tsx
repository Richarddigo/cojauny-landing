"use client";

import Link from 'next/link';

interface AccessibilitySkipLinkProps {
    label?: string;
}

const AccessibilitySkipLink = ({ label = 'Skip to main content' }: AccessibilitySkipLinkProps) => (
    <Link
        href="#main-content"
        className="absolute left-1/2 top-2 -translate-x-1/2 rounded-md bg-brand-600 px-4 py-2 text-white opacity-0 focus-visible:opacity-100"
    >
        {label}
    </Link>
);

export default AccessibilitySkipLink;
