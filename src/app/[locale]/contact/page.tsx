import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import ContactForm from '@/components/ContactForm';
import { getAppMessages } from '@/lib/i18nMessages';
import { locales, type Locale } from '@/locales/config';

interface ContactPageProps {
    params: Promise<{ locale: string }>;
}

export const revalidate = 1800;

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = (await getAppMessages(locale)).contact;

    return {
        title: `${copy.form.title} - Cojauny`
    };
}

export default async function ContactPage({ params }: ContactPageProps) {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;

    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = (await getAppMessages(locale)).contact;

    return (
        <section className="mx-auto max-w-[1180px] px-6 py-24">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-bold text-white sm:text-5xl">{copy.heading}</h1>
                <p className="mt-4 text-lg text-studio-muted">{copy.intro}</p>
                <p className="mt-6 rounded-3xl border border-studio-accent/20 bg-studio-accent/10 px-6 py-3 text-sm font-medium text-studio-accent">
                    {copy.banner}
                </p>
            </div>
            <div className="mx-auto mt-12 max-w-3xl">
                <ContactForm locale={locale} />
            </div>
        </section>
    );
}

