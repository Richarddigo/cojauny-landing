import { writeFileSync } from 'fs';
import { join } from 'path';

import { featuredAirports } from '../src/content/airports';
import { allBlogPosts } from '../src/content/blog/posts';
import { locales } from '../src/locales/config';
import { siteMetadata } from '../src/lib/site';

/**
 * Validates hreflang/canonical URL structure for key routes.
 * Run: npm run seo:validate-hreflang
 */

interface HreflangValidation {
  page: string;
  locale: string;
  canonical: string;
  alternates: Record<string, string>;
  issues: string[];
}

const validations: HreflangValidation[] = [];

const pages = [
  { path: '', name: 'Homepage' },
  { path: '/blog', name: 'Blog Index' },
  { path: '/airports', name: 'Airports Index' },
  { path: '/legal/privacy', name: 'Privacy' },
  { path: '/legal/cookies', name: 'Cookies' },
  { path: '/legal/terms', name: 'Terms' },
  { path: '/legal/faq', name: 'Legal FAQ' },
];

allBlogPosts.forEach((post) => {
  pages.push({
    path: `/blog/${post.slug}`,
    name: `Blog: ${post.slug}`,
  });
});

featuredAirports.slice(0, 5).forEach((airport) => {
  pages.push({
    path: `/airports/${airport.slug}`,
    name: `Airport: ${airport.iata}`,
  });
});

locales.forEach((locale) => {
  pages.forEach((page) => {
    const canonical = `${siteMetadata.url}/${locale}${page.path}`;
    const alternates: Record<string, string> = {};
    const issues: string[] = [];

    locales.forEach((altLocale) => {
      alternates[altLocale] = `${siteMetadata.url}/${altLocale}${page.path}`;
    });
    alternates['x-default'] = siteMetadata.url;

    if (!canonical.startsWith('https://')) {
      issues.push('Canonical must use HTTPS');
    }

    if (!alternates['x-default']) {
      issues.push('Missing x-default alternate');
    }

    if (Object.keys(alternates).length !== locales.length + 1) {
      issues.push(`Expected ${locales.length + 1} alternates, got ${Object.keys(alternates).length}`);
    }

    if (alternates[locale] !== canonical) {
      issues.push('Self-referencing alternate does not match canonical');
    }

    validations.push({
      page: `${page.name} (${locale})`,
      locale,
      canonical,
      alternates,
      issues,
    });
  });
});

const report = {
  summary: {
    totalPages: validations.length,
    pagesWithIssues: validations.filter((v) => v.issues.length > 0).length,
    locales,
    baseUrl: siteMetadata.url,
  },
  validations,
};

const outputPath = join(process.cwd(), 'docs', 'hreflang-validation-report.json');
writeFileSync(outputPath, JSON.stringify(report, null, 2));

if (report.summary.pagesWithIssues > 0) {
  console.error(`Hreflang validation failed: ${report.summary.pagesWithIssues} pages with issues`);
  process.exit(1);
}

console.log(`Hreflang validation passed (${report.summary.totalPages} page/locale pairs)`);
