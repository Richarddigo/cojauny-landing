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
        'Consejos prácticos para compartir transporte con compañeros de vuelo y ahorrar en tus traslados al aeropuerto.',
      ogTitle: 'Blog Cojauny · Movilidad colaborativa en vuelos',
      ogDescription:
        'Guías para planificar la llegada, comparar opciones y compartir los gastos del traslado.'
    },
    heading: 'Llega con un plan',
    subtitle:
      'Consejos para organizar el traslado, compartir gastos y viajar con menos improvisación.',
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
        'Coordinate airport transfers with fellow passengers, cut costs, and stay synced before boarding.',
      ogTitle: 'Cojauny Blog · Smarter Airport Rides',
      ogDescription:
        'Guides to plan your arrival, compare transport options and share the cost of a ride.'
    },
    heading: 'Arrive with a plan',
    subtitle:
      'Practical advice for planning airport rides, sharing costs and travelling with fewer last-minute decisions.',
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
        'Koordiniere Flughafentransfers mit Mitreisenden, senke Kosten und bleib vor dem Boarding informiert.',
      ogTitle: 'Cojauny Blog · Effiziente Flughafentransfers',
      ogDescription:
        'Tipps zur Ankunft, zum Vergleich von Verkehrsmitteln und zum Teilen der Fahrtkosten.'
    },
    heading: 'Mit einem Plan ankommen',
    subtitle:
      'Praktische Tipps für Flughafentransfers, geteilte Kosten und weniger spontane Entscheidungen.',
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
        "Coordonnez vos transferts aéroport avec d'autres passagers, réduisez les coûts et restez synchronisés.",
      ogTitle: "Blog Cojauny · Mobilité Aérienne Partagée",
      ogDescription:
        'Des guides pour préparer votre arrivée, comparer les transports et partager les frais du trajet.'
    },
    heading: 'Arrivez avec un plan',
    subtitle:
      "Des conseils pratiques pour organiser le transfert, partager les frais et éviter d’improviser à l’arrivée.",
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
