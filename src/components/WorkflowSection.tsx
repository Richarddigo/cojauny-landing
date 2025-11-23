"use client";

import { motion } from 'framer-motion';
import type { LandingCopy } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';

interface WorkflowSectionProps {
    copy: LandingCopy['workflow'];
}

const WorkflowSection = ({ copy }: WorkflowSectionProps) => (
    <section
        id="how-it-works"
        className="scroll-mt-[74px] bg-gradient-to-b from-slate-50 to-white py-12 px-4 sm:px-6 md:py-16 lg:py-20 lg:scroll-mt-[100px]"
    >
        <div className="mx-auto max-w-5xl">
            <SectionIntro title={copy.title} description={copy.intro} />
            <div className="mt-12 space-y-6 md:mt-16 md:space-y-8">
                {copy.steps.map((step, index) => (
                    <motion.article
                        key={step.title}
                        initial={{ opacity: 0, x: -32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-lg transition hover:shadow-xl md:rounded-3xl md:p-8"
                    >
                        <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-gradient-to-b from-brand-400 via-brand-500 to-brand-600 opacity-0 transition group-hover:opacity-100 md:rounded-l-3xl" />
                        <h3 className="text-lg font-semibold text-slate-900 md:text-xl">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 md:mt-3 md:text-base">{step.description}</p>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default WorkflowSection;
