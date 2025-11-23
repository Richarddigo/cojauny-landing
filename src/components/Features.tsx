"use client";

import { motion } from 'framer-motion';
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

const Features = ({ copy }: FeaturesProps) => (
    <section
        id="features"
        className="relative scroll-mt-[74px] border-y border-transparent bg-gradient-to-b from-white to-slate-50 py-12 px-4 sm:px-6 md:py-16 lg:py-20 lg:scroll-mt-[100px]"
    >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="mx-auto max-w-7xl">
            <SectionIntro title={copy.title} description={copy.subtitle} />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 md:mt-16 lg:grid-cols-3">
                {copy.items.map((feature, index) => {
                    const Icon = iconMap[feature.iconName];
                    return (
                        <motion.article
                            key={feature.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group relative rounded-2xl border border-white/70 bg-white/90 p-6 shadow-xl shadow-slate-200/60 backdrop-blur md:rounded-3xl md:p-8"
                        >
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                                <Icon className="h-6 w-6" aria-hidden />
                            </span>
                            <h3 className="mt-5 text-lg font-semibold text-slate-900 md:mt-6 md:text-xl">{feature.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:mt-4 md:text-base">{feature.description}</p>
                            <div className="mt-5 h-px w-full bg-gradient-to-r from-brand-200/0 via-brand-200/60 to-brand-200/0 opacity-0 transition group-hover:opacity-100 md:mt-6" />
                        </motion.article>
                    );
                })}
            </div>
        </div>
    </section>
);

export default Features;
