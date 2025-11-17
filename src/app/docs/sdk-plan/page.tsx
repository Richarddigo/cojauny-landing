import { redirect } from 'next/navigation';

import { defaultLocale } from '@/locales/config';

export const metadata = {
    title: 'Plan de integración SDK'
};

export default function SdkPlanPage() {
    redirect(`/${defaultLocale}/docs/sdk-plan`);
}
