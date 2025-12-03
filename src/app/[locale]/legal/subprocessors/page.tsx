import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import LegalSubprocessors from '@/components/LegalSubprocessors';
import { locales, type Locale } from '@/locales/config';
import { getLegalCopy } from '@/locales/legal';

interface SubprocessorsPageProps {
    params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: SubprocessorsPageProps): Promise<Metadata> {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getLegalCopy(locale).subprocessors;

    return {
        title: copy.title,
        description: copy.intro
    };
}

const SubprocessorsPage = async ({ params }: SubprocessorsPageProps) => {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getLegalCopy(locale).subprocessors;

    return <LegalSubprocessors copy={copy} />;
};

export default SubprocessorsPage;
