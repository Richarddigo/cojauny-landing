"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { LandingCopy, MockupScreenCopy } from '@/locales/copy';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';

interface DemoSectionProps {
    copy: LandingCopy['mockups'];
    className?: string;
}

const PHONE_IMAGE_SIZES =
    '(max-width: 640px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 260px, 340px';
const PHONE_IMAGE_SIZES_COMPACT =
    '(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 280px';

function useInView<T extends HTMLElement>(rootMargin = '200px') {
    const ref = useRef<T | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { rootMargin }
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, [rootMargin]);

    return { ref, inView };
}

const IPhoneMockup = ({
    screen,
    className,
    priority = false,
    animate = true,
    compact = false,
}: {
    screen: MockupScreenCopy;
    className?: string;
    priority?: boolean;
    animate?: boolean;
    compact?: boolean;
}) => {
    const prefersReducedMotion = useReducedMotionPreference();
    const shouldAnimate = animate && !prefersReducedMotion;

    return (
        <div className={`relative aspect-[9/19.5] w-full mx-auto ${className ?? ''}`}>
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="relative h-full w-full rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] border-[5px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
                    <div className="absolute left-1/2 top-[0.5%] z-20 h-[4%] w-[26%] -translate-x-1/2 rounded-full bg-slate-900" />

                    <div className="relative h-full w-full overflow-hidden">
                        <div
                            key={shouldAnimate ? screen.id : undefined}
                            className={`relative h-full w-full ${shouldAnimate ? 'cojauny-fade-in' : ''}`}
                        >
                            <div className="absolute inset-0 bg-[#1b2335]" />
                            <div className="absolute inset-[1px] top-[15px] bottom-[1px]">
                                <div className="relative h-full w-full">
                                    <Image
                                        src={screen.image}
                                        alt={screen.title}
                                        fill
                                        className="object-cover object-top"
                                        sizes={compact ? PHONE_IMAGE_SIZES_COMPACT : PHONE_IMAGE_SIZES}
                                        priority={priority}
                                        loading={priority ? undefined : 'lazy'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-[1.5%] left-0 right-0 h-[4%] z-30 flex items-center justify-between px-[6%] text-[8px] md:text-[9px] lg:text-[10px] font-semibold text-white pointer-events-none">
                        <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">9:41</span>
                        <div className="flex items-center gap-1">
                            <svg className="w-3 h-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" viewBox="0 0 17 12" fill="none" aria-hidden>
                                <rect x="0" y="7" width="3" height="5" rx="1" fill="currentColor" />
                                <rect x="4.5" y="5" width="3" height="7" rx="1" fill="currentColor" />
                                <rect x="9" y="2" width="3" height="10" rx="1" fill="currentColor" />
                                <rect x="13.5" y="0" width="3" height="12" rx="1" fill="currentColor" />
                            </svg>
                            <svg className="w-3 h-2.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" viewBox="0 0 15 11" fill="none" aria-hidden>
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.5 3.5C9.433 3.5 11.183 4.283 12.45 5.55L13.5 4.5C11.933 2.933 9.817 2 7.5 2C5.183 2 3.067 2.933 1.5 4.5L2.55 5.55C3.817 4.283 5.567 3.5 7.5 3.5ZM7.5 6.5C8.433 6.5 9.283 6.883 9.917 7.517L11 6.433C10.083 5.517 8.85 5 7.5 5C6.15 5 4.917 5.517 4 6.433L5.083 7.517C5.717 6.883 6.567 6.5 7.5 6.5ZM9 9C9 9.828 8.328 10.5 7.5 10.5C6.672 10.5 6 9.828 6 9C6 8.172 6.672 7.5 7.5 7.5C8.328 7.5 9 8.172 9 9Z" fill="currentColor" />
                            </svg>
                            <svg className="w-5 h-2.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" viewBox="0 0 25 12" fill="none" aria-hidden>
                                <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" stroke="currentColor" strokeOpacity="0.8" />
                                <rect x="2" y="2" width="15" height="8" rx="1.5" fill="currentColor" />
                                <path d="M20 4V8C20.833 7.667 21.5 6.933 21.5 6C21.5 5.067 20.833 4.333 20 4Z" fill="currentColor" fillOpacity="0.8" />
                            </svg>
                        </div>
                    </div>

                    <div className="absolute bottom-[1%] left-1/2 -translate-x-1/2 w-[35%] h-[0.6%] bg-white/80 rounded-full z-30" />
                </div>
            </div>
        </div>
    );
};

function LazyIPhoneMockup({
    screen,
    priority,
}: {
    screen: MockupScreenCopy;
    priority?: boolean;
}) {
    const { ref, inView } = useInView<HTMLDivElement>('250px');

    return (
        <div ref={ref} className="w-full">
            {inView ? (
                <IPhoneMockup screen={screen} priority={priority} animate={false} compact />
            ) : (
                <div className="aspect-[9/19.5] w-full rounded-[2rem] border-[5px] border-slate-900/40 bg-slate-900/20" aria-hidden />
            )}
        </div>
    );
}

export default function DemoSection({ copy, className }: DemoSectionProps) {
    const [activeStep, setActiveStep] = useState(0);
    const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
    const [isMobile, setIsMobile] = useState(false);
    const [isLocked, setIsLocked] = useState(false);
    const [lockedIndex, setLockedIndex] = useState<number | null>(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        const update = () => setIsMobile(mediaQuery.matches);
        update();
        mediaQuery.addEventListener('change', update);
        return () => mediaQuery.removeEventListener('change', update);
    }, []);

    useEffect(() => {
        if (isMobile || isLocked) return;

        const cards = cardsRef.current;
        const visibility = new Map<number, number>();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = cards.findIndex((card) => card === entry.target);
                    if (index === -1) return;

                    if (entry.isIntersecting) {
                        visibility.set(index, entry.intersectionRatio);
                    } else {
                        visibility.delete(index);
                    }
                });

                if (visibility.size === 0) return;

                let bestIndex = 0;
                let bestRatio = 0;
                visibility.forEach((ratio, index) => {
                    if (ratio > bestRatio) {
                        bestRatio = ratio;
                        bestIndex = index;
                    }
                });

                setActiveStep((previous) => (previous !== bestIndex ? bestIndex : previous));
            },
            {
                threshold: [0, 0.25, 0.5, 0.75, 1],
                rootMargin: '-35% 0px -35% 0px',
            }
        );

        cards.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, [isMobile, isLocked, copy.screens.length]);

    useEffect(() => {
        if (!isLocked || lockedIndex === null) return;

        const handleClickOutside = (event: MouseEvent) => {
            const clickedInsideAnyCard = cardsRef.current.some((card) =>
                card?.contains(event.target as Node)
            );
            if (!clickedInsideAnyCard) {
                setIsLocked(false);
                setLockedIndex(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isLocked, lockedIndex]);

    const handleCardClick = (index: number) => {
        if (isLocked && lockedIndex === index) {
            setIsLocked(false);
            setLockedIndex(null);
            setActiveStep(index);
            return;
        }

        setIsLocked(true);
        setLockedIndex(index);
        setActiveStep(index);
    };

    return (
        <section
            id="demo"
            className={`relative w-full py-16 md:py-24 lg:py-32 bg-studio-bg ${className ?? ''}`}
        >
            <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 pl-[calc(var(--social-bar-offset)+1rem)]">
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <h2 className="cojauny-fade-in text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {copy.heading}
                    </h2>
                    <p className="cojauny-fade-in mt-4 text-lg md:text-xl text-studio-muted max-w-3xl mx-auto">
                        {copy.description}
                    </p>
                </div>

                <div className="hidden md:grid md:grid-cols-[1fr_400px] md:gap-12 lg:gap-16 xl:gap-20">
                    <div className="flex flex-col gap-8">
                        {copy.screens.map((screen, idx) => (
                            <div
                                key={screen.id}
                                ref={(element) => {
                                    cardsRef.current[idx] = element;
                                }}
                                onClick={() => handleCardClick(idx)}
                                className={`demo-card cojauny-fade-in transition-all duration-200 ease-out cursor-pointer ${activeStep === idx ? 'opacity-100' : 'opacity-60'} relative`}
                            >
                                {isLocked && lockedIndex === idx && (
                                    <div className="absolute top-2 right-2 bg-studio-surface-2 rounded-full p-1 shadow-md border-2 border-studio-accent">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-studio-accent" aria-hidden>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                )}
                                <div className={`bg-studio-surface rounded-3xl p-8 xl:p-10 shadow-xl border transition-all duration-200 ease-out ${isLocked && lockedIndex === idx ? 'border-studio-accent shadow-2xl' : activeStep === idx ? 'border-studio-accent/40 shadow-2xl' : 'border-white/8'}`}>
                                    <div className="inline-flex items-center gap-2 mb-5">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-150 ${activeStep === idx ? 'bg-studio-accent text-white' : 'bg-white/10 text-studio-muted'}`}>{idx + 1}</div>
                                        <span className="px-3 py-1.5 rounded-full bg-studio-accent/10 text-studio-accent text-xs font-bold uppercase tracking-wider">{screen.badge}</span>
                                    </div>
                                    <h3 className="text-2xl xl:text-3xl font-bold text-white mb-4">{screen.title}</h3>
                                    <p className="text-lg text-studio-muted leading-relaxed">{screen.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative md:sticky md:top-24 md:self-start">
                        <div
                            className="cojauny-fade-in mx-auto"
                            style={{ width: 'min(calc((100vh - 8rem) * 9 / 19.5), 340px)' }}
                        >
                            <IPhoneMockup screen={copy.screens[activeStep]} priority animate />
                        </div>
                    </div>
                </div>

                <div className="md:hidden flex flex-col gap-8">
                    {copy.screens.map((screen, idx) => (
                        <div key={screen.id} className="flex flex-col">
                            <div className="bg-studio-surface rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-white/8">
                                <div className="inline-flex items-center gap-2 mb-3">
                                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-sm bg-studio-accent text-white">
                                        {idx + 1}
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-studio-accent/10 text-studio-accent text-xs font-bold uppercase tracking-wider">
                                        {screen.badge}
                                    </span>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                                    {screen.title}
                                </h3>
                                <p className="text-sm md:text-base text-studio-muted leading-relaxed">
                                    {screen.description}
                                </p>
                            </div>

                            <div className="mt-4 w-full flex justify-center">
                                <div className="w-[50%] max-w-[200px] sm:max-w-[220px]">
                                    <LazyIPhoneMockup screen={screen} priority={idx === 0} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
