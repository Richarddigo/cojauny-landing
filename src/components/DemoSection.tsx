"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { LandingCopy } from '@/locales/copy';

interface DemoSectionProps {
    copy: LandingCopy['mockups'];
    className?: string;
}

// Presenta la maqueta de iPhone con animación de cambio de pantalla.
// El mockup se adapta para mostrar el contenido completo sin que la Dynamic Island oculte el título
// Bordes del iPhone: 5px en todos los lados para maximizar el espacio del mockup
const IPhoneMockup = ({ screen, className, priority = false, animate = true }: { screen: any; className?: string; priority?: boolean; animate?: boolean }) => (
    <div className={`relative aspect-[9/19.5] w-full mx-auto ${className ?? ''}`}>
        <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="relative h-full w-full rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] border-[5px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute left-1/2 top-[0.5%] z-20 h-[4%] w-[26%] -translate-x-1/2 rounded-full bg-slate-900" />

                <div className="relative h-full w-full overflow-hidden">
                    {animate ? (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={screen.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
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
                    ) : (
                        <div className="relative h-full w-full">
                            {/* Fondo de la barra superior del mockup - color #1b2335 */}
                            <div className="absolute inset-0 bg-[#1b2335]" />
                            <div className="absolute inset-[1px] top-[15px] bottom-[1px]">
                                <div className="relative h-full w-full">
                                    <Image
                                        src={screen.image}
                                        alt={screen.title}
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 280px"
                                        priority={priority}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
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

    /* ---------- Efectos compartidos (ambos) ---------- */
    // Detecta tamaño (mobile/desktop)
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 768);
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // Scroll handler para actualizar `activeStep` (desktop >= 768px)
    // Puntos de activación progresivos: 33%, 41%, 49%, 57%, 65%
    useEffect(() => {
        if (isMobile || isLocked || cardsRef.current.length === 0) return;

        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                const cards = cardsRef.current;
                // Puntos de activación progresivos para cada tarjeta
                const activationPoints = [0.33, 0.33, 0.43, 0.53, 0.63, 0.73];

                let newActive = 0;
                let minDistance = Infinity;

                for (let i = 0; i < cards.length; i++) {
                    const card = cards[i];
                    if (!card) continue;

                    const rect = card.getBoundingClientRect();
                    const cardCenter = rect.top + rect.height / 2;

                    // Usar el punto de activación correspondiente o el último si hay más tarjetas
                    const pointIndex = Math.min(i, activationPoints.length - 1);
                    const activationPoint = window.innerHeight * activationPoints[pointIndex];
                    const distance = Math.abs(cardCenter - activationPoint);

                    if (distance < minDistance) {
                        minDistance = distance;
                        newActive = i;
                    }
                }

                if (newActive !== activeStep) {
                    setActiveStep(newActive);
                }
                ticking = false;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Inicializar
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile, isLocked, activeStep]);

    // Parallax effect para desktop: mueve el iPhone para que siempre esté visible
    // entre el top de la primera tarjeta y el bottom de la última
    useEffect(() => {
        if (isMobile || !cardsContainerRef.current || !phoneContainerRef.current) return;

        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                const cardsContainer = cardsContainerRef.current;
                const phoneContainer = phoneContainerRef.current;
                if (!cardsContainer || !phoneContainer) {
                    ticking = false;
                    return;
                }

                const firstCard = cardsRef.current[0];
                const lastCard = cardsRef.current[cardsRef.current.length - 1];
                if (!firstCard || !lastCard) {
                    ticking = false;
                    return;
                }

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
                    // Clamp so the phone bottom never goes below the visible viewport
                    const maxSafeOffset = Math.max(0, window.innerHeight - headerOffset - phoneHeight - 32);
                    setParallaxOffset(Math.min(offset, maxSafeOffset));
                } else {
                    setParallaxOffset(0);
                }
                ticking = false;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        handleScroll(); // Inicializar

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [isMobile]);

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
            className={`relative w-full py-16 md:py-24 lg:py-32 bg-studio-bg ${className ?? ''}`}
        >
            <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8" style={{ paddingLeft: 'calc(var(--social-bar-offset) + 1rem)' }}>
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {copy.heading}
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="mt-4 text-lg md:text-xl text-studio-muted max-w-3xl mx-auto">
                        {copy.description}
                    </motion.p>
                </div>

                {/* Desktop layout - el grid necesita items-stretch para que sticky funcione */}
                <div className="hidden md:grid md:grid-cols-[1fr_400px] md:gap-12 lg:gap-16 xl:gap-20">
                    <div ref={cardsContainerRef} className="flex flex-col gap-8">
                        {copy.screens.map((screen, idx) => (
                            <motion.div
                                key={screen.id}
                                ref={el => { cardsRef.current[idx] = el; }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.35, delay: idx * 0.05 }}
                                onClick={() => handleCardClick(idx)}
                                className={`demo-card transition-all duration-200 ease-out cursor-pointer ${activeStep === idx ? 'opacity-100' : 'opacity-60'} relative`}
                            >
                                {isLocked && lockedIndex === idx && (
                                    <div className="absolute top-2 right-2 bg-studio-surface-2 rounded-full p-1 shadow-md border-2 border-studio-accent">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-studio-accent">
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
                            </motion.div>
                        ))}
                    </div>

                    {/* iPhone container - sticky con parallax */}
                    <div
                        ref={phoneContainerRef}
                        className="relative md:sticky md:top-24 md:self-start"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="mx-auto"
                            style={{
                                width: 'min(calc((100vh - 8rem) * 9 / 19.5), 340px)',
                                transform: `translateY(${parallaxOffset}px)`,
                                transition: 'transform 0.1s ease-out'
                            }}
                        >
                            <IPhoneMockup screen={copy.screens[activeStep]} priority={true} animate={true} />
                        </motion.div>
                    </div>
                </div>

                {/* Mobile layout - sin animaciones, cada tarjeta con su mockup */}
                <div className="md:hidden flex flex-col gap-8">
                    {copy.screens.map((screen, idx) => (
                        <div
                            key={screen.id}
                            className="flex flex-col"
                        >
                            {/* Tarjeta */}
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

                            {/* Mockup debajo de la tarjeta - sin animaciones */}
                            <div className="mt-4 w-full flex justify-center">
                                <div className="w-[50%] max-w-[200px] sm:max-w-[220px]">
                                    <IPhoneMockup screen={screen} priority={idx < 2} animate={false} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
