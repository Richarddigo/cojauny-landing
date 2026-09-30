import { siteMetadata } from '@/lib/site';
import { redirect } from 'next/navigation';

import { defaultLocale } from '@/locales/config';

export const metadata = {
    metadataBase: new URL(siteMetadata.url),
    title: 'Política de privacidad'
};

export default function PrivacyPage() {
    redirect(`/${defaultLocale}/legal/privacy`);
}
