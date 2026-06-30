import { ENABLE_PREMIUM } from '@/lib/flags';
import { filterFaqForPhase } from '@/lib/faqFilters';
import type { Locale } from '@/locales/config';
import { getLandingCopy, type LandingCopy } from '@/locales/copy';

/** Landing copy with phase-aware FAQ (no premium items when premium is disabled). */
export function getLandingCopyForPhase(locale: Locale): LandingCopy {
  const copy = getLandingCopy(locale);

  if (ENABLE_PREMIUM) {
    return copy;
  }

  return {
    ...copy,
    faq: {
      ...copy.faq,
      items: filterFaqForPhase(copy.faq.items),
    },
  };
}
