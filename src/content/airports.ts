import type { Locale } from '@/locales/config';

export interface Airport {
  slug: string;
  iata: string;
  city: Record<Locale, string>;
  airportName: Record<Locale, string>;
}

/** Featured hubs for long-tail SEO landing pages. Expand incrementally from demand data. */
export const featuredAirports: Airport[] = [
  {
    slug: 'madrid-barajas',
    iata: 'MAD',
    city: { es: 'Madrid', en: 'Madrid', de: 'Madrid', fr: 'Madrid' },
    airportName: {
      es: 'Aeropuerto Adolfo Suárez Madrid-Barajas',
      en: 'Adolfo Suárez Madrid-Barajas Airport',
      de: 'Flughafen Adolfo Suárez Madrid-Barajas',
      fr: 'Aéroport Adolfo Suárez Madrid-Barajas',
    },
  },
  {
    slug: 'barcelona-el-prat',
    iata: 'BCN',
    city: { es: 'Barcelona', en: 'Barcelona', de: 'Barcelona', fr: 'Barcelone' },
    airportName: {
      es: 'Aeropuerto Josep Tarradellas Barcelona-El Prat',
      en: 'Josep Tarradellas Barcelona-El Prat Airport',
      de: 'Flughafen Josep Tarradellas Barcelona-El Prat',
      fr: 'Aéroport Josep Tarradellas Barcelona-El Prat',
    },
  },
  {
    slug: 'london-heathrow',
    iata: 'LHR',
    city: { es: 'Londres', en: 'London', de: 'London', fr: 'Londres' },
    airportName: {
      es: 'Aeropuerto de Londres-Heathrow',
      en: 'London Heathrow Airport',
      de: 'Flughafen London Heathrow',
      fr: 'Aéroport de Londres Heathrow',
    },
  },
  {
    slug: 'paris-charles-de-gaulle',
    iata: 'CDG',
    city: { es: 'París', en: 'Paris', de: 'Paris', fr: 'Paris' },
    airportName: {
      es: 'Aeropuerto de París-Charles de Gaulle',
      en: 'Paris Charles de Gaulle Airport',
      de: 'Flughafen Paris Charles de Gaulle',
      fr: 'Aéroport Paris Charles de Gaulle',
    },
  },
  {
    slug: 'new-york-jfk',
    iata: 'JFK',
    city: { es: 'Nueva York', en: 'New York', de: 'New York', fr: 'New York' },
    airportName: {
      es: 'Aeropuerto Internacional John F. Kennedy',
      en: 'John F. Kennedy International Airport',
      de: 'John F. Kennedy International Airport',
      fr: 'Aéroport international John F. Kennedy',
    },
  },
  {
    slug: 'frankfurt',
    iata: 'FRA',
    city: { es: 'Fráncfort', en: 'Frankfurt', de: 'Frankfurt', fr: 'Francfort' },
    airportName: {
      es: 'Aeropuerto de Fráncfort',
      en: 'Frankfurt Airport',
      de: 'Flughafen Frankfurt',
      fr: 'Aéroport de Francfort',
    },
  },
  {
    slug: 'amsterdam-schiphol',
    iata: 'AMS',
    city: { es: 'Ámsterdam', en: 'Amsterdam', de: 'Amsterdam', fr: 'Amsterdam' },
    airportName: {
      es: 'Aeropuerto de Ámsterdam-Schiphol',
      en: 'Amsterdam Schiphol Airport',
      de: 'Flughafen Amsterdam Schiphol',
      fr: 'Aéroport d\'Amsterdam Schiphol',
    },
  },
  {
    slug: 'munich',
    iata: 'MUC',
    city: { es: 'Múnich', en: 'Munich', de: 'München', fr: 'Munich' },
    airportName: {
      es: 'Aeropuerto de Múnich',
      en: 'Munich Airport',
      de: 'Flughafen München',
      fr: 'Aéroport de Munich',
    },
  },
  {
    slug: 'rome-fiumicino',
    iata: 'FCO',
    city: { es: 'Roma', en: 'Rome', de: 'Rom', fr: 'Rome' },
    airportName: {
      es: 'Aeropuerto de Roma-Fiumicino',
      en: 'Rome Fiumicino Airport',
      de: 'Flughafen Rom Fiumicino',
      fr: 'Aéroport de Rome Fiumicino',
    },
  },
  {
    slug: 'dubai',
    iata: 'DXB',
    city: { es: 'Dubái', en: 'Dubai', de: 'Dubai', fr: 'Dubaï' },
    airportName: {
      es: 'Aeropuerto Internacional de Dubái',
      en: 'Dubai International Airport',
      de: 'Dubai International Airport',
      fr: 'Aéroport international de Dubaï',
    },
  },
];

export function getAirportBySlug(slug: string): Airport | undefined {
  return featuredAirports.find((airport) => airport.slug === slug);
}
