'use client';

import { useEffect } from 'react';
import type { Locale } from '@/locales/config';

/** Syncs document lang with the active locale for SEO and screen readers. */
export default function LocaleDocumentLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
