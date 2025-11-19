"use client";

import { motion } from 'framer-motion';
import type { LandingCopy } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';

interface SavingsSectionProps {
    copy: LandingCopy['savings'];
}

const SavingsSection = ({ copy }: SavingsSectionProps) => (
    <section
        id="impact"
        className="relative scroll-mt-24 overflow-hidden bg-slate-950 py-20 px-6 text-white lg:scroll-mt-32"
    >
        <div className="absolute inset-0 opacity-50" aria-hidden>
            <div className="absolute inset-y-0 left-1/2 h-full w-[120%] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500/30 via-brand-300/20 to-brand-500/30 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
            <SectionIntro title={copy.title} description={copy.caption} align="left" tone="light" />
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {copy.metrics.map((metric, index) => (
                    <motion.article
                        key={metric.label}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="rounded-3xl border border-white/15 bg-white/5 p-8 shadow-soft-glow backdrop-blur"
                    >
                        <p className="text-4xl font-bold text-brand-200">{metric.value}</p>
                        <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                            {metric.label}
                        </h3>
                        <p className="mt-4 text-sm leading-6 text-white/80">{metric.description}</p>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default SavingsSection;
