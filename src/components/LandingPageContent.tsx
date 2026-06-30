import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import HeroVariantTracker from '@/components/HeroVariantTracker';
import StickyMobileBetaCta from '@/components/StickyMobileBetaCta';
import Features from '@/components/Features';
import IntegrationCTA from '@/components/IntegrationCTA';
import ValuePropsSection from '@/components/ValuePropsSection';
import SavingsSection from '@/components/SavingsSection';
import WorkflowSection from '@/components/WorkflowSection';
import PricingSection from '@/components/PricingSection';
import { resolveHeroCopy, type HeroVariant } from '@/lib/heroVariant';
import {
  BetaSignupFormSkeleton,
  DemoSectionSkeleton,
  FaqSectionSkeleton,
  FeedbackFormSkeleton,
} from '@/components/SectionSkeletons';

const DemoSection = dynamic(() => import('@/components/DemoSection'), {
  loading: () => <DemoSectionSkeleton />,
});
const FaqSection = dynamic(() => import('@/components/FaqSection'), {
  loading: () => <FaqSectionSkeleton />,
});
const BetaSignupForm = dynamic(() => import('@/components/BetaSignupForm'), {
  loading: () => <BetaSignupFormSkeleton />,
});
const FeedbackForm = dynamic(() => import('@/components/FeedbackForm'), {
  loading: () => <FeedbackFormSkeleton />,
});
import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';
import { getCommonCopy, type CommonCopy } from '@/locales/common';
import { ENABLE_PREMIUM } from '@/lib/flags';

interface LandingPageContentProps {
    copy: LandingCopy;
    locale: Locale;
    common?: CommonCopy;
    heroVariant: HeroVariant;
}

const LandingPageContent = ({ copy, locale, common, heroVariant }: LandingPageContentProps) => {
    const resolvedCommon = common ?? getCommonCopy(locale);
    const heroCopy = resolveHeroCopy(copy.hero, copy.heroVariants, heroVariant);

    return (
        <>
            <HeroVariantTracker variant={heroVariant} />
            <Hero
                copy={heroCopy}
                quickSignupCopy={copy.heroQuickSignup}
                betaCopy={copy.forms.beta}
                locale={locale}
                airportsHubTitle={copy.airportsHubTitle}
                airportsHubAll={copy.airportsHubAll}
            />
            <StickyMobileBetaCta locale={locale} label={copy.hero.primaryCta} />
            <div className="cv-auto"><ValuePropsSection copy={copy.value} /></div>
            <div className="cv-auto"><WorkflowSection copy={copy.workflow} /></div>
            <div className="cv-auto"><DemoSection copy={copy.mockups} /></div>
            <div className="cv-auto"><Features copy={copy.features} /></div>
            <div className="cv-auto"><SavingsSection copy={copy.savings} /></div>
            <section id="beta" className="cv-auto w-full scroll-mt-[74px] py-12 lg:scroll-mt-[100px] md:py-16 lg:py-20">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-6 pl-[calc(var(--social-bar-offset)+1rem)]">
                    <p className="mb-6 rounded-xl border border-white/10 bg-studio-surface/60 px-5 py-3.5 text-center text-sm leading-relaxed text-studio-muted sm:text-base">
                        {copy.betaReferralBanner}
                    </p>
                    <BetaSignupForm locale={locale} />
                </div>
            </section>
            {ENABLE_PREMIUM && <div className="cv-auto"><PricingSection copy={copy.pricing} common={resolvedCommon} /></div>}
            <div className="cv-auto"><FaqSection copy={copy.faq} locale={locale} airportsHubTitle={copy.airportsHubTitle} airportsHubAll={copy.airportsHubAll} /></div>
            <section id="feedback" className="cv-auto w-full scroll-mt-[74px] py-12 lg:scroll-mt-[100px] md:py-16 lg:py-20">
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
            <section className="cv-auto w-full py-12 md:py-16 lg:py-20">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-6 pl-[calc(var(--social-bar-offset)+1rem)]">
                    <IntegrationCTA copy={copy.ctaStrip} locale={locale} />
                </div>
            </section>
        </>
    );
};

export default LandingPageContent;
