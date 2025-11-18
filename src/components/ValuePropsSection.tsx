"use client";

import { motion } from 'framer-motion';
import type { LandingCopy } from '@/locales/copy';

interface ValuePropsSectionProps {
    copy: LandingCopy['value'];
}

const ValuePropsSection = ({ copy }: ValuePropsSectionProps) => (
    <section id="beneficios" className="scroll-mt-24 bg-white py-24 lg:scroll-mt-32">
        <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{copy.title}</h2>
                <p className="mt-4 text-lg text-slate-600">{copy.subtitle}</p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {copy.items.map((item) => (
                    <motion.article
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4 }}
                        className="rounded-3xl border border-slate-100 bg-slate-50/60 p-8 shadow-sm"
                    >
                        <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-4 text-base text-slate-600">{item.description}</p>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default ValuePropsSection;
