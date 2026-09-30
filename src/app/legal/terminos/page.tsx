import { siteMetadata } from '@/lib/site';
import { redirect } from 'next/navigation';

import { defaultLocale } from '@/locales/config';

export const metadata = {
    metadataBase: new URL(siteMetadata.url),
    title: 'Términos y condiciones'
};

export default function TermsPage() {
    redirect(`/${defaultLocale}/legal/terms`);
}
