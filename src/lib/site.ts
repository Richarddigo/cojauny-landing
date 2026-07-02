import { env } from './env';

export const siteMetadata = {
  name: 'Cojauny',
  shortName: 'Cojauny',
  legalName: 'Cojauny Studio - Richard Díaz González',
  description: 'Comparte tu traslado al aeropuerto con gente de tu mismo vuelo: reparte el coste, viaja con compañeros verificados y ahorra en cada trayecto.',
  url: 'https://cojauny.com',
  currentSiteUrl: env.CURRENT_SITE_URL ?? 'https://ejemplo.com',
  locale: 'es_ES', // canonical locale for structured data; per-page locale is set dynamically
  author: 'Cojauny Studio - Richard Díaz González',
  twitter: '@cojauny',
  primaryColor: '#5B7BFF',
  secondaryColor: '#3A59D9',
  appStoreUrl: 'https://cojauny.com/app-store',
  playStoreUrl: 'https://cojauny.com/google-play',
  contactEmail: 'support@cojauny.com',
  socialProfiles: [
    'https://www.linkedin.com/company/cojauny',
    'https://twitter.com/cojauny',
    'https://www.instagram.com/cojaunyapp'
  ]
};

// Las imágenes OG ahora se generan dinámicamente por idioma en:
// - src/app/opengraph-image.tsx (raíz)
// - src/app/[locale]/opengraph-image.tsx (por idioma)
// Next.js las inyecta automáticamente en los metadatos

export const ogImages = [
  {
    url: `${siteMetadata.url}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: 'Cojauny - comparte tu traslado al aeropuerto',
    type: 'image/png'
  }
];

export const hreflangByLocale: Record<string, string> = {
  es: 'es-ES',
  en: 'en-US',
  fr: 'fr-FR',
  de: 'de-DE'
};
