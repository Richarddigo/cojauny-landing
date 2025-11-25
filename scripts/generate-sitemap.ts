import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

import { siteMetadata } from '@/lib/site';
import { locales } from '@/locales/config';
import { blogPosts } from '@/content/blog/posts';

const base = siteMetadata.url.replace(/\/$/, '');
const now = new Date().toISOString();

const localeAwarePaths = ['/', '/contact', '/docs/sdk-plan'];
const legalPaths = ['/legal/privacy', '/legal/cookies', '/legal/terms'];

const buildUrlEntry = (loc: string, changefreq: string, priority: number, lastmod = now) => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;

const chunks: string[] = [];
chunks.push(buildUrlEntry(base, 'daily', 1));
chunks.push(buildUrlEntry(`${base}/contact`, 'monthly', 0.6));

locales.forEach((locale) => {
  localeAwarePaths.forEach((path) => {
    const finalPath = `${base}/${locale}${path === '/' ? '' : path}`;
    chunks.push(buildUrlEntry(finalPath, path === '/' ? 'daily' : 'monthly', path === '/' ? 1 : 0.8));
  });

  legalPaths.forEach((path) => {
    chunks.push(buildUrlEntry(`${base}/${locale}${path}`, 'monthly', 0.7));
  });
});

blogPosts.forEach((post) => {
  chunks.push(
    buildUrlEntry(
      `${base}/${post.locale}/blog/${post.slug}`,
      'monthly',
      0.6,
      new Date(post.updatedAt).toISOString()
    )
  );
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunks.join('\n')}
</urlset>`;

const outDir = join(process.cwd(), 'public');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'sitemap-manual.xml'), xml.trim());
