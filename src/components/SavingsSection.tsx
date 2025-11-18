"use client";

import { motion } from 'framer-motion';
import type { LandingCopy } from '@/locales/copy';

interface SavingsSectionProps {
    copy: LandingCopy['savings'];
}

const SavingsSection = ({ copy }: SavingsSectionProps) => (
    <section id="impacto" className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{copy.title}</h2>
                <p className="mt-4 text-base text-white/80">{copy.caption}</p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {copy.metrics.map((metric) => (
                    <motion.article
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft-glow"
                    >
                        <p className="text-4xl font-bold text-brand-200">{metric.value}</p>
                        <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
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
