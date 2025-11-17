import type { Locale } from '@/locales/config';

export interface BlogPost {
  slug: string;
  locale: Locale;
  title: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  heroWidth: number;
  heroHeight: number;
  body: string[];
  tags: string[];
  categories: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
  readingTimeMinutes: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'coordinacion-taxi-aeropuerto',
    locale: 'es',
    title: 'Coordina tu taxi al aeropuerto con tu mismo vuelo',
    summary:
      'Guía rápida para que el pasaje comparta taxis o traslados privados sin perder tiempo ni privacidad.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Pasajeros compartiendo taxi rumbo al aeropuerto',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      'Explicamos cómo crear un evento de vuelo en Cojauny, invitar a tus compañeros de reserva y elegir franjas de recogida basadas en el tráfico real.',
      'También incluimos una checklist para negociar tarifas cerradas con operadores locales y dividir el coste en la app.'
    ],
    tags: ['movilidad', 'taxi compartido', 'aeropuerto'],
    categories: ['operations', 'product'],
    publishedAt: '2025-11-10T08:00:00.000Z',
    updatedAt: '2025-11-10T08:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 5
  },
  {
    slug: 'share-airport-ride',
    locale: 'en',
    title: 'How to share airport rides with your same flight',
    summary:
      'Actionable framework to align passengers, lock the pickup point and split transfers before the trip begins.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Travelers organizing airport ride on their phones',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      'We cover pre-flight coordination, recommended chat prompts and how to keep the channel live offline during the flight.',
      'Use the downloadable checklist ({{PLACEHOLDER_ASSET_URL}}) to brief the group before boarding.'
    ],
    tags: ['airport ride', 'travel planning'],
    categories: ['operations'],
    publishedAt: '2025-11-10T08:00:00.000Z',
    updatedAt: '2025-11-10T08:00:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 6
  },
  {
    slug: 'navette-aeroport-partagee',
    locale: 'fr',
    title: 'Navette aéroport partagée entre passagers du même vol',
    summary:
      'Conseils pour réduire les coûts en partageant taxi, VTC ou parking longue durée avec Cojauny.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Voyageurs français organisant une navette partagée',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      "Découvrez comment configurer un salon temporaire Cojauny, verrouiller le point de rencontre et suivre l'arrivée du chauffeur.",
      "Ajoutez vos propres conseils tarifaires dans la checklist afin d'éviter les malentendus à l'arrivée."
    ],
    tags: ['navette', 'aéroport', 'mobilité partagée'],
    categories: ['product'],
    publishedAt: '2025-11-12T09:00:00.000Z',
    updatedAt: '2025-11-12T09:00:00.000Z',
    author: 'Équipe Cojauny',
    readingTimeMinutes: 4
  },
  {
    slug: 'flughafenfahrt-teilen',
    locale: 'de',
    title: 'So teilst du die Fahrt zum Flughafen mit deinem Flug',
    summary:
      'Best Practices für Business-Teams, die am selben Flug teilnehmen und ihre Transfers bündeln möchten.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Deutsche Reisende stimmen ihren Transfer ab',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      'Wir erklären, wie du Slots für Fahrer erstellst, jemanden als Moderator festlegst und auch nach der Landung synchron bleibst.',
      'Nutze die Vorlage {{PLACEHOLDER_DOC_URL}} als Pflichtbriefing für internationale Crews.'
    ],
    tags: ['reiseplanung', 'fahrgemeinschaft'],
    categories: ['operations'],
    publishedAt: '2025-11-15T10:00:00.000Z',
    updatedAt: '2025-11-15T10:00:00.000Z',
    author: 'Cojauny Team DACH',
    readingTimeMinutes: 7
  }
];

export const getPostsByLocale = (locale: Locale) => blogPosts.filter((post) => post.locale === locale);

export const getPost = (locale: Locale, slug: string) =>
  blogPosts.find((post) => post.locale === locale && post.slug === slug);
