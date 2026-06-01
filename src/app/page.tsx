import { redirect } from 'next/navigation';
import { defaultLocale } from '@/locales/config';

// Fallback for the root path when next-intl middleware (localePrefix: 'as-needed')
// does not redirect — i.e. when the browser accepts the default locale (en).
export default function Page() {
  redirect(`/${defaultLocale}`);
}
