"use client";

import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import type { LandingCopy } from '@/locales/copy';
import SectionIntro from '@/components/SectionIntro';

interface FaqSectionProps {
    copy: LandingCopy['faq'];
}

const FaqSection = ({ copy }: FaqSectionProps) => (
    <section
        id="faq"
        className="w-full scroll-mt-[74px] bg-white py-12 md:py-16 lg:py-20 lg:scroll-mt-[100px]"
    >
        <div className="mx-auto max-w-4xl px-4 sm:px-6" style={{ paddingLeft: 'calc(var(--social-bar-offset) + 1rem)' }}>
            <SectionIntro title={copy.title} description={copy.subtitle} />
            <dl className="mt-10 space-y-4 md:mt-12 md:space-y-6">
                {copy.items.map((item, index) => (
                    <Disclosure as="div" key={`faq-${index}`} className="rounded-2xl border border-slate-100 bg-white shadow-sm md:rounded-3xl">
                        {({ open }) => (
                            <>
                                <Disclosure.Button
                                    className="flex w-full items-start justify-between rounded-2xl px-5 py-4 text-left transition hover:bg-slate-50 md:rounded-3xl md:px-6 md:py-5"
                                >
                                    <span className="text-base font-semibold text-slate-900 md:text-lg">{item.question}</span>
                                    <ChevronDownIcon
                                        className={`ml-4 h-5 w-5 flex-shrink-0 text-brand-600 transition-transform ${open ? 'rotate-180' : ''}`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-5 pb-4 md:px-6 md:pb-5">
                                    <p className="text-sm leading-relaxed text-slate-600 md:text-base">{item.answer}</p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </dl>
        </div>
    </section>
);

export default FaqSection;
