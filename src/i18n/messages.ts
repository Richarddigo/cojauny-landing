import { getBlogCopy } from '@/locales/blog';
import { getCommonCopy } from '@/locales/common';
import { getContactCopy } from '@/locales/contact';
import type { Locale } from '@/locales/config';
import { getDocsCopy } from '@/locales/docs';
import { getLegalCopy } from '@/locales/legal';
import { getLandingCopy } from '@/locales/copy';

/**
 * Bridge layer for incremental next-intl migration.
 * Existing locale dictionaries remain source-of-truth while components move to namespaces.
 */
export function getLocaleMessages(locale: Locale) {
  return {
    common: getCommonCopy(locale),
    landing: getLandingCopy(locale),
    blog: getBlogCopy(locale),
    contact: getContactCopy(locale),
    docs: getDocsCopy(locale),
    legal: getLegalCopy(locale),
  };
}
