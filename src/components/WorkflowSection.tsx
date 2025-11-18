"use client";

import { motion } from 'framer-motion';
import type { LandingCopy } from '@/locales/copy';

interface WorkflowSectionProps {
    copy: LandingCopy['workflow'];
}

const WorkflowSection = ({ copy }: WorkflowSectionProps) => (
    <section id="como-funciona" className="scroll-mt-24 bg-white py-24 lg:scroll-mt-32">
        <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{copy.title}</h2>
                <p className="mt-4 text-lg text-slate-600">{copy.intro}</p>
            </div>
            <div className="mt-16 space-y-8">
                {copy.steps.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:flex-row md:items-start md:gap-8"
                    >
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg font-semibold text-brand-700">
                            {(index + 1).toString().padStart(2, '0')}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                            <p className="mt-3 text-base text-slate-600">{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default WorkflowSection;
