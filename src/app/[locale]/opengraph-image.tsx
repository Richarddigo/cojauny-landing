import { renderSocialImage } from '@/lib/socialImage';
import { locales, type Locale } from '@/locales/config';
export const dynamic = 'force-static';
export const alt = 'Cojauny — airport transfer beta';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export function generateStaticParams() { return locales.map(locale => ({ locale })); }
export default async function Image({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  return renderSocialImage(locales.includes(locale as Locale) ? locale as Locale : 'en');
}
