import { redirect } from 'next/navigation';

import { defaultLocale } from '@/locales/config';

export const metadata = {
    title: 'Política de privacidad'
};

export default function PrivacyPage() {
    redirect(`/${defaultLocale}/legal/privacy`);
}
