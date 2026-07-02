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
      title: 'Cojauny | Comparte tu traslado al aeropuerto con tu mismo vuelo',
      description:
        'Encuentra viajeros de tu vuelo, comparte el coste del taxi o traslado y coordina todo de forma segura desde la app. Únete a la beta hoy.',
      keywords: [
        'traslado aeropuerto compartido',
        'compartir taxi aeropuerto',
        'app viajes aeropuerto',
        'carpool aeropuerto',
        'viaje compartido vuelo',
        'matching por vuelo',
        'perfil verificado aeropuerto',
        'comunidad viajeros verificada',
        'movilidad aeroportuaria segura',
        'ahorrar traslado aeropuerto'
      ],
      ogTitle: 'Cojauny | Comparte tu traslado al aeropuerto, fácil y verificado',
      ogDescription:
        'Encuentra pasajeros de tu vuelo, comparte el coste del traslado y viaja con compañeros verificados y valorados.',
    },
    hero: {
      eyebrow: 'Beta abierta · Plazas limitadas',
      title: 'Comparte tu traslado al aeropuerto con gente de tu mismo vuelo',
      subtitle:
        'Encuentra viajeros verificados en tu vuelo, reparte el coste del trayecto y coordina todo con seguridad desde la app.',
      primaryCta: 'Reservar mi plaza',
      secondaryCta: 'Ver cómo funciona',
      imageAlt: 'Interfaz de Cojauny mostrando matching por vuelo, coste compartido y perfiles verificados',
      trustSignals: [
        'Reparte el coste',
        'Emparejado por vuelo',
        'Viajeros verificados',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Comparte tu traslado al aeropuerto y ahorra hasta un 75%',
        subtitle:
          'Encuentra viajeros verificados en tu vuelo y reparte el coste del trayecto — siempre sabes con quién viajas antes de confirmar.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Unirse a la lista de espera de la beta de Cojauny',
      label: 'Consigue acceso anticipado y reserva tu plaza en la beta',
      emailPlaceholder: 'tu@email.com',
      submit: 'Reservar mi plaza',
      submitting: 'Enviando solicitud…',
      privacyNote:
        'Al enviar su correo, acepta los términos de uso y la política de privacidad de Cojauny.',
      success: '¡Ya estás dentro! Te avisaremos por email en cuanto tu acceso esté listo.',
    },
    airportsHubTitle: 'Principales aeropuertos',
    airportsHubAll: 'Ver cobertura completa',
    betaReferralBanner:
      'Tras registrarse, recibirá un enlace de invitación para compartir con su red y priorizar su acceso.',
    features: {
      title: 'Todo lo que necesitas para un traslado más inteligente',
      subtitle:
        'Desde encontrar a tu grupo hasta repartir la cuenta: cada función está pensada para que compartir sea sencillo y seguro.',
      items: [
        {
          title: 'Matching por vuelo',
          description:
            'El emparejamiento se realiza por número de vuelo y fecha. No hay coincidencias aleatorias: solo pasajeros del mismo trayecto.',
          iconName: 'bolt',
        },
        {
          title: 'Reparto automático del coste',
          description:
            'La app calcula y reparte el coste del traslado entre todo el grupo, para que nadie tenga que hacer cuentas.',
          iconName: 'sparkles',
        },
        {
          title: 'Identidad verificada',
          description:
            'Perfiles con verificación documental y foto, para que sepas con quién viajas.',
          iconName: 'shield',
        },
        {
          title: 'Coordinación desde la app',
          description:
            'Chatea con tu grupo antes del vuelo para acordar el punto de encuentro y el horario, sin compartir tu número.',
          iconName: 'chat',
        },
        {
          title: 'Valoraciones y reseñas',
          description:
            'Valoraciones de 0 a 5 estrellas y comentarios opcionales tras cada trayecto, visibles en el perfil público antes de confirmar.',
          iconName: 'users',
        },
        {
          title: 'Alertas de vuelo en tiempo real',
          description:
            'Notificaciones sobre cambios de horario, recordatorios de encuentro y actualizaciones relevantes del trayecto.',
          iconName: 'globe',
        },
      ],
    },
    value: {
      eyebrow: 'Por qué Cojauny',
      title: 'Ahorra en tus traslados al aeropuerto sin perder el control',
      subtitle:
        'Cada trayecto compartido combina ahorro real, comodidad y seguridad — usted decide con quién viaja antes de confirmar.',
      items: [
        {
          title: 'Ahorro real',
          description:
            'Reparte el coste de un taxi o traslado privado con otros pasajeros en lugar de pagar la tarifa completa en solitario.',
        },
        {
          title: 'Emparejado por vuelo, no al azar',
          description:
            'Viaja con personas de tu mismo vuelo y terminal — nunca con un desconocido cualquiera de la calle.',
        },
        {
          title: 'Verificado y valorado',
          description:
            'La verificación de identidad y las valoraciones públicas de trayectos anteriores le permiten elegir compañeros de viaje con confianza.',
        },
        {
          title: 'Todo acordado de antemano',
          description:
            'Punto de encuentro, horarios y reparto de costes definidos antes de confirmar, sin sorpresas el día del viaje.',
        },
      ],
    },
    savings: {
      title: 'Ahorra hasta un 75% en tu traslado al aeropuerto',
      caption:
        'Compartir el trayecto con viajeros verificados de tu vuelo es la forma más sencilla de reducir costes. Estas son las cifras hacia las que trabajamos durante la beta.',
      metrics: [
        {
          value: '50-75%',
          label: 'Ahorro por trayecto',
          description: 'Rango estimado al dividir taxi o vehículo privado entre pasajeros verificados.',
        },
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
          value: '1.000+ t',
          label: 'CO₂ evitado',
          description: 'Impacto ambiental proyectado al consolidar ocupación por vehículo.',
        },
      ],
    },
    workflow: {
      title: 'Del número de vuelo al trayecto compartido en 5 pasos',
      intro: 'Verifique su perfil una sola vez y luego encuentre grupo, coordine y viaje — con la seguridad integrada en cada paso.',
      steps: [
        {
          title: '1. Crea tu perfil verificado',
          description: 'Regístrate y completa la verificación de identidad una vez para desbloquear la comunidad.',
        },
        {
          title: '2. Añade tu vuelo',
          description: 'Indica número de vuelo y fecha para que encontremos viajeros compatibles.',
        },
        {
          title: '3. Compara tus opciones',
          description: 'Revisa los perfiles emparejados, sus valoraciones y las condiciones del trayecto antes de elegir.',
        },
        {
          title: '4. Coordina los detalles',
          description: 'Acuerda punto de encuentro, horario y reparto de costes en un chat privado dentro de la app.',
        },
        {
          title: '5. Viaja y valora',
          description: 'Completa el trayecto y valora a tus compañeros (0–5 estrellas y comentario opcional) para ayudar al próximo viajero a decidir.',
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
          title: 'Ve crecer tu ahorro',
          description:
            'Sigue cuánto has ahorrado en tus traslados compartidos, trayecto a trayecto.',
          image: '/images/mockups/es/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: '¿Listo para compartir tu próximo traslado al aeropuerto?',
      body: 'Únete a la beta de Cojauny: encuentra viajeros de tu vuelo, reparte el coste y viaja con compañeros verificados y valorados.',
      link: '#beta',
      linkLabel: 'Reservar mi plaza',
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
          question: '¿Es seguro viajar con gente que no conozco?',
          answer: 'Sí. Cada usuario verifica su identidad con documento y foto antes de unirse, y puedes consultar el perfil público de cada viajero — valoraciones, comentarios e historial de reputación — antes de confirmar nada. La coordinación se hace en un chat seguro dentro de la app, así que nunca tienes que compartir tu número. Los datos sensibles como email, documento de identidad y contacto son privados y nunca se comparten automáticamente.',
        },
        {
          question: '¿Puedo cancelar mi asistencia sin penalización?',
          answer: 'Sí, tienes total flexibilidad. Puedes salir de cualquier evento desde la app sin coste adicional. Si eres organizador, al cancelar todos los participantes reciben una notificación instantánea con opciones para reorganizarse. Te recomendamos avisar con la mayor antelación posible.'
        },
        {
          question: '¿Cómo funciona el reparto del coste entre participantes?',
          answer: 'La app incluye una calculadora automática que reparte el coste del traslado a partes iguales y muestra a todo el grupo el ahorro estimado antes del viaje. Cojauny no procesa pagos directamente, así que mantienes flexibilidad para liquidar como prefiráis: efectivo, Bizum, transferencia, PayPal o pago con tarjeta dividido.'
        },
        {
          question: '¿Qué tipo de eventos puedo crear o unirme?',
          answer: 'Cojauny admite varias categorías: traslados compartidos al aeropuerto de salida, recogidas en el aeropuerto de llegada, furgonetas corporativas para equipos, coches privados compartidos, alojamiento compartido en destino y actividades sociales tras el vuelo. Los usuarios Premium pueden crear eventos personalizados para cualquier necesidad de viaje compartido.'
        },
        {
          question: '¿En qué aeropuertos funciona Cojauny?',
          answer: 'Lanzamos con cobertura en los principales hubs internacionales de Europa, América y Oriente Medio, incluyendo Madrid-Barajas, Barcelona-El Prat, Londres-Heathrow, París-Charles de Gaulle y Nueva York-JFK. Vamos añadiendo aeropuertos según la demanda de la beta — si el tuyo no está, puedes solicitarlo desde Ajustes → Solicitar aeropuerto.'
        },
        {
          question: '¿Qué pasa si mi vuelo se retrasa, se cancela o cambia de puerta?',
          answer: 'Cojauny recibe actualizaciones de vuelo en tiempo real. Cuando tu vuelo cambia, todos los participantes de tu evento reciben una notificación instantánea con los detalles actualizados, y puedes ajustar la hora de encuentro, actualizar el punto de encuentro o cancelar el evento con un solo toque. El historial de cambios queda visible para mantener la transparencia.'
        },
        {
          question: '¿Qué diferencia hay entre el plan Free y el Premium?',
          answer: 'El plan Free te permite gestionar 1 vuelo y 1 evento activos a la vez — no es un límite total, ya que puedes añadir otro en cuanto termines un viaje. Premium desbloquea múltiples vuelos y eventos simultáneos, chat grupal con todos los participantes, estadísticas detalladas de ahorro y CO₂, eventos recurrentes y soporte prioritario, por 4,99 €/mes o 49 €/año (17% de descuento).'
        },
        {
          question: '¿Cuánto dinero puedo ahorrar realmente con Cojauny?',
          answer: 'El ahorro estimado es del 50-75% en el transporte al aeropuerto. Por ejemplo, un traslado que cuesta 30-35€ en solitario baja a unos 7,50-9€ por persona al compartirlo con tres pasajeros más de tu mismo vuelo — unos 22-25€ ahorrados por trayecto, o 500-600€ al año si vuelas dos veces al mes.'
        },
        {
          question: '¿Qué pasa después de apuntarme a la lista de espera de la beta?',
          answer: 'Recibirás un email de confirmación al instante, además de un enlace de invitación personal que puedes compartir para avanzar en la cola. A medida que abramos nuevas plazas, te enviaremos un email con los detalles de tu acceso y todo lo necesario para completar tu primer traslado compartido.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Reserva tu plaza en la beta de Cojauny',
        subheading: 'Sé de los primeros en compartir traslados verificados al aeropuerto y consigue ventajas de miembro fundador.',
        title: 'Solicita acceso beta',
        description:
          'Acceso prioritario, perfil verificado, insignia de fundador y soporte directo del equipo.',
        success:
          '¡Estás dentro! Te avisaremos por email cuando tu acceso esté listo.',
        error: 'Hubo un error al registrar tu solicitud. Por favor, inténtalo de nuevo.',
        duplicateError:
          'Ya estás en nuestra lista. Te avisaremos pronto.',
        submit: 'Reservar mi plaza',
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
      title: 'Cojauny | Share airport transfers with people on your flight',
      description:
        'Match with verified travelers on your flight, split the cost of the ride, and coordinate safely in the app. Join the beta today.',
      keywords: [
        'airport ride share',
        'shared airport transfer',
        'split taxi cost airport',
        'flight ride sharing',
        'same flight carpool',
        'airport carpool app',
        'flight matching app',
        'verified travel profiles',
        'trusted travel community',
        'secure airport mobility'
      ],
      ogTitle: 'Cojauny | Share your airport ride, verified and simple',
      ogDescription:
        'Match with passengers on your flight, split the transfer cost, and travel with verified, reviewed companions.',
    },
    hero: {
      eyebrow: 'Beta now open · Limited spots',
      title: 'Share your airport transfer with people on your flight',
      subtitle:
        'Match with verified travelers on the same flight, split the cost of the ride, and coordinate everything safely in the app.',
      primaryCta: 'Reserve my spot',
      secondaryCta: 'See how it works',
      imageAlt: 'Cojauny interface showing flight matches, shared costs, and verified profiles',
      trustSignals: [
        'Split the cost',
        'Matched by flight',
        'Verified travelers',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Split your airport transfer and save up to 75%',
        subtitle:
          'Match with verified travelers on your flight and share the ride cost — you always see who you are traveling with before you confirm.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Join the Cojauny beta waitlist',
      label: 'Get early access and lock in your beta spot',
      emailPlaceholder: 'you@email.com',
      submit: 'Reserve my spot',
      submitting: 'Submitting…',
      privacyNote:
        'By submitting your email, you agree to Cojauny\'s terms of use and privacy policy.',
      success: 'You\'re on the list! We will email you as soon as your access is ready.',
    },
    airportsHubTitle: 'Major airports',
    airportsHubAll: 'View full coverage',
    betaReferralBanner:
      'After registration, you will receive an invite link to share with your network and prioritize your access.',
    features: {
      title: 'Everything you need for a smarter airport transfer',
      subtitle:
        'From finding your match to splitting the bill — every feature is built to make sharing simple, and safe.',
      items: [
        {
          title: 'Flight matching',
          description:
            'Matching is based on flight number and date. No random pairings — only passengers on the same itinerary.',
          iconName: 'bolt',
        },
        {
          title: 'Automatic cost splitting',
          description:
            'The app calculates and splits the transfer cost for everyone in the group, so nobody does the math.',
          iconName: 'sparkles',
        },
        {
          title: 'Verified identity',
          description:
            'Profiles include document verification and photo validation, so you know who you are traveling with.',
          iconName: 'shield',
        },
        {
          title: 'In-app coordination',
          description:
            'Chat with your group before the flight to confirm meeting point and timing, without sharing your phone number.',
          iconName: 'chat',
        },
        {
          title: 'Ratings & reviews',
          description:
            '0–5 star ratings and optional comments after each trip, visible on the public profile before you confirm.',
          iconName: 'users',
        },
        {
          title: 'Live flight alerts',
          description:
            'Notifications for schedule changes, meeting reminders, and relevant trip updates.',
          iconName: 'globe',
        },
      ],
    },
    value: {
      eyebrow: 'Why Cojauny',
      title: 'Save on airport transfers without giving up control',
      subtitle:
        'Every shared ride combines real savings, convenience, and safety — you decide who you travel with before you confirm.',
      items: [
        {
          title: 'Real savings',
          description:
            'Split the cost of a taxi or private transfer with other passengers instead of paying the full fare alone.',
        },
        {
          title: 'Matched by flight, not at random',
          description:
            'Ride with people on your same flight and terminal — never a random stranger from the street.',
        },
        {
          title: 'Verified & reviewed',
          description:
            'Identity verification and public ratings from past trips let you choose your travel companions with confidence.',
        },
        {
          title: 'Everything agreed in advance',
          description:
            'Meeting point, timing, and cost split are defined before you confirm, so there are no surprises on the day.',
        },
      ],
    },
    savings: {
      title: 'Save up to 75% on your airport transfer',
      caption:
        'Splitting the ride with verified travelers on your flight is the simplest way to cut costs. These are the numbers we are building toward during beta.',
      metrics: [
        {
          value: '50-75%',
          label: 'Savings per trip',
          description: 'Estimated range when splitting taxi or private vehicle among verified passengers.',
        },
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
          value: '1,000+ t',
          label: 'CO₂ avoided',
          description: 'Projected environmental impact from higher vehicle occupancy.',
        },
      ],
    },
    workflow: {
      title: 'From flight number to shared ride in 5 steps',
      intro: 'Verify your profile once, then match, coordinate, and travel — with safety checks built in at every stage.',
      steps: [
        {
          title: '1. Create your verified profile',
          description: 'Sign up and complete identity verification once to unlock the community.',
        },
        {
          title: '2. Add your flight',
          description: 'Submit your flight number and date so we can find compatible travelers.',
        },
        {
          title: '3. Compare your options',
          description: 'Review matched profiles, ratings, and trip conditions before you choose.',
        },
        {
          title: '4. Coordinate the details',
          description: 'Agree on meeting point, timing, and cost split in a private in-app chat.',
        },
        {
          title: '5. Travel and rate',
          description: 'Complete the trip and rate your companions (0–5 stars and optional comment) to help the next traveler decide.',
        },
      ],
    },
    mockups: {
      heading: 'See exactly who you would be traveling with',
      description:
        'Flight, profile, and reputation are all visible in the app before you say yes.',
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
          title: 'Watch your savings add up',
          description:
            'Track how much you have saved across your shared transfers, trip after trip.',
          image: '/images/mockups/en/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Ready to share your next airport ride?',
      body: 'Join the Cojauny beta: match with travelers on your flight, split the cost, and ride with verified, reviewed companions.',
      link: '#beta',
      linkLabel: 'Reserve my spot'
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
          answer: 'Enter your flight number (e.g., IB2345) and date. Our platform queries a global database in real time and connects you with other travelers on the same flight or on compatible flights at the same time and airport, automatically checking schedule, terminal, and destination.'
        },
        {
          question: 'Is it safe to share a ride with people I don\'t know?',
          answer: 'Yes. Every user verifies their identity with photo and ID before joining, and you can review each traveler\'s public profile — star ratings, comments, and reputation history — before confirming anything. Coordination happens in a secure in-app chat, so you never have to share your phone number. Sensitive data such as email, ID documents, and contact details stay private and are never shared automatically.',
        },
        {
          question: 'Can I cancel my participation without penalty?',
          answer: 'Yes, you have total flexibility. You can leave any event directly from the app at no extra cost. If you are the event organizer, upon canceling, all participants receive an instant notification with options to reorganize the group or find alternatives. We recommend notifying as early as possible to allow others to reorganize.'
        },
        {
          question: 'How does splitting the cost work between participants?',
          answer: 'The app includes an automatic calculator that splits the transfer cost equally among the group and shows everyone the estimated savings before the trip. Cojauny does not process payments directly, so you keep flexibility to settle up however suits the group best: cash, Bizum, bank transfer, PayPal, or a split card payment.'
        },
        {
          question: 'What types of events can I create or join?',
          answer: 'Cojauny supports multiple event categories: shared transfers to the departure airport, pickups from the arrival airport, corporate van services for business teams, shared private cars, shared accommodation at destination, and post-flight social activities. Premium users can create custom events for any type of shared travel need.'
        },
        {
          question: 'Which airports is Cojauny available in?',
          answer: 'We are launching with coverage across major international hubs in Europe, the Americas, and the Middle East, including Madrid-Barajas, Barcelona-El Prat, London-Heathrow, Paris-Charles de Gaulle, and New York-JFK. We are adding new airports based on beta demand — if yours is missing, you can request it from Settings → Request Airport.'
        },
        {
          question: 'What happens if my flight is delayed, canceled, or the gate changes?',
          answer: 'Cojauny receives real-time flight updates. When your flight changes, everyone in your event gets an instant notification with updated details, and you can adjust the meeting time, update the meeting point, or cancel the event with one tap. Change history stays visible for transparency.'
        },
        {
          question: 'What is the difference between Free and Premium?',
          answer: 'Free lets you manage 1 active flight and 1 event at a time — not a lifetime limit, since you can add another as soon as you finish a trip. Premium unlocks multiple simultaneous flights and events, group chat with all participants, detailed savings and CO₂ stats, recurring events, and priority support, for €4.99/mo or €49/year (17% off).'
        },
        {
          question: 'How much money can I really save using Cojauny?',
          answer: 'Estimated savings are 50-75% on airport transport. For example, a transfer that costs 30-35€ alone drops to around 7.50-9€ per person when shared with three other passengers from the same flight — roughly 22-25€ saved per trip, or 500-600€ a year for someone who flies twice a month.'
        },
        {
          question: 'What happens after I join the beta waitlist?',
          answer: 'You will receive a confirmation email right away, plus a personal invite link you can share to move up the queue. As we open new spots, we will email you with your access details and everything you need to complete your first shared transfer.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Reserve your spot in the Cojauny beta',
        subheading: 'Be among the first to share verified airport rides and lock in founding-member perks.',
        title: 'Request Beta Access',
        description:
          'Priority access, verified profile, founding member badge, and direct support from the team.',
        success:
          'Great, you are on the waitlist. We will notify you by email when the beta is ready.',
        error: 'We could not register your request. Check data or try again in a few minutes.',
        duplicateError:
          'You are already on our waitlist. We will notify you when beta is available.',
        submit: 'Reserve my spot',
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
      title: 'Cojauny | Teile deinen Flughafentransfer mit deinem Flug',
      description:
        'Finde verifizierte Reisende auf deinem Flug, teile dir die Transferkosten und koordiniere alles sicher in der App. Jetzt der Beta beitreten.',
      keywords: [
        'geteilter flughafentransfer',
        'taxi kosten teilen flughafen',
        'flug ride sharing',
        'gleicher flug carpool',
        'flughafen carpool app',
        'flug matching app',
        'verifizierte reiseprofile',
        'vertrauenswürdige reisegemeinschaft',
        'sichere flughafen mobilität',
        'flughafentransfer sparen'
      ],
      ogTitle: 'Cojauny | Teile deine Fahrt zum Flughafen, einfach und verifiziert',
      ogDescription:
        'Finde Mitreisende auf deinem Flug, teile die Transferkosten und reise mit verifizierten, bewerteten Begleitern.',
    },
    hero: {
      eyebrow: 'Beta jetzt offen · Begrenzte Plätze',
      title: 'Teile deinen Flughafentransfer mit Leuten auf deinem Flug',
      subtitle:
        'Finde verifizierte Reisende auf demselben Flug, teile dir die Fahrtkosten und koordiniere alles sicher in der App.',
      primaryCta: 'Meinen Platz sichern',
      secondaryCta: 'Ablauf ansehen',
      imageAlt: 'Cojauny-Oberfläche mit Flug-Matching, geteilten Kosten und verifizierten Profilen',
      trustSignals: [
        'Kosten teilen',
        'Nach Flug gematcht',
        'Verifizierte Reisende',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Teile deinen Flughafentransfer und spare bis zu 75%',
        subtitle:
          'Finde verifizierte Reisende auf deinem Flug und teile die Fahrtkosten — du siehst immer, mit wem du reist, bevor du bestätigst.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Der Cojauny Beta-Warteliste beitreten',
      label: 'Sichere dir frühen Zugang und deinen Platz in der Beta',
      emailPlaceholder: 'ihre@email.de',
      submit: 'Meinen Platz sichern',
      submitting: 'Anfrage wird gesendet…',
      privacyNote:
        'Mit dem Absenden Ihrer E-Mail akzeptieren Sie die Nutzungsbedingungen und Datenschutzrichtlinie von Cojauny.',
      success: 'Du bist dabei! Wir schreiben dir per E-Mail, sobald dein Zugang bereit ist.',
    },
    airportsHubTitle: 'Wichtige Flughäfen',
    airportsHubAll: 'Vollständige Abdeckung ansehen',
    betaReferralBanner:
      'Nach der Registrierung erhalten Sie einen Einladungslink, um Ihren Zugang zu priorisieren.',
    features: {
      title: 'Alles, was du für einen smarten Flughafentransfer brauchst',
      subtitle:
        'Von deinem Match bis zur geteilten Rechnung — jede Funktion macht das Teilen einfach und sicher.',
      items: [
        {
          title: 'Flug-Matching',
          description:
            'Matching erfolgt über Flugnummer und Datum. Keine Zufallstreffer — nur Passagiere auf derselben Strecke.',
          iconName: 'bolt',
        },
        {
          title: 'Automatische Kostenteilung',
          description:
            'Die App berechnet und teilt die Transferkosten für die ganze Gruppe, damit niemand rechnen muss.',
          iconName: 'sparkles',
        },
        {
          title: 'Verifizierte Identität',
          description:
            'Profile mit Dokumentenprüfung und Foto, damit du weißt, mit wem du reist.',
          iconName: 'shield',
        },
        {
          title: 'Koordination in der App',
          description:
            'Chatte mit deiner Gruppe vor dem Flug, um Treffpunkt und Zeit zu klären, ohne deine Nummer zu teilen.',
          iconName: 'chat',
        },
        {
          title: 'Bewertungen & Rezensionen',
          description:
            'Bewertungen von 0 bis 5 Sternen und optionale Kommentare nach jeder Fahrt, sichtbar im öffentlichen Profil vor der Bestätigung.',
          iconName: 'users',
        },
        {
          title: 'Flugalerts in Echtzeit',
          description:
            'Benachrichtigungen bei Zeitplanänderungen, Treffpunkt-Erinnerungen und relevanten Reise-Updates.',
          iconName: 'globe',
        },
      ],
    },
    value: {
      eyebrow: 'Warum Cojauny',
      title: 'Spare bei deinem Flughafentransfer, ohne die Kontrolle abzugeben',
      subtitle:
        'Jede geteilte Fahrt verbindet echte Ersparnis, Komfort und Sicherheit — du entscheidest, mit wem du reist, bevor du bestätigst.',
      items: [
        {
          title: 'Echte Ersparnis',
          description:
            'Teile dir die Kosten für ein Taxi oder einen privaten Transfer mit anderen Passagieren, statt den vollen Preis allein zu zahlen.',
        },
        {
          title: 'Nach Flug gematcht, nicht zufällig',
          description:
            'Reise mit Personen auf demselben Flug und Terminal — nie mit einem zufälligen Fremden von der Straße.',
        },
        {
          title: 'Verifiziert und bewertet',
          description:
            'Identitätsprüfung und öffentliche Bewertungen früherer Fahrten helfen dir, deine Mitreisenden mit Vertrauen auszuwählen.',
        },
        {
          title: 'Alles vorher geklärt',
          description:
            'Treffpunkt, Zeitplan und Kostenaufteilung werden vor der Bestätigung festgelegt, ohne Überraschungen am Reisetag.',
        },
      ],
    },
    savings: {
      title: 'Spare bis zu 75% bei deinem Flughafentransfer',
      caption:
        'Die Fahrt mit verifizierten Reisenden auf deinem Flug zu teilen, ist der einfachste Weg, Kosten zu senken. Auf diese Zahlen arbeiten wir während der Beta hin.',
      metrics: [
        {
          value: '50-75%',
          label: 'Ersparnis pro Fahrt',
          description: 'Durchschnittliche Ersparnis pro Transfer beim Teilen von Taxi oder Privatwagen.'
        },
        {
          value: '180+',
          label: 'Flughäfen',
          description: 'Abdeckung in internationalen Hubs in Europa, Amerika und dem Nahen Osten.',
        },
        {
          value: '50.000+',
          label: 'Geplante Verbindungen',
          description: 'Jahresziel für ein globales Netzwerk mit kritischer Masse auf Hauptstrecken.'
        },
        {
          value: '1.000+ t',
          label: 'CO₂ vermieden',
          description: 'Tonnen Emissionen, die wir im ersten Betriebsjahr vermeiden wollen.'
        }
      ]
    },
    workflow: {
      title: 'Von der Flugnummer zur geteilten Fahrt in 5 Schritten',
      intro: 'Verifiziere dein Profil einmal, dann matche, koordiniere und reise — mit Sicherheit in jedem Schritt.',
      steps: [
        {
          title: '1. Erstelle dein verifiziertes Profil',
          description: 'Registriere dich und schließe die Identitätsprüfung einmalig ab, um die Community freizuschalten.',
        },
        {
          title: '2. Füge deinen Flug hinzu',
          description: 'Gib Flugnummer und Datum an, damit wir passende Reisende finden können.',
        },
        {
          title: '3. Vergleiche deine Optionen',
          description: 'Sieh dir gematchte Profile, Bewertungen und Fahrtbedingungen an, bevor du wählst.',
        },
        {
          title: '4. Kläre die Details',
          description: 'Vereinbare Treffpunkt, Zeit und Kostenaufteilung in einem privaten Chat in der App.',
        },
        {
          title: '5. Reise und bewerte',
          description: 'Schließe die Fahrt ab und bewerte deine Begleiter (0–5 Sterne und optionaler Kommentar), um dem nächsten Reisenden zu helfen.',
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
          title: 'Sieh deine Ersparnis wachsen',
          description:
            'Verfolge, wie viel du bei deinen geteilten Transfers gespart hast, Fahrt für Fahrt.',
          image: '/images/mockups/de/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Bereit, deinen nächsten Flughafentransfer zu teilen?',
      body: 'Tritt der Cojauny-Beta bei: finde Reisende auf deinem Flug, teile die Kosten und reise mit verifizierten, bewerteten Begleitern.',
      link: '#beta',
      linkLabel: 'Meinen Platz sichern'
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
          question: 'Ist es sicher, mit Leuten zu reisen, die ich nicht kenne?',
          answer: 'Ja. Jeder Nutzer verifiziert seine Identität mit Ausweis und Foto, bevor er beitritt, und du kannst das öffentliche Profil jedes Reisenden — Sternebewertungen, Kommentare und Reputationsverlauf — einsehen, bevor du etwas bestätigst. Die Koordination läuft über einen sicheren In-App-Chat, sodass du nie deine Telefonnummer teilen musst. Sensible Daten wie E-Mail, Ausweis und Kontaktdaten bleiben privat und werden nie automatisch geteilt.',
        },
        {
          question: 'Kann ich meine Teilnahme ohne Nachteile stornieren?',
          answer: 'Ja, du hast volle Flexibilität. Du kannst jedes Event jederzeit kostenlos in der App verlassen. Als Organisator erhalten alle Teilnehmer bei einer Stornierung sofort eine Benachrichtigung mit Optionen zur Neuorganisation. Wir empfehlen, so früh wie möglich Bescheid zu geben.'
        },
        {
          question: 'Wie funktioniert die Kostenteilung zwischen Teilnehmern?',
          answer: 'Die App enthält einen automatischen Rechner, der die Transferkosten gleichmäßig aufteilt und der Gruppe die geschätzte Ersparnis vor der Fahrt anzeigt. Cojauny wickelt keine Zahlungen direkt ab, sodass ihr flexibel bleibt: bar, Bizum, Überweisung, PayPal oder geteilte Kartenzahlung.'
        },
        {
          question: 'Welche Art von Events kann ich erstellen oder beitreten?',
          answer: 'Cojauny unterstützt mehrere Kategorien: geteilte Transfers zum Abflughafen, Abholungen vom Ankunftsflughafen, Firmen-Shuttles für Teams, geteilte Privatwagen, geteilte Unterkünfte am Zielort und Aktivitäten nach dem Flug. Premium-Nutzer können individuelle Events für jede Art von geteilter Reise erstellen.'
        },
        {
          question: 'An welchen Flughäfen ist Cojauny verfügbar?',
          answer: 'Wir starten mit Abdeckung an den wichtigsten internationalen Hubs in Europa, Amerika und dem Nahen Osten, darunter Madrid-Barajas, Barcelona-El Prat, London-Heathrow, Paris-Charles de Gaulle und New York-JFK. Wir fügen laufend neue Flughäfen basierend auf der Beta-Nachfrage hinzu — fehlt deiner, kannst du ihn unter Einstellungen → Flughafen anfragen vorschlagen.'
        },
        {
          question: 'Was passiert, wenn mein Flug Verspätung hat, storniert wird oder das Gate wechselt?',
          answer: 'Cojauny erhält Echtzeit-Flugupdates. Ändert sich dein Flug, erhalten alle Teilnehmer deines Events sofort eine Benachrichtigung mit den aktuellen Details, und du kannst die Treffzeit anpassen, den Treffpunkt aktualisieren oder das Event mit einem Tipp stornieren. Der Änderungsverlauf bleibt zur Transparenz sichtbar.'
        },
        {
          question: 'Was ist der Unterschied zwischen Free und Premium?',
          answer: 'Mit Free kannst du 1 aktiven Flug und 1 Event gleichzeitig verwalten — kein Gesamtlimit, denn sobald du eine Fahrt abschließt, kannst du eine weitere hinzufügen. Premium schaltet mehrere gleichzeitige Flüge und Events, vollen Gruppenchat, detaillierte Ersparnis- und CO₂-Statistiken, wiederkehrende Events und Prioritätssupport frei, für 4,99 €/Monat oder 49 €/Jahr (17% Rabatt).'
        },
        {
          question: 'Wie viel Geld kann ich mit Cojauny wirklich sparen?',
          answer: 'Die geschätzte Ersparnis liegt bei 50-75% beim Flughafentransport. Zum Beispiel: Ein Transfer, der allein 30-35€ kostet, sinkt auf etwa 7,50-9€ pro Person, wenn er mit drei weiteren Passagieren desselben Flugs geteilt wird — rund 22-25€ Ersparnis pro Fahrt oder 500-600€ im Jahr bei zwei Flügen pro Monat.'
        },
        {
          question: 'Was passiert, nachdem ich mich auf die Beta-Warteliste gesetzt habe?',
          answer: 'Du erhältst sofort eine Bestätigungs-E-Mail sowie einen persönlichen Einladungslink, den du teilen kannst, um in der Warteschlange aufzusteigen. Sobald wir neue Plätze öffnen, schreiben wir dir mit deinen Zugangsdaten und allem, was du für deinen ersten geteilten Transfer brauchst.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Sichere dir deinen Platz in der Cojauny-Beta',
        subheading: 'Sei einer der Ersten, der verifizierte Flughafenfahrten teilt, und sichere dir Gründervorteile.',
        title: 'Beta-Zugang anfordern',
        description:
          'Prioritätszugang, verifiziertes Profil, Gründer-Badge und direkter Team-Support.',
        success:
          'Du bist dabei! Wir benachrichtigen dich per E-Mail, wenn dein Zugang bereit ist.',
        error: 'Fehler bei der Registrierung. Bitte versuche es erneut.',
        duplicateError:
          'Du bist bereits auf der Liste. Wir melden uns bald.',
        submit: 'Meinen Platz sichern',
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
      title: 'Cojauny | Partagez votre transfert aéroport avec votre vol',
      description:
        'Trouvez des voyageurs de votre vol, partagez le coût du trajet et coordonnez-vous en toute sécurité dans l\'app. Rejoignez la bêta dès aujourd\'hui.',
      keywords: [
        'transfert aéroport partagé',
        'partager taxi aéroport',
        'application voyage aéroport',
        'covoiturage aéroport',
        'voyage partagé même vol',
        'matching par vol',
        'profil vérifié aéroport',
        'communauté voyageurs vérifiée',
        'mobilité aéroportuaire sécurisée',
        'économiser transfert aéroport'
      ],
      ogTitle: 'Cojauny | Partagez votre trajet vers l\'aéroport, simple et vérifié',
      ogDescription:
        'Trouvez des passagers de votre vol, partagez le coût du transfert et voyagez avec des compagnons vérifiés et notés.',
    },
    hero: {
      eyebrow: 'Bêta ouverte · Places limitées',
      title: 'Partagez votre transfert aéroport avec des gens de votre vol',
      subtitle:
        'Trouvez des voyageurs vérifiés sur votre vol, partagez le coût du trajet et coordonnez tout en toute sécurité dans l\'app.',
      primaryCta: 'Réserver ma place',
      secondaryCta: 'Voir le fonctionnement',
      imageAlt: 'Interface Cojauny avec matching par vol, coûts partagés et profils vérifiés',
      trustSignals: [
        'Partagez le coût',
        'Associé par vol',
        'Voyageurs vérifiés',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Partagez votre transfert aéroport et économisez jusqu\'à 75%',
        subtitle:
          'Trouvez des voyageurs vérifiés sur votre vol et partagez le coût du trajet — vous savez toujours avec qui vous voyagez avant de confirmer.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Rejoindre la liste d\'attente de la bêta Cojauny',
      label: 'Obtenez un accès anticipé et réservez votre place dans la bêta',
      emailPlaceholder: 'vous@email.com',
      submit: 'Réserver ma place',
      submitting: 'Envoi de la demande…',
      privacyNote:
        'En soumettant votre e-mail, vous acceptez les conditions d\'utilisation et la politique de confidentialité de Cojauny.',
      success: 'Vous êtes inscrit ! Nous vous écrirons par e-mail dès que votre accès sera prêt.',
    },
    airportsHubTitle: 'Principaux aéroports',
    airportsHubAll: 'Voir la couverture complète',
    betaReferralBanner:
      'Après inscription, vous recevrez un lien d\'invitation à partager avec votre réseau pour prioriser votre accès.',
    features: {
      title: 'Tout ce qu\'il faut pour un transfert aéroport plus malin',
      subtitle:
        'De la recherche de votre groupe au partage de l\'addition : chaque fonctionnalité rend le partage simple et sûr.',
      items: [
        {
          title: 'Matching par vol',
          description:
            'Le matching s\'effectue par numéro de vol et date. Pas de correspondances aléatoires — uniquement des passagers du même itinéraire.',
          iconName: 'bolt',
        },
        {
          title: 'Partage automatique des coûts',
          description:
            'L\'app calcule et répartit le coût du transfert pour tout le groupe, personne n\'a besoin de faire les comptes.',
          iconName: 'sparkles',
        },
        {
          title: 'Identité vérifiée',
          description:
            'Profils avec vérification documentaire et photo, pour que vous sachiez avec qui vous voyagez.',
          iconName: 'shield',
        },
        {
          title: 'Coordination dans l\'app',
          description:
            'Discutez avec votre groupe avant le vol pour convenir du lieu et de l\'heure, sans partager votre numéro.',
          iconName: 'chat',
        },
        {
          title: 'Évaluations et avis',
          description:
            'Évaluations de 0 à 5 étoiles et commentaires optionnels après chaque trajet, visibles sur le profil public avant confirmation.',
          iconName: 'users',
        },
        {
          title: 'Alertes de vol en temps réel',
          description:
            'Notifications sur les changements d\'horaire, rappels de rendez-vous et mises à jour pertinentes du trajet.',
          iconName: 'globe',
        },
      ],
    },
    value: {
      eyebrow: 'Pourquoi Cojauny',
      title: 'Économisez sur vos transferts aéroport sans perdre le contrôle',
      subtitle:
        'Chaque trajet partagé associe économies réelles, confort et sécurité — vous décidez avec qui voyager avant de confirmer.',
      items: [
        {
          title: 'Des économies réelles',
          description:
            'Partagez le coût d\'un taxi ou d\'un transfert privé avec d\'autres passagers plutôt que de payer seul le tarif complet.',
        },
        {
          title: 'Associé par vol, pas au hasard',
          description:
            'Voyagez avec des personnes de votre même vol et terminal — jamais avec un inconnu pris au hasard dans la rue.',
        },
        {
          title: 'Vérifié et noté',
          description:
            'La vérification d\'identité et les évaluations publiques des trajets précédents vous permettent de choisir vos compagnons en toute confiance.',
        },
        {
          title: 'Tout convenu à l\'avance',
          description:
            'Lieu de rendez-vous, horaires et répartition des coûts définis avant de confirmer, sans surprise le jour du voyage.',
        },
      ],
    },
    savings: {
      title: 'Économisez jusqu\'à 75% sur votre transfert aéroport',
      caption:
        'Partager le trajet avec des voyageurs vérifiés de votre vol est le moyen le plus simple de réduire les coûts. Voici les chiffres vers lesquels nous travaillons pendant la bêta.',
      metrics: [
        {
          value: '50-75%',
          label: 'Économies par trajet',
          description: 'Fourchette moyenne d\'économies par transfert en partageant taxi ou VTC.'
        },
        {
          value: '180+',
          label: 'Aéroports',
          description: 'Couverture dans les hubs internationaux d\'Europe, des Amériques et du Moyen-Orient.',
        },
        {
          value: '50 000+',
          label: 'Connexions prévues',
          description: 'Objectif annuel pour un réseau mondial avec masse critique sur les routes clés.'
        },
        {
          value: '1 000+ t',
          label: 'CO₂ évité',
          description: 'Tonnes d\'émissions que nous visons à éviter la première année opérationnelle.'
        }
      ]
    },
    workflow: {
      title: 'Du numéro de vol au trajet partagé en 5 étapes',
      intro: 'Vérifiez votre profil une seule fois, puis trouvez un groupe, coordonnez-vous et voyagez — avec la sécurité intégrée à chaque étape.',
      steps: [
        {
          title: '1. Créez votre profil vérifié',
          description: 'Inscrivez-vous et complétez la vérification d\'identité une fois pour débloquer la communauté.',
        },
        {
          title: '2. Ajoutez votre vol',
          description: 'Indiquez le numéro de vol et la date pour que nous trouvions des voyageurs compatibles.',
        },
        {
          title: '3. Comparez vos options',
          description: 'Consultez les profils associés, leurs évaluations et les conditions du trajet avant de choisir.',
        },
        {
          title: '4. Réglez les détails',
          description: 'Convenez du lieu de rendez-vous, de l\'horaire et de la répartition des coûts dans un chat privé de l\'app.',
        },
        {
          title: '5. Voyagez et évaluez',
          description: 'Terminez le trajet et évaluez vos compagnons (0 à 5 étoiles et commentaire optionnel) pour aider le prochain voyageur à décider.',
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
          title: 'Regardez vos économies grandir',
          description:
            'Suivez combien vous avez économisé sur vos transferts partagés, trajet après trajet.',
          image: '/images/mockups/fr/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Prêt à partager votre prochain trajet aéroport ?',
      body: 'Rejoignez la bêta Cojauny : trouvez des voyageurs de votre vol, partagez le coût et voyagez avec des compagnons vérifiés et notés.',
      link: '#beta',
      linkLabel: 'Réserver ma place'
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
          question: 'Est-ce sûr de voyager avec des gens que je ne connais pas ?',
          answer: 'Oui. Chaque utilisateur vérifie son identité avec une pièce d\'identité et une photo avant de rejoindre, et vous pouvez consulter le profil public de chaque voyageur — évaluations par étoiles, commentaires et historique de réputation — avant de confirmer quoi que ce soit. La coordination se fait dans un chat sécurisé de l\'app, vous n\'avez donc jamais à partager votre numéro. Les données sensibles comme l\'e-mail, la pièce d\'identité et les coordonnées restent privées et ne sont jamais partagées automatiquement.',
        },
        {
          question: 'Puis-je annuler ma participation sans pénalité ?',
          answer: 'Oui, vous avez une flexibilité totale. Vous pouvez quitter n\'importe quel événement directement depuis l\'app, sans frais. Si vous êtes organisateur, en cas d\'annulation, tous les participants reçoivent une notification instantanée avec des options pour se réorganiser. Nous recommandons de prévenir le plus tôt possible.'
        },
        {
          question: 'Comment fonctionne le partage des coûts entre participants ?',
          answer: 'L\'app inclut un calculateur automatique qui répartit le coût du transfert à parts égales et montre au groupe les économies estimées avant le trajet. Cojauny ne traite pas les paiements directement, vous gardez donc de la flexibilité pour régler comme vous le souhaitez : espèces, virement, PayPal ou paiement par carte partagé.'
        },
        {
          question: 'Quels types d\'événements puis-je créer ou rejoindre ?',
          answer: 'Cojauny prend en charge plusieurs catégories : transferts partagés vers l\'aéroport de départ, prises en charge à l\'arrivée, services de navette d\'entreprise, voitures privées partagées, hébergement partagé à destination et activités sociales après le vol. Les utilisateurs Premium peuvent créer des événements personnalisés pour tout type de voyage partagé.'
        },
        {
          question: 'Dans quels aéroports Cojauny est-il disponible ?',
          answer: 'Nous lançons avec une couverture des principaux hubs internationaux d\'Europe, des Amériques et du Moyen-Orient, notamment Madrid-Barajas, Barcelone-El Prat, Londres-Heathrow, Paris-Charles de Gaulle et New York-JFK. Nous ajoutons de nouveaux aéroports selon la demande de la bêta — si le vôtre manque, vous pouvez le demander depuis Paramètres → Demander un aéroport.'
        },
        {
          question: 'Que se passe-t-il si mon vol est retardé, annulé ou change de porte ?',
          answer: 'Cojauny reçoit des mises à jour de vol en temps réel. Lorsque votre vol change, tous les participants de votre événement reçoivent une notification instantanée avec les détails mis à jour, et vous pouvez ajuster l\'heure de rendez-vous, mettre à jour le lieu ou annuler l\'événement en un geste. L\'historique des changements reste visible pour la transparence.'
        },
        {
          question: 'Quelle est la différence entre Free et Premium ?',
          answer: 'Free vous permet de gérer 1 vol et 1 événement actifs à la fois — ce n\'est pas une limite totale, puisque vous pouvez en ajouter un autre dès que vous terminez un trajet. Premium débloque plusieurs vols et événements simultanés, le chat de groupe complet, des statistiques détaillées d\'économies et de CO₂, des événements récurrents et un support prioritaire, pour 4,99 €/mois ou 49 €/an (17% de réduction).'
        },
        {
          question: 'Combien puis-je vraiment économiser avec Cojauny ?',
          answer: 'Les économies estimées sont de 50 à 75% sur le transport aéroportuaire. Par exemple, un transfert qui coûte 30-35€ seul revient à environ 7,50-9€ par personne en le partageant avec trois autres passagers du même vol — soit environ 22-25€ économisés par trajet, ou 500-600€ par an pour deux vols par mois.'
        },
        {
          question: 'Que se passe-t-il après mon inscription sur la liste d\'attente de la bêta ?',
          answer: 'Vous recevrez immédiatement un e-mail de confirmation, ainsi qu\'un lien d\'invitation personnel à partager pour avancer dans la file d\'attente. Dès que nous ouvrirons de nouvelles places, nous vous écrirons avec les détails de votre accès et tout ce qu\'il faut pour réaliser votre premier transfert partagé.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Réservez votre place dans la bêta Cojauny',
        subheading: 'Soyez parmi les premiers à partager des trajets aéroport vérifiés et obtenez des avantages de membre fondateur.',
        title: 'Demander l\'accès Bêta',
        description:
          'Accès prioritaire, profil vérifié, badge fondateur et support direct de l\'équipe.',
        success:
          'Vous êtes inscrit ! Nous vous informerons par e-mail dès que votre accès sera prêt.',
        error: 'Erreur lors de l\'inscription. Veuillez réessayer.',
        duplicateError:
          'Vous êtes déjà sur la liste. Nous vous contactons bientôt.',
        submit: 'Réserver ma place',
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


