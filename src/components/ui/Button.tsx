import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface CommonProps {
    variant?: Variant;
    size?: Size;
    href?: string;
    external?: boolean;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    children: ReactNode;
}

type ButtonProps = CommonProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

const variantStyles: Record<Variant, string> = {
    primary:
        'bg-studio-accent text-white hover:bg-studio-accent-dim active:scale-[0.97] shadow-[0_0_28px_rgba(91,123,255,0.35)] hover:shadow-[0_0_40px_rgba(91,123,255,0.5)]',
    secondary:
        'bg-white/[0.06] text-studio-text border border-white/10 hover:bg-white/10 hover:border-white/20',
    ghost: 'text-studio-muted hover:text-studio-text hover:bg-white/5',
    outline:
        'border-2 border-white/20 text-white hover:border-white/30 hover:bg-white/10',
};

const sizeStyles: Record<Size, string> = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-3.5 text-base gap-2.5',
};

function baseClasses(variant: Variant, size: Size, disabled: boolean, className: string) {
    return [
        'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 ease-out cursor-pointer focus-ring whitespace-nowrap',
        variantStyles[variant],
        sizeStyles[size],
        disabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');
}

const Spinner = () => (
    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden />
);

/**
 * Shared CTA component matching cojauny-studio's Button API (variant/size,
 * polymorphic href handling, loading state) so primary/secondary actions
 * look and behave identically across both sites.
 */
export default function Button({
    variant = 'primary',
    size = 'md',
    href,
    external,
    children,
    className = '',
    disabled = false,
    loading = false,
    onClick,
    type = 'button',
    ...rest
}: ButtonProps) {
    const classes = baseClasses(variant, size, disabled || loading, className);
    const isDisabled = disabled || loading;

    if (href) {
        const isHash = href.startsWith('#');
        const isExternal = external || href.startsWith('http');

        if (isExternal) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes}
                    aria-disabled={isDisabled || undefined}
                    {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
                >
                    {children}
                </a>
            );
        }

        if (isHash) {
            return (
                <a
                    href={href}
                    onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
                    className={classes}
                    aria-disabled={isDisabled || undefined}
                    {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
                >
                    {children}
                </a>
            );
        }

        return (
            <Link
                href={href}
                className={classes}
                aria-disabled={isDisabled || undefined}
                {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
            disabled={isDisabled}
            className={classes}
            {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {loading ? (
                <span className="flex items-center gap-2">
                    <Spinner />
                    {children}
                </span>
            ) : (
                children
            )}
        </button>
    );
}
