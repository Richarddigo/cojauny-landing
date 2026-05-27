"use client";

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import type { LandingCopy } from '@/locales/copy';

interface MockupsProps {
    className?: string;
    copy: LandingCopy['mockups'];
}

const Mockups = ({ className, copy }: MockupsProps) => {
    const prefersReducedMotionClient = useReducedMotion();
    const prefersReducedMotion = useReducedMotionPreference() || prefersReducedMotionClient;
    const sectionRef = useRef<HTMLElement>(null);
    const phoneRef = useRef<HTMLDivElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const firstCardRef = useRef<HTMLButtonElement>(null);
    const lastCardRef = useRef<HTMLButtonElement>(null);
    const [parallaxOffset, setParallaxOffset] = useState(0);

    const screenOptions = useMemo(() => copy.screens, [copy]);
    const [activeScreenId, setActiveScreenId] = useState(() => screenOptions[0]?.id ?? 'home');
    const activeScreen = screenOptions.find((screen) => screen.id === activeScreenId)
        ?? screenOptions[0];

    useEffect(() => {
        if (prefersReducedMotion) return;

        const updateParallax = () => {
            const sectionRect = sectionRef.current?.getBoundingClientRect();
            if (!sectionRect) return;
            const sectionTop = sectionRect.top + window.scrollY;
            const progress = Math.max(0, Math.min(1, (window.scrollY - sectionTop + window.innerHeight) / (sectionRef.current!.offsetHeight + window.innerHeight)));
            const offset = Math.round(progress * 400);

            setParallaxOffset(offset);
        };

        const onScroll = () => {
            requestAnimationFrame(updateParallax);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        updateParallax(); // initial

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [prefersReducedMotion]);

    return (
        <section
            ref={sectionRef}
            id="demo"
            className={`relative mt-6 w-full md:mt-10 lg:mt-16 ${className ?? ''}`.trim()}
            aria-labelledby="mockups-title"
        >
            <div className="text-center">
                <h2 id="mockups-title" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {copy.heading}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-studio-muted sm:mt-4 sm:text-lg">{copy.description}</p>
            </div>
            <div className="relative mt-8 flex flex-col gap-6 md:mt-12 lg:mt-20 lg:flex-row lg:gap-10 xl:gap-12">
                <div ref={cardsContainerRef} className="flex flex-1 flex-col gap-3 text-left md:gap-4 md:max-w-2xl lg:max-w-3xl">
                    {screenOptions.map((screen, index) => {
                        const isActive = screen.id === activeScreenId;
                        const isFirst = index === 0;
                        const isLast = index === screenOptions.length - 1;
                        return (
                            <button
                                key={screen.id}
                                ref={isFirst ? firstCardRef : isLast ? lastCardRef : null}
                                type="button"
                                onMouseEnter={() => setActiveScreenId(screen.id)}
                                onFocus={() => setActiveScreenId(screen.id)}
                                onClick={() => setActiveScreenId(screen.id)}
                                className={`group rounded-2xl border bg-studio-surface p-4 text-left shadow-lg transition focus-visible:outline-none md:rounded-3xl md:p-6 ${isActive
                                    ? 'border-studio-accent/60 shadow-soft-glow ring-2 ring-[#5B7BFF]/20'
                                    : 'border-white/8 hover:border-studio-accent/30 hover:shadow-xl'
                                    }`}
                            >
                                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-studio-accent">
                                    <span className="rounded-full bg-studio-accent/10 px-2 py-1 text-[10px] text-studio-accent">
                                        {screen.badge}
                                    </span>
                                </span>
                                <h3 className="mt-3 text-lg font-semibold text-white sm:mt-4 sm:text-xl">{screen.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-studio-muted sm:mt-3 sm:text-base">{screen.description}</p>
                            </button>
                        );
                    })}
                </div>
                <div className="relative flex flex-1 items-center justify-center min-h-[220px] sm:min-h-[320px] lg:sticky lg:top-24 lg:self-start lg:h-[640px]">
                    <div
                        ref={phoneRef}
                        style={
                            prefersReducedMotion
                                ? undefined
                                : {
                                    transform: `translateY(-${Math.max(0, parallaxOffset)}px)`,
                                    willChange: 'transform'
                                }
                        }
                        className="relative mx-auto w-[clamp(220px,22vw,340px)] max-w-full sm:w-[300px] lg:w-[340px]"
                    >
                        <motion.div
                            key={activeScreen?.id}
                            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
                            animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                            transition={{ duration: 0.45, ease: 'easeOut' }}
                            className="relative"
                            aria-live="polite"
                        >
                            <div className="relative rounded-[2.5rem] border-[5px] border-black bg-black sm:rounded-[3rem]">
                                <div className="absolute left-1/2 top-[22px] z-30 h-[30px] w-[120px] -translate-x-1/2 rounded-full bg-black" />
                                <div className="relative z-20 flex items-center justify-between rounded-t-[2.5rem] bg-black px-6 pb-3 pt-5 text-[11px] font-medium text-white sm:rounded-t-[3rem] sm:px-8">
                                    <span>9:41</span>
                                    <div className="flex items-center gap-1">
                                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                        </svg>
                                        <svg className="h-3 w-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                        <svg className="h-3 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M4 4h12v2H4V4zm0 4h12v2H4V8zm0 4h8v2H4v-2zm16-1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="overflow-hidden rounded-b-[2.5rem] bg-studio-surface sm:rounded-b-[3rem]">
                                    {activeScreen && (
                                        <Image
                                            src={activeScreen.image}
                                            alt={activeScreen.title}
                                            width={720}
                                            height={1560}
                                            loading="lazy"
                                            sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 340px"
                                            className="h-full w-full object-cover"
                                        />
                                    )}
                                </div>
                                <div className="pointer-events-none absolute bottom-3 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-white/30" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mockups;

