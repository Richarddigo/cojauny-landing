import { redirect } from 'next/navigation';

import { defaultLocale } from '@/locales/config';

export const metadata = {
    title: 'Contacto'
};

export default function ContactRedirectPage() {
    redirect(`/${defaultLocale}/contact`);
}
