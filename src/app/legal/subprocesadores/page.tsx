import { redirect } from 'next/navigation';
import { defaultLocale } from '@/locales/config';

export default function SubprocessorsLegacy() {
    redirect(`/${defaultLocale}/legal/subprocessors`);
}
