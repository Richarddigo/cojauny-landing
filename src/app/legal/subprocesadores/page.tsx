import { siteMetadata } from '@/lib/site';
export const metadata = { metadataBase: new URL(siteMetadata.url) };
import { redirect } from 'next/navigation';
import { defaultLocale } from '@/locales/config';

export default function SubprocessorsLegacy() {
    redirect(`/${defaultLocale}/legal/subprocessors`);
}
