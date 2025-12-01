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
      title: 'Blog de Cojauny · Guías para coordinar traslados a aeropuertos',
      description:
        'Consejos prácticos para compartir taxis, coordinar ride-sharing entre pasajeros de un mismo vuelo y reducir costes puerta a puerta.',
      ogTitle: 'Blog Cojauny · Movilidad colaborativa para vuelos',
      ogDescription:
        'Lee casos reales, tácticas de operación y novedades del producto para coordinar traslados con tu vuelo.'
    },
    heading: 'Historias y tácticas de movilidad aérea',
    subtitle:
      'Estrategias aplicables para equipos de viaje y pasajeros que quieren compartir transporte antes y después del vuelo.',
    empty: 'Pronto publicaremos más artículos. Suscríbete a la beta para recibirlos antes.',
    readTimeLabel: 'min de lectura',
    updatedLabel: 'Actualizado',
    backLabel: 'Volver al blog',
    shareLabel: 'Comparte este artículo'
  },
  en: {
    meta: {
      title: 'Cojauny Blog · Airport ride-sharing intelligence',
      description:
        'Playbooks to coordinate airport transfers with fellow passengers, reduce costs and keep everyone informed before boarding.',
      ogTitle: 'Cojauny Blog · Smarter airport rides',
      ogDescription:
        'Discover case studies, travel ops tactics and product updates to orchestrate door-to-gate transport.'
    },
    heading: 'Insights for flight-based mobility',
    subtitle:
      'Actionable guidance for travel teams and passengers who coordinate transport with people on the same flight.',
    empty: 'New articles are on the way. Join the beta to receive them first.',
    readTimeLabel: 'min read',
    updatedLabel: 'Updated',
    backLabel: 'Back to blog',
    shareLabel: 'Share this article'
  },
  de: {
    meta: {
      title: 'Cojauny Blog · Flughafentransfers gemeinsam optimieren',
      description:
        'Praxisnahe Tipps, wie Reisende desselben Fluges Taxi, Shuttle oder Privatwagen gemeinsam planen und Kosten senken.',
      ogTitle: 'Cojauny Blog · Effiziente Flughafentransfers',
      ogDescription:
        'Fallstudien, Prozess-Tipps und Produkt-News für Teams, die Fahrten rund um den Flug koordinieren.'
    },
    heading: 'Impulse für flugbasierte Mobilität',
    subtitle:
      'Handfeste Strategien für Reiseteams und Passagiere, die sich vor und nach dem Flug abstimmen möchten.',
    empty: 'Weitere Artikel folgen in Kürze. Melde dich zur Beta an, um sie zuerst zu erhalten.',
    readTimeLabel: 'Min. Lesezeit',
    updatedLabel: 'Aktualisiert',
    backLabel: 'Zurück zum Blog',
    shareLabel: 'Artikel teilen'
  },
  fr: {
    meta: {
      title: "Blog Cojauny · Partage de trajets vers l'aéroport",
      description:
        "Guides pour coordonner taxis ou VTC entre passagers d'un même vol, gagner du temps et maîtriser les coûts.",
      ogTitle: "Blog Cojauny · Mobilité aérienne partagée",
      ogDescription:
        'Cas pratiques, conseils opérationnels et nouveautés produit pour orchestrer les trajets porte-à-porte.'
    },
    heading: 'Savoir-faire pour la mobilité autour du vol',
    subtitle:
      "Recommandations concrètes pour les équipes voyage et passagers qui partagent leur transport vers l'aéroport.",
    empty: 'De nouveaux articles arrivent bientôt. Rejoignez la bêta pour les recevoir en priorité.',
    readTimeLabel: 'min de lecture',
    updatedLabel: 'Mis à jour',
    backLabel: 'Retour au blog',
    shareLabel: "Partager l'article"
  }
};

export const getBlogCopy = (locale: Locale): BlogCopy => blogCopy[locale] ?? blogCopy[defaultLocale];
