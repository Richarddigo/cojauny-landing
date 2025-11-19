"use client";

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import type { LandingCopy } from '@/locales/copy';

interface MockupsProps {
    className?: string;
    copy: LandingCopy['mockups'];
}

const Mockups = ({ className, copy }: MockupsProps) => {
    const prefersReducedMotionClient = useReducedMotion();
    const prefersReducedMotion = useReducedMotionPreference() || prefersReducedMotionClient;
    const [activeScreenId, setActiveScreenId] = useState(copy.screens[0]?.id ?? 'home');
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (copy.screens.length) {
            setActiveScreenId(copy.screens[0].id);
        }
    }, [copy]);

    const activeScreen = copy.screens.find((screen) => screen.id === activeScreenId) ?? copy.screens[0];

    // Parallax effect scoped to this section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start center', 'end end']
    });

    const phoneY = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const phoneMotionStyle = prefersReducedMotion ? undefined : { y: phoneY };

    return (
        <section
            ref={sectionRef}
            id="demo"
            className={`relative mt-8 w-full ${className ?? ''}`.trim()}
            aria-labelledby="mockups-title"
        >
            <div className="text-center">
                <h2 id="mockups-title" className="text-3xl font-bold tracking-tight text-slate-900">
                    {copy.heading}
                </h2>
                <p className="mt-4 text-lg text-slate-600">{copy.description}</p>
            </div>
            <div className="relative mt-16 flex flex-col gap-10 lg:flex-row lg:gap-12 xl:gap-16">
                <div className="flex flex-1 flex-col gap-5 text-left lg:max-w-3xl">
                    {copy.screens.map((screen) => {
                        const isActive = screen.id === activeScreenId;
                        return (
                            <button
                                key={screen.id}
                                type="button"
                                onMouseEnter={() => setActiveScreenId(screen.id)}
                                onFocus={() => setActiveScreenId(screen.id)}
                                onClick={() => setActiveScreenId(screen.id)}
                                className={`group rounded-3xl border bg-white p-8 text-left shadow-lg transition focus-visible:outline-none ${isActive
                                    ? 'border-brand-300 shadow-soft-glow ring-2 ring-brand-100'
                                    : 'border-slate-100 hover:border-brand-100 hover:shadow-xl'
                                    }`}
                            >
                                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                                    <span className="rounded-full bg-brand-50 px-3 py-1.5 text-[11px] text-brand-600">
                                        {screen.badge}
                                    </span>
                                </span>
                                <h3 className="mt-5 text-2xl font-semibold text-slate-900">{screen.title}</h3>
                                <p className="mt-3 text-base leading-relaxed text-slate-600">{screen.description}</p>
                            </button>
                        );
                    })}
                </div>
                <div className="relative flex flex-1 items-center justify-center min-h-[520px] lg:sticky lg:top-24 lg:self-start lg:h-[640px]">
                    <motion.div
                        key={activeScreen?.id}
                        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
                        animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                        style={phoneMotionStyle}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="relative mx-auto w-[280px] max-w-full will-change-transform lg:w-[340px]"
                        aria-live="polite"
                    >
                        {/* iPhone-style device frame */}
                        <div className="relative rounded-[3rem] border-[5px] border-black bg-black shadow-2xl">
                            {/* Dynamic Island */}
                            <div className="absolute left-1/2 top-[22px] z-30 h-[30px] w-[120px] -translate-x-1/2 rounded-full bg-black"></div>

                            {/* Status bar */}
                            <div className="relative z-20 flex items-center justify-between bg-black px-8 pb-3 pt-5 text-[11px] font-medium text-white rounded-t-[3rem]">
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

                            {/* Screen content */}
                            <div className="overflow-hidden rounded-b-[3rem] bg-white">
                                {activeScreen && (
                                    <Image
                                        src={activeScreen.image}
                                        alt={activeScreen.title}
                                        width={720}
                                        height={1560}
                                        priority={false}
                                        loading="lazy"
                                        className="h-full w-full object-cover"
                                    />
                                )}
                            </div>

                            {/* Home indicator */}
                            <div className="absolute bottom-3 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-white/30"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Mockups;
