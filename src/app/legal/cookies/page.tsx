import { redirect } from 'next/navigation';

import { defaultLocale } from '@/locales/config';

export const metadata = {
    title: 'Política de cookies'
};

export default function CookiesPage() {
    redirect(`/${defaultLocale}/legal/cookies`);
}
