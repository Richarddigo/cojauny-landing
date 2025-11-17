import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { locales } from '../src/locales/config';
import { siteMetadata } from '../src/lib/site';
import { blogPosts } from '../src/content/blog/posts';

/**
 * Validates hreflang tags structure and canonical URLs
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

// Pages to validate
const pages = [
  { path: '', name: 'Homepage' },
  { path: '/contact', name: 'Contact' },
  { path: '/blog', name: 'Blog Index' },
  { path: '/legal/privacy', name: 'Privacy' },
  { path: '/legal/cookies', name: 'Cookies' },
  { path: '/legal/terms', name: 'Terms' }
];

// Add blog posts
blogPosts.forEach(post => {
  pages.push({
    path: `/blog/${post.slug}`,
    name: `Blog: ${post.slug}`
  });
});

// Validate each page/locale combination
locales.forEach(locale => {
  pages.forEach(page => {
    const canonical = `${siteMetadata.url}/${locale}${page.path}`;
    const alternates: Record<string, string> = {};
    const issues: string[] = [];

    // Build expected alternates
    locales.forEach(altLocale => {
      alternates[altLocale] = `${siteMetadata.url}/${altLocale}${page.path}`;
    });
    alternates['x-default'] = siteMetadata.url;

    // Validation rules
    if (!canonical.startsWith('https://')) {
      issues.push('Canonical must use HTTPS');
    }

    if (canonical.includes('//')) {
      const doubleSlashes = canonical.match(/(?<!:)\/\//g);
      if (doubleSlashes && doubleSlashes.length > 0) {
        issues.push('Canonical contains double slashes');
      }
    }

    if (!alternates['x-default']) {
      issues.push('Missing x-default alternate');
    }

    if (Object.keys(alternates).length !== locales.length + 1) {
      issues.push(`Expected ${locales.length + 1} alternates, got ${Object.keys(alternates).length}`);
    }

    // Check self-reference
    if (alternates[locale] !== canonical) {
      issues.push('Self-referencing alternate does not match canonical');
    }

    validations.push({
      page: `${page.name} (${locale})`,
      locale,
      canonical,
      alternates,
      issues
    });
  });
});

// Generate report
const report = {
  summary: {
    totalPages: validations.length,
    pagesWithIssues: validations.filter(v => v.issues.length > 0).length,
    locales: locales,
    baseUrl: siteMetadata.url
  },
  validations
};

const outputPath = join(process.cwd(), 'docs', 'hreflang-validation-report.json');
writeFileSync(outputPath, JSON.stringify(report, null, 2));

console.log('✅ Hreflang validation complete');
console.log(`📄 Report saved to: ${outputPath}`);

// Summary
console.log(`\n📊 Summary:`);
console.log(`   Total pages validated: ${report.summary.totalPages}`);
console.log(`   Pages with issues: ${report.summary.pagesWithIssues}`);
console.log(`   Locales: ${report.summary.locales.join(', ')}`);

if (report.summary.pagesWithIssues > 0) {
  console.log(`\n⚠️  Issues found:`);
  validations
    .filter(v => v.issues.length > 0)
    .forEach(v => {
      console.log(`   ${v.page}:`);
      v.issues.forEach(issue => console.log(`      - ${issue}`));
    });
  
  console.error('\n❌ Fix hreflang issues before deploying.');
  process.exit(1);
}

console.log('\n✨ All hreflang tags are valid!');
console.log('💡 Next step: Deploy and verify in Google Search Console > International Targeting');
