import type { Metadata } from 'next';

import { siteMetadata, hreflangByLocale } from './site';
import { locales, defaultLocale, type Locale } from '@/locales/config';

interface BreadcrumbItem {
  name: string;
  path?: string;
  absoluteUrl?: string;
}

const hrefLangFallback = 'en-US';

export const buildCanonicalUrl = (locale: Locale, path = '') => {
  const normalized = path.replace(/^\/+/g, '').replace(/\/$/, '');
  const suffix = normalized ? `/${normalized}` : '';
  // Default locale (en) has no prefix — localePrefix: 'as-needed'
  return locale === defaultLocale
    ? `${siteMetadata.url}${suffix || '/'}`
    : `${siteMetadata.url}/${locale}${suffix}`;
};

export const buildLocaleAlternates = (locale: Locale, path = ''): Metadata['alternates'] => ({
  canonical: buildCanonicalUrl(locale, path),
  languages: {
    ...Object.fromEntries(locales.map((value) => [value, buildCanonicalUrl(value, path)])),
    'x-default': siteMetadata.url
  }
});

export const buildRobotsMeta = (index = true, follow = true): Metadata['robots'] => ({ index, follow });

export const buildOrganizationJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteMetadata.name,
  legalName: siteMetadata.legalName,
  url: siteMetadata.url,
  // Usar imagen PNG generada dinámicamente para Google (SVG no soportado)
  logo: `${siteMetadata.url}/icon`,
  sameAs: siteMetadata.socialProfiles,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: siteMetadata.contactEmail,
      contactType: 'customer support',
      areaServed: locales.map((value) => hreflangByLocale[value] ?? hrefLangFallback),
      availableLanguage: locales
    }
  ]
});

export const buildWebsiteJsonLd = (locale: Locale) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteMetadata.name,
  url: siteMetadata.url,
  description: siteMetadata.description,
  inLanguage: hreflangByLocale[locale] ?? hrefLangFallback,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteMetadata.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
});

export const buildSoftwareAppJsonLd = (locale: Locale) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: siteMetadata.name,
  description: siteMetadata.description,
  operatingSystem: 'iOS, Android',
  applicationCategory: 'TravelApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '127'
  },
  inLanguage: hreflangByLocale[locale] ?? hrefLangFallback,
  downloadUrl: siteMetadata.playStoreUrl,
  installUrl: siteMetadata.appStoreUrl,
  creator: {
    '@type': 'Organization',
    name: siteMetadata.name
  }
});

export const buildFaqJsonLd = (items: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
});

export const buildBreadcrumbJsonLd = (locale: Locale, items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.absoluteUrl ?? buildCanonicalUrl(locale, item.path ?? '')
  }))
});

export const buildArticleJsonLd = (
  locale: Locale,
  params: {
    title: string;
    description: string;
    slug: string;
    categories: string[];
    heroImage: { src: string; width: number; height: number };
    publishedAt: string;
    updatedAt: string;
    author: string;
  }
) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  mainEntityOfPage: buildCanonicalUrl(locale, `/blog/${params.slug}`),
  headline: params.title,
  description: params.description,
  image: {
    '@type': 'ImageObject',
    url: `${siteMetadata.url}${params.heroImage.src}`,
    width: params.heroImage.width,
    height: params.heroImage.height
  },
  author: {
    '@type': 'Person',
    name: params.author
  },
  publisher: {
    '@type': 'Organization',
    name: siteMetadata.name,
    logo: {
      '@type': 'ImageObject',
        url: `${siteMetadata.url}/icon`
    }
  },
  datePublished: params.publishedAt,
  dateModified: params.updatedAt,
  articleSection: params.categories
});
