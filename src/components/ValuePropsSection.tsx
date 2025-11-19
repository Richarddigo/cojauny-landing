"use client";

import { motion } from 'framer-motion';
import type { LandingCopy } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';

interface ValuePropsSectionProps {
    copy: LandingCopy['value'];
}

const ValuePropsSection = ({ copy }: ValuePropsSectionProps) => (
    <section
        id="benefits"
        className="scroll-mt-24 bg-gradient-to-b from-white via-slate-50 to-white py-24 lg:scroll-mt-32"
    >
        <div className="mx-auto max-w-7xl px-6">
            <SectionIntro title={copy.title} description={copy.subtitle} />
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {copy.items.map((item, index) => (
                    <motion.article
                        key={item.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-8 shadow-lg shadow-slate-200/60 backdrop-blur-sm"
                    >
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-300 opacity-0 transition group-hover:opacity-100" />
                        <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                                {(index + 1).toString().padStart(2, '0')}
                            </span>
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-4 text-base leading-relaxed text-slate-600">{item.description}</p>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default ValuePropsSection;
