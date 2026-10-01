import type { Locale } from './config';
import { defaultLocale } from './config';

interface BlogMetaCopy {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export interface BlogCopy {
  meta: BlogMetaCopy;
  heading: string;
  subtitle: string;
  empty: string;
  readTimeLabel: string;
  updatedLabel: string;
  backLabel: string;
  shareLabel: string;
  readMoreLabel: string;
  categoryFallback: string;
}

const blogCopy: Record<Locale, BlogCopy> = {
  es: {
    meta: {
      title: 'Blog Cojauny · Movilidad inteligente para tus viajes',
      description:
        'Consejos para elegir compañeros, cuidar tu privacidad y planificar el traslado con margen. Comparte el viaje con más confianza y también sus costes.',
      ogTitle: 'Blog Cojauny · Confianza y privacidad al viajar',
      ogDescription:
        'Elige compañeros con información, cuida tus datos y prepara la llegada con margen. También puedes compartir gastos.'
    },
    heading: 'Llega con un plan',
    subtitle:
      'Guías sobre confianza entre viajeros, privacidad y llegadas con margen. El ahorro también tiene su lugar.',
    empty: 'Pronto publicaremos nuevos artículos. Únete a la beta para leerlos antes que nadie.',
    readTimeLabel: 'min de lectura',
    updatedLabel: 'Actualizado',
    backLabel: 'Volver al blog',
    shareLabel: 'Comparte este artículo',
    readMoreLabel: 'Leer más',
    categoryFallback: 'Blog'
  },
  en: {
    meta: {
      title: 'Cojauny Blog · Smart Mobility for Air Travel',
      description:
        'Advice on choosing companions, protecting your privacy and planning transfers with time to spare. Share with more confidence and split the cost, too.',
      ogTitle: 'Cojauny Blog · Travel Confidence and Privacy',
      ogDescription:
        'Make informed choices about companions, look after your data and plan your arrival with time to spare. Share costs, too.'
    },
    heading: 'Arrive with a plan',
    subtitle:
      'Guides to trust between travellers, privacy and planning an arrival with time to spare. Saving money is part of the journey, too.',
    empty: 'New articles coming soon. Join the beta to get early access.',
    readTimeLabel: 'min read',
    updatedLabel: 'Updated',
    backLabel: 'Back to blog',
    shareLabel: 'Share this article',
    readMoreLabel: 'Read more',
    categoryFallback: 'Blog'
  },
  de: {
    meta: {
      title: 'Cojauny Blog · Smarte Mobilität für Flugreisen',
      description:
        'Tipps zur Wahl von Mitreisenden, zum Schutz deiner Privatsphäre und zur Planung mit Zeitreserve. Mit mehr Vertrauen reisen und auch Kosten teilen.',
      ogTitle: 'Cojauny Blog · Vertrauen und Privatsphäre auf Reisen',
      ogDescription:
        'Wähle Mitreisende informiert, achte auf deine Daten und plane die Ankunft mit Zeitreserve. Teile auch die Kosten.'
    },
    heading: 'Mit einem Plan ankommen',
    subtitle:
      'Tipps zu Vertrauen zwischen Reisenden, Privatsphäre und Ankunft mit Zeitreserve. Auch die Ersparnis kommt nicht zu kurz.',
    empty: 'Neue Artikel kommen bald. Melde dich zur Beta an für Vorab-Zugriff.',
    readTimeLabel: 'Min. Lesezeit',
    updatedLabel: 'Aktualisiert',
    backLabel: 'Zurück zum Blog',
    shareLabel: 'Artikel teilen',
    readMoreLabel: 'Weiterlesen',
    categoryFallback: 'Blog'
  },
  fr: {
    meta: {
      title: "Blog Cojauny · Mobilité Intelligente pour vos Voyages",
      description:
        "Conseils pour choisir vos compagnons, préserver votre vie privée et prévoir une marge à l’arrivée. Partagez avec plus de confiance, et répartissez aussi les frais.",
      ogTitle: "Blog Cojauny · Confiance et confidentialité en voyage",
      ogDescription:
        'Choisissez vos compagnons en connaissance de cause, préservez vos données et prévoyez une marge à l’arrivée. Partagez aussi les frais.'
    },
    heading: 'Arrivez avec un plan',
    subtitle:
      "Des guides sur la confiance entre voyageurs, la confidentialité et les arrivées avec une marge de temps. Les économies gardent aussi leur place.",
    empty: 'Nouveaux articles bientôt disponibles. Rejoignez la bêta pour un accès prioritaire.',
    readTimeLabel: 'min de lecture',
    updatedLabel: 'Mis à jour',
    backLabel: 'Retour au blog',
    shareLabel: "Partager l'article",
    readMoreLabel: 'Lire la suite',
    categoryFallback: 'Blog'
  }
};

export const getBlogCopy = (locale: Locale): BlogCopy => blogCopy[locale] ?? blogCopy[defaultLocale];
