"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

import SectionIntro from '@/components/SectionIntro';
import type { PricingCopy } from '@/locales/copy';

interface PricingSectionProps {
    copy: PricingCopy;
}

const PricingSection = ({ copy }: PricingSectionProps) => {
    const plans = [copy.plans.free, copy.plans.premium];

    return (
        <section id="pricing" className="scroll-mt-24 py-20 mx-auto max-w-7xl px-6 lg:scroll-mt-32">
            <SectionIntro title={copy.title} description={copy.subtitle} />
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
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
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-3xl border p-8 shadow-xl ${isPremium
                                ? 'border-brand-200 bg-gradient-to-br from-white via-brand-50/40 to-white'
                                : 'border-slate-100 bg-white'
                                }`}
                        >
                            {badgeLabel && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                                    {badgeLabel}
                                </span>
                            )}
                            <div className="flex items-baseline justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                                    <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
                                </div>
                                <p className="text-4xl font-extrabold tracking-tight text-slate-900">{plan.price}</p>
                            </div>
                            <Link
                                href="#beta"
                                prefetch={false}
                                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${isPremium
                                    ? 'bg-slate-900 text-white hover:bg-slate-800'
                                    : 'border border-slate-200 text-slate-900 hover:border-slate-300'
                                    }`}
                                aria-label={`${plan.name} - ${ctaLabel}`}
                            >
                                {ctaLabel}
                            </Link>
                        </motion.article>
                    );
                })}
            </div>

            <div className="mt-16 rounded-3xl border border-slate-100 bg-white p-6 shadow-xl">
                <h3 className="text-center text-2xl font-bold text-slate-900">{copy.comparison.title}</h3>
                <div className="mt-10 overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-100 text-sm">
                        <thead>
                            <tr className="text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                <th className="py-3 pr-3">Feature</th>
                                <th className="px-3 py-3 text-center">Free</th>
                                <th className="px-3 py-3 text-center">Premium</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {copy.comparison.features.map((feature, idx) => (
                                <tr key={`${feature.feature}-${idx}`}>
                                    <td className="py-4 pr-3 text-slate-900">{feature.feature}</td>
                                    <td className="px-3 py-4 text-center text-slate-600">
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
                                    <td className="px-3 py-4 text-center text-slate-900">
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
