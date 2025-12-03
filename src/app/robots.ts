import type { MetadataRoute } from 'next';

import { siteMetadata } from '@/lib/site';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/']
    },
    sitemap: `${siteMetadata.url.replace(/\/$/, '')}/sitemap.xml`
  };
}
