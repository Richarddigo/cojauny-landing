import type { CSSProperties } from 'react';

/**
 * Icon — renders an SVG file from /public/icons/ using CSS mask-image,
 * so it inherits `currentColor` from the parent just like an inline SVG.
 * Mirrors cojauny-studio's Icon component so shared iconography (nav
 * hamburger/close, chevrons, arrows) renders identically across sites.
 *
 * Usage:
 *   <Icon name="arrow-right" size={16} className="ml-1.5 text-studio-accent" />
 */
export default function Icon({
    name,
    size = 16,
    className = '',
}: {
    name: string;
    size?: number;
    className?: string;
}) {
    const style: CSSProperties = {
        display: 'inline-block',
        width: size,
        height: size,
        flexShrink: 0,
        WebkitMaskImage: `url(/icons/${name}.svg)`,
        maskImage: `url(/icons/${name}.svg)`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        backgroundColor: 'currentColor',
    };
    return <span aria-hidden="true" className={className} style={style} />;
}
