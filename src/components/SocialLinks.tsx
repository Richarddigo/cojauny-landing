"use client";

import React from 'react';

export const socialLinks = [
    {
        label: 'Instagram',
        href: 'https://instagram.com/cojauny',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                aria-hidden
            >
                <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17" cy="7" r="1" fill="currentColor" />
            </svg>
        )
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=61583564731277',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                aria-hidden
            >
                <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <path
                    d="M13 10V8C13 7.44772 13.4477 7 14 7H15V4H13C11.3431 4 10 5.34315 10 7V10H8V13H10V20H13V13H15L16 10H13Z"
                    fill="currentColor"
                />
            </svg>
        )
    },
    {
        label: 'TikTok',
        href: 'https://tiktok.com/@cojauny',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                aria-hidden
            >
                <path
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                    fill="currentColor"
                />
            </svg>
        )
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/cojauny',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                aria-hidden
            >
                <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <path
                    d="M8 17V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <circle cx="8" cy="7" r="1" fill="currentColor" />
                <path
                    d="M12 17V13.5C12 12.6716 12.6716 12 13.5 12V12C14.3284 12 15 12.6716 15 13.5V17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>
        )
    },
    {
        label: 'X (Twitter)',
        href: 'https://twitter.com/cojauny',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                aria-hidden
            >
                <path
                    d="M4 4L20 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <path
                    d="M20 4L4 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>
        )
    },
    {
        label: 'WhatsApp',
        href: 'https://whatsapp.com/channel/0029Vb6fUVIK0IBawhnj8Z1y',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                aria-hidden
            >
                <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                    fill="currentColor"
                />
                <path
                    d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
            </svg>
        )
    }
];

interface SocialIconsProps {
    className?: string;
    iconClassName?: string;
    variant?: 'light' | 'dark';
}

export const SocialIcons = ({ className = '', iconClassName = '', variant = 'light' }: SocialIconsProps) => {
    const baseClasses = variant === 'light'
        ? 'text-white/60 hover:text-brand-200 hover:border-brand-200'
        : 'text-studio-muted hover:text-studio-accent hover:border-studio-accent/40';

    return (
        <div className={`flex gap-2 ${className}`}>
            {socialLinks.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-full border border-transparent p-1.5 transition ${baseClasses} ${iconClassName}`}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;

