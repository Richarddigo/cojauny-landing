import { redirect } from 'next/navigation';

import { defaultLocale } from '@/locales/config';

export const metadata = {
    title: 'Términos y condiciones'
};

export default function TermsPage() {
    redirect(`/${defaultLocale}/legal/terms`);
}
