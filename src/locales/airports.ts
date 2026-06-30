import type { Locale } from './config';

export interface AirportPageCopy {
  metaTitle: (city: string, iata: string) => string;
  metaDescription: (airportName: string, city: string) => string;
  eyebrow: string;
  title: (city: string, iata: string) => string;
  intro: (airportName: string, city: string) => string;
  benefitsTitle: string;
  benefits: string[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  backLabel: string;
  otherAirportsTitle: string;
}

const airportPageCopy: Record<Locale, AirportPageCopy> = {
  es: {
    metaTitle: (city, iata) =>
      `Traslado compartido al aeropuerto de ${city} (${iata}) | Cojauny`,
    metaDescription: (airportName, city) =>
      `Comparte taxi o coche al ${airportName} con pasajeros verificados de tu mismo vuelo. Matching por vuelo, perfiles con documento y chat seguro en ${city}.`,
    eyebrow: 'Mismo vuelo · Viajeros verificados',
    title: (city, iata) => `Traslado compartido al aeropuerto de ${city} (${iata})`,
    intro: (airportName, city) =>
      `Cojauny conecta pasajeros del mismo vuelo para compartir transporte al ${airportName}. Conoces con quién viajas antes de salir de casa y reduces el coste de tu traslado en ${city}.`,
    benefitsTitle: 'Por qué usar Cojauny en este aeropuerto',
    benefits: [
      'Matching automático por número de vuelo y fecha',
      'Perfiles verificados con documento y valoraciones visibles',
      'Chat seguro para coordinar punto de encuentro y hora',
      'Ahorro medio del 50-75% frente a ir solo en taxi',
    ],
    ctaTitle: 'Solicita acceso beta',
    ctaBody: 'Únete a la lista de espera y sé de los primeros en probar Cojauny en tu aeropuerto.',
    ctaButton: 'Reservar plaza beta',
    backLabel: 'Volver a la landing',
    otherAirportsTitle: 'Otros aeropuertos',
  },
  en: {
    metaTitle: (city, iata) => `Shared airport transfer in ${city} (${iata}) | Cojauny`,
    metaDescription: (airportName, city) =>
      `Share rides to ${airportName} with verified passengers on your exact flight. Flight matching, ID-verified profiles, and secure chat in ${city}.`,
    eyebrow: 'Same flight · Verified travelers',
    title: (city, iata) => `Shared airport transfer in ${city} (${iata})`,
    intro: (airportName, city) =>
      `Cojauny matches passengers on the same flight to share transport to ${airportName}. Know who you ride with before you leave home and cut transfer costs in ${city}.`,
    benefitsTitle: 'Why use Cojauny at this airport',
    benefits: [
      'Automatic matching by flight number and date',
      'ID-verified profiles with visible star ratings',
      'Secure chat to coordinate pickup point and time',
      'Average 50-75% savings vs riding alone in a taxi',
    ],
    ctaTitle: 'Request beta access',
    ctaBody: 'Join the waitlist and be among the first to try Cojauny at your airport.',
    ctaButton: 'Reserve beta spot',
    backLabel: 'Back to landing',
    otherAirportsTitle: 'Other airports',
  },
  de: {
    metaTitle: (city, iata) => `Geteilter Flughafentransfer in ${city} (${iata}) | Cojauny`,
    metaDescription: (airportName, city) =>
      `Teile Fahrten zum ${airportName} mit verifizierten Passagieren auf deinem Flug. Flug-Matching, verifizierte Profile und sicherer Chat in ${city}.`,
    eyebrow: 'Gleicher Flug · Verifizierte Reisende',
    title: (city, iata) => `Geteilter Flughafentransfer in ${city} (${iata})`,
    intro: (airportName, city) =>
      `Cojauny verbindet Passagiere auf dem gleichen Flug für geteilten Transport zum ${airportName}. Du weißt, mit wem du fährst, bevor du das Haus verlässt, und sparst Transferkosten in ${city}.`,
    benefitsTitle: 'Warum Cojauny an diesem Flughafen',
    benefits: [
      'Automatisches Matching nach Flugnummer und Datum',
      'Verifizierte Profile mit sichtbaren Sternebewertungen',
      'Sicherer Chat zur Koordination von Treffpunkt und Zeit',
      'Durchschnittlich 50-75% Ersparnis gegenüber Solo-Taxi',
    ],
    ctaTitle: 'Beta-Zugang anfordern',
    ctaBody: 'Trage dich in die Warteliste ein und teste Cojauny früh an deinem Flughafen.',
    ctaButton: 'Beta-Platz reservieren',
    backLabel: 'Zurück zur Landingpage',
    otherAirportsTitle: 'Weitere Flughäfen',
  },
  fr: {
    metaTitle: (city, iata) => `Transfert aéroport partagé à ${city} (${iata}) | Cojauny`,
    metaDescription: (airportName, city) =>
      `Partagez un trajet vers ${airportName} avec des passagers vérifiés sur votre vol. Matching par vol, profils vérifiés et chat sécurisé à ${city}.`,
    eyebrow: 'Même vol · Voyageurs vérifiés',
    title: (city, iata) => `Transfert aéroport partagé à ${city} (${iata})`,
    intro: (airportName, city) =>
      `Cojauny connecte les passagers du même vol pour partager le transport vers ${airportName}. Vous savez avec qui vous voyagez avant de partir et réduisez le coût du transfert à ${city}.`,
    benefitsTitle: 'Pourquoi utiliser Cojauny à cet aéroport',
    benefits: [
      'Matching automatique par numéro de vol et date',
      'Profils vérifiés avec évaluations visibles',
      'Chat sécurisé pour coordonner lieu et heure de rendez-vous',
      'Économie moyenne de 50-75% par rapport à un taxi seul',
    ],
    ctaTitle: 'Demander l\'accès bêta',
    ctaBody: 'Rejoignez la liste d\'attente et soyez parmi les premiers à tester Cojauny à votre aéroport.',
    ctaButton: 'Réserver une place bêta',
    backLabel: 'Retour à la landing',
    otherAirportsTitle: 'Autres aéroports',
  },
};

export function getAirportPageCopy(locale: Locale): AirportPageCopy {
  return airportPageCopy[locale];
}
