/**
 * @deprecated Use Next.js `src/app/sitemap.ts` as the source of truth.
 * This script remains for manual XML export only.
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

import sitemap from '../src/app/sitemap';

const entries = sitemap();
const now = new Date().toISOString();

const chunks = entries.map(
  (entry) => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${(entry.lastModified ?? now).toString()}</lastmod>
    <changefreq>${entry.changeFrequency ?? 'monthly'}</changefreq>
    <priority>${(entry.priority ?? 0.5).toFixed(1)}</priority>
  </url>`,
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunks.join('\n')}
</urlset>`;

const outDir = join(process.cwd(), 'public');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'sitemap-manual.xml'), xml.trim());
console.log(`Wrote public/sitemap-manual.xml (${entries.length} URLs)`);
