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
}

const blogCopy: Record<Locale, BlogCopy> = {
  es: {
    meta: {
      title: 'Blog Cojauny · Movilidad inteligente para tus viajes',
      description:
        'Consejos prácticos para compartir transporte con compañeros de vuelo y ahorrar en tus traslados al aeropuerto.',
      ogTitle: 'Blog Cojauny · Movilidad colaborativa en vuelos',
      ogDescription:
        'Casos reales, tácticas operativas y novedades para coordinar tu transporte puerta a puerta.'
    },
    heading: 'Movilidad inteligente para viajeros',
    subtitle:
      'Tácticas probadas para coordinar transporte antes y después del vuelo.',
    empty: 'Pronto publicaremos nuevos artículos. Únete a la beta para leerlos antes que nadie.',
    readTimeLabel: 'min de lectura',
    updatedLabel: 'Actualizado',
    backLabel: 'Volver al blog',
    shareLabel: 'Comparte este artículo'
  },
  en: {
    meta: {
      title: 'Cojauny Blog · Smart Mobility for Air Travel',
      description:
        'Coordinate airport transfers with fellow passengers, cut costs, and stay synced before boarding.',
      ogTitle: 'Cojauny Blog · Smarter Airport Rides',
      ogDescription:
        'Case studies, travel ops tactics, and product updates to master door-to-gate transport.'
    },
    heading: 'Smart Mobility Insights',
    subtitle:
      'Proven strategies for coordinating shared transport on the same flight.',
    empty: 'New articles coming soon. Join the beta to get early access.',
    readTimeLabel: 'min read',
    updatedLabel: 'Updated',
    backLabel: 'Back to blog',
    shareLabel: 'Share this article'
  },
  de: {
    meta: {
      title: 'Cojauny Blog · Smarte Mobilität für Flugreisen',
      description:
        'Koordiniere Flughafentransfers mit Mitreisenden, senke Kosten und bleib vor dem Boarding informiert.',
      ogTitle: 'Cojauny Blog · Effiziente Flughafentransfers',
      ogDescription:
        'Fallstudien, Taktiken und Produkt-News für die perfekte Koordination von Tür zu Gate.'
    },
    heading: 'Einblicke in smarte Mobilität',
    subtitle:
      'Bewährte Strategien für die Koordination gemeinsamer Fahrten rund um den Flug.',
    empty: 'Neue Artikel kommen bald. Melde dich zur Beta an für Vorab-Zugriff.',
    readTimeLabel: 'Min. Lesezeit',
    updatedLabel: 'Aktualisiert',
    backLabel: 'Zurück zum Blog',
    shareLabel: 'Artikel teilen'
  },
  fr: {
    meta: {
      title: "Blog Cojauny · Mobilité Intelligente pour vos Voyages",
      description:
        "Coordonnez vos transferts aéroport avec d'autres passagers, réduisez les coûts et restez synchronisés.",
      ogTitle: "Blog Cojauny · Mobilité Aérienne Partagée",
      ogDescription:
        'Études de cas, tactiques opérationnelles et nouveautés pour maîtriser vos trajets porte-à-porte.'
    },
    heading: 'Stratégies de Mobilité',
    subtitle:
      "Tactiques éprouvées pour coordonner le transport partagé sur un même vol.",
    empty: 'Nouveaux articles bientôt disponibles. Rejoignez la bêta pour un accès prioritaire.',
    readTimeLabel: 'min de lecture',
    updatedLabel: 'Mis à jour',
    backLabel: 'Retour au blog',
    shareLabel: "Partager l'article"
  }
};

export const getBlogCopy = (locale: Locale): BlogCopy => blogCopy[locale] ?? blogCopy[defaultLocale];
