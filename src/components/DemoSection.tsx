"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { LandingCopy } from '@/locales/copy';

interface DemoSectionProps {
    copy: LandingCopy['mockups'];
    className?: string;
}

// Presenta la maqueta de iPhone con animación de cambio de pantalla.
// El mockup se adapta para mostrar el contenido completo sin que la Dynamic Island oculte el título
// Bordes del iPhone: 5px en todos los lados para maximizar el espacio del mockup
const IPhoneMockup = ({ screen, className, priority = false }: { screen: any; className?: string; priority?: boolean }) => (
    <div className={`relative aspect-[9/19.5] w-full mx-auto ${className ?? ''}`}>
        <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="relative h-full w-full rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] border-[5px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute left-1/2 top-[0.5%] z-20 h-[4%] w-[26%] -translate-x-1/2 rounded-full bg-slate-900" />

                <div className="relative h-full w-full overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={screen.id}
                            initial={{ opacity: 0, scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                            className="relative h-full w-full"
                        >
                            {/* Fondo de la barra superior del mockup - color #1b2335 */}
                            <div className="absolute inset-0 bg-[#1b2335]" />
                            <div className="absolute inset-[1px] top-[15px] bottom-[1px]">
                                <div className="relative h-full w-full">
                                    <Image
                                        src={screen.image}
                                        alt={screen.title}
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 260px, 340px"
                                        priority={priority}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Status bar icons - bajados 5px (top-[1.5%] en vez de top-[0%]) */}
                <div className="absolute top-[1.5%] left-0 right-0 h-[4%] z-30 flex items-center justify-between px-[6%] text-[8px] md:text-[9px] lg:text-[10px] font-semibold text-white pointer-events-none">
                    <div className="flex items-center gap-1">
                        <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">9:41</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <svg className="w-3 h-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" viewBox="0 0 17 12" fill="none">
                            <rect x="0" y="7" width="3" height="5" rx="1" fill="currentColor" />
                            <rect x="4.5" y="5" width="3" height="7" rx="1" fill="currentColor" />
                            <rect x="9" y="2" width="3" height="10" rx="1" fill="currentColor" />
                            <rect x="13.5" y="0" width="3" height="12" rx="1" fill="currentColor" />
                        </svg>
                        <svg className="w-3 h-2.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" viewBox="0 0 15 11" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.5 3.5C9.433 3.5 11.183 4.283 12.45 5.55L13.5 4.5C11.933 2.933 9.817 2 7.5 2C5.183 2 3.067 2.933 1.5 4.5L2.55 5.55C3.817 4.283 5.567 3.5 7.5 3.5ZM7.5 6.5C8.433 6.5 9.283 6.883 9.917 7.517L11 6.433C10.083 5.517 8.85 5 7.5 5C6.15 5 4.917 5.517 4 6.433L5.083 7.517C5.717 6.883 6.567 6.5 7.5 6.5ZM9 9C9 9.828 8.328 10.5 7.5 10.5C6.672 10.5 6 9.828 6 9C6 8.172 6.672 7.5 7.5 7.5C8.328 7.5 9 8.172 9 9Z" fill="currentColor" />
                        </svg>
                        <svg className="w-5 h-2.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" viewBox="0 0 25 12" fill="none">
                            <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" stroke="currentColor" strokeOpacity="0.8" />
                            <rect x="2" y="2" width="15" height="8" rx="1.5" fill="currentColor" />
                            <path d="M20 4V8C20.833 7.667 21.5 6.933 21.5 6C21.5 5.067 20.833 4.333 20 4Z" fill="currentColor" fillOpacity="0.8" />
                        </svg>
                    </div>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-[1%] left-1/2 -translate-x-1/2 w-[35%] h-[0.6%] bg-white/80 rounded-full z-30" />
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

    // Ref para el contenedor del iPhone en desktop (para parallax behavior)
    const phoneContainerRef = useRef<HTMLDivElement | null>(null);
    const [parallaxOffset, setParallaxOffset] = useState(0);

    // Mobile: IntersectionObserver robusto
    const mobileObserverRef = useRef<IntersectionObserver | null>(null);
    const visibleCardsRef = useRef<Set<number>>(new Set());

    /* ---------- Efectos compartidos (ambos) ---------- */
    // Detecta tamaño (mobile/desktop)
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 1024);
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

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

    // Parallax effect para desktop: mueve el iPhone para que siempre esté visible
    // entre el top de la primera tarjeta y el bottom de la última
    useEffect(() => {
        if (isMobile || !cardsContainerRef.current || !phoneContainerRef.current) return;

        const handleScroll = () => {
            const cardsContainer = cardsContainerRef.current;
            const phoneContainer = phoneContainerRef.current;
            if (!cardsContainer || !phoneContainer) return;

            const firstCard = cardsRef.current[0];
            const lastCard = cardsRef.current[cardsRef.current.length - 1];
            if (!firstCard || !lastCard) return;

            const firstCardRect = firstCard.getBoundingClientRect();
            const lastCardRect = lastCard.getBoundingClientRect();
            const phoneRect = phoneContainer.getBoundingClientRect();

            const headerOffset = 96; // top-24 = 6rem = 96px
            const firstCardTop = firstCardRect.top;
            const lastCardBottom = lastCardRect.bottom;

            // Calculamos el espacio disponible para el iPhone
            const availableSpace = lastCardBottom - firstCardTop;
            const phoneHeight = phoneRect.height;

            // Si el espacio es mayor que el alto del iPhone, calculamos el offset
            if (availableSpace > phoneHeight) {
                const maxScroll = availableSpace - phoneHeight;

                // Progreso basado en qué tan abajo está la primera tarjeta
                const viewportTop = headerOffset;
                const scrollProgress = Math.max(0, Math.min(1,
                    (viewportTop - firstCardTop) / maxScroll
                ));

                const offset = scrollProgress * maxScroll;
                setParallaxOffset(offset);
            } else {
                setParallaxOffset(0);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        handleScroll(); // Inicializar

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [isMobile]);

    /* ---------- Mobile: IntersectionObserver robusto ---------- */
    // Callback estable para actualizar la tarjeta activa
    const updateActiveCard = useCallback(() => {
        if (visibleCardsRef.current.size === 0) return;

        const viewportHeight = window.innerHeight;
        const viewportCenter = viewportHeight / 2;

        let bestIndex = activeStep;
        let minDistance = Infinity;

        visibleCardsRef.current.forEach((idx) => {
            const card = cardsRef.current[idx];
            if (!card) return;

            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const distance = Math.abs(cardCenter - viewportCenter);

            if (distance < minDistance) {
                minDistance = distance;
                bestIndex = idx;
            }
        });

        if (bestIndex !== activeStep) {
            setActiveStep(bestIndex);
        }
    }, [activeStep]);

    // Experiencia móvil: IntersectionObserver para detectar tarjetas visibles
    useEffect(() => {
        if (!isMobile) {
            // Limpiar observer cuando cambiamos a desktop
            if (mobileObserverRef.current) {
                mobileObserverRef.current.disconnect();
                mobileObserverRef.current = null;
            }
            visibleCardsRef.current.clear();
            return;
        }

        // Crear IntersectionObserver con zona central del viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const cardIndex = cardsRef.current.findIndex(card => card === entry.target);
                    if (cardIndex === -1) return;

                    if (entry.isIntersecting) {
                        visibleCardsRef.current.add(cardIndex);
                    } else {
                        visibleCardsRef.current.delete(cardIndex);
                    }
                });

                // Actualizar tarjeta activa basándose en las visibles
                updateActiveCard();
            },
            {
                root: null,
                // Zona de detección: 30% desde arriba, 40% desde abajo
                rootMargin: '-30% 0px -40% 0px',
                threshold: [0, 0.25, 0.5, 0.75, 1]
            }
        );

        mobileObserverRef.current = observer;

        // Observar todas las tarjetas
        cardsRef.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => {
            observer.disconnect();
            mobileObserverRef.current = null;
            visibleCardsRef.current.clear();
        };
    }, [isMobile, updateActiveCard]);

    // Mobile: Scroll listener adicional para mayor responsividad
    useEffect(() => {
        if (!isMobile) return;

        let rafId: number | null = null;

        const handleScroll = () => {
            if (rafId !== null) return;

            rafId = requestAnimationFrame(() => {
                updateActiveCard();
                rafId = null;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }
        };
    }, [isMobile, updateActiveCard]);

    /* ---------- Handlers UI ---------- */
    // Mobile: handler de tap en tarjetas
    const handleMobileCardTap = useCallback((index: number) => {
        if (!isMobile) return;
        setActiveStep(index);
    }, [isMobile]);

    const handleCardClick = (index: number) => {
        if (isMobile) {
            handleMobileCardTap(index);
            return;
        }

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
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ paddingLeft: 'calc(var(--social-bar-offset) + 1rem)' }}>
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        {copy.heading}
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                        {copy.description}
                    </motion.p>
                </div>

                {/* Desktop layout - el grid necesita items-stretch para que sticky funcione */}
                <div className="hidden lg:grid lg:grid-cols-[1fr,400px] lg:gap-16 xl:gap-20">
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

                    {/* iPhone container - sticky con parallax */}
                    <div
                        ref={phoneContainerRef}
                        className="relative lg:sticky lg:top-24 lg:self-start"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full max-w-[340px] mx-auto"
                            style={{
                                transform: `translateY(${parallaxOffset}px)`,
                                transition: 'transform 0.1s ease-out'
                            }}
                        >
                            <IPhoneMockup screen={copy.screens[activeStep]} priority={true} />
                        </motion.div>
                    </div>
                </div>

                {/* Mobile layout */}
                <div className="lg:hidden flex flex-col gap-4">
                    {copy.screens.map((screen, idx) => (
                        <motion.div
                            key={screen.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-30px', amount: 0.2 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col"
                        >
                            {/* Card */}
                            <div
                                ref={el => { cardsRef.current[idx] = el; }}
                                onClick={() => handleCardClick(idx)}
                                className={`
                                    bg-white rounded-2xl p-4 shadow-lg border-2 
                                    transition-all duration-[900ms] ease-out cursor-pointer
                                    ${activeStep === idx
                                        ? 'border-blue-300 shadow-xl'
                                        : 'border-slate-100 opacity-80'
                                    }
                                `}
                            >
                                <div className="inline-flex items-center gap-2 mb-2">
                                    <div className={`
                                        w-7 h-7 rounded-full flex items-center justify-center 
                                        font-bold text-sm transition-all duration-[900ms]
                                        ${activeStep === idx
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-slate-100 text-slate-400'
                                        }
                                    `}>
                                        {idx + 1}
                                    </div>
                                    <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                                        {screen.badge}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">
                                    {screen.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {screen.description}
                                </p>
                            </div>

                            {/* iPhone Mockup - animación simple y estable */}
                            <div
                                className={`
                                    w-full mx-auto overflow-hidden
                                    transition-all duration-[1200ms] ease-out
                                    ${activeStep === idx
                                        ? 'max-h-[500px] opacity-100 mt-4 scale-100'
                                        : 'max-h-0 opacity-0 mt-0 scale-95'
                                    }
                                `}
                                style={{
                                    maxWidth: 'min(200px, 50vw)',
                                    transitionProperty: 'max-height, opacity, margin-top, transform'
                                }}
                            >
                                <IPhoneMockup
                                    screen={screen}
                                    priority={idx === 0}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
}
