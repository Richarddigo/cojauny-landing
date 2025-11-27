import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import LegalSubprocessors from '@/components/LegalSubprocessors';
import { locales, type Locale } from '@/locales/config';
import { getLegalCopy } from '@/locales/legal';

interface SubprocessorsPageProps {
    params: { locale: string };
}

export function generateMetadata({ params }: SubprocessorsPageProps): Metadata {
    const locale = params.locale as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getLegalCopy(locale).subprocessors;

    return {
        title: copy.title,
        description: copy.intro
    };
}

const SubprocessorsPage = ({ params }: SubprocessorsPageProps) => {
    const locale = params.locale as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = getLegalCopy(locale).subprocessors;

    return <LegalSubprocessors copy={copy} />;
};

export default SubprocessorsPage;
