import type { MetadataRoute } from 'next';

import { siteMetadata } from '@/lib/site';

const staticRoutes = [
  '',
  '/legal/privacidad',
  '/legal/cookies',
  '/legal/terminos',
  '/docs/sdk-plan'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteMetadata.url.replace(/\/$/, '');
  return staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'monthly',
    priority: route === '' ? 1 : 0.6
  }));
}
