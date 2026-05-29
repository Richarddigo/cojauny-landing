import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import IntegrationCTA from '@/components/IntegrationCTA';
import ValuePropsSection from '@/components/ValuePropsSection';
import SavingsSection from '@/components/SavingsSection';
import WorkflowSection from '@/components/WorkflowSection';
import PricingSection from '@/components/PricingSection';

// Below-fold client components — code-split to reduce initial JS payload
const DemoSection = dynamic(() => import('@/components/DemoSection'));
const FaqSection = dynamic(() => import('@/components/FaqSection'));
const BetaSignupForm = dynamic(() => import('@/components/BetaSignupForm'));
const FeedbackForm = dynamic(() => import('@/components/FeedbackForm'));
import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';
import { getCommonCopy, type CommonCopy } from '@/locales/common';
import { ENABLE_PREMIUM } from '@/lib/flags';

interface LandingPageContentProps {
    copy: LandingCopy;
    locale: Locale;
    common?: CommonCopy;
}

const LandingPageContent = ({ copy, locale, common }: LandingPageContentProps) => {
    const resolvedCommon = common ?? getCommonCopy(locale);
    return (
        <>
            <Hero copy={copy.hero} />
            <DemoSection copy={copy.mockups} />
            <ValuePropsSection copy={copy.value} />
            <SavingsSection copy={copy.savings} />
            <Features copy={copy.features} />
            <WorkflowSection copy={copy.workflow} />
            {/* PREMIUM SECTION — controlled by NEXT_PUBLIC_ENABLE_PREMIUM=true */}
            {ENABLE_PREMIUM && <PricingSection copy={copy.pricing} common={resolvedCommon} />}
            <section id="beta" className="w-full scroll-mt-[74px] py-12 lg:scroll-mt-[100px] md:py-16 lg:py-20">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-6 pl-[calc(var(--social-bar-offset)+1rem)]">
                    <BetaSignupForm locale={locale} />
                </div>
            </section>
            <FaqSection copy={copy.faq} />
            <section id="feedback" className="w-full scroll-mt-[74px] py-12 lg:scroll-mt-[100px] md:py-16 lg:py-20">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-6 pl-[calc(var(--social-bar-offset)+1rem)]">
                    <div className="mb-12 text-center md:mb-16">
                        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                            {copy.forms.feedback.heading}
                        </h2>
                        <p className="mt-3 text-base leading-8 text-white sm:mt-4 sm:text-lg">
                            {copy.forms.feedback.subheading}
                        </p>
                    </div>
                    <FeedbackForm locale={locale} />
                </div>
            </section>
            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-6 pl-[calc(var(--social-bar-offset)+1rem)]">
                    <IntegrationCTA copy={copy.ctaStrip} locale={locale} />
                </div>
            </section>
        </>
    );
};

export default LandingPageContent;