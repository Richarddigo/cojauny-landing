import type { Locale } from '@/locales/config';
import { defaultLocale } from '@/locales/config';
import { getLandingCopy } from '@/locales/copy';

export interface FaqEntry {
  question: string;
  answer: string;
}

/** Single FAQ source: landing copy shown in FaqSection and JSON-LD. */
export const getFaqEntries = (locale: Locale): FaqEntry[] => {
  const copy = getLandingCopy(locale);
  return copy.faq.items;
};

export const getDefaultFaqEntries = (): FaqEntry[] =>
  getFaqEntries(defaultLocale);
