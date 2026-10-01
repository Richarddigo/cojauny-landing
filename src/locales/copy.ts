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
  trustDetails: {
    title: string;
    description: string;
  };
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
    trustDetails: {
      "title": "La privacidad también forma parte del plan",
      "description": "Para apuntarte basta tu email; las novedades comerciales son opcionales. La analítica opcional solo se activa con tu consentimiento y puedes cambiarlo desde el pie de la página. Consulta para qué usamos los datos, qué proveedores intervienen y cómo solicitar su eliminación."
    },
    skipLink: 'Saltar al contenido principal',
    header: {
      home: 'Inicio',
      features: "Confianza",
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
      title: "Cojauny | Confianza y privacidad en tu traslado compartido",
      description:
        "Organiza tu traslado del aeropuerto con viajeros de tu vuelo. Elige con información, cuida tu privacidad, acuerda horarios y comparte el coste. Únete a la beta.",
      keywords: [
        'compartir transporte aeropuerto',
        'traslado aeropuerto compartido',
        'viajeros mismo vuelo',
        'compartir gastos traslado aeropuerto',
      ],
      ogTitle: "Tu llegada, con confianza y un plan.",
      ogDescription:
        "Tú decides con quién viajar y qué compartir. Prepara el traslado con margen y reparte el coste. Apúntate a la beta de Cojauny.",
    },
    hero: {
      eyebrow: "Confianza, privacidad y una llegada organizada · Beta",
      title: "Viaja con más confianza. Llega con un plan.",
      subtitle:
        "Comparte el transporte del aeropuerto con viajeros de tu vuelo: revisa perfiles, decide con quién ir y coordina la llegada con tiempo. Tú controlas lo que compartes. Y, al repartir el coste, también puedes ahorrar.",
      primaryCta: 'Apuntarme a la beta',
      secondaryCta: 'Así funciona Cojauny',
      imageAlt: 'Vista previa de la búsqueda de compañeros de vuelo en Cojauny',
      trustSignals: [
        "Tú eliges a tus compañeros",
        "Tu privacidad cuenta",
        "Horarios y encuentro acordados"
      ],
    },
    heroVariants: {
      savings: {
        "title": "Elige con confianza. Comparte con tranquilidad.",
        "subtitle": "Perfiles, valoraciones y detalles acordados antes del traslado. Organiza con otros viajeros una llegada con margen, conserva el control de tu información y comparte también el coste."
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Apuntarme a la lista de acceso a la beta de Cojauny',
      label: "Tu próxima llegada empieza con un plan. Únete a la beta.",
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
      title: "Herramientas para compartir con más confianza",
      subtitle:
        "Privacidad, decisiones informadas y control de tus interacciones, dentro de una experiencia pensada para organizar el viaje.",
      items: [
        {
          "title": "Un perfil que tú eliges",
          "description": "Usa un alias y decide qué foto e información publicas. El teléfono y los documentos no forman parte de los campos del perfil público.",
          "iconName": "lock"
        },
        {
          "title": "Verificación con significado claro",
          "description": "Revisa la información y el nivel de verificación que muestre el perfil. La confirmación de email comprueba acceso al correo, no la identidad de una persona.",
          "iconName": "shield"
        },
        {
          "title": "Control sobre tus interacciones",
          "description": "Bloquea a un usuario o denuncia una interacción desde la app. Si no te sientes cómodo, puedes decidir no compartir el trayecto.",
          "iconName": "flag"
        },
        {
          "title": "Experiencias que ayudan a decidir",
          "description": "Consulta las valoraciones disponibles como una referencia más, junto con el perfil y la conversación previa.",
          "iconName": "users"
        },
        {
          "title": "Coordina sin publicar tu teléfono",
          "description": "Habla en el chat sobre destino, horarios y encuentro. Comparte los detalles del viaje y conserva para ti la información sensible.",
          "iconName": "chat"
        },
        {
          "title": "Viajeros con un vuelo en común",
          "description": "Añade número y fecha de vuelo para buscar compañeros y comprueba que sus destinos y tiempos encajen con los tuyos.",
          "iconName": "bolt"
        },
        {
          "title": "Un encuentro y un horario claros",
          "description": "Elegid un punto identificable y una hora de salida. Acordad cuánto esperar y qué hacer si hay retrasos.",
          "iconName": "pin"
        },
        {
          "title": "Conecta con quien conoce la zona",
          "description": "La insignia de local ayuda a identificar viajeros que vuelven a su ciudad y pueden compartir consejos.",
          "iconName": "globe"
        },
        {
          "title": "El coste, claro antes de salir",
          "description": "Revisa el reparto estimado y acuerda cómo contratar y pagar el traslado. Cojauny no procesa ese pago.",
          "iconName": "sparkles"
        }
      ],
    },
    value: {
      "eyebrow": "La confianza va primero",
      "title": "Más control sobre tu viaje, tus datos y tus decisiones.",
      "subtitle": "Conocer el plan antes de salir te ayuda a compartir con más tranquilidad. El ahorro es una ventaja más.",
      "items": [
        {
          "title": "Elige con información",
          "description": "Revisa perfiles y valoraciones, habla antes de aceptar y decide con quién compartir. Puedes bloquear o denunciar interacciones que te incomoden."
        },
        {
          "title": "Comparte solo lo necesario",
          "description": "Usa un alias y el chat de la app para coordinar sin publicar tu teléfono. Decide qué añades a tu perfil y evita compartir información sensible."
        },
        {
          "title": "Planifica para llegar con margen",
          "description": "Acordad destino, hora de salida y encuentro. Cuenta con equipaje, tráfico y posibles retrasos, y prepara una alternativa si cambia el plan."
        },
        {
          "title": "También puedes ahorrar",
          "description": "Reparte el coste de un traslado que encaje con tu horario y tus preferencias. El ahorro depende de la tarifa, la ruta y el grupo."
        }
      ]
    },
    savings: {
      title: "Un plan que encaja contigo. Y un coste compartido.",
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
      "title": "Primero, confianza. Después, un plan compartido.",
      "intro": "De la elección de compañeros a la hora de salida: acuerda lo importante antes del traslado. La disponibilidad depende de los viajeros de tu vuelo.",
      "steps": [
        {
          "title": "1. Prepara tu perfil",
          "description": "Confirma tu email y elige un alias y la información que quieres mostrar."
        },
        {
          "title": "2. Encuentra viajeros de tu vuelo",
          "description": "Añade número y fecha. Comprueba destino y horarios antes de conectar."
        },
        {
          "title": "3. Decide con quién compartir",
          "description": "Revisa perfiles y valoraciones y habla con tus posibles compañeros. Tú decides si el plan encaja contigo."
        },
        {
          "title": "4. Acordad la llegada con margen",
          "description": "Concretad punto de encuentro, salida, equipaje, destino y reparto del coste. Preparad una alternativa por si cambia el vuelo."
        },
        {
          "title": "5. Viaja y comparte tu experiencia",
          "description": "Revisad los detalles antes de salir y deja una valoración después del trayecto."
        }
      ]
    },
    mockups: {
      heading: "Decisiones claras, del perfil al encuentro",
      description:
        "Explora cómo revisar perfiles y acordar el traslado antes de compartirlo. Estas pantallas ilustran la experiencia prevista para la beta.",
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
      heading: "Prepara tu llegada con más confianza",
      body: "Elige compañeros con información, controla lo que compartes y organiza el traslado con tiempo. Apúntate a la beta: te avisaremos cuando tengas acceso.",
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
      title: "Confianza sin dudas pendientes",
      subtitle:
        "Qué información compartes, cómo eliges compañeros y cómo preparas la llegada.",
      items: [
        {
          "question": "¿Qué es Cojauny?",
          "answer": "Una app para conectar con otros viajeros de tu vuelo y coordinar planes como compartir el transporte del aeropuerto. Los participantes acuerdan el traslado y el pago; Cojauny no es un operador de transporte."
        },
        {
          "question": "¿Puedo usar la app al apuntarme?",
          "answer": "El registro te añade a la lista de acceso a la beta. Te avisaremos por email cuando tengas acceso. Apuntarte no garantiza acceso inmediato ni compañeros para un vuelo concreto."
        },
        {
          "question": "¿Cómo me ayuda Cojauny a compartir con más seguridad?",
          "answer": "Puedes revisar perfiles y valoraciones, hablar antes de aceptar y usar el bloqueo o la denuncia. Son herramientas para decidir con información; no garantizan la identidad de otra persona ni eliminan los riesgos de un viaje. Si algo te incomoda, no continúes."
        },
        {
          "question": "¿Cómo se tratan mis datos al apuntarme?",
          "answer": "Tus datos se utilizan para gestionar la lista de acceso y comunicarte tu entrada a la beta. Las novedades comerciales requieren tu elección de opt-in y la analítica opcional requiere consentimiento. La política de privacidad detalla finalidades, proveedores y cómo ejercer tus derechos."
        },
        {
          "question": "¿Cojauny garantiza que llegue a tiempo?",
          "answer": "La app ayuda a acordar horarios y encuentro, pero no opera el transporte ni controla tráfico, vuelos o la disponibilidad del grupo. Planifica la salida con margen, confirma los detalles y ten una alternativa si el tiempo es crítico."
        },
        {
          "question": "¿Qué información ven otros viajeros?",
          "answer": "El perfil puede mostrar tu alias, foto, información que añadas, valoraciones y aeropuerto habitual. El teléfono y los documentos no forman parte de sus campos públicos. Usa un alias si no quieres mostrar tu nombre real y evita incluir datos sensibles en el perfil o el chat."
        },
        {
          "question": "¿Cómo encuentro compañeros?",
          "answer": "Añade el número y la fecha de tu vuelo para buscar otros viajeros. La disponibilidad depende de quién se haya unido; revisa que el destino y los horarios del grupo encajen contigo."
        },
        {
          "question": "¿Puedo organizarme antes de volar?",
          "answer": "Sí, puedes añadir el vuelo y coordinar los detalles con antelación. Envía los mensajes cuando tengas conexión; acuerda el punto de encuentro antes de embarcar."
        },
        {
          "question": "¿Qué pasa si cambian mis planes?",
          "answer": "Avisa al grupo cuanto antes y actualiza los detalles o sal del evento desde la app. Revisa por separado las condiciones de cancelación del transporte que hayáis contratado."
        },
        {
          "question": "¿Cojauny cobra o reserva el transporte?",
          "answer": "Cojauny ayuda a coordinar el grupo y a calcular el reparto. No procesa los pagos del traslado. Acordad cómo contratar y pagar el transporte antes de viajar."
        },
        {
          "question": "¿Cuánto puedo ahorrar?",
          "answer": "Depende del precio final y del número de personas. Si un taxi cuesta 40 € y la tarifa no cambia, dos personas pagan 20 € cada una y cuatro pagan 10 €. Comprueba suplementos, equipaje, capacidad y posibles desvíos."
        },
        {
          "question": "¿Funciona en mi aeropuerto?",
          "answer": "Consulta las páginas de aeropuertos y añade el tuyo al registrarte. Tener una página de aeropuerto no garantiza que haya un grupo disponible para tu vuelo."
        },
        {
          "question": "¿Para qué sirve mi enlace de invitación?",
          "answer": "Tras el registro, el enlace personal te permite invitar a otros viajeros. Sus visitas y registros ayudan a dar prioridad a tu acceso. Te avisaremos por email cuando puedas entrar."
        }
      ,
        {
          question: '¿Qué diferencia hay entre Free y Premium?',
          answer:
            'Free permite un vuelo y un evento activos a la vez. Premium amplía las opciones para quienes viajan más. Consulta los planes y las condiciones disponibles cuando recibas acceso; la beta puede evolucionar.',
        }
      ],
    },
    forms: {
      beta: {
        heading: "Da el primer paso hacia una llegada mejor organizada",
        subheading:
          "Únete a la lista de acceso a la beta y descubre una forma de compartir con más confianza. Te avisaremos cuando puedas probarla.",
        title: 'Apúntate a la beta',
        description:
          "Solo necesitamos tu email para avisarte del acceso. Los demás campos son opcionales; las novedades comerciales las eliges tú.",
        success:
          '¡Ya estás en la lista! Te escribiremos por email en cuanto tengas acceso.',
        error: 'Algo ha fallado por nuestra parte — inténtalo de nuevo en un momento.',
        duplicateError: 'Parece que ya estás en la lista. Te contactaremos pronto.',
        submit: 'Apuntarme a la beta',
        checkboxLabel: 'He leído y acepto la {privacyLink} de Cojauny.',
        privacyLinkLabel: 'política de privacidad',
        referralNotice:
          "Usamos tu enlace para atribuir invitaciones y dar prioridad al acceso. Tus datos se tratan según la política de privacidad, que identifica los proveedores del servicio.",
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
        "Comparte el transporte del aeropuerto con más confianza: tú eliges a tus compañeros, qué compartes y cómo organizas la llegada.",
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
    trustDetails: {
      "title": "Privacy is part of the plan, too",
      "description": "Your email is enough to join the waitlist; marketing updates are optional. Optional analytics only run with your consent, which you can change in the footer. Read how data is used, which providers are involved and how to request deletion."
    },
    skipLink: 'Skip to main content',
    header: {
      home: 'Home',
      features: "Trust",
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
      title: "Cojauny | Confidence and privacy for shared airport transfers",
      description:
        "Plan your airport transfer with people on your flight. Make informed choices, protect your privacy, agree on timing and split the cost. Join the beta waitlist.",
      keywords: [
        'share airport transport',
        'shared airport transfer',
        'same flight passengers',
        'share airport transfer costs',
      ],
      ogTitle: "Your arrival, with confidence and a plan.",
      ogDescription:
        "You decide who to travel with and what to share. Plan your transfer with time to spare and split the cost. Join the Cojauny beta waitlist.",
    },
    hero: {
      eyebrow: "Confidence, privacy and a planned arrival · Beta",
      title: "Travel with more confidence. Arrive with a plan.",
      subtitle:
        "Share your airport transfer with people on your flight: review profiles, choose your travel companions and plan your arrival ahead of time. You control what you share. Splitting the cost can save you money, too.",
      primaryCta: 'Join the beta list',
      secondaryCta: 'See how Cojauny works',
      imageAlt: 'Preview of finding fellow passengers in Cojauny',
      trustSignals: [
        "You choose your companions",
        "Your privacy matters",
        "Agree on timing and meeting points"
      ],
    },
    heroVariants: {
      savings: {
        "title": "Choose with confidence. Share with peace of mind.",
        "subtitle": "Review profiles and ratings and agree on the details before your transfer. Plan an arrival with time to spare, stay in control of your information and share the cost, too."
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Join the Cojauny beta access list',
      label: "Your next arrival starts with a plan. Join the beta waitlist.",
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
      title: "Tools for sharing with more confidence",
      subtitle:
        "Privacy, informed decisions and control over your interactions, in an experience designed to help you plan your journey.",
      items: [
        {
          "title": "A profile you choose",
          "description": "Use an alias and choose the photo and information you publish. Phone numbers and documents are not part of the public profile fields.",
          "iconName": "lock"
        },
        {
          "title": "Verification with a clear meaning",
          "description": "Review the information and verification level shown on a profile. Email confirmation checks access to an inbox, not a person’s identity.",
          "iconName": "shield"
        },
        {
          "title": "Control over your interactions",
          "description": "Block a user or report an interaction in the app. If you feel uncomfortable, you can choose not to share the journey.",
          "iconName": "flag"
        },
        {
          "title": "Experiences that inform your choice",
          "description": "Use available ratings as one reference alongside the profile and your conversation beforehand.",
          "iconName": "users"
        },
        {
          "title": "Coordinate without publishing your number",
          "description": "Discuss destinations, timing and meeting points in the chat. Share journey details and keep sensitive information to yourself.",
          "iconName": "chat"
        },
        {
          "title": "A flight in common",
          "description": "Add your flight number and date to look for companions, then check that their destination and timing fit yours.",
          "iconName": "bolt"
        },
        {
          "title": "A clear meeting point and departure time",
          "description": "Choose an identifiable meeting point and agree on a departure time, how long to wait and what to do if someone is delayed.",
          "iconName": "pin"
        },
        {
          "title": "Connect with local knowledge",
          "description": "The local badge helps identify travellers returning home who can share tips.",
          "iconName": "globe"
        },
        {
          "title": "A clear cost before you leave",
          "description": "Check the estimated split and agree on how to book and pay for the transfer. Cojauny does not process that payment.",
          "iconName": "sparkles"
        }
      ],
    },
    value: {
      "eyebrow": "Confidence comes first",
      "title": "More control over your journey, your data and your decisions.",
      "subtitle": "Knowing the plan before you leave helps you share with greater peace of mind. Saving money is another benefit.",
      "items": [
        {
          "title": "Make informed choices",
          "description": "Review profiles and ratings, talk before accepting and choose your companions. You can block or report interactions that make you uncomfortable."
        },
        {
          "title": "Share only what is needed",
          "description": "Use an alias and the in-app chat to coordinate without publishing your phone number. Choose what to add to your profile and keep sensitive information private."
        },
        {
          "title": "Plan to arrive with time to spare",
          "description": "Agree on your destination, departure time and meeting point. Allow for luggage, traffic and delays, and have a backup if plans change."
        },
        {
          "title": "Save money, too",
          "description": "Split the cost of a transfer that suits your schedule and preferences. Savings depend on the fare, route and group."
        }
      ]
    },
    savings: {
      title: "A plan that works for you. A cost you can share.",
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
      "title": "Confidence first. Then a shared plan.",
      "intro": "From choosing companions to agreeing on departure: settle the important details before the transfer. Availability depends on the people on your flight.",
      "steps": [
        {
          "title": "1. Set up your profile",
          "description": "Confirm your email and choose an alias and the information you want to show."
        },
        {
          "title": "2. Find people on your flight",
          "description": "Add the flight number and date. Check destinations and timing before connecting."
        },
        {
          "title": "3. Choose your travel companions",
          "description": "Review profiles and ratings and talk to potential companions. You decide whether the plan works for you."
        },
        {
          "title": "4. Plan an arrival with time to spare",
          "description": "Agree on a meeting point, departure time, luggage, destination and cost split. Have a backup in case the flight changes."
        },
        {
          "title": "5. Travel and share your experience",
          "description": "Check the details before leaving and leave a rating after the journey."
        }
      ]
    },
    mockups: {
      heading: "Clear decisions, from profiles to meeting points",
      description:
        "Explore how to review profiles and agree on a transfer before sharing it. These screens illustrate the planned beta experience.",
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
      heading: "Plan your arrival with more confidence",
      body: "Make informed choices about companions, control what you share and plan ahead. Join the beta waitlist: we will notify you when access is available.",
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
      title: "Feel informed before you share",
      subtitle:
        "What you share, how you choose companions and how you plan your arrival.",
      items: [
        {
          "question": "What is Cojauny?",
          "answer": "An app for connecting with fellow passengers and coordinating plans such as shared airport transport. Participants arrange the transfer and payment; Cojauny is not a transport operator."
        },
        {
          "question": "Can I use the app as soon as I sign up?",
          "answer": "Signing up adds you to the beta access list. We'll email you when you can join. It does not guarantee immediate access or companions for a particular flight."
        },
        {
          "question": "How does Cojauny help me share more safely?",
          "answer": "You can review profiles and ratings, talk before accepting, and use blocking or reporting. These tools support informed decisions; they do not guarantee someone’s identity or remove travel risks. If something feels wrong, do not continue."
        },
        {
          "question": "How is my data used when I join the waitlist?",
          "answer": "Your details are used to manage the access waitlist and notify you about beta access. Marketing updates require your opt-in and optional analytics require consent. The privacy policy explains purposes, service providers and how to exercise your rights."
        },
        {
          "question": "Does Cojauny guarantee I will arrive on time?",
          "answer": "The app helps you agree on timing and meeting points, but it does not operate transport or control traffic, flights or group availability. Allow enough time, confirm the details and have an alternative if timing is critical."
        },
        {
          "question": "What can other travellers see about me?",
          "answer": "Your profile may show your alias, photo, information you add, ratings and home airport. Phone numbers and documents are not part of its public fields. Use an alias if you do not want to show your real name, and keep sensitive details out of your profile and chat."
        },
        {
          "question": "How do I find companions?",
          "answer": "Add your flight number and date to look for fellow passengers. Availability depends on who has joined. Check that the group's destination and timing suit you."
        },
        {
          "question": "Can I plan before flying?",
          "answer": "Yes. Add your flight and coordinate ahead of time. Send messages when connected and agree on a meeting point before boarding."
        },
        {
          "question": "What if my plans change?",
          "answer": "Tell the group as soon as possible, update the details or leave the event in the app. Check the cancellation terms of any separately booked transport."
        },
        {
          "question": "Does Cojauny book or charge for transport?",
          "answer": "Cojauny helps coordinate the group and calculate the split. It does not process transfer payments. Agree how to book and pay for the transport before travelling."
        },
        {
          "question": "How much can I save?",
          "answer": "It depends on the final fare and group size. If a taxi costs €40 and the fare stays the same, two people pay €20 each and four pay €10. Check surcharges, luggage, capacity and detours."
        },
        {
          "question": "Does it work at my airport?",
          "answer": "Explore the airport pages and add your airport when signing up. An airport page does not guarantee a group is available for your flight."
        },
        {
          "question": "What is my invitation link for?",
          "answer": "After signing up, your personal link lets you invite other travellers. Their visits and registrations help prioritise your access. We'll email you when you can join."
        }
      ,
        {
          question: 'How do Free and Premium differ?',
          answer:
            'Free supports one active flight and one active event at a time. Premium expands the options for frequent travellers. Check available plans and terms when you get access; the beta may evolve.',
        }
      ],
    },
    forms: {
      beta: {
        heading: "Take the first step towards a better planned arrival",
        subheading:
          "Join the beta waitlist and discover a more confident way to share. We will let you know when you can try it.",
        title: 'Join the beta list',
        description:
          "Your email is enough for access notifications. The other fields are optional, and marketing updates are your choice.",
        success: "You're on the list! We'll email you as soon as your spot is ready.",
        error: 'Something went wrong on our end — please try again in a moment.',
        duplicateError: "Looks like you're already on the list. We'll be in touch soon.",
        submit: 'Join the beta list',
        checkboxLabel: "I've read and agree to Cojauny's {privacyLink}.",
        privacyLinkLabel: 'privacy policy',
        referralNotice:
          "Your link attributes invitations and helps prioritise access. Your data is handled under the privacy policy, which identifies the service providers.",
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
      description: "Share your airport transfer with more confidence: choose your companions, what you share and how you plan your arrival.",
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
    trustDetails: {
      "title": "Privatsphäre gehört zum Reiseplan",
      "description": "Für die Zugangsliste genügt deine E-Mail; werbliche Neuigkeiten sind optional. Optionale Analysen starten nur mit deiner Einwilligung, die du im Seitenfuß ändern kannst. Erfahre, wofür Daten verwendet werden, welche Dienstleister beteiligt sind und wie du ihre Löschung beantragst."
    },
    skipLink: 'Zum Hauptinhalt springen',
    header: {
      home: 'Start',
      features: "Vertrauen",
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
      title: "Cojauny | Vertrauen und Privatsphäre beim Flughafentransfer",
      description:
        "Plane den Flughafentransfer mit Reisenden deines Flugs. Entscheide informiert, schütze deine Privatsphäre, vereinbare Zeiten und teile Kosten. Zur Beta anmelden.",
      keywords: [
        'Flughafentransfer teilen',
        'gemeinsamer Flughafentransfer',
        'Mitreisende gleicher Flug',
        'Kosten für Flughafentransfer teilen',
      ],
      ogTitle: "Deine Ankunft: mit Vertrauen und einem Plan.",
      ogDescription:
        "Du entscheidest, mit wem du reist und was du teilst. Plane den Transfer mit Zeitreserve und teile die Kosten. Melde dich für die Cojauny-Beta an.",
    },
    hero: {
      eyebrow: "Vertrauen, Datenschutz und eine geplante Ankunft · Beta",
      title: "Mit mehr Vertrauen reisen. Mit einem Plan ankommen.",
      subtitle:
        "Teile den Flughafentransfer mit Reisenden deines Flugs: Sieh dir Profile an, wähle deine Mitreisenden und plane die Ankunft frühzeitig. Du bestimmst, was du teilst. Geteilte Kosten können dir zusätzlich Geld sparen.",
      primaryCta: 'Für die Beta anmelden',
      secondaryCta: 'So funktioniert Cojauny',
      imageAlt: 'Vorschau der Suche nach Mitreisenden in Cojauny',
      trustSignals: [
        "Du wählst deine Mitreisenden",
        "Deine Privatsphäre zählt",
        "Zeiten und Treffpunkt vereinbaren"
      ],
    },
    heroVariants: {
      savings: {
        "title": "Mit Vertrauen entscheiden. Entspannter gemeinsam reisen.",
        "subtitle": "Prüfe Profile und Bewertungen und besprecht die Details vor dem Transfer. Plane Zeitreserven ein, behalte die Kontrolle über deine Informationen und teile auch die Kosten."
      },
    },
    heroQuickSignup: {
      ariaLabel: 'Für den Beta-Zugang von Cojauny anmelden',
      label: "Deine nächste Ankunft beginnt mit einem Plan. Zur Beta anmelden.",
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
      title: "Funktionen für mehr Vertrauen beim gemeinsamen Reisen",
      subtitle:
        "Privatsphäre, informierte Entscheidungen und Kontrolle über deine Kontakte helfen dir, die Reise zu organisieren.",
      items: [
        {
          "title": "Dein Profil, deine Entscheidung",
          "description": "Nutze einen Alias und wähle Foto und öffentliche Angaben selbst. Telefonnummer und Dokumente gehören nicht zu den Feldern des öffentlichen Profils.",
          "iconName": "lock"
        },
        {
          "title": "Verifizierung verständlich erklärt",
          "description": "Prüfe die Angaben und die angezeigte Verifizierungsstufe. Die E-Mail-Bestätigung prüft den Zugang zum Postfach, nicht die Identität einer Person.",
          "iconName": "shield"
        },
        {
          "title": "Kontrolle über deine Kontakte",
          "description": "Blockiere Nutzer oder melde eine Interaktion in der App. Wenn du dich unwohl fühlst, kannst du dich gegen die gemeinsame Fahrt entscheiden.",
          "iconName": "flag"
        },
        {
          "title": "Erfahrungen als Entscheidungshilfe",
          "description": "Nutze vorhandene Bewertungen als einen Anhaltspunkt neben dem Profil und dem Gespräch vor der Zusage.",
          "iconName": "users"
        },
        {
          "title": "Absprechen ohne öffentliche Telefonnummer",
          "description": "Besprecht Ziel, Zeiten und Treffpunkt im Chat. Teilt Reisedetails und behaltet sensible Informationen für euch.",
          "iconName": "chat"
        },
        {
          "title": "Ein gemeinsamer Flug als Ausgangspunkt",
          "description": "Füge Flugnummer und Datum hinzu und prüfe, ob Ziel und Zeiten möglicher Mitreisender zu deinen passen.",
          "iconName": "bolt"
        },
        {
          "title": "Klarer Treffpunkt, klare Abfahrtszeit",
          "description": "Wählt einen gut erkennbaren Treffpunkt. Vereinbart die Abfahrtszeit, wie lange ihr wartet und was bei Verspätungen passiert.",
          "iconName": "pin"
        },
        {
          "title": "Ortskenntnis nutzen",
          "description": "Das Local-Abzeichen kennzeichnet Reisende, die nach Hause zurückkehren und Tipps geben können.",
          "iconName": "globe"
        },
        {
          "title": "Die Kosten vor der Abfahrt klären",
          "description": "Prüfe die geschätzte Aufteilung und vereinbart Buchung und Bezahlung. Cojauny wickelt diese Zahlung nicht ab.",
          "iconName": "sparkles"
        }
      ],
    },
    value: {
      "eyebrow": "Vertrauen steht an erster Stelle",
      "title": "Mehr Kontrolle über deine Reise, deine Daten und deine Entscheidungen.",
      "subtitle": "Ein klarer Plan vor der Abfahrt hilft dir, entspannter gemeinsam zu reisen. Geld zu sparen ist ein weiterer Vorteil.",
      "items": [
        {
          "title": "Informiert entscheiden",
          "description": "Sieh dir Profile und Bewertungen an, sprich vor der Zusage mit anderen und wähle deine Mitreisenden. Unangenehme Interaktionen kannst du blockieren oder melden."
        },
        {
          "title": "Nur das Nötige teilen",
          "description": "Nutze einen Alias und den App-Chat, ohne deine Telefonnummer zu veröffentlichen. Entscheide, was in deinem Profil steht, und halte sensible Informationen privat."
        },
        {
          "title": "Mit Zeitreserve ankommen",
          "description": "Vereinbart Ziel, Abfahrtszeit und Treffpunkt. Plant Gepäck, Verkehr und Verspätungen ein und bereitet eine Alternative vor."
        },
        {
          "title": "Zusätzlich Geld sparen",
          "description": "Teile die Kosten eines Transfers, der zu deinen Zeiten und Wünschen passt. Die Ersparnis hängt von Tarif, Strecke und Gruppe ab."
        }
      ]
    },
    savings: {
      title: "Ein Plan, der zu dir passt. Kosten, die ihr teilt.",
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
      "title": "Erst Vertrauen. Dann ein gemeinsamer Plan.",
      "intro": "Von der Wahl der Mitreisenden bis zur Abfahrtszeit: Klärt die wichtigen Details vor dem Transfer. Die Verfügbarkeit hängt von den Reisenden deines Flugs ab.",
      "steps": [
        {
          "title": "1. Dein Profil vorbereiten",
          "description": "Bestätige deine E-Mail und wähle einen Alias und die Angaben, die du zeigen möchtest."
        },
        {
          "title": "2. Reisende deines Flugs finden",
          "description": "Füge Flugnummer und Datum hinzu. Prüfe Ziel und Zeiten, bevor du Kontakt aufnimmst."
        },
        {
          "title": "3. Deine Mitreisenden auswählen",
          "description": "Prüfe Profile und Bewertungen und sprich mit möglichen Mitreisenden. Du entscheidest, ob der Plan passt."
        },
        {
          "title": "4. Die Ankunft mit Zeitreserve planen",
          "description": "Vereinbart Treffpunkt, Abfahrt, Gepäck, Ziel und Kostenaufteilung. Bereitet eine Alternative für Flugänderungen vor."
        },
        {
          "title": "5. Reisen und Erfahrungen teilen",
          "description": "Prüft vor der Abfahrt die Details und hinterlasse nach der Fahrt eine Bewertung."
        }
      ]
    },
    mockups: {
      heading: "Klare Entscheidungen vom Profil bis zum Treffpunkt",
      description:
        "Entdecke, wie du Profile prüfst und den Transfer vorab besprichst. Die Ansichten zeigen die für die Beta geplante Erfahrung.",
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
      heading: "Plane deine Ankunft mit mehr Vertrauen",
      body: "Wähle Mitreisende informiert, bestimme selbst, was du teilst, und plane frühzeitig. Melde dich zur Beta an: Wir informieren dich, sobald du Zugang erhältst.",
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
      title: "Gut informiert gemeinsam reisen",
      subtitle:
        "Was du teilst, wie du Mitreisende auswählst und wie du die Ankunft planst.",
      items: [
        {
          "question": "Was ist Cojauny?",
          "answer": "Eine App, um Mitreisende deines Flugs zu finden und etwa einen gemeinsamen Flughafentransfer zu organisieren. Die Teilnehmenden vereinbaren Transfer und Bezahlung. Cojauny ist kein Transportunternehmen."
        },
        {
          "question": "Kann ich die App direkt nach der Anmeldung nutzen?",
          "answer": "Die Anmeldung setzt dich auf die Liste für den Beta-Zugang. Wir informieren dich per E-Mail, sobald du Zugang erhältst. Sofortiger Zugang oder Mitreisende für einen bestimmten Flug sind nicht garantiert."
        },
        {
          "question": "Wie hilft Cojauny, sicherer gemeinsam zu reisen?",
          "answer": "Du kannst Profile und Bewertungen prüfen, vor der Zusage sprechen und Nutzer blockieren oder melden. Diese Funktionen helfen bei informierten Entscheidungen; sie garantieren weder die Identität anderer noch eine risikofreie Reise. Wenn etwas nicht stimmt, fahre nicht mit."
        },
        {
          "question": "Wie werden meine Daten bei der Anmeldung genutzt?",
          "answer": "Deine Angaben dienen der Verwaltung der Zugangsliste und der Benachrichtigung über den Beta-Zugang. Werbliche Neuigkeiten erfordern dein Opt-in, optionale Analysen deine Einwilligung. Die Datenschutzerklärung beschreibt Zwecke, Dienstleister und deine Rechte."
        },
        {
          "question": "Garantiert Cojauny eine pünktliche Ankunft?",
          "answer": "Die App hilft, Zeiten und Treffpunkte abzusprechen. Sie betreibt keinen Transport und kontrolliert weder Verkehr noch Flüge oder die Verfügbarkeit der Gruppe. Plane genügend Zeit ein, bestätige die Details und halte bei wichtigen Terminen eine Alternative bereit."
        },
        {
          "question": "Was sehen andere von mir?",
          "answer": "Dein Profil kann Alias, Foto, selbst ergänzte Informationen, Bewertungen und Heimatflughafen zeigen. Telefonnummer und Dokumente gehören nicht zu den öffentlichen Feldern. Nutze einen Alias, wenn du deinen echten Namen nicht zeigen möchtest, und teile keine sensiblen Angaben im Profil oder Chat."
        },
        {
          "question": "Wie finde ich Mitreisende?",
          "answer": "Füge Flugnummer und Datum hinzu. Die Verfügbarkeit hängt davon ab, wer sich angemeldet hat. Prüfe, ob Ziel und Zeiten der Gruppe zu deinen Plänen passen."
        },
        {
          "question": "Kann ich vor dem Flug planen?",
          "answer": "Ja. Füge deinen Flug frühzeitig hinzu und besprecht die Details. Sende Nachrichten mit Internetverbindung und vereinbart den Treffpunkt vor dem Boarding."
        },
        {
          "question": "Was passiert, wenn sich meine Pläne ändern?",
          "answer": "Informiere die Gruppe frühzeitig und ändere die Details oder verlasse das Event in der App. Prüfe separat die Stornierungsbedingungen des gebuchten Transports."
        },
        {
          "question": "Bucht Cojauny den Transfer oder zieht den Fahrpreis ein?",
          "answer": "Cojauny hilft bei der Gruppenplanung und Kostenaufteilung, wickelt aber keine Transferzahlungen ab. Vereinbart vor der Reise, wie ihr den Transport bucht und bezahlt."
        },
        {
          "question": "Wie viel kann ich sparen?",
          "answer": "Das hängt vom Endpreis und der Gruppengröße ab. Kostet das Taxi unverändert 40 €, zahlen zwei Personen je 20 € und vier je 10 €. Prüft Zuschläge, Gepäck, Kapazität und Umwege."
        },
        {
          "question": "Ist mein Flughafen dabei?",
          "answer": "Sieh dir die Flughafenseiten an und gib deinen Flughafen bei der Anmeldung an. Eine Flughafenseite garantiert keine verfügbare Gruppe für deinen Flug."
        },
        {
          "question": "Wozu dient mein Einladungslink?",
          "answer": "Nach der Anmeldung kannst du über deinen persönlichen Link andere Reisende einladen. Besuche und Anmeldungen helfen, deinen Zugang zu priorisieren. Wir informieren dich per E-Mail, sobald du teilnehmen kannst."
        }
      ,
        {
          question: 'Was unterscheidet Free und Premium?',
          answer:
            'Free erlaubt einen aktiven Flug und ein aktives Event gleichzeitig. Premium erweitert die Möglichkeiten für Vielreisende. Prüfe die verfügbaren Tarife und Bedingungen bei deinem Zugang; die Beta kann sich ändern.',
        }
      ],
    },
    forms: {
      beta: {
        heading: "Der erste Schritt zu einer besser geplanten Ankunft",
        subheading:
          "Melde dich für den Beta-Zugang an und entdecke eine Möglichkeit, mit mehr Vertrauen gemeinsam zu reisen. Wir informieren dich, sobald du die App testen kannst.",
        title: 'Für die Beta anmelden',
        description:
          "Für die Benachrichtigung zum Zugang genügt deine E-Mail. Weitere Felder sind optional; werbliche Neuigkeiten wählst du selbst.",
        success:
          'Du stehst auf der Liste! Wir schreiben dir, sobald dein Zugang bereit ist.',
        error: 'Auf unserer Seite ist etwas schiefgelaufen — versuch es gleich noch mal.',
        duplicateError:
          'Sieht so aus, als wärst du schon auf der Liste. Wir melden uns bald.',
        submit: 'Für die Beta anmelden',
        checkboxLabel: 'Ich habe Cojaunys {privacyLink} gelesen und akzeptiere sie.',
        privacyLinkLabel: 'Datenschutzrichtlinie',
        referralNotice:
          "Dein Link ordnet Einladungen zu und hilft bei der Priorisierung des Zugangs. Deine Daten werden gemäß der Datenschutzerklärung verarbeitet, die die Dienstleister nennt.",
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
        "Teile den Flughafentransfer mit mehr Vertrauen: Du wählst deine Mitreisenden, deine öffentlichen Angaben und den Plan für die Ankunft.",
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
    trustDetails: {
      "title": "La confidentialité fait aussi partie du voyage",
      "description": "Votre email suffit pour rejoindre la liste ; les actualités commerciales sont facultatives. Les analyses facultatives nécessitent votre consentement, modifiable en bas de page. Consultez les usages des données, les prestataires concernés et la procédure de suppression."
    },
    skipLink: 'Aller au contenu principal',
    header: {
      home: 'Accueil',
      features: "Confiance",
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
      title: "Cojauny | Confiance et confidentialité pour votre transfert",
      description:
        "Organisez votre transfert avec les voyageurs de votre vol. Choisissez en connaissance de cause, préservez votre vie privée et partagez les frais. Rejoignez la bêta.",
      keywords: [
        'partager transport aéroport',
        'transfert aéroport partagé',
        'voyageurs même vol',
        'partager frais transfert aéroport',
      ],
      ogTitle: "Votre arrivée, avec confiance et un plan.",
      ogDescription:
        "Vous décidez avec qui voyager et quoi partager. Préparez le transfert avec une marge de temps et répartissez les frais. Inscrivez-vous à la bêta Cojauny.",
    },
    hero: {
      eyebrow: "Confiance, confidentialité et arrivée organisée · Bêta",
      title: "Voyagez avec plus de confiance. Arrivez avec un plan.",
      subtitle:
        "Partagez votre transfert à l’aéroport avec les voyageurs de votre vol : consultez les profils, choisissez vos compagnons et préparez votre arrivée à l’avance. Vous gardez le contrôle de ce que vous partagez. Répartir les frais peut aussi vous faire économiser.",
      primaryCta: 'M’inscrire à la bêta',
      secondaryCta: 'Comment fonctionne Cojauny',
      imageAlt: 'Aperçu de la recherche de compagnons de vol dans Cojauny',
      trustSignals: [
        "Vous choisissez vos compagnons",
        "Votre vie privée compte",
        "Horaires et rendez-vous convenus"
      ],
    },
    heroVariants: {
      savings: {
        "title": "Choisissez en confiance. Partagez plus sereinement.",
        "subtitle": "Consultez les profils et les avis, puis convenez des détails avant le transfert. Prévoyez une marge à l’arrivée, gardez le contrôle de vos informations et partagez aussi les frais."
      },
    },
    heroQuickSignup: {
      ariaLabel: 'M’inscrire sur la liste d’accès à la bêta Cojauny',
      label: "Votre prochaine arrivée commence par un plan. Rejoignez la bêta.",
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
      title: "Des outils pour partager avec plus de confiance",
      subtitle:
        "Vie privée, décisions éclairées et contrôle de vos interactions, dans une expérience conçue pour organiser votre voyage.",
      items: [
        {
          "title": "Un profil que vous choisissez",
          "description": "Utilisez un pseudo et choisissez votre photo et vos informations publiques. Le téléphone et les documents ne font pas partie des champs du profil public.",
          "iconName": "lock"
        },
        {
          "title": "Une vérification au sens précis",
          "description": "Consultez les informations et le niveau de vérification affiché. La confirmation de l’email vérifie l’accès à une boîte mail, pas l’identité d’une personne.",
          "iconName": "shield"
        },
        {
          "title": "Le contrôle de vos interactions",
          "description": "Bloquez un utilisateur ou signalez une interaction dans l’app. Si vous êtes mal à l’aise, vous pouvez choisir de ne pas partager le trajet.",
          "iconName": "flag"
        },
        {
          "title": "Des expériences pour éclairer votre choix",
          "description": "Utilisez les avis disponibles comme un repère supplémentaire, avec le profil et les échanges avant d’accepter.",
          "iconName": "users"
        },
        {
          "title": "Coordonner sans publier votre téléphone",
          "description": "Discutez de la destination, des horaires et du rendez-vous dans le chat. Partagez les détails du voyage et gardez les informations sensibles pour vous.",
          "iconName": "chat"
        },
        {
          "title": "Un vol en commun",
          "description": "Ajoutez le numéro et la date du vol, puis vérifiez que la destination et les horaires des voyageurs correspondent aux vôtres.",
          "iconName": "bolt"
        },
        {
          "title": "Un rendez-vous et un départ clairs",
          "description": "Choisissez un lieu facile à identifier. Convenez du départ, du temps d’attente et de la marche à suivre en cas de retard.",
          "iconName": "pin"
        },
        {
          "title": "Profitez des conseils locaux",
          "description": "Le badge local identifie les voyageurs qui rentrent chez eux et peuvent partager des conseils.",
          "iconName": "globe"
        },
        {
          "title": "Des frais clairs avant le départ",
          "description": "Consultez la répartition estimée et convenez de la réservation et du paiement. Cojauny ne traite pas ce paiement.",
          "iconName": "sparkles"
        }
      ],
    },
    value: {
      "eyebrow": "La confiance avant tout",
      "title": "Plus de contrôle sur votre voyage, vos données et vos décisions.",
      "subtitle": "Connaître le plan avant de partir aide à partager plus sereinement. Les économies sont un avantage supplémentaire.",
      "items": [
        {
          "title": "Choisir en connaissance de cause",
          "description": "Consultez les profils et les avis, échangez avant d’accepter et choisissez vos compagnons. Vous pouvez bloquer ou signaler une interaction qui vous met mal à l’aise."
        },
        {
          "title": "Partager seulement le nécessaire",
          "description": "Utilisez un pseudo et le chat de l’app sans publier votre téléphone. Choisissez les informations de votre profil et gardez vos données sensibles pour vous."
        },
        {
          "title": "Prévoir une marge à l’arrivée",
          "description": "Convenez de la destination, du départ et du rendez-vous. Prévoyez bagages, circulation et retards, ainsi qu’une solution de remplacement."
        },
        {
          "title": "Économiser aussi",
          "description": "Répartissez les frais d’un transfert adapté à vos horaires et à vos préférences. L’économie dépend du tarif, du trajet et du groupe."
        }
      ]
    },
    savings: {
      title: "Un plan qui vous convient. Des frais à partager.",
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
      "title": "D’abord la confiance. Puis un plan partagé.",
      "intro": "Du choix des compagnons à l’heure de départ : convenez des détails essentiels avant le transfert. La disponibilité dépend des voyageurs de votre vol.",
      "steps": [
        {
          "title": "1. Préparez votre profil",
          "description": "Confirmez votre email et choisissez un pseudo et les informations que vous souhaitez afficher."
        },
        {
          "title": "2. Trouvez les voyageurs de votre vol",
          "description": "Ajoutez le numéro et la date. Vérifiez les destinations et les horaires avant de prendre contact."
        },
        {
          "title": "3. Choisissez vos compagnons",
          "description": "Consultez les profils et les avis, puis échangez avec les voyageurs. Vous décidez si le plan vous convient."
        },
        {
          "title": "4. Prévoyez une marge à l’arrivée",
          "description": "Convenez du rendez-vous, du départ, des bagages, de la destination et des frais. Préparez une alternative si le vol change."
        },
        {
          "title": "5. Voyagez et partagez votre expérience",
          "description": "Vérifiez les détails avant le départ et laissez un avis après le trajet."
        }
      ]
    },
    mockups: {
      heading: "Des décisions claires, du profil au rendez-vous",
      description:
        "Découvrez comment consulter les profils et convenir du transfert avant de le partager. Ces écrans illustrent l’expérience prévue pour la bêta.",
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
      heading: "Préparez votre arrivée avec plus de confiance",
      body: "Choisissez vos compagnons en connaissance de cause, contrôlez ce que vous partagez et anticipez le transfert. Inscrivez-vous à la bêta : nous vous informerons dès que votre accès sera disponible.",
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
      title: "Partager en étant bien informé",
      subtitle:
        "Ce que vous partagez, comment choisir vos compagnons et comment préparer votre arrivée.",
      items: [
        {
          "question": "Qu’est-ce que Cojauny ?",
          "answer": "Une app pour rencontrer des voyageurs de votre vol et organiser des plans comme un transport partagé à l’aéroport. Les participants conviennent du transfert et du paiement. Cojauny n’est pas un transporteur."
        },
        {
          "question": "Puis-je utiliser l’app dès mon inscription ?",
          "answer": "L’inscription vous ajoute à la liste d’accès à la bêta. Nous vous écrirons lorsque votre accès sera disponible. Elle ne garantit ni accès immédiat ni compagnons pour un vol donné."
        },
        {
          "question": "Comment Cojauny aide-t-elle à partager plus sereinement ?",
          "answer": "Vous pouvez consulter les profils et les avis, échanger avant d’accepter, bloquer ou signaler. Ces outils aident à décider en connaissance de cause ; ils ne garantissent pas l’identité d’une personne ni un voyage sans risque. Si quelque chose vous met mal à l’aise, ne poursuivez pas."
        },
        {
          "question": "Comment mes données sont-elles utilisées à l’inscription ?",
          "answer": "Vos informations servent à gérer la liste d’accès et à vous informer de votre entrée dans la bêta. Les actualités commerciales nécessitent votre opt-in et les analyses facultatives votre consentement. La politique de confidentialité explique les finalités, les prestataires et vos droits."
        },
        {
          "question": "Cojauny garantit-elle une arrivée à l’heure ?",
          "answer": "L’app aide à convenir des horaires et du rendez-vous. Elle n’opère pas le transport et ne contrôle ni circulation, ni vols, ni disponibilité du groupe. Prévoyez une marge, confirmez les détails et gardez une alternative si l’horaire est essentiel."
        },
        {
          "question": "Que voient les autres voyageurs ?",
          "answer": "Votre profil peut afficher votre pseudo, photo, informations ajoutées, avis et aéroport habituel. Le téléphone et les documents ne font pas partie de ses champs publics. Utilisez un pseudo pour ne pas afficher votre nom réel et évitez les données sensibles dans le profil ou le chat."
        },
        {
          "question": "Comment trouver des compagnons ?",
          "answer": "Ajoutez le numéro et la date de votre vol. La disponibilité dépend des voyageurs inscrits. Vérifiez que la destination et les horaires du groupe vous conviennent."
        },
        {
          "question": "Puis-je m’organiser avant le vol ?",
          "answer": "Oui. Ajoutez le vol et convenez des détails à l’avance. Envoyez les messages lorsque vous êtes connecté et fixez le lieu de rencontre avant l’embarquement."
        },
        {
          "question": "Et si mes plans changent ?",
          "answer": "Prévenez le groupe au plus tôt, modifiez les détails ou quittez l’événement dans l’app. Vérifiez séparément les conditions d’annulation du transport réservé."
        },
        {
          "question": "Cojauny réserve-t-il le transport ou encaisse-t-il le paiement ?",
          "answer": "Cojauny aide à organiser le groupe et à répartir les frais. L’app ne traite pas les paiements du transfert. Convenez de la réservation et du règlement avant le voyage."
        },
        {
          "question": "Combien puis-je économiser ?",
          "answer": "Cela dépend du prix final et du groupe. Si un taxi coûte toujours 40 €, deux personnes paient 20 € chacune et quatre paient 10 €. Vérifiez suppléments, bagages, capacité et détours."
        },
        {
          "question": "Mon aéroport est-il disponible ?",
          "answer": "Consultez les pages aéroports et indiquez le vôtre à l’inscription. Une page aéroport ne garantit pas un groupe disponible pour votre vol."
        },
        {
          "question": "À quoi sert mon lien d’invitation ?",
          "answer": "Après l’inscription, votre lien personnel permet d’inviter d’autres voyageurs. Leurs visites et inscriptions contribuent à prioriser votre accès. Nous vous écrirons lorsque vous pourrez participer."
        }
      ,
        {
          question: 'Quelle différence entre Free et Premium ?',
          answer:
            'Free permet un vol et un événement actifs à la fois. Premium élargit les possibilités pour les voyageurs fréquents. Consultez les offres et conditions lors de votre accès ; la bêta peut évoluer.',
        }
      ],
    },
    forms: {
      beta: {
        heading: "Le premier pas vers une arrivée mieux organisée",
        subheading:
          "Rejoignez la liste d’accès à la bêta et découvrez une façon de partager avec plus de confiance. Nous vous préviendrons quand vous pourrez l’essayer.",
        title: 'M’inscrire à la bêta',
        description:
          "Votre email suffit pour être informé de l’accès. Les autres champs sont facultatifs ; les actualités commerciales restent votre choix.",
        success:
          'Vous êtes sur la liste ! Nous vous écrirons dès que votre accès sera prêt.',
        error: 'Un problème est survenu de notre côté — réessayez dans un instant.',
        duplicateError:
          'Il semble que vous soyez déjà sur la liste. Nous vous recontactons bientôt.',
        submit: 'M’inscrire à la bêta',
        checkboxLabel: "J'ai lu et j'accepte la {privacyLink} de Cojauny.",
        privacyLinkLabel: 'politique de confidentialité',
        referralNotice:
          "Votre lien permet d’attribuer les invitations et de prioriser l’accès. Vos données sont traitées selon la politique de confidentialité, qui identifie les prestataires du service.",
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
        "Partagez votre transfert à l’aéroport avec plus de confiance : choisissez vos compagnons, vos informations publiques et votre plan pour l’arrivée.",
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
