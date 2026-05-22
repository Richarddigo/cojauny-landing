import type { Locale } from './config';
import { defaultLocale, locales } from './config';

export type IconName = 'bolt' | 'users' | 'chat' | 'shield' | 'sparkles' | 'globe';

export interface FeatureCopy {
  title: string;
  description: string;
  iconName: IconName;
}

export interface MockupScreenCopy {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
}

export interface FormCopy {
  heading?: string;
  subheading?: string;
  title: string;
  description: string;
  success: string;
  error: string;
  submit: string;
  checkboxLabel?: string;
  privacyLinkLabel?: string;
  referralNotice?: string;
  optionalLabel?: string;
  optionalHint?: string;
  duplicateError?: string;
  fields: {
    fullName?: string;
    email: string;
    company?: string;
    useCase?: string;
    case?: string;
    message?: string;
    selectPlaceholder?: string;
    country?: string;
    homeAirport?: string;
    flightFrequency?: string;
    updatesOptIn?: string;
    privacyAcceptance?: string;
  };
  caseOptions?: Array<{ value: string; label: string }>;
  placeholders?: {
    homeAirport?: string;
    useCase?: string;
  };
  countryOptions?: Array<{ value: string; label: string }>;
  flightFrequencyOptions?: Array<{ value: string; label: string; description: string }>;
}

export interface ReferralPanelCopy {
  title: string;
  subtitle: string;
  yourLink: string;
  copyButton: string;
  copiedButton: string;
  stats: {
    visits: string;
    signups: string;
  };
  instructions: {
    title: string;
    step1: string;
    step2: string;
    step3: string;
  };
  privacy: string;
}

export interface ValuePropCopy {
  title: string;
  description: string;
}

export interface SavingsMetricCopy {
  value: string;
  label: string;
  description: string;
}

export interface WorkflowStepCopy {
  title: string;
  description: string;
}

export interface PlanFeature {
  feature: string;
  free: string | boolean;
  premium: string | boolean;
}
export interface PricingCopy {
  title: string;
  subtitle: string;
  plans: {
    free: {
      name: string;
      price: string;
      description?: string;
      cta?: string;
      badge?: string;
      features?: string[];
    };
    premium: {
      name: string;
      price: string;
      description?: string;
      cta?: string;
      badge?: string;
      features?: string[];
    };
  };
  comparison: {
    title: string;
    features: PlanFeature[];
  };
}
export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCopy {
  title: string;
  subtitle: string;
  items: FaqItem[];
}

export interface LandingCopy {
  skipLink: string;
  header: {
    home: string;
    features: string;
    demo: string;
    pricing: string;
    beta: string;
    blog: string;
    benefits: string;
    impact: string;
    workflow: string;
    faq: string;
    feedback: string;
  };
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
  value: {
    title: string;
    subtitle: string;
    items: ValuePropCopy[];
  };
  savings: {
    title: string;
    caption: string;
    metrics: SavingsMetricCopy[];
  };
  workflow: {
    title: string;
    intro: string;
    steps: WorkflowStepCopy[];
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
  pricing: PricingCopy;
  faq: FaqCopy;
  forms: {
    beta: FormCopy;
    feedback: FormCopy;
  };
  referralPanel: ReferralPanelCopy;
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
    acceptableUse?: string;
    faq?: string;
    subprocessors?: string;
    contact: string;
    blog: string;
    languageLabel: string;
    madeInEurope: string;
  };
}

export const landingCopy: Record<Locale, LandingCopy> = {
  es: {
    skipLink: 'Saltar al contenido principal',
    header: {
      home: 'Inicio',
      features: 'Funciones',
      demo: 'App',
      pricing: 'Planes',
      beta: 'Acceso Beta',
      blog: 'Blog',
      benefits: 'Ventajas',
      impact: 'Impacto',
      workflow: 'Cómo funciona',
      faq: 'Preguntas',
      feedback: 'Feedback'
    },
    seo: {
      title: 'Cojauny: Comparte transporte al aeropuerto y ahorra hasta un 75%',
      description:
        'Conecta con pasajeros de tu vuelo para compartir transporte al aeropuerto. Matching automático, perfiles verificados y ahorro real. Disponible en +120 aeropuertos.',
      keywords: [
        'compartir taxi aeropuerto',
        'transporte compartido aeropuerto',
        'app viajes aeropuerto',
        'carpool aeropuerto',
        'ahorro transporte aeropuerto',
        'blablacar aeropuerto',
        'uber compartido',
        'viaje compartido vuelo',
        'coordinar transporte vuelo',
        'transporte aeropuerto barato'
      ],
      ogTitle: 'Cojauny: Tu viaje al aeropuerto, a mitad de precio',
      ogDescription:
        'Únete a otros viajeros de tu vuelo para compartir taxi o coche privado. Seguridad verificada, chat temporal y ahorro inteligente.'
    },
    hero: {
      eyebrow: '¿Vuelas pronto? Tu traslado, más inteligente',
      title: 'Comparte transporte con viajeros de tu mismo vuelo',
      subtitle:
        'Cojauny te conecta automáticamente con pasajeros de tu vuelo para compartir taxi, van o coche privado. Ahorra hasta un 75%, reduce tu huella de carbono y viaja seguro con perfiles verificados.',
      primaryCta: 'Probar gratis',
      secondaryCta: 'Cómo funciona',
      imageAlt: 'App Cojauny mostrando matching de vuelo y ahorro compartido'
    },
    features: {
      title: 'Todo lo que necesitas para viajar mejor',
      subtitle:
        'Olvídate de la incertidumbre. Cojauny combina tecnología de vuelos, seguridad y comunidad para que tu traslado sea perfecto.',
      items: [
        {
          title: 'Matching Inteligente',
          description:
            'Detectamos quién comparte tu vuelo o ruta y te sugerimos el grupo ideal para dividir gastos y coordinar horarios sin esfuerzo.',
          iconName: 'bolt'
        },
        {
          title: 'Eventos con Cupos',
          description:
            'Publica o únete a traslados, comidas o actividades. Gestiona aforos, puntos de encuentro y asistentes en tiempo real.',
          iconName: 'users'
        },
        {
          title: 'Chat Seguro 48h',
          description:
            'Comunícate en un canal cifrado que se activa antes del vuelo y desaparece 48h después. Privacidad total, sin compartir tu número.',
          iconName: 'chat'
        },
        {
          title: 'Confianza Verificada',
          description:
            'Sabes con quién viajas. Todos los perfiles cuentan con verificación de identidad, foto y sistema de reputación.',
          iconName: 'shield'
        },
        {
          title: 'Multilenguaje Global',
          description:
            'La app se adapta a 78 idiomas con traducción automática. Coordina con viajeros de todo el mundo sin barreras.',
          iconName: 'globe'
        },
        {
          title: 'Alertas de Viaje',
          description:
            'Recibe notificaciones sobre cambios de vuelo, recordatorios de encuentro y avisos de llegada del conductor al instante.',
          iconName: 'sparkles'
        },
        {
          title: 'Panel de Impacto',
          description:
            'Visualiza tu ahorro acumulado y el CO₂ que evitas en cada viaje. Datos reales para compartir con tu comunidad.',
          iconName: 'bolt'
        },
        {
          title: 'Rutas Recurrentes',
          description:
            '¿Vuelas siempre la misma ruta? Configura alertas automáticas y encuentra compañeros de viaje para tus trayectos frecuentes.',
          iconName: 'users'
        }
      ]
    },
    value: {
      title: 'Por qué elegir Cojauny',
      subtitle:
        'Resolvemos el coste excesivo del transporte individual y el caos de la coordinación manual. Una experiencia de viaje compartida, segura y eficiente.',
      items: [
        {
          title: '💸 Ahorro real en cada viaje',
          description:
            'Accede a traslados premium o taxis directos pagando solo una fracción del coste. La economía colaborativa, llevada al aeropuerto.'
        },
        {
          title: '🌱 Sostenibilidad tangible',
          description:
            'Menos coches en la carretera significan menos emisiones. Registramos tu impacto positivo en cada trayecto compartido.'
        },
        {
          title: '🤝 Networking en el aire',
          description:
            'Conecta con profesionales y viajeros afines que van a tu mismo destino. Haz networking antes de aterrizar.'
        },
        {
          title: '⏱️ Coordinación sin estrés',
          description:
            'Agenda integrada y avisos automáticos. Todo el grupo sabe dónde y cuándo encontrarse sin necesidad de cientos de mensajes.'
        },
        {
          title: '🛡️ Seguridad ante todo',
          description:
            'Sistema de reputación y verificación robusto. Viaja tranquilo sabiendo que tu seguridad es nuestra prioridad.'
        },
        {
          title: '📱 Todo en un lugar',
          description:
            'Vuelo, chat, pagos y detalles del traslado centralizados en una sola app. Tu viaje, organizado de principio a fin.'
        }
      ]
    },
    savings: {
      title: 'El impacto de viajar con Cojauny',
      caption: 'Juntos logramos objetivos ambiciosos. Mira lo que estamos construyendo.',
      metrics: [
        {
          value: '50.000+',
          label: 'Pasajeros conectados',
          description: 'Nuestra meta anual para crear una red global de transporte eficiente.'
        },
        {
          value: '50-75%',
          label: 'Ahorro promedio',
          description: 'Lo que puedes ahorrar en cada traslado al compartir taxi o coche privado.'
        },
        {
          value: '1.000+ t',
          label: 'CO₂ evitado',
          description: 'Toneladas de emisiones que planeamos reducir en nuestro primer año.'
        },
        {
          value: '120+',
          label: 'Aeropuertos',
          description: 'Presencia en los principales hubs de Europa y América desde el primer día.'
        }
      ]
    },
    workflow: {
      title: 'Tu viaje compartido en 5 pasos',
      intro: 'Simple, rápido y seguro. Así funciona Cojauny.',
      steps: [
        {
          title: '1. Perfil Verificado',
          description: 'Crea tu cuenta y verifica tu identidad para acceder a la comunidad.'
        },
        {
          title: '2. Añade tu Vuelo',
          description: 'Ingresa tu número de vuelo. Nosotros buscamos los horarios y compañeros compatibles.'
        },
        {
          title: '3. Únete o Crea',
          description: 'Busca un evento existente o propón uno nuevo definiendo hora y punto de encuentro.'
        },
        {
          title: '4. Coordina',
          description: 'Usa el chat seguro para ultimar detalles. Se sincroniza al aterrizar.'
        },
        {
          title: '5. Viaja y Ahorra',
          description: 'Comparte el trayecto, divide el coste y registra tu impacto positivo.'
        }
      ]
    },
    mockups: {
      heading: 'Descubre la experiencia Cojauny',
      description:
        'Una interfaz diseñada para la velocidad y la claridad. Gestiona tus traslados sin complicaciones.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Búsqueda',
          title: 'Encuentra tu vuelo',
          description:
            'Solo necesitas tu número de vuelo. El sistema hace el resto para encontrar coincidencias.',
          image: '/images/mockups/es/mockup-flight-search.svg'
        },
        {
          id: 'events-list',
          badge: 'Eventos',
          title: 'Opciones disponibles',
          description:
            'Visualiza traslados, cenas o encuentros para tu vuelo. Plazas y estado en tiempo real.',
          image: '/images/mockups/es/mockup-events-list.svg'
        },
        {
          id: 'event-detail',
          badge: 'Detalle',
          title: 'Información clara',
          description:
            'Quién organiza, quién va, cuánto cuesta y dónde nos vemos. Todo claro antes de unirte.',
          image: '/images/mockups/es/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Comunicación fluida',
          description:
            'Habla con el organizador o el grupo. Comparte ubicación y gastos sin salir de la app.',
          image: '/images/mockups/es/mockup-chat.svg'
        },
        {
          id: 'profile',
          badge: 'Perfil',
          title: 'Comunidad segura',
          description:
            'Conoce a tus compañeros de viaje. Reputación y verificación visible para todos.',
          image: '/images/mockups/es/mockup-profile.svg'
        },
        {
          id: 'impact',
          badge: 'Impacto',
          title: 'Tu huella positiva',
          description:
            'Sigue tus estadísticas de ahorro y sostenibilidad. Tu contribución cuenta.',
          image: '/images/mockups/es/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Únete a los pioneros del viaje inteligente',
      body: 'Accede a la beta privada. Disfruta de precios especiales de lanzamiento y ayuda a dar forma al futuro de Cojauny. Plazas limitadas.',
      link: '#beta',
      linkLabel: 'Solicitar acceso beta'
    },
    pricing: {
      title: 'Planes flexibles para ti',
      subtitle: 'Comienza gratis y crece según tus necesidades de viaje.',
      plans: {
        free: {
          name: 'Free',
          price: 'Gratis',
          description: 'Perfecto para viajeros ocasionales. Gestiona un viaje activo a la vez sin coste.',
          cta: 'Crear cuenta gratis'
        },
        premium: {
          name: 'Premium',
          price: '4,99 €/mes',
          description: 'Para viajeros frecuentes. Gestión ilimitada, chat grupal y soporte prioritario. 49 €/año.',
          cta: 'Hacerme Premium'
        }
      },
      comparison: {
        title: 'Comparativa de planes',
        features: [
          {
            feature: 'Vuelos activos simultáneos',
            free: '1',
            premium: 'Ilimitados'
          },
          {
            feature: 'Eventos activos simultáneos',
            free: '1',
            premium: 'Ilimitados'
          },
          {
            feature: 'Crear nuevos eventos',
            free: false,
            premium: true
          },
          {
            feature: 'Chat con organizador',
            free: true,
            premium: true
          },
          {
            feature: 'Chat grupal completo',
            free: false,
            premium: true
          },
          {
            feature: 'Eventos recurrentes',
            free: false,
            premium: true
          },
          {
            feature: 'Estadísticas detalladas',
            free: 'Básicas',
            premium: 'Avanzadas'
          },
          {
            feature: 'Soporte prioritario',
            free: false,
            premium: true
          },
          {
            feature: 'Insignia Premium',
            free: false,
            premium: true
          }
        ]
      }
    },
    faq: {
      title: 'Preguntas frecuentes',
      subtitle: 'Resolvemos tus dudas sobre Cojauny',
      items: [
        {
          question: '¿Cómo funciona el matching?',
          answer: 'Introduce tu vuelo y fecha. Cruzamos datos con nuestra base global y te mostramos viajeros en tu mismo vuelo o con horarios compatibles para compartir transporte.'
        },
        {
          question: '¿Es seguro viajar con desconocidos?',
          answer: 'La seguridad es prioridad. Verificamos perfiles con documento de identidad y foto. El sistema de reputación y el chat previo te permiten conocer a tus compañeros antes de compartir.'
        },
        {
          question: '¿Puedo cancelar mi asistencia?',
          answer: 'Sí, puedes salir de un evento desde la app. Si eres organizador, avisa con tiempo para no perjudicar al grupo. Las cancelaciones frecuentes pueden afectar tu reputación.'
        },
        {
          question: '¿Qué ofrece el plan Premium?',
          answer: 'Premium elimina límites de viajes simultáneos, habilita el chat grupal completo, ofrece estadísticas avanzadas y soporte prioritario. Ideal si vuelas a menudo.'
        },
        {
          question: '¿Cómo se paga el transporte?',
          answer: 'Cojauny no procesa pagos del transporte. Los usuarios acuerdan cómo dividir el coste (efectivo, Bizum, etc.). La app facilita el cálculo de la división justa.'
        },
        {
          question: '¿Qué tipo de eventos hay?',
          answer: 'Desde taxis compartidos al aeropuerto hasta cenas en destino. Los usuarios Premium pueden crear cualquier tipo de evento personalizado.'
        },
        {
          question: '¿En qué aeropuertos funciona?',
          answer: 'Estamos en +120 aeropuertos internacionales. Si el tuyo no está, puedes solicitarlo y lo añadiremos según la demanda.'
        },
        {
          question: '¿Cómo protegen mis datos?',
          answer: 'Cumplimos estrictamente con GDPR. Solo mostramos lo esencial. Tus datos de contacto privados nunca se comparten automáticamente.'
        },
        {
          question: '¿Está en mi idioma?',
          answer: 'Sí, Cojauny soporta 78 idiomas y detecta el tuyo automáticamente. Facilitamos la comunicación en grupos internacionales.'
        },
        {
          question: '¿Cuánto puedo ahorrar?',
          answer: 'Depende del trayecto y el grupo, pero el ahorro medio ronda el 50-75% respecto a un taxi individual.'
        },
        {
          question: '¿Hay descuento anual?',
          answer: 'Sí, el plan anual cuesta 49€, lo que supone un ahorro del 17% frente al pago mensual. Se amortiza con muy pocos viajes.'
        },
        {
          question: '¿Qué pasa si mi vuelo se retrasa?',
          answer: 'Recibimos actualizaciones en tiempo real. Notificamos a todo el grupo si hay cambios para que podáis reorganizaros o cancelar si es necesario.'
        },
        {
          question: '¿Para qué sirven las valoraciones?',
          answer: 'Construyen confianza. Al finalizar un viaje, valoras la puntualidad y amabilidad. Una buena reputación te facilita encontrar compañeros en el futuro.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Únete a la revolución del viaje compartido',
        subheading: 'Acceso anticipado para early adopters. Tarifas exclusivas y contacto directo con el equipo.',
        title: 'Solicita acceso beta',
        description:
          '🌟 Acceso prioritario · 💰 Precio especial · 🏆 Insignia fundadora · 🚀 Soporte directo',
        success:
          '¡Estás dentro! Te avisaremos por email cuando tu acceso esté listo.',
        error: 'Hubo un error al registrar tu solicitud. Por favor, inténtalo de nuevo.',
        duplicateError:
          'Ya estás en nuestra lista. Te avisaremos pronto.',
        submit: 'Enviar solicitud',
        checkboxLabel: 'Acepto la {privacyLink} de Cojauny.',
        privacyLinkLabel: 'política de privacidad',
        referralNotice:
          'ℹ️ Recibirás un enlace único para invitar amigos. Solo contamos visitas y registros para darte prioridad, sin guardar datos ajenos.',
        optionalLabel: '(opcional)',
        optionalHint: 'Los campos marcados como "(opcional)" no son obligatorios.',
        fields: {
          fullName: 'Nombre completo',
          email: 'Correo electrónico',
          country: 'País de residencia',
          homeAirport: 'Ciudad o aeropuerto base',
          flightFrequency: 'Frecuencia de vuelo',
          useCase: '¿Qué te interesa de Cojauny?',
          updatesOptIn: 'Recibir novedades del producto',
          privacyAcceptance: 'Acepto el tratamiento de mis datos para la beta.'
        },
        placeholders: {
          homeAirport: 'Ej. Madrid (MAD), CDMX',
          useCase: 'Ahorro, networking, sostenibilidad...'
        },
        countryOptions: [
          { value: '', label: 'Selecciona tu país' },
          { value: 'es', label: 'España' },
          { value: 'de', label: 'Alemania' },
          { value: 'fr', label: 'Francia' },
          { value: 'uk', label: 'Reino Unido' },
          { value: 'us', label: 'Estados Unidos' },
          { value: 'mx', label: 'México' },
          { value: 'ar', label: 'Argentina' },
          { value: 'co', label: 'Colombia' },
          { value: 'cl', label: 'Chile' },
          { value: 'other', label: 'Otro país' }
        ],
        flightFrequencyOptions: [
          { value: 'once', label: '1 vez al año', description: 'Vacaciones o viajes puntuales' },
          {
            value: 'two_to_five',
            label: '2–5 veces al año',
            description: 'Viajeros frecuentes u ocio regular'
          },
          {
            value: 'six_to_ten',
            label: '6–10 veces al año',
            description: 'Profesionales o commuters'
          },
          {
            value: 'more_than_ten',
            label: '+10 veces al año',
            description: 'Tripulaciones y grandes viajeros'
          }
        ]
      },
      feedback: {
        heading: 'Tu opinión importa',
        subheading: '¿Ideas, sugerencias o propuestas? Queremos escucharte para mejorar Cojauny.',
        title: 'Envíanos un mensaje',
        description:
          '¿Tienes una propuesta de negocio o feedback específico? Escríbenos.',
        success: 'Mensaje recibido. Gracias por ayudarnos a mejorar.',
        error: "El mensaje debe tener al menos 10 caracteres.",
        submit: 'Enviar',
        optionalLabel: '(opcional)',
        optionalHint: 'Campos obligatorios salvo indicación contraria.',
        fields: {
          fullName: 'Nombre',
          email: 'Correo',
          message: 'Tu mensaje',
          useCase: 'Tipo de consulta',
          selectPlaceholder: 'Selecciona una opción'
        },
        caseOptions: [
          { value: 'feedback', label: 'Feedback de producto' },
          { value: 'idea', label: 'Nueva idea' },
          { value: 'business_proposal', label: 'Propuesta comercial' }
        ]
      }
    },
    referralPanel: {
      title: 'Adelanta puestos en la lista',
      subtitle: 'Comparte Cojauny y gana prioridad en el acceso.',
      yourLink: 'Tu enlace de invitación',
      copyButton: 'Copiar enlace',
      copiedButton: 'Copiado',
      stats: {
        visits: 'Visitas',
        signups: 'Registros'
      },
      instructions: {
        title: 'Cómo funciona',
        step1: 'Comparte tu enlace único.',
        step2: 'Contamos las visitas anónimas.',
        step3: 'Sumamos puntos si se registran.'
      },
      privacy:
        'Sistema 100% anónimo. No guardamos datos de tus invitados.'
    },
    cookie: {
      message:
        'Usamos cookies para mejorar tu experiencia. Tú decides cuáles aceptas.',
      acceptAll: 'Aceptar todas',
      reject: 'Solo necesarias',
      moreInfo: 'Más info'
    },
    footer: {
      description: 'Cojauny conecta viajeros para compartir transporte, ahorrar dinero y reducir emisiones. Tu comunidad de viaje inteligente.',
      rights: 'Todos los derechos reservados.',
      appStoreSoon: 'App Store (pronto)',
      playStoreSoon: 'Google Play (pronto)',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      terms: 'Términos',
      acceptableUse: 'Uso',
      faq: 'FAQ',
      subprocessors: 'Subprocesadores',
      contact: 'Contacto',
      blog: 'Blog',
      languageLabel: 'Idioma',
      madeInEurope: 'Hecho en Europa.'
    }
  },
  en: {
    skipLink: 'Skip to main content',
    header: {
      home: 'Home',
      features: 'Features',
      demo: 'App',
      pricing: 'Plans',
      beta: 'Get Early Access',
      blog: 'Blog',
      benefits: 'Benefits',
      impact: 'Impact',
      workflow: 'How it works',
      faq: 'FAQ',
      feedback: 'Feedback'
    },
    seo: {
      title: 'Cojauny: Share Airport Transport & Save up to 75%',
      description:
        'Connect with passengers on your flight to share airport transfers. Smart matching, verified profiles, and real savings. Available at 120+ airports.',
      keywords: [
        'share airport taxi',
        'airport transfer sharing',
        'airport carpool app',
        'flight ride sharing',
        'cheap airport transfer',
        'split uber airport',
        'airport shuttle share',
        'travel companion app',
        'sustainable travel',
        'airport ride share'
      ],
      ogTitle: 'Cojauny: Share Airport Transport & Save 50-75% | Free App',
      ogDescription:
        'Join travelers on your flight to share a taxi or private car. Verified safety, secure chat, and smart savings. Live at 120+ airports.'
    },
    hero: {
      eyebrow: 'Flying soon? Save up to 75% on your transfer',
      title: 'Share your ride with passengers on your flight',
      subtitle:
        'Cojauny automatically connects you with travelers on the same flight to share a taxi, van, or private car. Save 50-75%, reduce carbon footprint, and travel safely with verified profiles. Sign up free.',
      primaryCta: 'Try for Free',
      secondaryCta: 'See how it works',
      imageAlt: 'Cojauny App showing flight matching and shared savings'
    },
    features: {
      title: 'Everything you need to travel cheaper and greener',
      subtitle:
        'Automatic flight matching, capacity-controlled events, 48-hour encrypted chat, verified profiles with reputation, and impact dashboard. Cojauny removes the uncertainty of sharing rides with strangers.',
      items: [
        {
          title: 'Flight Matching',
          description:
            'We automatically detect passengers sharing your flight or airport and suggest the best group to split transfers and coordinate schedules.',
          iconName: 'bolt'
        },
        {
          title: 'Events with Spots',
          description:
            'Post or join transport events, meals, or activities. Control capacity, locations, and confirmed attendee lists in real-time.',
          iconName: 'users'
        },
        {
          title: 'Real-Time Chat',
          description:
            'Talk to the organizer or the whole group via an encrypted channel. Works offline during flight and syncs upon landing.',
          iconName: 'chat'
        },
        {
          title: 'Verified Profiles',
          description:
            'All members have verification, photos, and visible reputation so you know who you are sharing the ride with before accepting.',
          iconName: 'shield'
        },
        {
          title: '78 Languages Supported',
          description:
            'The product experience adapts to 78 languages, including automated messages. Coordinate in your native language.',
          iconName: 'globe'
        },
        {
          title: 'Smart Notifications',
          description:
            'Prioritized alerts for new events, flight changes, meeting reminders, and driver arrival notices.',
          iconName: 'sparkles'
        },
        {
          title: 'Savings & Impact Stats',
          description:
            'Dashboard with accumulated savings, shared kilometers, and avoided CO₂ to report to your team or community.',
          iconName: 'bolt'
        },
        {
          title: 'Recurring Events',
          description:
            'Set up events that repeat by route, schedule, or airline and keep your group automatically notified for every flight.',
          iconName: 'users'
        }
      ]
    },
    value: {
      title: 'Why smart travelers choose Cojauny',
      subtitle:
        'We solve the 3 main airport transport problems: high solo transfer costs ($60-80/ride), chaotic WhatsApp coordination, and lack of trust with strangers.',
      items: [
        {
          title: '💸 Visible Savings',
          description:
            'Split premium transfers, corporate vans, or private cars and track how much you save compared to a solo ride.'
        },
        {
          title: '🌱 Quantifiable Impact',
          description:
            'We automatically calculate avoided CO₂ and log it per flight so you can report it to your sustainability team.'
        },
        {
          title: '🤝 Known Community',
          description:
            'Connect with verified profiles sharing your destination, airline, or event. Network before the flight and stay in touch after.'
        },
        {
          title: '⏱️ Coordination without Chaos',
          description:
            'Agenda, reminders, and auto-confirmations. Cojauny notifies everyone when the driver arrives or the gate changes.'
        },
        {
          title: '🛡️ Trust & Reputation',
          description:
            'Ratings, verification, and anti-bot policies. If someone doesn\'t show up, the group can report them and the system adjusts their reputation.'
        },
        {
          title: '📱 Omnichannel Operation',
          description:
            'All info — flight, meeting point, payments, contacts — lives in a single thread accessible from mobile or progressive web.'
        }
      ]
    },
    savings: {
      title: 'The measurable impact of traveling with Cojauny',
      caption: 'Public goals we accompany with real-time metrics for your team.',
      metrics: [
        {
          value: '50,000+',
          label: 'Passengers Synced',
          description: 'Annual goal of connected passengers per flight to ensure critical mass on major routes.'
        },
        {
          value: '50-75%',
          label: 'Projected Savings',
          description: 'Average savings range per ground transfer when sharing a taxi, van, or private car.'
        },
        {
          value: '1,000+ t',
          label: 'CO₂ Avoided',
          description: 'Tons of carbon dioxide we aim to avoid during the first operational year.'
        },
        {
          value: '120+',
          label: 'Active Airports',
          description: 'Network of supported airports in Europe and the Americas to launch events from day one.'
        }
      ]
    },
    workflow: {
      title: 'How a Cojauny ride is coordinated',
      intro: 'Five clear milestones from entering your flight to logging savings for your team.',
      steps: [
        {
          title: '1. Create Verified Profile',
          description: 'Sign up with Apple, Google, or email, add photo and basic docs to unlock matching.'
        },
        {
          title: '2. Add Flight',
          description: 'Enter airline, number, and date. The app fetches official schedules and suggests matching travelers.'
        },
        {
          title: '3. Join or Create Event',
          description: 'Browse community events or launch a new one defining capacity, meeting point, and payment method.'
        },
        {
          title: '4. Coordinate in Secure Chat',
          description: 'Share locations, license plates, and rates from a moderated chat with optional auto-translation.'
        },
        {
          title: '5. Close Trip & Report',
          description: 'Mark the trip as completed to split the cost and automatically log savings and avoided CO₂.'
        }
      ]
    },
    mockups: {
      heading: 'Explore the app that transforms how you travel',
      description:
        'Discover Cojauny\'s main screens: flight search, capacity-controlled events, real-time chat, verified profiles, and impact dashboard.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Search',
          title: 'Find your flight in seconds',
          description:
            'Enter your flight number and date. Our system automatically searches flight info and shows available travelers.',
          image: '/images/mockups/en/mockup-flight-search.svg'
        },
        {
          id: 'events-list',
          badge: 'Events',
          title: 'Events for your flight',
          description:
            'See all events for your flight: "Share taxi Airport A to City B", "Dinner at destination", etc. With spots and real-time participants.',
          image: '/images/mockups/en/mockup-events-list.svg'
        },
        {
          id: 'event-detail',
          badge: 'Detail',
          title: 'Full Event Info',
          description:
            'Check organizer, confirmed participants, available spots, meeting point, time, and estimated costs. Join with one click.',
          image: '/images/mockups/en/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Private & Group Chat',
          description:
            'Chat directly with organizers (Free) or the whole group (Premium). Share location, payment details, and coordinate in real-time.',
          image: '/images/mockups/en/mockup-chat.svg'
        },
        {
          id: 'profile',
          badge: 'Profile',
          title: 'Verified Profiles',
          description:
            'Check identity, reputation, and past events to decide who to share the ride with.',
          image: '/images/mockups/en/mockup-profile.svg'
        },
        {
          id: 'impact',
          badge: 'Impact',
          title: 'Your Savings & Carbon Footprint',
          description:
            'Summary dashboard with savings, avoided emissions, and travel cadence to share with your team.',
          image: '/images/mockups/en/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Join early adopters and save from your next flight',
      body: 'Early access to Cojauny private beta: special launch price (50% off first year), personalized onboarding, direct line to product team, and founding member badge. Limited to 5,000 users in beta phase.',
      link: '#beta',
      linkLabel: 'Reserve my beta spot'
    },
    pricing: {
      title: 'Plans designed for every traveler',
      subtitle: 'Start free and unlock advanced features when you need to manage multiple flights at once.',
      plans: {
        free: {
          name: 'Free',
          price: 'Free',
          description: 'Manage 1 flight and 1 event at a time. No total trip limit: when you finish one, add another.',
          cta: 'Create Free Account'
        },
        premium: {
          name: 'Premium',
          price: '€4.99/mo',
          description: 'Manage multiple flights and events simultaneously. Group chat, advanced stats, and priority support. €49/year (save 17%).',
          cta: 'Upgrade to Premium'
        }
      },
      comparison: {
        title: 'Quick Comparison',
        features: [
          {
            feature: 'Simultaneous Active Flights',
            free: '1 at a time',
            premium: 'Unlimited'
          },
          {
            feature: 'Simultaneous Active Events',
            free: '1 at a time',
            premium: 'Unlimited'
          },
          {
            feature: 'Create New Events',
            free: false,
            premium: true
          },
          {
            feature: 'Chat with Organizers',
            free: true,
            premium: true
          },
          {
            feature: 'Group Chat with Participants',
            free: false,
            premium: true
          },
          {
            feature: 'Recurring Events',
            free: false,
            premium: true
          },
          {
            feature: 'Advanced Savings/CO₂ Stats',
            free: 'Summary',
            premium: 'Full Detail'
          },
          {
            feature: 'Priority Support',
            free: false,
            premium: true
          },
          {
            feature: 'Premium Badge on Profile',
            free: false,
            premium: true
          }
        ]
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about Cojauny before your first shared ride.',
      items: [
        {
          question: 'How does the flight matching system work?',
          answer: 'Simply enter your flight number (e.g., IB2345) and date. Our platform queries our global database integrated with Aerodatabox API in real-time and automatically connects you with other travelers on the same flight or compatible flights at the same time and airport. The system automatically verifies schedule, terminal, and destination compatibility to ensure perfect coordination.'
        },
        {
          question: 'Is it safe to share transport with strangers?',
          answer: 'Absolutely. Safety is our top priority. All users must verify their identity with photo and ID. We have a transparent reputation system where you can see ratings and comments from other travelers. Before confirming attendance, you can review full profiles, travel history, and communicate with the group via chat. Plus, our automatic moderation detects and removes suspicious behavior in real-time.'
        },
        {
          question: 'Can I cancel my participation without penalty?',
          answer: 'Yes, you have total flexibility. You can leave any event directly from the app at no extra cost. If you are the event organizer, upon canceling, all participants receive an instant notification with options to reorganize the group or find alternatives. We recommend notifying as early as possible to allow others to reorganize. Your cancellation history is visible on your profile to maintain community transparency.'
        },
        {
          question: 'What is the difference between Free and Premium?',
          answer: 'The Free version allows you to manage 1 active flight and 1 event at a time. Important: this is not a total trip limit. When you complete a trip, you can add another without restrictions. Direct chat only works with the event organizer. Premium unlocks multiple simultaneous flights and events, group chat with all participants, detailed savings and CO₂ stats, recurring events for frequent flyers, priority support (under 2 hours), and early access to new features. It costs €4.99/mo or €49/year (17% discount).'
        },
        {
          question: 'How do payments work between participants?',
          answer: 'Cojauny does not process payments directly to keep costs low and maximize flexibility. Participants coordinate their preferred payment method: cash to driver, Bizum, bank transfer, PayPal, or split card payment. The app provides an automatic calculator that splits costs equally and saves the estimated savings record to your profile. All calculations are transparent and visible to the group before the trip.'
        },
        {
          question: 'What types of events can I create or join?',
          answer: 'Cojauny supports multiple event categories: Shared transfers to departure airport, pickups from arrival airport, corporate van services for business teams, shared private cars, shared accommodation at destination (hostel or full apartment), and post-flight social activities. Premium users can create custom events for any type of shared travel need.'
        },
        {
          question: 'Which airports is Cojauny available in?',
          answer: 'We currently operate in over 120 major airports globally, covering Europe, Americas, Asia, and Oceania. Our coverage includes major hubs like Madrid-Barajas, Barcelona-El Prat, London-Heathrow, Paris-Charles de Gaulle, New York-JFK, and many more. We add new airports quarterly based on user demand. If your airport is not listed, you can request it from Settings → Request Airport and we will prioritize it based on request volume.'
        },
        {
          question: 'How do you protect my personal data and privacy?',
          answer: 'Your privacy is sacred to us. We only publicly show your profile name, country of residence, and profile photo. Your email, phone, address, and ID documents remain completely encrypted with AES-256 encryption and are only accessible by you. We strictly comply with GDPR. You manually decide if you share additional info like social media or phone number with other participants. We do not sell or share your data with third parties under any circumstances. You can download or delete all your data anytime from your profile.'
        },
        {
          question: 'Is the app available in my language?',
          answer: 'Yes, Cojauny is fully translated into 78 languages including Spanish, English, French, German, Portuguese, Italian, Mandarin Chinese, Japanese, Korean, Arabic, Russian, and many more. The interface automatically detects your device language upon first login. You can change it manually anytime from Settings → Language. This is especially useful in multicultural groups where participants from different countries need to communicate effectively.'
        },
        {
          question: 'How much money can I really save using Cojauny?',
          answer: 'Average savings are 50-75% on airport transport. Concrete example: A transfer from Central Madrid to Airport T4 costs approx 30-35€. Traveling alone, you pay the total. Sharing with 3 more passengers from the same flight, your share is only 7.50-9€, saving 22-25€ per trip. Frequent flyers making 2 monthly trips save approx 500-600€ per year. The impact dashboard in your profile shows detailed stats of accumulated savings, avoided CO₂, and number of connections made.'
        },
        {
          question: 'Do you offer an annual subscription with discount?',
          answer: 'Yes. Premium is available in two modes: monthly subscription at €4.99/mo (total €59.88/yr) or annual subscription for €49/yr, representing a saving of €10.88 (17% discount). The annual plan pays for itself easily: with just 2 shared trips a year you have recovered the investment. Plus, annual subscribers receive exclusive benefits like VIP event access, monthly flight giveaways, and a special "Annual" badge on their profile that generates more trust in the community. You can switch from monthly to annual anytime with prorated credit.'
        },
        {
          question: 'What happens if my flight is delayed, canceled, or gate changes?',
          answer: 'Cojauny receives real-time flight updates from multiple sources (airlines, airports, FlightAware). When your flight changes, all participants in your events receive instant push notifications with updated details. You can automatically adjust event time with one click, change meeting point if terminal changes, or cancel event if flight is definitely canceled. Change history is logged for transparency. Our early warning system alerts you even 6 hours before takeoff if high delay probability is detected based on weather or airport congestion.'
        },
        {
          question: 'How exactly does the reputation and rating system work?',
          answer: 'After completing each event, all participants can evaluate each other on 3 dimensions: punctuality (arrived at agreed time), communication (replied fast in chat), and friendliness (was pleasant during trip). You use a 5-star system with optional comment. These ratings are averaged and appear on your public profile along with special badges (Gold Traveler 100+ trips, Eco-Warrior 5 tons CO₂ saved, etc.). High reputation (4.5+ stars) automatically positions you in top results when others search for travel companions, and makes you eligible for "Trusted Traveler" program with advanced verification. Negative ratings are analyzed by our moderation team to detect abuse.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Join the shared travel revolution',
        subheading: 'Get early access to Cojauny and be part of the early adopter community. Exclusive rates, priority support, and direct line to product team.',
        title: 'Request Beta Access',
        description:
          '🌟 Early Access · 💰 Preferred Rates · 🏆 Early Adopter Badge · 🛠️ Direct Product Channel · 🚀 Priority Support',
        success:
          'Great, you are on the waitlist. We will notify you by email when the beta is ready.',
        error: 'We could not register your request. Check data or try again in a few minutes.',
        duplicateError:
          'You are already on our waitlist. We will notify you when beta is available.',
        submit: 'Send Request',
        checkboxLabel: 'I have read and accept Cojauny\'s {privacyLink}.',
        privacyLinkLabel: 'privacy policy',
        referralNotice:
          'ℹ️ Upon signing up you will get a unique link to share. We use this link only to count visits and new signups coming from you. We do not collect personal data from those who click.',
        optionalLabel: '(optional)',
        optionalHint: 'Fields marked as "(optional)" can be left blank.',
        fields: {
          fullName: 'Full Name',
          email: 'Email Address',
          country: 'Country of Residence',
          homeAirport: 'Home City or Airport',
          flightFrequency: 'How often do you fly?',
          useCase: 'How will you use Cojauny or what do you want to validate in beta?',
          updatesOptIn: 'I want to receive development updates',
          privacyAcceptance: 'I accept my data being stored to participate in Cojauny private beta.'
        },
        placeholders: {
          homeAirport: 'Ex. London (LHR), JFK, CDMX',
          useCase: 'Share challenges, KPIs, or hypotheses you want to validate'
        },
        countryOptions: [
          { value: '', label: 'Select your country' },
          { value: 'es', label: 'Spain' },
          { value: 'de', label: 'Germany' },
          { value: 'fr', label: 'France' },
          { value: 'uk', label: 'United Kingdom' },
          { value: 'us', label: 'United States' },
          { value: 'mx', label: 'Mexico' },
          { value: 'ar', label: 'Argentina' },
          { value: 'co', label: 'Colombia' },
          { value: 'cl', label: 'Chile' },
          { value: 'other', label: 'Other country' }
        ],
        flightFrequencyOptions: [
          { value: 'once', label: 'Once a year', description: 'Occasional trips or planned vacations' },
          {
            value: 'two_to_five',
            label: '2–5 times a year',
            description: 'Typical frequency for sales teams or frequent travelers'
          },
          {
            value: 'six_to_ten',
            label: '6–10 times a year',
            description: 'Operations managers or corporate staff with fixed routes'
          },
          {
            value: 'more_than_ten',
            label: 'More than 10 times a year',
            description: 'Airline crews and heavy travelers'
          }
        ]
      },
      feedback: {
        heading: 'Feedback, ideas, and business proposals',
        subheading: 'Have a suggestion to improve Cojauny? Want to share an innovative idea or explore business opportunities? We are here to listen.',
        title: 'Share your proposal',
        description:
          'Do you manage collective transfers or corporate programs? Tell us your scenario to help you better at feedback@cojauny.com.',
        success: 'Thanks for your message. If we need more info we will contact you soon.',
        error: "Field 'Message' must be at least 10 characters.",
        submit: 'Send Message',
        optionalLabel: '(optional)',
        optionalHint: 'All fields are mandatory unless you see "(optional)".',
        fields: {
          fullName: 'Name',
          email: 'Email',
          message: 'Tell us your case',
          useCase: 'Case',
          selectPlaceholder: 'Select an option'
        },
        caseOptions: [
          { value: 'feedback', label: 'Feedback' },
          { value: 'idea', label: 'Idea' },
          { value: 'business_proposal', label: 'Business Proposal' }
        ]
      }
    },
    referralPanel: {
      title: 'We will notify you when beta is ready',
      subtitle: 'Meanwhile, share Cojauny with your network and move up the waitlist',
      yourLink: 'Your unique invite link',
      copyButton: 'Copy Link',
      copiedButton: 'Copied',
      stats: {
        visits: 'Visits',
        signups: 'Signups'
      },
      instructions: {
        title: 'How it works',
        step1: 'Share this link with colleagues, friends, and on social media.',
        step2: 'Every time someone visits your link, we count an anonymous visit.',
        step3: 'If they sign up, we count a new signup associated with you and you move up the queue.'
      },
      privacy:
        'We only count visits and signups anonymously. We do not collect personal data from those who click your link.'
    },
    cookie: {
      message:
        'We use essential and optional analytics cookies to understand how Cojauny is used. You can accept them or keep browsing with only essentials.',
      acceptAll: 'Accept',
      reject: 'Reject',
      moreInfo: 'More Info'
    },
    footer: {
      description: 'Cojauny connects travelers on the same flight to share transport, cut costs, and create community.',
      rights: 'All rights reserved.',
      appStoreSoon: 'App Store (coming soon)',
      playStoreSoon: 'Google Play (coming soon)',
      privacy: 'Privacy',
      cookies: 'Cookies',
      terms: 'Terms',
      acceptableUse: 'Acceptable Use',
      faq: 'FAQ',
      subprocessors: 'Subprocessors',
      contact: 'Contact',
      blog: 'Blog',
      languageLabel: 'Language',
      madeInEurope: 'Made in Europe.'
    }
  },
  de: {
    skipLink: 'Zum Hauptinhalt springen',
    header: {
      home: 'Start',
      features: 'Funktionen',
      demo: 'App',
      pricing: 'Preise',
      beta: 'Beta-Zugang',
      blog: 'Blog',
      benefits: 'Vorteile',
      impact: 'Impact',
      workflow: 'So geht\'s',
      faq: 'FAQ',
      feedback: 'Feedback'
    },
    seo: {
      title: 'Cojauny: Flughafenfahrten teilen & bis zu 75% sparen',
      description:
        'Verbinde dich mit Passagieren deines Fluges, um Flughafentransfers zu teilen. Smartes Matching, verifizierte Profile und echte Ersparnisse. Verfügbar an 120+ Flughäfen.',
      keywords: [
        'flughafenfahrten teilen',
        'flughafentransfer sharing',
        'fahrgemeinschaft flughafen',
        'taxi kosten teilen',
        'günstig zum flughafen',
        'flughafen shuttle alternative',
        'reisebegleiter app',
        'nachhaltiges reisen',
        'airport ride share',
        'flug mitfahrgelegenheit'
      ],
      ogTitle: 'Cojauny: Dein Flughafentransfer zum halben Preis',
      ogDescription:
        'Finde Mitreisende auf deinem Flug und teile Taxi oder Privatwagen. Verifizierte Sicherheit, geschützter Chat und smarte Ersparnis.'
    },
    hero: {
      eyebrow: 'Fliegst du bald? Reise cleverer.',
      title: 'Teile die Fahrt mit Passagieren deines Fluges',
      subtitle:
        'Cojauny verbindet dich automatisch mit Reisenden desselben Fluges, um Taxi, Van oder Privatwagen zu teilen. Spare bis zu 75%, reduziere CO₂ und reise sicher mit verifizierten Profilen.',
      primaryCta: 'Kostenlos testen',
      secondaryCta: 'So funktioniert\'s',
      imageAlt: 'Cojauny App zeigt Flug-Matching und geteilte Ersparnisse'
    },
    features: {
      title: 'Alles für eine bessere Reise',
      subtitle:
        'Schluss mit Unsicherheit. Cojauny kombiniert Flug-Tech, Sicherheit und Community für einen nahtlosen Transfer.',
      items: [
        {
          title: 'Smartes Matching',
          description:
            'Wir erkennen, wer deinen Flug oder deine Route teilt, und schlagen die ideale Gruppe vor, um Kosten zu teilen und Zeitpläne abzustimmen.',
          iconName: 'bolt'
        },
        {
          title: 'Events mit Plätzen',
          description:
            'Erstelle oder tritt Transfers, Essen oder Aktivitäten bei. Verwalte Kapazität, Treffpunkte und Teilnehmer in Echtzeit.',
          iconName: 'users'
        },
        {
          title: 'Sicherer 48h-Chat',
          description:
            'Kommuniziere in einem verschlüsselten Kanal, der vor dem Flug aktiviert wird und nach 48h verschwindet. Volle Privatsphäre, keine Handynummern.',
          iconName: 'chat'
        },
        {
          title: 'Verifiziertes Vertrauen',
          description:
            'Wisse, mit wem du reist. Alle Profile haben Identitätsprüfung, Fotos und ein Bewertungssystem.',
          iconName: 'shield'
        },
        {
          title: 'Weltweite Sprachunterstützung',
          description:
            'Die App passt sich an 78 Sprachen an, inklusive Auto-Übersetzung. Koordiniere dich weltweit ohne Barrieren.',
          iconName: 'globe'
        },
        {
          title: 'Reise-Alerts',
          description:
            'Erhalte priorisierte Benachrichtigungen für Flugänderungen, Treffpunkt-Erinnerungen und Fahrerankunft.',
          iconName: 'sparkles'
        },
        {
          title: 'Impact-Dashboard',
          description:
            'Visualisiere deine kumulierten Ersparnisse und vermiedenes CO₂ für jede Reise. Echte Daten zum Teilen mit deiner Community.',
          iconName: 'bolt'
        },
        {
          title: 'Wiederkehrende Routen',
          description:
            'Fliegst du oft dieselbe Strecke? Richte Auto-Alerts ein und finde Reisebegleiter für deine regelmäßigen Trips.',
          iconName: 'users'
        }
      ]
    },
    value: {
      title: 'Warum Cojauny',
      subtitle:
        'Wir lösen das Problem teurer Einzeltransfers und chaotischer Abstimmung. Ein geteiltes, sicheres und effizientes Reiseerlebnis.',
      items: [
        {
          title: '💸 Echte Ersparnis',
          description:
            'Nutze Premium-Transfers oder Direkttaxis für einen Bruchteil der Kosten. Die Sharing Economy, jetzt am Flughafen.'
        },
        {
          title: '🌱 Greifbare Nachhaltigkeit',
          description:
            'Weniger Autos bedeuten weniger Emissionen. Wir tracken deinen positiven Impact bei jeder geteilten Fahrt.'
        },
        {
          title: '🤝 Networking in der Luft',
          description:
            'Vernetze dich mit Profis und Gleichgesinnten auf dem Weg zu deinem Ziel. Networke, bevor du landest.'
        },
        {
          title: '⏱️ Stressfreie Koordination',
          description:
            'Integrierte Agenda und Auto-Alerts. Die ganze Gruppe weiß wann und wo, ohne hunderte Nachrichten.'
        },
        {
          title: '🛡️ Sicherheit zuerst',
          description:
            'Robustes Reputations- und Verifizierungssystem. Reise entspannt, denn Sicherheit ist unsere Priorität.'
        },
        {
          title: '📱 Alles an einem Ort',
          description:
            'Flug, Chat, Zahlungen und Transferdetails zentral in einer App. Deine Reise, organisiert von Start bis Ziel.'
        }
      ]
    },
    savings: {
      title: 'Der Impact von Reisen mit Cojauny',
      caption: 'Gemeinsam erreichen wir ehrgeizige Ziele. Sieh, was wir aufbauen.',
      metrics: [
        {
          value: '50.000+',
          label: 'Verbundene Passagiere',
          description: 'Unser Jahresziel für ein globales, effizientes Transportnetzwerk.'
        },
        {
          value: '50-75%',
          label: 'Durchschnittliche Ersparnis',
          description: 'Was du pro Transfer sparen kannst, indem du Taxi oder Privatwagen teilst.'
        },
        {
          value: '1.000+ t',
          label: 'CO₂ vermieden',
          description: 'Tonnen an Emissionen, die wir im ersten Jahr einsparen wollen.'
        },
        {
          value: '120+',
          label: 'Flughäfen',
          description: 'Präsenz an großen Hubs in Europa und Amerika vom ersten Tag an.'
        }
      ]
    },
    workflow: {
      title: 'Deine geteilte Fahrt in 5 Schritten',
      intro: 'Einfach, schnell und sicher. So funktioniert Cojauny.',
      steps: [
        {
          title: '1. Verifiziertes Profil',
          description: 'Erstelle dein Konto und verifiziere deine Identität für Zugang zur Community.'
        },
        {
          title: '2. Flug hinzufügen',
          description: 'Gib deine Flugnummer ein. Wir rufen Flugpläne ab und finden passende Begleiter.'
        },
        {
          title: '3. Beitreten oder Erstellen',
          description: 'Durchsuche Events oder schlage ein neues vor mit Zeit und Treffpunkt.'
        },
        {
          title: '4. Koordinieren',
          description: 'Nutze den sicheren Chat für Details. Er synchronisiert sich bei Landung.'
        },
        {
          title: '5. Fahren & Sparen',
          description: 'Teile die Fahrt, splitte die Kosten und logge deinen positiven Impact.'
        }
      ]
    },
    mockups: {
      heading: 'Entdecke das Cojauny-Erlebnis',
      description:
        'Ein Interface für Schnelligkeit und Klarheit. Manage deine Transfers ohne Komplikationen.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Suche',
          title: 'Finde deinen Flug',
          description:
            'Gib einfach deine Flugnummer ein. Das System erledigt den Rest, um Matches zu finden.',
          image: '/images/mockups/de/mockup-flight-search.svg'
        },
        {
          id: 'events-list',
          badge: 'Events',
          title: 'Verfügbare Optionen',
          description:
            'Sieh Transfers, Abendessen oder Meetups für deinen Flug. Plätze und Status in Echtzeit.',
          image: '/images/mockups/de/mockup-events-list.svg'
        },
        {
          id: 'event-detail',
          badge: 'Detail',
          title: 'Klare Informationen',
          description:
            'Wer organisiert, wer kommt mit, Kosten und Treffpunkt. Alles klar, bevor du beitrittst.',
          image: '/images/mockups/de/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Flüssige Kommunikation',
          description:
            'Chatte mit dem Organisator oder der Gruppe. Teile Standort und Ausgaben ohne die App zu verlassen.',
          image: '/images/mockups/de/mockup-chat.svg'
        },
        {
          id: 'profile',
          badge: 'Profil',
          title: 'Sichere Community',
          description:
            'Kenne deine Reisebegleiter. Reputation und Verifizierung für alle sichtbar.',
          image: '/images/mockups/de/mockup-profile.svg'
        },
        {
          id: 'impact',
          badge: 'Impact',
          title: 'Dein positiver Fußabdruck',
          description:
            'Verfolge deine Ersparnis- und Nachhaltigkeits-Stats. Dein Beitrag zählt.',
          image: '/images/mockups/de/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Werde Pionier des smarten Reisens',
      body: 'Erhalte privaten Beta-Zugang. Genieße spezielle Startpreise und gestalte die Zukunft von Cojauny mit. Begrenzte Plätze.',
      link: '#beta',
      linkLabel: 'Beta-Zugang anfordern'
    },
    pricing: {
      title: 'Flexible Pläne für dich',
      subtitle: 'Starte kostenlos und wachse mit deinen Reisebedürfnissen.',
      plans: {
        free: {
          name: 'Free',
          price: 'Kostenlos',
          description: 'Perfekt für Gelegenheitsreisende. Manage eine aktive Reise zur Zeit ohne Kosten.',
          cta: 'Kostenloses Konto'
        },
        premium: {
          name: 'Premium',
          price: '4,99€/Monat',
          description: 'Für Vielflieger. Unbegrenztes Management, Gruppenchat und Prio-Support. 49€/Jahr.',
          cta: 'Werde Premium'
        }
      },
      comparison: {
        title: 'Plan-Vergleich',
        features: [
          {
            feature: 'Gleichzeitig aktive Flüge',
            free: '1',
            premium: 'Unbegrenzt'
          },
          {
            feature: 'Gleichzeitig aktive Events',
            free: '1',
            premium: 'Unbegrenzt'
          },
          {
            feature: 'Neue Events erstellen',
            free: false,
            premium: true
          },
          {
            feature: 'Chat mit Organisator',
            free: true,
            premium: true
          },
          {
            feature: 'Voller Gruppenchat',
            free: false,
            premium: true
          },
          {
            feature: 'Wiederkehrende Events',
            free: false,
            premium: true
          },
          {
            feature: 'Detaillierte Statistiken',
            free: 'Basis',
            premium: 'Erweitert'
          },
          {
            feature: 'Prioritätssupport',
            free: false,
            premium: true
          },
          {
            feature: 'Premium-Badge',
            free: false,
            premium: true
          }
        ]
      }
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      subtitle: 'Wir beantworten deine Zweifel zu Cojauny',
      items: [
        {
          question: 'Wie funktioniert das Matching?',
          answer: 'Gib Flug und Datum ein. Wir gleichen das mit unserer globalen Datenbank ab und zeigen dir Reisende auf deinem Flug oder mit passenden Zeiten zum Teilen.'
        },
        {
          question: 'Ist es sicher, mit Fremden zu reisen?',
          answer: 'Sicherheit hat Priorität. Wir verifizieren Profile mit Ausweis und Foto. Das Bewertungssystem und der Vorab-Chat lassen dich deine Begleiter kennenlernen.'
        },
        {
          question: 'Kann ich meine Teilnahme stornieren?',
          answer: 'Ja, du kannst ein Event in der App verlassen. Als Organisator bitte frühzeitig Bescheid geben. Häufige Stornierungen können deine Reputation beeinflussen.'
        },
        {
          question: 'Was bietet der Premium-Plan?',
          answer: 'Premium entfernt Limits für gleichzeitige Reisen, aktiviert den vollen Gruppenchat, bietet erweiterte Stats und Prio-Support. Ideal, wenn du oft fliegst.'
        },
        {
          question: 'Wie wird der Transport bezahlt?',
          answer: 'Cojauny wickelt keine Transportzahlungen ab. Nutzer einigen sich auf die Teilung (Bar, Apps, etc.). Die App hilft beim fairen Split-Rechnen.'
        },
        {
          question: 'Welche Art von Events gibt es?',
          answer: 'Vom geteilten Taxi zum Flughafen bis zum Abendessen am Ziel. Premium-Nutzer können jede Art von eigenem Event erstellen.'
        },
        {
          question: 'Welche Flughäfen werden unterstützt?',
          answer: 'Wir sind an 120+ internationalen Flughäfen. Ist deiner nicht dabei, kannst du ihn anfragen und wir fügen ihn nach Bedarf hinzu.'
        },
        {
          question: 'Wie schützt ihr meine Daten?',
          answer: 'Wir halten uns strikt an die DSGVO. Wir zeigen nur das Nötigste. Deine privaten Kontaktdaten werden nie automatisch geteilt.'
        },
        {
          question: 'Ist es in meiner Sprache?',
          answer: 'Ja, Cojauny unterstützt 78 Sprachen und erkennt deine automatisch. Wir erleichtern die Kommunikation in internationalen Gruppen.'
        },
        {
          question: 'Wie viel kann ich sparen?',
          answer: 'Hängt von Route und Gruppe ab, aber im Schnitt ca. 50-75% im Vergleich zum Einzeltaxi.'
        },
        {
          question: 'Gibt es Jahresrabatt?',
          answer: 'Ja, der Jahresplan kostet 49€, das sind 17% Ersparnis gegenüber monatlich. Er zahlt sich nach sehr wenigen Reisen aus.'
        },
        {
          question: 'Was wenn mein Flug Verspätung hat?',
          answer: 'Wir erhalten Echtzeit-Updates. Wir benachrichtigen die ganze Gruppe bei Änderungen, damit ihr umplanen oder stornieren könnt.'
        },
        {
          question: 'Wozu dienen Bewertungen?',
          answer: 'Sie schaffen Vertrauen. Nach der Reise bewertest du Pünktlichkeit und Freundlichkeit. Eine gute Reputation erleichtert es, künftig Begleiter zu finden.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Werde Teil der Reise-Revolution',
        subheading: 'Früher Zugang für Early Adopters. Exklusive Raten und direkter Draht zum Team.',
        title: 'Beta-Zugang anfordern',
        description:
          '🌟 Prio-Zugang · 💰 Spezialpreis · 🏆 Gründer-Badge · 🚀 Direkter Support',
        success:
          'Du bist dabei! Wir benachrichtigen dich per E-Mail, wenn dein Zugang bereit ist.',
        error: 'Fehler bei der Registrierung. Bitte versuche es erneut.',
        duplicateError:
          'Du bist bereits auf der Liste. Wir melden uns bald.',
        submit: 'Anfrage senden',
        checkboxLabel: 'Ich akzeptiere Cojaunys {privacyLink}.',
        privacyLinkLabel: 'Datenschutzrichtlinie',
        referralNotice:
          'ℹ️ Du erhältst einen Link zum Einladen. Wir zählen nur Besuche und Anmeldungen für deine Priorität, ohne Daten Dritter zu speichern.',
        optionalLabel: '(optional)',
        optionalHint: 'Felder mit "(optional)" sind nicht Pflicht.',
        fields: {
          fullName: 'Vollständiger Name',
          email: 'E-Mail-Adresse',
          country: 'Wohnsitzland',
          homeAirport: 'Stadt oder Flughafen',
          flightFrequency: 'Flugfrequenz',
          useCase: 'Was interessiert dich an Cojauny?',
          updatesOptIn: 'Produkt-Updates erhalten',
          privacyAcceptance: 'Ich akzeptiere die Datenverarbeitung für die Beta.'
        },
        placeholders: {
          homeAirport: 'Z.B. Berlin (BER), MUC',
          useCase: 'Ersparnis, Networking, Nachhaltigkeit...'
        },
        countryOptions: [
          { value: '', label: 'Wähle dein Land' },
          { value: 'es', label: 'Spanien' },
          { value: 'de', label: 'Deutschland' },
          { value: 'fr', label: 'Frankreich' },
          { value: 'uk', label: 'Vereinigtes Königreich' },
          { value: 'us', label: 'USA' },
          { value: 'mx', label: 'Mexiko' },
          { value: 'ar', label: 'Argentinien' },
          { value: 'co', label: 'Kolumbien' },
          { value: 'cl', label: 'Chile' },
          { value: 'other', label: 'Anderes Land' }
        ],
        flightFrequencyOptions: [
          { value: 'once', label: '1x im Jahr', description: 'Urlaub oder gelegentlich' },
          {
            value: 'two_to_five',
            label: '2–5x im Jahr',
            description: 'Vielflieger oder regelmäßiger Urlaub'
          },
          {
            value: 'six_to_ten',
            label: '6–10x im Jahr',
            description: 'Profis oder Pendler'
          },
          {
            value: 'more_than_ten',
            label: '10+x im Jahr',
            description: 'Crews und Heavy User'
          }
        ]
      },
      feedback: {
        heading: 'Deine Meinung zählt',
        subheading: 'Ideen, Vorschläge? Wir wollen von dir hören, um Cojauny zu verbessern.',
        title: 'Sende uns eine Nachricht',
        description:
          'Hast du einen Geschäftsvorschlag oder Feedback? Schreib uns.',
        success: 'Nachricht erhalten. Danke für deine Hilfe.',
        error: "Nachricht muss mindestens 10 Zeichen lang sein.",
        submit: 'Senden',
        optionalLabel: '(optional)',
        optionalHint: 'Felder sind Pflicht, außer anders angegeben.',
        fields: {
          fullName: 'Name',
          email: 'E-Mail',
          message: 'Deine Nachricht',
          useCase: 'Art der Anfrage',
          selectPlaceholder: 'Wähle eine Option'
        },
        caseOptions: [
          { value: 'feedback', label: 'Produkt-Feedback' },
          { value: 'idea', label: 'Neue Idee' },
          { value: 'business_proposal', label: 'Geschäftsvorschlag' }
        ]
      }
    },
    referralPanel: {
      title: 'Rücke in der Liste nach oben',
      subtitle: 'Teile Cojauny und erhalte bevorzugten Zugang.',
      yourLink: 'Dein Einladungslink',
      copyButton: 'Link kopieren',
      copiedButton: 'Kopiert',
      stats: {
        visits: 'Besuche',
        signups: 'Anmeldungen'
      },
      instructions: {
        title: 'Wie es funktioniert',
        step1: 'Teile deinen Link.',
        step2: 'Wir zählen anonyme Besuche.',
        step3: 'Wir geben Punkte bei Anmeldung.'
      },
      privacy:
        '100% anonymes System. Wir speichern keine Daten deiner Eingeladenen.'
    },
    cookie: {
      message:
        'Wir nutzen Cookies für dein Erlebnis. Du entscheidest, welche du akzeptierst.',
      acceptAll: 'Alle akzeptieren',
      reject: 'Nur notwendige',
      moreInfo: 'Mehr Info'
    },
    footer: {
      description: 'Cojauny verbindet Reisende zum Teilen von Transport, Kosten und Emissionen. Deine smarte Reise-Community.',
      rights: 'Alle Rechte vorbehalten.',
      appStoreSoon: 'App Store (bald)',
      playStoreSoon: 'Google Play (bald)',
      privacy: 'Datenschutz',
      cookies: 'Cookies',
      terms: 'AGB',
      acceptableUse: 'Nutzung',
      faq: 'FAQ',
      subprocessors: 'Subprozessoren',
      contact: 'Kontakt',
      blog: 'Blog',
      languageLabel: 'Sprache',
      madeInEurope: 'Hergestellt in Europa.'
    }
  },
  fr: {
    skipLink: 'Aller au contenu principal',
    header: {
      home: 'Accueil',
      features: 'Fonctionnalités',
      demo: 'App',
      pricing: 'Tarifs',
      beta: 'Accès Bêta',
      blog: 'Blog',
      benefits: 'Avantages',
      impact: 'Impact',
      workflow: 'Fonctionnement',
      faq: 'FAQ',
      feedback: 'Feedback'
    },
    seo: {
      title: 'Cojauny : Partagez votre trajet aéroport et économisez jusqu\'à 75%',
      description:
        'Connectez-vous avec les passagers de votre vol pour partager taxis, navettes ou VTC. Matching automatique, profils vérifiés et économies réelles. Disponible dans 120+ aéroports.',
      keywords: [
        'partage trajet aéroport',
        'covoiturage aéroport',
        'partager frais taxi',
        'transport aéroport économique',
        'alternative navette aéroport',
        'application partage trajet',
        'covoiturage avion',
        'transfert aéroport partagé',
        'voyage durable'
      ],
      ogTitle: 'Cojauny : Votre transfert aéroport à moitié prix',
      ogDescription:
        'Trouvez des co-voyageurs vérifiés sur votre vol. Chat sécurisé, partage de frais automatique et économies mesurables.'
    },
    hero: {
      eyebrow: 'Vous voyagez bientôt ? Voyagez plus intelligemment.',
      title: 'Partagez le trajet avec les passagers de votre vol',
      subtitle:
        'Cojauny vous connecte automatiquement avec des voyageurs du même vol pour partager taxi, van ou VTC. Économisez jusqu\'à 75%, réduisez votre empreinte carbone et voyagez en sécurité avec des profils vérifiés.',
      primaryCta: 'Essayer gratuitement',
      secondaryCta: 'Comment ça marche',
      imageAlt: 'Interface Cojauny montrant le matching de vol et les économies'
    },
    features: {
      title: 'Tout pour un voyage optimisé',
      subtitle:
        'Fini l\'incertitude. Cojauny allie technologie de vol, sécurité et communauté pour un transfert sans accroc.',
      items: [
        {
          title: 'Matching Intelligent',
          description:
            'Nous identifions qui partage votre vol ou votre route et suggérons le groupe idéal pour diviser les frais et aligner les horaires.',
          iconName: 'bolt'
        },
        {
          title: 'Événements avec Places',
          description:
            'Créez ou rejoignez des transferts, repas ou activités. Gérez la capacité, les lieux de rendez-vous et les participants en temps réel.',
          iconName: 'users'
        },
        {
          title: 'Chat Sécurisé 48h',
          description:
            'Communiquez via un canal chiffré qui s\'active avant le vol et disparaît après 48h. Confidentialité totale, sans échange de numéros.',
          iconName: 'chat'
        },
        {
          title: 'Confiance Vérifiée',
          description:
            'Sachez avec qui vous voyagez. Tous les profils disposent d\'une vérification d\'identité, de photos et d\'un système de notation.',
          iconName: 'shield'
        },
        {
          title: 'Support Linguistique Mondial',
          description:
            'L\'application s\'adapte à 78 langues, traduction automatique incluse. Coordonnez-vous sans barrière linguistique.',
          iconName: 'globe'
        },
        {
          title: 'Alertes Voyage',
          description:
            'Recevez des notifications prioritaires pour les changements de vol, rappels de rendez-vous et l\'arrivée du chauffeur.',
          iconName: 'sparkles'
        },
        {
          title: 'Tableau de Bord Impact',
          description:
            'Visualisez vos économies cumulées et le CO₂ évité pour chaque trajet. Des données réelles à partager avec votre communauté.',
          iconName: 'bolt'
        },
        {
          title: 'Trajets Récurrents',
          description:
            'Vous faites souvent la même route ? Configurez des alertes auto et trouvez des compagnons pour vos déplacements réguliers.',
          iconName: 'users'
        }
      ]
    },
    value: {
      title: 'Pourquoi choisir Cojauny',
      subtitle:
        'Nous résolvons le problème des transferts individuels coûteux et de la coordination chaotique. Une expérience de voyage partagée, sûre et efficace.',
      items: [
        {
          title: '💸 Économies Réelles',
          description:
            'Accédez à des transferts premium ou taxis directs pour une fraction du prix. L\'économie du partage, maintenant à l\'aéroport.'
        },
        {
          title: '🌱 Durabilité Concrète',
          description:
            'Moins de voitures signifie moins d\'émissions. Nous suivons votre impact positif à chaque trajet partagé.'
        },
        {
          title: '🤝 Networking en Vol',
          description:
            'Connectez-vous avec des professionnels et des personnes partageant vos intérêts en route vers votre destination.'
        },
        {
          title: '⏱️ Coordination Sans Stress',
          description:
            'Agenda intégré et alertes auto. Tout le groupe sait quand et où, sans des centaines de messages.'
        },
        {
          title: '🛡️ Sécurité Avant Tout',
          description:
            'Système robuste de réputation et vérification. Voyagez l\'esprit tranquille, la sécurité est notre priorité.'
        },
        {
          title: '📱 Tout au Même Endroit',
          description:
            'Vol, chat, paiements et détails du transfert centralisés dans une app. Votre voyage, organisé de A à Z.'
        }
      ]
    },
    savings: {
      title: 'L\'impact de vos voyages avec Cojauny',
      caption: 'Ensemble, nous atteignons des objectifs ambitieux. Voyez ce que nous construisons.',
      metrics: [
        {
          value: '50 000+',
          label: 'Passagers Connectés',
          description: 'Notre objectif annuel pour un réseau de transport mondial et efficace.'
        },
        {
          value: '50-75%',
          label: 'Économie Moyenne',
          description: 'Ce que vous pouvez économiser par transfert en partageant taxi ou VTC.'
        },
        {
          value: '1 000+ t',
          label: 'CO₂ Évité',
          description: 'Tonnes d\'émissions que nous visons à économiser la première année.'
        },
        {
          value: '120+',
          label: 'Aéroports',
          description: 'Présence dans les grands hubs en Europe et Amérique dès le premier jour.'
        }
      ]
    },
    workflow: {
      title: 'Votre trajet partagé en 5 étapes',
      intro: 'Simple, rapide et sûr. Voici comment fonctionne Cojauny.',
      steps: [
        {
          title: '1. Profil Vérifié',
          description: 'Créez votre compte et vérifiez votre identité pour accéder à la communauté.'
        },
        {
          title: '2. Ajouter un Vol',
          description: 'Entrez votre numéro de vol. Nous récupérons les horaires et trouvons des compagnons compatibles.'
        },
        {
          title: '3. Rejoindre ou Créer',
          description: 'Parcourez les événements ou proposez-en un nouveau avec heure et lieu de rendez-vous.'
        },
        {
          title: '4. Coordonner',
          description: 'Utilisez le chat sécurisé pour les détails. Il se synchronise à l\'atterrissage.'
        },
        {
          title: '5. Rouler & Économiser',
          description: 'Partagez le trajet, divisez les frais et enregistrez votre impact positif.'
        }
      ]
    },
    mockups: {
      heading: 'Découvrez l\'expérience Cojauny',
      description:
        'Une interface conçue pour la rapidité et la clarté. Gérez vos transferts sans complications.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Recherche',
          title: 'Trouvez votre vol',
          description:
            'Entrez simplement votre numéro de vol. Le système fait le reste pour trouver des correspondances.',
          image: '/images/mockups/fr/mockup-flight-search.svg'
        },
        {
          id: 'events-list',
          badge: 'Événements',
          title: 'Options Disponibles',
          description:
            'Voyez les transferts, dîners ou rencontres pour votre vol. Places et statut en temps réel.',
          image: '/images/mockups/fr/mockup-events-list.svg'
        },
        {
          id: 'event-detail',
          badge: 'Détail',
          title: 'Informations Claires',
          description:
            'Qui organise, qui vient, coûts et lieu. Tout est clair avant de rejoindre.',
          image: '/images/mockups/fr/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Communication Fluide',
          description:
            'Chattez avec l\'organisateur ou le groupe. Partagez localisation et dépenses sans quitter l\'app.',
          image: '/images/mockups/fr/mockup-chat.svg'
        },
        {
          id: 'profile',
          badge: 'Profil',
          title: 'Communauté Sûre',
          description:
            'Connaissez vos compagnons de voyage. Réputation et vérification visibles pour tous.',
          image: '/images/mockups/fr/mockup-profile.svg'
        },
        {
          id: 'impact',
          badge: 'Impact',
          title: 'Votre Empreinte Positive',
          description:
            'Suivez vos statistiques d\'économies et de durabilité. Votre contribution compte.',
          image: '/images/mockups/fr/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Devenez un pionnier du voyage intelligent',
      body: 'Obtenez un accès bêta privé. Profitez de tarifs de lancement et façonnez l\'avenir de Cojauny. Places limitées.',
      link: '#beta',
      linkLabel: 'Demander l\'accès Bêta'
    },
    pricing: {
      title: 'Des plans flexibles pour vous',
      subtitle: 'Commencez gratuitement et évoluez selon vos besoins de voyage.',
      plans: {
        free: {
          name: 'Free',
          price: 'Gratuit',
          description: 'Parfait pour les voyageurs occasionnels. Gérez un voyage actif à la fois sans frais.',
          cta: 'Compte Gratuit'
        },
        premium: {
          name: 'Premium',
          price: '4,99€/mois',
          description: 'Pour les grands voyageurs. Gestion illimitée, chat de groupe et support prioritaire. 49€/an.',
          cta: 'Passer Premium'
        }
      },
      comparison: {
        title: 'Comparatif des plans',
        features: [
          {
            feature: 'Vols actifs simultanés',
            free: '1',
            premium: 'Illimités'
          },
          {
            feature: 'Événements actifs simultanés',
            free: '1',
            premium: 'Illimités'
          },
          {
            feature: 'Créer de nouveaux événements',
            free: false,
            premium: true
          },
          {
            feature: 'Chat avec l\'organisateur',
            free: true,
            premium: true
          },
          {
            feature: 'Chat de groupe complet',
            free: false,
            premium: true
          },
          {
            feature: 'Événements récurrents',
            free: false,
            premium: true
          },
          {
            feature: 'Statistiques détaillées',
            free: 'Basique',
            premium: 'Avancé'
          },
          {
            feature: 'Support prioritaire',
            free: false,
            premium: true
          },
          {
            feature: 'Badge Premium',
            free: false,
            premium: true
          }
        ]
      }
    },
    faq: {
      title: 'Questions Fréquentes',
      subtitle: 'Nous répondons à vos doutes sur Cojauny',
      items: [
        {
          question: 'Comment fonctionne le matching ?',
          answer: 'Entrez vol et date. Nous croisons cela avec notre base mondiale et vous montrons les voyageurs sur votre vol ou avec des horaires compatibles pour partager.'
        },
        {
          question: 'Est-ce sûr de voyager avec des inconnus ?',
          answer: 'La sécurité est prioritaire. Nous vérifions les profils avec pièce d\'identité et photo. Le système de notation et le chat préalable vous permettent de connaître vos compagnons.'
        },
        {
          question: 'Puis-je annuler ma participation ?',
          answer: 'Oui, vous pouvez quitter un événement dans l\'app. En tant qu\'organisateur, prévenez tôt. Les annulations fréquentes peuvent affecter votre réputation.'
        },
        {
          question: 'Que propose le plan Premium ?',
          answer: 'Premium supprime les limites de voyages simultanés, active le chat de groupe complet, offre des stats avancées et un support prioritaire. Idéal si vous volez souvent.'
        },
        {
          question: 'Comment payer le transport ?',
          answer: 'Cojauny ne gère pas le paiement du transport. Les utilisateurs s\'arrangent pour le partage (espèces, apps, etc.). L\'app aide au calcul équitable.'
        },
        {
          question: 'Quels types d\'événements existent ?',
          answer: 'Du taxi partagé vers l\'aéroport au dîner à destination. Les utilisateurs Premium peuvent créer tout type d\'événement personnalisé.'
        },
        {
          question: 'Quels aéroports sont supportés ?',
          answer: 'Nous sommes dans 120+ aéroports internationaux. Si le vôtre manque, demandez-le et nous l\'ajouterons selon la demande.'
        },
        {
          question: 'Comment protégez-vous mes données ?',
          answer: 'Nous respectons strictement le RGPD. Nous n\'affichons que le nécessaire. Vos coordonnées privées ne sont jamais partagées automatiquement.'
        },
        {
          question: 'Est-ce dans ma langue ?',
          answer: 'Oui, Cojauny supporte 78 langues et détecte la vôtre automatiquement. Nous facilitons la communication dans les groupes internationaux.'
        },
        {
          question: 'Combien puis-je économiser ?',
          answer: 'Cela dépend du trajet et du groupe, mais en moyenne environ 50-75% par rapport à un taxi individuel.'
        },
        {
          question: 'Y a-t-il une réduction annuelle ?',
          answer: 'Oui, le plan annuel coûte 49€, soit 17% d\'économie par rapport au mensuel. Il est rentabilisé après très peu de voyages.'
        },
        {
          question: 'Et si mon vol a du retard ?',
          answer: 'Nous recevons des mises à jour en temps réel. Nous notifions tout le groupe en cas de changement pour que vous puissiez vous réorganiser ou annuler.'
        },
        {
          question: 'À quoi servent les évaluations ?',
          answer: 'Elles créent la confiance. Après le voyage, vous notez ponctualité et amabilité. Une bonne réputation facilite la recherche de futurs compagnons.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Rejoignez la révolution du voyage',
        subheading: 'Accès anticipé pour les Early Adopters. Tarifs exclusifs et lien direct avec l\'équipe.',
        title: 'Demander l\'accès Bêta',
        description:
          '🌟 Accès Prio · 💰 Prix Spécial · 🏆 Badge Fondateur · 🚀 Support Direct',
        success:
          'Vous êtes inscrit ! Nous vous informerons par e-mail dès que votre accès sera prêt.',
        error: 'Erreur lors de l\'inscription. Veuillez réessayer.',
        duplicateError:
          'Vous êtes déjà sur la liste. Nous vous contactons bientôt.',
        submit: 'Envoyer la demande',
        checkboxLabel: 'J\'accepte la {privacyLink} de Cojauny.',
        privacyLinkLabel: 'Politique de Confidentialité',
        referralNotice:
          'ℹ️ Vous recevrez un lien d\'invitation. Nous comptons uniquement les visites et inscriptions pour votre priorité, sans stocker de données tierces.',
        optionalLabel: '(optionnel)',
        optionalHint: 'Les champs avec "(optionnel)" ne sont pas obligatoires.',
        fields: {
          fullName: 'Nom Complet',
          email: 'Adresse E-mail',
          country: 'Pays de Résidence',
          homeAirport: 'Ville ou Aéroport',
          flightFrequency: 'Fréquence de Vol',
          useCase: 'Qu\'est-ce qui vous intéresse chez Cojauny ?',
          updatesOptIn: 'Recevoir les mises à jour produit',
          privacyAcceptance: 'J\'accepte le traitement des données pour la Bêta.'
        },
        placeholders: {
          homeAirport: 'Ex. Paris (CDG), ORY',
          useCase: 'Économies, Networking, Durabilité...'
        },
        countryOptions: [
          { value: '', label: 'Choisissez votre pays' },
          { value: 'es', label: 'Espagne' },
          { value: 'de', label: 'Allemagne' },
          { value: 'fr', label: 'France' },
          { value: 'uk', label: 'Royaume-Uni' },
          { value: 'us', label: 'États-Unis' },
          { value: 'mx', label: 'Mexique' },
          { value: 'ar', label: 'Argentine' },
          { value: 'co', label: 'Colombie' },
          { value: 'cl', label: 'Chili' },
          { value: 'other', label: 'Autre pays' }
        ],
        flightFrequencyOptions: [
          { value: 'once', label: '1x par an', description: 'Vacances ou occasionnel' },
          {
            value: 'two_to_five',
            label: '2–5x par an',
            description: 'Voyageur fréquent ou vacances régulières'
          },
          {
            value: 'six_to_ten',
            label: '6–10x par an',
            description: 'Professionnels ou navetteurs'
          },
          {
            value: 'more_than_ten',
            label: '10+x par an',
            description: 'Équipages et Heavy Users'
          }
        ]
      },
      feedback: {
        heading: 'Votre avis compte',
        subheading: 'Idées, suggestions ? Nous voulons vous entendre pour améliorer Cojauny.',
        title: 'Envoyez-nous un message',
        description:
          'Avez-vous une proposition commerciale ou un retour ? Écrivez-nous.',
        success: 'Message reçu. Merci pour votre aide.',
        error: "Le message doit contenir au moins 10 caractères.",
        submit: 'Envoyer',
        optionalLabel: '(optionnel)',
        optionalHint: 'Champs obligatoires sauf indication contraire.',
        fields: {
          fullName: 'Nom',
          email: 'E-mail',
          message: 'Votre message',
          useCase: 'Type de demande',
          selectPlaceholder: 'Choisissez une option'
        },
        caseOptions: [
          { value: 'feedback', label: 'Retour Produit' },
          { value: 'idea', label: 'Nouvelle Idée' },
          { value: 'business_proposal', label: 'Proposition Commerciale' }
        ]
      }
    },
    referralPanel: {
      title: 'Montez dans la liste',
      subtitle: 'Partagez Cojauny et obtenez un accès privilégié.',
      yourLink: 'Votre lien d\'invitation',
      copyButton: 'Copier le lien',
      copiedButton: 'Copié',
      stats: {
        visits: 'Visites',
        signups: 'Inscriptions'
      },
      instructions: {
        title: 'Comment ça marche',
        step1: 'Partagez votre lien.',
        step2: 'Nous comptons les visites anonymes.',
        step3: 'Nous donnons des points à l\'inscription.'
      },
      privacy:
        'Système 100% anonyme. Nous ne stockons pas les données de vos invités.'
    },
    cookie: {
      message:
        'Nous utilisons des cookies pour votre expérience. Vous décidez lesquels accepter.',
      acceptAll: 'Tout accepter',
      reject: 'Nécessaires seulement',
      moreInfo: 'Plus d\'infos'
    },
    footer: {
      description: 'Cojauny connecte les voyageurs pour partager transport, coûts et émissions. Votre communauté de voyage intelligente.',
      rights: 'Tous droits réservés.',
      appStoreSoon: 'App Store (bientôt)',
      playStoreSoon: 'Google Play (bientôt)',
      privacy: 'Confidentialité',
      cookies: 'Cookies',
      terms: 'CGU',
      acceptableUse: 'Utilisation',
      faq: 'FAQ',
      subprocessors: 'Sous-traitants',
      contact: 'Contact',
      blog: 'Blog',
      languageLabel: 'Langue',
      madeInEurope: 'Fait en Europe.'
    }
  }
};

export function getLandingCopy(locale: Locale): LandingCopy {
  return landingCopy[locale] ?? landingCopy[defaultLocale];
}


