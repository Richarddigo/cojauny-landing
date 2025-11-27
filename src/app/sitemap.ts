import type { MetadataRoute } from 'next';

import { siteMetadata } from '@/lib/site';
import { locales } from '@/locales/config';
import { blogPosts } from '@/content/blog/posts';

const localeAwarePaths = ['/', '/contact', '/docs/sdk-plan'];
const legalPaths = ['/legal/privacy', '/legal/cookies', '/legal/terms', '/legal/acceptable-use', '/legal/faq', '/legal/subprocessors'];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteMetadata.url.replace(/\/$/, '');
  const lastModified = new Date();

  const localizedEntries = locales.flatMap((locale) =>
    [...localeAwarePaths, ...legalPaths].map((path) => ({
      url: `${base}/${locale}${path === '/' ? '' : path}`,
      lastModified,
      changeFrequency: (path === '/' ? 'daily' : 'monthly') as 'daily' | 'monthly',
      priority: path === '/' ? 1 : 0.7
    }))
  );

  const blogEntries = blogPosts.map((post) => ({
    url: `${base}/${post.locale}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  // Maintain legacy static routes for backwards compatibility
  const legacyRoutes = ['/legal/privacidad', '/legal/cookies', '/legal/terminos', '/legal/uso-aceptable', '/legal/faq', '/legal/subprocesadores'].map((route) => ({
    url: `${base}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.4
  }));

  const defaultEntries = [
    {
      url: base,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 1
    },
    {
      url: `${base}/contact`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6
    }
  ];

  return [...defaultEntries, ...localizedEntries, ...blogEntries, ...legacyRoutes];
}
