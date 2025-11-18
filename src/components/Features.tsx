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
        id="caracteristicas"
        className="relative mt-24 scroll-mt-24 border-y border-slate-100 bg-slate-50 py-24 lg:scroll-mt-32"
    >
        <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    {copy.title}
                </h2>
                <p className="mt-4 text-lg text-slate-600">{copy.subtitle}</p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {copy.items.map((feature) => {
                    const Icon = iconMap[feature.iconName];
                    return (
                        <motion.article
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                            className="group rounded-3xl border border-transparent bg-white p-8 shadow-sm transition hover:border-brand-200 hover:shadow-lg"
                        >
                            <Icon className="h-10 w-10 text-brand-600" aria-hidden />
                            <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.title}</h3>
                            <p className="mt-4 text-base text-slate-600">{feature.description}</p>
                        </motion.article>
                    );
                })}
            </div>
        </div>
    </section>
);

export default Features;
