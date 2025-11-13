import { notFound } from 'next/navigation';

import BetaSignupForm from '@/components/BetaSignupForm';
import FeedbackForm from '@/components/FeedbackForm';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import IntegrationCTA from '@/components/IntegrationCTA';
import Mockups from '@/components/Mockups';
import { locales, type Locale } from '@/locales/config';
import { getLandingCopy } from '@/locales/copy';

interface LocalePageProps {
    params: { locale: string };
}

export const revalidate = 60;

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default function LocalePage({ params }: LocalePageProps) {
    const locale = params.locale as Locale;

    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getLandingCopy(locale);

    return (
        <>
            <Hero copy={copy.hero} />
            <Features copy={copy.features} />
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
            <Footer copy={copy.footer} locale={locale} />
        </>
    );
}
