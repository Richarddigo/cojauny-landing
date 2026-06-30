import type { Locale } from './config';
import { defaultLocale } from './config';

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
  privacyLabel: string;
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
    contact: string;
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
  heroVariants?: {
    savings: {
      title: string;
      subtitle: string;
    };
  };
  heroQuickSignup: {
    ariaLabel: string;
    label: string;
    referralHint: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    submit: string;
    submitting: string;
    privacyNote: string;
    success: string;
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
    accountDeletion: string;
    acceptableUse: string;
    faq: string;
    subprocessors: string;
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
      contact: 'Contacto',
      blog: 'Blog',
      benefits: 'Ventajas',
      impact: 'Ahorro',
      workflow: 'Cómo funciona',
      faq: 'Preguntas',
      feedback: 'Feedback'
    },
    seo: {
      title: 'Cojauny: Comunidad verificada de transporte compartido por vuelo',
      description:
        'Conecta con pasajeros verificados de tu mismo vuelo para compartir transporte al aeropuerto. Matching por número de vuelo, perfiles con documento y valoraciones por estrellas. +120 aeropuertos.',
      keywords: [
        'compartir taxi aeropuerto',
        'transporte compartido aeropuerto',
        'app viajes aeropuerto',
        'carpool aeropuerto',
        'viaje compartido vuelo',
        'coordinar transporte vuelo',
        'comunidad viajeros verificada',
        'traslado aeropuerto seguro',
        'compartir coche mismo vuelo',
        'perfil verificado aeropuerto'
      ],
      ogTitle: 'Cojauny: Viaja con personas de tu mismo vuelo, verificadas',
      ogDescription:
        'Comunidad de viaje verificada que te empareja con pasajeros de tu vuelo exacto. Perfiles con documento, valoraciones y chat seguro antes del trayecto.'
    },
    hero: {
      eyebrow: 'Mismo vuelo. Viajeros verificados. Trayecto compartido.',
      title:
        'Una comunidad de viaje verificada que te conecta con personas de tu mismo vuelo, para que nunca viajes con un desconocido ni pagues de más en tu traslado',
      subtitle:
        'Matching por número de vuelo, perfiles verificados con documento y foto, y valoraciones por estrellas. Conoces con quién compartes antes de salir de casa.',
      primaryCta: 'Solicitar acceso beta',
      secondaryCta: 'Cómo funciona',
      imageAlt: 'App Cojauny mostrando matching por vuelo y perfiles verificados'
    },
    heroVariants: {
      savings: {
        title:
          'Comparte tu traslado al aeropuerto y ahorra hasta un 75% con pasajeros verificados de tu mismo vuelo',
        subtitle:
          'Matching por número de vuelo, perfiles con documento y valoraciones visibles. La confianza primero; el ahorro es la confirmación.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Registro rápido en la lista de espera beta',
      label: 'Reserva tu plaza en la beta — solo nombre y email',
      referralHint: 'Invita amigos con tu enlace único y sube en la lista de espera.',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      submit: 'Unirme a la beta',
      submitting: 'Enviando…',
      privacyNote: 'Acepto los términos y la política de privacidad de Cojauny para solicitar acceso beta.',
      success: '¡Listo! Te avisaremos por email cuando tu acceso esté disponible.'
    },
    features: {
      title: 'Diseñado para que confíes antes de compartir',
      subtitle:
        'Matching por vuelo, perfiles verificados, chat seguro y reputación visible. Cojauny elimina la incertidumbre de viajar con desconocidos.',
      items: [
        {
          title: 'Matching por Vuelo',
          description:
            'Introduce tu número de vuelo y conectamos automáticamente con pasajeros del mismo trayecto. No es un coche compartido al azar: es tu vuelo.',
          iconName: 'bolt'
        },
        {
          title: 'Confianza Verificada',
          description:
            'Todos los perfiles pasan verificación de identidad y foto. Consulta valoraciones y historial antes de unirte a un trayecto.',
          iconName: 'shield'
        },
        {
          title: 'Chat Seguro 48h',
          description:
            'Comunícate en un canal cifrado que se activa antes del vuelo y desaparece 48h después. Conócete al grupo sin compartir tu número.',
          iconName: 'chat'
        },
        {
          title: 'Valoraciones por Estrellas',
          description:
            'Tras cada viaje, puntualidad, comunicación y amabilidad se valoran con estrellas. La reputación te ayuda a elegir con criterio.',
          iconName: 'sparkles'
        },
        {
          title: 'Eventos con Cupos',
          description:
            'Publica o únete a traslados con aforo controlado. Ves quién organiza, quién va y el punto de encuentro antes de confirmar.',
          iconName: 'users'
        },
        {
          title: 'Alertas de Viaje',
          description:
            'Recibe notificaciones sobre cambios de vuelo, recordatorios de encuentro y avisos de llegada del conductor al instante.',
          iconName: 'sparkles'
        },
        {
          title: 'Multilenguaje Global',
          description:
            'La app se adapta a 78 idiomas con traducción automática. Coordina con viajeros de todo el mundo sin barreras.',
          iconName: 'globe'
        },
        {
          title: 'Panel de Impacto',
          description:
            'Cuando compartes, también ahorras. Visualiza tu ahorro acumulado y el CO₂ evitado en cada viaje completado.',
          iconName: 'bolt'
        }
      ]
    },
    value: {
      title: 'Viaja con gente de tu vuelo, no con desconocidos al azar',
      subtitle:
        'Cojauny resuelve primero la pregunta que importa: ¿me fío? Solo después viene el ahorro. Una comunidad verificada con contexto compartido.',
      items: [
        {
          title: '🛡️ Seguridad verificada',
          description:
            'Perfiles con documento de identidad, foto y sistema de reputación por estrellas. Sabes con quién viajas antes de confirmar.'
        },
        {
          title: '✈️ Tu mismo vuelo, contexto compartido',
          description:
            'No es un coche compartido al azar: compartes trayecto con pasajeros de tu vuelo exacto. Mismo destino, mismos horarios, misma terminal.'
        },
        {
          title: '⭐ Reputación transparente',
          description:
            'Valoraciones visibles de viajes anteriores. Elige compañeros con historial positivo y construye tu propia reputación.'
        },
        {
          title: '⏱️ Coordinación sin estrés',
          description:
            'Agenda integrada y avisos automáticos. Todo el grupo sabe dónde y cuándo encontrarse sin cientos de mensajes.'
        },
        {
          title: '🤝 Comunidad, no extraños',
          description:
            'Conecta con viajeros que van al mismo sitio que tú. El chat previo te permite conocer al grupo antes del trayecto.'
        },
        {
          title: '💸 Y además, ahorras',
          description:
            'Cuando compartes con confianza, el coste se divide. Un beneficio real, pero nunca a costa de tu seguridad.'
        }
      ]
    },
    savings: {
      title: 'Y además, compartir también ahorra',
      caption: 'Una vez que confías y coordinas, el ahorro llega solo. Esto es lo que puedes esperar al compartir trayecto.',
      metrics: [
        {
          value: '120+',
          label: 'Aeropuertos',
          description: 'Red activa en los principales hubs de Europa y América.'
        },
        {
          value: '50.000+',
          label: 'Pasajeros conectados',
          description: 'Meta anual para crear una red global con masa crítica en rutas clave.'
        },
        {
          value: '50-75%',
          label: 'Ahorro al compartir',
          description: 'Rango medio de ahorro por traslado cuando divides taxi o coche privado con tu grupo.'
        },
        {
          value: '1.000+ t',
          label: 'CO₂ evitado',
          description: 'Toneladas de emisiones que planeamos reducir en nuestro primer año operativo.'
        }
      ]
    },
    workflow: {
      title: 'Tu viaje compartido en 5 pasos',
      intro: 'De tu número de vuelo a un trayecto de confianza. Así funciona el matching en Cojauny.',
      steps: [
        {
          title: '1. Perfil verificado',
          description: 'Crea tu cuenta con foto y verifica tu identidad. Accedes a una comunidad donde todos pasan el mismo filtro.'
        },
        {
          title: '2. Añade tu vuelo',
          description: 'Ingresa tu número de vuelo y fecha. Buscamos automáticamente pasajeros compatibles en el mismo trayecto.'
        },
        {
          title: '3. Revisa y elige',
          description: 'Consulta perfiles, valoraciones por estrellas y eventos disponibles. Tú decides con quién compartir.'
        },
        {
          title: '4. Coordina en chat seguro',
          description: 'Ultima detalles con el grupo en un canal cifrado. Punto de encuentro, horarios y reparto del coste, todo claro.'
        },
        {
          title: '5. Viaja y valora',
          description: 'Comparte el trayecto con tranquilidad. Al terminar, valora a tus compañeros y construye tu reputación.'
        }
      ]
    },
    mockups: {
      heading: 'Así se ve viajar con confianza',
      description:
        'Perfiles verificados, matching por vuelo, chat seguro y valoraciones visibles. La app que te muestra con quién viajas antes de salir.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Matching',
          title: 'Tu vuelo, tu grupo',
          description:
            'Introduce tu número de vuelo. El sistema encuentra pasajeros del mismo trayecto, no desconocidos al azar.',
          image: '/images/mockups/es/mockup-flight-search.svg'
        },
        {
          id: 'profile',
          badge: 'Perfil',
          title: 'Comunidad verificada',
          description:
            'Identidad verificada, foto y valoraciones por estrellas. Conoces a tus compañeros antes de confirmar.',
          image: '/images/mockups/es/mockup-profile.svg'
        },
        {
          id: 'event-detail',
          badge: 'Detalle',
          title: 'Todo claro antes de unirte',
          description:
            'Quién organiza, quién va, punto de encuentro y coste estimado. Sin sorpresas.',
          image: '/images/mockups/es/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Coordina con tranquilidad',
          description:
            'Habla con el grupo en un canal seguro. Conócete y organiza el trayecto sin compartir tu número.',
          image: '/images/mockups/es/mockup-chat.svg'
        },
        {
          id: 'events-list',
          badge: 'Eventos',
          title: 'Opciones para tu vuelo',
          description:
            'Traslados y encuentros para tu vuelo con plazas y participantes en tiempo real.',
          image: '/images/mockups/es/mockup-events-list.svg'
        },
        {
          id: 'impact',
          badge: 'Ahorro',
          title: 'El ahorro, como confirmación',
          description:
            'Cuando compartes con confianza, el coste se divide. Sigue tu ahorro acumulado tras cada viaje.',
          image: '/images/mockups/es/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Únete a la comunidad verificada de Cojauny',
      body: 'Accede a la beta privada: perfiles verificados, matching por vuelo y acceso anticipado al producto. Plazas limitadas para early adopters.',
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
          question: '¿Para qué sirven las valoraciones?',
          answer: 'Construyen confianza. Al finalizar un viaje, valoras la puntualidad y amabilidad. Una buena reputación te facilita encontrar compañeros en el futuro.'
        },
        {
          question: '¿Puedo cancelar mi asistencia?',
          answer: 'Sí, puedes salir de un evento desde la app. Si eres organizador, avisa con tiempo para no perjudicar al grupo. Las cancelaciones frecuentes pueden afectar tu reputación.'
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
          question: '¿Qué pasa si mi vuelo se retrasa?',
          answer: 'Recibimos actualizaciones en tiempo real. Notificamos a todo el grupo si hay cambios para que podáis reorganizaros o cancelar si es necesario.'
        },
        {
          question: '¿Qué ofrece el plan Premium?',
          answer: 'Premium elimina límites de viajes simultáneos, habilita el chat grupal completo, ofrece estadísticas avanzadas y soporte prioritario. Ideal si vuelas a menudo.'
        },
        {
          question: '¿Hay descuento anual?',
          answer: 'Sí, el plan anual cuesta 49€, lo que supone un ahorro del 17% frente al pago mensual. Se amortiza con muy pocos viajes.'
        },
        {
          question: '¿Cuánto puedo ahorrar?',
          answer: 'Depende del trayecto y el grupo, pero el ahorro medio ronda el 50-75% respecto a un taxi individual. Es la confirmación natural de compartir con confianza.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Únete a la comunidad verificada de Cojauny',
        subheading: 'Acceso anticipado a la beta: perfiles verificados, matching por vuelo y línea directa con el equipo.',
        title: 'Solicita acceso beta',
        description:
          '🌟 Acceso prioritario · 🛡️ Perfiles verificados · 🏆 Insignia fundadora · 🚀 Soporte directo',
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
          useCase: 'Seguridad, networking, sostenibilidad...'
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
        'Sistema 100% anónimo. No guardamos datos de tus invitados.',
      privacyLabel: 'Seguridad:'
    },
    cookie: {
      message:
        'Usamos cookies para mejorar tu experiencia. Tú decides cuáles aceptas.',
      acceptAll: 'Aceptar todas',
      reject: 'Solo necesarias',
      moreInfo: 'Más info'
    },
    footer: {
      description: 'Viajando juntos hacia un futuro sostenible.',
      rights: 'Todos los derechos reservados.',
      appStoreSoon: 'App Store (pronto)',
      playStoreSoon: 'Google Play (pronto)',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      terms: 'Términos',
      accountDeletion: 'Eliminar cuenta',
      acceptableUse: 'Uso aceptable',
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
      contact: 'Contact',
      blog: 'Blog',
      benefits: 'Benefits',
      impact: 'Savings',
      workflow: 'How it works',
      faq: 'FAQ',
      feedback: 'Feedback'
    },
    seo: {
      title: 'Cojauny: Verified travel community for shared airport rides',
      description:
        'Match with verified passengers on your exact flight to share airport transfers. Flight-number matching, ID-verified profiles, and star ratings. 120+ airports.',
      keywords: [
        'verified airport ride share',
        'airport transfer sharing',
        'flight ride sharing',
        'trusted travel community',
        'same flight carpool',
        'airport carpool app',
        'verified travel profiles',
        'safe airport transfer',
        'share taxi same flight',
        'sustainable travel'
      ],
      ogTitle: 'Cojauny: Travel with people on your exact flight, verified',
      ogDescription:
        'A verified travel community that matches you with passengers on your flight. ID-verified profiles, star ratings, and secure chat before you ride.'
    },
    hero: {
      eyebrow: 'Same flight. Verified travelers. Shared ride.',
      title:
        'A verified travel community that matches you with people on your exact flight, so you\'re never traveling with a stranger and never overpaying for a transfer again',
      subtitle:
        'Flight-number matching, ID-verified profiles, and star ratings. Know who you ride with before you leave home.',
      primaryCta: 'Reserve my beta spot',
      secondaryCta: 'See how it works',
      imageAlt: 'Cojauny app showing flight matching and verified profiles'
    },
    heroVariants: {
      savings: {
        title:
          'Share your airport transfer and save up to 75% with verified passengers on your exact flight',
        subtitle:
          'Flight-number matching, ID-verified profiles, and visible ratings. Trust comes first; savings are the confirmation.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Quick beta waitlist signup',
      label: 'Reserve your beta spot — just name and email',
      referralHint: 'Invite friends with your unique link and move up the waitlist.',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      submit: 'Join the beta',
      submitting: 'Sending…',
      privacyNote: 'I accept Cojauny\'s terms and privacy policy to request beta access.',
      success: 'You\'re in! We\'ll email you as soon as your access is ready.'
    },
    features: {
      title: 'Built so you trust before you share',
      subtitle:
        'Flight matching, verified profiles, secure chat, and visible reputation. Cojauny removes the uncertainty of riding with strangers.',
      items: [
        {
          title: 'Flight Matching',
          description:
            'Enter your flight number and we connect you with passengers on the same trip. Not a random rideshare — your exact flight.',
          iconName: 'bolt'
        },
        {
          title: 'Verified Profiles',
          description:
            'Every profile passes ID verification and photo checks. Review ratings and history before joining a ride.',
          iconName: 'shield'
        },
        {
          title: 'Real-Time Chat',
          description:
            'Talk to your group in an encrypted channel before and during the trip. Get to know companions without sharing your phone number.',
          iconName: 'chat'
        },
        {
          title: 'Star Ratings',
          description:
            'After each trip, rate punctuality, communication, and friendliness. Reputation helps you choose with confidence.',
          iconName: 'sparkles'
        },
        {
          title: 'Events with Spots',
          description:
            'Join or create rides with controlled capacity. See the organizer, attendees, and meeting point before you confirm.',
          iconName: 'users'
        },
        {
          title: 'Smart Notifications',
          description:
            'Prioritized alerts for flight changes, meeting reminders, and driver arrival notices.',
          iconName: 'sparkles'
        },
        {
          title: '78 Languages Supported',
          description:
            'The product experience adapts to 78 languages, including automated messages. Coordinate in your native language.',
          iconName: 'globe'
        },
        {
          title: 'Savings & Impact Stats',
          description:
            'When you share with confidence, you also save. Track accumulated savings and avoided CO₂ after each completed trip.',
          iconName: 'bolt'
        }
      ]
    },
    value: {
      title: 'Ride with people on your flight, not random strangers',
      subtitle:
        'Cojauny answers the question that matters first: can I trust them? Savings come after. A verified community with shared context.',
      items: [
        {
          title: '🛡️ Verified safety',
          description:
            'ID-verified profiles, photos, and a star-rating reputation system. You know who you ride with before you confirm.'
        },
        {
          title: '✈️ Same flight, shared context',
          description:
            'Not a random carpool: you share rides with passengers on your exact flight. Same destination, schedule, and terminal.'
        },
        {
          title: '⭐ Transparent reputation',
          description:
            'Visible ratings from past trips. Choose companions with positive history and build your own reputation.'
        },
        {
          title: '⏱️ Coordination without chaos',
          description:
            'Agenda, reminders, and auto-confirmations. Everyone knows when and where to meet without endless messages.'
        },
        {
          title: '🤝 Community, not strangers',
          description:
            'Connect with travelers heading to the same place. Pre-trip chat lets you meet the group before the ride.'
        },
        {
          title: '💸 And yes, you save too',
          description:
            'When you share with confidence, costs split naturally. A real benefit — never at the expense of your safety.'
        }
      ]
    },
    savings: {
      title: 'And sharing saves you money too',
      caption: 'Once you trust and coordinate, savings follow naturally. Here is what to expect when you share a ride.',
      metrics: [
        {
          value: '120+',
          label: 'Active Airports',
          description: 'Network of supported airports across Europe and the Americas.'
        },
        {
          value: '50,000+',
          label: 'Passengers Synced',
          description: 'Annual goal of connected passengers per flight to ensure critical mass on major routes.'
        },
        {
          value: '50-75%',
          label: 'Savings when sharing',
          description: 'Average savings range per transfer when splitting a taxi, van, or private car with your group.'
        },
        {
          value: '1,000+ t',
          label: 'CO₂ Avoided',
          description: 'Tons of carbon dioxide we aim to avoid during the first operational year.'
        }
      ]
    },
    workflow: {
      title: 'How a Cojauny ride is coordinated',
      intro: 'From your flight number to a trusted shared ride. Here is how matching works.',
      steps: [
        {
          title: '1. Create verified profile',
          description: 'Sign up with photo and verify your identity. Everyone in the community passes the same trust filter.'
        },
        {
          title: '2. Add your flight',
          description: 'Enter your flight number and date. We automatically find compatible passengers on the same trip.'
        },
        {
          title: '3. Review and choose',
          description: 'Browse profiles, star ratings, and available events. You decide who to share the ride with.'
        },
        {
          title: '4. Coordinate in secure chat',
          description: 'Finalize details with your group in an encrypted channel. Meeting point, timing, and cost split — all clear.'
        },
        {
          title: '5. Ride and rate',
          description: 'Share the trip with confidence. Afterward, rate your companions and build your reputation.'
        }
      ]
    },
    mockups: {
      heading: 'This is what traveling with confidence looks like',
      description:
        'Verified profiles, flight matching, secure chat, and visible ratings. The app that shows you who you ride with before you leave.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Matching',
          title: 'Your flight, your group',
          description:
            'Enter your flight number. The system finds passengers on the same trip — not random strangers.',
          image: '/images/mockups/en/mockup-flight-search.svg'
        },
        {
          id: 'profile',
          badge: 'Profile',
          title: 'Verified community',
          description:
            'ID-verified identity, photo, and star ratings. Know your companions before you confirm.',
          image: '/images/mockups/en/mockup-profile.svg'
        },
        {
          id: 'event-detail',
          badge: 'Detail',
          title: 'Everything clear before you join',
          description:
            'Organizer, attendees, meeting point, and estimated cost. No surprises.',
          image: '/images/mockups/en/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Coordinate with confidence',
          description:
            'Talk to your group in a secure channel. Meet and organize without sharing your phone number.',
          image: '/images/mockups/en/mockup-chat.svg'
        },
        {
          id: 'events-list',
          badge: 'Events',
          title: 'Options for your flight',
          description:
            'Rides and meetups for your flight with spots and participants in real time.',
          image: '/images/mockups/en/mockup-events-list.svg'
        },
        {
          id: 'impact',
          badge: 'Savings',
          title: 'Savings as confirmation',
          description:
            'When you share with confidence, costs split. Track your accumulated savings after each trip.',
          image: '/images/mockups/en/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Join Cojauny\'s verified travel community',
      body: 'Get private beta access: verified profiles, flight matching, and early product access. Limited spots for early adopters.',
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
          question: 'How exactly does the reputation and rating system work?',
          answer: 'After completing each event, all participants can evaluate each other on 3 dimensions: punctuality (arrived at agreed time), communication (replied fast in chat), and friendliness (was pleasant during trip). You use a 5-star system with optional comment. These ratings are averaged and appear on your public profile along with special badges (Gold Traveler 100+ trips, Eco-Warrior 5 tons CO₂ saved, etc.). High reputation (4.5+ stars) automatically positions you in top results when others search for travel companions, and makes you eligible for "Trusted Traveler" program with advanced verification. Negative ratings are analyzed by our moderation team to detect abuse.'
        },
        {
          question: 'Can I cancel my participation without penalty?',
          answer: 'Yes, you have total flexibility. You can leave any event directly from the app at no extra cost. If you are the event organizer, upon canceling, all participants receive an instant notification with options to reorganize the group or find alternatives. We recommend notifying as early as possible to allow others to reorganize. Your cancellation history is visible on your profile to maintain community transparency.'
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
          question: 'What happens if my flight is delayed, canceled, or gate changes?',
          answer: 'Cojauny receives real-time flight updates from multiple sources (airlines, airports, FlightAware). When your flight changes, all participants in your events receive instant push notifications with updated details. You can automatically adjust event time with one click, change meeting point if terminal changes, or cancel event if flight is definitely canceled. Change history is logged for transparency. Our early warning system alerts you even 6 hours before takeoff if high delay probability is detected based on weather or airport congestion.'
        },
        {
          question: 'What is the difference between Free and Premium?',
          answer: 'The Free version allows you to manage 1 active flight and 1 event at a time. Important: this is not a total trip limit. When you complete a trip, you can add another without restrictions. Direct chat only works with the event organizer. Premium unlocks multiple simultaneous flights and events, group chat with all participants, detailed savings and CO₂ stats, recurring events for frequent flyers, priority support (under 2 hours), and early access to new features. It costs €4.99/mo or €49/year (17% discount).'
        },
        {
          question: 'Do you offer an annual subscription with discount?',
          answer: 'Yes. Premium is available in two modes: monthly subscription at €4.99/mo (total €59.88/yr) or annual subscription for €49/yr, representing a saving of €10.88 (17% discount). The annual plan pays for itself easily: with just 2 shared trips a year you have recovered the investment. Plus, annual subscribers receive exclusive benefits like VIP event access, monthly flight giveaways, and a special "Annual" badge on their profile that generates more trust in the community. You can switch from monthly to annual anytime with prorated credit.'
        },
        {
          question: 'How much money can I really save using Cojauny?',
          answer: 'Average savings are 50-75% on airport transport. Concrete example: A transfer from Central Madrid to Airport T4 costs approx 30-35€. Traveling alone, you pay the total. Sharing with 3 more passengers from the same flight, your share is only 7.50-9€, saving 22-25€ per trip. Frequent flyers making 2 monthly trips save approx 500-600€ per year. Savings are the natural confirmation of sharing with confidence.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Join Cojauny\'s verified travel community',
        subheading: 'Early beta access: verified profiles, flight matching, and a direct line to the product team.',
        title: 'Request Beta Access',
        description:
          '🌟 Early access · 🛡️ Verified profiles · 🏆 Founding badge · 🚀 Direct support',
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
        heading: 'Your feedback matters',
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
        'We only count visits and signups anonymously. We do not collect personal data from those who click your link.',
      privacyLabel: 'Security:'
    },
    cookie: {
      message:
        'We use essential and optional analytics cookies to understand how Cojauny is used. You can accept them or keep browsing with only essentials.',
      acceptAll: 'Accept',
      reject: 'Reject',
      moreInfo: 'More Info'
    },
    footer: {
      description: 'Traveling together towards a sustainable future.',
      rights: 'All rights reserved.',
      appStoreSoon: 'App Store (coming soon)',
      playStoreSoon: 'Google Play (coming soon)',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      terms: 'Terms of Service',
      accountDeletion: 'Account deletion',
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
      contact: 'Kontakt',
      blog: 'Blog',
      benefits: 'Vorteile',
      impact: 'Ersparnis',
      workflow: 'So geht\'s',
      faq: 'FAQ',
      feedback: 'Feedback'
    },
    seo: {
      title: 'Cojauny: Verifizierte Reisegemeinschaft für geteilte Flughafentransfers',
      description:
        'Finde verifizierte Passagiere auf deinem exakten Flug für gemeinsame Flughafentransfers. Flugnummer-Matching, verifizierte Profile und Sternebewertungen. 120+ Flughäfen.',
      keywords: [
        'verifizierte flughafenfahrt',
        'flughafentransfer teilen',
        'flug mitfahrgelegenheit',
        'vertrauenswürdige reisegemeinschaft',
        'gleicher flug carpool',
        'flughafen fahrgemeinschaft app',
        'verifizierte reiseprofile',
        'sicherer flughafentransfer',
        'taxi teilen gleicher flug',
        'nachhaltiges reisen'
      ],
      ogTitle: 'Cojauny: Reise mit Menschen auf deinem exakten Flug, verifiziert',
      ogDescription:
        'Eine verifizierte Reisegemeinschaft, die dich mit Passagieren deines Fluges verbindet. Verifizierte Profile, Sternebewertungen und sicherer Chat vor der Fahrt.'
    },
    hero: {
      eyebrow: 'Gleicher Flug. Verifizierte Reisende. Geteilte Fahrt.',
      title:
        'Eine verifizierte Reisegemeinschaft, die dich mit Menschen auf deinem exakten Flug verbindet — damit du nie mit einem Fremden und nie zu viel für deinen Transfer reist',
      subtitle:
        'Flugnummer-Matching, verifizierte Profile mit Ausweis und Foto sowie Sternebewertungen. Du weißt, mit wem du fährst, bevor du das Haus verlässt.',
      primaryCta: 'Beta-Zugang anfordern',
      secondaryCta: 'So funktioniert\'s',
      imageAlt: 'Cojauny App zeigt Flug-Matching und verifizierte Profile'
    },
    heroVariants: {
      savings: {
        title:
          'Teile deinen Flughafentransfer und spare bis zu 75% mit verifizierten Passagieren auf deinem Flug',
        subtitle:
          'Flugnummer-Matching, verifizierte Profile und sichtbare Bewertungen. Vertrauen zuerst — Ersparnis als Bestätigung.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Schnelle Beta-Wartelisten-Anmeldung',
      label: 'Sichere dir deinen Beta-Platz — nur Name und E-Mail',
      referralHint: 'Lade Freunde mit deinem Einladungslink ein und steige in der Warteliste auf.',
      namePlaceholder: 'Dein Name',
      emailPlaceholder: 'du@email.de',
      submit: 'Beta beitreten',
      submitting: 'Wird gesendet…',
      privacyNote: 'Ich akzeptiere die AGB und Datenschutzrichtlinie von Cojauny für den Beta-Zugang.',
      success: 'Geschafft! Wir benachrichtigen dich per E-Mail, sobald dein Zugang bereit ist.'
    },
    features: {
      title: 'Gebaut, damit du vertraust, bevor du teilst',
      subtitle:
        'Flug-Matching, verifizierte Profile, sicherer Chat und sichtbare Reputation. Cojauny beseitigt die Unsicherheit beim Reisen mit Fremden.',
      items: [
        {
          title: 'Flug-Matching',
          description:
            'Gib deine Flugnummer ein und wir verbinden dich mit Passagieren auf derselben Strecke. Keine zufällige Mitfahrgelegenheit — dein exakter Flug.',
          iconName: 'bolt'
        },
        {
          title: 'Verifiziertes Vertrauen',
          description:
            'Jedes Profil durchläuft Identitäts- und Fotoprüfung. Prüfe Bewertungen und Historie, bevor du einer Fahrt beitrittst.',
          iconName: 'shield'
        },
        {
          title: 'Sicherer 48h-Chat',
          description:
            'Kommuniziere in einem verschlüsselten Kanal vor und während der Fahrt. Lerne deine Begleiter kennen, ohne deine Handynummer zu teilen.',
          iconName: 'chat'
        },
        {
          title: 'Sternebewertungen',
          description:
            'Nach jeder Fahrt bewertest du Pünktlichkeit, Kommunikation und Freundlichkeit. Reputation hilft dir, sicher zu wählen.',
          iconName: 'sparkles'
        },
        {
          title: 'Events mit Plätzen',
          description:
            'Tritt Transfers mit kontrollierter Kapazität bei oder erstelle sie. Sieh Organisator, Teilnehmer und Treffpunkt vor der Bestätigung.',
          iconName: 'users'
        },
        {
          title: 'Reise-Alerts',
          description:
            'Priorisierte Benachrichtigungen für Flugänderungen, Treffpunkt-Erinnerungen und Fahrerankunft.',
          iconName: 'sparkles'
        },
        {
          title: 'Weltweite Sprachunterstützung',
          description:
            'Die App passt sich an 78 Sprachen an, inklusive Auto-Übersetzung. Koordiniere dich weltweit ohne Barrieren.',
          iconName: 'globe'
        },
        {
          title: 'Impact-Dashboard',
          description:
            'Wenn du mit Vertrauen teilst, sparst du auch. Verfolge kumulierte Ersparnisse und vermiedenes CO₂ nach jeder Fahrt.',
          iconName: 'bolt'
        }
      ]
    },
    value: {
      title: 'Reise mit Menschen auf deinem Flug, nicht mit zufälligen Fremden',
      subtitle:
        'Cojauny beantwortet zuerst die wichtige Frage: Kann ich ihnen vertrauen? Ersparnis kommt danach. Eine verifizierte Community mit gemeinsamem Kontext.',
      items: [
        {
          title: '🛡️ Verifizierte Sicherheit',
          description:
            'Profile mit Ausweis, Foto und Sternebewertungssystem. Du weißt, mit wem du fährst, bevor du bestätigst.'
        },
        {
          title: '✈️ Gleicher Flug, gemeinsamer Kontext',
          description:
            'Keine zufällige Mitfahrgelegenheit: Du teilst Fahrten mit Passagieren deines exakten Fluges. Gleiches Ziel, Zeitplan und Terminal.'
        },
        {
          title: '⭐ Transparente Reputation',
          description:
            'Sichtbare Bewertungen aus vergangenen Fahrten. Wähle Begleiter mit positiver Historie und baue deine eigene Reputation auf.'
        },
        {
          title: '⏱️ Stressfreie Koordination',
          description:
            'Integrierte Agenda und Auto-Alerts. Die ganze Gruppe weiß wann und wo, ohne endlose Nachrichten.'
        },
        {
          title: '🤝 Community, keine Fremden',
          description:
            'Vernetze dich mit Reisenden zum gleichen Ziel. Pre-Trip-Chat lässt dich die Gruppe vor der Fahrt kennenlernen.'
        },
        {
          title: '💸 Und ja, du sparst auch',
          description:
            'Wenn du mit Vertrauen teilst, teilen sich die Kosten natürlich. Ein echter Vorteil — nie auf Kosten deiner Sicherheit.'
        }
      ]
    },
    savings: {
      title: 'Und Teilen spart auch Geld',
      caption: 'Sobald du vertraust und koordinierst, folgt die Ersparnis von selbst. Das kannst du beim Teilen erwarten.',
      metrics: [
        {
          value: '120+',
          label: 'Flughäfen',
          description: 'Aktives Netzwerk an großen Hubs in Europa und Amerika.'
        },
        {
          value: '50.000+',
          label: 'Verbundene Passagiere',
          description: 'Jahresziel für ein globales Netzwerk mit kritischer Masse auf Hauptstrecken.'
        },
        {
          value: '50-75%',
          label: 'Ersparnis beim Teilen',
          description: 'Durchschnittliche Ersparnis pro Transfer beim Teilen von Taxi oder Privatwagen.'
        },
        {
          value: '1.000+ t',
          label: 'CO₂ vermieden',
          description: 'Tonnen Emissionen, die wir im ersten Betriebsjahr vermeiden wollen.'
        }
      ]
    },
    workflow: {
      title: 'Deine geteilte Fahrt in 5 Schritten',
      intro: 'Von deiner Flugnummer zur vertrauensvollen geteilten Fahrt. So funktioniert das Matching.',
      steps: [
        {
          title: '1. Verifiziertes Profil',
          description: 'Registriere dich mit Foto und verifiziere deine Identität. Alle in der Community durchlaufen denselben Vertrauensfilter.'
        },
        {
          title: '2. Flug hinzufügen',
          description: 'Gib Flugnummer und Datum ein. Wir finden automatisch kompatible Passagiere auf derselben Strecke.'
        },
        {
          title: '3. Prüfen und wählen',
          description: 'Durchsuche Profile, Sternebewertungen und verfügbare Events. Du entscheidest, mit wem du teilst.'
        },
        {
          title: '4. Im sicheren Chat koordinieren',
          description: 'Klare Details mit der Gruppe in einem verschlüsselten Kanal. Treffpunkt, Zeit und Kostenaufteilung.'
        },
        {
          title: '5. Fahren und bewerten',
          description: 'Teile die Fahrt mit Vertrauen. Bewerte danach deine Begleiter und baue deine Reputation auf.'
        }
      ]
    },
    mockups: {
      heading: 'So sieht Reisen mit Vertrauen aus',
      description:
        'Verifizierte Profile, Flug-Matching, sicherer Chat und sichtbare Bewertungen. Die App zeigt dir, mit wem du fährst, bevor du losgehst.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Matching',
          title: 'Dein Flug, deine Gruppe',
          description:
            'Gib deine Flugnummer ein. Das System findet Passagiere auf derselben Strecke — keine zufälligen Fremden.',
          image: '/images/mockups/de/mockup-flight-search.svg'
        },
        {
          id: 'profile',
          badge: 'Profil',
          title: 'Verifizierte Community',
          description:
            'Verifizierte Identität, Foto und Sternebewertungen. Kenn deine Begleiter vor der Bestätigung.',
          image: '/images/mockups/de/mockup-profile.svg'
        },
        {
          id: 'event-detail',
          badge: 'Detail',
          title: 'Alles klar vor dem Beitritt',
          description:
            'Organisator, Teilnehmer, Treffpunkt und geschätzte Kosten. Keine Überraschungen.',
          image: '/images/mockups/de/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Mit Vertrauen koordinieren',
          description:
            'Sprich mit der Gruppe in einem sicheren Kanal. Organisiere ohne deine Nummer zu teilen.',
          image: '/images/mockups/de/mockup-chat.svg'
        },
        {
          id: 'events-list',
          badge: 'Events',
          title: 'Optionen für deinen Flug',
          description:
            'Transfers und Meetups für deinen Flug mit Plätzen und Teilnehmern in Echtzeit.',
          image: '/images/mockups/de/mockup-events-list.svg'
        },
        {
          id: 'impact',
          badge: 'Ersparnis',
          title: 'Ersparnis als Bestätigung',
          description:
            'Wenn du mit Vertrauen teilst, teilen sich die Kosten. Verfolge deine Ersparnisse nach jeder Fahrt.',
          image: '/images/mockups/de/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Tritt Cojaunys verifizierter Reisegemeinschaft bei',
      body: 'Privater Beta-Zugang: verifizierte Profile, Flug-Matching und früher Produktzugang. Begrenzte Plätze für Early Adopters.',
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
          question: 'Wozu dienen Bewertungen?',
          answer: 'Sie schaffen Vertrauen. Nach der Reise bewertest du Pünktlichkeit und Freundlichkeit. Eine gute Reputation erleichtert es, künftig Begleiter zu finden.'
        },
        {
          question: 'Kann ich meine Teilnahme stornieren?',
          answer: 'Ja, du kannst ein Event in der App verlassen. Als Organisator bitte frühzeitig Bescheid geben. Häufige Stornierungen können deine Reputation beeinflussen.'
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
          question: 'Was wenn mein Flug Verspätung hat?',
          answer: 'Wir erhalten Echtzeit-Updates. Wir benachrichtigen die ganze Gruppe bei Änderungen, damit ihr umplanen oder stornieren könnt.'
        },
        {
          question: 'Was bietet der Premium-Plan?',
          answer: 'Premium entfernt Limits für gleichzeitige Reisen, aktiviert den vollen Gruppenchat, bietet erweiterte Stats und Prio-Support. Ideal, wenn du oft fliegst.'
        },
        {
          question: 'Gibt es Jahresrabatt?',
          answer: 'Ja, der Jahresplan kostet 49€, das sind 17% Ersparnis gegenüber monatlich. Er zahlt sich nach sehr wenigen Reisen aus.'
        },
        {
          question: 'Wie viel kann ich sparen?',
          answer: 'Hängt von Route und Gruppe ab, aber im Schnitt ca. 50-75% im Vergleich zum Einzeltaxi. Das ist die natürliche Bestätigung des Teilens mit Vertrauen.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Tritt Cojaunys verifizierter Reisegemeinschaft bei',
        subheading: 'Früher Beta-Zugang: verifizierte Profile, Flug-Matching und direkter Draht zum Team.',
        title: 'Beta-Zugang anfordern',
        description:
          '🌟 Prio-Zugang · 🛡️ Verifizierte Profile · 🏆 Gründer-Badge · 🚀 Direkter Support',
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
        '100% anonymes System. Wir speichern keine Daten deiner Eingeladenen.',
      privacyLabel: 'Sicherheit:'
    },
    cookie: {
      message:
        'Wir nutzen Cookies für dein Erlebnis. Du entscheidest, welche du akzeptierst.',
      acceptAll: 'Alle akzeptieren',
      reject: 'Nur notwendige',
      moreInfo: 'Mehr Info'
    },
    footer: {
      description: 'Gemeinsam in eine nachhaltige Zukunft reisen.',
      rights: 'Alle Rechte vorbehalten.',
      appStoreSoon: 'App Store (bald)',
      playStoreSoon: 'Google Play (bald)',
      privacy: 'Datenschutz',
      cookies: 'Cookies',
      terms: 'AGB',
      accountDeletion: 'Konto löschen',
      acceptableUse: 'Nutzungsbedingungen',
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
      contact: 'Contact',
      blog: 'Blog',
      benefits: 'Avantages',
      impact: 'Économies',
      workflow: 'Fonctionnement',
      faq: 'FAQ',
      feedback: 'Feedback'
    },
    seo: {
      title: 'Cojauny : Communauté de voyage vérifiée pour transferts aéroport partagés',
      description:
        'Trouvez des passagers vérifiés sur votre vol exact pour partager les transferts aéroport. Matching par numéro de vol, profils vérifiés et évaluations par étoiles. 120+ aéroports.',
      keywords: [
        'covoiturage aéroport vérifié',
        'partage transfert aéroport',
        'covoiturage même vol',
        'communauté voyage de confiance',
        'profils vérifiés voyage',
        'transfert aéroport sécurisé',
        'partager taxi même vol',
        'application covoiturage aéroport',
        'voyage durable',
        'transport aéroport partagé'
      ],
      ogTitle: 'Cojauny : Voyagez avec des personnes sur votre vol exact, vérifiées',
      ogDescription:
        'Une communauté de voyage vérifiée qui vous met en relation avec les passagers de votre vol. Profils vérifiés, évaluations par étoiles et chat sécurisé avant le trajet.'
    },
    hero: {
      eyebrow: 'Même vol. Voyageurs vérifiés. Trajet partagé.',
      title:
        'Une communauté de voyage vérifiée qui vous connecte avec des personnes sur votre vol exact, pour ne jamais voyager avec un inconnu ni payer trop cher votre transfert',
      subtitle:
        'Matching par numéro de vol, profils vérifiés avec pièce d\'identité et photo, et évaluations par étoiles. Vous savez avec qui vous voyagez avant de partir.',
      primaryCta: "Demander l'accès Bêta",
      secondaryCta: 'Comment ça marche',
      imageAlt: 'Interface Cojauny montrant le matching par vol et les profils vérifiés'
    },
    heroVariants: {
      savings: {
        title:
          'Partagez votre transfert aéroport et économisez jusqu\'à 75% avec des passagers vérifiés sur votre vol',
        subtitle:
          'Matching par numéro de vol, profils vérifiés et évaluations visibles. La confiance d\'abord — l\'économie en confirmation.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Inscription rapide à la liste d\'attente bêta',
      label: 'Réservez votre place bêta — nom et e-mail uniquement',
      referralHint: 'Invitez des amis avec votre lien unique et montez dans la liste d\'attente.',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'vous@email.com',
      submit: 'Rejoindre la bêta',
      submitting: 'Envoi…',
      privacyNote: 'J\'accepte les conditions et la politique de confidentialité de Cojauny pour demander l\'accès bêta.',
      success: 'C\'est fait ! Nous vous préviendrons par e-mail dès que votre accès sera prêt.'
    },
    features: {
      title: 'Conçu pour que vous fassiez confiance avant de partager',
      subtitle:
        'Matching par vol, profils vérifiés, chat sécurisé et réputation visible. Cojauny élimine l\'incertitude de voyager avec des inconnus.',
      items: [
        {
          title: 'Matching par Vol',
          description:
            'Entrez votre numéro de vol et nous vous connectons aux passagers du même trajet. Pas de covoiturage aléatoire — votre vol exact.',
          iconName: 'bolt'
        },
        {
          title: 'Confiance Vérifiée',
          description:
            'Chaque profil passe une vérification d\'identité et de photo. Consultez les évaluations et l\'historique avant de rejoindre un trajet.',
          iconName: 'shield'
        },
        {
          title: 'Chat Sécurisé 48h',
          description:
            'Communiquez dans un canal chiffré avant et pendant le trajet. Faites connaissance sans partager votre numéro.',
          iconName: 'chat'
        },
        {
          title: 'Évaluations par Étoiles',
          description:
            'Après chaque trajet, évaluez ponctualité, communication et convivialité. La réputation vous aide à choisir en confiance.',
          iconName: 'sparkles'
        },
        {
          title: 'Événements avec Places',
          description:
            'Rejoignez ou créez des trajets à capacité contrôlée. Voyez l\'organisateur, les participants et le lieu de rendez-vous avant de confirmer.',
          iconName: 'users'
        },
        {
          title: 'Alertes Voyage',
          description:
            'Notifications prioritaires pour changements de vol, rappels de rendez-vous et arrivée du chauffeur.',
          iconName: 'sparkles'
        },
        {
          title: 'Support Linguistique Mondial',
          description:
            'L\'application s\'adapte à 78 langues, traduction automatique incluse. Coordonnez-vous sans barrière linguistique.',
          iconName: 'globe'
        },
        {
          title: 'Tableau de Bord Impact',
          description:
            'Quand vous partagez en confiance, vous économisez aussi. Suivez vos économies cumulées et le CO₂ évité après chaque trajet.',
          iconName: 'bolt'
        }
      ]
    },
    value: {
      title: 'Voyagez avec des gens de votre vol, pas des inconnus au hasard',
      subtitle:
        'Cojauny répond d\'abord à la question qui compte : puis-je leur faire confiance ? Les économies viennent ensuite. Une communauté vérifiée avec contexte partagé.',
      items: [
        {
          title: '🛡️ Sécurité vérifiée',
          description:
            'Profils avec pièce d\'identité, photo et système d\'évaluation par étoiles. Vous savez avec qui vous voyagez avant de confirmer.'
        },
        {
          title: '✈️ Même vol, contexte partagé',
          description:
            'Pas de covoiturage aléatoire : vous partagez avec des passagers de votre vol exact. Même destination, horaires et terminal.'
        },
        {
          title: '⭐ Réputation transparente',
          description:
            'Évaluations visibles des trajets passés. Choisissez des compagnons avec un historique positif et construisez votre réputation.'
        },
        {
          title: '⏱️ Coordination sans stress',
          description:
            'Agenda intégré et alertes auto. Tout le groupe sait quand et où, sans des centaines de messages.'
        },
        {
          title: '🤝 Communauté, pas des inconnus',
          description:
            'Connectez-vous avec des voyageurs vers la même destination. Le chat préalable vous permet de connaître le groupe avant le trajet.'
        },
        {
          title: '💸 Et oui, vous économisez aussi',
          description:
            'Quand vous partagez en confiance, les coûts se divisent naturellement. Un vrai avantage — jamais au détriment de votre sécurité.'
        }
      ]
    },
    savings: {
      title: 'Et partager fait aussi économiser',
      caption: 'Une fois la confiance établie et la coordination faite, les économies suivent naturellement. Voici ce à quoi vous attendre.',
      metrics: [
        {
          value: '120+',
          label: 'Aéroports',
          description: 'Réseau actif dans les grands hubs d\'Europe et d\'Amérique.'
        },
        {
          value: '50 000+',
          label: 'Passagers connectés',
          description: 'Objectif annuel pour un réseau mondial avec masse critique sur les routes clés.'
        },
        {
          value: '50-75%',
          label: 'Économies en partageant',
          description: 'Fourchette moyenne d\'économies par transfert en partageant taxi ou VTC.'
        },
        {
          value: '1 000+ t',
          label: 'CO₂ évité',
          description: 'Tonnes d\'émissions que nous visons à éviter la première année opérationnelle.'
        }
      ]
    },
    workflow: {
      title: 'Votre trajet partagé en 5 étapes',
      intro: 'De votre numéro de vol à un trajet partagé de confiance. Voici comment fonctionne le matching.',
      steps: [
        {
          title: '1. Profil vérifié',
          description: 'Créez votre compte avec photo et vérifiez votre identité. Tous passent le même filtre de confiance.'
        },
        {
          title: '2. Ajouter votre vol',
          description: 'Entrez numéro de vol et date. Nous trouvons automatiquement des passagers compatibles sur le même trajet.'
        },
        {
          title: '3. Examiner et choisir',
          description: 'Parcourez profils, évaluations par étoiles et événements disponibles. Vous décidez avec qui partager.'
        },
        {
          title: '4. Coordonner en chat sécurisé',
          description: 'Finalisez les détails avec le groupe dans un canal chiffré. Lieu, horaire et répartition des coûts — tout est clair.'
        },
        {
          title: '5. Voyager et évaluer',
          description: 'Partagez le trajet en toute confiance. Ensuite, évaluez vos compagnons et construisez votre réputation.'
        }
      ]
    },
    mockups: {
      heading: 'Voici à quoi ressemble voyager en confiance',
      description:
        'Profils vérifiés, matching par vol, chat sécurisé et évaluations visibles. L\'app qui vous montre avec qui vous voyagez avant de partir.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Matching',
          title: 'Votre vol, votre groupe',
          description:
            'Entrez votre numéro de vol. Le système trouve des passagers du même trajet — pas des inconnus au hasard.',
          image: '/images/mockups/fr/mockup-flight-search.svg'
        },
        {
          id: 'profile',
          badge: 'Profil',
          title: 'Communauté vérifiée',
          description:
            'Identité vérifiée, photo et évaluations par étoiles. Connaissez vos compagnons avant de confirmer.',
          image: '/images/mockups/fr/mockup-profile.svg'
        },
        {
          id: 'event-detail',
          badge: 'Détail',
          title: 'Tout clair avant de rejoindre',
          description:
            'Organisateur, participants, lieu de rendez-vous et coût estimé. Pas de surprises.',
          image: '/images/mockups/fr/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Coordonner en confiance',
          description:
            'Parlez au groupe dans un canal sécurisé. Organisez sans partager votre numéro.',
          image: '/images/mockups/fr/mockup-chat.svg'
        },
        {
          id: 'events-list',
          badge: 'Événements',
          title: 'Options pour votre vol',
          description:
            'Transferts et rencontres pour votre vol avec places et participants en temps réel.',
          image: '/images/mockups/fr/mockup-events-list.svg'
        },
        {
          id: 'impact',
          badge: 'Économies',
          title: 'Les économies comme confirmation',
          description:
            'Quand vous partagez en confiance, les coûts se divisent. Suivez vos économies cumulées après chaque trajet.',
          image: '/images/mockups/fr/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Rejoignez la communauté de voyage vérifiée de Cojauny',
      body: 'Accès bêta privé : profils vérifiés, matching par vol et accès anticipé au produit. Places limitées pour les early adopters.',
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
          question: 'À quoi servent les évaluations ?',
          answer: 'Elles créent la confiance. Après le voyage, vous notez ponctualité et amabilité. Une bonne réputation facilite la recherche de futurs compagnons.'
        },
        {
          question: 'Puis-je annuler ma participation ?',
          answer: 'Oui, vous pouvez quitter un événement dans l\'app. En tant qu\'organisateur, prévenez tôt. Les annulations fréquentes peuvent affecter votre réputation.'
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
          question: 'Et si mon vol a du retard ?',
          answer: 'Nous recevons des mises à jour en temps réel. Nous notifions tout le groupe en cas de changement pour que vous puissiez vous réorganiser ou annuler.'
        },
        {
          question: 'Que propose le plan Premium ?',
          answer: 'Premium supprime les limites de voyages simultanés, active le chat de groupe complet, offre des stats avancées et un support prioritaire. Idéal si vous volez souvent.'
        },
        {
          question: 'Y a-t-il une réduction annuelle ?',
          answer: 'Oui, le plan annuel coûte 49€, soit 17% d\'économie par rapport au mensuel. Il est rentabilisé après très peu de voyages.'
        },
        {
          question: 'Combien puis-je économiser ?',
          answer: 'Cela dépend du trajet et du groupe, mais en moyenne environ 50-75% par rapport à un taxi individuel. C\'est la confirmation naturelle du partage en confiance.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Rejoignez la communauté de voyage vérifiée de Cojauny',
        subheading: 'Accès bêta anticipé : profils vérifiés, matching par vol et lien direct avec l\'équipe.',
        title: 'Demander l\'accès Bêta',
        description:
          '🌟 Accès prioritaire · 🛡️ Profils vérifiés · 🏆 Badge fondateur · 🚀 Support direct',
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
        'Système 100% anonyme. Nous ne stockons pas les données de vos invités.',
      privacyLabel: 'Sécurité :'
    },
    cookie: {
      message:
        'Nous utilisons des cookies pour votre expérience. Vous décidez lesquels accepter.',
      acceptAll: 'Tout accepter',
      reject: 'Nécessaires seulement',
      moreInfo: 'Plus d\'infos'
    },
    footer: {
      description: 'Voyager ensemble vers un avenir durable.',
      rights: 'Tous droits réservés.',
      appStoreSoon: 'App Store (bientôt)',
      playStoreSoon: 'Google Play (bientôt)',
      privacy: 'Confidentialité',
      cookies: 'Cookies',
      terms: 'CGU',
      accountDeletion: 'Supprimer le compte',
      acceptableUse: 'Utilisation acceptable',
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


