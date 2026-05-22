"use client";

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import type { LandingCopy } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';

interface ValuePropsSectionProps {
    copy: LandingCopy['value'];
}

const ValuePropsSection = ({ copy }: ValuePropsSectionProps) => {
    const [activeCard, setActiveCard] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const cardsRef = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobile) return;

        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                const cards = cardsRef.current;
                const viewportCenter = window.innerHeight * 0.4;

                let newActive = 0;
                let minDistance = Infinity;

                for (let i = 0; i < cards.length; i++) {
                    const card = cards[i];
                    if (!card) continue;

                    const rect = card.getBoundingClientRect();
                    const cardCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(cardCenter - viewportCenter);

                    if (distance < minDistance) {
                        minDistance = distance;
                        newActive = i;
                    }
                }

                if (newActive !== activeCard) {
                    setActiveCard(newActive);
                }
                ticking = false;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile, activeCard]);

    return (
        <section
            id="benefits"
            className="w-full scroll-mt-[74px] bg-gradient-to-b from-white via-slate-50 to-white py-12 md:py-16 lg:py-24 lg:scroll-mt-[100px]"
        >
            <div className="mx-auto max-w-[1180px] px-4 sm:px-6" style={{ paddingLeft: 'calc(var(--social-bar-offset) + 1rem)' }}>
                <SectionIntro title={copy.title} description={copy.subtitle} />
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 md:mt-16 lg:grid-cols-3">
                    {copy.items.map((item, index) => {
                        const isActive = isMobile && index === activeCard;
                        return (
                            <motion.article
                                key={item.title}
                                ref={el => { cardsRef.current[index] = el; }}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.3, delay: index * 0.03 }}
                                className={`group relative overflow-hidden rounded-2xl border bg-white/80 p-6 shadow-lg backdrop-blur-sm md:rounded-3xl md:p-8 transition-all duration-200 ${isActive
                                    ? 'border-brand-300 shadow-2xl lg:border-white/70'
                                    : 'border-white/70 shadow-slate-200/60 hover:shadow-xl hover:border-brand-100'
                                    }`}
                            >
                                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-300 transition ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                    }`} />
                                <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className="mt-5 text-lg font-semibold text-slate-900 md:mt-6 md:text-xl">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:mt-4 md:text-base">{item.description}</p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ValuePropsSection;
