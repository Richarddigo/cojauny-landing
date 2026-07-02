import { writeFileSync } from 'fs';
import { join } from 'path';

/**
 * Validates JSON-LD schemas against Schema.org spec
 * Run: npm run seo:validate-jsonld
 */

import { buildOrganizationJsonLd, buildWebsiteJsonLd, buildSoftwareAppJsonLd, buildFaqJsonLd, buildBreadcrumbJsonLd, buildArticleJsonLd } from '../src/lib/jsonld';
import { locales } from '../src/locales/config';
import { getLandingCopy } from '../src/locales/copy';

const schemas = [];

// Organization
schemas.push({
  name: 'Organization',
  schema: buildOrganizationJsonLd()
});

// Website per locale
locales.forEach(locale => {
  schemas.push({
    name: `WebSite-${locale}`,
    schema: buildWebsiteJsonLd(locale)
  });
});

// SoftwareApplication per locale
locales.forEach(locale => {
  schemas.push({
    name: `SoftwareApplication-${locale}`,
    schema: buildSoftwareAppJsonLd(locale)
  });
});

// FAQPage per locale — sourced from the same landing copy that powers FaqSection,
// so the structured data never drifts from what's visible on the page.
locales.forEach(locale => {
  const faqItems = getLandingCopy(locale).faq.items;
  schemas.push({
    name: `FAQPage-${locale}`,
    schema: buildFaqJsonLd(faqItems)
  });
});

// Breadcrumb example
schemas.push({
  name: 'BreadcrumbList-example',
  schema: buildBreadcrumbJsonLd('es', [
    { name: 'Cojauny', absoluteUrl: 'https://cojauny.com' },
    { name: 'Blog', path: '/blog' }
  ])
});

// Article example
schemas.push({
  name: 'Article-example',
  schema: buildArticleJsonLd('es', {
    title: 'Cómo coordinar un transporte compartido antes de despegar',
    description: 'Checklist operativo para agrupar pasajeros del mismo vuelo',
    slug: 'coordinacion-transporte-aeropuerto-compartido',
    categories: ['operations', 'product'],
    heroImage: { src: '/images/blog/shared-ride.svg', width: 1280, height: 720 },
    publishedAt: '2025-10-12T08:00:00.000Z',
    updatedAt: '2025-11-05T08:00:00.000Z',
    author: 'Equipo Cojauny'
  })
});

// Validate and report
const report = schemas.map(({ name, schema }) => {
  const errors = [];
  
  // Basic validation
  if (!schema['@context']) errors.push('Missing @context');
  if (!schema['@type']) errors.push('Missing @type');
  
  // Check for placeholders
  const stringified = JSON.stringify(schema);
  const placeholders = stringified.match(/\{\{PLACEHOLDER_[^}]+\}\}/g) || [];
  
  return {
    name,
    valid: errors.length === 0,
    errors,
    placeholders,
    schema
  };
});

// Write report
const outputPath = join(process.cwd(), 'docs', 'jsonld-validation-report.json');
writeFileSync(outputPath, JSON.stringify(report, null, 2));

// Summary
const totalSchemas = report.length;
const validSchemas = report.filter(r => r.valid).length;
const totalPlaceholders = report.reduce((acc, r) => acc + r.placeholders.length, 0);

if (totalPlaceholders > 0) {
  report.forEach(r => {
    if (r.placeholders.length > 0) {
    }
  });
}

// Exit with error if any schema is invalid
if (validSchemas < totalSchemas) {
  process.exit(1);
}
