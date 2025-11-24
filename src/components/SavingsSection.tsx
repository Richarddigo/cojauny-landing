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
        className="relative scroll-mt-[74px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4 sm:px-6 md:py-16 lg:py-24 lg:scroll-mt-[100px]"
    >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(139,92,246,0.15),_transparent_50%)]" aria-hidden />
        <div className="relative mx-auto max-w-7xl">
            <SectionIntro
                title={copy.title}
                description={copy.caption}
                isDark
                titleClassName="text-white"
                descriptionClassName="text-[rgb(196,204,255)]"
            />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 md:mt-16 lg:grid-cols-4 lg:gap-10">
                {copy.metrics.map((metric, index) => (
                    <motion.article
                        key={metric.label}
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10 md:rounded-3xl md:p-8"
                    >
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500 opacity-0 transition group-hover:opacity-100" />
                        <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{metric.value}</p>
                        <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-brand-200 sm:mt-3 sm:text-base">{metric.label}</p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:mt-4 sm:text-base">{metric.description}</p>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default SavingsSection;
