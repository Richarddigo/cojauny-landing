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
        className="scroll-mt-[74px] bg-gradient-to-b from-white via-slate-50 to-white py-12 px-4 sm:px-6 md:py-16 lg:py-24 lg:scroll-mt-[100px]"
    >
        <div className="mx-auto max-w-7xl">
            <SectionIntro title={copy.title} description={copy.subtitle} />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 md:mt-16 lg:grid-cols-3">
                {copy.items.map((item, index) => (
                    <motion.article
                        key={item.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-slate-200/60 backdrop-blur-sm md:rounded-3xl md:p-8"
                    >
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-300 opacity-0 transition group-hover:opacity-100" />
                        <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                                {(index + 1).toString().padStart(2, '0')}
                            </span>
                        </div>
                        <h3 className="mt-5 text-lg font-semibold text-slate-900 md:mt-6 md:text-xl">{item.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600 md:mt-4 md:text-base">{item.description}</p>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default ValuePropsSection;
