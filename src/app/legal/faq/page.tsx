import { redirect } from 'next/navigation';
import { defaultLocale } from '@/locales/config';

export default function FaqLegacy() {
    redirect(`/${defaultLocale}/legal/faq`);
}
