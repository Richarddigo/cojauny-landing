import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import LegalArticle from '@/components/LegalArticle';
import { Link } from '@/i18n/navigation';
import { getAppMessages } from '@/lib/i18nMessages';
import { locales, type Locale } from '@/locales/config';

interface AccountDeletionPageProps {
    params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: AccountDeletionPageProps): Promise<Metadata> {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = (await getAppMessages(locale)).legal.accountDeletion;

    return {
        title: copy.title,
        description: copy.intro,
        alternates: {
            canonical: '/account-deletion'
        }
    };
}

const relatedLinksLabel: Record<Locale, { privacy: string; terms: string; support: string }> = {
    es: { privacy: 'Política de privacidad', terms: 'Términos de uso', support: 'Soporte' },
    en: { privacy: 'Privacy policy', terms: 'Terms of service', support: 'Support' },
    de: { privacy: 'Datenschutz', terms: 'Nutzungsbedingungen', support: 'Support' },
    fr: { privacy: 'Politique de confidentialité', terms: "Conditions d'utilisation", support: 'Support' }
};

const AccountDeletionPage = async ({ params }: AccountDeletionPageProps) => {
    const { locale: localeParam } = await params;
    const locale = localeParam as Locale;
    if (!locales.includes(locale)) {
        notFound();
    }

    const copy = (await getAppMessages(locale)).legal.accountDeletion;
    const links = relatedLinksLabel[locale];

    return (
        <>
            <LegalArticle copy={copy} />
            <nav
                className="legal-shell -mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 pb-16 text-sm"
                aria-label="Related legal pages"
            >
                <a
                    href="mailto:support@cojauny.com"
                    className="font-medium text-studio-accent underline-offset-2 hover:underline"
                >
                    {links.support}: support@cojauny.com
                </a>
                <Link
                    href="/legal/privacy"
                    className="text-studio-muted underline-offset-2 transition-colors hover:text-white hover:underline"
                >
                    {links.privacy}
                </Link>
                <Link
                    href="/legal/terms"
                    className="text-studio-muted underline-offset-2 transition-colors hover:text-white hover:underline"
                >
                    {links.terms}
                </Link>
            </nav>
        </>
    );
};

export default AccountDeletionPage;
