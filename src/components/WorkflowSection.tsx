"use client";

import { motion } from 'framer-motion';
import type { LandingCopy } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';

interface WorkflowSectionProps {
    copy: LandingCopy['workflow'];
}

const WorkflowSection = ({ copy }: WorkflowSectionProps) => (
    <section id="how-it-works" className="scroll-mt-24 bg-white py-20 px-6 lg:scroll-mt-32">
        <div className="mx-auto max-w-7xl px-6">
            <SectionIntro title={copy.title} description={copy.intro} align="left" />
            <div className="mt-16 grid gap-10 lg:grid-cols-2">
                {copy.steps.map((step, index) => (
                    <motion.article
                        key={step.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="relative rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50"
                    >
                        <div className="flex items-center gap-4">
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-lg font-semibold text-brand-600">
                                {(index + 1).toString().padStart(2, '0')}
                            </span>
                            <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                        </div>
                        <p className="mt-4 text-base text-slate-600">{step.description}</p>
                        {index < copy.steps.length - 1 && (
                            <span className="pointer-events-none absolute -right-5 top-1/2 hidden h-px w-10 translate-y-1/2 bg-gradient-to-r from-brand-200 to-transparent lg:block" />
                        )}
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default WorkflowSection;
