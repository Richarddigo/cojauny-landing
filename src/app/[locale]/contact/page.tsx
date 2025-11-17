import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import ContactForm from '@/components/ContactForm';
import { locales, type Locale } from '@/locales/config';
import { getContactCopy } from '@/locales/contact';

interface ContactPageProps {
    params: { locale: string };
}

export const revalidate = 1800;

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: ContactPageProps): Metadata {
    const locale = params.locale as Locale;
    const copy = getContactCopy(locales.includes(locale) ? locale : locales[0]);

    return {
        title: `${copy.form.title} · Cojauny`
    };
}

export default function ContactPage({ params }: ContactPageProps) {
    const locale = params.locale as Locale;

    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getContactCopy(locale);

    return (
        <section className="mx-auto max-w-6xl px-6 py-24">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">{copy.heading}</h1>
                <p className="mt-4 text-lg text-slate-600">{copy.intro}</p>
                <p className="mt-6 rounded-3xl border border-brand-100 bg-brand-50 px-6 py-3 text-sm font-medium text-brand-700">
                    {copy.banner}
                </p>
            </div>
            <div className="mx-auto mt-12 max-w-3xl">
                <ContactForm locale={locale} copy={copy.form} />
            </div>
        </section>
    );
}
