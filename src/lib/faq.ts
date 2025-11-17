import type { Locale } from '@/locales/config';
import { defaultLocale } from '@/locales/config';

export interface FaqEntry {
  question: string;
  answer: string;
}

const faqEntries: Record<Locale, FaqEntry[]> = {
  es: [
    {
      question: '¿Cómo protege Cojauny la privacidad de los pasajeros?',
      answer:
        'Solo compartimos nombre y foto cuando aceptas unirte a un traslado. Los chats caducan 48 horas después del despegue para evitar historiales permanentes.'
    },
    {
      question: '¿Puedo coordinar transportes en diferentes aeropuertos?',
      answer:
        'Sí. Crea un evento por vuelo y Cojauny sincroniza horarios de ida y vuelta, incluso si cambias de aeropuerto entre conexiones.'
    },
    {
      question: '¿Dónde obtengo datos reales de ahorro?',
      answer:
        'Descarga el informe CSV en la app y reemplaza los campos {{PLACEHOLDER_FARE_SOURCE}} con datos oficiales de Google Maps, Uber o la autoridad local.'
    }
  ],
  en: [
    {
      question: 'How does Cojauny keep passenger data private?',
      answer:
        'Only confirmed ride members see your name and optional photo. Chats self-destruct 48 hours after take-off so nothing persists.'
    },
    {
      question: 'Can we coordinate rides in multiple airports?',
      answer:
        'Absolutely. Create one flight event per leg and Cojauny links outbound and inbound windows even if airports differ.'
    },
    {
      question: 'Where do I pull real savings data?',
      answer:
        'Use the CSV export and replace {{PLACEHOLDER_FARE_SOURCE}} with official fares from Google Maps, Uber, local taxi regulators or SAP Concur reports.'
    }
  ],
  de: [
    {
      question: 'Wie schützt Cojauny personenbezogene Daten?',
      answer:
        'Nur bestätigte Teilnehmer sehen deinen Namen und optional ein Foto. Der Chat löscht sich 48 Stunden nach Abflug automatisch.'
    },
    {
      question: 'Kann ich Transfers an mehreren Flughäfen planen?',
      answer:
        'Ja. Lege pro Flug ein Event an und Cojauny verknüpft Hin- und Rückweg, selbst wenn du unterschiedliche Airports nutzt.'
    },
    {
      question: 'Woher bekomme ich echte Kostendaten?',
      answer:
        'Nutze den CSV-Export und ergänze {{PLACEHOLDER_FARE_SOURCE}} mit Tarifen aus Google Maps, Uber oder lokalen Taxiordnungen.'
    }
  ],
  fr: [
    {
      question: 'Comment Cojauny protège les données des passagers ?',
      answer:
        'Seuls les membres confirmés voient votre nom et, si vous le souhaitez, votre photo. Les discussions disparaissent 48 h après le décollage.'
    },
    {
      question: 'Peut-on coordonner plusieurs aéroports ?',
      answer:
        'Oui. Créez un événement par vol et Cojauny relie les trajets aller/retour, même si les aéroports sont différents.'
    },
    {
      question: "Où trouver des données d'économies réelles ?",
      answer:
        'Exportez le fichier CSV et remplacez {{PLACEHOLDER_FARE_SOURCE}} par des tarifs officiels Google Maps, Uber, taxis locaux ou rapports SAP Concur.'
    }
  ]
};

export const getFaqEntries = (locale: Locale) => faqEntries[locale] ?? faqEntries[defaultLocale];
