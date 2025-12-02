"use client";

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import {
    BoltIcon,
    UsersIcon,
    ChatBubbleLeftRightIcon,
    ShieldCheckIcon,
    SparklesIcon,
    GlobeAltIcon
} from '@heroicons/react/24/outline';
import type { LandingCopy, IconName } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';

interface FeaturesProps {
    copy: LandingCopy['features'];
}

const iconMap: Record<IconName, typeof BoltIcon> = {
    bolt: BoltIcon,
    users: UsersIcon,
    chat: ChatBubbleLeftRightIcon,
    shield: ShieldCheckIcon,
    sparkles: SparklesIcon,
    globe: GlobeAltIcon
};

const Features = ({ copy }: FeaturesProps) => {
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

        const handleScroll = () => {
            const cards = cardsRef.current;
            const viewportTop = 150;

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

            if (newActive !== activeCard) {
                setActiveCard(newActive);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile, activeCard]);

    return (
        <section
            id="features"
            className="relative w-full scroll-mt-[74px] border-y border-transparent bg-gradient-to-b from-white to-slate-50 py-12 md:py-16 lg:py-20 lg:scroll-mt-[100px]"
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6" style={{ paddingLeft: 'calc(var(--social-bar-offset) + 1rem)' }}>
                <SectionIntro title={copy.title} description={copy.subtitle} />
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 md:mt-16 lg:grid-cols-3">
                    {copy.items.map((feature, index) => {
                        const Icon = iconMap[feature.iconName];
                        const isActive = isMobile && index === activeCard;
                        return (
                            <motion.article
                                key={feature.title}
                                ref={el => { cardsRef.current[index] = el; }}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className={`group relative rounded-2xl border bg-white/90 p-6 shadow-xl backdrop-blur md:rounded-3xl md:p-8 transition-all duration-500 ${isActive
                                    ? 'border-blue-300 shadow-2xl scale-105 lg:scale-100 lg:border-white/70'
                                    : 'border-white/70 shadow-slate-200/60'
                                    }`}
                            >
                                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                                    <Icon className="h-6 w-6" aria-hidden />
                                </span>
                                <h3 className="mt-5 text-lg font-semibold text-slate-900 md:mt-6 md:text-xl">{feature.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:mt-4 md:text-base">{feature.description}</p>
                                <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 flex h-3 w-full -translate-x-1/2 flex-col items-center justify-end mb-[15px]">
                                    <div className={`h-0.5 w-3/4 rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-brand-300 transition ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                        }`}></div>
                                    <div className={`mt-1 h-0.5 w-[55%] rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-brand-300 transition ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                        }`}></div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
