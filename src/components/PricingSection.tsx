import SectionIntro from '@/components/SectionIntro';
import Button from '@/components/ui/Button';
import AnimateIn from '@/components/ui/AnimateIn';
import type { PricingCopy } from '@/locales/copy';
import type { CommonCopy } from '@/locales/common';

interface PricingSectionProps {
    copy: PricingCopy;
    common: CommonCopy;
}

const PricingSection = ({ copy, common }: PricingSectionProps) => {
    const plans = [copy.plans.free, copy.plans.premium];

    return (
        <section id="pricing" className="w-full scroll-mt-[74px] py-12 md:py-16 lg:py-20 lg:scroll-mt-[100px]">
            <div className="mx-auto max-w-[1180px] px-4 sm:px-6 pl-[calc(var(--social-bar-offset)+1rem)]">
                <AnimateIn>
                    <SectionIntro title={copy.title} description={copy.subtitle} />
                </AnimateIn>
                <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 md:mt-16 lg:gap-12">
                    {plans.map((plan, index) => {
                        const isPremium = index === 1;
                        const badgeLabel = isPremium ? copy.plans.premium.badge : undefined;
                        const ctaLabel = isPremium ? copy.plans.premium.cta : copy.plans.free.cta;

                        return (
                            <AnimateIn key={plan.name} delay={index * 0.08}>
                                <article
                                    className={`relative h-full rounded-2xl border p-6 md:rounded-3xl md:p-8 ${isPremium
                                        ? 'border-studio-accent/40 bg-gradient-to-br from-[#1C2336] to-[rgba(91,123,255,0.08)] shadow-2xl ring-2 ring-studio-accent/30'
                                        : 'card-dark'
                                        }`}
                                >
                                    {badgeLabel && (
                                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-studio-accent px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg sm:px-5">
                                            {badgeLabel}
                                        </span>
                                    )}
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white sm:text-2xl">{plan.name}</h3>
                                            <p className="mt-2 text-sm text-studio-muted">{plan.description}</p>
                                        </div>
                                        <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{plan.price}</p>
                                    </div>
                                    <Button
                                        href="#beta"
                                        variant={isPremium ? 'primary' : 'outline'}
                                        size="lg"
                                        className="mt-6 w-full rounded-full sm:mt-8"
                                        aria-label={`${plan.name} - ${ctaLabel}`}
                                    >
                                        {ctaLabel}
                                    </Button>
                                </article>
                            </AnimateIn>
                        );
                    })}
                </div>

                <div className="mt-12 rounded-2xl border border-white/8 bg-studio-surface p-5 shadow-xl md:mt-16 md:rounded-3xl md:p-6">
                    <h3 className="text-center text-xl font-bold text-white sm:text-2xl">{copy.comparison.title}</h3>
                    <div className="mt-8 overflow-x-auto md:mt-10">
                        <table className="min-w-full divide-y divide-white/8 text-sm">
                            <thead>
                                <tr className="text-left text-xs font-semibold uppercase tracking-[0.2em] text-studio-muted">
                                    <th className="py-3 pr-3 text-left">{common.pricingFeatureHeader}</th>
                                    <th className="px-3 py-3 text-center">{common.pricingFreeHeader}</th>
                                    <th className="px-3 py-3 text-center">{common.pricingPremiumHeader}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/8">
                                {copy.comparison.features.map((feature, idx) => (
                                    <tr key={`${feature.feature}-${idx}`}>
                                        <td className="py-3 pr-3 text-sm text-white md:py-4 md:text-base">{feature.feature}</td>
                                        <td className="px-3 py-3 text-center text-sm text-studio-muted md:py-4">
                                            {typeof feature.free === 'boolean' ? (
                                                feature.free ? (
                                                    <span aria-label={common.pricingIncludedLabel} className="text-emerald-500">
                                                        &#10003;
                                                    </span>
                                                ) : (
                                                    <span aria-label={common.pricingNotIncludedLabel} className="text-slate-300">
                                                        -
                                                    </span>
                                                )
                                            ) : (
                                                feature.free
                                            )}
                                        </td>
                                        <td className="px-3 py-3 text-center text-sm text-white md:py-4">
                                            {typeof feature.premium === 'boolean' ? (
                                                feature.premium ? (
                                                    <span aria-label={common.pricingIncludedLabel} className="text-emerald-500">
                                                        &#10003;
                                                    </span>
                                                ) : (
                                                    <span aria-label={common.pricingNotIncludedLabel} className="text-slate-300">
                                                        -
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
            </div>
        </section>
    );
};

export default PricingSection;

