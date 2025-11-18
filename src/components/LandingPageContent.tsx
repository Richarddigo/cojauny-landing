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
    <>
        <Hero copy={copy.hero} />
        <section id="demo" className="mx-auto mt-16 max-w-7xl scroll-mt-24 px-6 lg:scroll-mt-32">
            <Mockups className="h-full" copy={copy.mockups} />
        </section>
        <ValuePropsSection copy={copy.value} />
        <SavingsSection copy={copy.savings} />
        <Features copy={copy.features} />
        <WorkflowSection copy={copy.workflow} />
        <PricingSection copy={copy.pricing} />
        <section id="beta" className="mx-auto mt-24 max-w-2xl scroll-mt-24 px-6 lg:scroll-mt-32">
            <BetaSignupForm copy={copy.forms.beta} locale={locale} />
        </section>
        <FaqSection copy={copy.faq} />
        <section className="mx-auto mt-24 max-w-2xl px-6">
            <FeedbackForm copy={copy.forms.feedback} locale={locale} />
        </section>
        <IntegrationCTA copy={copy.ctaStrip} locale={locale} />
    </>
);

export default LandingPageContent;