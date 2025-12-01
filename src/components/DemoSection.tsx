"use client";

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { LandingCopy } from '@/locales/copy';

interface DemoSectionProps {
    copy: LandingCopy['mockups'];
    className?: string;
}

// Presenta la maqueta de iPhone con animación de cambio de pantalla.
const IPhoneMockup = ({ screen, className, priority = false }: { screen: any; className?: string; priority?: boolean }) => (
    <div className={`relative aspect-[360/720] w-full mx-auto ${className ?? ''}`}>
        <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="relative h-full w-full rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] border-[4px] md:border-[6px] lg:border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
                <div className="absolute left-1/2 top-0 z-20 h-[18px] md:h-[24px] lg:h-[28px] w-[80px] md:w-[120px] lg:w-[140px] -translate-x-1/2 rounded-b-[0.8rem] md:rounded-b-[1rem] lg:rounded-b-[1.2rem] bg-slate-900" />

                <div className="relative h-full w-full overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={screen.id}
                            initial={{ opacity: 0, scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                            className="relative h-full w-full pt-[28px] md:pt-[32px] lg:pt-[36px] pb-[35px]"
                        >
                            <Image src={screen.image} alt={screen.title} fill className="object-cover object-top" sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 280px, 380px" priority={priority} />
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

export default function DemoSection({ copy, className }: DemoSectionProps) {
    // Estado principal
    const [activeStep, setActiveStep] = useState(0);

    // Refs a nodos del DOM
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
    const cardsContainerRef = useRef<HTMLDivElement | null>(null);

    // Flags de UI
    const [isMobile, setIsMobile] = useState(false);
    const [isLocked, setIsLocked] = useState(false); // Desktop: after click, evita cambios por hover/observer
    const [lockedIndex, setLockedIndex] = useState<number | null>(null);

    // Posición del iPhone (desktop) y control de transición
    const [phoneTop, setPhoneTop] = useState(0);
    const [enablePhoneTransition, setEnablePhoneTransition] = useState(false);

    /* ---------- Efectos compartidos (ambos) ---------- */
    // Detecta tamaño (mobile/desktop)
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 1024);
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    /* ---------- Efectos desktop ---------- */
    // Maneja la posición del iPhone conforme el usuario hace scroll (solo desktop)
    useEffect(() => {
        if (isMobile) return;

        let enableTimeout: number | undefined;

        const computePhonePosition = () => {
            const container = containerRef.current;
            const phoneContainer = container?.querySelector('.relative.h-full.overflow-visible');
            const phoneMockup = phoneContainer?.querySelector('.w-full.will-change-transform');
            if (!container || !phoneContainer || !phoneMockup) return;

            const sectionRect = container.getBoundingClientRect();
            const phoneRect = phoneContainer.getBoundingClientRect();
            const minTop = phoneRect.top - sectionRect.top;
            const maxTop = phoneRect.bottom - sectionRect.top;

            // Altura real del mockup
            const phoneHeight = (phoneMockup instanceof HTMLElement) ? phoneMockup.offsetHeight : 0;

            // Calcula el centro del viewport relativo al contenedor
            const scrollY = window.scrollY;
            const sectionTop = sectionRect.top + scrollY;
            let desiredTop = scrollY - sectionTop + (window.innerHeight / 2) - (phoneHeight / 2);

            // Ajuste: si el mockup es más alto que el contenedor, mostrar la mayor parte posible
            const visibleHeight = maxTop - minTop;
            if (phoneHeight > visibleHeight) {
                // Centrar la parte visible del mockup dentro del contenedor
                desiredTop = minTop;
            } else {
                // Clamp normal
                if (desiredTop < minTop) desiredTop = minTop;
                if (desiredTop > maxTop - phoneHeight) desiredTop = maxTop - phoneHeight;
            }
            setPhoneTop(desiredTop);
        };

        const onScroll = () => computePhonePosition();
        window.addEventListener('scroll', onScroll, { passive: true });

        // inicializa sin animación y luego habilita la transición
        // En el primer render, forzar top 0
        setPhoneTop(0);
        computePhonePosition();
        enableTimeout = window.setTimeout(() => setEnablePhoneTransition(true), 80);

        return () => {
            window.removeEventListener('scroll', onScroll);
            if (enableTimeout) window.clearTimeout(enableTimeout);
        };
    }, [isMobile]);

    // Observador para actualizar `activeStep` según la carta más arriba visible (desktop)
    useEffect(() => {
        if (isMobile || isLocked || cardsRef.current.length === 0) return;

        const observerOptions = { root: null, rootMargin: '-20% 0px -60% 0px', threshold: 0 };

        const observer = new IntersectionObserver((entries) => {
            const intersecting = entries.filter(e => e.isIntersecting);
            if (!intersecting.length) return;

            let topmostIndex: number | null = null;
            let topmostTop = Infinity;

            intersecting.forEach(entry => {
                const cardIndex = cardsRef.current.findIndex(card => card === entry.target);
                if (cardIndex === -1) return;
                const rectTop = entry.boundingClientRect.top;
                if (rectTop < topmostTop) {
                    topmostTop = rectTop;
                    topmostIndex = cardIndex;
                }
            });

            if (topmostIndex !== null && topmostIndex !== activeStep) setActiveStep(topmostIndex);
        }, observerOptions);

        cardsRef.current.forEach(card => card && observer.observe(card));
        return () => observer.disconnect();
    }, [isMobile, isLocked, activeStep]);

    /* ---------- Efectos mobile ---------- */
    // Para mobile, calculamos la tarjeta más cercana a `viewportTop` al hacer scroll
    // y hacemos scroll automático para alinear la tarjeta activa con el top
    useEffect(() => {
        if (!isMobile) return;

        let scrollTimeout: NodeJS.Timeout | null = null;
        let lastActiveStep = activeStep;
        let isAutoScrolling = false;

        const onScroll = () => {
            if (isAutoScrolling) return;

            const headerHeight = 80;
            let newActive = 0;
            let minDistance = Infinity;

            for (let i = 0; i < cardsRef.current.length; i++) {
                const card = cardsRef.current[i];
                if (!card) continue;
                const rect = card.getBoundingClientRect();
                const distance = Math.abs(rect.top - headerHeight);
                if (distance < minDistance) {
                    minDistance = distance;
                    newActive = i;
                }
            }

            if (newActive !== activeStep) {
                setActiveStep(newActive);
            }

            // Auto-scroll para alinear la tarjeta cuando el usuario deja de hacer scroll
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const card = cardsRef.current[newActive];
                if (card && newActive !== lastActiveStep) {
                    lastActiveStep = newActive;
                    isAutoScrolling = true;
                    const cardTop = card.getBoundingClientRect().top + window.scrollY;
                    const targetScroll = cardTop - headerHeight;
                    window.scrollTo({
                        top: targetScroll,
                        behavior: 'smooth'
                    });
                    // Reset flag after animation
                    setTimeout(() => {
                        isAutoScrolling = false;
                    }, 600);
                }
            }, 150);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, [isMobile, activeStep]);

    /* ---------- Handlers UI ---------- */
    const handleCardClick = (index: number) => {
        if (isLocked && lockedIndex === index) {
            // Desanclar si ya está anclada y se hace clic sobre ella
            setIsLocked(false);
            setLockedIndex(null);
            setActiveStep(index); // Asegurar que se actualice el estado
        } else {
            // Anclar la tarjeta
            setIsLocked(true);
            setLockedIndex(index);
            setActiveStep(index);
        }
    };

    const handleCardHover = (index: number) => {
        if (isMobile || isLocked) return;
        setActiveStep(index);
    };

    // Desanclar tarjeta al hacer click fuera de todas las tarjetas
    useEffect(() => {
        if (!isLocked || lockedIndex === null) return;

        const handleClickOutside = (event: MouseEvent) => {
            const clickedInsideAnyCard = cardsRef.current.some(card => card?.contains(event.target as Node));
            if (!clickedInsideAnyCard) {
                setIsLocked(false);
                setLockedIndex(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isLocked, lockedIndex]);



    return (
        <section
            ref={containerRef}
            id="demo"
            className={`relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white ${className ?? ''}`}
        // sin minHeight estática
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        {copy.heading}
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                        {copy.description}
                    </motion.p>
                </div>

                {/* Desktop layout */}
                <div className="hidden lg:grid lg:grid-cols-[1fr,400px] lg:gap-16 xl:gap-20 items-start">
                    <div ref={cardsContainerRef} className="flex flex-col gap-8">
                        {copy.screens.map((screen, idx) => (
                            <motion.div
                                key={screen.id}
                                ref={el => { cardsRef.current[idx] = el; }}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                onClick={() => handleCardClick(idx)}
                                onMouseEnter={() => handleCardHover(idx)}
                                className={`demo-card transition-all duration-500 ease-out cursor-pointer ${activeStep === idx ? 'opacity-100 scale-100' : 'opacity-50 scale-95 hover:opacity-75 hover:scale-98'} relative`}
                            >
                                {isLocked && lockedIndex === idx && (
                                    <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md border-2 border-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                )}
                                <div className={`bg-white rounded-3xl p-8 xl:p-10 shadow-xl border-4 transition-all duration-500 ease-out ${isLocked && lockedIndex === idx ? 'border-blue-500' : activeStep === idx ? 'border-blue-200 shadow-2xl' : 'border-slate-100'}`}>
                                    <div className="inline-flex items-center gap-2 mb-5">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-500 ${activeStep === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>{idx + 1}</div>
                                        <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">{screen.badge}</span>
                                    </div>
                                    <h3 className="text-2xl xl:text-3xl font-bold text-slate-900 mb-4">{screen.title}</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed">{screen.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative h-full overflow-visible">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full will-change-transform"
                            style={{
                                position: 'absolute',
                                top: `${phoneTop - 328}px`,
                                transition: enablePhoneTransition ? 'top 400ms cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none',
                                left: 0,
                                right: 0,
                                margin: '0 auto',
                            }}
                        >
                            <IPhoneMockup screen={copy.screens[activeStep]} priority={true} />
                        </motion.div>
                    </div>
                </div>

                {/* Mobile layout */}
                <LayoutGroup>
                    <div className="lg:hidden flex flex-col">
                        {copy.screens.map((screen, idx) => (
                            <motion.div key={screen.id} layout initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} className="flex flex-col scroll-mt-20">
                                <motion.div layout="position" ref={el => { cardsRef.current[idx] = el; }} className={`bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg border-2 transition-all duration-500 ease-out ${activeStep === idx ? 'border-blue-200 shadow-xl mb-4' : 'border-slate-100 mb-8'}`}>
                                    <div className="inline-flex items-center gap-2 mb-3">
                                        <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-500 ${activeStep === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>{idx + 1}</div>
                                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">{screen.badge}</span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{screen.title}</h3>
                                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">{screen.description}</p>
                                </motion.div>

                                {activeStep === idx && (
                                    <motion.div layoutId="mobile-iphone" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ layout: { type: 'spring', stiffness: 120, damping: 25, mass: 1.2 }, opacity: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }, scale: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }} className="w-full max-w-[220px] md:max-w-[260px] mx-auto mb-8">
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
