import { getMessages } from 'next-intl/server';

import type { BlogCopy } from '@/locales/blog';
import type { CommonCopy } from '@/locales/common';
import type { Locale } from '@/locales/config';
import type { LandingCopy } from '@/locales/copy';
import type { DocsCopy } from '@/locales/docs';
import type { ExtendedLegalCopy } from '@/locales/legal';

export interface AppMessages {
  common: CommonCopy;
  landing: LandingCopy;
  blog: BlogCopy;
  docs: DocsCopy;
  legal: ExtendedLegalCopy;
}

/**
 * Typed accessor for namespaces currently produced by src/i18n/messages.ts.
 * This keeps page-level migration to next-intl incremental and explicit.
 */
export async function getAppMessages(locale: Locale): Promise<AppMessages> {
  const messages = await getMessages({ locale });
  return messages as unknown as AppMessages;
}
