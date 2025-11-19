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
        className="relative scroll-mt-24 border-y border-transparent bg-gradient-to-b from-white to-slate-50 py-20 px-6 lg:scroll-mt-32"
    >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="mx-auto max-w-7xl px-6">
            <SectionIntro title={copy.title} description={copy.subtitle} />
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {copy.items.map((feature, index) => {
                    const Icon = iconMap[feature.iconName];
                    return (
                        <motion.article
                            key={feature.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group relative rounded-3xl border border-white/70 bg-white/90 p-8 shadow-xl shadow-slate-200/60 backdrop-blur"
                        >
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                                <Icon className="h-6 w-6" aria-hidden />
                            </span>
                            <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.title}</h3>
                            <p className="mt-4 text-base text-slate-600">{feature.description}</p>
                            <div className="mt-6 h-px w-full bg-gradient-to-r from-brand-200/0 via-brand-200/60 to-brand-200/0 opacity-0 transition group-hover:opacity-100" />
                        </motion.article>
                    );
                })}
            </div>
        </div>
    </section>
);

export default Features;
