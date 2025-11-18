import { env } from './env';

export const siteMetadata = {
  name: 'Cojauny',
  shortName: 'Cojauny',
  legalName: 'Equipo fundador de Cojauny',
  description: 'Plataforma para coordinar pasajeros del mismo vuelo, compartir taxis o vans y medir ahorro y CO₂ evitado en cada trayecto.',
  url: 'https://cojauny.com',
  currentSiteUrl: env.CURRENT_SITE_URL ?? 'https://ejemplo.com',
  locale: 'es_ES',
  author: 'Equipo Cojauny',
  twitter: '@cojauny',
  primaryColor: '#5a67f2',
  secondaryColor: '#121754',
  appStoreUrl: 'https://cojauny.com/app-store',
  playStoreUrl: 'https://cojauny.com/google-play',
  contactEmail: 'support@cojauny.com',
  socialProfiles: [
    'https://www.linkedin.com/company/cojauny',
    'https://twitter.com/cojauny',
    'https://www.instagram.com/cojaunyapp'
  ]
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

export const hreflangByLocale: Record<string, string> = {
  es: 'es-ES',
  en: 'en-US',
  fr: 'fr-FR',
  de: 'de-DE'
};
