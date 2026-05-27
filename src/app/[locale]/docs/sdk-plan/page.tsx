import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getAppMessages } from '@/lib/i18nMessages';
import { locales, type Locale } from '@/locales/config';

interface SdkPlanPageProps {
    params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: SdkPlanPageProps): Promise<Metadata> {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = (await getAppMessages(locale)).docs.sdkPlan;

    return {
        title: copy.title,
        description: copy.intro
    };
}

const SdkPlanPage = async ({ params }: SdkPlanPageProps) => {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = (await getAppMessages(locale)).docs.sdkPlan;

    return (
        <section className="mx-auto max-w-4xl px-6 py-24">
            <header>
                <h1 className="text-4xl font-bold text-white">{copy.title}</h1>
                <p className="mt-4 text-base text-studio-muted">{copy.intro}</p>
            </header>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
                {copy.steps.map((step) => (
                    <article key={step.title} className="rounded-3xl border border-white/8 bg-studio-surface p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-white">{step.title}</h2>
                        <p className="mt-2 text-sm text-studio-muted">{step.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default SdkPlanPage;

