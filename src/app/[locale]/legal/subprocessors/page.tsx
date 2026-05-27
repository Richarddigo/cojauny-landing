import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import LegalSubprocessors from '@/components/LegalSubprocessors';
import { getAppMessages } from '@/lib/i18nMessages';
import { locales, type Locale } from '@/locales/config';

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

    const copy = (await getAppMessages(locale)).legal.subprocessors;

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

    const copy = (await getAppMessages(locale)).legal.subprocessors;

    return <LegalSubprocessors copy={copy} />;
};

export default SubprocessorsPage;
