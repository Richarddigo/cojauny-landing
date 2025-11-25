"use client";

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { LandingCopy } from '@/locales/copy';

interface DemoSectionProps {
    copy: LandingCopy['mockups'];
    className?: string;
}

const IPhoneMockup = ({ screen, className, priority = false }: { screen: any, className?: string, priority?: boolean }) => {
    return (
        <div className={`relative aspect-[360/720] w-full mx-auto ${className ?? ''}`}>
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="relative h-full w-full rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] border-[4px] md:border-[6px] lg:border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
                    <div className="absolute left-1/2 top-0 z-20 h-[18px] md:h-[24px] lg:h-[28px] w-[80px] md:w-[120px] lg:w-[140px] -translate-x-1/2 rounded-b-[0.8rem] md:rounded-b-[1rem] lg:rounded-b-[1.2rem] bg-slate-900" />

                    <div className="relative h-full w-full overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={screen.id}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="relative h-full w-full pt-[10px] pb-[35px]"
                            >
                                <Image
                                    src={screen.image}
                                    alt={screen.title}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 280px, 380px"
                                    priority={priority}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="absolute top-0 left-0 right-0 h-[18px] md:h-[24px] lg:h-[28px] z-30 flex items-center justify-between px-3 md:px-5 text-[8px] md:text-[10px] lg:text-[11px] font-semibold text-white pointer-events-none">
                        <div className="flex items-center gap-1">
                            <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">9:41</span>
                        </div>
                        <div className="flex items-center gap-1 md:gap-1.5">
                            <svg className="w-3 h-2 md:w-3.5 md:h-2.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" viewBox="0 0 17 12" fill="none">
                                <rect x="0" y="7" width="3" height="5" rx="1" fill="currentColor" />
                                <rect x="4.5" y="5" width="3" height="7" rx="1" fill="currentColor" />
                                <rect x="9" y="2" width="3" height="10" rx="1" fill="currentColor" />
                                <rect x="13.5" y="0" width="3" height="12" rx="1" fill="currentColor" />
                            </svg>
                            <svg className="w-3 h-2.5 md:w-3.5 md:h-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" viewBox="0 0 15 11" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.5 3.5C9.433 3.5 11.183 4.283 12.45 5.55L13.5 4.5C11.933 2.933 9.817 2 7.5 2C5.183 2 3.067 2.933 1.5 4.5L2.55 5.55C3.817 4.283 5.567 3.5 7.5 3.5ZM7.5 6.5C8.433 6.5 9.283 6.883 9.917 7.517L11 6.433C10.083 5.517 8.85 5 7.5 5C6.15 5 4.917 5.517 4 6.433L5.083 7.517C5.717 6.883 6.567 6.5 7.5 6.5ZM9 9C9 9.828 8.328 10.5 7.5 10.5C6.672 10.5 6 9.828 6 9C6 8.172 6.672 7.5 7.5 7.5C8.328 7.5 9 8.172 9 9Z" fill="currentColor" />
                            </svg>
                            <svg className="w-5 h-2.5 md:w-6 md:h-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" viewBox="0 0 25 12" fill="none">
                                <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" stroke="currentColor" strokeOpacity="0.8" />
                                <rect x="2" y="2" width="15" height="8" rx="1.5" fill="currentColor" />
                                <path d="M20 4V8C20.833 7.667 21.5 6.933 21.5 6C21.5 5.067 20.833 4.333 20 4Z" fill="currentColor" fillOpacity="0.8" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function DemoSection({ copy, className }: DemoSectionProps) {
    const [activeStep, setActiveStep] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isLocked, setIsLocked] = useState(false);
    const [phoneTop, setPhoneTop] = useState(96);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile || !isLocked) return;

        const handleClickOutside = (e: MouseEvent) => {
            if (cardsContainerRef.current && !cardsContainerRef.current.contains(e.target as Node)) {
                setIsLocked(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobile, isLocked]);

    useEffect(() => {
        if (isMobile) return;

        const handleScroll = () => {
            if (!containerRef.current) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const phoneHeight = 720;
            const topMargin = 96;
            const bottomMargin = 96;

            const availableSpace = viewportHeight - phoneHeight - topMargin - bottomMargin;

            if (availableSpace < 0) {
                setPhoneTop((viewportHeight - phoneHeight) / 2);
                return;
            }

            if (containerRect.top >= topMargin) {
                setPhoneTop(topMargin);
            } else if (containerRect.bottom <= viewportHeight - bottomMargin) {
                const relativeBottom = containerRect.bottom - phoneHeight - bottomMargin;
                setPhoneTop(Math.max(topMargin, relativeBottom));
            } else {
                const sectionHeight = containerRect.height;
                const scrollRange = sectionHeight - viewportHeight;
                const scrolled = Math.abs(containerRect.top - topMargin);
                const progress = Math.min(1, scrolled / scrollRange);

                const newTop = topMargin + (progress * availableSpace);
                setPhoneTop(newTop);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    useEffect(() => {
        if (isMobile || cardsRef.current.length === 0 || isLocked) return;

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            const intersecting = entries.filter(e => e.isIntersecting);

            if (intersecting.length > 0) {
                let topmostIndex: number | null = null;
                let topmostTop: number = Infinity;

                intersecting.forEach(entry => {
                    const cardIndex = cardsRef.current.findIndex(card => card === entry.target);
                    if (cardIndex !== -1) {
                        const rect = entry.boundingClientRect;

                        if (rect.top < topmostTop) {
                            topmostIndex = cardIndex;
                            topmostTop = rect.top;
                        }
                    }
                });

                if (topmostIndex !== null && topmostIndex !== activeStep) {
                    setActiveStep(topmostIndex);
                }
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        cardsRef.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, [isMobile, activeStep, isLocked]);

    useEffect(() => {
        if (!isMobile) return;

        const handleScroll = () => {
            const cards = cardsRef.current;
            const viewportTop = 80;

            let newActive = 0;
            let minDistance = Infinity;

            for (let i = 0; i < cards.length; i++) {
                const card = cards[i];
                if (!card) continue;

                const rect = card.getBoundingClientRect();
                const distance = Math.abs(rect.top - viewportTop);

                if (distance < minDistance) {
                    minDistance = distance;
                    newActive = i;
                }
            }

            if (newActive !== activeStep) {
                setActiveStep(newActive);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile, activeStep]);

    const handleCardClick = (cardIndex: number) => {
        if (isMobile) return;
        setActiveStep(cardIndex);
        setIsLocked(true);
    };

    const handleCardHover = (cardIndex: number) => {
        if (isMobile || isLocked) return;
        setActiveStep(cardIndex);
    };

    return (
        <section
            ref={containerRef}
            id="demo"
            className={`relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white ${className ?? ''}`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
                    >
                        {copy.heading}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto"
                    >
                        {copy.description}
                    </motion.p>
                </div>

                <div className="hidden lg:grid lg:grid-cols-[1fr,400px] lg:gap-16 xl:gap-20 items-start">
                    <div ref={cardsContainerRef} className="flex flex-col gap-8">
                        {copy.screens.map((screen, idx) => (
                            <motion.div
                                key={screen.id}
                                ref={el => { cardsRef.current[idx] = el; }}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                onMouseEnter={() => handleCardHover(idx)}
                                onClick={() => handleCardClick(idx)}
                                className={`demo-card transition-all duration-700 cursor-pointer ${activeStep === idx
                                        ? 'opacity-100 scale-100'
                                        : 'opacity-50 scale-95 hover:opacity-75 hover:scale-98'
                                    }`}
                            >
                                <div className={`bg-white rounded-3xl p-8 xl:p-10 shadow-xl border-2 transition-all duration-700 ${activeStep === activeStep
                                        ? 'border-blue-200 shadow-2xl'
                                        : 'border-slate-100'
                                    }`}>
                                    <div className="inline-flex items-center gap-2 mb-5">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-700 ${activeStep === idx
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-slate-100 text-slate-400'
                                            }`}>
                                            {idx + 1}
                                        </div>
                                        <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                                            {screen.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl xl:text-3xl font-bold text-slate-900 mb-4">
                                        {screen.title}
                                    </h3>
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {screen.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative h-full">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full sticky transition-all duration-200 ease-out will-change-transform"
                            style={{ top: `${phoneTop}px` }}
                        >
                            <IPhoneMockup screen={copy.screens[activeStep]} priority={true} />
                        </motion.div>
                    </div>
                </div>

                <LayoutGroup>
                    <div className="lg:hidden flex flex-col">
                        {copy.screens.map((screen, idx) => (
                            <motion.div
                                key={screen.id}
                                layout
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col"
                            >
                                <motion.div
                                    layout="position"
                                    ref={el => { cardsRef.current[idx] = el; }}
                                    className={`bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg border-2 transition-all duration-700 ${activeStep === idx
                                            ? 'border-blue-200 shadow-xl mb-4'
                                            : 'border-slate-100 mb-8'
                                        }`}
                                >
                                    <div className="inline-flex items-center gap-2 mb-3">
                                        <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-700 ${activeStep === idx
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-slate-100 text-slate-400'
                                            }`}>
                                            {idx + 1}
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                                            {screen.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                                        {screen.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                                        {screen.description}
                                    </p>
                                </motion.div>

                                {activeStep === idx && (
                                    <motion.div
                                        layoutId="mobile-iphone"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{
                                            layout: {
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 35,
                                                mass: 1
                                            },
                                            opacity: { duration: 0.5, ease: "easeInOut" },
                                            scale: { duration: 0.5, ease: "easeInOut" }
                                        }}
                                        className="w-full max-w-[220px] md:max-w-[260px] mx-auto mb-8"
                                    >
                                        <IPhoneMockup screen={copy.screens[activeStep]} priority={true} />
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </LayoutGroup>
            </div>
        </section>
    );
}
