"use client";

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

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

    const activeScreen = copy.screens.find((screen) => screen.id === activeScreenId) ?? copy.screens[0];

    return (
        <section
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
            <div className="relative mt-16 flex flex-col gap-10 lg:flex-row lg:gap-16">
                <div className="flex flex-1 flex-col gap-5 text-left lg:max-w-2xl">
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
                <div className="relative flex flex-1 items-center justify-center lg:sticky lg:top-24 lg:h-screen lg:max-h-[800px]">
                    <motion.div
                        key={activeScreen?.id}
                        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
                        animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="relative mx-auto w-[280px] max-w-full rounded-[3rem] border-4 border-slate-300 bg-slate-900 p-3 shadow-2xl lg:w-[340px]"
                        aria-live="polite"
                    >
                        <div className="flex items-center justify-between px-2 text-[10px] text-white/70">
                            <span>Cojauny</span>
                            <span>{activeScreen?.badge}</span>
                        </div>
                        <div className="mt-4 overflow-hidden rounded-[2rem] bg-slate-950">
                            {activeScreen && (
                                <Image
                                    src={activeScreen.image}
                                    alt={activeScreen.title}
                                    width={720}
                                    height={1560}
                                    priority={false}
                                    loading="lazy"
                                />
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Mockups;
