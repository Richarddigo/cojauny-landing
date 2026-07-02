"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface AnimateInProps {
    children: ReactNode;
    className?: string;
    /** Seconds to delay the reveal animation. */
    delay?: number;
}

/**
 * Reveals its children when they scroll into view.
 *
 * Implementation: CSS keyframes + IntersectionObserver, mirroring
 * cojauny-studio's AnimateIn so scroll motion feels identical across
 * both sites. Zero JS animation cost; respects `prefers-reduced-motion`.
 */
export default function AnimateIn({ children, className = '', delay = 0 }: AnimateInProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [seen, setSeen] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSeen(true);
                    io.disconnect();
                }
            },
            { rootMargin: '0px 0px -5% 0px', threshold: 0.05 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${seen ? 'reveal-in' : 'reveal-init'} ${className}`}
            style={seen && delay > 0 ? { animationDelay: `${delay}s` } : undefined}
        >
            {children}
        </div>
    );
}
