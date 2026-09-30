import { siteMetadata } from '@/lib/site';
import { redirect } from 'next/navigation';

import { defaultLocale } from '@/locales/config';

export const metadata = {
    metadataBase: new URL(siteMetadata.url),
    title: 'Plan de integración SDK'
};

export default function SdkPlanPage() {
    redirect(`/${defaultLocale}/docs/sdk-plan`);
}
