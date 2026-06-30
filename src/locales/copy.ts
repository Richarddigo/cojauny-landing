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
      title: 'Cojauny | Seguridad verificada en traslados aeroportuarios compartidos',
      description:
        'La seguridad del pasajero es lo primero: identidad verificada, reputación auditable y matching por vuelo antes de confirmar cualquier trayecto compartido.',
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
      ogTitle: 'Cojauny | Su seguridad define cada trayecto compartido',
      ogDescription:
        'Identidad verificada, reputación visible y matching por vuelo. Ningún trayecto se confirma sin la información necesaria para decidir con seguridad.',
    },
    hero: {
      eyebrow: 'Seguridad verificada · Sin excepciones',
      title: 'Su seguridad define cada traslado compartido al aeropuerto',
      subtitle:
        'Verificamos identidad, reputación y contexto de vuelo antes de cada conexión. Usted elige con quién viaja — nunca con desconocidos al azar.',
      primaryCta: 'Solicitar acceso beta',
      secondaryCta: 'Ver cómo funciona',
      imageAlt: 'Interfaz de Cojauny con perfiles verificados y matching por vuelo',
      trustSignals: [
        'Identidad verificada',
        'Sin emparejamientos aleatorios',
        'Reputación auditable',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Primero su seguridad. Después, compartir optimiza el coste del traslado',
        subtitle:
          'Verificación, reputación y contexto de vuelo antes de cada conexión. El ahorro solo tiene sentido cuando la confianza está garantizada.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Solicitud de acceso a la beta de Cojauny',
      label: 'Solicite acceso a una plataforma que prioriza su seguridad',
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
      title: 'Cada función existe para protegerle antes del trayecto',
      subtitle:
        'Verificación, contexto compartido y comunicación controlada: cada capa reduce el riesgo antes de subir al vehículo.',
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
            'Valoraciones de 0 a 5 estrellas y comentarios opcionales tras cada trayecto. Visibles en el perfil público antes de confirmar.',
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
      eyebrow: 'Nuestro compromiso',
      title: 'La seguridad del pasajero por encima de todo lo demás',
      subtitle:
        'En Cojauny, ningún trayecto se confirma sin verificación previa, selección informada y coordinación segura.',
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
            'Historial público de valoraciones y comentarios para evaluar puntualidad, comunicación y conducta en trayectos anteriores.',
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
      title: 'Cuando la seguridad está resuelta, el coste se optimiza',
      caption:
        'Compartir con pasajeros verificados del mismo vuelo es más eficiente — siempre como resultado de una base de confianza sólida.',
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
      title: 'Cinco pasos. Controles de seguridad en cada uno.',
      intro: 'Desde la verificación de identidad hasta la valoración posterior: seguridad integrada en todo el proceso.',
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
          description: 'Complete el viaje y valore a sus compañeros (0–5 estrellas y comentario opcional). Las valoraciones alimentan el perfil público y el historial de reputación.',
        },
      ],
    },
    mockups: {
      heading: 'Vea quién viaja con usted antes de confirmar',
      description:
        'Identidad, vuelo y reputación visibles en la interfaz — porque la seguridad empieza por la información.',
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
            'Perfil público con identidad verificada, media de estrellas (0–5) y comentarios de trayectos anteriores.',
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
          badge: 'Resultado',
          title: 'Eficiencia tras la verificación',
          description:
            'Cuando la confianza está garantizada, compartir el traslado optimiza el coste sin comprometer la seguridad.',
          image: '/images/mockups/es/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Acceda a una plataforma que pone su seguridad primero',
      body: 'Solicite acceso a la beta de Cojauny: traslados compartidos con identidad verificada, reputación auditable y matching por vuelo.',
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
          answer: 'La seguridad es prioridad. Verificamos perfiles con documento de identidad y foto. Antes de confirmar, puede consultar el perfil público de cada usuario — valoraciones, comentarios e historial de reputación. El chat previo permite coordinar sin exponer datos de contacto privados.',
        },
        {
          question: '¿Cómo funcionan las valoraciones con estrellas y los comentarios?',
          answer:
            'Tras cada trayecto completado, los participantes se valoran mutuamente en una escala de 0 a 5 estrellas en tres criterios: puntualidad, comunicación y conducta. La media se refleja en el perfil público. Opcionalmente, puede dejar un comentario breve visible en el historial de reputación de ese usuario. Las valoraciones negativas se revisan para detectar abusos. Esta información le permite decidir con criterio antes de confirmar un trayecto.',
        },
        {
          question: '¿Qué es público y qué es privado en mi perfil?',
          answer:
            'Cojauny distingue entre perfil público y datos privados. En su perfil público, otros usuarios ven su nombre, foto, país, reputación (media de estrellas y comentarios de trayectos) y el historial de valoraciones recibidas en la comunidad. En su área privada conserva el control de email, teléfono, documento de identidad y datos de contacto: no se comparten automáticamente. Usted elige qué información adicional revelar en el chat antes de un trayecto.',
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
          answer:
            'Cumplimos con el RGPD. Los datos sensibles (email, teléfono, documento de identidad) permanecen en su perfil privado y cifrados. Solo la información del perfil público —nombre, foto, país, reputación e historial de valoraciones— es visible para que otros usuarios evalúen la confianza antes de un trayecto. Sus datos de contacto nunca se comparten automáticamente.',
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
        heading: 'Acceso beta con estándares de seguridad verificados',
        subheading: 'Priorizamos la protección del pasajero en cada función. Solicite acceso anticipado.',
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
      title: 'Cojauny | Security-verified shared airport transfers',
      description:
        'Passenger safety comes first: verified identity, auditable reputation, and flight matching before any shared transfer is confirmed.',
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
      ogTitle: 'Cojauny | Your safety defines every shared ride',
      ogDescription:
        'Verified identity, visible reputation, and flight matching. No transfer is confirmed without the information you need to decide safely.',
    },
    hero: {
      eyebrow: 'Security verified · No exceptions',
      title: 'Your safety defines every shared airport transfer',
      subtitle:
        'We verify identity, reputation, and flight context before every connection. You choose who you ride with — never random strangers.',
      primaryCta: 'Request beta access',
      secondaryCta: 'See how it works',
      imageAlt: 'Cojauny interface showing verified profiles and flight matching',
      trustSignals: [
        'Verified identity',
        'No random matching',
        'Auditable reputation',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Your safety first. Sharing optimizes transfer cost second',
        subtitle:
          'Verification, reputation, and flight context before every connection. Savings only make sense when trust is guaranteed.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Request Cojauny beta access',
      label: 'Request access to a platform that puts your safety first',
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
      title: 'Every feature exists to protect you before the ride',
      subtitle:
        'Verification, shared context, and controlled communication: each layer reduces risk before you enter the vehicle.',
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
            '0–5 star ratings and optional comments after each trip. Visible on the public profile before you confirm.',
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
      eyebrow: 'Our commitment',
      title: 'Passenger safety above everything else',
      subtitle:
        'At Cojauny, no transfer is confirmed without prior verification, informed selection, and secure coordination.',
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
            'Public history of ratings and comments to assess punctuality, communication, and conduct on previous trips.',
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
      title: 'When safety is resolved, cost optimizes',
      caption:
        'Sharing with verified passengers on the same flight is more efficient — always as the result of a solid trust foundation.',
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
      title: 'Five steps. Security controls at each one.',
      intro: 'From identity verification to post-trip rating: security built into every stage of the process.',
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
          description: 'Complete the trip and rate your companions (0–5 stars and optional comment). Ratings feed the public profile and reputation history.',
        },
      ],
    },
    mockups: {
      heading: 'See who you ride with before you confirm',
      description:
        'Identity, flight, and reputation visible in the interface — because safety starts with information.',
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
            'Public profile with verified identity, star average (0–5), and comments from previous trips.',
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
          badge: 'Outcome',
          title: 'Efficiency after verification',
          description:
            'When trust is guaranteed, sharing the transfer optimizes cost without compromising safety.',
          image: '/images/mockups/en/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Join a platform that puts your safety first',
      body: 'Request access to the Cojauny beta: shared transfers with verified identity, auditable reputation, and flight matching.',
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
          answer: 'Absolutely. Safety is our top priority. All users must verify their identity with photo and ID. You can review each traveler\'s public profile—star ratings, comments, and reputation history—before confirming. A secure pre-trip chat lets you coordinate without sharing private contact details.',
        },
        {
          question: 'How do star ratings and profile comments work?',
          answer:
            'After each completed trip, participants rate each other on a 0–5 star scale across three criteria: punctuality, communication, and conduct. The average appears on the public profile. An optional short comment can be left and is visible in that user\'s reputation history. Negative ratings are reviewed for abuse. This helps you make informed decisions before confirming a shared transfer.',
        },
        {
          question: 'What is public and what is private on my profile?',
          answer:
            'Cojauny separates your public profile from private data. Your public profile shows your name, photo, country, reputation (star average and trip comments), and the rating history you have received in the community. Your private area keeps email, phone, ID documents, and contact details under your control—they are never shared automatically. You choose what additional information to reveal in chat before a trip.',
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
          answer:
            'We comply with GDPR. Sensitive data (email, phone, ID documents) stays in your private profile and is encrypted. Only public profile information—name, photo, country, reputation, and rating history—is visible so other users can assess trust before a trip. Your contact details are never shared automatically.',
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
        heading: 'Beta access with verified security standards',
        subheading: 'We prioritize passenger protection in every feature. Request early access.',
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
      title: 'Cojauny | Sicherheitsgeprüfte geteilte Flughafentransfers',
      description:
        'Passengersicherheit steht an erster Stelle: verifizierte Identität, nachvollziehbare Reputation und Flug-Matching vor jeder Bestätigung eines geteilten Transfers.',
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
      ogTitle: 'Cojauny | Ihre Sicherheit definiert jede geteilte Fahrt',
      ogDescription:
        'Verifizierte Identität, sichtbare Reputation und Flug-Matching. Kein Transfer wird bestätigt, ohne die Informationen für eine sichere Entscheidung.',
    },
    hero: {
      eyebrow: 'Sicherheit verifiziert · Ohne Ausnahmen',
      title: 'Ihre Sicherheit definiert jeden geteilten Flughafentransfer',
      subtitle:
        'Wir prüfen Identität, Reputation und Flugkontext vor jeder Verbindung. Sie wählen, mit wem Sie fahren — niemals zufällige Fremde.',
      primaryCta: 'Beta-Zugang anfordern',
      secondaryCta: 'Ablauf ansehen',
      imageAlt: 'Cojauny-Oberfläche mit verifizierten Profilen und Flug-Matching',
      trustSignals: [
        'Verifizierte Identität',
        'Kein Zufalls-Matching',
        'Nachvollziehbare Reputation',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Zuerst Ihre Sicherheit. Danach optimiert Teilen die Transferkosten',
        subtitle:
          'Verifizierung, Reputation und Flugkontext vor jeder Verbindung. Ersparnis ergibt nur Sinn, wenn Vertrauen gewährleistet ist.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Cojauny Beta-Zugang anfordern',
      label: 'Zugang zu einer Plattform anfordern, die Ihre Sicherheit priorisiert',
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
      title: 'Jede Funktion schützt Sie vor der Fahrt',
      subtitle:
        'Verifizierung, gemeinsamer Kontext und kontrollierte Kommunikation: jede Schicht reduziert das Risiko vor dem Einsteigen.',
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
            'Bewertungen von 0 bis 5 Sternen und optionale Kommentare nach jeder Fahrt. Sichtbar im öffentlichen Profil vor der Bestätigung.',
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
      eyebrow: 'Unser Versprechen',
      title: 'Passengersicherheit über alles andere',
      subtitle:
        'Bei Cojauny wird kein Transfer bestätigt ohne vorherige Verifizierung, informierte Auswahl und sichere Koordination.',
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
            'Öffentlicher Verlauf von Bewertungen und Kommentaren zu Pünktlichkeit, Kommunikation und Verhalten bei früheren Fahrten.',
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
      title: 'Wenn die Sicherheit steht, optimiert sich der Preis',
      caption:
        'Teilen mit verifizierten Passagieren desselben Flugs ist effizienter — immer als Ergebnis einer soliden Vertrauensbasis.',
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
      title: 'Fünf Schritte. Sicherheitskontrollen in jedem.',
      intro: 'Von der Identitätsprüfung bis zur Nachbewertung: Sicherheit in jedem Prozessschritt verankert.',
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
          description: 'Schließen Sie die Fahrt ab und bewerten Sie Ihre Begleiter (0–5 Sterne und optionaler Kommentar). Bewertungen fließen in das öffentliche Profil und den Reputationsverlauf ein.',
        },
      ],
    },
    mockups: {
      heading: 'Sehen Sie, mit wem Sie fahren, bevor Sie bestätigen',
      description:
        'Identität, Flug und Reputation in der Oberfläche sichtbar — weil Sicherheit mit Information beginnt.',
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
            'Öffentliches Profil mit verifizierter Identität, Sterne-Durchschnitt (0–5) und Kommentaren früherer Fahrten.',
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
          badge: 'Ergebnis',
          title: 'Effizienz nach der Verifizierung',
          description:
            'Wenn Vertrauen gewährleistet ist, optimiert Teilen die Kosten — ohne Sicherheitskompromisse.',
          image: '/images/mockups/de/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Zugang zu einer Plattform, die Ihre Sicherheit priorisiert',
      body: 'Fordern Sie Beta-Zugang zu Cojauny an: geteilte Transfers mit verifizierter Identität, nachvollziehbarer Reputation und Flug-Matching.',
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
          answer: 'Sicherheit hat Priorität. Wir verifizieren Profile mit Ausweis und Foto. Vor der Bestätigung können Sie das öffentliche Profil einsehen — Sternebewertungen, Kommentare und Reputationsverlauf. Der sichere Vorab-Chat ermöglicht Koordination ohne private Kontaktdaten preiszugeben.',
        },
        {
          question: 'Wie funktionieren Sternebewertungen und Profilkommentare?',
          answer:
            'Nach jeder abgeschlossenen Fahrt bewerten sich die Teilnehmer gegenseitig auf einer Skala von 0 bis 5 Sternen in drei Kriterien: Pünktlichkeit, Kommunikation und Verhalten. Der Durchschnitt erscheint im öffentlichen Profil. Optional kann ein kurzer Kommentar hinterlassen werden, der im Reputationsverlauf des Nutzers sichtbar ist. Negative Bewertungen werden auf Missbrauch geprüft. So können Sie vor der Bestätigung informiert entscheiden.',
        },
        {
          question: 'Was ist öffentlich und was ist privat in meinem Profil?',
          answer:
            'Cojauny unterscheidet zwischen öffentlichem Profil und privaten Daten. Im öffentlichen Profil sehen andere Nutzer Ihren Namen, Ihr Foto, Ihr Land, Ihre Reputation (Sterne-Durchschnitt und Fahrtkommentare) und den erhaltenen Bewertungsverlauf in der Community. In Ihrem privaten Bereich behalten Sie die Kontrolle über E-Mail, Telefon, Ausweis und Kontaktdaten — sie werden nicht automatisch geteilt. Zusätzliche Informationen geben Sie selbst im Chat vor der Fahrt preis.',
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
          answer:
            'Wir halten uns an die DSGVO. Sensible Daten (E-Mail, Telefon, Ausweis) bleiben in Ihrem privaten Profil und sind verschlüsselt. Nur öffentliche Profilinformationen — Name, Foto, Land, Reputation und Bewertungsverlauf — sind sichtbar, damit andere Nutzer Vertrauen vor der Fahrt einschätzen können. Kontaktdaten werden nie automatisch geteilt.',
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
        heading: 'Beta-Zugang mit verifizierten Sicherheitsstandards',
        subheading: 'Wir priorisieren den Schutz der Passagiere in jeder Funktion. Fordern Sie frühen Zugang an.',
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
      title: 'Cojauny | Transferts aéroport partagés avec sécurité vérifiée',
      description:
        'La sécurité du passager est la priorité : identité vérifiée, réputation auditable et matching par vol avant toute confirmation de trajet partagé.',
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
      ogTitle: 'Cojauny | Votre sécurité définit chaque trajet partagé',
      ogDescription:
        'Identité vérifiée, réputation visible et matching par vol. Aucun trajet n\'est confirmé sans les informations nécessaires pour décider en toute sécurité.',
    },
    hero: {
      eyebrow: 'Sécurité vérifiée · Sans exception',
      title: 'Votre sécurité définit chaque transfert aéroport partagé',
      subtitle:
        'Nous vérifions identité, réputation et contexte de vol avant chaque connexion. Vous choisissez avec qui voyager — jamais des inconnus au hasard.',
      primaryCta: "Demander l'accès bêta",
      secondaryCta: 'Voir le fonctionnement',
      imageAlt: 'Interface Cojauny avec profils vérifiés et matching par vol',
      trustSignals: [
        'Identité vérifiée',
        'Pas de matching aléatoire',
        'Réputation auditable',
      ],
    },
    heroVariants: {
      savings: {
        title: 'D\'abord votre sécurité. Ensuite, le partage optimise le coût du transfert',
        subtitle:
          'Vérification, réputation et contexte de vol avant chaque connexion. Les économies n\'ont de sens que lorsque la confiance est garantie.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Demande d\'accès à la bêta Cojauny',
      label: 'Demandez l\'accès à une plateforme qui priorise votre sécurité',
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
      title: 'Chaque fonctionnalité existe pour vous protéger avant le trajet',
      subtitle:
        'Vérification, contexte partagé et communication contrôlée : chaque couche réduit le risque avant de monter en véhicule.',
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
            'Évaluations de 0 à 5 étoiles et commentaires optionnels après chaque trajet. Visibles sur le profil public avant confirmation.',
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
      eyebrow: 'Notre engagement',
      title: 'La sécurité du passager avant tout le reste',
      subtitle:
        'Chez Cojauny, aucun trajet n\'est confirmé sans vérification préalable, sélection informée et coordination sécurisée.',
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
            'Historique public d\'évaluations et de commentaires pour juger ponctualité, communication et conduite lors de trajets précédents.',
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
      title: 'Quand la sécurité est assurée, le coût s\'optimise',
      caption:
        'Partager avec des passagers vérifiés du même vol est plus efficace — toujours comme résultat d\'une base de confiance solide.',
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
      title: 'Cinq étapes. Contrôles de sécurité à chacune.',
      intro: 'De la vérification d\'identité à l\'évaluation post-trajet : la sécurité intégrée à chaque phase du processus.',
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
          description: 'Terminez le voyage et évaluez vos compagnons (0 à 5 étoiles et commentaire optionnel). Les évaluations alimentent le profil public et l\'historique de réputation.',
        },
      ],
    },
    mockups: {
      heading: 'Voyez avec qui vous voyagez avant de confirmer',
      description:
        'Identité, vol et réputation visibles dans l\'interface — parce que la sécurité commence par l\'information.',
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
            'Profil public avec identité vérifiée, moyenne d\'étoiles (0–5) et commentaires de trajets précédents.',
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
          badge: 'Résultat',
          title: 'Efficacité après vérification',
          description:
            'Lorsque la confiance est garantie, partager le transfert optimise le coût sans compromettre la sécurité.',
          image: '/images/mockups/fr/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Accédez à une plateforme qui met votre sécurité en premier',
      body: 'Demandez l\'accès à la bêta Cojauny : transferts partagés avec identité vérifiée, réputation auditable et matching par vol.',
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
          answer: 'La sécurité est prioritaire. Nous vérifions les profils avec pièce d\'identité et photo. Avant de confirmer, vous pouvez consulter le profil public — évaluations par étoiles, commentaires et historique de réputation. Le chat sécurisé préalable permet de coordonner sans exposer vos coordonnées privées.',
        },
        {
          question: 'Comment fonctionnent les évaluations par étoiles et les commentaires de profil ?',
          answer:
            'Après chaque trajet terminé, les participants s\'évaluent mutuellement sur une échelle de 0 à 5 étoiles selon trois critères : ponctualité, communication et conduite. La moyenne apparaît sur le profil public. Un commentaire court optionnel peut être laissé et reste visible dans l\'historique de réputation de l\'utilisateur. Les évaluations négatives sont examinées pour détecter les abus. Ces informations vous permettent de décider en connaissance de cause avant de confirmer un trajet.',
        },
        {
          question: 'Qu\'est-ce qui est public et privé sur mon profil ?',
          answer:
            'Cojauny distingue le profil public des données privées. Votre profil public affiche votre nom, photo, pays, réputation (moyenne d\'étoiles et commentaires de trajets) et l\'historique des évaluations reçues dans la communauté. Votre espace privé conserve le contrôle de l\'e-mail, du téléphone, de la pièce d\'identité et des coordonnées — ils ne sont jamais partagés automatiquement. Vous choisissez les informations supplémentaires à révéler dans le chat avant un trajet.',
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
          answer:
            'Nous respectons le RGPD. Les données sensibles (e-mail, téléphone, pièce d\'identité) restent dans votre profil privé et sont chiffrées. Seules les informations du profil public — nom, photo, pays, réputation et historique d\'évaluations — sont visibles pour que les autres utilisateurs puissent évaluer la confiance avant un trajet. Vos coordonnées ne sont jamais partagées automatiquement.',
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
        heading: 'Accès bêta avec standards de sécurité vérifiés',
        subheading: 'Nous priorisons la protection du passager dans chaque fonctionnalité. Demandez un accès anticipé.',
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


