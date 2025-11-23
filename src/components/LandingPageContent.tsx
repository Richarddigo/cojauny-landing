import BetaSignupForm from '@/components/BetaSignupForm';
import FeedbackForm from '@/components/FeedbackForm';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import IntegrationCTA from '@/components/IntegrationCTA';
import Mockups from '@/components/Mockups';
import ValuePropsSection from '@/components/ValuePropsSection';
import SavingsSection from '@/components/SavingsSection';
import WorkflowSection from '@/components/WorkflowSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';

interface LandingPageContentProps {
    copy: LandingCopy;
    locale: Locale;
}

const LandingPageContent = ({ copy, locale }: LandingPageContentProps) => (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(90,103,242,0.08),_transparent_60%)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,_rgba(90,103,242,0.08),_transparent_30%),_radial-gradient(circle_at_80%_0%,_rgba(18,23,84,0.08),_transparent_35%)]" aria-hidden />
        <Hero copy={copy.hero} />
        <section id="demo" className="mx-auto max-w-7xl scroll-mt-[74px] py-12 px-4 sm:px-6 md:py-16 lg:py-20 lg:scroll-mt-[100px]">
            <Mockups className="h-full" copy={copy.mockups} />
        </section>
        <ValuePropsSection copy={copy.value} />
        <SavingsSection copy={copy.savings} />
        <Features copy={copy.features} />
        <WorkflowSection copy={copy.workflow} />
        <PricingSection copy={copy.pricing} />
        <section id="beta" className="mx-auto max-w-7xl scroll-mt-[74px] py-12 px-4 sm:px-6 md:py-16 lg:py-20 lg:scroll-mt-[100px]">
            <BetaSignupForm copy={copy.forms.beta} referralPanelCopy={copy.referralPanel} locale={locale} />
        </section>
        <FaqSection copy={copy.faq} />
        <section id="feedback" className="mx-auto max-w-7xl scroll-mt-[74px] py-12 px-4 sm:px-6 md:py-16 lg:py-20 lg:scroll-mt-[100px]">
            <div className="mb-12 text-center md:mb-16">
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                    {copy.forms.feedback.heading}
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-300 sm:mt-4 sm:text-lg">
                    {copy.forms.feedback.subheading}
                </p>
            </div>
            <FeedbackForm copy={copy.forms.feedback} locale={locale} />
        </section>
        <section className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:py-16 lg:py-20">
            <IntegrationCTA copy={copy.ctaStrip} locale={locale} />
        </section>
    </main>
);

export default LandingPageContent;