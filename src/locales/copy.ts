import type { Locale } from './config';
import { defaultLocale } from './config';

export type IconName =
  | 'bolt'
  | 'users'
  | 'chat'
  | 'shield'
  | 'sparkles'
  | 'globe'
  | 'lock'
  | 'flag'
  | 'pin';

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
      feedback: 'Feedback',
    },
    seo: {
      title: 'Cojauny | Comparte el taxi del aeropuerto con viajeros de tu vuelo',
      description:
        'Conecta con viajeros de tu vuelo, organiza el traslado y reparte el coste del taxi. Descubre Cojauny y apúntate a la lista de acceso a la beta.',
      keywords: [
        'compartir taxi aeropuerto',
        'traslado aeropuerto compartido',
        'viajeros mismo vuelo',
        'ahorrar taxi aeropuerto',
      ],
      ogTitle: 'Tu vuelo. Tu gente. Un traslado compartido.',
      ogDescription:
        'Organiza el trayecto con otros viajeros y comparte el coste del taxi. Apúntate a la beta de Cojauny.',
    },
    hero: {
      eyebrow: 'Traslados compartidos · Acceso beta',
      title: 'Comparte el taxi del aeropuerto con gente de tu vuelo',
      subtitle:
        'El viaje no termina al aterrizar. Cojauny te ayuda a conectar con otros pasajeros, acordar el traslado y repartir el coste. Organízalo antes de volar y llega con un plan.',
      primaryCta: 'Apuntarme a la beta',
      secondaryCta: 'Así funciona Cojauny',
      imageAlt: 'Vista previa de la búsqueda de compañeros de vuelo en Cojauny',
      trustSignals: [
        'Conecta por vuelo',
        'Coordina en el chat',
        'Tú eliges con quién ir',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Un mismo taxi. Un coste compartido.',
        subtitle:
          'Un traslado de 40 € entre cuatro personas sale a 10 € por persona si el precio no cambia. Cojauny te ayuda a encontrar compañeros de vuelo para organizarlo.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Apuntarme a la lista de acceso a la beta de Cojauny',
      label: 'Recibe un aviso cuando puedas acceder a la beta',
      emailPlaceholder: 'tu@email.com',
      submit: 'Apuntarme a la beta',
      submitting: 'Enviando…',
      privacyNote:
        'Al apuntarte, aceptas los términos y la política de privacidad. Te avisaremos por email sobre tu acceso.',
      success: '¡Estás en la lista! Te avisaremos por email cuando tengas acceso.',
    },
    airportsHubTitle: 'Aeropuertos destacados',
    airportsHubAll: 'Ver todos los aeropuertos',
    betaReferralBanner:
      'Invita a otros viajeros con tu enlace personal y ayuda a que más personas encuentren compañeros de vuelo.',
    features: {
      title: 'Menos mensajes sueltos. Más viaje organizado.',
      subtitle:
        'Encuentra compañeros, acuerda los detalles y mantén el control de lo que compartes.',
      items: [
        {
          title: 'Encuentra compañeros de vuelo',
          description:
            'Añade el número y la fecha de tu vuelo para buscar otros viajeros con los que coordinar el traslado.',
          iconName: 'bolt',
        },
        {
          title: 'Aclara el coste antes de salir',
          description:
            'Consulta el reparto estimado y acuerda cómo pagar con el grupo. Cojauny no procesa el pago del traslado.',
          iconName: 'sparkles',
        },
        {
          title: 'Conserva tu privacidad',
          description:
            'Usa tu alias para conectar con otros viajeros sin publicar tu teléfono ni tus documentos.',
          iconName: 'lock',
        },
        {
          title: 'Revisa el perfil',
          description:
            'Consulta la información del perfil y su verificación de email. Verificar un email no equivale a verificar una identidad.',
          iconName: 'shield',
        },
        {
          title: 'Consulta las valoraciones',
          description:
            'Las experiencias de viajes anteriores te ayudan a decidir con quién organizar el trayecto.',
          iconName: 'users',
        },
        {
          title: 'Bloquea y denuncia',
          description:
            'Si una interacción te incomoda, utiliza las opciones de bloqueo y denuncia desde la app.',
          iconName: 'flag',
        },
        {
          title: 'Habla antes de aterrizar',
          description:
            'Coordina el traslado en el chat de la app sin tener que compartir tu número de teléfono.',
          iconName: 'chat',
        },
        {
          title: 'Acordad dónde encontraros',
          description:
            'Definid un punto de encuentro claro y revisad los detalles antes de salir de la terminal.',
          iconName: 'pin',
        },
        {
          title: 'Conecta con quien conoce la zona',
          description:
            'La insignia de local ayuda a identificar viajeros que vuelven a su ciudad y pueden compartir consejos.',
          iconName: 'globe',
        },
      ],
    },
    value: {
      eyebrow: 'Tu próximo traslado, mejor pensado',
      title: 'Comparte el trayecto. Simplifica la llegada.',
      subtitle:
        'Para quien viaja solo, vuelve a casa o quiere organizarse con tiempo: un mismo vuelo es un buen punto de partida.',
      items: [
        {
          title: 'Reparte el coste',
          description:
            'Compartir un taxi puede reducir lo que paga cada persona. El ahorro depende de la tarifa, la ruta y el tamaño del grupo.',
        },
        {
          title: 'Encuentra gente con el mismo plan',
          description:
            'Busca compañeros de vuelo sin depender de publicaciones antiguas o de improvisar al salir de la terminal.',
        },
        {
          title: 'Decide con información',
          description:
            'Revisa perfiles y valoraciones antes de aceptar. Tú decides con quién viajar y qué información compartir.',
        },
        {
          title: 'Llega con los detalles acordados',
          description:
            'Hablad del destino, el equipaje, el punto de encuentro y el coste antes del traslado.',
        },
      ],
    },
    savings: {
      title: 'Lo que cambia cuando compartes el coste',
      caption:
        'Ejemplo ilustrativo: un taxi de 40 €, con la misma tarifa y ruta, dividido a partes iguales. No son precios reales ni ahorros garantizados; consulta suplementos, equipaje y capacidad del vehículo.',
      metrics: [
        {
          value: '40 €',
          label: 'Si viajas solo',
          description: 'Una persona paga el coste completo del trayecto de este ejemplo.',
        },
        {
          value: '20 €',
          label: 'Entre dos personas',
          description: 'Cada una paga la mitad: 20 € menos que viajando sola.',
        },
        {
          value: '10 €',
          label: 'Entre cuatro personas',
          description: 'Cada una paga una cuarta parte: un 75 % menos en este ejemplo.',
        },
        {
          value: 'Tú eliges',
          label: 'Con quién compartir',
          description:
            'Acuerda la ruta y el reparto con el grupo antes de confirmar el traslado.',
        },
      ],
    },
    workflow: {
      title: 'De tu vuelo a un traslado organizado',
      intro:
        'Cinco pasos para encontrar compañeros y acordar el viaje. La disponibilidad depende de los viajeros que se unan a tu vuelo.',
      steps: [
        {
          title: '1. Crea tu perfil',
          description:
            'Regístrate, confirma tu email y elige la información que quieres mostrar.',
        },
        {
          title: '2. Añade tu vuelo',
          description:
            'Introduce el número de vuelo y la fecha para buscar compañeros de viaje.',
        },
        {
          title: '3. Elige con quién ir',
          description:
            'Revisa perfiles y valoraciones, y conecta con viajeros que encajen con tu plan.',
        },
        {
          title: '4. Acordad los detalles',
          description:
            'Usa el chat para concretar destino, equipaje, punto de encuentro y reparto del coste.',
        },
        {
          title: '5. Comparte y valora',
          description:
            'Encontraos, realizad el traslado y deja una valoración de la experiencia.',
        },
      ],
    },
    mockups: {
      heading: 'Así se organiza el viaje en Cojauny',
      description:
        'Una vista previa del recorrido: desde añadir el vuelo hasta consultar el ahorro. Las pantallas ilustran la experiencia prevista para la beta.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Tu vuelo',
          title: 'Empieza por lo que ya tienes: tu vuelo',
          description:
            'Añade número y fecha para buscar viajeros con los que compartir el traslado.',
          image: '/images/mockups/es/mockup-flight-search.svg',
        },
        {
          id: 'profile',
          badge: 'Perfil',
          title: 'Conoce el perfil antes de decidir',
          description: 'Revisa la información pública y las valoraciones disponibles.',
          image: '/images/mockups/es/mockup-profile.svg',
        },
        {
          id: 'event-detail',
          badge: 'Traslado',
          title: 'Los detalles, en un solo lugar',
          description:
            'Consulta participantes, punto de encuentro y coste estimado del plan.',
          image: '/images/mockups/es/mockup-event-detail.svg',
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Hablad antes de llegar',
          description: 'Coordina con el grupo sin publicar tu número de teléfono.',
          image: '/images/mockups/es/mockup-chat.svg',
        },
        {
          id: 'events-list',
          badge: 'Planes',
          title: 'Elige el plan que encaja contigo',
          description: 'Compara los eventos disponibles para tu vuelo antes de unirte.',
          image: '/images/mockups/es/mockup-events-list.svg',
        },
        {
          id: 'impact',
          badge: 'Ahorro',
          title: 'Consulta tu ahorro',
          description: 'Revisa el ahorro registrado en tus trayectos compartidos.',
          image: '/images/mockups/es/mockup-impact.svg',
        },
      ],
    },
    ctaStrip: {
      heading: 'Empieza a organizar tu próxima llegada',
      body: 'Apúntate a la lista de la beta. Te avisaremos cuando tengas acceso para probar Cojauny y ayudarnos a mejorar los traslados compartidos.',
      link: '#beta',
      linkLabel: 'Apuntarme a la beta',
    },
    pricing: {
      title: 'Precios simples, cuando estés listo',
      subtitle:
        'Empieza gratis. Pasa a Premium solo si vuelas lo suficiente para necesitarlo.',
      plans: {
        free: {
          name: 'Free',
          price: 'Gratis',
          description:
            'Gestiona un vuelo y un evento a la vez, sin límite en el número total de viajes.',
          cta: 'Empezar gratis',
        },
        premium: {
          name: 'Premium',
          price: '4,99 €/mes',
          description:
            'Gestiona varios vuelos y eventos a la vez, con chat grupal, estadísticas detalladas y soporte prioritario. 49 €/año (ahorras un 17%).',
          cta: 'Pasar a Premium',
        },
      },
      comparison: {
        title: 'Qué incluye cada plan',
        features: [
          {
            feature: 'Vuelos activos simultáneos',
            free: '1',
            premium: 'Ilimitados',
          },
          {
            feature: 'Eventos activos simultáneos',
            free: '1',
            premium: 'Ilimitados',
          },
          {
            feature: 'Crear nuevos eventos',
            free: false,
            premium: true,
          },
          {
            feature: 'Chat con organizador',
            free: true,
            premium: true,
          },
          {
            feature: 'Chat grupal completo',
            free: false,
            premium: true,
          },
          {
            feature: 'Eventos recurrentes',
            free: false,
            premium: true,
          },
          {
            feature: 'Estadísticas detalladas',
            free: 'Básicas',
            premium: 'Avanzadas',
          },
          {
            feature: 'Soporte prioritario',
            free: false,
            premium: true,
          },
          {
            feature: 'Insignia Premium',
            free: false,
            premium: true,
          },
        ],
      },
    },
    faq: {
      title: 'Antes de compartir, resuelve tus dudas',
      subtitle:
        'Qué hace Cojauny, cómo se organiza el traslado y qué esperar de la beta.',
      items: [
        {
          question: '¿Qué es Cojauny?',
          answer:
            'Una app para conectar con otros viajeros de tu vuelo y coordinar planes como compartir un taxi del aeropuerto. Los participantes acuerdan el traslado y el pago; Cojauny no es un operador de transporte.',
        },
        {
          question: '¿Puedo usar la app al apuntarme?',
          answer:
            'El registro te añade a la lista de acceso a la beta. Te avisaremos por email cuando tengas acceso. Apuntarte no garantiza acceso inmediato ni compañeros para un vuelo concreto.',
        },
        {
          question: '¿Cómo encuentro compañeros?',
          answer:
            'Añade el número y la fecha de tu vuelo para buscar otros viajeros. La disponibilidad depende de quién se haya unido; revisa que el destino y los horarios del grupo encajen contigo.',
        },
        {
          question: '¿Cuánto puedo ahorrar?',
          answer:
            'Depende del precio final y del número de personas. Si un taxi cuesta 40 € y la tarifa no cambia, dos personas pagan 20 € cada una y cuatro pagan 10 €. Comprueba suplementos, equipaje, capacidad y posibles desvíos.',
        },
        {
          question: '¿Cojauny cobra o reserva el taxi?',
          answer:
            'Cojauny ayuda a coordinar el grupo y a calcular el reparto. No procesa los pagos del traslado. Acordad cómo contratar y pagar el transporte antes de viajar.',
        },
        {
          question: '¿Cómo decido si viajar con alguien?',
          answer:
            'Revisa el perfil y las valoraciones disponibles, habla con la persona y decide por ti mismo. La verificación de email no garantiza la identidad ni la seguridad del viaje. Puedes bloquear o denunciar una interacción.',
        },
        {
          question: '¿Qué información ven otros viajeros?',
          answer:
            'Tu alias, la foto que decidas añadir y las valoraciones de tu perfil. Tu nombre real, teléfono y documentos de verificación no se muestran en el perfil público. Evita publicar información sensible en el chat.',
        },
        {
          question: '¿Puedo organizarme antes de volar?',
          answer:
            'Sí, puedes añadir el vuelo y coordinar los detalles con antelación. Envía los mensajes cuando tengas conexión; acuerda el punto de encuentro antes de embarcar.',
        },
        {
          question: '¿Qué pasa si cambian mis planes?',
          answer:
            'Avisa al grupo cuanto antes y actualiza los detalles o sal del evento desde la app. Revisa por separado las condiciones de cancelación del transporte que hayáis contratado.',
        },
        {
          question: '¿Funciona en mi aeropuerto?',
          answer:
            'Consulta las páginas de aeropuertos y añade el tuyo al registrarte. Tener una página de aeropuerto no garantiza que haya un grupo disponible para tu vuelo.',
        },
        {
          question: '¿Qué diferencia hay entre Free y Premium?',
          answer:
            'Free permite un vuelo y un evento activos a la vez. Premium amplía las opciones para quienes viajan más. Consulta los planes y las condiciones disponibles cuando recibas acceso; la beta puede evolucionar.',
        },
        {
          question: '¿Para qué sirve mi enlace de invitación?',
          answer:
            'Tras el registro, el enlace personal te permite invitar a otros viajeros. Sus visitas y registros ayudan a dar prioridad a tu acceso. Te avisaremos por email cuando puedas entrar.',
        },
      ],
    },
    forms: {
      beta: {
        heading: 'Tu próximo traslado empieza aquí',
        subheading:
          'Apúntate a la lista de acceso. Te avisaremos cuando puedas probar la beta de Cojauny.',
        title: 'Apúntate a la beta',
        description:
          'Completa tus datos de contacto. Los campos opcionales nos ayudan a conocer tus rutas y a preparar la beta.',
        success:
          '¡Ya estás en la lista! Te escribiremos por email en cuanto tengas acceso.',
        error: 'Algo ha fallado por nuestra parte — inténtalo de nuevo en un momento.',
        duplicateError: 'Parece que ya estás en la lista. Te contactaremos pronto.',
        submit: 'Apuntarme a la beta',
        checkboxLabel: 'He leído y acepto la {privacyLink} de Cojauny.',
        privacyLinkLabel: 'política de privacidad',
        referralNotice:
          'Al registrarte recibirás un enlace para invitar a otros. Solo contamos visitas y registros para darte prioridad — nunca compartimos tus datos con terceros.',
        optionalLabel: '(opcional)',
        optionalHint:
          'Los campos marcados como "(opcional)" te los puedes saltar sin problema.',
        fields: {
          fullName: 'Nombre completo',
          email: 'Correo electrónico',
          country: 'País',
          homeAirport: 'Ciudad o aeropuerto habitual',
          flightFrequency: '¿Con qué frecuencia vuelas?',
          useCase: '¿Para qué te gustaría usar Cojauny?',
          updatesOptIn: 'Avísame de las novedades',
          privacyAcceptance:
            'Acepto que se guarden mis datos para participar en la beta.',
        },
        placeholders: {
          homeAirport: 'Ej. Madrid (MAD), CDMX',
          useCase: 'Cuéntanos un poco cómo lo usarías',
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
          { value: 'other', label: 'Otro país' },
        ],
        flightFrequencyOptions: [
          {
            value: 'once',
            label: '1 vez al año',
            description: 'Vacaciones o algún viaje suelto',
          },
          {
            value: 'two_to_five',
            label: '2–5 veces al año',
            description: 'Viajas con cierta regularidad',
          },
          {
            value: 'six_to_ten',
            label: '6–10 veces al año',
            description: 'El aeropuerto ya te resulta familiar',
          },
          {
            value: 'more_than_ten',
            label: '+10 veces al año',
            description: 'Prácticamente vives con la maleta hecha',
          },
        ],
      },
      feedback: {
        heading: 'Ayúdanos a mejorar tu próximo viaje',
        subheading: 'Comparte una idea, una duda o una propuesta de colaboración.',
        title: 'Envíanos un mensaje',
        description:
          '¿Qué haría más fácil tu traslado? Escríbenos aquí o a feedback@cojauny.com.',
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
          selectPlaceholder: 'Selecciona una opción',
        },
        caseOptions: [
          { value: 'feedback', label: 'Feedback de producto' },
          { value: 'idea', label: 'Nueva idea' },
          { value: 'business_proposal', label: 'Propuesta comercial' },
        ],
      },
    },
    referralPanel: {
      title: 'Te avisaremos en cuanto se abra la beta',
      subtitle: 'Mientras tanto, comparte tu enlace y sube puestos en la lista.',
      yourLink: 'Tu enlace de invitación',
      copyButton: 'Copiar enlace',
      copiedButton: '¡Copiado!',
      stats: {
        visits: 'Visitas',
        signups: 'Registros',
      },
      instructions: {
        title: 'Cómo funciona',
        step1: 'Comparte tu enlace con amigos, compañeros o en redes sociales.',
        step2: 'Cada visita a través de tu enlace cuenta, de forma anónima.',
        step3: 'Cada registro te hace subir puestos en la lista.',
      },
      privacy:
        'Solo contamos visitas y registros — no recogemos datos personales de quien hace clic en tu enlace.',
      privacyLabel: 'Un apunte:',
    },
    cookie: {
      message:
        'Usamos algunas cookies esenciales para que la web funcione, y otras de análisis opcionales para mejorarla. Tu elección se guarda 12 meses.',
      acceptAll: 'Aceptar todas',
      reject: 'Solo esenciales',
      customize: 'Personalizar',
      savePreferences: 'Guardar preferencias',
      essentialLabel: 'Esenciales',
      essentialDescription:
        'Necesarias para cosas básicas como la seguridad y recordar tu idioma.',
      analyticsLabel: 'Análisis',
      analyticsDescription: 'Nos ayudan a entender qué funciona y a mejorar la beta.',
      alwaysOn: 'Siempre activas',
      moreInfo: 'Saber más',
    },
    footer: {
      description:
        'Conecta con viajeros de tu vuelo y organiza un traslado compartido al aeropuerto.',
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
      madeInEurope: 'Hecho en Europa.',
    },
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
      feedback: 'Feedback',
    },
    seo: {
      title: 'Cojauny | Share an airport taxi with people on your flight',
      description:
        'Connect with fellow passengers, plan an airport transfer and split the taxi fare. Discover Cojauny and join the beta access list.',
      keywords: [
        'share airport taxi',
        'shared airport transfer',
        'same flight passengers',
        'split airport taxi fare',
      ],
      ogTitle: 'Your flight. Your people. One shared ride.',
      ogDescription:
        'Plan an airport ride with fellow passengers and share the fare. Join the Cojauny beta access list.',
    },
    hero: {
      eyebrow: 'Shared airport rides · Beta access',
      title: 'Share an airport taxi with people on your flight',
      subtitle:
        "Your journey doesn't end at landing. Cojauny helps you connect with fellow passengers, plan a ride and split the fare. Arrange it before you fly and arrive with a plan.",
      primaryCta: 'Join the beta list',
      secondaryCta: 'See how Cojauny works',
      imageAlt: 'Preview of finding fellow passengers in Cojauny',
      trustSignals: [
        'Connect by flight',
        'Coordinate in the app',
        'Choose your companions',
      ],
    },
    heroVariants: {
      savings: {
        title: 'One taxi. A shared fare.',
        subtitle:
          'A €40 ride split between four people costs €10 each if the fare stays the same. Cojauny helps you find fellow passengers to plan it together.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Join the Cojauny beta access list',
      label: 'Get an email when beta access is available for you',
      emailPlaceholder: 'you@email.com',
      submit: 'Join the beta list',
      submitting: 'Sending…',
      privacyNote:
        "By joining, you accept our terms and privacy policy. We'll email you about your access.",
      success: "You're on the list! We'll email you when you can access the beta.",
    },
    airportsHubTitle: 'Popular airports',
    airportsHubAll: 'See all airports',
    betaReferralBanner:
      'Invite other travellers with your personal link and help more people find companions for their flight.',
    features: {
      title: 'Less back-and-forth. A better arrival plan.',
      subtitle:
        'Find companions, agree on the details and stay in control of what you share.',
      items: [
        {
          title: 'Find fellow passengers',
          description:
            'Add your flight number and date to find other travellers to coordinate a ride with.',
          iconName: 'bolt',
        },
        {
          title: 'Agree on the fare first',
          description:
            'Check the estimated split and agree how to pay. Cojauny does not process transfer payments.',
          iconName: 'sparkles',
        },
        {
          title: 'Keep your details private',
          description:
            'Use an alias to connect without publishing your phone number or documents.',
          iconName: 'lock',
        },
        {
          title: 'Check the profile',
          description:
            'Review profile details and email verification. A verified email is not verified identity.',
          iconName: 'shield',
        },
        {
          title: 'Read travel reviews',
          description:
            'Previous shared-trip experiences help you choose who to organise a ride with.',
          iconName: 'users',
        },
        {
          title: 'Block and report',
          description:
            "Use the app's block and report options if an interaction makes you uncomfortable.",
          iconName: 'flag',
        },
        {
          title: 'Chat before you land',
          description: 'Coordinate in the app without sharing your phone number.',
          iconName: 'chat',
        },
        {
          title: 'Agree where to meet',
          description:
            'Pick a clear meeting point and review the details before leaving the terminal.',
          iconName: 'pin',
        },
        {
          title: 'Connect with local knowledge',
          description:
            'The local badge helps identify travellers returning home who can share tips.',
          iconName: 'globe',
        },
      ],
    },
    value: {
      eyebrow: 'Plan your next airport ride',
      title: 'Share the ride. Simplify the arrival.',
      subtitle:
        'Travelling solo, heading home or planning ahead? A shared flight is a useful place to start.',
      items: [
        {
          title: 'Split the fare',
          description:
            'Sharing a taxi can reduce the cost per person. Savings depend on the fare, route and group size.',
        },
        {
          title: 'Find people with a similar plan',
          description:
            'Look for fellow passengers without relying on old posts or finding someone outside the terminal.',
        },
        {
          title: 'Make an informed choice',
          description:
            'Review profiles and ratings before agreeing. Choose who to travel with and what to share.',
        },
        {
          title: 'Arrive with the details agreed',
          description:
            'Discuss the destination, luggage, meeting point and fare before your transfer.',
        },
      ],
    },
    savings: {
      title: 'What changes when you split the fare',
      caption:
        'Illustrative example: a €40 taxi ride, with the same fare and route, split equally. These are not live prices or guaranteed savings. Check surcharges, luggage and vehicle capacity.',
      metrics: [
        {
          value: '€40',
          label: 'Travelling solo',
          description: 'One person pays the full fare in this example.',
        },
        {
          value: '€20',
          label: 'Two people sharing',
          description: 'Each pays half: €20 less than travelling alone.',
        },
        {
          value: '€10',
          label: 'Four people sharing',
          description: 'Each pays a quarter: 75% less in this example.',
        },
        {
          value: 'Your choice',
          label: 'Who you travel with',
          description: 'Agree on the route and fare split before confirming the ride.',
        },
      ],
    },
    workflow: {
      title: 'From your flight to a planned airport ride',
      intro:
        'Five steps to find companions and agree on a ride. Availability depends on other travellers joining your flight.',
      steps: [
        {
          title: '1. Create your profile',
          description: 'Sign up, confirm your email and choose what information to show.',
        },
        {
          title: '2. Add your flight',
          description: 'Enter your flight number and date to look for fellow passengers.',
        },
        {
          title: '3. Choose your companions',
          description:
            'Review profiles and ratings, then connect with travellers whose plans fit yours.',
        },
        {
          title: '4. Agree on the details',
          description:
            'Use the chat to discuss destination, luggage, meeting point and fare split.',
        },
        {
          title: '5. Share and review',
          description: 'Meet up, take the ride and leave a review of the experience.',
        },
      ],
    },
    mockups: {
      heading: 'See how a trip comes together in Cojauny',
      description:
        'Preview the journey from adding a flight to checking savings. These screens illustrate the planned beta experience.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Your flight',
          title: 'Start with your flight',
          description:
            'Add the number and date to find travellers to share an airport ride with.',
          image: '/images/mockups/en/mockup-flight-search.svg',
        },
        {
          id: 'profile',
          badge: 'Profile',
          title: 'Review the profile before deciding',
          description: 'Check public information and available travel reviews.',
          image: '/images/mockups/en/mockup-profile.svg',
        },
        {
          id: 'event-detail',
          badge: 'Ride',
          title: 'The details in one place',
          description: 'See participants, meeting point and estimated cost.',
          image: '/images/mockups/en/mockup-event-detail.svg',
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Talk before you arrive',
          description: 'Coordinate without publishing your phone number.',
          image: '/images/mockups/en/mockup-chat.svg',
        },
        {
          id: 'events-list',
          badge: 'Plans',
          title: 'Choose a plan that suits you',
          description: 'Compare available events for your flight before joining.',
          image: '/images/mockups/en/mockup-events-list.svg',
        },
        {
          id: 'impact',
          badge: 'Savings',
          title: 'Check your savings',
          description: 'Review savings recorded on your shared rides.',
          image: '/images/mockups/en/mockup-impact.svg',
        },
      ],
    },
    ctaStrip: {
      heading: 'Start planning your next arrival',
      body: "Join the beta access list. We'll let you know when you can try Cojauny and help shape better shared airport rides.",
      link: '#beta',
      linkLabel: 'Join the beta list',
    },
    pricing: {
      title: "Simple pricing, whenever you're ready",
      subtitle: "Start free. Upgrade only if you're flying enough to need it.",
      plans: {
        free: {
          name: 'Free',
          price: 'Free',
          description:
            'Manage one flight and one event at a time — no cap on how many trips you take overall.',
          cta: 'Start for free',
        },
        premium: {
          name: 'Premium',
          price: '€4.99/mo',
          description:
            'Manage several flights and events at once, plus group chat, detailed stats, and priority support. €49/year (save 17%).',
          cta: 'Go Premium',
        },
      },
      comparison: {
        title: "What's included",
        features: [
          {
            feature: 'Simultaneous Active Flights',
            free: '1 at a time',
            premium: 'Unlimited',
          },
          {
            feature: 'Simultaneous Active Events',
            free: '1 at a time',
            premium: 'Unlimited',
          },
          {
            feature: 'Create New Events',
            free: false,
            premium: true,
          },
          {
            feature: 'Chat with Organizers',
            free: true,
            premium: true,
          },
          {
            feature: 'Group Chat with Participants',
            free: false,
            premium: true,
          },
          {
            feature: 'Recurring Events',
            free: false,
            premium: true,
          },
          {
            feature: 'Advanced Savings/CO₂ Stats',
            free: 'Summary',
            premium: 'Full Detail',
          },
          {
            feature: 'Priority Support',
            free: false,
            premium: true,
          },
          {
            feature: 'Premium Badge on Profile',
            free: false,
            premium: true,
          },
        ],
      },
    },
    faq: {
      title: 'A few answers before you share a ride',
      subtitle:
        'What Cojauny does, how to arrange a transfer and what to expect from the beta.',
      items: [
        {
          question: 'What is Cojauny?',
          answer:
            'An app for connecting with fellow passengers and coordinating plans such as a shared airport taxi. Participants arrange the transfer and payment; Cojauny is not a transport operator.',
        },
        {
          question: 'Can I use the app as soon as I sign up?',
          answer:
            "Signing up adds you to the beta access list. We'll email you when you can join. It does not guarantee immediate access or companions for a particular flight.",
        },
        {
          question: 'How do I find companions?',
          answer:
            "Add your flight number and date to look for fellow passengers. Availability depends on who has joined. Check that the group's destination and timing suit you.",
        },
        {
          question: 'How much can I save?',
          answer:
            'It depends on the final fare and group size. If a taxi costs €40 and the fare stays the same, two people pay €20 each and four pay €10. Check surcharges, luggage, capacity and detours.',
        },
        {
          question: 'Does Cojauny book or charge for the taxi?',
          answer:
            'Cojauny helps coordinate the group and calculate the split. It does not process transfer payments. Agree how to book and pay for the transport before travelling.',
        },
        {
          question: 'How do I decide who to travel with?',
          answer:
            'Review available profile information and ratings, talk to the person and use your own judgement. Email verification does not guarantee identity or travel safety. You can block or report an interaction.',
        },
        {
          question: 'What can other travellers see about me?',
          answer:
            'Your alias, any photo you choose to add and your profile ratings. Your real name, phone number and verification documents are not displayed on your public profile. Avoid posting sensitive information in chat.',
        },
        {
          question: 'Can I plan before flying?',
          answer:
            'Yes. Add your flight and coordinate ahead of time. Send messages when connected and agree on a meeting point before boarding.',
        },
        {
          question: 'What if my plans change?',
          answer:
            'Tell the group as soon as possible, update the details or leave the event in the app. Check the cancellation terms of any separately booked transport.',
        },
        {
          question: 'Does it work at my airport?',
          answer:
            'Explore the airport pages and add your airport when signing up. An airport page does not guarantee a group is available for your flight.',
        },
        {
          question: 'How do Free and Premium differ?',
          answer:
            'Free supports one active flight and one active event at a time. Premium expands the options for frequent travellers. Check available plans and terms when you get access; the beta may evolve.',
        },
        {
          question: 'What is my invitation link for?',
          answer:
            "After signing up, your personal link lets you invite other travellers. Their visits and registrations help prioritise your access. We'll email you when you can join.",
        },
      ],
    },
    forms: {
      beta: {
        heading: 'Your next airport ride starts here',
        subheading:
          'Join the access list. We’ll email you when you can try the Cojauny beta.',
        title: 'Join the beta list',
        description:
          'Enter your contact details. Optional fields help us understand your routes and prepare the beta.',
        success: "You're on the list! We'll email you as soon as your spot is ready.",
        error: 'Something went wrong on our end — please try again in a moment.',
        duplicateError: "Looks like you're already on the list. We'll be in touch soon.",
        submit: 'Join the beta list',
        checkboxLabel: "I've read and agree to Cojauny's {privacyLink}.",
        privacyLinkLabel: 'privacy policy',
        referralNotice:
          "After signing up, you'll get an invite link to share. We only track visits and signups to move you up the list — no data is shared with third parties.",
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
          privacyAcceptance: 'I agree to my data being stored for the Cojauny beta.',
        },
        placeholders: {
          homeAirport: 'e.g. London (LHR), JFK, Mexico City',
          useCase: "Tell us a bit about how you'd use it",
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
          { value: 'other', label: 'Other country' },
        ],
        flightFrequencyOptions: [
          {
            value: 'once',
            label: 'Once a year',
            description: 'Holidays or the occasional trip',
          },
          {
            value: 'two_to_five',
            label: '2–5 times a year',
            description: 'Regular traveler or frequent holidays',
          },
          {
            value: 'six_to_ten',
            label: '6–10 times a year',
            description: "You're often at the airport for work or life",
          },
          {
            value: 'more_than_ten',
            label: 'More than 10 times a year',
            description: 'Basically living out of a suitcase',
          },
        ],
      },
      feedback: {
        heading: 'Help us improve your next trip',
        subheading: 'Share an idea, a question or a partnership proposal.',
        title: 'Send us a message',
        description:
          'What would make your airport ride easier? Tell us here or email feedback@cojauny.com.',
        success: "Got it — thank you! We'll get back to you if we need anything else.",
        error: 'Please check your message and try again.',
        submit: 'Send message',
        optionalLabel: '(optional)',
        optionalHint: 'All fields are required unless you see "(optional)".',
        fields: {
          fullName: 'Name',
          email: 'Email',
          message: "What's on your mind?",
          useCase: 'Type',
          selectPlaceholder: 'Select an option',
        },
        caseOptions: [
          { value: 'feedback', label: 'Feedback' },
          { value: 'idea', label: 'Idea' },
          { value: 'business_proposal', label: 'Business Proposal' },
        ],
      },
    },
    referralPanel: {
      title: "We'll email you the moment beta opens",
      subtitle: 'In the meantime, share your link and move up the list.',
      yourLink: 'Your invite link',
      copyButton: 'Copy link',
      copiedButton: 'Copied!',
      stats: {
        visits: 'Visits',
        signups: 'Signups',
      },
      instructions: {
        title: 'How it works',
        step1: 'Share your link with friends, colleagues, or on social media.',
        step2: 'Every visit through your link counts, anonymously.',
        step3: 'Every signup moves you further up the queue.',
      },
      privacy:
        'We only count visits and signups — no personal data is collected from people who click your link.',
      privacyLabel: 'Good to know:',
    },
    cookie: {
      message:
        'We use a few essential cookies to keep the site running, plus optional analytics ones to help us improve it. Your choice sticks around for 12 months.',
      acceptAll: 'Accept all',
      reject: 'Essential only',
      customize: 'Customize',
      savePreferences: 'Save preferences',
      essentialLabel: 'Essential',
      essentialDescription:
        'Needed for basic things like security and remembering your language.',
      analyticsLabel: 'Analytics',
      analyticsDescription: "Helps us understand what's working and improve the beta.",
      alwaysOn: 'Always on',
      moreInfo: 'Learn more',
    },
    footer: {
      description: 'Connect with fellow passengers and plan a shared airport ride.',
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
      madeInEurope: 'Made in Europe.',
    },
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
      workflow: "So geht's",
      faq: 'FAQ',
      feedback: 'Feedback',
    },
    seo: {
      title: 'Cojauny | Flughafentaxi mit Reisenden deines Flugs teilen',
      description:
        'Finde Mitreisende deines Flugs, plane den Flughafentransfer und teile die Taxikosten. Entdecke Cojauny und melde dich für den Beta-Zugang an.',
      keywords: [
        'Flughafentaxi teilen',
        'gemeinsamer Flughafentransfer',
        'Mitreisende gleicher Flug',
        'Taxikosten Flughafen teilen',
      ],
      ogTitle: 'Dein Flug. Deine Mitreisenden. Eine gemeinsame Fahrt.',
      ogDescription:
        'Plane den Flughafentransfer mit anderen Reisenden und teile die Kosten. Melde dich für die Cojauny-Beta an.',
    },
    hero: {
      eyebrow: 'Gemeinsame Flughafentransfers · Beta-Zugang',
      title: 'Teile das Flughafentaxi mit Reisenden deines Flugs',
      subtitle:
        'Deine Reise endet nicht mit der Landung. Cojauny hilft dir, Mitreisende zu finden, die Fahrt abzusprechen und die Kosten zu teilen. Plane vor dem Abflug und komm gut vorbereitet an.',
      primaryCta: 'Für die Beta anmelden',
      secondaryCta: 'So funktioniert Cojauny',
      imageAlt: 'Vorschau der Suche nach Mitreisenden in Cojauny',
      trustSignals: [
        'Über den Flug verbinden',
        'Im App-Chat planen',
        'Mitreisende selbst wählen',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Ein Taxi. Geteilte Kosten.',
        subtitle:
          'Eine Fahrt für 40 € kostet bei vier Personen je 10 €, wenn der Fahrpreis gleich bleibt. Cojauny hilft dir, Mitreisende für die gemeinsame Planung zu finden.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Für den Beta-Zugang von Cojauny anmelden',
      label: 'Erhalte eine E-Mail, sobald dein Beta-Zugang bereitsteht',
      emailPlaceholder: 'du@email.de',
      submit: 'Für die Beta anmelden',
      submitting: 'Wird gesendet…',
      privacyNote:
        'Mit der Anmeldung akzeptierst du unsere Nutzungsbedingungen und Datenschutzerklärung. Wir informieren dich per E-Mail über deinen Zugang.',
      success:
        'Du stehst auf der Liste! Wir informieren dich per E-Mail, sobald du Zugang erhältst.',
    },
    airportsHubTitle: 'Beliebte Flughäfen',
    airportsHubAll: 'Alle Flughäfen ansehen',
    betaReferralBanner:
      'Lade über deinen persönlichen Link weitere Reisende ein und hilf ihnen, Mitreisende für ihren Flug zu finden.',
    features: {
      title: 'Weniger Hin und Her. Besser vorbereitet ankommen.',
      subtitle:
        'Finde Mitreisende, kläre die Details und entscheide selbst, was du teilst.',
      items: [
        {
          title: 'Mitreisende finden',
          description:
            'Gib Flugnummer und Datum ein, um andere Reisende für die gemeinsame Fahrt zu finden.',
          iconName: 'bolt',
        },
        {
          title: 'Kosten vorher klären',
          description:
            'Prüft die geschätzte Aufteilung und vereinbart die Bezahlung. Cojauny wickelt keine Transferzahlungen ab.',
          iconName: 'sparkles',
        },
        {
          title: 'Private Daten schützen',
          description:
            'Verbinde dich über einen Alias, ohne Telefonnummer oder Dokumente zu veröffentlichen.',
          iconName: 'lock',
        },
        {
          title: 'Profil prüfen',
          description:
            'Sieh dir Profilangaben und E-Mail-Verifizierung an. Eine bestätigte E-Mail ist kein Identitätsnachweis.',
          iconName: 'shield',
        },
        {
          title: 'Bewertungen lesen',
          description:
            'Erfahrungen aus früheren gemeinsamen Reisen helfen dir bei der Auswahl.',
          iconName: 'users',
        },
        {
          title: 'Blockieren und melden',
          description:
            'Nutze die Funktionen zum Blockieren und Melden, wenn dir eine Interaktion unangenehm ist.',
          iconName: 'flag',
        },
        {
          title: 'Vor der Landung sprechen',
          description: 'Plant im App-Chat, ohne eure Telefonnummern weiterzugeben.',
          iconName: 'chat',
        },
        {
          title: 'Treffpunkt vereinbaren',
          description:
            'Legt einen eindeutigen Treffpunkt fest und prüft die Details vor dem Verlassen des Terminals.',
          iconName: 'pin',
        },
        {
          title: 'Ortskenntnis nutzen',
          description:
            'Das Local-Abzeichen kennzeichnet Reisende, die nach Hause zurückkehren und Tipps geben können.',
          iconName: 'globe',
        },
      ],
    },
    value: {
      eyebrow: 'Deinen nächsten Transfer planen',
      title: 'Gemeinsam fahren. Einfacher ankommen.',
      subtitle:
        'Allein unterwegs, auf dem Heimweg oder gern gut vorbereitet? Ein gemeinsamer Flug ist ein guter Anfang.',
      items: [
        {
          title: 'Kosten aufteilen',
          description:
            'Ein geteiltes Taxi kann den Preis pro Person senken. Die Ersparnis hängt von Tarif, Strecke und Gruppengröße ab.',
        },
        {
          title: 'Menschen mit ähnlichen Plänen finden',
          description:
            'Suche Mitreisende, ohne auf alte Beiträge angewiesen zu sein oder erst am Terminal jemanden zu finden.',
        },
        {
          title: 'Informiert entscheiden',
          description:
            'Prüfe Profile und Bewertungen. Du entscheidest, mit wem du reist und welche Informationen du teilst.',
        },
        {
          title: 'Mit klaren Absprachen ankommen',
          description:
            'Besprecht Ziel, Gepäck, Treffpunkt und Kosten schon vor dem Transfer.',
        },
      ],
    },
    savings: {
      title: 'So verändert sich der Preis beim Teilen',
      caption:
        'Rechenbeispiel: Eine Taxifahrt für 40 € bei gleichem Tarif und gleicher Strecke, zu gleichen Teilen aufgeteilt. Keine aktuellen Preise oder garantierten Ersparnisse. Prüft Zuschläge, Gepäck und Fahrzeugkapazität.',
      metrics: [
        {
          value: '40 €',
          label: 'Allein unterwegs',
          description: 'Eine Person zahlt in diesem Beispiel den gesamten Fahrpreis.',
        },
        {
          value: '20 €',
          label: 'Zu zweit',
          description: 'Jede Person zahlt die Hälfte: 20 € weniger als allein.',
        },
        {
          value: '10 €',
          label: 'Zu viert',
          description: 'Jede Person zahlt ein Viertel: 75 % weniger in diesem Beispiel.',
        },
        {
          value: 'Deine Wahl',
          label: 'Mit wem du fährst',
          description: 'Vereinbart Strecke und Kostenaufteilung vor der Zusage.',
        },
      ],
    },
    workflow: {
      title: 'Vom Flug zum geplanten Flughafentransfer',
      intro:
        'In fünf Schritten Mitreisende finden und die Fahrt absprechen. Die Verfügbarkeit hängt davon ab, wer sich für deinen Flug anmeldet.',
      steps: [
        {
          title: '1. Profil erstellen',
          description:
            'Registriere dich, bestätige deine E-Mail und wähle deine öffentlichen Angaben.',
        },
        {
          title: '2. Flug hinzufügen',
          description: 'Gib Flugnummer und Datum ein, um Mitreisende zu suchen.',
        },
        {
          title: '3. Mitreisende wählen',
          description:
            'Prüfe Profile und Bewertungen und verbinde dich mit Reisenden, deren Pläne passen.',
        },
        {
          title: '4. Details vereinbaren',
          description: 'Besprecht im Chat Ziel, Gepäck, Treffpunkt und Kostenaufteilung.',
        },
        {
          title: '5. Fahrt teilen und bewerten',
          description: 'Trefft euch, fahrt gemeinsam und bewertet eure Erfahrung.',
        },
      ],
    },
    mockups: {
      heading: 'So planst du eine Reise in Cojauny',
      description:
        'Eine Vorschau vom Hinzufügen des Flugs bis zur Übersicht der Ersparnis. Die Ansichten zeigen die geplante Beta-Erfahrung.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Dein Flug',
          title: 'Mit dem eigenen Flug anfangen',
          description:
            'Gib Nummer und Datum ein, um Mitreisende für den Transfer zu finden.',
          image: '/images/mockups/de/mockup-flight-search.svg',
        },
        {
          id: 'profile',
          badge: 'Profil',
          title: 'Erst das Profil ansehen',
          description: 'Prüfe öffentliche Angaben und verfügbare Bewertungen.',
          image: '/images/mockups/de/mockup-profile.svg',
        },
        {
          id: 'event-detail',
          badge: 'Transfer',
          title: 'Alle Details an einem Ort',
          description: 'Sieh Teilnehmende, Treffpunkt und geschätzte Kosten.',
          image: '/images/mockups/de/mockup-event-detail.svg',
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Vor der Ankunft sprechen',
          description: 'Plant gemeinsam, ohne eure Telefonnummern zu veröffentlichen.',
          image: '/images/mockups/de/mockup-chat.svg',
        },
        {
          id: 'events-list',
          badge: 'Pläne',
          title: 'Den passenden Plan wählen',
          description:
            'Vergleiche verfügbare Events für deinen Flug, bevor du dich anschließt.',
          image: '/images/mockups/de/mockup-events-list.svg',
        },
        {
          id: 'impact',
          badge: 'Ersparnis',
          title: 'Deine Ersparnis ansehen',
          description: 'Prüfe die erfasste Ersparnis deiner gemeinsamen Fahrten.',
          image: '/images/mockups/de/mockup-impact.svg',
        },
      ],
    },
    ctaStrip: {
      heading: 'Plane deine nächste Ankunft mit uns',
      body: 'Melde dich für die Beta an. Wir informieren dich, sobald du Cojauny ausprobieren und gemeinsame Flughafentransfers mitgestalten kannst.',
      link: '#beta',
      linkLabel: 'Für die Beta anmelden',
    },
    pricing: {
      title: 'Einfache Preise, wann immer du bereit bist',
      subtitle: 'Starte kostenlos. Upgrade nur, wenn du wirklich mehr brauchst.',
      plans: {
        free: {
          name: 'Free',
          price: 'Kostenlos',
          description:
            'Verwalte einen Flug und ein Event gleichzeitig — ohne Limit, wie viele Fahrten du insgesamt machst.',
          cta: 'Kostenlos starten',
        },
        premium: {
          name: 'Premium',
          price: '4,99 €/Monat',
          description:
            'Verwalte mehrere Flüge und Events gleichzeitig, dazu Gruppenchat, detaillierte Statistiken und Prioritäts-Support. 49 €/Jahr (17% sparen).',
          cta: 'Zu Premium wechseln',
        },
      },
      comparison: {
        title: 'Das ist enthalten',
        features: [
          {
            feature: 'Gleichzeitig aktive Flüge',
            free: '1',
            premium: 'Unbegrenzt',
          },
          {
            feature: 'Gleichzeitig aktive Events',
            free: '1',
            premium: 'Unbegrenzt',
          },
          {
            feature: 'Neue Events erstellen',
            free: false,
            premium: true,
          },
          {
            feature: 'Chat mit Organisator',
            free: true,
            premium: true,
          },
          {
            feature: 'Voller Gruppenchat',
            free: false,
            premium: true,
          },
          {
            feature: 'Wiederkehrende Events',
            free: false,
            premium: true,
          },
          {
            feature: 'Detaillierte Statistiken',
            free: 'Basis',
            premium: 'Erweitert',
          },
          {
            feature: 'Prioritätssupport',
            free: false,
            premium: true,
          },
          {
            feature: 'Premium-Badge',
            free: false,
            premium: true,
          },
        ],
      },
    },
    faq: {
      title: 'Antworten vor der gemeinsamen Fahrt',
      subtitle:
        'Was Cojauny macht, wie ihr den Transfer plant und was die Beta bedeutet.',
      items: [
        {
          question: 'Was ist Cojauny?',
          answer:
            'Eine App, um Mitreisende deines Flugs zu finden und etwa ein gemeinsames Flughafentaxi zu organisieren. Die Teilnehmenden vereinbaren Transfer und Bezahlung. Cojauny ist kein Transportunternehmen.',
        },
        {
          question: 'Kann ich die App direkt nach der Anmeldung nutzen?',
          answer:
            'Die Anmeldung setzt dich auf die Liste für den Beta-Zugang. Wir informieren dich per E-Mail, sobald du Zugang erhältst. Sofortiger Zugang oder Mitreisende für einen bestimmten Flug sind nicht garantiert.',
        },
        {
          question: 'Wie finde ich Mitreisende?',
          answer:
            'Füge Flugnummer und Datum hinzu. Die Verfügbarkeit hängt davon ab, wer sich angemeldet hat. Prüfe, ob Ziel und Zeiten der Gruppe zu deinen Plänen passen.',
        },
        {
          question: 'Wie viel kann ich sparen?',
          answer:
            'Das hängt vom Endpreis und der Gruppengröße ab. Kostet das Taxi unverändert 40 €, zahlen zwei Personen je 20 € und vier je 10 €. Prüft Zuschläge, Gepäck, Kapazität und Umwege.',
        },
        {
          question: 'Bucht Cojauny das Taxi oder zieht den Fahrpreis ein?',
          answer:
            'Cojauny hilft bei der Gruppenplanung und Kostenaufteilung, wickelt aber keine Transferzahlungen ab. Vereinbart vor der Reise, wie ihr den Transport bucht und bezahlt.',
        },
        {
          question: 'Wie entscheide ich, mit wem ich fahre?',
          answer:
            'Prüfe verfügbare Profilangaben und Bewertungen, sprich mit der Person und entscheide selbst. E-Mail-Verifizierung garantiert weder Identität noch Reisesicherheit. Du kannst Interaktionen blockieren oder melden.',
        },
        {
          question: 'Was sehen andere von mir?',
          answer:
            'Deinen Alias, ein freiwillig hinzugefügtes Foto und deine Profilbewertungen. Echter Name, Telefonnummer und Verifizierungsdokumente erscheinen nicht im öffentlichen Profil. Teile im Chat keine sensiblen Daten.',
        },
        {
          question: 'Kann ich vor dem Flug planen?',
          answer:
            'Ja. Füge deinen Flug frühzeitig hinzu und besprecht die Details. Sende Nachrichten mit Internetverbindung und vereinbart den Treffpunkt vor dem Boarding.',
        },
        {
          question: 'Was passiert, wenn sich meine Pläne ändern?',
          answer:
            'Informiere die Gruppe frühzeitig und ändere die Details oder verlasse das Event in der App. Prüfe separat die Stornierungsbedingungen des gebuchten Transports.',
        },
        {
          question: 'Ist mein Flughafen dabei?',
          answer:
            'Sieh dir die Flughafenseiten an und gib deinen Flughafen bei der Anmeldung an. Eine Flughafenseite garantiert keine verfügbare Gruppe für deinen Flug.',
        },
        {
          question: 'Was unterscheidet Free und Premium?',
          answer:
            'Free erlaubt einen aktiven Flug und ein aktives Event gleichzeitig. Premium erweitert die Möglichkeiten für Vielreisende. Prüfe die verfügbaren Tarife und Bedingungen bei deinem Zugang; die Beta kann sich ändern.',
        },
        {
          question: 'Wozu dient mein Einladungslink?',
          answer:
            'Nach der Anmeldung kannst du über deinen persönlichen Link andere Reisende einladen. Besuche und Anmeldungen helfen, deinen Zugang zu priorisieren. Wir informieren dich per E-Mail, sobald du teilnehmen kannst.',
        },
      ],
    },
    forms: {
      beta: {
        heading: 'Dein nächster Flughafentransfer beginnt hier',
        subheading:
          'Melde dich für den Zugang an. Wir informieren dich, sobald du die Cojauny-Beta ausprobieren kannst.',
        title: 'Für die Beta anmelden',
        description:
          'Gib deine Kontaktdaten ein. Freiwillige Angaben helfen uns, deine Strecken zu verstehen und die Beta vorzubereiten.',
        success:
          'Du stehst auf der Liste! Wir schreiben dir, sobald dein Zugang bereit ist.',
        error: 'Auf unserer Seite ist etwas schiefgelaufen — versuch es gleich noch mal.',
        duplicateError:
          'Sieht so aus, als wärst du schon auf der Liste. Wir melden uns bald.',
        submit: 'Für die Beta anmelden',
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
          privacyAcceptance:
            'Ich bin einverstanden, dass meine Daten für die Cojauny-Beta gespeichert werden.',
        },
        placeholders: {
          homeAirport: 'z. B. Berlin (BER), München',
          useCase: 'Erzähl uns kurz, wofür du es nutzen würdest',
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
          { value: 'other', label: 'Anderes Land' },
        ],
        flightFrequencyOptions: [
          {
            value: 'once',
            label: '1x im Jahr',
            description: 'Urlaub oder ab und zu mal',
          },
          {
            value: 'two_to_five',
            label: '2–5x im Jahr',
            description: 'Du fliegst öfter mal',
          },
          {
            value: 'six_to_ten',
            label: '6–10x im Jahr',
            description: 'Der Flughafen ist dir schon vertraut',
          },
          {
            value: 'more_than_ten',
            label: '10+x im Jahr',
            description: 'Du lebst quasi aus dem Koffer',
          },
        ],
      },
      feedback: {
        heading: 'Hilf uns, deine nächste Reise zu verbessern',
        subheading:
          'Teile eine Idee, eine Frage oder einen Vorschlag zur Zusammenarbeit.',
        title: 'Schreib uns',
        description:
          'Was würde deinen Transfer einfacher machen? Schreib uns hier oder an feedback@cojauny.com.',
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
          selectPlaceholder: 'Wähle eine Option',
        },
        caseOptions: [
          { value: 'feedback', label: 'Produkt-Feedback' },
          { value: 'idea', label: 'Neue Idee' },
          { value: 'business_proposal', label: 'Geschäftsvorschlag' },
        ],
      },
    },
    referralPanel: {
      title: 'Wir schreiben dir, sobald die Beta startet',
      subtitle:
        'Teile in der Zwischenzeit deinen Link und rutsche in der Liste nach vorne.',
      yourLink: 'Dein Einladungslink',
      copyButton: 'Link kopieren',
      copiedButton: 'Kopiert!',
      stats: {
        visits: 'Besuche',
        signups: 'Anmeldungen',
      },
      instructions: {
        title: "So funktioniert's",
        step1: 'Teile deinen Link mit Freunden, Kollegen oder in sozialen Netzwerken.',
        step2: 'Jeder Besuch über deinen Link zählt, anonym.',
        step3: 'Jede Anmeldung bringt dich in der Warteliste weiter nach vorne.',
      },
      privacy:
        'Wir zählen nur Besuche und Anmeldungen — von Leuten, die auf deinen Link klicken, erfassen wir keine persönlichen Daten.',
      privacyLabel: 'Gut zu wissen:',
    },
    cookie: {
      message:
        'Wir nutzen ein paar essenzielle Cookies, damit die Seite läuft, und optionale Analyse-Cookies, um sie zu verbessern. Deine Wahl bleibt 12 Monate gespeichert.',
      acceptAll: 'Alle akzeptieren',
      reject: 'Nur essenzielle',
      customize: 'Anpassen',
      savePreferences: 'Einstellungen speichern',
      essentialLabel: 'Essenziell',
      essentialDescription:
        'Nötig für Grundlegendes wie Sicherheit und deine Sprachwahl.',
      analyticsLabel: 'Analyse',
      analyticsDescription:
        'Hilft uns zu verstehen, was funktioniert, und die Beta zu verbessern.',
      alwaysOn: 'Immer aktiv',
      moreInfo: 'Mehr erfahren',
    },
    footer: {
      description:
        'Finde Mitreisende deines Flugs und plane einen gemeinsamen Flughafentransfer.',
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
      madeInEurope: 'Made in Europe.',
    },
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
      feedback: 'Feedback',
    },
    seo: {
      title: 'Cojauny | Partagez un taxi à l’aéroport avec les voyageurs de votre vol',
      description:
        'Retrouvez des voyageurs de votre vol, organisez le transfert et partagez le prix du taxi. Découvrez Cojauny et inscrivez-vous pour accéder à la bêta.',
      keywords: [
        'partager taxi aéroport',
        'transfert aéroport partagé',
        'voyageurs même vol',
        'partager frais taxi aéroport',
      ],
      ogTitle: 'Votre vol. Vos compagnons. Un trajet partagé.',
      ogDescription:
        'Organisez le transfert avec d’autres voyageurs et partagez le prix du taxi. Inscrivez-vous à la bêta Cojauny.',
    },
    hero: {
      eyebrow: 'Transferts partagés · Accès bêta',
      title: 'Partagez le taxi de l’aéroport avec les voyageurs de votre vol',
      subtitle:
        'Le voyage ne s’arrête pas à l’atterrissage. Cojauny vous aide à rencontrer d’autres passagers, organiser le trajet et partager les frais. Préparez votre arrivée avant de décoller.',
      primaryCta: 'M’inscrire à la bêta',
      secondaryCta: 'Comment fonctionne Cojauny',
      imageAlt: 'Aperçu de la recherche de compagnons de vol dans Cojauny',
      trustSignals: [
        'Un même vol',
        'Un chat pour s’organiser',
        'Vos compagnons, votre choix',
      ],
    },
    heroVariants: {
      savings: {
        title: 'Un taxi. Des frais partagés.',
        subtitle:
          'Un trajet à 40 € partagé entre quatre personnes revient à 10 € chacune si le tarif reste identique. Cojauny vous aide à trouver des compagnons de vol pour l’organiser.',
      },
    },
    heroQuickSignup: {
      ariaLabel: 'M’inscrire sur la liste d’accès à la bêta Cojauny',
      label: 'Recevez un email lorsque votre accès à la bêta sera disponible',
      emailPlaceholder: 'vous@email.fr',
      submit: 'M’inscrire à la bêta',
      submitting: 'Envoi…',
      privacyNote:
        'En vous inscrivant, vous acceptez nos conditions et notre politique de confidentialité. Nous vous informerons par email de votre accès.',
      success:
        'Vous êtes sur la liste ! Nous vous écrirons dès que votre accès sera disponible.',
    },
    airportsHubTitle: 'Aéroports populaires',
    airportsHubAll: 'Voir tous les aéroports',
    betaReferralBanner:
      'Invitez d’autres voyageurs avec votre lien personnel pour les aider à trouver des compagnons de vol.',
    features: {
      title: 'Moins d’allers-retours. Une arrivée mieux préparée.',
      subtitle:
        'Trouvez des compagnons, convenez des détails et gardez le contrôle de ce que vous partagez.',
      items: [
        {
          title: 'Trouvez des compagnons de vol',
          description:
            'Ajoutez le numéro et la date du vol pour rechercher des voyageurs avec qui organiser le transfert.',
          iconName: 'bolt',
        },
        {
          title: 'Clarifiez les frais avant de partir',
          description:
            'Consultez la répartition estimée et convenez du paiement. Cojauny ne traite pas les paiements du transfert.',
          iconName: 'sparkles',
        },
        {
          title: 'Préservez vos informations privées',
          description:
            'Utilisez un pseudonyme sans publier votre téléphone ni vos documents.',
          iconName: 'lock',
        },
        {
          title: 'Consultez le profil',
          description:
            'Vérifiez les informations et la confirmation de l’email. Un email confirmé ne constitue pas une vérification d’identité.',
          iconName: 'shield',
        },
        {
          title: 'Lisez les avis de voyage',
          description:
            'Les expériences de trajets précédents vous aident à choisir vos compagnons.',
          iconName: 'users',
        },
        {
          title: 'Bloquez et signalez',
          description:
            'Utilisez les options de blocage et de signalement si une interaction vous met mal à l’aise.',
          iconName: 'flag',
        },
        {
          title: 'Échangez avant d’atterrir',
          description:
            'Organisez-vous dans le chat de l’app sans communiquer votre numéro de téléphone.',
          iconName: 'chat',
        },
        {
          title: 'Convenez d’un lieu de rencontre',
          description:
            'Choisissez un point précis et revoyez les détails avant de sortir du terminal.',
          iconName: 'pin',
        },
        {
          title: 'Profitez des conseils locaux',
          description:
            'Le badge local identifie les voyageurs qui rentrent chez eux et peuvent partager des conseils.',
          iconName: 'globe',
        },
      ],
    },
    value: {
      eyebrow: 'Préparez votre prochain transfert',
      title: 'Partagez le trajet. Simplifiez l’arrivée.',
      subtitle:
        'Voyage en solo, retour à la maison ou envie de prévoir ? Un même vol est un bon point de départ.',
      items: [
        {
          title: 'Partagez les frais',
          description:
            'Partager un taxi peut réduire le prix par personne. L’économie dépend du tarif, du trajet et de la taille du groupe.',
        },
        {
          title: 'Trouvez des voyageurs aux plans proches',
          description:
            'Cherchez des compagnons de vol sans dépendre d’anciennes annonces ou improviser à la sortie du terminal.',
        },
        {
          title: 'Choisissez en connaissance de cause',
          description:
            'Consultez profils et avis avant d’accepter. Vous choisissez vos compagnons et les informations à partager.',
        },
        {
          title: 'Arrivez avec un plan convenu',
          description:
            'Discutez destination, bagages, point de rencontre et frais avant le transfert.',
        },
      ],
    },
    savings: {
      title: 'Ce qui change quand vous partagez les frais',
      caption:
        'Exemple illustratif : un taxi à 40 €, pour un tarif et un trajet identiques, partagé à parts égales. Il ne s’agit ni de prix réels ni d’économies garanties. Vérifiez suppléments, bagages et capacité du véhicule.',
      metrics: [
        {
          value: '40 €',
          label: 'En solo',
          description: 'Une personne paie la totalité du trajet dans cet exemple.',
        },
        {
          value: '20 €',
          label: 'À deux',
          description: 'Chacun paie la moitié : 20 € de moins qu’en solo.',
        },
        {
          value: '10 €',
          label: 'À quatre',
          description: 'Chacun paie un quart : 75 % de moins dans cet exemple.',
        },
        {
          value: 'Votre choix',
          label: 'Avec qui voyager',
          description: 'Convenez du trajet et du partage des frais avant de confirmer.',
        },
      ],
    },
    workflow: {
      title: 'Du vol au transfert organisé',
      intro:
        'Cinq étapes pour trouver des compagnons et convenir du trajet. La disponibilité dépend des voyageurs inscrits sur votre vol.',
      steps: [
        {
          title: '1. Créez votre profil',
          description:
            'Inscrivez-vous, confirmez votre email et choisissez les informations à afficher.',
        },
        {
          title: '2. Ajoutez votre vol',
          description:
            'Indiquez son numéro et sa date pour rechercher d’autres passagers.',
        },
        {
          title: '3. Choisissez vos compagnons',
          description:
            'Consultez profils et avis, puis contactez les voyageurs dont les plans vous conviennent.',
        },
        {
          title: '4. Convenez des détails',
          description:
            'Utilisez le chat pour discuter destination, bagages, lieu de rencontre et frais.',
        },
        {
          title: '5. Partagez et donnez votre avis',
          description: 'Retrouvez-vous, effectuez le trajet et évaluez l’expérience.',
        },
      ],
    },
    mockups: {
      heading: 'Découvrez comment organiser un voyage dans Cojauny',
      description:
        'Un aperçu du parcours, de l’ajout du vol au suivi des économies. Ces écrans illustrent l’expérience prévue pour la bêta.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Votre vol',
          title: 'Commencez par votre vol',
          description:
            'Ajoutez numéro et date pour trouver des voyageurs avec qui partager le transfert.',
          image: '/images/mockups/fr/mockup-flight-search.svg',
        },
        {
          id: 'profile',
          badge: 'Profil',
          title: 'Consultez le profil avant de choisir',
          description: 'Vérifiez les informations publiques et les avis disponibles.',
          image: '/images/mockups/fr/mockup-profile.svg',
        },
        {
          id: 'event-detail',
          badge: 'Transfert',
          title: 'Les détails au même endroit',
          description: 'Consultez participants, lieu de rencontre et coût estimé.',
          image: '/images/mockups/fr/mockup-event-detail.svg',
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Échangez avant l’arrivée',
          description: 'Organisez-vous sans publier votre numéro de téléphone.',
          image: '/images/mockups/fr/mockup-chat.svg',
        },
        {
          id: 'events-list',
          badge: 'Plans',
          title: 'Choisissez le plan qui vous convient',
          description:
            'Comparez les événements disponibles pour votre vol avant de rejoindre le groupe.',
          image: '/images/mockups/fr/mockup-events-list.svg',
        },
        {
          id: 'impact',
          badge: 'Économies',
          title: 'Consultez vos économies',
          description: 'Retrouvez les économies enregistrées sur vos trajets partagés.',
          image: '/images/mockups/fr/mockup-impact.svg',
        },
      ],
    },
    ctaStrip: {
      heading: 'Préparez votre prochaine arrivée avec nous',
      body: 'Inscrivez-vous sur la liste d’accès à la bêta. Nous vous informerons quand vous pourrez essayer Cojauny et contribuer à améliorer les transferts partagés.',
      link: '#beta',
      linkLabel: 'M’inscrire à la bêta',
    },
    pricing: {
      title: 'Des tarifs simples, quand vous serez prêt',
      subtitle:
        'Commencez gratuitement. Passez à Premium seulement si vous en avez vraiment besoin.',
      plans: {
        free: {
          name: 'Free',
          price: 'Gratuit',
          description:
            'Gérez un vol et un événement à la fois, sans limite sur le nombre total de trajets.',
          cta: 'Commencer gratuitement',
        },
        premium: {
          name: 'Premium',
          price: '4,99 €/mois',
          description:
            "Gérez plusieurs vols et événements en même temps, avec chat de groupe, statistiques détaillées et support prioritaire. 49 €/an (17% d'économie).",
          cta: 'Passer à Premium',
        },
      },
      comparison: {
        title: 'Ce qui est inclus',
        features: [
          {
            feature: 'Vols actifs simultanés',
            free: '1',
            premium: 'Illimités',
          },
          {
            feature: 'Événements actifs simultanés',
            free: '1',
            premium: 'Illimités',
          },
          {
            feature: 'Créer de nouveaux événements',
            free: false,
            premium: true,
          },
          {
            feature: "Chat avec l'organisateur",
            free: true,
            premium: true,
          },
          {
            feature: 'Chat de groupe complet',
            free: false,
            premium: true,
          },
          {
            feature: 'Événements récurrents',
            free: false,
            premium: true,
          },
          {
            feature: 'Statistiques détaillées',
            free: 'Basique',
            premium: 'Avancé',
          },
          {
            feature: 'Support prioritaire',
            free: false,
            premium: true,
          },
          {
            feature: 'Badge Premium',
            free: false,
            premium: true,
          },
        ],
      },
    },
    faq: {
      title: 'Quelques réponses avant de partager le trajet',
      subtitle:
        'Le rôle de Cojauny, l’organisation du transfert et le fonctionnement de la bêta.',
      items: [
        {
          question: 'Qu’est-ce que Cojauny ?',
          answer:
            'Une app pour rencontrer des voyageurs de votre vol et organiser des plans comme un taxi partagé à l’aéroport. Les participants conviennent du transfert et du paiement. Cojauny n’est pas un transporteur.',
        },
        {
          question: 'Puis-je utiliser l’app dès mon inscription ?',
          answer:
            'L’inscription vous ajoute à la liste d’accès à la bêta. Nous vous écrirons lorsque votre accès sera disponible. Elle ne garantit ni accès immédiat ni compagnons pour un vol donné.',
        },
        {
          question: 'Comment trouver des compagnons ?',
          answer:
            'Ajoutez le numéro et la date de votre vol. La disponibilité dépend des voyageurs inscrits. Vérifiez que la destination et les horaires du groupe vous conviennent.',
        },
        {
          question: 'Combien puis-je économiser ?',
          answer:
            'Cela dépend du prix final et du groupe. Si un taxi coûte toujours 40 €, deux personnes paient 20 € chacune et quatre paient 10 €. Vérifiez suppléments, bagages, capacité et détours.',
        },
        {
          question: 'Cojauny réserve-t-il le taxi ou encaisse-t-il le paiement ?',
          answer:
            'Cojauny aide à organiser le groupe et à répartir les frais. L’app ne traite pas les paiements du transfert. Convenez de la réservation et du règlement avant le voyage.',
        },
        {
          question: 'Comment choisir mes compagnons ?',
          answer:
            'Consultez les informations et avis disponibles, échangez avec la personne et faites votre propre choix. La confirmation de l’email ne garantit ni l’identité ni la sécurité du trajet. Vous pouvez bloquer ou signaler une interaction.',
        },
        {
          question: 'Que voient les autres voyageurs ?',
          answer:
            'Votre pseudonyme, la photo que vous choisissez d’ajouter et les avis de votre profil. Votre nom réel, téléphone et documents de vérification ne figurent pas sur votre profil public. Évitez les informations sensibles dans le chat.',
        },
        {
          question: 'Puis-je m’organiser avant le vol ?',
          answer:
            'Oui. Ajoutez le vol et convenez des détails à l’avance. Envoyez les messages lorsque vous êtes connecté et fixez le lieu de rencontre avant l’embarquement.',
        },
        {
          question: 'Et si mes plans changent ?',
          answer:
            'Prévenez le groupe au plus tôt, modifiez les détails ou quittez l’événement dans l’app. Vérifiez séparément les conditions d’annulation du transport réservé.',
        },
        {
          question: 'Mon aéroport est-il disponible ?',
          answer:
            'Consultez les pages aéroports et indiquez le vôtre à l’inscription. Une page aéroport ne garantit pas un groupe disponible pour votre vol.',
        },
        {
          question: 'Quelle différence entre Free et Premium ?',
          answer:
            'Free permet un vol et un événement actifs à la fois. Premium élargit les possibilités pour les voyageurs fréquents. Consultez les offres et conditions lors de votre accès ; la bêta peut évoluer.',
        },
        {
          question: 'À quoi sert mon lien d’invitation ?',
          answer:
            'Après l’inscription, votre lien personnel permet d’inviter d’autres voyageurs. Leurs visites et inscriptions contribuent à prioriser votre accès. Nous vous écrirons lorsque vous pourrez participer.',
        },
      ],
    },
    forms: {
      beta: {
        heading: 'Votre prochain transfert commence ici',
        subheading:
          'Inscrivez-vous sur la liste d’accès. Nous vous écrirons quand vous pourrez essayer la bêta Cojauny.',
        title: 'M’inscrire à la bêta',
        description:
          'Renseignez vos coordonnées. Les champs facultatifs nous aident à connaître vos trajets et préparer la bêta.',
        success:
          'Vous êtes sur la liste ! Nous vous écrirons dès que votre accès sera prêt.',
        error: 'Un problème est survenu de notre côté — réessayez dans un instant.',
        duplicateError:
          'Il semble que vous soyez déjà sur la liste. Nous vous recontactons bientôt.',
        submit: 'M’inscrire à la bêta',
        checkboxLabel: "J'ai lu et j'accepte la {privacyLink} de Cojauny.",
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
          flightFrequency: "À quelle fréquence prenez-vous l'avion ?",
          useCase: "Qu'aimeriez-vous faire avec Cojauny ?",
          updatesOptIn: 'Tenez-moi informé des nouveautés',
          privacyAcceptance:
            "J'accepte que mes données soient conservées pour participer à la bêta de Cojauny.",
        },
        placeholders: {
          homeAirport: 'Ex. Paris (CDG), Lyon',
          useCase: "Dites-nous en quelques mots comment vous l'utiliseriez",
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
          { value: 'other', label: 'Autre pays' },
        ],
        flightFrequencyOptions: [
          {
            value: 'once',
            label: '1x par an',
            description: 'Vacances ou trajet occasionnel',
          },
          {
            value: 'two_to_five',
            label: '2–5x par an',
            description: 'Vous voyagez assez régulièrement',
          },
          {
            value: 'six_to_ten',
            label: '6–10x par an',
            description: "L'aéroport, vous connaissez",
          },
          {
            value: 'more_than_ten',
            label: '10+x par an',
            description: 'Vous vivez presque avec une valise à la main',
          },
        ],
      },
      feedback: {
        heading: 'Aidez-nous à améliorer votre prochain voyage',
        subheading: 'Partagez une idée, une question ou une proposition de partenariat.',
        title: 'Envoyez-nous un message',
        description:
          'Qu’est-ce qui faciliterait votre transfert ? Écrivez-nous ici ou à feedback@cojauny.com.',
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
          selectPlaceholder: 'Choisissez une option',
        },
        caseOptions: [
          { value: 'feedback', label: 'Retour Produit' },
          { value: 'idea', label: 'Nouvelle Idée' },
          { value: 'business_proposal', label: 'Proposition Commerciale' },
        ],
      },
    },
    referralPanel: {
      title: "Nous vous écrirons dès l'ouverture de la bêta",
      subtitle: 'En attendant, partagez votre lien pour avancer dans la liste.',
      yourLink: "Votre lien d'invitation",
      copyButton: 'Copier le lien',
      copiedButton: 'Copié !',
      stats: {
        visits: 'Visites',
        signups: 'Inscriptions',
      },
      instructions: {
        title: 'Comment ça marche',
        step1:
          'Partagez votre lien avec vos amis, collègues, ou sur les réseaux sociaux.',
        step2: 'Chaque visite via votre lien compte, de façon anonyme.',
        step3: "Chaque inscription vous fait avancer dans la file d'attente.",
      },
      privacy:
        "Nous comptons uniquement les visites et inscriptions — aucune donnée personnelle n'est collectée sur les personnes qui cliquent sur votre lien.",
      privacyLabel: 'À savoir :',
    },
    cookie: {
      message:
        "Nous utilisons quelques cookies essentiels pour faire fonctionner le site, et des cookies analytiques optionnels pour l'améliorer. Votre choix est conservé 12 mois.",
      acceptAll: 'Tout accepter',
      reject: 'Essentiels uniquement',
      customize: 'Personnaliser',
      savePreferences: 'Enregistrer les préférences',
      essentialLabel: 'Essentiels',
      essentialDescription:
        'Nécessaires pour des choses simples comme la sécurité et la mémorisation de votre langue.',
      analyticsLabel: 'Analytiques',
      analyticsDescription:
        'Nous aident à comprendre ce qui fonctionne et à améliorer la bêta.',
      alwaysOn: 'Toujours actifs',
      moreInfo: 'En savoir plus',
    },
    footer: {
      description:
        'Rencontrez des voyageurs de votre vol et organisez un transfert partagé à l’aéroport.',
      rights: 'Tous droits réservés.',
      appStoreSoon: 'App Store (bientôt)',
      playStoreSoon: 'Google Play (bientôt)',
      privacy: 'Politique de confidentialité',
      cookies: 'Politique de cookies',
      terms: "Conditions d'utilisation",
      accountDeletion: 'Supprimer mon compte',
      acceptableUse: 'Utilisation acceptable',
      faq: 'Questions fréquentes',
      subprocessors: 'Sous-traitants',
      contact: 'Contact',
      blog: 'Blog',
      languageLabel: 'Langue',
      madeInEurope: 'Fabriqué en Europe.',
    },
  },
};

export function getLandingCopy(locale: Locale): LandingCopy {
  return landingCopy[locale] ?? landingCopy[defaultLocale];
}
