import { writeFileSync } from 'fs';
import { join } from 'path';

import { locales } from '../src/locales/config';
import { getLocaleMessages } from '../src/i18n/messages';

/**
 * Mirrors TypeScript locale dictionaries into messages/*.json for translators.
 * Source of truth remains copy.ts / common.ts / legal.ts until full cutover.
 */
const outDir = join(process.cwd(), 'messages');

for (const locale of locales) {
  const messages = getLocaleMessages(locale);
  writeFileSync(join(outDir, `${locale}.json`), `${JSON.stringify(messages, null, 2)}\n`);
  console.log(`Synced messages/${locale}.json`);
}
