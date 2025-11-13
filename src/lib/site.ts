import { env } from './env';

export const siteMetadata = {
  name: 'Cojauny',
  shortName: 'Cojauny',
  description:
    'Gestiona invitaciones, listas de espera y experiencias de movilidad colaborativa con la app de Cojauny.',
  url: 'https://cojauny.com',
  currentSiteUrl: env.CURRENT_SITE_URL ?? 'https://ejemplo.com',
  locale: 'es_ES',
  author: 'Equipo Cojauny',
  twitter: '@cojauny',
  primaryColor: '#5a67f2',
  secondaryColor: '#121754',
  appStoreUrl: '#',
  playStoreUrl: '#',
  contactEmail: 'hola@cojauny.com'
};

export const ogImages = [
  {
    url: `${siteMetadata.url}/images/og-default.svg`,
    width: 1200,
    height: 630,
    alt: 'Cojauny - movilidad colaborativa',
    type: 'image/svg+xml'
  }
];

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: siteMetadata.name,
  operatingSystem: 'iOS, Android',
  applicationCategory: 'BusinessApplication',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '87'
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR'
  },
  url: siteMetadata.url,
  publisher: {
    '@type': 'Organization',
    name: 'Cojauny',
    logo: {
      '@type': 'ImageObject',
      url: `${siteMetadata.url}/icons/icon.svg`
    }
  }
};
