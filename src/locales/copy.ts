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
  heroQuickSignup: {
    ariaLabel: string;
    label: string;
    urgencyBadge?: string;
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
        'Cojauny te conecta automáticamente con pasajeros de tu vuelo para compartir taxi, van o coche privado. Gratis para unirte, fácil de coordinar, y cada perfil está verificado antes de compartir trayecto.',
      primaryCta: 'Reservar mi plaza',
      secondaryCta: 'Cómo funciona',
      imageAlt: 'App Cojauny mostrando matching de vuelo y ahorro compartido'
    },
    heroQuickSignup: {
      ariaLabel: 'Registro rápido en la lista de espera beta',
      label: 'Reserva tu plaza — solo nombre y email',
      urgencyBadge: '🎟️ Los socios fundadores tienen 50% de descuento el primer año',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      submit: 'Reservar mi plaza',
      submitting: 'Enviando…',
      privacyNote: 'Acepto los términos y la política de privacidad de Cojauny para solicitar acceso beta.',
      success: '¡Listo! Te avisaremos por email cuando tu acceso esté disponible.'
    },
    features: {
      title: 'Todo lo que necesitas para compartir trayecto con confianza',
      subtitle:
        'Matching automático de vuelos, eventos con cupos, chat en tiempo real y perfiles verificados: las herramientas clave para compartir trayecto con desconocidos, sin complicaciones.',
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
          title: 'Chat en Tiempo Real',
          description:
            'Comunícate con el organizador o el grupo en un canal cifrado que se activa antes del vuelo y desaparece 48h después.',
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
        }
      ]
    },
    value: {
      title: 'Por qué elegir Cojauny',
      subtitle:
        'Resolvemos el coste excesivo del transporte individual, el caos de coordinar por chat y la duda de no saber con quién compartes trayecto.',
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
            'Agenda integrada y avisos automáticos. Vuelo, chat, pagos y detalles del traslado en un solo lugar, sin necesidad de cientos de mensajes.'
        }
      ]
    },
    savings: {
      title: 'Nuestros objetivos para la comunidad Cojauny',
      caption: 'Metas ambiciosas para nuestro lanzamiento en beta — únete ahora y sé de los primeros en lograrlo.',
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
          description: 'Usa el chat del grupo para ultimar detalles. Se sincroniza al aterrizar.'
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
      heading: '¿Listo para ahorrar en tu próximo vuelo?',
      body: 'Los socios fundadores consiguen 50% de descuento el primer año, onboarding personalizado y una insignia que demuestra que llegaste primero. Beta limitada a 5.000 viajeros — reserva tu plaza abajo.',
      link: '#beta',
      linkLabel: 'Reservar mi plaza'
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
          answer: 'Introduce tu número de vuelo y fecha. Cruzamos datos con una base global en tiempo real y te mostramos viajeros en tu mismo vuelo o con horarios compatibles en el mismo aeropuerto.'
        },
        {
          question: '¿Es seguro viajar con desconocidos?',
          answer: 'Sí. Verificamos la identidad de cada usuario con documento y foto antes de unirse, y puedes ver valoraciones e historial de viajes antes de compartir trayecto. La moderación automática detecta comportamientos sospechosos, y tus datos personales se mantienen cifrados y privados bajo RGPD — nunca los vendemos, y puedes descargarlos o eliminarlos cuando quieras.'
        },
        {
          question: '¿Puedo cancelar mi asistencia?',
          answer: 'Sí, con total flexibilidad. Puedes salir de un evento desde la app sin coste. Si eres organizador, avisa con tiempo para que el grupo pueda reorganizarse.'
        },
        {
          question: '¿Qué diferencia hay entre Free y Premium?',
          answer: 'Free te permite gestionar 1 vuelo y 1 evento activos a la vez, con chat al organizador, sin límite de viajes totales. Premium (4,99€/mes o 49€/año, 17% de descuento) desbloquea vuelos y eventos simultáneos ilimitados, chat grupal completo, estadísticas avanzadas y soporte prioritario.'
        },
        {
          question: '¿Cómo se paga el transporte?',
          answer: 'Cojauny no procesa el pago del trayecto, así que tienes total flexibilidad: efectivo, Bizum, transferencia o tarjeta compartida, lo que prefiera el grupo. La app calcula el reparto justo automáticamente.'
        },
        {
          question: '¿En qué aeropuertos funciona?',
          answer: 'Cubrimos más de 120 aeropuertos en Europa, América, Asia y Oceanía. Si el tuyo no está, puedes solicitarlo y lo priorizaremos según la demanda.'
        },
        {
          question: '¿Cuánto puedo ahorrar?',
          answer: 'De media, entre un 50-75% por traslado. Por ejemplo, un taxi de Madrid centro al T4 cuesta unos 30-35€ solo — compartido con 3 pasajeros más de tu vuelo, tu parte baja a 7,50-9€.'
        },
        {
          question: '¿Qué pasa después de unirme a la lista de espera beta?',
          answer: 'Recibirás un email de confirmación al instante y te avisaremos en cuanto tu acceso esté listo. Los registros tempranos mantienen el 50% de descuento el primer año, la insignia de socio fundador y un onboarding prioritario, además de un enlace de invitación que te hace subir en la lista si lo compartes.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Únete a la revolución del viaje compartido',
        subheading: 'Acceso anticipado para early adopters. Tarifas exclusivas y contacto directo con el equipo.',
        title: 'Solicita acceso beta',
        description:
          '🌟 Acceso Prioritario · 💰 50% Descuento el Primer Año · 🏆 Insignia de Fundador',
        success:
          '¡Estás dentro! Te avisaremos por email cuando tu acceso esté listo.',
        error: 'Hubo un error al registrar tu solicitud. Por favor, inténtalo de nuevo.',
        duplicateError:
          'Ya estás en nuestra lista. Te avisaremos pronto.',
        submit: 'Reservar mi plaza',
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
        'Cojauny automatically matches you with travelers on your flight to split a taxi, van, or private car. Free to join, easy to coordinate, and every profile is verified before you share a ride.',
      primaryCta: 'Reserve my spot',
      secondaryCta: 'See how it works',
      imageAlt: 'Cojauny App showing flight matching and shared savings'
    },
    heroQuickSignup: {
      ariaLabel: 'Quick beta waitlist signup',
      label: 'Reserve your spot — just name and email',
      urgencyBadge: '🎟️ Founding members get 50% off year one',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      submit: 'Reserve my spot',
      submitting: 'Sending…',
      privacyNote: 'I accept Cojauny\'s terms and privacy policy to request beta access.',
      success: 'You\'re in! We\'ll email you as soon as your access is ready.'
    },
    features: {
      title: 'Everything you need to share a ride with confidence',
      subtitle:
        'Automatic flight matching, capacity-controlled events, real-time chat, and verified profiles — the core tools that make sharing a ride with strangers simple.',
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
            'Every member verifies their identity and has a visible reputation, so you know who you are sharing the ride with before accepting.',
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
        }
      ]
    },
    value: {
      title: 'Why smart travelers choose Cojauny',
      subtitle:
        'One app to solve the 3 things that make airport transport painful: high solo-ride costs, chaotic group-chat coordination, and not knowing who you are sharing a ride with.',
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
            'One thread for your flight, meeting point, payments, and contacts. Cojauny notifies everyone when the driver arrives or the gate changes.'
        }
      ]
    },
    savings: {
      title: 'Our goals for the Cojauny community',
      caption: 'Ambitious targets for our beta launch — join now and help us get there first.',
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
          title: '4. Coordinate in Chat',
          description: 'Share locations, license plates, and rates from a single thread with optional auto-translation.'
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
      heading: 'Ready to save on your next flight?',
      body: 'Founding members get 50% off their first year, personalized onboarding, and a badge that shows you were here first. Beta access is limited to 5,000 travelers — reserve your spot below.',
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
          answer: 'Enter your flight number and date. Our platform checks a global flight database in real time and connects you with other travelers on the same flight, or on compatible flights at the same airport and time, so schedules and terminals line up automatically.'
        },
        {
          question: 'Is it safe to share transport with strangers?',
          answer: 'Yes. Every user verifies their identity with photo ID before joining, and you can see ratings and past trip history before you commit to sharing a ride. Automatic moderation flags suspicious behavior in real time, and your personal data (email, phone, ID) stays encrypted and private under GDPR — we never sell it, and you can download or delete it anytime.'
        },
        {
          question: 'Can I cancel my participation without penalty?',
          answer: 'Yes, with total flexibility. You can leave any event directly from the app at no cost. If you organize the event, everyone gets an instant notification so the group can reorganize. We recommend canceling as early as possible out of courtesy to the rest of the group.'
        },
        {
          question: 'What is the difference between Free and Premium?',
          answer: 'Free lets you manage 1 active flight and 1 event at a time, with chat to the organizer — no limit on total trips over time. Premium (€4.99/mo or €49/yr, 17% off) unlocks unlimited simultaneous flights and events, group chat with everyone, detailed savings/CO₂ stats, recurring events, and priority support.'
        },
        {
          question: 'How do payments work between participants?',
          answer: 'Cojauny doesn\'t process the ride payment itself, so you stay flexible: cash, Bizum, bank transfer, PayPal, or a split card payment, whatever your group prefers. The app calculates the fair split automatically and saves your savings to your profile.'
        },
        {
          question: 'Which airports is Cojauny available in?',
          answer: 'We currently cover 120+ major airports across Europe, the Americas, Asia, and Oceania, including hubs like Madrid, Barcelona, London Heathrow, Paris CDG, and New York JFK. Don\'t see yours? Request it from Settings → Request Airport and we\'ll prioritize it based on demand.'
        },
        {
          question: 'How much money can I really save using Cojauny?',
          answer: 'On average, 50-75% per transfer. For example, a taxi from central Madrid to Airport T4 costs about 30-35€ solo — shared with 3 other passengers from your flight, your share drops to 7.50-9€. Frequent flyers taking 2 trips a month typically save 500-600€ a year.'
        },
        {
          question: 'What happens after I join the beta waitlist?',
          answer: 'You\'ll get a confirmation email right away, and we\'ll notify you the moment your access is ready — no need to check back. Early sign-ups keep the 50% first-year discount, the founding-member badge, and priority onboarding, and you\'ll get a referral link that moves you up the list if you share it.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Join the shared travel revolution',
        subheading: 'Get early access to Cojauny and be part of the early adopter community. Exclusive rates, priority support, and direct line to product team.',
        title: 'Request Beta Access',
        description:
          '🌟 Early Access · 💰 50% Off Your First Year · 🏆 Founding Member Badge',
        success:
          'Great, you are on the waitlist. We will notify you by email when the beta is ready.',
        error: 'We could not register your request. Check data or try again in a few minutes.',
        duplicateError:
          'You are already on our waitlist. We will notify you when beta is available.',
        submit: 'Reserve My Spot',
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
      impact: 'Wirkung',
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
        'Cojauny verbindet dich automatisch mit Reisenden desselben Fluges, um Taxi, Van oder Privatwagen zu teilen. Kostenlos zum Start, einfach zu koordinieren, und jedes Profil ist verifiziert, bevor ihr euch eine Fahrt teilt.',
      primaryCta: 'Meinen Platz sichern',
      secondaryCta: 'So funktioniert\'s',
      imageAlt: 'Cojauny App zeigt Flug-Matching und geteilte Ersparnisse'
    },
    heroQuickSignup: {
      ariaLabel: 'Schnelle Beta-Wartelisten-Anmeldung',
      label: 'Sichere dir deinen Platz — nur Name und E-Mail',
      urgencyBadge: '🎟️ Gründungsmitglieder erhalten 50% Rabatt im ersten Jahr',
      namePlaceholder: 'Dein Name',
      emailPlaceholder: 'du@email.de',
      submit: 'Meinen Platz sichern',
      submitting: 'Wird gesendet…',
      privacyNote: 'Ich akzeptiere die AGB und Datenschutzrichtlinie von Cojauny für den Beta-Zugang.',
      success: 'Geschafft! Wir benachrichtigen dich per E-Mail, sobald dein Zugang bereit ist.'
    },
    features: {
      title: 'Alles, um Fahrten mit Vertrauen zu teilen',
      subtitle:
        'Smartes Flug-Matching, Events mit Plätzen, Echtzeit-Chat und verifizierte Profile — die Kernfunktionen, die das Teilen einer Fahrt mit Fremden einfach machen.',
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
          title: 'Echtzeit-Chat',
          description:
            'Kommuniziere mit dem Organisator oder der Gruppe in einem verschlüsselten Kanal, der vor dem Flug aktiviert wird und nach 48h verschwindet.',
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
        }
      ]
    },
    value: {
      title: 'Warum Cojauny',
      subtitle:
        'Wir lösen das Problem teurer Einzeltransfers, chaotischer Chat-Abstimmung und der Unsicherheit, mit wem du eigentlich fährst.',
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
            'Integrierte Agenda und Auto-Alerts. Flug, Chat, Zahlungen und Transferdetails an einem Ort, ohne hunderte Nachrichten.'
        }
      ]
    },
    savings: {
      title: 'Unsere Ziele für die Cojauny-Community',
      caption: 'Ambitionierte Ziele für unseren Beta-Start — steig jetzt ein und hilf uns, sie als Erste zu erreichen.',
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
          description: 'Nutze den Gruppen-Chat für Details. Er synchronisiert sich bei Landung.'
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
      heading: 'Bereit, bei deinem nächsten Flug zu sparen?',
      body: 'Gründungsmitglieder erhalten 50% Rabatt im ersten Jahr, persönliches Onboarding und ein Badge, das zeigt, dass du von Anfang an dabei warst. Beta-Zugang ist auf 5.000 Reisende begrenzt — sichere dir unten deinen Platz.',
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
          answer: 'Gib Flugnummer und Datum ein. Wir gleichen das in Echtzeit mit einer globalen Flugdatenbank ab und zeigen dir Reisende auf deinem Flug oder mit passenden Zeiten am selben Flughafen.'
        },
        {
          question: 'Ist es sicher, mit Fremden zu reisen?',
          answer: 'Ja. Jeder Nutzer verifiziert seine Identität mit Ausweis und Foto, bevor er beitritt, und du kannst Bewertungen und die Reisehistorie einsehen, bevor du dich entscheidest. Automatische Moderation erkennt verdächtiges Verhalten in Echtzeit, und deine persönlichen Daten bleiben verschlüsselt und privat nach DSGVO — wir verkaufen sie nie, und du kannst sie jederzeit löschen.'
        },
        {
          question: 'Kann ich meine Teilnahme stornieren?',
          answer: 'Ja, mit voller Flexibilität. Du kannst ein Event jederzeit kostenlos in der App verlassen. Als Organisator bitte frühzeitig Bescheid geben, damit sich die Gruppe reorganisieren kann.'
        },
        {
          question: 'Was ist der Unterschied zwischen Free und Premium?',
          answer: 'Free verwaltet 1 aktiven Flug und 1 Event gleichzeitig, mit Chat zum Organisator — ohne Limit für die Gesamtzahl deiner Reisen. Premium (4,99€/Monat oder 49€/Jahr, 17% Rabatt) schaltet unbegrenzte gleichzeitige Flüge und Events, vollen Gruppenchat, erweiterte Statistiken und Prio-Support frei.'
        },
        {
          question: 'Wie wird der Transport bezahlt?',
          answer: 'Cojauny wickelt die Fahrtzahlung nicht selbst ab, damit du flexibel bleibst: Bar, Apps oder geteilte Kartenzahlung, wie es die Gruppe bevorzugt. Die App berechnet den fairen Split automatisch.'
        },
        {
          question: 'Welche Flughäfen werden unterstützt?',
          answer: 'Wir decken 120+ Flughäfen in Europa, Amerika, Asien und Ozeanien ab. Ist deiner nicht dabei, kannst du ihn anfragen und wir priorisieren ihn nach Nachfrage.'
        },
        {
          question: 'Wie viel kann ich sparen?',
          answer: 'Im Schnitt 50-75% pro Transfer. Beispiel: Ein Taxi von der Berliner Innenstadt zum BER kostet allein etwa 30-35€ — geteilt mit 3 weiteren Passagieren deines Fluges sinkt dein Anteil auf 7,50-9€.'
        },
        {
          question: 'Was passiert, nachdem ich der Warteliste beitrete?',
          answer: 'Du erhältst sofort eine Bestätigungs-E-Mail, und wir benachrichtigen dich, sobald dein Zugang bereit ist. Frühe Anmeldungen behalten den 50%-Rabatt im ersten Jahr, das Gründer-Badge und bevorzugtes Onboarding, plus einen Empfehlungslink, der dich in der Liste nach oben bringt, wenn du ihn teilst.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Werde Teil der Reise-Revolution',
        subheading: 'Früher Zugang für Early Adopters. Exklusive Raten und direkter Draht zum Team.',
        title: 'Beta-Zugang anfordern',
        description:
          '🌟 Prio-Zugang · 💰 50% Rabatt im ersten Jahr · 🏆 Gründer-Badge',
        success:
          'Du bist dabei! Wir benachrichtigen dich per E-Mail, wenn dein Zugang bereit ist.',
        error: 'Fehler bei der Registrierung. Bitte versuche es erneut.',
        duplicateError:
          'Du bist bereits auf der Liste. Wir melden uns bald.',
        submit: 'Meinen Platz sichern',
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
        'Cojauny vous connecte automatiquement avec des voyageurs du même vol pour partager taxi, van ou VTC. Gratuit pour commencer, facile à coordonner, et chaque profil est vérifié avant de partager un trajet.',
      primaryCta: 'Réserver ma place',
      secondaryCta: 'Comment ça marche',
      imageAlt: 'Interface Cojauny montrant le matching de vol et les économies'
    },
    heroQuickSignup: {
      ariaLabel: 'Inscription rapide à la liste d\'attente bêta',
      label: 'Réservez votre place — nom et e-mail uniquement',
      urgencyBadge: '🎟️ Les membres fondateurs bénéficient de 50% de réduction la première année',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'vous@email.com',
      submit: 'Réserver ma place',
      submitting: 'Envoi…',
      privacyNote: 'J\'accepte les conditions et la politique de confidentialité de Cojauny pour demander l\'accès bêta.',
      success: 'C\'est fait ! Nous vous préviendrons par e-mail dès que votre accès sera prêt.'
    },
    features: {
      title: 'Tout pour partager un trajet en toute confiance',
      subtitle:
        'Matching automatique de vols, événements avec places, chat en temps réel et profils vérifiés — les outils essentiels pour partager un trajet avec des inconnus, sans complications.',
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
          title: 'Chat en Temps Réel',
          description:
            'Communiquez avec l\'organisateur ou le groupe via un canal chiffré qui s\'active avant le vol et disparaît après 48h.',
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
        }
      ]
    },
    value: {
      title: 'Pourquoi choisir Cojauny',
      subtitle:
        'Nous résolvons le coût élevé des transferts individuels, le chaos de la coordination par chat, et l\'incertitude de ne pas savoir avec qui vous voyagez.',
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
            'Agenda intégré et alertes auto. Vol, chat, paiements et détails du transfert au même endroit, sans des centaines de messages.'
        }
      ]
    },
    savings: {
      title: 'Nos objectifs pour la communauté Cojauny',
      caption: 'Des objectifs ambitieux pour notre lancement en bêta — rejoignez-nous maintenant et aidez-nous à les atteindre en premier.',
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
          description: 'Utilisez le chat du groupe pour les détails. Il se synchronise à l\'atterrissage.'
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
      heading: 'Prêt à économiser sur votre prochain vol ?',
      body: 'Les membres fondateurs bénéficient de 50% de réduction la première année, d\'un onboarding personnalisé et d\'un badge qui montre que vous étiez là depuis le début. L\'accès bêta est limité à 5 000 voyageurs — réservez votre place ci-dessous.',
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
          answer: 'Entrez votre numéro de vol et la date. Nous croisons cela en temps réel avec une base de données mondiale et vous montrons les voyageurs sur votre vol ou avec des horaires compatibles au même aéroport.'
        },
        {
          question: 'Est-ce sûr de voyager avec des inconnus ?',
          answer: 'Oui. Chaque utilisateur vérifie son identité avec une pièce d\'identité et une photo avant de rejoindre, et vous pouvez consulter les évaluations et l\'historique de voyage avant de vous engager. La modération automatique détecte les comportements suspects, et vos données personnelles restent chiffrées et privées sous le RGPD — nous ne les vendons jamais, et vous pouvez les supprimer à tout moment.'
        },
        {
          question: 'Puis-je annuler ma participation ?',
          answer: 'Oui, en toute flexibilité. Vous pouvez quitter un événement dans l\'app sans frais. En tant qu\'organisateur, prévenez tôt pour que le groupe puisse se réorganiser.'
        },
        {
          question: 'Quelle est la différence entre Free et Premium ?',
          answer: 'Free gère 1 vol et 1 événement actifs à la fois, avec chat à l\'organisateur — sans limite sur le nombre total de vos voyages. Premium (4,99€/mois ou 49€/an, 17% de réduction) débloque des vols et événements simultanés illimités, le chat de groupe complet, des statistiques avancées et un support prioritaire.'
        },
        {
          question: 'Comment payer le transport ?',
          answer: 'Cojauny ne gère pas le paiement du trajet lui-même, vous restez donc flexible : espèces, applications ou carte partagée, selon la préférence du groupe. L\'app calcule automatiquement le partage équitable.'
        },
        {
          question: 'Quels aéroports sont supportés ?',
          answer: 'Nous couvrons plus de 120 aéroports en Europe, Amérique, Asie et Océanie. Si le vôtre manque, demandez-le et nous le prioriserons selon la demande.'
        },
        {
          question: 'Combien puis-je économiser ?',
          answer: 'En moyenne 50-75% par transfert. Exemple : un taxi du centre de Paris à l\'aéroport CDG coûte environ 55-60€ seul — partagé avec 3 autres passagers de votre vol, votre part descend à 14-15€.'
        },
        {
          question: 'Que se passe-t-il après mon inscription sur liste d\'attente ?',
          answer: 'Vous recevrez immédiatement un e-mail de confirmation, et nous vous préviendrons dès que votre accès sera prêt. Les inscriptions anticipées conservent la réduction de 50% la première année, le badge de membre fondateur et un onboarding prioritaire, ainsi qu\'un lien de parrainage qui vous fait monter dans la liste si vous le partagez.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Rejoignez la révolution du voyage',
        subheading: 'Accès anticipé pour les Early Adopters. Tarifs exclusifs et lien direct avec l\'équipe.',
        title: 'Demander l\'accès Bêta',
        description:
          '🌟 Accès Prioritaire · 💰 50% de Réduction la Première Année · 🏆 Badge Fondateur',
        success:
          'Vous êtes inscrit ! Nous vous informerons par e-mail dès que votre accès sera prêt.',
        error: 'Erreur lors de l\'inscription. Veuillez réessayer.',
        duplicateError:
          'Vous êtes déjà sur la liste. Nous vous contactons bientôt.',
        submit: 'Réserver ma place',
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


