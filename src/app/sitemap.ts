import type { MetadataRoute } from 'next';

import { blogPosts } from '@/content/blog/posts';
import { buildCanonicalUrl } from '@/lib/jsonld';
import { locales } from '@/locales/config';

export const dynamic = 'force-static';

const localeAwarePaths = ['/', '/docs/sdk-plan'];
const legalPaths = [
  '/account-deletion',
  '/legal/privacy',
  '/legal/cookies',
  '/legal/terms',
  '/legal/acceptable-use',
  '/legal/faq',
  '/legal/subprocessors'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const localizedEntries = locales.flatMap((locale) =>
    [...localeAwarePaths, ...legalPaths].map((path) => ({
      url: buildCanonicalUrl(locale, path === '/' ? '' : path),
      lastModified,
      changeFrequency: (path === '/' ? 'daily' : 'monthly') as 'daily' | 'monthly',
      priority: path === '/' ? 1 : 0.7
    }))
  );

  const blogEntries = blogPosts.map((post) => ({
    url: buildCanonicalUrl(post.locale as (typeof locales)[number], `/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  const seen = new Set<string>();
  return [...localizedEntries, ...blogEntries].filter((entry) => {
    if (seen.has(entry.url)) {
      return false;
    }
    seen.add(entry.url);
    return true;
  });
}
