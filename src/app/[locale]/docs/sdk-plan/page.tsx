import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { locales, type Locale } from '@/locales/config';
import { getDocsCopy } from '@/locales/docs';

interface SdkPlanPageProps {
    params: { locale: string };
}

export function generateMetadata({ params }: SdkPlanPageProps): Metadata {
    const locale = params.locale as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getDocsCopy(locale).sdkPlan;

    return {
        title: copy.title,
        description: copy.intro
    };
}

const SdkPlanPage = ({ params }: SdkPlanPageProps) => {
    const locale = params.locale as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getDocsCopy(locale).sdkPlan;

    return (
        <section className="mx-auto max-w-4xl px-6 py-24">
            <header>
                <h1 className="text-4xl font-bold text-slate-900">{copy.title}</h1>
                <p className="mt-4 text-base text-slate-600">{copy.intro}</p>
            </header>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
                {copy.steps.map((step) => (
                    <article key={step.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-slate-900">{step.title}</h2>
                        <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default SdkPlanPage;
