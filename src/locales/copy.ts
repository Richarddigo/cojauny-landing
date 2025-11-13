import type { ComponentType, ComponentPropsWithoutRef } from 'react';
import {
  BoltIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  SparklesIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

import type { Locale } from './config';
import { defaultLocale, locales } from './config';

type Heroicon = ComponentType<ComponentPropsWithoutRef<'svg'>>;

export interface FeatureCopy {
  title: string;
  description: string;
  icon: Heroicon;
}

export interface MockupScreenCopy {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
}

export interface FormCopy {
  title: string;
  description: string;
  success: string;
  error: string;
  submit: string;
  checkboxLabel?: string;
  privacyLinkLabel?: string;
  fields: {
    fullName?: string;
    email: string;
    company?: string;
    useCase?: string;
    sentiment?: string;
    message?: string;
    selectPlaceholder?: string;
  };
  sentimentOptions?: Array<{ value: string; label: string }>;
}

export interface LandingCopy {
  skipLink: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: FeatureCopy[];
  };
  mockups: {
    heading: string;
    description: string;
    screens: MockupScreenCopy[];
  };
  ctaStrip: {
    heading: string;
    body: string;
    link: string;
    linkLabel: string;
  };
  forms: {
    beta: FormCopy;
    feedback: FormCopy;
  };
  cookie: {
    message: string;
    acceptAll: string;
    reject: string;
    moreInfo: string;
  };
  footer: {
    description: string;
    rights: string;
    appStoreSoon: string;
    playStoreSoon: string;
    privacy: string;
    cookies: string;
    terms: string;
    contact: string;
    languageLabel: string;
  };
}

const baseFeatures = {
  mobility: BoltIcon,
  groupSaver: UsersIcon,
  ephemeralChat: ChatBubbleLeftRightIcon,
  privacy: ShieldCheckIcon,
  automation: SparklesIcon,
  global: GlobeAltIcon
};

export const landingCopy: Record<Locale, LandingCopy> = {
  es: {
    skipLink: 'Saltar al contenido principal',
    seo: {
      title: 'Cojauny · Coordina transporte compartido con tus compañeros de vuelo',
      description:
        'Cojauny ayuda a los pasajeros de un mismo vuelo a organizar taxi, rideshare o parking compartido antes y después del viaje. Chat temporal, eventos por vuelo y ahorros en un solo lugar.',
      keywords: [
        'transporte compartido',
        'coordinar aeropuerto',
        'carpooling aéreo',
        'chat temporal',
        'ahorro taxi aeropuerto'
      ],
      ogTitle: 'Cojauny · Transporte compartido para tu vuelo',
      ogDescription:
        'Crea eventos por vuelo, coordina transporte ida y vuelta y ahorra en taxis, Uber o parking con Cojauny.'
    },
    hero: {
      eyebrow: 'Coordinación inteligente para tu vuelo',
      title: 'Comparte transporte al aeropuerto con quien ya viaja contigo',
      subtitle:
        'Cojauny conecta pasajeros del mismo billete para que coordinen taxis, Uber o parking en minutos. Sin grupos eternos ni redes sociales, solo lo necesario para ahorrar coste y tiempo.',
      primaryCta: 'Solicitar acceso beta',
      secondaryCta: 'Ver demo interactiva',
      imageAlt: 'Pantallas de Cojauny mostrando ahorro por vuelo en un iPhone'
    },
    features: {
      title: 'Organiza desplazamientos sin fricción',
      subtitle:
        'Centraliza eventos por vuelo, chat temporal y recomendaciones de coste para que el trayecto al aeropuerto sea colaborativo y seguro.',
      items: [
        {
          title: 'Eventos por vuelo',
          description:
            'Genera eventos con origen/destino, franjas horarias y participantes confirmados. Cojauny sugiere combinaciones óptimas y ahorros estimados.',
          icon: baseFeatures.mobility
        },
        {
          title: 'Chat que caduca en 48h',
          description:
            'Coordina detalles en un chat que se elimina automáticamente después del vuelo. Comparte ubicación, estado del tráfico o cambios de puerta sin dejar rastro permanente.',
          icon: baseFeatures.ephemeralChat
        },
        {
          title: 'Ahorro transparente',
          description:
            'Calcula cuánto ahorra cada pasajero frente a un trayecto individual para taxi, Uber, coche privado o parking de larga estancia.',
          icon: baseFeatures.groupSaver
        },
        {
          title: 'Privacidad y control',
          description:
            'Comparte datos mínimos y decide si quieres intercambiar redes sociales o mantener la coordinación dentro de Cojauny. Todo cifrado siguiendo GDPR.',
          icon: baseFeatures.privacy
        }
      ]
    },
    mockups: {
      heading: 'Una app pensada para tomar decisiones rápidas',
      description:
        'Explora las pantallas clave de Cojauny: inicio con vuelos activos, creación de eventos compartidos, chat temporal y ajustes de privacidad.',
      screens: [
        {
          id: 'home',
          badge: 'Home',
          title: 'Resumen de vuelos y ahorros',
          description:
            'Consulta vuelos próximos, nivel de ocupación y estimaciones de ahorro antes de unirte a un trayecto.',
          image: '/images/mockups/mockup-home.svg'
        },
        {
          id: 'event',
          badge: 'Evento',
          title: 'Organiza transporte en minutos',
          description:
            'Crea eventos con hora de encuentro, modo de transporte recomendado y plazas disponibles.',
          image: '/images/mockups/mockup-event.svg'
        },
        {
          id: 'chat',
          badge: 'Chat 48h',
          title: 'Chat temporal, sin ruido',
          description:
            'Coordina cambios de última hora y comparte la ubicación del conductor. El chat desaparece 48h después del vuelo.',
          image: '/images/mockups/mockup-chat.svg'
        },
        {
          id: 'settings',
          badge: 'Privacidad',
          title: 'Control granular de datos',
          description:
            'Elige qué datos mostrar, añade métodos de pago compartido y conecta tus redes solo si quieres.',
          image: '/images/mockups/mockup-settings.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Prepara tu integración con aerolíneas o programas de fidelización',
      body: 'Incluimos SDK móvil, API REST y panel para operaciones. Todo listo para integrarse con tus sistemas actuales.',
      link: '/docs/sdk-plan',
      linkLabel: 'Ver plan técnico'
    },
    forms: {
      beta: {
        title: 'Únete a la beta privada',
        description:
          'Prioridad para aerolíneas, agencias de viaje corporativas y equipos de operaciones que quieran validar Cojauny con pasajeros reales.',
        success:
          '¡Gracias! Te enviaremos un correo desde beta@cojauny.com con tu token de activación.',
        error: 'No se pudo enviar tu solicitud. Inténtalo de nuevo en unos minutos.',
        submit: 'Solicitar acceso',
        checkboxLabel: 'Acepto la {privacyLink} y el tratamiento de mis datos para coordinar la beta.',
        privacyLinkLabel: 'política de privacidad',
        fields: {
          fullName: 'Nombre completo',
          email: 'Correo profesional',
          company: 'Organización o aerolínea',
          useCase: '¿Cómo quieres usar Cojauny?'
        }
      },
      feedback: {
        title: 'Cuéntanos tu caso de uso',
        description:
          '¿Gestionas transfer colectivos? ¿Quieres mejorar la experiencia de pasajeros corporativos? Comparte detalles y te responderemos desde feedback@cojauny.com.',
        success: 'Gracias por tu feedback. Te escribiremos en la misma dirección si necesitamos más contexto.',
        error: 'No se pudo enviar el feedback. Revisa los datos o inténtalo más tarde.',
        submit: 'Enviar feedback',
        fields: {
          fullName: 'Nombre',
          email: 'Correo',
          message: 'Cuéntanos más',
          sentiment: 'Tipo de feedback',
          selectPlaceholder: 'Selecciona una opción'
        },
        sentimentOptions: [
          { value: 'positive', label: 'Estoy listo para probar' },
          { value: 'neutral', label: 'Necesito más información' },
          { value: 'negative', label: 'Tengo dudas importantes' }
        ]
      }
    },
    cookie: {
      message:
        'Usamos cookies esenciales y analíticas opcionales para entender cómo se usa Cojauny. Puedes aceptarlas o seguir navegando solo con las imprescindibles.',
      acceptAll: 'Aceptar',
      reject: 'Rechazar',
      moreInfo: 'Más información'
    },
    footer: {
      description: 'Cojauny coordina transporte compartido para pasajeros que ya comparten vuelo. Sin fricciones, sin redes sociales permanentes.',
      rights: 'Todos los derechos reservados.',
      appStoreSoon: 'App Store (próximamente)',
      playStoreSoon: 'Google Play (próximamente)',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      terms: 'Términos',
      contact: 'Contacto',
      languageLabel: 'Idioma'
    }
  },
  en: {
    skipLink: 'Skip to main content',
    seo: {
      title: 'Cojauny · Coordinate airport rides with your flight companions',
      description:
        'Cojauny helps passengers on the same flight organise shared taxis, rideshare or parking before and after the trip. Flight-based events, 48h chat and transparent savings in one place.',
      keywords: [
        'airport ride sharing',
        'flight coordination',
        'group taxi airport',
        'temporary chat',
        'travel cost savings'
      ],
      ogTitle: 'Cojauny · Shared transport for your flight',
      ogDescription:
        'Create flight events, coordinate rides to the airport and cut costs on taxis, Uber or parking with Cojauny.'
    },
    hero: {
      eyebrow: 'Smart coordination for your flight',
      title: 'Share airport transport with people already on your ticket',
      subtitle:
        'Cojauny connects travellers on the same flight so they can organise taxis, rideshares or parking in minutes. No permanent groups, no social network—only the essentials to save money and time.',
      primaryCta: 'Request beta access',
      secondaryCta: 'View interactive demo',
      imageAlt: 'Cojauny app mockups showing ride savings on an iPhone'
    },
    features: {
      title: 'Manage every ride without friction',
      subtitle:
        'Bring flight events, temporary chat and cost insights together so passengers travel collaboratively and safely.',
      items: [
        {
          title: 'Flight based events',
          description:
            'Create events with meeting point, time slots and seats. Cojauny suggests optimal combinations and estimated savings per passenger.',
          icon: baseFeatures.mobility
        },
        {
          title: '48h ephemeral chat',
          description:
            'Coordinate in a chat that self-destructs 48 hours after take-off. Share live location, traffic status or gate changes without endless threads.',
          icon: baseFeatures.ephemeralChat
        },
        {
          title: 'Transparent savings',
          description:
            'Show how much each passenger saves compared with travelling alone—taxi, Uber, private car or long-term parking.',
          icon: baseFeatures.groupSaver
        },
        {
          title: 'Privacy-first control',
          description:
            'Share the minimum data required and decide whether to exchange social handles. Everything is encrypted and GDPR compliant.',
          icon: baseFeatures.privacy
        }
      ]
    },
    mockups: {
      heading: 'Designed for rapid decisions',
      description:
        'Explore Cojauny’s key flows: home dashboard, shared transport event creation, temporary chat and privacy settings.',
      screens: [
        {
          id: 'home',
          badge: 'Home',
          title: 'Upcoming rides & savings',
          description:
            'See upcoming flights, seat availability and saving estimates before joining.',
          image: '/images/mockups/mockup-home.svg'
        },
        {
          id: 'event',
          badge: 'Event',
          title: 'Plan a ride in minutes',
          description:
            'Choose transport mode, meeting time and who picks up travellers. Everyone stays in sync.',
          image: '/images/mockups/mockup-event.svg'
        },
        {
          id: 'chat',
          badge: '48h chat',
          title: 'Stay aligned without noise',
          description:
            'Share updates and live driver position. Chats vanish 48h after the flight.',
          image: '/images/mockups/mockup-chat.svg'
        },
        {
          id: 'settings',
          badge: 'Privacy',
          title: 'Granular data & payments',
          description:
            'Control what other passengers can see and add shared payment methods only when necessary.',
          image: '/images/mockups/mockup-settings.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Ready for airline and loyalty integrations',
      body: 'We provide SDKs, REST API and an operations console so your team can integrate Cojauny quickly.',
      link: '/docs/sdk-plan',
      linkLabel: 'See technical plan'
    },
    forms: {
      beta: {
        title: 'Join the private beta',
        description:
          'Priority for airlines, corporate travel and mobility teams wanting to validate shared rides with real passengers.',
        success:
          'Thanks! You will receive an email from beta@cojauny.com with your activation token.',
        error: 'We could not send your request. Please try again in a moment.',
        submit: 'Request access',
        checkboxLabel: 'I accept the {privacyLink} and consent to data processing for the beta.',
        privacyLinkLabel: 'privacy policy',
        fields: {
          fullName: 'Full name',
          email: 'Work email',
          company: 'Organization or airline',
          useCase: 'How do you plan to use Cojauny?'
        }
      },
      feedback: {
        title: 'Share your use case',
        description:
          'Managing group transfers or premium passengers? Tell us more and we will reply from feedback@cojauny.com.',
        success:
          'Thanks for the feedback. We will reach out using the same address if we need more context.',
        error: 'We could not submit your feedback. Check the fields and try again.',
        submit: 'Send feedback',
        fields: {
          fullName: 'Name',
          email: 'Email',
          message: 'Tell us more',
          sentiment: 'Feedback type',
          selectPlaceholder: 'Select an option'
        },
        sentimentOptions: [
          { value: 'positive', label: 'Ready to pilot' },
          { value: 'neutral', label: 'Need more information' },
          { value: 'negative', label: 'I have blockers' }
        ]
      }
    },
    cookie: {
      message:
        'We use essential cookies and optional analytics to understand how Cojauny is used. Accept them or continue with only the required ones.',
      acceptAll: 'Accept',
      reject: 'Reject',
      moreInfo: 'More info'
    },
    footer: {
      description:
        'Cojauny coordinates shared rides for passengers already on the same flight. No permanent networks, just practical collaboration.',
      rights: 'All rights reserved.',
      appStoreSoon: 'App Store (coming soon)',
      playStoreSoon: 'Google Play (coming soon)',
      privacy: 'Privacy',
      cookies: 'Cookies',
      terms: 'Terms',
      contact: 'Contact',
      languageLabel: 'Language'
    }
  },
  de: {
    skipLink: 'Zum Hauptinhalt springen',
    seo: {
      title: 'Cojauny · Gemeinsame Fahrten zum Flughafen mit Mitreisenden planen',
      description:
        'Cojauny verbindet Passagiere desselben Fluges, um Taxi, Fahrgemeinschaft oder Parkplatz vor und nach dem Flug zu organisieren. Flugbasierte Events, 48h-Chat und transparente Ersparnisse.',
      keywords: [
        'flughafen fahrgemeinschaft',
        'flug koordination',
        'taxi teilen flughafen',
        'temporärer chat',
        'reisekosten sparen'
      ],
      ogTitle: 'Cojauny · Gemeinsame Fahrten für deinen Flug',
      ogDescription:
        'Erstelle Flug-Events, koordiniere Fahrten zum Flughafen und spare bei Taxi, Uber oder Parkplatz mit Cojauny.'
    },
    hero: {
      eyebrow: 'Intelligente Koordination für deinen Flug',
      title: 'Teile die Fahrt zum Flughafen mit deinen Mitreisenden',
      subtitle:
        'Cojauny bringt Passagiere desselben Tickets zusammen, damit sie in Minuten Taxi, Ride-Sharing oder Parkplätze organisieren. Keine dauerhaften Gruppen, nur das Wesentliche zum Sparen.',
      primaryCta: 'Beta-Zugang anfragen',
      secondaryCta: 'Interaktive Demo ansehen',
      imageAlt: 'Cojauny-Oberflächen mit Einsparungen auf einem iPhone'
    },
    features: {
      title: 'Jede Fahrt ohne Reibung managen',
      subtitle:
        'Bündele Flug-Events, temporäre Chats und Kostenanalysen, damit Reisende gemeinsam und sicher unterwegs sind.',
      items: [
        {
          title: 'Events pro Flug',
          description:
            'Lege Treffpunkt, Zeitfenster und Plätze fest. Cojauny schlägt optimale Kombinationen und Einsparungen pro Person vor.',
          icon: baseFeatures.mobility
        },
        {
          title: '48h-Chat',
          description:
            'Koordiniere Details in einem Chat, der 48 Stunden nach dem Flug automatisch gelöscht wird. Keine endlosen Gruppen.',
          icon: baseFeatures.ephemeralChat
        },
        {
          title: 'Transparente Ersparnis',
          description:
            'Zeige, wie viel jeder Passagier im Vergleich zur Einzelfahrt spart – Taxi, Uber, Privatwagen oder Langzeitparkplatz.',
          icon: baseFeatures.groupSaver
        },
        {
          title: 'Datenschutz zuerst',
          description:
            'Teile nur notwendige Informationen und entscheide selbst, ob du weitere Kontaktdaten austauschst. Alles DSGVO-konform.',
          icon: baseFeatures.privacy
        }
      ]
    },
    mockups: {
      heading: 'Für schnelle Entscheidungen gestaltet',
      description:
        'Erlebe die wichtigsten Bereiche: Startseite, Event-Erstellung, temporärer Chat und Privatsphäre-Einstellungen.',
      screens: [
        {
          id: 'home',
          badge: 'Home',
          title: 'Bevorstehende Fahrten & Ersparnisse',
          description:
            'Behalte kommende Flüge, verfügbare Plätze und Einsparungen im Blick, bevor du beitrittst.',
          image: '/images/mockups/mockup-home.svg'
        },
        {
          id: 'event',
          badge: 'Event',
          title: 'Fahrt in Minuten planen',
          description:
            'Wähle Transportmittel, Treffpunkt und beteiligte Personen. Alle bleiben synchron.',
          image: '/images/mockups/mockup-event.svg'
        },
        {
          id: 'chat',
          badge: '48h-Chat',
          title: 'Abstimmung ohne Lärm',
          description:
            'Teile Updates und die Position des Fahrers in Echtzeit. Der Chat verschwindet 48h nach dem Flug.',
          image: '/images/mockups/mockup-chat.svg'
        },
        {
          id: 'settings',
          badge: 'Privatsphäre',
          title: 'Feinsteuerung für Daten & Zahlungen',
          description:
            'Bestimme, was Mitreisende sehen und füge gemeinsame Zahlungsmittel nur bei Bedarf hinzu.',
          image: '/images/mockups/mockup-settings.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Bereit für Airline-Integrationen',
      body: 'SDKs, REST-API und Operations-Konsole sorgen für eine schnelle Integration in bestehende Systeme.',
      link: '/docs/sdk-plan',
      linkLabel: 'Technischen Plan ansehen'
    },
    forms: {
      beta: {
        title: 'Werde Teil der privaten Beta',
        description:
          'Priorität für Airlines, Geschäftsreise-Teams und Mobilitätsanbieter, die gemeinsame Fahrten mit echten Passagieren testen möchten.',
        success:
          'Danke! Du erhältst eine E-Mail von beta@cojauny.com mit deinem Aktivierungs-Token.',
        error: 'Deine Anfrage konnte nicht gesendet werden. Bitte versuche es später erneut.',
        submit: 'Zugang anfragen',
        checkboxLabel:
          'Ich akzeptiere die {privacyLink} und die Verarbeitung meiner Daten für die Beta.',
        privacyLinkLabel: 'Datenschutzrichtlinie',
        fields: {
          fullName: 'Vollständiger Name',
          email: 'Geschäftliche E-Mail',
          company: 'Organisation oder Airline',
          useCase: 'Wie möchtest du Cojauny einsetzen?'
        }
      },
      feedback: {
        title: 'Erzähl uns von deinem Szenario',
        description:
          'Du organisierst Sammeltransfers oder Premium-Reisende? Teile Details, wir melden uns von feedback@cojauny.com.',
        success: 'Danke für dein Feedback. Wir kontaktieren dich bei Rückfragen über dieselbe Adresse.',
        error: 'Feedback konnte nicht übermittelt werden. Bitte überprüfe die Angaben.',
        submit: 'Feedback senden',
        fields: {
          fullName: 'Name',
          email: 'E-Mail',
          message: 'Weitere Details',
          sentiment: 'Feedback-Typ',
          selectPlaceholder: 'Option auswählen'
        },
        sentimentOptions: [
          { value: 'positive', label: 'Bereit für einen Pilot' },
          { value: 'neutral', label: 'Benötige mehr Infos' },
          { value: 'negative', label: 'Habe Bedenken' }
        ]
      }
    },
    cookie: {
      message:
        'Wir verwenden essentielle Cookies sowie optionale Analytics, um die Nutzung von Cojauny zu verstehen. Du kannst sie akzeptieren oder nur notwendige Cookies zulassen.',
      acceptAll: 'Akzeptieren',
      reject: 'Ablehnen',
      moreInfo: 'Mehr erfahren'
    },
    footer: {
      description:
        'Cojauny koordiniert gemeinsame Fahrten für Passagiere desselben Fluges. Keine dauerhaften Netzwerke, nur praktische Zusammenarbeit.',
      rights: 'Alle Rechte vorbehalten.',
      appStoreSoon: 'App Store (bald verfügbar)',
      playStoreSoon: 'Google Play (bald verfügbar)',
      privacy: 'Datenschutz',
      cookies: 'Cookies',
      terms: 'AGB',
      contact: 'Kontakt',
      languageLabel: 'Sprache'
    }
  },
  fr: {
    skipLink: 'Aller au contenu principal',
    seo: {
      title: 'Cojauny · Coordonnez les trajets vers l’aéroport avec vos compagnons de vol',
      description:
        'Cojauny rapproche les passagers d’un même vol pour organiser taxi, covoiturage ou parking avant et après le trajet. Événements par vol, chat 48h et économies transparentes.',
      keywords: [
        'partage trajet aéroport',
        'coordination vol',
        'taxi partagé aéroport',
        'chat temporaire',
        'réduction coûts transport'
      ],
      ogTitle: 'Cojauny · Transport partagé pour votre vol',
      ogDescription:
        'Créez des événements de vol, coordonnez les trajets aller-retour et économisez sur taxi, VTC ou parking avec Cojauny.'
    },
    hero: {
      eyebrow: 'Coordination intelligente pour votre vol',
      title: 'Partagez votre transport vers l’aéroport avec vos co-passagers',
      subtitle:
        'Cojauny connecte les voyageurs d’un même billet afin d’organiser taxi, VTC ou stationnement en quelques minutes. Pas de réseau social, uniquement ce qu’il faut pour économiser.',
      primaryCta: 'Demander l’accès beta',
      secondaryCta: 'Voir la démo interactive',
      imageAlt: 'Maquettes Cojauny affichées sur un iPhone avec comparaison d’économies'
    },
    features: {
      title: 'Organisez chaque trajet sans friction',
      subtitle:
        'Regroupez événements par vol, chat temporaire et calculs d’économies pour voyager de manière collaborative et sûre.',
      items: [
        {
          title: 'Événements par vol',
          description:
            'Définissez point de rendez-vous, horaires et places disponibles. Cojauny suggère la meilleure combinaison et les économies estimées.',
          icon: baseFeatures.mobility
        },
        {
          title: 'Chat éphémère 48h',
          description:
            'Coordonnez-vous dans un chat qui s’efface 48h après le vol. Partagez localisation, circulation ou changement de porte sans bruit inutile.',
          icon: baseFeatures.ephemeralChat
        },
        {
          title: 'Économies claires',
          description:
            'Affichez les économies par passager par rapport à un trajet individuel — taxi, VTC, voiture privée ou parking longue durée.',
          icon: baseFeatures.groupSaver
        },
        {
          title: 'Contrôle de la confidentialité',
          description:
            'Partagez seulement les informations nécessaires et choisissez si vous souhaitez échanger vos réseaux. Conforme RGPD.',
          icon: baseFeatures.privacy
        }
      ]
    },
    mockups: {
      heading: 'Conçue pour décider rapidement',
      description:
        'Découvrez les écrans clés : tableau de bord, création d’événement partagé, chat temporaire et réglages de confidentialité.',
      screens: [
        {
          id: 'home',
          badge: 'Accueil',
          title: 'Trajets à venir & économies',
          description:
            'Visualisez vols prochains, disponibilité et économies avant de rejoindre un trajet.',
          image: '/images/mockups/mockup-home.svg'
        },
        {
          id: 'event',
          badge: 'Événement',
          title: 'Planifiez en quelques minutes',
          description:
            'Choisissez le mode de transport, l’heure de rendez-vous et les passagers impliqués.',
          image: '/images/mockups/mockup-event.svg'
        },
        {
          id: 'chat',
          badge: 'Chat 48h',
          title: 'Restez alignés sans bruit',
          description:
            'Partagez mises à jour et position du chauffeur. Le chat disparaît 48h après le vol.',
          image: '/images/mockups/mockup-chat.svg'
        },
        {
          id: 'settings',
          badge: 'Confidentialité',
          title: 'Contrôle fin des données',
          description:
            'Décidez quelles informations sont visibles et ajoutez des paiements partagés uniquement si besoin.',
          image: '/images/mockups/mockup-settings.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Prêt pour les intégrations compagnies aériennes',
      body: 'SDK mobile, API REST et console d’opérations pour vous connecter rapidement à vos systèmes.',
      link: '/docs/sdk-plan',
      linkLabel: 'Voir le plan technique'
    },
    forms: {
      beta: {
        title: 'Rejoignez la beta privée',
        description:
          'Priorité aux compagnies aériennes, agences corporate et équipes mobilité voulant tester des trajets partagés avec de vrais passagers.',
        success:
          'Merci ! Vous recevrez un e-mail de beta@cojauny.com avec votre token d’activation.',
        error: 'Impossible d’envoyer votre demande. Réessayez dans quelques minutes.',
        submit: 'Demander l’accès',
        checkboxLabel:
          'J’accepte la {privacyLink} et le traitement de mes données pour la beta.',
        privacyLinkLabel: 'politique de confidentialité',
        fields: {
          fullName: 'Nom complet',
          email: 'E-mail professionnel',
          company: 'Organisation ou compagnie',
          useCase: 'Comment souhaitez-vous utiliser Cojauny ?'
        }
      },
      feedback: {
        title: 'Partagez votre scénario',
        description:
          'Vous gérez des transferts collectifs ou des voyageurs premium ? Donnez-nous des détails et nous répondrons depuis feedback@cojauny.com.',
        success:
          'Merci pour votre retour. Nous vous contacterons par ce même e-mail si besoin.',
        error: 'Impossible d’envoyer le feedback. Vérifiez les informations.',
        submit: 'Envoyer',
        fields: {
          fullName: 'Nom',
          email: 'E-mail',
          message: 'Dites-nous en plus',
          sentiment: 'Type de retour',
          selectPlaceholder: 'Choisissez une option'
        },
        sentimentOptions: [
          { value: 'positive', label: 'Prêt pour un pilote' },
          { value: 'neutral', label: 'Besoin de précisions' },
          { value: 'negative', label: 'J’ai des freins' }
        ]
      }
    },
    cookie: {
      message:
        'Nous utilisons des cookies essentiels et des analyses facultatives pour comprendre l’usage de Cojauny. Acceptez-les ou poursuivez avec les seuls nécessaires.',
      acceptAll: 'Accepter',
      reject: 'Refuser',
      moreInfo: 'En savoir plus'
    },
    footer: {
      description:
        'Cojauny coordonne des trajets partagés entre passagers d’un même vol. Pas de réseau permanent, seulement de la collaboration efficace.',
      rights: 'Tous droits réservés.',
      appStoreSoon: 'App Store (bientôt)',
      playStoreSoon: 'Google Play (bientôt)',
      privacy: 'Confidentialité',
      cookies: 'Cookies',
      terms: 'Conditions',
      contact: 'Contact',
      languageLabel: 'Langue'
    }
  }
};

export function getLandingCopy(locale: Locale): LandingCopy {
  return landingCopy[locale] ?? landingCopy[defaultLocale];
}
