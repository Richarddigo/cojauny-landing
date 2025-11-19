"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FaqCopy } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';

interface FaqSectionProps {
    copy: FaqCopy;
}

const FaqSection = ({ copy }: FaqSectionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="scroll-mt-16 py-20 mx-auto max-w-7xl px-6 lg:scroll-mt-20">
            <SectionIntro title={copy.title} description={copy.subtitle} />

            <div className="mt-12 space-y-4">
                {copy.items.map((item, index) => (
                    <motion.div
                        key={item.question}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="overflow-hidden rounded-3xl border border-slate-100 bg-white/90 shadow-lg shadow-slate-200/60"
                    >
                        <button
                            onClick={() => toggleFaq(index)}
                            className="flex w-full items-center justify-between px-6 py-5 text-left"
                            aria-expanded={openIndex === index}
                            aria-controls={`faq-panel-${index}`}
                        >
                            <span className="text-lg font-semibold text-slate-900">{item.question}</span>
                            <svg
                                className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <AnimatePresence initial={false}>
                            {openIndex === index && (
                                <motion.div
                                    id={`faq-panel-${index}`}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="border-t border-slate-100 bg-slate-50/80 px-6"
                                >
                                    <p className="py-4 text-base text-slate-600">{item.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FaqSection;
