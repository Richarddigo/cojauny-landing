import BetaSignupForm from '@/components/BetaSignupForm';
import FeedbackForm from '@/components/FeedbackForm';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import IntegrationCTA from '@/components/IntegrationCTA';
import Mockups from '@/components/Mockups';
import ValuePropsSection from '@/components/ValuePropsSection';
import SavingsSection from '@/components/SavingsSection';
import WorkflowSection from '@/components/WorkflowSection';
import type { LandingCopy } from '@/locales/copy';
import type { Locale } from '@/locales/config';

interface LandingPageContentProps {
    copy: LandingCopy;
    locale: Locale;
}

const LandingPageContent = ({ copy, locale }: LandingPageContentProps) => (
    <>
        <Hero copy={copy.hero} />
        <ValuePropsSection copy={copy.value} />
        <SavingsSection copy={copy.savings} />
        <Features copy={copy.features} />
        <WorkflowSection copy={copy.workflow} />
        <section className="mx-auto mt-24 flex max-w-6xl flex-col gap-16 px-6 lg:flex-row">
            <div className="flex-1">
                <Mockups className="h-full" copy={copy.mockups} />
            </div>
            <div className="flex flex-1 flex-col gap-16">
                <BetaSignupForm copy={copy.forms.beta} locale={locale} />
                <FeedbackForm copy={copy.forms.feedback} locale={locale} />
            </div>
        </section>
        <IntegrationCTA copy={copy.ctaStrip} locale={locale} />
    </>
);

export default LandingPageContent;