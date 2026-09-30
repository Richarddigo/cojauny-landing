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
    metaDescription: (airportName, city) => `Prepara tu traslado en ${city}: compara opciones para ${airportName} y conoce la propuesta de Cojauny, actualmente en preparación de beta.`,
    eyebrow: "Planes de traslado · Beta en preparación",
    title: (city, iata) => `Traslado compartido al aeropuerto de ${city} (${iata})`,
    intro: (airportName, city) => `Cojauny prepara una beta para conectar a personas con planes compatibles. Para tu traslado en ${city} y ${airportName}, confirma transporte, rutas y horarios con el operador; esta página no acredita cobertura activa.`,
    benefitsTitle: "La propuesta de Cojauny para tu traslado",
    benefits: ["Comparar opciones de transporte y rutas compatibles", "Acordar equipaje, destino y hora antes de salir", "Elegir un punto de encuentro público y autorizado", "Repartir el precio acordado sin promesas de ahorro"],
    ctaTitle: 'Solicita acceso beta',
    ctaBody: "Únete a la lista de espera. La disponibilidad en este aeropuerto se confirmará durante la beta.",
    ctaButton: "Apuntarme a la lista",
    backLabel: 'Volver a la landing',
    otherAirportsTitle: 'Otros aeropuertos',
  },
  en: {
    metaTitle: (city, iata) => `Shared airport transfer in ${city} (${iata}) | Cojauny`,
    metaDescription: (airportName, city) => `Plan your ${city} transfer: compare options for ${airportName} and explore the Cojauny proposal, currently preparing for beta.`,
    eyebrow: "Transfer planning · Beta in preparation",
    title: (city, iata) => `Shared airport transfer in ${city} (${iata})`,
    intro: (airportName, city) => `Cojauny is preparing a beta to connect people with compatible plans. For ${city} and ${airportName}, confirm transport, routes and timings with the operator; this page does not establish active coverage.`,
    benefitsTitle: "The Cojauny proposal for your transfer",
    benefits: ["Compare transport options and compatible routes", "Agree on luggage, destination and timing beforehand", "Choose a public, permitted meeting point", "Split the agreed total without guaranteed savings"],
    ctaTitle: 'Request beta access',
    ctaBody: "Join the waitlist. Coverage at this airport will be confirmed during the beta.",
    ctaButton: "Join the waitlist",
    backLabel: 'Back to landing',
    otherAirportsTitle: 'Other airports',
  },
  de: {
    metaTitle: (city, iata) => `Geteilter Flughafentransfer in ${city} (${iata}) | Cojauny`,
    metaDescription: (airportName, city) => `Plane deinen Transfer in ${city}: Vergleiche Angebote für ${airportName} und lerne die Cojauny-Idee kennen. Die Beta wird vorbereitet.`,
    eyebrow: "Transferplanung · Beta in Vorbereitung",
    title: (city, iata) => `Geteilter Flughafentransfer in ${city} (${iata})`,
    intro: (airportName, city) => `Cojauny bereitet eine Beta für Menschen mit passenden Reiseplänen vor. Kläre für ${city} und ${airportName} Transport, Route und Zeiten beim Anbieter; diese Seite bestätigt keine aktive Verfügbarkeit.`,
    benefitsTitle: "Die Cojauny-Idee für deinen Transfer",
    benefits: ["Transportangebote und passende Routen vergleichen", "Gepäck, Ziel und Zeit vorab vereinbaren", "Einen öffentlichen, erlaubten Treffpunkt wählen", "Den vereinbarten Preis ohne Spargarantie teilen"],
    ctaTitle: 'Beta-Zugang anfordern',
    ctaBody: "Trag dich in die Warteliste ein. Die Verfügbarkeit an diesem Flughafen wird während der Beta geklärt.",
    ctaButton: "Zur Warteliste",
    backLabel: 'Zurück zur Landingpage',
    otherAirportsTitle: 'Weitere Flughäfen',
  },
  fr: {
    metaTitle: (city, iata) => `Transfert aéroport partagé à ${city} (${iata}) | Cojauny`,
    metaDescription: (airportName, city) => `Préparez votre transfert à ${city} : comparez les solutions pour ${airportName} et découvrez le projet Cojauny, dont la bêta est en préparation.`,
    eyebrow: "Préparer le transfert · Bêta en préparation",
    title: (city, iata) => `Transfert aéroport partagé à ${city} (${iata})`,
    intro: (airportName, city) => `Cojauny prépare une bêta pour relier des personnes aux projets compatibles. Pour ${city} et ${airportName}, confirmez transports, trajets et horaires auprès du transporteur ; cette page ne prouve pas une disponibilité active.`,
    benefitsTitle: "Le projet Cojauny pour votre transfert",
    benefits: ["Comparer les transports et les trajets compatibles", "Convenir des bagages, de la destination et de l’heure", "Choisir un rendez-vous public et autorisé", "Partager le total convenu sans économie garantie"],
    ctaTitle: 'Demander l\'accès bêta',
    ctaBody: "Inscrivez-vous sur la liste d’attente. La disponibilité dans cet aéroport sera confirmée pendant la bêta.",
    ctaButton: "Rejoindre la liste",
    backLabel: 'Retour à la landing',
    otherAirportsTitle: 'Autres aéroports',
  },
};

export function getAirportPageCopy(locale: Locale): AirportPageCopy {
  return airportPageCopy[locale];
}
