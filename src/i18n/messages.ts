import { getBlogCopy } from '@/locales/blog';
import { getCommonCopy } from '@/locales/common';
import type { Locale } from '@/locales/config';
import { getDocsCopy } from '@/locales/docs';
import { getLegalCopy } from '@/locales/legal';
import { getLandingCopyForPhase } from '@/lib/landingCopy';

/**
 * Bridge layer for incremental next-intl migration.
 * `copy.ts` remains source-of-truth; JSON mirrors are generated via `npm run i18n:sync`.
 */
export function getLocaleMessages(locale: Locale) {
  return {
    common: getCommonCopy(locale),
    landing: getLandingCopyForPhase(locale),
    blog: getBlogCopy(locale),
    docs: getDocsCopy(locale),
    legal: getLegalCopy(locale),
  };
}
