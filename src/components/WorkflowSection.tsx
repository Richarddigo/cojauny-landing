"use client";

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import type { LandingCopy } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';

interface WorkflowSectionProps {
    copy: LandingCopy['workflow'];
}

const WorkflowSection = ({ copy }: WorkflowSectionProps) => {
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
            id="how-it-works"
            className="w-full scroll-mt-[74px] bg-gradient-to-b from-slate-50 to-white py-12 md:py-16 lg:py-20 lg:scroll-mt-[100px]"
        >
            <div className="mx-auto max-w-5xl px-4 sm:px-6" style={{ paddingLeft: 'calc(var(--social-bar-offset) + 1rem)' }}>
                <SectionIntro title={copy.title} description={copy.intro} />
                <div className="mt-12 space-y-6 md:mt-16 md:space-y-8">
                    {copy.steps.map((step, index) => {
                        const isActive = isMobile && index === activeCard;
                        return (
                            <motion.article
                                key={step.title}
                                ref={el => { cardsRef.current[index] = el; }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.35, delay: index * 0.05 }}
                                className={`group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-lg transition-all duration-200 md:rounded-3xl md:p-8 ${isActive
                                    ? 'border-brand-300 shadow-2xl lg:border-slate-100'
                                    : 'border-slate-100 hover:shadow-xl hover:border-brand-100'
                                    }`}
                            >
                                <div className={`absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-gradient-to-b from-brand-400 via-brand-500 to-brand-600 md:rounded-l-3xl transition ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                    }`} />
                                <h3 className="text-lg font-semibold text-slate-900 md:text-xl">{step.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600 md:mt-3 md:text-base">{step.description}</p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WorkflowSection;
