import type { MetadataRoute } from 'next';

import { allBlogPosts } from '@/content/blog/posts';
import { featuredAirports } from '@/content/airports';
import { buildCanonicalUrl } from '@/lib/jsonld';
import { locales } from '@/locales/config';

export const dynamic = 'force-static';

const localeAwarePaths = ['/', '/docs/sdk-plan', '/airports'];
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
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1 : 0.7
    }))
  );

  const blogEntries = allBlogPosts.map((post) => ({
    url: buildCanonicalUrl(post.locale as (typeof locales)[number], `/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  const airportEntries = locales.flatMap((locale) =>
    featuredAirports.map((airport) => ({
      url: buildCanonicalUrl(locale, `/airports/${airport.slug}`),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.75
    }))
  );

  const seen = new Set<string>();
  return [...localizedEntries, ...blogEntries, ...airportEntries].filter((entry) => {
    if (seen.has(entry.url)) {
      return false;
    }
    seen.add(entry.url);
    return true;
  });
}
