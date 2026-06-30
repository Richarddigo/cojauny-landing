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
    trustSignals: string[];
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
    emailPlaceholder: string;
    submit: string;
    submitting: string;
    privacyNote: string;
    success: string;
  };
  airportsHubTitle: string;
  airportsHubAll: string;
  betaReferralBanner: string;
  features: {
    title: string;
    subtitle: string;
    items: FeatureCopy[];
  };
  value: {
    eyebrow: string;
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
    customize: string;
    savePreferences: string;
    essentialLabel: string;
    essentialDescription: string;
    analyticsLabel: string;
    analyticsDescription: string;
    alwaysOn: string;
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
      title: 'Cojauny | Traslados aeroportuarios compartidos con pasajeros verificados',
      description:
        'Plataforma de movilidad verificada. Emparejamiento por vuelo, identidad validada y reputación transparente antes de cada trayecto compartido.',
      keywords: [
        'traslado aeropuerto seguro',
        'transporte compartido verificado',
        'app viajes aeropuerto',
        'carpool aeropuerto',
        'viaje compartido vuelo',
        'comunidad viajeros verificada',
        'perfil verificado aeropuerto',
        'matching por vuelo',
        'movilidad aeroportuaria segura',
        'compartir coche mismo vuelo'
      ],
      ogTitle: 'Cojauny | Seguridad verificada en traslados aeroportuarios',
      ogDescription:
        'Identidad verificada, reputación visible y matching por número de vuelo. Viaja con pasajeros de tu mismo trayecto, no con desconocidos al azar.'
    },
    hero: {
      eyebrow: 'Seguridad verificada · Mismo vuelo',
      title: 'La seguridad es lo primero en cada traslado compartido al aeropuerto',
      subtitle:
        'Cojauny conecta pasajeros del mismo vuelo tras verificar identidad, reputación y contexto del trayecto. Usted decide con quién viaja antes de salir.',
      primaryCta: 'Solicitar acceso beta',
      secondaryCta: 'Ver cómo funciona',
      imageAlt: 'Interfaz de Cojauny con perfiles verificados y matching por vuelo',
      trustSignals: [
        'Verificación de identidad',
        'Matching por número de vuelo',
        'Reputación visible',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Traslados aeroportuarios más seguros y eficientes, con ahorro al compartir',
        subtitle:
          'La seguridad define cada conexión. El ahorro llega después, al dividir el coste con pasajeros verificados de su vuelo.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Solicitud de acceso a la beta de Cojauny',
      label: 'Solicite acceso anticipado a la beta',
      emailPlaceholder: 'su@email.com',
      submit: 'Solicitar acceso',
      submitting: 'Enviando solicitud…',
      privacyNote:
        'Al enviar su correo, acepta los términos de uso y la política de privacidad de Cojauny.',
      success: 'Solicitud recibida. Le contactaremos por correo cuando su acceso esté disponible.',
    },
    airportsHubTitle: 'Principales aeropuertos',
    airportsHubAll: 'Ver cobertura completa',
    betaReferralBanner:
      'Tras registrarse, recibirá un enlace de invitación para compartir con su red y priorizar su acceso.',
    features: {
      title: 'Infraestructura de confianza para viajar en compañía',
      subtitle:
        'Cada función está diseñada para reducir el riesgo antes del trayecto: identidad, contexto compartido y comunicación controlada.',
      items: [
        {
          title: 'Matching por vuelo',
          description:
            'El emparejamiento se realiza por número de vuelo y fecha. No hay coincidencias aleatorias: solo pasajeros del mismo trayecto.',
          iconName: 'bolt',
        },
        {
          title: 'Identidad verificada',
          description:
            'Perfiles con verificación documental y foto. La confianza se construye con datos verificables, no con suposiciones.',
          iconName: 'shield',
        },
        {
          title: 'Canal de comunicación seguro',
          description:
            'Coordinación previa al vuelo en un entorno cifrado, con acceso limitado en el tiempo para proteger su privacidad.',
          iconName: 'chat',
        },
        {
          title: 'Reputación transparente',
          description:
            'Valoraciones por estrellas y comentarios visibles tras cada trayecto. Toma decisiones informadas antes de confirmar.',
          iconName: 'sparkles',
        },
        {
          title: 'Eventos con aforo controlado',
          description:
            'Cada traslado muestra organizador, participantes, punto de encuentro y coste estimado antes de la confirmación.',
          iconName: 'users',
        },
        {
          title: 'Alertas operativas de vuelo',
          description:
            'Notificaciones sobre cambios de horario, recordatorios de encuentro y actualizaciones relevantes del trayecto.',
          iconName: 'globe',
        },
      ],
    },
    value: {
      eyebrow: 'Seguridad primero',
      title: 'Un estándar de confianza antes de compartir vehículo',
      subtitle:
        'Cojauny prioriza la seguridad del pasajero en cada etapa: verificación, selección, coordinación y evaluación posterior.',
      items: [
        {
          title: 'Verificación de identidad',
          description:
            'Acceso a una comunidad donde cada perfil cumple un proceso de validación documental antes de participar.',
        },
        {
          title: 'Contexto de vuelo compartido',
          description:
            'Viaja con personas del mismo vuelo y terminal. El contexto operativo reduce incertidumbre y mejora la coordinación.',
        },
        {
          title: 'Reputación auditable',
          description:
            'Historial de valoraciones visible para evaluar puntualidad, comunicación y conducta en trayectos anteriores.',
        },
        {
          title: 'Coordinación estructurada',
          description:
            'Punto de encuentro, horarios y reparto de costes definidos con antelación. Menos fricción, más previsibilidad.',
        },
        {
          title: 'Comunidad profesional',
          description:
            'Un entorno pensado para viajeros frecuentes y equipos corporativos que necesitan estándares claros de confianza.',
        },
        {
          title: 'Eficiencia económica responsable',
          description:
            'Al compartir con criterio, el coste del traslado se optimiza sin comprometer los requisitos de seguridad.',
        },
      ],
    },
    savings: {
      title: 'Eficiencia económica como resultado de la confianza',
      caption:
        'Cuando la coordinación es segura y predecible, compartir traslado reduce costes de forma sostenida.',
      metrics: [
        {
          value: '180+',
          label: 'Aeropuertos',
          description: 'Cobertura en hubs internacionales de Europa, América y Oriente Medio.',
        },
        {
          value: '50.000+',
          label: 'Conexiones previstas',
          description: 'Objetivo de red para alcanzar masa crítica en rutas de alta demanda.',
        },
        {
          value: '50-75%',
          label: 'Ahorro por trayecto',
          description: 'Rango estimado al dividir taxi o vehículo privado entre pasajeros verificados.',
        },
        {
          value: '1.000+ t',
          label: 'CO₂ evitado',
          description: 'Impacto ambiental proyectado al consolidar ocupación por vehículo.',
        },
      ],
    },
    workflow: {
      title: 'Proceso de viaje compartido en cinco pasos',
      intro: 'Un flujo claro, con controles de seguridad en cada fase del trayecto.',
      steps: [
        {
          title: '1. Alta con verificación',
          description: 'Cree su perfil y complete la verificación de identidad para acceder a la comunidad.',
        },
        {
          title: '2. Registro de vuelo',
          description: 'Indique número de vuelo y fecha para identificar pasajeros compatibles.',
        },
        {
          title: '3. Evaluación de opciones',
          description: 'Revise perfiles, reputación y condiciones del trayecto antes de confirmar.',
        },
        {
          title: '4. Coordinación segura',
          description: 'Alinee punto de encuentro, horarios y reparto de costes en canal cifrado.',
        },
        {
          title: '5. Trayecto y valoración',
          description: 'Complete el viaje y aporte su evaluación para mantener estándares de la comunidad.',
        },
      ],
    },
    mockups: {
      heading: 'Una experiencia diseñada para decidir con información',
      description:
        'La interfaz muestra identidad, contexto de vuelo y reputación antes de confirmar cualquier trayecto compartido.',
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
      heading: 'Acceda a la beta de Cojauny',
      body: 'Solicite acceso anticipado a una plataforma de traslados compartidos con estándares verificados de seguridad.',
      link: '#beta',
      linkLabel: 'Solicitar acceso beta',
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
          'Acceso prioritario, perfiles verificados, insignia de fundador y soporte directo del equipo.',
        success:
          '¡Estás dentro! Te avisaremos por email cuando tu acceso esté listo.',
        error: 'Hubo un error al registrar tu solicitud. Por favor, inténtalo de nuevo.',
        duplicateError:
          'Ya estás en nuestra lista. Te avisaremos pronto.',
        submit: 'Enviar solicitud',
        checkboxLabel: 'Acepto la {privacyLink} de Cojauny.',
        privacyLinkLabel: 'política de privacidad',
        referralNotice:
          'Tras registrarse recibirá un enlace de invitación. Solo contamos visitas y registros para priorizar su acceso, sin almacenar datos de terceros.',
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
        'Usamos cookies esenciales para el sitio y cookies analíticas opcionales. Tú eliges qué aceptar. Tu elección se guarda 12 meses.',
      acceptAll: 'Aceptar todas',
      reject: 'Solo necesarias',
      customize: 'Personalizar',
      savePreferences: 'Guardar preferencias',
      essentialLabel: 'Cookies esenciales',
      essentialDescription: 'Necesarias para seguridad, idioma y funcionamiento básico.',
      analyticsLabel: 'Cookies analíticas',
      analyticsDescription: 'Nos ayudan a medir visitas y mejorar la conversión beta.',
      alwaysOn: 'Siempre activas',
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
      title: 'Cojauny | Verified airport transfers with flight-matched passengers',
      description:
        'A verified mobility platform. Flight matching, identity validation, and transparent reputation before every shared transfer.',
      keywords: [
        'safe airport transfer',
        'verified airport ride share',
        'flight ride sharing',
        'trusted travel community',
        'same flight carpool',
        'airport carpool app',
        'verified travel profiles',
        'flight matching app',
        'secure airport mobility',
        'shared airport transport'
      ],
      ogTitle: 'Cojauny | Security-first shared airport transfers',
      ogDescription:
        'ID verification, visible reputation, and flight-number matching. Travel with passengers on your exact itinerary, not random strangers.'
    },
    hero: {
      eyebrow: 'Security verified · Same flight',
      title: 'Security comes first in every shared airport transfer',
      subtitle:
        'Cojauny connects passengers on the same flight after identity, reputation, and trip context are verified. You choose who you ride with before departure.',
      primaryCta: 'Request beta access',
      secondaryCta: 'See how it works',
      imageAlt: 'Cojauny interface showing verified profiles and flight matching',
      trustSignals: [
        'Identity verification',
        'Flight-number matching',
        'Visible reputation',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Safer and more efficient airport transfers, with savings when sharing',
        subtitle:
          'Security defines every connection. Cost efficiency follows when verified passengers on your flight share the ride.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Request Cojauny beta access',
      label: 'Request early beta access',
      emailPlaceholder: 'you@email.com',
      submit: 'Request access',
      submitting: 'Submitting…',
      privacyNote:
        'By submitting your email, you agree to Cojauny\'s terms of use and privacy policy.',
      success: 'Request received. We will contact you by email when your access is available.',
    },
    airportsHubTitle: 'Major airports',
    airportsHubAll: 'View full coverage',
    betaReferralBanner:
      'After registration, you will receive an invite link to share with your network and prioritize your access.',
    features: {
      title: 'Trust infrastructure for shared travel',
      subtitle:
        'Every capability is designed to reduce risk before the ride: identity, shared context, and controlled communication.',
      items: [
        {
          title: 'Flight matching',
          description:
            'Matching is based on flight number and date. No random pairings — only passengers on the same itinerary.',
          iconName: 'bolt',
        },
        {
          title: 'Verified identity',
          description:
            'Profiles include document verification and photo validation. Trust is built on verifiable data.',
          iconName: 'shield',
        },
        {
          title: 'Secure communication channel',
          description:
            'Pre-flight coordination in an encrypted environment with time-limited access to protect privacy.',
          iconName: 'chat',
        },
        {
          title: 'Transparent reputation',
          description:
            'Star ratings and post-trip feedback are visible before you confirm. Make informed decisions.',
          iconName: 'sparkles',
        },
        {
          title: 'Capacity-controlled events',
          description:
            'Each transfer shows organizer, participants, meeting point, and estimated cost before confirmation.',
          iconName: 'users',
        },
        {
          title: 'Operational flight alerts',
          description:
            'Notifications for schedule changes, meeting reminders, and relevant trip updates.',
          iconName: 'globe',
        },
      ],
    },
    value: {
      eyebrow: 'Security first',
      title: 'A trust standard before sharing a vehicle',
      subtitle:
        'Cojauny prioritizes passenger safety at every stage: verification, selection, coordination, and post-trip evaluation.',
      items: [
        {
          title: 'Identity verification',
          description:
            'Access a community where every profile completes document validation before participating.',
        },
        {
          title: 'Shared flight context',
          description:
            'Ride with people on the same flight and terminal. Operational context reduces uncertainty.',
        },
        {
          title: 'Auditable reputation',
          description:
            'Visible rating history to assess punctuality, communication, and conduct on previous trips.',
        },
        {
          title: 'Structured coordination',
          description:
            'Meeting point, timing, and cost split are defined in advance for predictable execution.',
        },
        {
          title: 'Professional community',
          description:
            'Built for frequent travelers and corporate teams that require clear trust standards.',
        },
        {
          title: 'Responsible cost efficiency',
          description:
            'When sharing is criteria-driven, transfer costs improve without compromising safety requirements.',
        },
      ],
    },
    savings: {
      title: 'Economic efficiency as an outcome of trust',
      caption:
        'When coordination is secure and predictable, shared transfers reduce costs sustainably.',
      metrics: [
        {
          value: '180+',
          label: 'Airports',
          description: 'Coverage across major international hubs in Europe, the Americas, and the Middle East.',
        },
        {
          value: '50,000+',
          label: 'Projected connections',
          description: 'Network target to reach critical mass on high-demand routes.',
        },
        {
          value: '50-75%',
          label: 'Savings per trip',
          description: 'Estimated range when splitting taxi or private vehicle among verified passengers.',
        },
        {
          value: '1,000+ t',
          label: 'CO₂ avoided',
          description: 'Projected environmental impact from higher vehicle occupancy.',
        },
      ],
    },
    workflow: {
      title: 'Shared travel process in five steps',
      intro: 'A clear flow with security controls at every stage of the journey.',
      steps: [
        {
          title: '1. Verified onboarding',
          description: 'Create your profile and complete identity verification to access the community.',
        },
        {
          title: '2. Flight registration',
          description: 'Submit flight number and date to identify compatible passengers.',
        },
        {
          title: '3. Option evaluation',
          description: 'Review profiles, reputation, and trip conditions before confirming.',
        },
        {
          title: '4. Secure coordination',
          description: 'Align meeting point, timing, and cost split in an encrypted channel.',
        },
        {
          title: '5. Trip and rating',
          description: 'Complete the ride and submit your evaluation to maintain community standards.',
        },
      ],
    },
    mockups: {
      heading: 'An experience designed for informed decisions',
      description:
        'The interface surfaces identity, flight context, and reputation before any shared transfer is confirmed.',
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
      heading: 'Request access to the Cojauny beta',
      body: 'Request early access to a shared transfer platform with verified security standards.',
      link: '#beta',
      linkLabel: 'Request beta access'
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
          'Priority access, verified profiles, founding badge, and direct team support.',
        success:
          'Great, you are on the waitlist. We will notify you by email when the beta is ready.',
        error: 'We could not register your request. Check data or try again in a few minutes.',
        duplicateError:
          'You are already on our waitlist. We will notify you when beta is available.',
        submit: 'Send Request',
        checkboxLabel: 'I have read and accept Cojauny\'s {privacyLink}.',
        privacyLinkLabel: 'privacy policy',
        referralNotice:
          'After signing up you will receive an invite link. We only count visits and registrations to prioritize your access, without storing third-party data.',
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
        'We use essential cookies for the site and optional analytics cookies. You choose what to accept. Your choice is stored for 12 months.',
      acceptAll: 'Accept all',
      reject: 'Essential only',
      customize: 'Customize',
      savePreferences: 'Save preferences',
      essentialLabel: 'Essential cookies',
      essentialDescription: 'Required for security, language, and basic functionality.',
      analyticsLabel: 'Analytics cookies',
      analyticsDescription: 'Help us measure visits and improve beta conversion.',
      alwaysOn: 'Always on',
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
      title: 'Cojauny | Verifizierte Flughafentransfers mit flugbezogenem Matching',
      description:
        'Verifizierte Mobilitätsplattform. Flug-Matching, Identitätsprüfung und transparente Reputation vor jedem geteilten Transfer.',
      keywords: [
        'sicherer flughafentransfer',
        'verifizierter flughafen ride share',
        'flug ride sharing',
        'vertrauenswürdige reisegemeinschaft',
        'gleicher flug carpool',
        'flughafen carpool app',
        'verifizierte reiseprofile',
        'flug matching app',
        'sichere flughafen mobilität',
        'geteilter flughafentransport'
      ],
      ogTitle: 'Cojauny | Sicherheit zuerst bei geteilten Flughafentransfers',
      ogDescription:
        'Identitätsprüfung, sichtbare Reputation und Matching per Flugnummer. Reisen Sie mit Passagieren auf derselben Strecke, nicht mit zufälligen Fremden.',
    },
    hero: {
      eyebrow: 'Sicherheit verifiziert · Gleicher Flug',
      title: 'Sicherheit steht bei jedem geteilten Flughafentransfer an erster Stelle',
      subtitle:
        'Cojauny verbindet Passagiere desselben Flugs nach Prüfung von Identität, Reputation und Fahrtkontext. Sie entscheiden vor Abflug, mit wem Sie fahren.',
      primaryCta: 'Beta-Zugang anfordern',
      secondaryCta: 'Ablauf ansehen',
      imageAlt: 'Cojauny-Oberfläche mit verifizierten Profilen und Flug-Matching',
      trustSignals: [
        'Identitätsprüfung',
        'Flugnummer-Matching',
        'Sichtbare Reputation',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Sicherere und effizientere Flughafentransfers mit Ersparnis beim Teilen',
        subtitle:
          'Sicherheit definiert jede Verbindung. Kosteneffizienz folgt, wenn verifizierte Passagiere Ihres Flugs gemeinsam fahren.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Cojauny Beta-Zugang anfordern',
      label: 'Frühen Beta-Zugang anfordern',
      emailPlaceholder: 'ihre@email.de',
      submit: 'Zugang anfordern',
      submitting: 'Anfrage wird gesendet…',
      privacyNote:
        'Mit dem Absenden Ihrer E-Mail akzeptieren Sie die Nutzungsbedingungen und Datenschutzrichtlinie von Cojauny.',
      success: 'Anfrage erhalten. Wir kontaktieren Sie per E-Mail, sobald Ihr Zugang verfügbar ist.',
    },
    airportsHubTitle: 'Wichtige Flughäfen',
    airportsHubAll: 'Vollständige Abdeckung ansehen',
    betaReferralBanner:
      'Nach der Registrierung erhalten Sie einen Einladungslink, um Ihren Zugang zu priorisieren.',
    features: {
      title: 'Vertrauensinfrastruktur für gemeinsames Reisen',
      subtitle:
        'Jede Funktion reduziert Risiken vor dem Fahrtantritt: Identität, gemeinsamer Kontext und kontrollierte Kommunikation.',
      items: [
        {
          title: 'Flug-Matching',
          description:
            'Matching erfolgt über Flugnummer und Datum. Keine Zufallstreffer — nur Passagiere auf derselben Strecke.',
          iconName: 'bolt',
        },
        {
          title: 'Verifizierte Identität',
          description:
            'Profile mit Dokumentenprüfung und Foto. Vertrauen basiert auf überprüfbaren Daten, nicht auf Annahmen.',
          iconName: 'shield',
        },
        {
          title: 'Sicherer Kommunikationskanal',
          description:
            'Koordination vor dem Flug in einer verschlüsselten Umgebung mit zeitlich begrenztem Zugang.',
          iconName: 'chat',
        },
        {
          title: 'Transparente Reputation',
          description:
            'Sternebewertungen und Feedback sind vor der Bestätigung sichtbar. Entscheiden Sie informiert.',
          iconName: 'sparkles',
        },
        {
          title: 'Events mit kontrollierter Kapazität',
          description:
            'Jeder Transfer zeigt Organisator, Teilnehmer, Treffpunkt und geschätzte Kosten vor der Bestätigung.',
          iconName: 'users',
        },
        {
          title: 'Operative Flugalerts',
          description:
            'Benachrichtigungen bei Zeitplanänderungen, Treffpunkt-Erinnerungen und relevanten Reise-Updates.',
          iconName: 'globe',
        },
      ],
    },
    value: {
      eyebrow: 'Sicherheit zuerst',
      title: 'Ein Vertrauensstandard vor dem Teilen eines Fahrzeugs',
      subtitle:
        'Cojauny priorisiert die Sicherheit der Passagiere in jeder Phase: Verifizierung, Auswahl, Koordination und Bewertung.',
      items: [
        {
          title: 'Identitätsprüfung',
          description:
            'Zugang zu einer Community, in der jedes Profil eine Dokumentenprüfung abschließt.',
        },
        {
          title: 'Gemeinsamer Flugkontext',
          description:
            'Fahren Sie mit Personen auf demselben Flug und Terminal. Operativer Kontext reduziert Unsicherheit.',
        },
        {
          title: 'Nachvollziehbare Reputation',
          description:
            'Sichtbare Bewertungshistorie für Pünktlichkeit, Kommunikation und Verhalten.',
        },
        {
          title: 'Strukturierte Koordination',
          description:
            'Treffpunkt, Zeitplan und Kostenaufteilung werden im Voraus festgelegt.',
        },
        {
          title: 'Professionelle Community',
          description:
            'Entwickelt für Vielreisende und Unternehmen mit klaren Sicherheitsanforderungen.',
        },
        {
          title: 'Verantwortliche Kosteneffizienz',
          description:
            'Bei kriteriengeleitetem Teilen sinken Transferkosten ohne Sicherheitskompromisse.',
        },
      ],
    },
    savings: {
      title: 'Wirtschaftliche Effizienz als Ergebnis von Vertrauen',
      caption:
        'Wenn die Koordination sicher und vorhersehbar ist, senken geteilte Transfers die Kosten nachhaltig.',
      metrics: [
        {
          value: '180+',
          label: 'Flughäfen',
          description: 'Abdeckung in internationalen Hubs in Europa, Amerika und dem Nahen Osten.',
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
      title: 'Gemeinsamer Reiseprozess in fünf Schritten',
      intro: 'Ein klarer Ablauf mit Sicherheitskontrollen in jeder Phase der Fahrt.',
      steps: [
        {
          title: '1. Verifizierte Registrierung',
          description: 'Erstellen Sie Ihr Profil und schließen Sie die Identitätsprüfung ab, um Zugang zur Community zu erhalten.',
        },
        {
          title: '2. Flugregistrierung',
          description: 'Geben Sie Flugnummer und Datum an, um kompatible Passagiere zu identifizieren.',
        },
        {
          title: '3. Optionen prüfen',
          description: 'Prüfen Sie Profile, Reputation und Fahrtbedingungen vor der Bestätigung.',
        },
        {
          title: '4. Sichere Koordination',
          description: 'Treffpunkt, Zeitplan und Kostenaufteilung in einem verschlüsselten Kanal abstimmen.',
        },
        {
          title: '5. Fahrt und Bewertung',
          description: 'Schließen Sie die Fahrt ab und geben Sie Ihre Bewertung ab, um Community-Standards zu wahren.',
        },
      ],
    },
    mockups: {
      heading: 'Eine Oberfläche für informierte Entscheidungen',
      description:
        'Die App zeigt Identität, Flugkontext und Reputation, bevor ein geteilter Transfer bestätigt wird.',
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
      heading: 'Beta-Zugang zu Cojauny anfordern',
      body: 'Fordern Sie frühen Zugang zu einer Plattform für geteilte Transfers mit verifizierten Sicherheitsstandards an.',
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
          'Prioritätszugang, verifizierte Profile, Gründer-Badge und direkter Team-Support.',
        success:
          'Du bist dabei! Wir benachrichtigen dich per E-Mail, wenn dein Zugang bereit ist.',
        error: 'Fehler bei der Registrierung. Bitte versuche es erneut.',
        duplicateError:
          'Du bist bereits auf der Liste. Wir melden uns bald.',
        submit: 'Anfrage senden',
        checkboxLabel: 'Ich akzeptiere Cojaunys {privacyLink}.',
        privacyLinkLabel: 'Datenschutzrichtlinie',
        referralNotice:
          'Nach der Registrierung erhalten Sie einen Einladungslink. Wir zählen nur Besuche und Anmeldungen zur Priorisierung Ihres Zugangs, ohne Daten Dritter zu speichern.',
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
        'Wir nutzen essenzielle Cookies für die Website und optionale Analyse-Cookies. Du wählst, was du akzeptierst. Deine Wahl wird 12 Monate gespeichert.',
      acceptAll: 'Alle akzeptieren',
      reject: 'Nur notwendige',
      customize: 'Anpassen',
      savePreferences: 'Einstellungen speichern',
      essentialLabel: 'Essenzielle Cookies',
      essentialDescription: 'Erforderlich für Sicherheit, Sprache und Grundfunktionen.',
      analyticsLabel: 'Analyse-Cookies',
      analyticsDescription: 'Helfen uns, Besuche zu messen und die Beta-Konversion zu verbessern.',
      alwaysOn: 'Immer aktiv',
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
      title: 'Cojauny | Transferts aéroport partagés avec passagers vérifiés',
      description:
        'Plateforme de mobilité vérifiée. Matching par vol, validation d\'identité et réputation transparente avant chaque trajet partagé.',
      keywords: [
        'transfert aéroport sécurisé',
        'transport partagé vérifié',
        'application voyage aéroport',
        'covoiturage aéroport',
        'voyage partagé même vol',
        'communauté voyageurs vérifiée',
        'profil vérifié aéroport',
        'matching par vol',
        'mobilité aéroportuaire sécurisée',
        'partage véhicule même vol'
      ],
      ogTitle: 'Cojauny | Sécurité vérifiée pour les transferts aéroport partagés',
      ogDescription:
        'Identité vérifiée, réputation visible et matching par numéro de vol. Voyagez avec des passagers de votre itinéraire, pas avec des inconnus au hasard.'
    },
    hero: {
      eyebrow: 'Sécurité vérifiée · Même vol',
      title: 'La sécurité est la priorité de chaque transfert aéroport partagé',
      subtitle:
        'Cojauny connecte les passagers du même vol après vérification de l\'identité, de la réputation et du contexte du trajet. Vous choisissez avec qui voyager avant le départ.',
      primaryCta: "Demander l'accès bêta",
      secondaryCta: 'Voir le fonctionnement',
      imageAlt: 'Interface Cojauny avec profils vérifiés et matching par vol',
      trustSignals: [
        'Vérification d\'identité',
        'Matching par numéro de vol',
        'Réputation visible',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Des transferts aéroport plus sûrs et efficaces, avec des économies en partageant',
        subtitle:
          'La sécurité définit chaque connexion. L\'efficacité économique suit lorsque des passagers vérifiés de votre vol partagent le trajet.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Demande d\'accès à la bêta Cojauny',
      label: 'Demandez un accès anticipé à la bêta',
      emailPlaceholder: 'vous@email.com',
      submit: 'Demander l\'accès',
      submitting: 'Envoi de la demande…',
      privacyNote:
        'En soumettant votre e-mail, vous acceptez les conditions d\'utilisation et la politique de confidentialité de Cojauny.',
      success: 'Demande reçue. Nous vous contacterons par e-mail lorsque votre accès sera disponible.',
    },
    airportsHubTitle: 'Principaux aéroports',
    airportsHubAll: 'Voir la couverture complète',
    betaReferralBanner:
      'Après inscription, vous recevrez un lien d\'invitation à partager avec votre réseau pour prioriser votre accès.',
    features: {
      title: 'Infrastructure de confiance pour voyager en compagnie',
      subtitle:
        'Chaque fonctionnalité réduit les risques avant le trajet : identité, contexte partagé et communication contrôlée.',
      items: [
        {
          title: 'Matching par vol',
          description:
            'Le matching s\'effectue par numéro de vol et date. Pas de correspondances aléatoires — uniquement des passagers du même itinéraire.',
          iconName: 'bolt',
        },
        {
          title: 'Identité vérifiée',
          description:
            'Profils avec vérification documentaire et photo. La confiance repose sur des données vérifiables.',
          iconName: 'shield',
        },
        {
          title: 'Canal de communication sécurisé',
          description:
            'Coordination avant le vol dans un environnement chiffré, avec accès limité dans le temps pour protéger votre vie privée.',
          iconName: 'chat',
        },
        {
          title: 'Réputation transparente',
          description:
            'Évaluations par étoiles et retours visibles avant confirmation. Prenez des décisions informées.',
          iconName: 'sparkles',
        },
        {
          title: 'Événements à capacité contrôlée',
          description:
            'Chaque transfert affiche l\'organisateur, les participants, le lieu de rendez-vous et le coût estimé avant confirmation.',
          iconName: 'users',
        },
        {
          title: 'Alertes opérationnelles de vol',
          description:
            'Notifications sur les changements d\'horaire, rappels de rendez-vous et mises à jour pertinentes du trajet.',
          iconName: 'globe',
        },
      ],
    },
    value: {
      eyebrow: 'Sécurité d\'abord',
      title: 'Un standard de confiance avant de partager un véhicule',
      subtitle:
        'Cojauny priorise la sécurité du passager à chaque étape : vérification, sélection, coordination et évaluation post-trajet.',
      items: [
        {
          title: 'Vérification d\'identité',
          description:
            'Accédez à une communauté où chaque profil complète une validation documentaire avant de participer.',
        },
        {
          title: 'Contexte de vol partagé',
          description:
            'Voyagez avec des personnes du même vol et terminal. Le contexte opérationnel réduit l\'incertitude.',
        },
        {
          title: 'Réputation auditable',
          description:
            'Historique d\'évaluations visible pour juger ponctualité, communication et conduite lors de trajets précédents.',
        },
        {
          title: 'Coordination structurée',
          description:
            'Lieu de rendez-vous, horaires et répartition des coûts définis à l\'avance pour une exécution prévisible.',
        },
        {
          title: 'Communauté professionnelle',
          description:
            'Conçu pour les voyageurs fréquents et les équipes d\'entreprise exigeant des standards de confiance clairs.',
        },
        {
          title: 'Efficacité économique responsable',
          description:
            'Lorsque le partage suit des critères définis, les coûts de transfert s\'optimisent sans compromettre la sécurité.',
        },
      ],
    },
    savings: {
      title: 'Efficacité économique comme résultat de la confiance',
      caption:
        'Lorsque la coordination est sécurisée et prévisible, les transferts partagés réduisent les coûts de manière durable.',
      metrics: [
        {
          value: '180+',
          label: 'Aéroports',
          description: 'Couverture dans les hubs internationaux d\'Europe, des Amériques et du Moyen-Orient.',
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
      title: 'Processus de voyage partagé en cinq étapes',
      intro: 'Un parcours clair, avec des contrôles de sécurité à chaque phase du trajet.',
      steps: [
        {
          title: '1. Inscription vérifiée',
          description: 'Créez votre profil et complétez la vérification d\'identité pour accéder à la communauté.',
        },
        {
          title: '2. Enregistrement du vol',
          description: 'Indiquez le numéro de vol et la date pour identifier des passagers compatibles.',
        },
        {
          title: '3. Évaluation des options',
          description: 'Consultez profils, réputation et conditions du trajet avant de confirmer.',
        },
        {
          title: '4. Coordination sécurisée',
          description: 'Alignez lieu de rendez-vous, horaires et répartition des coûts dans un canal chiffré.',
        },
        {
          title: '5. Trajet et évaluation',
          description: 'Terminez le voyage et soumettez votre évaluation pour maintenir les standards de la communauté.',
        },
      ],
    },
    mockups: {
      heading: 'Une expérience conçue pour décider en connaissance de cause',
      description:
        'L\'interface affiche identité, contexte de vol et réputation avant toute confirmation de trajet partagé.',
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
      heading: 'Demandez l\'accès à la bêta Cojauny',
      body: 'Demandez un accès anticipé à une plateforme de transferts partagés avec des standards de sécurité vérifiés.',
      link: '#beta',
      linkLabel: 'Demander l\'accès bêta'
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
          'Accès prioritaire, profils vérifiés, badge fondateur et support direct de l\'équipe.',
        success:
          'Vous êtes inscrit ! Nous vous informerons par e-mail dès que votre accès sera prêt.',
        error: 'Erreur lors de l\'inscription. Veuillez réessayer.',
        duplicateError:
          'Vous êtes déjà sur la liste. Nous vous contactons bientôt.',
        submit: 'Envoyer la demande',
        checkboxLabel: 'J\'accepte la {privacyLink} de Cojauny.',
        privacyLinkLabel: 'Politique de Confidentialité',
        referralNotice:
          'Après inscription, vous recevrez un lien d\'invitation. Nous comptons uniquement les visites et inscriptions pour prioriser votre accès, sans stocker de données tierces.',
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
        'Nous utilisons des cookies essentiels et des cookies analytiques optionnels. Vous choisissez quoi accepter. Votre choix est conservé 12 mois.',
      acceptAll: 'Tout accepter',
      reject: 'Essentiels seulement',
      customize: 'Personnaliser',
      savePreferences: 'Enregistrer les préférences',
      essentialLabel: 'Cookies essentiels',
      essentialDescription: 'Nécessaires pour la sécurité, la langue et le fonctionnement de base.',
      analyticsLabel: 'Cookies analytiques',
      analyticsDescription: 'Nous aident à mesurer les visites et améliorer la conversion bêta.',
      alwaysOn: 'Toujours actifs',
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


