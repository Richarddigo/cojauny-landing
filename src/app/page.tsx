import { redirect } from 'next/navigation';

import { defaultLocale } from '@/locales/config';

export default function Page() {
    redirect(`/${defaultLocale}`);
}
