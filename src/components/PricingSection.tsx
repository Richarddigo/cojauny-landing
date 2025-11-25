"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { smoothScrollTo } from '@/utils/smoothScroll';

import SectionIntro from '@/components/SectionIntro';
import type { PricingCopy } from '@/locales/copy';

interface PricingSectionProps {
    copy: PricingCopy;
}

const PricingSection = ({ copy }: PricingSectionProps) => {
    const plans = [copy.plans.free, copy.plans.premium];

    return (
        <section id="pricing" className="scroll-mt-[74px] py-12 mx-auto max-w-7xl px-4 sm:px-6 md:py-16 lg:py-20 lg:scroll-mt-[100px]">
            <SectionIntro title={copy.title} description={copy.subtitle} />
            <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 md:mt-16 lg:gap-12">
                {plans.map((plan, index) => {
                    const isPremium = index === 1;
                    const badgeLabel = isPremium ? copy.plans.premium.badge : undefined;
                    const ctaLabel = isPremium ? copy.plans.premium.cta : copy.plans.free.cta;

                    return (
                        <motion.article
                            key={plan.name}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            animate={isPremium ? {
                                opacity: 1,
                                y: 0,
                                boxShadow: [
                                    "0 20px 50px -12px rgba(79, 70, 229, 0.25)",
                                    "0 20px 60px -12px rgba(79, 70, 229, 0.35)",
                                    "0 20px 50px -12px rgba(79, 70, 229, 0.25)"
                                ]
                            } : { opacity: 1, y: 0 }}
                            transition={isPremium ? {
                                opacity: { duration: 0.5, delay: index * 0.1 },
                                y: { duration: 0.5, delay: index * 0.1 },
                                boxShadow: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            } : { duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-2xl border p-6 md:rounded-3xl md:p-8 ${isPremium
                                ? 'border-brand-300 bg-gradient-to-br from-white via-brand-50/50 to-brand-100/30 shadow-2xl ring-2 ring-brand-200/50'
                                : 'border-slate-100 bg-white shadow-xl'
                                }`}
                        >
                            {badgeLabel && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg sm:px-5">
                                    {badgeLabel}
                                </span>
                            )}
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{plan.name}</h3>
                                    <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
                                </div>
                                <p className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{plan.price}</p>
                            </div>
                            <a
                                href="#beta"
                                onClick={(e) => { e.preventDefault(); smoothScrollTo('beta'); }}
                                className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 sm:mt-8 ${isPremium
                                    ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-600/30 hover:shadow-xl hover:shadow-brand-600/40 hover:scale-105'
                                    : 'border-2 border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50'
                                    }`}
                                aria-label={`${plan.name} - ${ctaLabel}`}
                            >
                                {ctaLabel}
                            </a>
                        </motion.article>
                    );
                })}
            </div>

            <div className="mt-12 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl md:mt-16 md:rounded-3xl md:p-6">
                <h3 className="text-center text-xl font-bold text-slate-900 sm:text-2xl">{copy.comparison.title}</h3>
                <div className="mt-8 overflow-x-auto md:mt-10">
                    <table className="min-w-full divide-y divide-slate-100 text-sm">
                        <thead>
                            <tr className="text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                <th className="py-3 pr-3 text-left">Feature</th>
                                <th className="px-3 py-3 text-center">Free</th>
                                <th className="px-3 py-3 text-center">Premium</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {copy.comparison.features.map((feature, idx) => (
                                <tr key={`${feature.feature}-${idx}`}>
                                    <td className="py-3 pr-3 text-sm text-slate-900 md:py-4 md:text-base">{feature.feature}</td>
                                    <td className="px-3 py-3 text-center text-sm text-slate-600 md:py-4">
                                        {typeof feature.free === 'boolean' ? (
                                            feature.free ? (
                                                <span aria-label="Included" className="text-emerald-500">
                                                    ✓
                                                </span>
                                            ) : (
                                                <span aria-label="Not included" className="text-slate-300">
                                                    —
                                                </span>
                                            )
                                        ) : (
                                            feature.free
                                        )}
                                    </td>
                                    <td className="px-3 py-3 text-center text-sm text-slate-900 md:py-4">
                                        {typeof feature.premium === 'boolean' ? (
                                            feature.premium ? (
                                                <span aria-label="Included" className="text-emerald-500">
                                                    ✓
                                                </span>
                                            ) : (
                                                <span aria-label="Not included" className="text-slate-300">
                                                    —
                                                </span>
                                            )
                                        ) : (
                                            feature.premium
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
