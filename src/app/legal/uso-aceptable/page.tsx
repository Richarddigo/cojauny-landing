import { redirect } from 'next/navigation';
import { defaultLocale } from '@/locales/config';

export default function AcceptableUseLegacy() {
    redirect(`/${defaultLocale}/legal/acceptable-use`);
}
