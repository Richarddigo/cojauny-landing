import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

import { blogPosts } from '../src/content/blog/posts';
import { siteMetadata } from '../src/lib/site';

function escapeCdata(input: string) {
  return `<![CDATA[${input.replace(/]]>/g, ']]]]><![CDATA[>')}]]>`;
}

function buildRss() {
  const base = (siteMetadata?.url || 'https://example.com').replace(/\/$/, '');
  const lastBuildDate = new Date().toUTCString();

  const items = blogPosts
    .map((post) => {
      const link = `${base}/${post.locale}/blog/${post.slug}`;
      return `  <item>\n    <title>${escapeCdata(post.title)}</title>\n    <link>${link}</link>\n    <guid isPermaLink="false">${link}</guid>\n    <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>\n    <description>${escapeCdata(post.summary || '')}</description>\n  </item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n<channel>\n  <title>${escapeCdata(siteMetadata.name || 'Site')}</title>\n  <link>${base}</link>\n  <description>${escapeCdata(siteMetadata.description || '')}</description>\n  <lastBuildDate>${lastBuildDate}</lastBuildDate>\n${items}\n</channel>\n</rss>\n`;

  return rss;
}

function writeRssToPublic() {
  const outDir = resolve(process.cwd(), 'public');
  mkdirSync(outDir, { recursive: true });
  const outPath = resolve(outDir, 'rss.xml');
  const content = buildRss();
  writeFileSync(outPath, content, 'utf8');
  console.log(`Generated ${outPath}`);
}

if (require.main === module) {
  try {
    writeRssToPublic();
  } catch (err) {
    console.error('Failed to generate RSS:', err);
    process.exit(1);
  }
}

export { buildRss, writeRssToPublic };
