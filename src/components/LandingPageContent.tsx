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
        <section id="demo" className="mx-auto max-w-7xl scroll-mt-24 py-20 px-6 lg:scroll-mt-32">
            <Mockups className="h-full" copy={copy.mockups} />
        </section>
        <ValuePropsSection copy={copy.value} />
        <SavingsSection copy={copy.savings} />
        <Features copy={copy.features} />
        <WorkflowSection copy={copy.workflow} />
        <PricingSection copy={copy.pricing} />
        <section id="beta" className="mx-auto max-w-7xl scroll-mt-24 py-20 px-6 lg:scroll-mt-32">
            <BetaSignupForm copy={copy.forms.beta} locale={locale} />
        </section>
        <FaqSection copy={copy.faq} />
        <section className="mx-auto max-w-7xl py-20 px-6">
            <FeedbackForm copy={copy.forms.feedback} locale={locale} />
        </section>
        <section className="mx-auto max-w-7xl py-20 px-6">
            <IntegrationCTA copy={copy.ctaStrip} locale={locale} />
        </section>
    </main>
);

export default LandingPageContent;