import type { Locale } from './config';
import { defaultLocale } from './config';

export type IconName = 'bolt' | 'users' | 'chat' | 'shield' | 'sparkles' | 'globe' | 'lock' | 'flag' | 'pin';

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
      beta: 'Acceso beta',
      contact: 'Contacto',
      blog: 'Blog',
      benefits: 'Ventajas',
      impact: 'Ahorro',
      workflow: 'Cómo funciona',
      faq: 'Preguntas',
      feedback: 'Feedback'
    },
    seo: {
      title: 'Cojauny | Comparte tu traslado al aeropuerto con gente de tu vuelo',
      description:
        'Encuentra a otros viajeros de tu vuelo, comparte el taxi y sabe siempre con quién viajas. Únete a la beta hoy.',
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
      ogTitle: 'Cojauny | Comparte tu traslado al aeropuerto',
      ogDescription:
        'Encuentra viajeros de tu vuelo, reparte el coste del taxi y viaja con compañeros verificados.',
    },
    hero: {
      eyebrow: 'Beta abierta · Quedan pocas plazas',
      title: 'Comparte tu traslado al aeropuerto con gente de tu vuelo',
      subtitle:
        'Cojauny te empareja por número de vuelo, así compartes taxi o furgoneta con viajeros verificados que van a lo mismo — y sabes siempre con quién vas.',
      primaryCta: 'Reservar mi plaza',
      secondaryCta: 'Ver cómo funciona',
      imageAlt: 'Interfaz de Cojauny mostrando el matching por vuelo, el coste compartido y los perfiles verificados',
      trustSignals: [
        'Reparte el coste',
        'Emparejado por vuelo',
        'Viajeros verificados',
        'Tu nombre real, en privado',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Ahorra hasta un 75% en tu próximo traslado',
        subtitle:
          'Empareja con viajeros verificados de tu vuelo y reparte el coste del trayecto — siempre sabes con quién viajas antes de decir que sí.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Unirme a la beta de Cojauny',
      label: 'Consigue acceso anticipado — quedan pocas plazas',
      emailPlaceholder: 'tu@email.com',
      submit: 'Reservar mi plaza',
      submitting: 'Enviando…',
      privacyNote:
        'Al unirte, aceptas nuestros términos y política de privacidad. Nunca te enviaremos spam.',
      success: '¡Ya estás dentro! Te escribiremos en cuanto se abra tu plaza.',
    },
    airportsHubTitle: 'Aeropuertos destacados',
    airportsHubAll: 'Ver todos los aeropuertos',
    betaReferralBanner:
      'En cuanto entres, te daremos un enlace de invitación personal — compártelo para subir puestos en la lista.',
    features: {
      title: 'Todo lo que necesitas para compartir viaje con confianza',
      subtitle:
        'Desde encontrar con quién ir hasta repartir la cuenta: cada función está pensada para que compartir sea fácil y seguro.',
      items: [
        {
          title: 'Emparejado por vuelo, no por suerte',
          description:
            'Te emparejamos por número de vuelo y fecha, así siempre viajas con gente de tu mismo trayecto, nunca con desconocidos al azar.',
          iconName: 'bolt',
        },
        {
          title: 'Reparte el coste sin esfuerzo',
          description:
            'La app calcula lo que le toca pagar a cada uno, así nadie tiene que sacar la calculadora.',
          iconName: 'sparkles',
        },
        {
          title: 'Tu nombre real, siempre en privado',
          description:
            'El resto de viajeros solo ve tu alias y tu valoración — nunca tu nombre real, tu teléfono ni tus documentos.',
          iconName: 'lock',
        },
        {
          title: 'Verificado antes de emparejar',
          description:
            'Cada viajero confirma su email, y puede añadir verificación por teléfono también, así siempre sabes con quién hablas.',
          iconName: 'shield',
        },
        {
          title: 'Valoraciones de viajes reales',
          description:
            'Cada valoración y comentario viene de un vuelo que esa persona compartió de verdad contigo — nunca son inventados.',
          iconName: 'users',
        },
        {
          title: 'Denuncia o bloquea al momento',
          description:
            'Si algo no te cuadra, puedes denunciar o bloquear a otro viajero al instante, sin dar explicaciones.',
          iconName: 'flag',
        },
        {
          title: 'Habla antes de veros, incluso en el aire',
          description:
            'Coordina el punto de encuentro desde antes de embarcar, sigue hablando durante el vuelo sin conexión, y todo se sincroniza al aterrizar.',
          iconName: 'chat',
        },
        {
          title: 'Encontraos al llegar',
          description:
            'Abre la app en cuanto aterrices y queda con tus compañeros de viaje en la puerta con un solo toque.',
          iconName: 'pin',
        },
        {
          title: '¿Vuelves a tu ciudad? Consigue la insignia de local',
          description:
            'Si vuelves a tu propia ciudad, te marcamos como local — útil para los viajeros que quieran algún consejo para llegar.',
          iconName: 'globe',
        },
      ],
    },
    value: {
      eyebrow: 'Por qué la gente se apunta',
      title: 'Un viaje, tres buenas razones',
      subtitle:
        'Cojauny junta ahorro real, comodidad real y tranquilidad real — tú siempre eliges con quién viajas.',
      items: [
        {
          title: 'Ahorras de verdad',
          description:
            'Compartir un taxi o traslado con otros pasajeros cuesta mucho menos que ir solo.',
        },
        {
          title: 'Emparejado por vuelo, nunca al azar',
          description:
            'Solo viajas con gente de tu mismo vuelo y terminal — nunca con un desconocido cualquiera de la calle.',
        },
        {
          title: 'Verificado y valorado',
          description:
            'Cada perfil verifica su identidad y puedes ver sus valoraciones antes de aceptar nada — su nombre real solo lo conoce Cojauny, nunca tú.',
        },
        {
          title: 'Sin sorpresas el día del viaje',
          description:
            'Punto de encuentro, hora y reparto del coste, todo acordado en la app antes de salir de casa.',
        },
      ],
    },
    savings: {
      title: 'Ahorra hasta un 75% en tu próximo traslado',
      caption:
        'Compartir trayecto con viajeros verificados de tu vuelo es la forma más fácil de pagar menos. Estas son las cifras hacia las que trabajamos durante la beta.',
      metrics: [
        {
          value: '50-75%',
          label: 'Ahorro por trayecto',
          description: 'Lo que puedes ahorrar compartiendo taxi o traslado en lugar de ir solo.',
        },
        {
          value: '180+',
          label: 'Aeropuertos',
          description: 'Cubrimos los principales aeropuertos de Europa, América y Oriente Medio.',
        },
        {
          value: '50.000+',
          label: 'Viajeros esperados',
          description: 'Nuestro objetivo para tener gente suficiente y encontrar match en rutas con mucho tráfico.',
        },
        {
          value: '1.000+ t',
          label: 'CO₂ evitado',
          description: 'El impacto estimado de llenar más coches en lugar de ir cada uno por su lado.',
        },
      ],
    },
    workflow: {
      title: 'Del número de vuelo al viaje compartido en 5 pasos',
      intro: 'Verifica tu perfil una sola vez — luego solo tienes que emparejar, hablar y viajar, con algún control de seguridad de por medio.',
      steps: [
        {
          title: '1. Crea tu perfil',
          description: 'Regístrate y verifica tu identidad una vez. Ya está, ya puedes empezar a buscar viaje.',
        },
        {
          title: '2. Añade tu vuelo',
          description: 'Indica tu número de vuelo y fecha: creamos al momento un grupo y un chat solo para tu viaje.',
        },
        {
          title: '3. Elige con quién ir',
          description: 'Compara perfiles y valoraciones, y decide con quién viajar.',
        },
        {
          title: '4. Cuadra los detalles',
          description: 'Acuerda el punto de encuentro, la hora y el reparto del coste desde el chat — sigue activo incluso sin conexión durante el vuelo.',
        },
        {
          title: '5. Viaja y valora',
          description: 'Al aterrizar, abre la app para encontraros en un toque, haz el trayecto y deja una valoración rápida.',
        },
      ],
    },
    mockups: {
      heading: 'Mira con quién viajarías antes de confirmar',
      description:
        'Vuelo, perfil y valoraciones anteriores — todo visible en la app antes de decir que sí.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Matching',
          title: 'Tu vuelo, tu gente',
          description:
            'Introduce tu número de vuelo y mira quién más va contigo — nada de emparejamientos al azar.',
          image: '/images/mockups/es/mockup-flight-search.svg'
        },
        {
          id: 'profile',
          badge: 'Perfil',
          title: 'Un perfil en el que confiar',
          description:
            'Identidad verificada, con nota media y comentarios de viajes anteriores.',
          image: '/images/mockups/es/mockup-profile.svg'
        },
        {
          id: 'event-detail',
          badge: 'Detalle',
          title: 'Nada oculto',
          description:
            'Quién organiza, quién va, dónde quedar y cuánto cuesta. Todo por adelantado.',
          image: '/images/mockups/es/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Habla antes de viajar',
          description:
            'Coordínate con tu grupo desde la app, sin dar tu número de teléfono.',
          image: '/images/mockups/es/mockup-chat.svg'
        },
        {
          id: 'events-list',
          badge: 'Eventos',
          title: 'Elige lo que mejor te venga',
          description:
            'Consulta todos los viajes disponibles para tu vuelo, con plazas y gente en tiempo real.',
          image: '/images/mockups/es/mockup-events-list.svg'
        },
        {
          id: 'impact',
          badge: 'Resultado',
          title: 'Ve crecer tu ahorro',
          description:
            'Sigue cuánto has ahorrado, viaje tras viaje.',
          image: '/images/mockups/es/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Comparte tu próximo traslado al aeropuerto',
      body: 'Únete a la beta de Cojauny: encuentra viajeros de tu vuelo, reparte el coste y viaja con alguien de confianza.',
      link: '#beta',
      linkLabel: 'Reservar mi plaza',
    },
    pricing: {
      title: 'Precios simples, cuando estés listo',
      subtitle: 'Empieza gratis. Pasa a Premium solo si vuelas lo suficiente para necesitarlo.',
      plans: {
        free: {
          name: 'Free',
          price: 'Gratis',
          description: 'Gestiona un vuelo y un evento a la vez, sin límite en el número total de viajes.',
          cta: 'Empezar gratis'
        },
        premium: {
          name: 'Premium',
          price: '4,99 €/mes',
          description: 'Gestiona varios vuelos y eventos a la vez, con chat grupal, estadísticas detalladas y soporte prioritario. 49 €/año (ahorras un 17%).',
          cta: 'Pasar a Premium'
        }
      },
      comparison: {
        title: 'Qué incluye cada plan',
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
          question: '¿Cómo funciona el matching por vuelo?',
          answer: 'Solo tienes que indicar tu número de vuelo y la fecha. Consultamos nuestra base de datos al momento y te emparejamos con otros viajeros de tu mismo vuelo, o de uno compatible en el mismo aeropuerto y horario.'
        },
        {
          question: '¿Es seguro viajar con gente que no conozco?',
          answer: 'Sí. Todo el mundo verifica su email (y puede añadir también su teléfono) antes de unirse, y puedes consultar el perfil público de cada viajero — valoraciones, comentarios, reputación — antes de confirmar nada. Ese perfil solo muestra un alias, nunca tu nombre real: tu identidad completa la conoce Cojauny de forma interna, por si hiciera falta por seguridad o motivos legales, pero nunca se comparte con otros usuarios. La coordinación se hace por un chat seguro dentro de la app, así que nunca compartes tu número de teléfono.',
        },
        {
          question: '¿Qué información ven de mí el resto de viajeros?',
          answer: 'Solo tu alias, tu foto de perfil (si decides subir una) y tu valoración media. Tu nombre real, tu teléfono y tus documentos de verificación nunca se muestran a otros usuarios — se quedan en Cojauny, visibles solo de forma interna por seguridad y trazabilidad legal. Compartir tu número de asiento, si quieres hacerlo, también es siempre opcional.',
        },
        {
          question: '¿Y si vuelvo a mi propia ciudad?',
          answer: 'Perfecto: te marcamos con la insignia de "vuelves a casa" para que otros viajeros de tu vuelo sepan que conoces la zona y puedan preguntarte algo sobre el trayecto desde el aeropuerto. Puedes seguir compartiendo traslado igualmente, o simplemente echar una mano con algún consejo.',
        },
        {
          question: '¿Puedo cancelar mi participación sin penalización?',
          answer: 'Sí, sin ataduras. Puedes salir de cualquier evento desde la app sin coste. Si eres el organizador, el resto se entera al instante para poder reorganizarse. Intenta avisar con la mayor antelación que puedas.'
        },
        {
          question: '¿Cómo se reparte el coste entre los participantes?',
          answer: 'La app calcula el reparto automáticamente y muestra a todos el ahorro estimado antes del viaje. No gestionamos los pagos nosotros, así que podéis liquidar como os venga mejor: efectivo, Bizum, transferencia, lo que sea más cómodo.'
        },
        {
          question: '¿Qué tipo de eventos puedo crear o unirme?',
          answer: 'Traslados compartidos al aeropuerto, recogidas a la llegada, furgonetas para equipos, coches privados compartidos, alojamiento compartido, o incluso un plan al aterrizar. Los usuarios Premium pueden crear eventos personalizados para cualquier otra cosa.'
        },
        {
          question: '¿En qué aeropuertos funciona Cojauny?',
          answer: 'Empezamos con los principales aeropuertos de Europa, América y Oriente Medio — como Madrid, Barcelona, Londres-Heathrow, París-CDG o Nueva York-JFK. ¿No está el tuyo? Solicítalo desde Ajustes → Solicitar aeropuerto.'
        },
        {
          question: '¿Qué pasa si mi vuelo se retrasa, se cancela o cambia de puerta?',
          answer: 'Seguimos tu vuelo en tiempo real. Si algo cambia, todo el grupo recibe un aviso al instante, y puedes actualizar la hora o el punto de encuentro — o cancelar el evento — con un solo toque.'
        },
        {
          question: '¿Qué diferencia hay entre el plan Free y el Premium?',
          answer: 'Free te deja gestionar 1 vuelo y 1 evento activos a la vez — no es un límite total, porque puedes añadir otro en cuanto termines un viaje. Premium suma varios vuelos y eventos a la vez, chat grupal completo, estadísticas detalladas y soporte prioritario, por 4,99 €/mes o 49 €/año.'
        },
        {
          question: '¿Cuánto dinero puedo ahorrar realmente con Cojauny?',
          answer: 'De media, entre un 50% y un 75% frente a ir solo. Por ejemplo, un traslado de 30 € baja a unos 8 € por persona al compartirlo con otros tres pasajeros — eso son entre 500 y 600 € al año si vuelas dos veces al mes.'
        },
        {
          question: '¿Qué pasa después de apuntarme a la lista de espera?',
          answer: 'Recibes un email de confirmación al momento, más tu propio enlace de invitación para subir puestos. En cuanto se libere tu plaza, te escribimos con todo lo necesario para tu primer viaje compartido.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Reserva tu plaza en la beta de Cojauny',
        subheading: 'Sé de los primeros en compartir traslados verificados al aeropuerto, con ventajas de miembro fundador incluidas.',
        title: 'Solicita tu acceso a la beta',
        description:
          'Acceso prioritario, perfil verificado, insignia de fundador y contacto directo con el equipo.',
        success:
          '¡Ya estás en la lista! Te escribiremos por email en cuanto tengas acceso.',
        error: 'Algo ha fallado por nuestra parte — inténtalo de nuevo en un momento.',
        duplicateError:
          'Parece que ya estás en la lista. Te contactaremos pronto.',
        submit: 'Reservar mi plaza',
        checkboxLabel: 'He leído y acepto la {privacyLink} de Cojauny.',
        privacyLinkLabel: 'política de privacidad',
        referralNotice:
          'Al registrarte recibirás un enlace para invitar a otros. Solo contamos visitas y registros para darte prioridad — nunca compartimos tus datos con terceros.',
        optionalLabel: '(opcional)',
        optionalHint: 'Los campos marcados como "(opcional)" te los puedes saltar sin problema.',
        fields: {
          fullName: 'Nombre completo',
          email: 'Correo electrónico',
          country: 'País',
          homeAirport: 'Ciudad o aeropuerto habitual',
          flightFrequency: '¿Con qué frecuencia vuelas?',
          useCase: '¿Para qué te gustaría usar Cojauny?',
          updatesOptIn: 'Avísame de las novedades',
          privacyAcceptance: 'Acepto que se guarden mis datos para participar en la beta.'
        },
        placeholders: {
          homeAirport: 'Ej. Madrid (MAD), CDMX',
          useCase: 'Cuéntanos un poco cómo lo usarías'
        },
        countryOptions: [
          { value: '', label: 'Elige tu país' },
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
          { value: 'once', label: '1 vez al año', description: 'Vacaciones o algún viaje suelto' },
          {
            value: 'two_to_five',
            label: '2–5 veces al año',
            description: 'Viajas con cierta regularidad'
          },
          {
            value: 'six_to_ten',
            label: '6–10 veces al año',
            description: 'El aeropuerto ya te resulta familiar'
          },
          {
            value: 'more_than_ten',
            label: '+10 veces al año',
            description: 'Prácticamente vives con la maleta hecha'
          }
        ]
      },
      feedback: {
        heading: '¿Tienes algo que contarnos? Te escuchamos',
        subheading: 'Ideas, fallos, propuestas de negocio... lo que sea, queremos saberlo.',
        title: 'Envíanos un mensaje',
        description:
          '¿Gestionas una empresa con traslados habituales o tienes una propuesta de colaboración? Cuéntanoslo, o escribe a feedback@cojauny.com.',
        success: 'Recibido, ¡gracias! Te responderemos si necesitamos algo más.',
        error: 'Revisa tu mensaje e inténtalo de nuevo.',
        submit: 'Enviar mensaje',
        optionalLabel: '(opcional)',
        optionalHint: 'Todos los campos son obligatorios salvo que veas "(opcional)".',
        fields: {
          fullName: 'Nombre',
          email: 'Correo',
          message: 'Cuéntanos',
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
      title: 'Te avisaremos en cuanto se abra la beta',
      subtitle: 'Mientras tanto, comparte tu enlace y sube puestos en la lista.',
      yourLink: 'Tu enlace de invitación',
      copyButton: 'Copiar enlace',
      copiedButton: '¡Copiado!',
      stats: {
        visits: 'Visitas',
        signups: 'Registros'
      },
      instructions: {
        title: 'Cómo funciona',
        step1: 'Comparte tu enlace con amigos, compañeros o en redes sociales.',
        step2: 'Cada visita a través de tu enlace cuenta, de forma anónima.',
        step3: 'Cada registro te hace subir puestos en la lista.'
      },
      privacy:
        'Solo contamos visitas y registros — no recogemos datos personales de quien hace clic en tu enlace.',
      privacyLabel: 'Un apunte:'
    },
    cookie: {
      message:
        'Usamos algunas cookies esenciales para que la web funcione, y otras de análisis opcionales para mejorarla. Tu elección se guarda 12 meses.',
      acceptAll: 'Aceptar todas',
      reject: 'Solo esenciales',
      customize: 'Personalizar',
      savePreferences: 'Guardar preferencias',
      essentialLabel: 'Esenciales',
      essentialDescription: 'Necesarias para cosas básicas como la seguridad y recordar tu idioma.',
      analyticsLabel: 'Análisis',
      analyticsDescription: 'Nos ayudan a entender qué funciona y a mejorar la beta.',
      alwaysOn: 'Siempre activas',
      moreInfo: 'Saber más'
    },
    footer: {
      description: 'Hacemos que ir al aeropuerto sea más fácil, más barato y más seguro. Juntos.',
      rights: 'Todos los derechos reservados.',
      appStoreSoon: 'App Store (próximamente)',
      playStoreSoon: 'Google Play (próximamente)',
      privacy: 'Política de privacidad',
      cookies: 'Política de cookies',
      terms: 'Términos de servicio',
      accountDeletion: 'Eliminar mi cuenta',
      acceptableUse: 'Uso aceptable',
      faq: 'Preguntas frecuentes',
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
      title: 'Cojauny | Share your airport ride with people on your flight',
      description:
        'Match with other travelers on your flight, split the cost of the taxi, and know exactly who you\'re riding with. Join the beta today.',
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
      ogTitle: 'Cojauny | Share your airport ride',
      ogDescription:
        'Match with passengers on your flight, split the cost, and travel with verified, reviewed companions.',
    },
    hero: {
      eyebrow: 'Beta is open · Spots are limited',
      title: 'Share your airport ride with people on your flight',
      subtitle:
        'Cojauny matches you by flight number, so you can split a taxi or van with verified travelers going the same way — and always know who you\'re with.',
      primaryCta: 'Reserve my spot',
      secondaryCta: 'See how it works',
      imageAlt: 'Cojauny interface showing flight matches, shared costs, and verified profiles',
      trustSignals: [
        'Split the cost',
        'Matched by flight',
        'Verified travelers',
        'Your name stays private',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Cut your airport transfer cost by up to 75%',
        subtitle:
          'Match with verified travelers on your flight and split the ride — you always see who you\'re traveling with before you say yes.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Join the Cojauny beta',
      label: 'Get early access — beta spots are limited',
      emailPlaceholder: 'you@email.com',
      submit: 'Reserve my spot',
      submitting: 'Sending…',
      privacyNote:
        'By joining, you agree to our terms and privacy policy. No spam, ever.',
      success: 'You\'re in! We\'ll email you as soon as your spot opens up.',
    },
    airportsHubTitle: 'Popular airports',
    airportsHubAll: 'See all airports',
    betaReferralBanner:
      'Once you\'re in, you\'ll get a personal invite link — share it to jump the queue.',
    features: {
      title: 'Everything you need to share a ride with confidence',
      subtitle:
        'From finding your match to splitting the bill, every feature is built to make sharing easy — and safe.',
      items: [
        {
          title: 'Matched by flight, not luck',
          description:
            'We match you by flight number and date, so you\'re always riding with people on your exact trip — never random strangers.',
          iconName: 'bolt',
        },
        {
          title: 'Split the cost automatically',
          description:
            'The app works out everyone\'s share of the ride, so nobody has to do the maths.',
          iconName: 'sparkles',
        },
        {
          title: 'Your real name stays private',
          description:
            'Other travelers only ever see your alias and rating — never your real name, phone number, or documents.',
          iconName: 'lock',
        },
        {
          title: 'Verified before you match',
          description:
            'Every traveler confirms their email, and can add phone verification too, so you always know who you\'re talking to.',
          iconName: 'shield',
        },
        {
          title: 'Ratings from real shared flights',
          description:
            'Every rating and comment comes from a flight someone actually took with you — no fake reviews, ever.',
          iconName: 'users',
        },
        {
          title: 'Report or block in one tap',
          description:
            'If something feels off, you can report or block another traveler instantly — no questions asked.',
          iconName: 'flag',
        },
        {
          title: 'Chat that works mid-flight',
          description:
            'Keep talking to your group before boarding, offline during the flight, and after you land — everything syncs automatically.',
          iconName: 'chat',
        },
        {
          title: 'Find each other on arrival',
          description:
            'Open the app the moment you land and meet your travel companions at the gate in one tap.',
          iconName: 'pin',
        },
        {
          title: 'Flying home? Get the local badge',
          description:
            'If you\'re returning to your own city, we flag you as a local — handy for travelers who could use a tip on the way in.',
          iconName: 'globe',
        },
      ],
    },
    value: {
      eyebrow: 'Why people join',
      title: 'One ride, three good reasons',
      subtitle:
        'Cojauny brings together real savings, real convenience, and real peace of mind — you always choose who you travel with.',
      items: [
        {
          title: 'You actually save money',
          description:
            'Splitting a taxi or transfer with other passengers costs a fraction of going alone.',
        },
        {
          title: 'Matched by flight, never by luck',
          description:
            'You only ever travel with people on your exact flight and terminal — never a random stranger off the street.',
        },
        {
          title: 'Verified, and reviewed',
          description:
            'Every profile is verified and past ratings are visible before you agree to anything — their real name is something only Cojauny ever sees.',
        },
        {
          title: 'No surprises on the day',
          description:
            'Meeting point, timing, and cost split are all agreed in the app before you even leave home.',
        },
      ],
    },
    savings: {
      title: 'Save up to 75% on your next airport ride',
      caption:
        'Splitting a ride with verified travelers on your flight is the easiest way to cut the cost. Here\'s what we\'re working toward during the beta.',
      metrics: [
        {
          value: '50-75%',
          label: 'Savings per ride',
          description: 'What you can expect to save by splitting a taxi or transfer instead of going alone.',
        },
        {
          value: '180+',
          label: 'Airports',
          description: 'Covering major hubs across Europe, the Americas, and the Middle East.',
        },
        {
          value: '50,000+',
          label: 'Travelers expected',
          description: 'Our goal for building a network big enough to match rides on busy routes.',
        },
        {
          value: '1,000+ t',
          label: 'CO₂ saved',
          description: 'The estimated impact of fuller cars once more people start sharing.',
        },
      ],
    },
    workflow: {
      title: 'From flight number to shared ride in five steps',
      intro: 'Verify your profile once — then match, chat, and travel, with a few safety checks built in along the way.',
      steps: [
        {
          title: '1. Set up your profile',
          description: 'Sign up and verify your identity once. That\'s it — you\'re ready to start matching.',
        },
        {
          title: '2. Add your flight',
          description: 'Enter your flight number and date, and we instantly create a group chat just for your trip.',
        },
        {
          title: '3. Pick your match',
          description: 'Compare profiles and ratings, then choose who to travel with.',
        },
        {
          title: '4. Sort out the details',
          description: 'Agree on the meeting point, timing, and cost split in the chat — it keeps working even offline during your flight.',
        },
        {
          title: '5. Travel, then rate',
          description: 'Land, open the app to find each other in one tap, take the ride, then leave a quick rating.',
        },
      ],
    },
    mockups: {
      heading: 'See exactly who you\'d be traveling with',
      description:
        'Flight, profile, and past ratings — all visible in the app before you confirm anything.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Matching',
          title: 'Your flight, your people',
          description:
            'Enter your flight number and see who else is on it — no random matches.',
          image: '/images/mockups/en/mockup-flight-search.svg'
        },
        {
          id: 'profile',
          badge: 'Profile',
          title: 'A profile you can trust',
          description:
            'ID-verified, with a star rating and comments from past trips.',
          image: '/images/mockups/en/mockup-profile.svg'
        },
        {
          id: 'event-detail',
          badge: 'Details',
          title: 'Nothing hidden',
          description:
            'Who\'s organizing, who\'s coming, where to meet, and what it costs — all upfront.',
          image: '/images/mockups/en/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Talk before you travel',
          description:
            'Coordinate with your group in the app, no phone number required.',
          image: '/images/mockups/en/mockup-chat.svg'
        },
        {
          id: 'events-list',
          badge: 'Options',
          title: 'Pick what works for you',
          description:
            'See every ride available for your flight, with live spots and headcounts.',
          image: '/images/mockups/en/mockup-events-list.svg'
        },
        {
          id: 'impact',
          badge: 'Results',
          title: 'Watch your savings add up',
          description:
            'Track how much you\'ve saved, ride after ride.',
          image: '/images/mockups/en/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Ready for your next airport ride to cost less?',
      body: 'Join the Cojauny beta — match with people on your flight, split the ride, and travel with someone you can trust.',
      link: '#beta',
      linkLabel: 'Reserve my spot'
    },
    pricing: {
      title: 'Simple pricing, whenever you\'re ready',
      subtitle: 'Start free. Upgrade only if you\'re flying enough to need it.',
      plans: {
        free: {
          name: 'Free',
          price: 'Free',
          description: 'Manage one flight and one event at a time — no cap on how many trips you take overall.',
          cta: 'Start for free'
        },
        premium: {
          name: 'Premium',
          price: '€4.99/mo',
          description: 'Manage several flights and events at once, plus group chat, detailed stats, and priority support. €49/year (save 17%).',
          cta: 'Go Premium'
        }
      },
      comparison: {
        title: 'What\'s included',
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
          answer: 'Just enter your flight number and date. We check our database in real time and match you with other travelers on the same flight, or on a compatible one at the same airport and time.'
        },
        {
          question: 'Is it safe to share a ride with people I don\'t know?',
          answer: 'Yes. Everyone verifies their email (and can add phone verification too) before joining, and you can check each traveler\'s public profile — ratings, comments, reputation — before agreeing to anything. That profile only ever shows an alias, never a real name: Cojauny keeps your full identity on file internally for safety and legal reasons, but it\'s never shared with other users. You coordinate through a secure in-app chat, so you never have to share your phone number.',
        },
        {
          question: 'What information do other travelers actually see about me?',
          answer: 'Just your alias, your profile photo (if you choose to add one), and your average rating. Your real name, phone number, and verification documents are never shown to other users — they stay with Cojauny, visible internally only for safety and legal traceability. Sharing your seat number, if you want to, is always optional too.',
        },
        {
          question: 'What if I\'m flying back to my own city?',
          answer: 'Even better — we\'ll flag you with a "local returning home" badge, so other travelers on your flight know you know the area and can ask you for tips getting into town. You can still split the ride, or just lend a hand.',
        },
        {
          question: 'Can I cancel my participation without penalty?',
          answer: 'Yes, no strings attached. You can leave any event from the app at no cost. If you\'re the organizer, everyone gets notified instantly so the group can adjust. Just try to give as much notice as you can.'
        },
        {
          question: 'How does splitting the cost work between participants?',
          answer: 'The app works out an equal split automatically and shows everyone the estimated savings before the trip. We don\'t process payments ourselves, so you settle up however suits the group — cash, bank transfer, PayPal, whatever\'s easiest.'
        },
        {
          question: 'What types of events can I create or join?',
          answer: 'Shared rides to the airport, pickups on arrival, van services for teams, private car shares, shared accommodation, or even a get-together after landing. Premium users can set up custom events for anything else.'
        },
        {
          question: 'Which airports is Cojauny available in?',
          answer: 'We\'re launching with major hubs across Europe, the Americas, and the Middle East — including Madrid, Barcelona, London Heathrow, Paris CDG, and New York JFK. Don\'t see yours? Request it from Settings → Request Airport.'
        },
        {
          question: 'What happens if my flight is delayed, canceled, or the gate changes?',
          answer: 'We track your flight in real time. If anything changes, everyone in your event is notified instantly, and you can update the meeting time or point — or cancel — in one tap.'
        },
        {
          question: 'What is the difference between Free and Premium?',
          answer: 'Free covers 1 active flight and 1 event at a time — not a lifetime cap, since you can add another the moment you finish a trip. Premium adds multiple flights and events at once, full group chat, detailed stats, and priority support, for €4.99/mo or €49/year.'
        },
        {
          question: 'How much money can I really save using Cojauny?',
          answer: 'On average, 50-75% compared to going alone. For example, a €30 transfer drops to around €8 per person when split with three other passengers — that adds up to €500-600 a year for someone flying twice a month.'
        },
        {
          question: 'What happens after I join the beta waitlist?',
          answer: 'You\'ll get a confirmation email right away, plus your own invite link to move up the queue. As soon as a spot opens for you, we\'ll email you everything you need to book your first shared ride.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Reserve your spot in the Cojauny beta',
        subheading: 'Be among the first to share verified airport rides — founding members get a few perks too.',
        title: 'Request Beta Access',
        description:
          'Priority access, a verified profile, a founding member badge, and a direct line to our team.',
        success:
          'You\'re on the list! We\'ll email you as soon as your spot is ready.',
        error: 'Something went wrong on our end — please try again in a moment.',
        duplicateError:
          'Looks like you\'re already on the list. We\'ll be in touch soon.',
        submit: 'Reserve my spot',
        checkboxLabel: 'I\'ve read and agree to Cojauny\'s {privacyLink}.',
        privacyLinkLabel: 'privacy policy',
        referralNotice:
          'After signing up, you\'ll get an invite link to share. We only track visits and signups to move you up the list — no data is shared with third parties.',
        optionalLabel: '(optional)',
        optionalHint: 'Anything marked "(optional)" is just that — feel free to skip it.',
        fields: {
          fullName: 'Full name',
          email: 'Email address',
          country: 'Country',
          homeAirport: 'Home city or airport',
          flightFrequency: 'How often do you fly?',
          useCase: 'What would you like to use Cojauny for?',
          updatesOptIn: 'Keep me posted on new features',
          privacyAcceptance: 'I agree to my data being stored for the Cojauny beta.'
        },
        placeholders: {
          homeAirport: 'e.g. London (LHR), JFK, Mexico City',
          useCase: 'Tell us a bit about how you\'d use it'
        },
        countryOptions: [
          { value: '', label: 'Choose your country' },
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
          { value: 'once', label: 'Once a year', description: 'Holidays or the occasional trip' },
          {
            value: 'two_to_five',
            label: '2–5 times a year',
            description: 'Regular traveler or frequent holidays'
          },
          {
            value: 'six_to_ten',
            label: '6–10 times a year',
            description: 'You\'re often at the airport for work or life'
          },
          {
            value: 'more_than_ten',
            label: 'More than 10 times a year',
            description: 'Basically living out of a suitcase'
          }
        ]
      },
      feedback: {
        heading: 'Got something to say? We\'re listening',
        subheading: 'Ideas, bugs, business proposals — whatever it is, we want to hear it.',
        title: 'Send us a message',
        description:
          'Running a company with regular transfers, or have a partnership in mind? Tell us more, or write to feedback@cojauny.com.',
        success: 'Got it — thank you! We\'ll get back to you if we need anything else.',
        error: 'Please check your message and try again.',
        submit: 'Send message',
        optionalLabel: '(optional)',
        optionalHint: 'All fields are required unless you see "(optional)".',
        fields: {
          fullName: 'Name',
          email: 'Email',
          message: 'What\'s on your mind?',
          useCase: 'Type',
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
      title: 'We\'ll email you the moment beta opens',
      subtitle: 'In the meantime, share your link and move up the list.',
      yourLink: 'Your invite link',
      copyButton: 'Copy link',
      copiedButton: 'Copied!',
      stats: {
        visits: 'Visits',
        signups: 'Signups'
      },
      instructions: {
        title: 'How it works',
        step1: 'Share your link with friends, colleagues, or on social media.',
        step2: 'Every visit through your link counts, anonymously.',
        step3: 'Every signup moves you further up the queue.'
      },
      privacy:
        'We only count visits and signups — no personal data is collected from people who click your link.',
      privacyLabel: 'Good to know:'
    },
    cookie: {
      message:
        'We use a few essential cookies to keep the site running, plus optional analytics ones to help us improve it. Your choice sticks around for 12 months.',
      acceptAll: 'Accept all',
      reject: 'Essential only',
      customize: 'Customize',
      savePreferences: 'Save preferences',
      essentialLabel: 'Essential',
      essentialDescription: 'Needed for basic things like security and remembering your language.',
      analyticsLabel: 'Analytics',
      analyticsDescription: 'Helps us understand what\'s working and improve the beta.',
      alwaysOn: 'Always on',
      moreInfo: 'Learn more'
    },
    footer: {
      description: 'Making airport transfers simpler, cheaper, and safer — together.',
      rights: 'All rights reserved.',
      appStoreSoon: 'App Store (coming soon)',
      playStoreSoon: 'Google Play (coming soon)',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      terms: 'Terms of Service',
      accountDeletion: 'Delete my account',
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
      title: 'Cojauny | Teile deine Fahrt zum Flughafen mit deinem Flug',
      description:
        'Finde andere Reisende auf deinem Flug, teilt euch das Taxi und wisst genau, mit wem ihr unterwegs seid. Jetzt der Beta beitreten.',
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
      ogTitle: 'Cojauny | Teile deine Fahrt zum Flughafen',
      ogDescription:
        'Finde Mitreisende auf deinem Flug, teilt euch die Kosten und reist mit verifizierten Begleitern.',
    },
    hero: {
      eyebrow: 'Beta ist offen · Plätze sind begrenzt',
      title: 'Teile deine Fahrt zum Flughafen mit Leuten von deinem Flug',
      subtitle:
        'Cojauny matcht euch über die Flugnummer, damit ihr euch Taxi oder Shuttle mit verifizierten Reisenden teilt — und immer wisst, mit wem ihr unterwegs seid.',
      primaryCta: 'Meinen Platz sichern',
      secondaryCta: 'So funktioniert\'s',
      imageAlt: 'Cojauny-Oberfläche mit Flug-Matching, geteilten Kosten und verifizierten Profilen',
      trustSignals: [
        'Kosten teilen',
        'Nach Flug gematcht',
        'Verifizierte Reisende',
        'Dein Name bleibt privat',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Spare bis zu 75% bei deinem nächsten Transfer',
        subtitle:
          'Finde verifizierte Reisende auf deinem Flug und teilt euch die Fahrt — du weißt immer, mit wem du unterwegs bist, bevor du zusagst.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Der Cojauny-Beta beitreten',
      label: 'Sichere dir jetzt einen Platz — die Beta füllt sich schnell',
      emailPlaceholder: 'name@email.de',
      submit: 'Meinen Platz sichern',
      submitting: 'Wird gesendet…',
      privacyNote:
        'Mit dem Beitritt akzeptierst du unsere AGB und Datenschutzrichtlinie. Kein Spam, versprochen.',
      success: 'Du bist dabei! Wir schreiben dir, sobald dein Platz frei ist.',
    },
    airportsHubTitle: 'Beliebte Flughäfen',
    airportsHubAll: 'Alle Flughäfen ansehen',
    betaReferralBanner:
      'Sobald du dabei bist, bekommst du einen persönlichen Einladungslink — teile ihn und rutsche in der Warteliste nach vorne.',
    features: {
      title: 'Alles, was du zum sicheren Mitfahren brauchst',
      subtitle:
        'Vom Match bis zur geteilten Rechnung — jede Funktion macht das Teilen einfach und sicher.',
      items: [
        {
          title: 'Nach Flug gematcht, nicht nach Zufall',
          description:
            'Wir matchen dich über Flugnummer und Datum, damit du immer mit Leuten von deinem Flug unterwegs bist — nie mit wildfremden Leuten.',
          iconName: 'bolt',
        },
        {
          title: 'Kosten automatisch teilen',
          description:
            'Die App rechnet aus, was jeder zahlt, damit niemand selbst rechnen muss.',
          iconName: 'sparkles',
        },
        {
          title: 'Dein echter Name bleibt privat',
          description:
            'Andere Reisende sehen nur deinen Alias und deine Bewertung — nie deinen echten Namen, deine Telefonnummer oder Dokumente.',
          iconName: 'lock',
        },
        {
          title: 'Verifiziert, bevor ihr euch matcht',
          description:
            'Jeder bestätigt seine E-Mail und kann zusätzlich die Telefonnummer verifizieren, damit du immer weißt, mit wem du sprichst.',
          iconName: 'shield',
        },
        {
          title: 'Bewertungen aus echten gemeinsamen Flügen',
          description:
            'Jede Bewertung und jeder Kommentar stammt von einem Flug, den die Person wirklich mit dir geteilt hat — nie erfunden.',
          iconName: 'users',
        },
        {
          title: 'Melden oder blockieren mit einem Klick',
          description:
            'Wenn sich etwas komisch anfühlt, kannst du einen anderen Reisenden sofort melden oder blockieren — ganz ohne Erklärung.',
          iconName: 'flag',
        },
        {
          title: 'Chat, der auch im Flugzeug funktioniert',
          description:
            'Bleib mit deiner Gruppe in Kontakt — vor dem Boarding, offline während des Flugs und nach der Landung. Alles synchronisiert sich automatisch.',
          iconName: 'chat',
        },
        {
          title: 'Findet euch bei der Ankunft',
          description:
            'Öffne die App, sobald du gelandet bist, und triff deine Mitreisenden mit einem Klick am Gate.',
          iconName: 'pin',
        },
        {
          title: 'Fliegst du nach Hause? Hol dir das Local-Badge',
          description:
            'Wenn du in deine eigene Stadt zurückfliegst, markieren wir dich als Local — praktisch für Reisende, die einen Tipp für den Weg in die Stadt gebrauchen können.',
          iconName: 'globe',
        },
      ],
    },
    value: {
      eyebrow: 'Warum Leute mitmachen',
      title: 'Eine Fahrt, drei gute Gründe',
      subtitle:
        'Cojauny bringt echte Ersparnis, echten Komfort und ein gutes Gefühl zusammen — du entscheidest immer, mit wem du fährst.',
      items: [
        {
          title: 'Du sparst wirklich',
          description:
            'Ein geteiltes Taxi kostet einen Bruchteil von dem, was du allein zahlen würdest.',
        },
        {
          title: 'Nach Flug gematcht, nie nach Zufall',
          description:
            'Du reist nur mit Leuten von deinem Flug und Terminal — nie mit einem zufälligen Fremden von der Straße.',
        },
        {
          title: 'Verifiziert und bewertet',
          description:
            'Jedes Profil ist geprüft, und du siehst Bewertungen, bevor du zusagst — den echten Namen kennt nur Cojauny, nie du.',
        },
        {
          title: 'Keine Überraschungen am Reisetag',
          description:
            'Treffpunkt, Uhrzeit und Kostenaufteilung sind schon in der App geklärt, bevor du überhaupt losfährst.',
        },
      ],
    },
    savings: {
      title: 'Spare bis zu 75% bei deiner nächsten Fahrt zum Flughafen',
      caption:
        'Die Fahrt mit verifizierten Reisenden von deinem Flug zu teilen, ist der einfachste Weg, Kosten zu sparen. Das sind die Ziele, auf die wir während der Beta hinarbeiten.',
      metrics: [
        {
          value: '50-75%',
          label: 'Ersparnis pro Fahrt',
          description: 'So viel kannst du sparen, wenn du dir Taxi oder Transfer teilst, statt allein zu fahren.'
        },
        {
          value: '180+',
          label: 'Flughäfen',
          description: 'Wir decken die wichtigsten Hubs in Europa, Amerika und dem Nahen Osten ab.',
        },
        {
          value: '50.000+',
          label: 'Erwartete Reisende',
          description: 'Unser Ziel für ein Netzwerk, das groß genug ist, um auch auf stark frequentierten Strecken zu matchen.'
        },
        {
          value: '1.000+ t',
          label: 'Vermiedenes CO₂',
          description: 'Der geschätzte Effekt, wenn mehr Leute sich ein Auto teilen, statt einzeln zu fahren.'
        }
      ]
    },
    workflow: {
      title: 'Von der Flugnummer zur geteilten Fahrt in 5 Schritten',
      intro: 'Verifiziere dein Profil einmal — dann heißt es nur noch matchen, absprechen und losfahren, mit ein paar Sicherheitschecks nebenbei.',
      steps: [
        {
          title: '1. Profil anlegen',
          description: 'Melde dich an und verifiziere deine Identität einmal. Fertig — du kannst direkt loslegen.',
        },
        {
          title: '2. Flug hinzufügen',
          description: 'Gib Flugnummer und Datum ein — wir legen sofort eine Gruppe und einen Chat nur für deinen Flug an.',
        },
        {
          title: '3. Match auswählen',
          description: 'Vergleiche Profile und Bewertungen und entscheide, mit wem du fährst.',
        },
        {
          title: '4. Details klären',
          description: 'Sprecht Treffpunkt, Uhrzeit und Kostenaufteilung im Chat ab — der funktioniert sogar offline während des Flugs.',
        },
        {
          title: '5. Fahren und bewerten',
          description: 'Nach der Landung öffnest du die App, findet euch mit einem Klick, macht die Fahrt und bewertet danach kurz.',
        },
      ],
    },
    mockups: {
      heading: 'Sieh genau, mit wem du unterwegs wärst',
      description:
        'Flug, Profil und frühere Bewertungen — alles sichtbar in der App, bevor du zusagst.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Matching',
          title: 'Dein Flug, deine Leute',
          description:
            'Gib deine Flugnummer ein und sieh, wer sonst noch dabei ist — keine Zufallstreffer.',
          image: '/images/mockups/de/mockup-flight-search.svg'
        },
        {
          id: 'profile',
          badge: 'Profil',
          title: 'Ein Profil, dem du vertrauen kannst',
          description:
            'Verifizierte Identität, mit Sternebewertung und Kommentaren aus früheren Fahrten.',
          image: '/images/mockups/de/mockup-profile.svg'
        },
        {
          id: 'event-detail',
          badge: 'Details',
          title: 'Nichts versteckt',
          description:
            'Wer organisiert, wer mitkommt, wo ihr euch trefft und was es kostet — alles vorab sichtbar.',
          image: '/images/mockups/de/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Reden, bevor ihr euch trefft',
          description:
            'Sprecht euch in der App ab, ganz ohne Telefonnummer.',
          image: '/images/mockups/de/mockup-chat.svg'
        },
        {
          id: 'events-list',
          badge: 'Optionen',
          title: 'Wähle, was zu dir passt',
          description:
            'Sieh alle verfügbaren Fahrten für deinen Flug, mit freien Plätzen in Echtzeit.',
          image: '/images/mockups/de/mockup-events-list.svg'
        },
        {
          id: 'impact',
          badge: 'Ergebnis',
          title: 'Sieh deine Ersparnis wachsen',
          description:
            'Verfolge, wie viel du schon gespart hast — Fahrt für Fahrt.',
          image: '/images/mockups/de/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Bereit für eine günstigere Fahrt zum Flughafen?',
      body: 'Tritt der Cojauny-Beta bei: finde Leute von deinem Flug, teilt euch die Fahrt und reist mit jemandem, dem ihr vertrauen könnt.',
      link: '#beta',
      linkLabel: 'Meinen Platz sichern'
    },
    pricing: {
      title: 'Einfache Preise, wann immer du bereit bist',
      subtitle: 'Starte kostenlos. Upgrade nur, wenn du wirklich mehr brauchst.',
      plans: {
        free: {
          name: 'Free',
          price: 'Kostenlos',
          description: 'Verwalte einen Flug und ein Event gleichzeitig — ohne Limit, wie viele Fahrten du insgesamt machst.',
          cta: 'Kostenlos starten'
        },
        premium: {
          name: 'Premium',
          price: '4,99 €/Monat',
          description: 'Verwalte mehrere Flüge und Events gleichzeitig, dazu Gruppenchat, detaillierte Statistiken und Prioritäts-Support. 49 €/Jahr (17% sparen).',
          cta: 'Zu Premium wechseln'
        }
      },
      comparison: {
        title: 'Das ist enthalten',
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
      subtitle: 'Wir beantworten deine Fragen zu Cojauny',
      items: [
        {
          question: 'Wie funktioniert das Flug-Matching?',
          answer: 'Gib einfach deine Flugnummer und das Datum ein. Wir gleichen das in Echtzeit mit unserer Datenbank ab und bringen dich mit anderen Reisenden auf deinem Flug zusammen — oder auf einem passenden Flug am selben Flughafen zur selben Zeit.'
        },
        {
          question: 'Ist es sicher, mit Leuten zu reisen, die ich nicht kenne?',
          answer: 'Ja. Jeder verifiziert seine E-Mail (und kann zusätzlich die Telefonnummer verifizieren), bevor er mitmachen kann, und du siehst das öffentliche Profil jedes Reisenden — Bewertungen, Kommentare, Reputation — bevor du zusagst. Dieses Profil zeigt immer nur einen Alias, nie den echten Namen: Deine vollständige Identität kennt Cojauny intern, falls sie aus Sicherheits- oder Rechtsgründen gebraucht wird, wird aber nie an andere Nutzer weitergegeben. Die Absprache läuft über einen sicheren Chat in der App, du musst also nie deine Nummer rausgeben.',
        },
        {
          question: 'Welche Informationen sehen andere Reisende von mir?',
          answer: 'Nur deinen Alias, dein Profilbild (falls du eines hochlädst) und deine Durchschnittsbewertung. Dein echter Name, deine Telefonnummer und deine Verifizierungsdokumente werden anderen Nutzern nie gezeigt — sie bleiben bei Cojauny und sind nur intern zu Sicherheits- und Rechtszwecken einsehbar. Auch deine Sitzplatznummer zu teilen, ist immer freiwillig.',
        },
        {
          question: 'Was ist, wenn ich in meine eigene Stadt zurückfliege?',
          answer: 'Umso besser — dann bekommst du das Local-Badge, damit andere Reisende auf deinem Flug wissen, dass du dich auskennst, und dich nach Tipps für den Weg in die Stadt fragen können. Du kannst trotzdem die Fahrt teilen oder einfach nur aushelfen.',
        },
        {
          question: 'Kann ich ohne Nachteile stornieren?',
          answer: 'Ja, ganz ohne Verpflichtung. Du kannst jedes Event jederzeit kostenlos in der App verlassen. Als Organisator wird die Gruppe sofort informiert, damit sie sich neu organisieren kann. Sag einfach so früh wie möglich Bescheid.'
        },
        {
          question: 'Wie funktioniert die Kostenteilung zwischen den Teilnehmern?',
          answer: 'Die App teilt die Kosten automatisch gleichmäßig auf und zeigt allen die geschätzte Ersparnis vor der Fahrt. Wir wickeln keine Zahlungen selbst ab, also regelt ihr das, wie es euch am besten passt — bar, Überweisung, PayPal, was auch immer einfacher ist.'
        },
        {
          question: 'Welche Art von Events kann ich erstellen oder beitreten?',
          answer: 'Geteilte Fahrten zum Flughafen, Abholungen bei der Ankunft, Shuttles für Teams, geteilte Privatwagen, gemeinsame Unterkünfte oder auch ein Treffen nach der Landung. Premium-Nutzer können für alles andere eigene Events erstellen.'
        },
        {
          question: 'An welchen Flughäfen ist Cojauny verfügbar?',
          answer: 'Wir starten an den wichtigsten Flughäfen in Europa, Amerika und dem Nahen Osten — darunter Madrid, Barcelona, London-Heathrow, Paris-CDG und New York-JFK. Deiner fehlt? Frag ihn unter Einstellungen → Flughafen anfragen an.'
        },
        {
          question: 'Was passiert, wenn mein Flug Verspätung hat, storniert wird oder das Gate wechselt?',
          answer: 'Wir verfolgen deinen Flug in Echtzeit. Ändert sich etwas, wird die ganze Gruppe sofort informiert, und du kannst Treffpunkt oder Uhrzeit mit einem Klick anpassen — oder das Event stornieren.'
        },
        {
          question: 'Was ist der Unterschied zwischen Free und Premium?',
          answer: 'Mit Free verwaltest du 1 aktiven Flug und 1 Event gleichzeitig — kein Gesamtlimit, denn sobald du eine Fahrt beendest, kannst du direkt eine neue hinzufügen. Premium bringt mehrere gleichzeitige Flüge und Events, vollen Gruppenchat, detaillierte Statistiken und Prioritäts-Support, für 4,99 €/Monat oder 49 €/Jahr.'
        },
        {
          question: 'Wie viel Geld kann ich mit Cojauny wirklich sparen?',
          answer: 'Im Schnitt 50-75% im Vergleich zum Alleinfahren. Ein Transfer für 30 € kostet zum Beispiel nur noch etwa 8 € pro Person, wenn du ihn mit drei weiteren Passagieren teilst — das macht 500-600 € im Jahr, wenn du zweimal im Monat fliegst.'
        },
        {
          question: 'Was passiert, nachdem ich mich auf die Warteliste gesetzt habe?',
          answer: 'Du bekommst sofort eine Bestätigungsmail, dazu deinen eigenen Einladungslink, um in der Liste vorzurücken. Sobald ein Platz für dich frei ist, schreiben wir dir alles, was du für deine erste geteilte Fahrt brauchst.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Sichere dir deinen Platz in der Cojauny-Beta',
        subheading: 'Sei unter den Ersten, die verifizierte Flughafenfahrten teilen — als Gründungsmitglied gibt\'s ein paar Extras dazu.',
        title: 'Beta-Zugang anfragen',
        description:
          'Bevorzugter Zugang, verifiziertes Profil, Gründer-Badge und direkter Draht zu unserem Team.',
        success:
          'Du stehst auf der Liste! Wir schreiben dir, sobald dein Zugang bereit ist.',
        error: 'Auf unserer Seite ist etwas schiefgelaufen — versuch es gleich noch mal.',
        duplicateError:
          'Sieht so aus, als wärst du schon auf der Liste. Wir melden uns bald.',
        submit: 'Meinen Platz sichern',
        checkboxLabel: 'Ich habe Cojaunys {privacyLink} gelesen und akzeptiere sie.',
        privacyLinkLabel: 'Datenschutzrichtlinie',
        referralNotice:
          'Nach der Anmeldung bekommst du einen Einladungslink zum Teilen. Wir zählen nur Besuche und Anmeldungen, um dich weiter vorne einzureihen — deine Daten geben wir nie an Dritte weiter.',
        optionalLabel: '(optional)',
        optionalHint: 'Alles mit "(optional)" kannst du einfach überspringen.',
        fields: {
          fullName: 'Vollständiger Name',
          email: 'E-Mail-Adresse',
          country: 'Land',
          homeAirport: 'Heimatstadt oder -flughafen',
          flightFrequency: 'Wie oft fliegst du?',
          useCase: 'Wofür möchtest du Cojauny nutzen?',
          updatesOptIn: 'Halte mich über Neuigkeiten auf dem Laufenden',
          privacyAcceptance: 'Ich bin einverstanden, dass meine Daten für die Cojauny-Beta gespeichert werden.'
        },
        placeholders: {
          homeAirport: 'z. B. Berlin (BER), München',
          useCase: 'Erzähl uns kurz, wofür du es nutzen würdest'
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
          { value: 'once', label: '1x im Jahr', description: 'Urlaub oder ab und zu mal' },
          {
            value: 'two_to_five',
            label: '2–5x im Jahr',
            description: 'Du fliegst öfter mal'
          },
          {
            value: 'six_to_ten',
            label: '6–10x im Jahr',
            description: 'Der Flughafen ist dir schon vertraut'
          },
          {
            value: 'more_than_ten',
            label: '10+x im Jahr',
            description: 'Du lebst quasi aus dem Koffer'
          }
        ]
      },
      feedback: {
        heading: 'Was liegt dir auf dem Herzen?',
        subheading: 'Ideen, Bugs, Geschäftsvorschläge — wir hören zu.',
        title: 'Schreib uns',
        description:
          'Organisierst du regelmäßige Transfers oder hast eine Kooperationsidee? Erzähl uns davon, oder schreib direkt an feedback@cojauny.com.',
        success: 'Danke, ist angekommen! Wir melden uns, falls wir noch etwas brauchen.',
        error: 'Bitte überprüfe deine Nachricht und versuch es erneut.',
        submit: 'Nachricht senden',
        optionalLabel: '(optional)',
        optionalHint: 'Alle Felder sind Pflicht, außer bei "(optional)".',
        fields: {
          fullName: 'Name',
          email: 'E-Mail',
          message: 'Was möchtest du uns sagen?',
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
      title: 'Wir schreiben dir, sobald die Beta startet',
      subtitle: 'Teile in der Zwischenzeit deinen Link und rutsche in der Liste nach vorne.',
      yourLink: 'Dein Einladungslink',
      copyButton: 'Link kopieren',
      copiedButton: 'Kopiert!',
      stats: {
        visits: 'Besuche',
        signups: 'Anmeldungen'
      },
      instructions: {
        title: 'So funktioniert\'s',
        step1: 'Teile deinen Link mit Freunden, Kollegen oder in sozialen Netzwerken.',
        step2: 'Jeder Besuch über deinen Link zählt, anonym.',
        step3: 'Jede Anmeldung bringt dich in der Warteliste weiter nach vorne.'
      },
      privacy:
        'Wir zählen nur Besuche und Anmeldungen — von Leuten, die auf deinen Link klicken, erfassen wir keine persönlichen Daten.',
      privacyLabel: 'Gut zu wissen:'
    },
    cookie: {
      message:
        'Wir nutzen ein paar essenzielle Cookies, damit die Seite läuft, und optionale Analyse-Cookies, um sie zu verbessern. Deine Wahl bleibt 12 Monate gespeichert.',
      acceptAll: 'Alle akzeptieren',
      reject: 'Nur essenzielle',
      customize: 'Anpassen',
      savePreferences: 'Einstellungen speichern',
      essentialLabel: 'Essenziell',
      essentialDescription: 'Nötig für Grundlegendes wie Sicherheit und deine Sprachwahl.',
      analyticsLabel: 'Analyse',
      analyticsDescription: 'Hilft uns zu verstehen, was funktioniert, und die Beta zu verbessern.',
      alwaysOn: 'Immer aktiv',
      moreInfo: 'Mehr erfahren'
    },
    footer: {
      description: 'Wir machen den Weg zum Flughafen einfacher, günstiger und sicherer. Gemeinsam.',
      rights: 'Alle Rechte vorbehalten.',
      appStoreSoon: 'App Store (bald)',
      playStoreSoon: 'Google Play (bald)',
      privacy: 'Datenschutzrichtlinie',
      cookies: 'Cookie-Richtlinie',
      terms: 'Nutzungsbedingungen',
      accountDeletion: 'Konto löschen',
      acceptableUse: 'Zulässige Nutzung',
      faq: 'Häufige Fragen',
      subprocessors: 'Subprozessoren',
      contact: 'Kontakt',
      blog: 'Blog',
      languageLabel: 'Sprache',
      madeInEurope: 'Made in Europe.'
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
      title: 'Cojauny | Partagez votre trajet vers l\'aéroport avec votre vol',
      description:
        'Trouvez d\'autres voyageurs sur votre vol, partagez le taxi et sachez avec qui vous voyagez. Rejoignez la bêta dès aujourd\'hui.',
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
      ogTitle: 'Cojauny | Partagez votre trajet vers l\'aéroport',
      ogDescription:
        'Trouvez des passagers de votre vol, partagez le coût et voyagez avec des compagnons vérifiés.',
    },
    hero: {
      eyebrow: 'La bêta est ouverte · Places limitées',
      title: 'Partagez votre trajet vers l\'aéroport avec des passagers de votre vol',
      subtitle:
        'Cojauny vous associe par numéro de vol, pour partager un taxi ou une navette avec des voyageurs vérifiés qui vont au même endroit — en sachant toujours avec qui vous voyagez.',
      primaryCta: 'Réserver ma place',
      secondaryCta: 'Voir comment ça marche',
      imageAlt: 'Interface Cojauny avec matching par vol, coûts partagés et profils vérifiés',
      trustSignals: [
        'Partagez le coût',
        'Associé par vol',
        'Voyageurs vérifiés',
        'Votre nom reste privé',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Économisez jusqu\'à 75% sur votre prochain trajet',
        subtitle:
          'Trouvez des voyageurs vérifiés sur votre vol et partagez le trajet — sachez toujours avec qui vous voyagez avant de confirmer.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Rejoindre la bêta Cojauny',
      label: 'Obtenez un accès anticipé — les places se remplissent vite',
      emailPlaceholder: 'vous@email.com',
      submit: 'Réserver ma place',
      submitting: 'Envoi…',
      privacyNote:
        'En vous inscrivant, vous acceptez nos conditions et notre politique de confidentialité. Jamais de spam, promis.',
      success: 'Vous êtes inscrit ! Nous vous écrirons dès que votre place sera prête.',
    },
    airportsHubTitle: 'Aéroports populaires',
    airportsHubAll: 'Voir tous les aéroports',
    betaReferralBanner:
      'Une fois inscrit, vous recevrez un lien d\'invitation personnel — partagez-le pour avancer dans la file d\'attente.',
    features: {
      title: 'Tout ce qu\'il faut pour covoiturer en toute confiance',
      subtitle:
        'De la recherche d\'un compagnon de route au partage de l\'addition : chaque fonctionnalité rend le partage simple, et sûr.',
      items: [
        {
          title: 'Associé par vol, jamais par hasard',
          description:
            'Nous vous associons par numéro de vol et date, pour que vous voyagiez toujours avec des gens de votre vol — jamais avec des inconnus au hasard.',
          iconName: 'bolt',
        },
        {
          title: 'Le partage des coûts, automatique',
          description:
            'L\'app calcule la part de chacun, pour que personne n\'ait à sortir la calculatrice.',
          iconName: 'sparkles',
        },
        {
          title: 'Votre vrai nom reste privé',
          description:
            'Les autres voyageurs ne voient que votre pseudo et votre note — jamais votre vrai nom, votre numéro ou vos documents.',
          iconName: 'lock',
        },
        {
          title: 'Vérifié avant de vous associer',
          description:
            'Chaque voyageur confirme son e-mail, et peut aussi vérifier son numéro de téléphone, pour que vous sachiez toujours à qui vous parlez.',
          iconName: 'shield',
        },
        {
          title: 'Des avis venant de vrais trajets partagés',
          description:
            'Chaque avis et commentaire vient d\'un vol que cette personne a vraiment partagé avec vous — jamais inventé.',
          iconName: 'users',
        },
        {
          title: 'Signalez ou bloquez en un geste',
          description:
            'Si quelque chose vous semble louche, vous pouvez signaler ou bloquer un voyageur instantanément, sans justification.',
          iconName: 'flag',
        },
        {
          title: 'Un chat qui fonctionne même en plein vol',
          description:
            'Restez en contact avec votre groupe avant l\'embarquement, hors ligne pendant le vol, et après l\'atterrissage — tout se synchronise automatiquement.',
          iconName: 'chat',
        },
        {
          title: 'Retrouvez-vous à l\'arrivée',
          description:
            'Ouvrez l\'app dès l\'atterrissage et retrouvez vos compagnons de route à la porte en un geste.',
          iconName: 'pin',
        },
        {
          title: 'Vous rentrez chez vous ? Obtenez le badge local',
          description:
            'Si vous rentrez dans votre propre ville, on vous identifie comme local — pratique pour les voyageurs qui cherchent un conseil pour rejoindre le centre.',
          iconName: 'globe',
        },
      ],
    },
    value: {
      eyebrow: 'Pourquoi on nous rejoint',
      title: 'Un trajet, trois bonnes raisons',
      subtitle:
        'Cojauny réunit de vraies économies, un vrai confort et une vraie tranquillité d\'esprit — vous choisissez toujours avec qui voyager.',
      items: [
        {
          title: 'Vous économisez, pour de vrai',
          description:
            'Partager un taxi ou un transfert avec d\'autres passagers coûte une fraction du prix payé seul.',
        },
        {
          title: 'Associé par vol, jamais par hasard',
          description:
            'Vous ne voyagez qu\'avec des personnes de votre vol et terminal — jamais avec un inconnu croisé dans la rue.',
        },
        {
          title: 'Vérifié, et noté',
          description:
            'Chaque profil est vérifié, et les avis sont visibles avant que vous confirmiez quoi que ce soit — son vrai nom, lui, ne sera jamais visible que par Cojauny.',
        },
        {
          title: 'Aucune surprise le jour J',
          description:
            'Lieu de rendez-vous, horaire et répartition des coûts sont réglés dans l\'app avant même de partir de chez vous.',
        },
      ],
    },
    savings: {
      title: 'Économisez jusqu\'à 75% sur votre prochain trajet aéroport',
      caption:
        'Partager le trajet avec des voyageurs vérifiés de votre vol est le moyen le plus simple de réduire la facture. Voici les objectifs vers lesquels nous travaillons pendant la bêta.',
      metrics: [
        {
          value: '50-75%',
          label: 'Économies par trajet',
          description: 'Ce que vous pouvez économiser en partageant un taxi ou un transfert plutôt que d\'y aller seul.'
        },
        {
          value: '180+',
          label: 'Aéroports',
          description: 'Nous couvrons les principaux hubs d\'Europe, des Amériques et du Moyen-Orient.',
        },
        {
          value: '50 000+',
          label: 'Voyageurs attendus',
          description: 'Notre objectif pour constituer un réseau assez grand pour trouver des correspondances même sur les lignes très fréquentées.'
        },
        {
          value: '1 000+ t',
          label: 'CO₂ évité',
          description: 'L\'impact estimé quand plus de monde partage une voiture au lieu de voyager seul.'
        }
      ]
    },
    workflow: {
      title: 'Du numéro de vol au trajet partagé en 5 étapes',
      intro: 'Vérifiez votre profil une seule fois — ensuite, il ne reste qu\'à trouver un compagnon de route, s\'organiser et voyager, avec quelques contrôles de sécurité au passage.',
      steps: [
        {
          title: '1. Créez votre profil',
          description: 'Inscrivez-vous et vérifiez votre identité une fois. C\'est tout, vous pouvez commencer à chercher un trajet.',
        },
        {
          title: '2. Ajoutez votre vol',
          description: 'Indiquez votre numéro de vol et la date : on crée aussitôt un groupe et un chat rien que pour votre trajet.',
        },
        {
          title: '3. Choisissez votre compagnon de route',
          description: 'Comparez les profils et les avis, puis décidez avec qui voyager.',
        },
        {
          title: '4. Réglez les détails',
          description: 'Mettez-vous d\'accord sur le lieu de rendez-vous, l\'horaire et la répartition des coûts dans le chat — il continue même hors ligne pendant le vol.',
        },
        {
          title: '5. Voyagez, puis notez',
          description: 'Une fois posé, ouvrez l\'app pour vous retrouver en un geste, faites le trajet, puis laissez un avis rapide.',
        },
      ],
    },
    mockups: {
      heading: 'Voyez exactement avec qui vous voyageriez',
      description:
        'Vol, profil et avis précédents — tout est visible dans l\'app avant de confirmer quoi que ce soit.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Matching',
          title: 'Votre vol, vos compagnons de route',
          description:
            'Entrez votre numéro de vol et voyez qui d\'autre est du voyage — pas de hasard.',
          image: '/images/mockups/fr/mockup-flight-search.svg'
        },
        {
          id: 'profile',
          badge: 'Profil',
          title: 'Un profil digne de confiance',
          description:
            'Identité vérifiée, note moyenne et commentaires des trajets précédents.',
          image: '/images/mockups/fr/mockup-profile.svg'
        },
        {
          id: 'event-detail',
          badge: 'Détail',
          title: 'Rien de caché',
          description:
            'Qui organise, qui vient, où se retrouver et combien ça coûte — tout est affiché à l\'avance.',
          image: '/images/mockups/fr/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'On se parle avant de se voir',
          description:
            'Coordonnez-vous avec votre groupe dans l\'app, sans donner votre numéro.',
          image: '/images/mockups/fr/mockup-chat.svg'
        },
        {
          id: 'events-list',
          badge: 'Options',
          title: 'Choisissez ce qui vous arrange',
          description:
            'Consultez tous les trajets disponibles pour votre vol, places et participants en temps réel.',
          image: '/images/mockups/fr/mockup-events-list.svg'
        },
        {
          id: 'impact',
          badge: 'Résultat',
          title: 'Regardez vos économies grandir',
          description:
            'Suivez combien vous avez économisé, trajet après trajet.',
          image: '/images/mockups/fr/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Prêt à payer moins cher votre prochain trajet aéroport ?',
      body: 'Rejoignez la bêta Cojauny : trouvez des voyageurs de votre vol, partagez le trajet et voyagez avec quelqu\'un de confiance.',
      link: '#beta',
      linkLabel: 'Réserver ma place'
    },
    pricing: {
      title: 'Des tarifs simples, quand vous serez prêt',
      subtitle: 'Commencez gratuitement. Passez à Premium seulement si vous en avez vraiment besoin.',
      plans: {
        free: {
          name: 'Free',
          price: 'Gratuit',
          description: 'Gérez un vol et un événement à la fois, sans limite sur le nombre total de trajets.',
          cta: 'Commencer gratuitement'
        },
        premium: {
          name: 'Premium',
          price: '4,99 €/mois',
          description: 'Gérez plusieurs vols et événements en même temps, avec chat de groupe, statistiques détaillées et support prioritaire. 49 €/an (17% d\'économie).',
          cta: 'Passer à Premium'
        }
      },
      comparison: {
        title: 'Ce qui est inclus',
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
      subtitle: 'Nous répondons à vos questions sur Cojauny',
      items: [
        {
          question: 'Comment fonctionne le matching par vol ?',
          answer: 'Indiquez simplement votre numéro de vol et la date. Nous vérifions notre base de données en temps réel et vous mettons en relation avec d\'autres voyageurs de votre vol, ou d\'un vol compatible au même aéroport et à la même heure.'
        },
        {
          question: 'Est-ce sûr de voyager avec des gens que je ne connais pas ?',
          answer: 'Oui. Chacun vérifie son e-mail (et peut aussi vérifier son numéro de téléphone) avant de rejoindre, et vous pouvez consulter le profil public de chaque voyageur — avis, commentaires, réputation — avant de confirmer quoi que ce soit. Ce profil n\'affiche qu\'un pseudo, jamais le vrai nom : votre identité complète reste connue de Cojauny en interne, en cas de besoin pour la sécurité ou le suivi légal, mais elle n\'est jamais partagée avec les autres utilisateurs. La coordination se fait via un chat sécurisé dans l\'app, vous n\'avez donc jamais à partager votre numéro.',
        },
        {
          question: 'Quelles informations les autres voyageurs voient-ils de moi ?',
          answer: 'Seulement votre pseudo, votre photo de profil (si vous choisissez d\'en ajouter une) et votre note moyenne. Votre vrai nom, votre numéro et vos documents de vérification ne sont jamais montrés aux autres utilisateurs — ils restent chez Cojauny, visibles uniquement en interne pour la sécurité et la traçabilité légale. Partager votre numéro de siège reste, lui aussi, toujours facultatif.',
        },
        {
          question: 'Et si je rentre dans ma propre ville ?',
          answer: 'Encore mieux : on vous attribue le badge « retour à la maison », pour que les autres voyageurs de votre vol sachent que vous connaissez le coin et puissent vous demander des conseils pour rejoindre le centre. Vous pouvez quand même partager le trajet, ou juste donner un coup de main.',
        },
        {
          question: 'Puis-je annuler ma participation sans pénalité ?',
          answer: 'Oui, sans engagement. Vous pouvez quitter n\'importe quel événement depuis l\'app, sans frais. En tant qu\'organisateur, le groupe est prévenu instantanément pour pouvoir se réorganiser. Essayez juste de prévenir le plus tôt possible.'
        },
        {
          question: 'Comment se répartissent les coûts entre les participants ?',
          answer: 'L\'app calcule automatiquement une répartition équitable et montre à tout le monde l\'économie estimée avant le trajet. Nous ne gérons pas les paiements nous-mêmes, alors réglez-vous comme vous voulez — espèces, virement, PayPal, ce qui vous arrange.'
        },
        {
          question: 'Quels types d\'événements puis-je créer ou rejoindre ?',
          answer: 'Trajets partagés vers l\'aéroport, prises en charge à l\'arrivée, navettes pour équipes, voitures privées partagées, hébergement partagé, ou même une sortie après l\'atterrissage. Les utilisateurs Premium peuvent créer des événements personnalisés pour tout le reste.'
        },
        {
          question: 'Dans quels aéroports Cojauny est-il disponible ?',
          answer: 'Nous lançons dans les principaux aéroports d\'Europe, des Amériques et du Moyen-Orient — dont Madrid, Barcelone, Londres-Heathrow, Paris-CDG et New York-JFK. Le vôtre n\'y est pas ? Demandez-le depuis Paramètres → Demander un aéroport.'
        },
        {
          question: 'Que se passe-t-il si mon vol est retardé, annulé ou change de porte ?',
          answer: 'Nous suivons votre vol en temps réel. Si quelque chose change, tout le groupe est prévenu instantanément, et vous pouvez ajuster l\'heure ou le lieu de rendez-vous — ou annuler l\'événement — en un geste.'
        },
        {
          question: 'Quelle est la différence entre Free et Premium ?',
          answer: 'Free vous permet de gérer 1 vol et 1 événement actifs à la fois — ce n\'est pas une limite totale, puisque vous pouvez en ajouter un autre dès qu\'un trajet est terminé. Premium ajoute plusieurs vols et événements en même temps, le chat de groupe complet, des statistiques détaillées et un support prioritaire, pour 4,99 €/mois ou 49 €/an.'
        },
        {
          question: 'Combien puis-je vraiment économiser avec Cojauny ?',
          answer: 'En moyenne, 50 à 75% par rapport à un trajet en solo. Un transfert à 30 € revient par exemple à environ 8 € par personne en le partageant avec trois autres passagers — soit 500 à 600 € par an pour quelqu\'un qui prend l\'avion deux fois par mois.'
        },
        {
          question: 'Que se passe-t-il après mon inscription sur la liste d\'attente ?',
          answer: 'Vous recevez immédiatement un e-mail de confirmation, ainsi que votre propre lien d\'invitation pour avancer dans la file. Dès qu\'une place se libère pour vous, nous vous écrivons avec tout ce qu\'il faut pour votre premier trajet partagé.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Réservez votre place dans la bêta Cojauny',
        subheading: 'Soyez parmi les premiers à partager des trajets aéroport vérifiés — quelques avantages vous attendent en tant que membre fondateur.',
        title: 'Demander l\'accès Bêta',
        description:
          'Accès prioritaire, profil vérifié, badge fondateur et contact direct avec notre équipe.',
        success:
          'Vous êtes sur la liste ! Nous vous écrirons dès que votre accès sera prêt.',
        error: 'Un problème est survenu de notre côté — réessayez dans un instant.',
        duplicateError:
          'Il semble que vous soyez déjà sur la liste. Nous vous recontactons bientôt.',
        submit: 'Réserver ma place',
        checkboxLabel: 'J\'ai lu et j\'accepte la {privacyLink} de Cojauny.',
        privacyLinkLabel: 'politique de confidentialité',
        referralNotice:
          'Après inscription, vous recevrez un lien à partager. Nous comptons uniquement les visites et inscriptions pour vous faire avancer dans la liste — vos données ne sont jamais partagées avec des tiers.',
        optionalLabel: '(facultatif)',
        optionalHint: 'Tout ce qui est marqué "(facultatif)" peut être laissé vide.',
        fields: {
          fullName: 'Nom complet',
          email: 'Adresse e-mail',
          country: 'Pays',
          homeAirport: 'Ville ou aéroport habituel',
          flightFrequency: 'À quelle fréquence prenez-vous l\'avion ?',
          useCase: 'Qu\'aimeriez-vous faire avec Cojauny ?',
          updatesOptIn: 'Tenez-moi informé des nouveautés',
          privacyAcceptance: 'J\'accepte que mes données soient conservées pour participer à la bêta de Cojauny.'
        },
        placeholders: {
          homeAirport: 'Ex. Paris (CDG), Lyon',
          useCase: 'Dites-nous en quelques mots comment vous l\'utiliseriez'
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
          { value: 'once', label: '1x par an', description: 'Vacances ou trajet occasionnel' },
          {
            value: 'two_to_five',
            label: '2–5x par an',
            description: 'Vous voyagez assez régulièrement'
          },
          {
            value: 'six_to_ten',
            label: '6–10x par an',
            description: 'L\'aéroport, vous connaissez'
          },
          {
            value: 'more_than_ten',
            label: '10+x par an',
            description: 'Vous vivez presque avec une valise à la main'
          }
        ]
      },
      feedback: {
        heading: 'Une idée à partager ? On vous écoute',
        subheading: 'Idées, bugs, propositions professionnelles... dites-nous tout.',
        title: 'Envoyez-nous un message',
        description:
          'Vous gérez des transferts réguliers ou avez un partenariat en tête ? Parlez-nous-en, ou écrivez à feedback@cojauny.com.',
        success: 'Bien reçu, merci ! Nous revenons vers vous si besoin.',
        error: 'Vérifiez votre message et réessayez.',
        submit: 'Envoyer le message',
        optionalLabel: '(facultatif)',
        optionalHint: 'Tous les champs sont obligatoires sauf mention "(facultatif)".',
        fields: {
          fullName: 'Nom',
          email: 'E-mail',
          message: 'Votre message',
          useCase: 'Type',
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
      title: 'Nous vous écrirons dès l\'ouverture de la bêta',
      subtitle: 'En attendant, partagez votre lien pour avancer dans la liste.',
      yourLink: 'Votre lien d\'invitation',
      copyButton: 'Copier le lien',
      copiedButton: 'Copié !',
      stats: {
        visits: 'Visites',
        signups: 'Inscriptions'
      },
      instructions: {
        title: 'Comment ça marche',
        step1: 'Partagez votre lien avec vos amis, collègues, ou sur les réseaux sociaux.',
        step2: 'Chaque visite via votre lien compte, de façon anonyme.',
        step3: 'Chaque inscription vous fait avancer dans la file d\'attente.'
      },
      privacy:
        'Nous comptons uniquement les visites et inscriptions — aucune donnée personnelle n\'est collectée sur les personnes qui cliquent sur votre lien.',
      privacyLabel: 'À savoir :'
    },
    cookie: {
      message:
        'Nous utilisons quelques cookies essentiels pour faire fonctionner le site, et des cookies analytiques optionnels pour l\'améliorer. Votre choix est conservé 12 mois.',
      acceptAll: 'Tout accepter',
      reject: 'Essentiels uniquement',
      customize: 'Personnaliser',
      savePreferences: 'Enregistrer les préférences',
      essentialLabel: 'Essentiels',
      essentialDescription: 'Nécessaires pour des choses simples comme la sécurité et la mémorisation de votre langue.',
      analyticsLabel: 'Analytiques',
      analyticsDescription: 'Nous aident à comprendre ce qui fonctionne et à améliorer la bêta.',
      alwaysOn: 'Toujours actifs',
      moreInfo: 'En savoir plus'
    },
    footer: {
      description: 'Nous rendons le trajet vers l\'aéroport plus simple, moins cher et plus sûr. Ensemble.',
      rights: 'Tous droits réservés.',
      appStoreSoon: 'App Store (bientôt)',
      playStoreSoon: 'Google Play (bientôt)',
      privacy: 'Politique de confidentialité',
      cookies: 'Politique de cookies',
      terms: 'Conditions d\'utilisation',
      accountDeletion: 'Supprimer mon compte',
      acceptableUse: 'Utilisation acceptable',
      faq: 'Questions fréquentes',
      subprocessors: 'Sous-traitants',
      contact: 'Contact',
      blog: 'Blog',
      languageLabel: 'Langue',
      madeInEurope: 'Fabriqué en Europe.'
    }
  }
};

export function getLandingCopy(locale: Locale): LandingCopy {
  return landingCopy[locale] ?? landingCopy[defaultLocale];
}
