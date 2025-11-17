'use client';

import { useState } from 'react';
import type { FaqCopy } from '@/locales/copy';

interface FaqSectionProps {
    copy: FaqCopy;
}

const FaqSection = ({ copy }: FaqSectionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mx-auto mt-24 max-w-4xl px-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {copy.title}
                </h2>
                <p className="mt-4 text-lg text-gray-600">{copy.subtitle}</p>
            </div>

            <div className="mt-12 space-y-4">
                {copy.items.map((item, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                    >
                        <button
                            onClick={() => toggleFaq(index)}
                            className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
                            aria-expanded={openIndex === index}
                        >
                            <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                            <svg
                                className={`h-5 w-5 flex-shrink-0 text-gray-600 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openIndex === index && (
                            <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
                                <p className="text-gray-700">{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FaqSection;
