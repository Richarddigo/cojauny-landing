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
      description: string;
      cta: string;
    };
    premium: {
      name: string;
      price: string;
      description: string;
      cta: string;
      badge?: string;
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
    blog: string;
    languageLabel: string;
  };
}

export const landingCopy: Record<Locale, LandingCopy> = {
  es: {
    skipLink: 'Saltar al contenido principal',
    header: {
      home: 'Inicio',
      features: 'Características',
      demo: 'Demo',
      pricing: 'Precios',
      beta: 'Beta',
      blog: 'Blog'
    },
    seo: {
      title: 'Cojauny · Tu compañero de viaje perfecto empieza aquí',
      description:
        'Conecta con viajeros de tu mismo vuelo para compartir transporte al aeropuerto, organizar eventos y chatear en tiempo real. Ahorra hasta un 75% y reduce tu huella de carbono.',
      keywords: [
        'compartir vuelo',
        'transporte aeropuerto compartido',
        'matching vuelos',
        'eventos viajeros',
        'chat viajeros',
        'ahorro transporte',
        'viaje sostenible',
        'comunidad viajeros'
      ],
      ogTitle: 'Cojauny · Comparte vuelos, comparte costos, comparte experiencias',
      ogDescription:
        'La app que conecta viajeros del mismo vuelo para compartir transporte, crear eventos y reducir costos. Disponible para iOS y Android.'
    },
    hero: {
      eyebrow: '🌍 Únete a miles de viajeros inteligentes',
      title: 'Tu compañero de viaje perfecto empieza aquí',
      subtitle:
        'Cojauny conecta viajeros del mismo vuelo para compartir transporte, organizar eventos y chatear en tiempo real. Ahorra hasta un 75%, reduce tu huella de carbono y haz nuevos amigos en cada viaje.',
      primaryCta: 'Únete al Beta',
      secondaryCta: 'Ver Demo',
      imageAlt: 'App Cojauny mostrando matching de vuelos y eventos compartidos en iPhone'
    },
    features: {
      title: 'Todo lo que necesitas en una sola app',
      subtitle:
        'Matching por vuelo, eventos con cupos, chat en tiempo real y mucho más. Cojauny integra todo lo necesario para que tu viaje sea más económico, sostenible y social.',
      items: [
        {
          title: 'Matching por Vuelo',
          description:
            'Encuentra automáticamente viajeros con tu mismo vuelo o vuelos similares. Nuestro algoritmo te conecta con las mejores opciones de transporte compartido.',
          iconName: 'bolt'
        },
        {
          title: 'Eventos con Cupos',
          description:
            'Crea o únete a eventos de transporte compartido, comidas o actividades. Cada evento tiene cupos limitados y puedes ver quiénes participan en tiempo real.',
          iconName: 'users'
        },
        {
          title: 'Chat en Tiempo Real',
          description:
            'Chatea directamente con organizadores de eventos. Los usuarios Premium tienen acceso a chats grupales con todos los participantes del evento.',
          iconName: 'chat'
        },
        {
          title: 'Perfiles Verificados',
          description:
            'Viaja con confianza. Todos los usuarios tienen perfiles verificados con foto y sistema de reputación para garantizar seguridad y confianza.',
          iconName: 'shield'
        },
        {
          title: '78 Idiomas Soportados',
          description:
            'Comunícate en tu idioma. Cojauny está disponible en 78 idiomas para que conectes con viajeros de todo el mundo sin barreras.',
          iconName: 'globe'
        },
        {
          title: 'Notificaciones Inteligentes',
          description:
            'Recibe alertas sobre nuevos eventos, cambios en tu vuelo, mensajes de chat y recordatorios para que nunca te pierdas nada importante.',
          iconName: 'sparkles'
        },
        {
          title: 'Estadísticas de Ahorro e Impacto',
          description:
            'Visualiza cuánto dinero has ahorrado y cuánto CO₂ has reducido. Cada viaje compartido contribuye a un planeta más sostenible.',
          iconName: 'bolt'
        },
        {
          title: 'Eventos Recurrentes',
          description:
            '¿Viajas frecuentemente en la misma ruta? Crea eventos recurrentes y construye una comunidad estable de compañeros de viaje.',
          iconName: 'users'
        }
      ]
    },
    value: {
      title: '¿Por qué miles de viajeros eligen Cojauny?',
      subtitle:
        'Resolvemos los principales problemas que enfrentan los viajeros modernos: costos altos, impacto ambiental, soledad, coordinación complicada y seguridad.',
      items: [
        {
          title: '💸 Reduce tus costos de transporte hasta un 75%',
          description:
            'Los taxis y Uber al aeropuerto son carísimos. Con Cojauny, compartes el costo entre varios viajeros del mismo vuelo. Ahorra entre 50-75% en cada trayecto.'
        },
        {
          title: '🌱 Reduce tu huella de carbono',
          description:
            'Menos coches en la carretera significa menos emisiones. Cada viaje compartido contribuye a un planeta más sostenible. Visualiza tu impacto en CO₂ ahorrado.'
        },
        {
          title: '🤝 Conecta con viajeros afines',
          description:
            'Viajar solo puede ser aburrido. Cojauny te conecta con personas que van al mismo destino. Haz amigos, comparte experiencias y crea una red global.'
        },
        {
          title: '⏱️ Coordinación automática y sin estrés',
          description:
            'Olvida los grupos de WhatsApp eternos. Nuestro sistema de matching y eventos hace toda la coordinación por ti. Solo llégale al punto de encuentro.'
        },
        {
          title: '🛡️ Seguridad y confianza garantizadas',
          description:
            'Perfiles verificados, sistema de reputación y chat integrado. Sabes con quién viajas antes de comprometerte. Tu seguridad es nuestra prioridad.'
        },
        {
          title: '📱 Todo en una sola app',
          description:
            'No más saltar entre apps de vuelos, chat, mapas y pagos. Cojauny integra todo: información de vuelos, eventos, chat y estadísticas en un solo lugar.'
        }
      ]
    },
    savings: {
      title: 'El impacto de viajar inteligente con Cojauny',
      caption: 'El potencial que alcanzaremos juntos cuando lances tu próximo viaje con nosotros.',
      metrics: [
        {
          value: '50,000+',
          label: 'Viajeros Objetivo Año 1',
          description: 'Nuestro objetivo es conectar a más de 50,000 viajeros en el primer año, creando una comunidad global de transporte compartido.'
        },
        {
          value: '50-75%',
          label: 'Ahorro Potencial',
          description: 'Podrás ahorrar entre 50% y 75% en cada trayecto al aeropuerto compartiendo con otros pasajeros de tu mismo vuelo.'
        },
        {
          value: '1,000+ Ton',
          label: 'CO₂ a Reducir',
          description: 'Juntos podemos evitar más de 1,000 toneladas de emisiones de CO₂ en el primer año compartiendo trayectos.'
        },
        {
          value: '120+',
          label: 'Aeropuertos Disponibles',
          description: 'Cojauny estará disponible en más de 120 aeropuertos principales de Europa y Estados Unidos desde el lanzamiento.'
        }
      ]
    },
    workflow: {
      title: 'Cómo funciona Cojauny',
      intro: 'De cero a viaje compartido en 5 pasos simples. Empieza a ahorrar y conectar en minutos.',
      steps: [
        {
          title: '1. Descarga y regístrate',
          description: 'Descarga Cojauny en iOS o Android. Regístrate con Google, Apple o email. Completa tu perfil con foto para ganar confianza.'
        },
        {
          title: '2. Añade tu vuelo',
          description: 'Introduce tu número de vuelo y fecha. Cojauny busca automáticamente información del vuelo y te conecta con otros viajeros.'
        },
        {
          title: '3. Descubre o crea eventos',
          description: 'Únete a eventos existentes como "Compartir taxi aeropuerto A a ciudad B" o crea el tuyo propio (Premium). Ve participantes y cupos disponibles.'
        },
        {
          title: '4. Coordina por chat',
          description: 'Chatea con el organizador (Free) o con todo el grupo (Premium). Comparte detalles finales, ubicación y número de contacto.'
        },
        {
          title: '5. Viaja y visualiza tu impacto',
          description: 'Comparte el trayecto, divide el costo y disfruta. Luego visualiza cuánto ahorraste en dinero y cuánto CO₂ redujiste.'
        }
      ]
    },
    mockups: {
      heading: 'Explora la app que transformará cómo viajas',
      description:
        'Descubre las pantallas principales de Cojauny: búsqueda de vuelos, eventos con cupos, chat en tiempo real, perfiles verificados y panel de impacto.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Búsqueda',
          title: 'Encuentra tu vuelo en segundos',
          description:
            'Introduce tu número de vuelo y fecha. Nuestro sistema busca automáticamente información del vuelo y te muestra otros viajeros disponibles.',
          image: '/images/mockups/mockup-flight-search.svg'
        },
        {
          id: 'events-list',
          badge: 'Eventos',
          title: 'Eventos de tu vuelo',
          description:
            'Ve todos los eventos disponibles para tu vuelo: "Compartir taxi aeropuerto A a ciudad B", "Cena en ciudad destino", etc. Con cupos y participantes en tiempo real.',
          image: '/images/mockups/mockup-events-list.svg'
        },
        {
          id: 'event-detail',
          badge: 'Detalle',
          title: 'Toda la información del evento',
          description:
            'Ve organizador, participantes confirmados, cupos disponibles, punto de encuentro, hora y costos estimados. Dale like o comenta.',
          image: '/images/mockups/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Chat privado y grupal',
          description:
            'Chatea directamente con organizadores (Free) o con todo el grupo (Premium). Comparte ubicación, detalles de pago y coordina en tiempo real.',
          image: '/images/mockups/mockup-chat.svg'
        },
        {
          id: 'profile',
          badge: 'Perfil',
          title: 'Perfiles verificados',
          description:
            'Ve información de otros viajeros: foto, nombre, verificación, reputación y eventos en los que han participado. Viaja con confianza.',
          image: '/images/mockups/mockup-profile.svg'
        },
        {
          id: 'impact',
          badge: 'Impacto',
          title: 'Tu ahorro y huella de carbono',
          description:
            'Panel con gráficos de cuánto dinero has ahorrado, cuánto CO₂ has reducido y estadísticas de tus viajes compartidos.',
          image: '/images/mockups/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: '¿Listo para empezar a ahorrar en tus viajes?',
      body: 'Únete a la revolución del viaje compartido. Serás parte de una comunidad que reducirá costos, emisiones de CO₂ y creará nuevas amistades en cada vuelo.',
      link: '#beta-signup',
      linkLabel: 'Únete al Beta Ahora'
    },
    pricing: {
      title: 'Elige el plan perfecto para ti',
      subtitle: 'Comienza gratis y actualiza cuando estés listo para desbloquear todo el potencial de Cojauny.',
      plans: {
        free: {
          name: 'Free',
          price: 'Gratis',
          description: 'Perfecto para probar Cojauny y hacer tu primer viaje compartido',
          cta: 'Empezar Gratis'
        },
        premium: {
          name: 'Premium',
          price: '4,99€/mes',
          description: 'Para viajeros que quieren acceso completo y viajes ilimitados. 49€/año (ahorra 17%)',
          cta: 'Actualizar a Premium'
        }
      },
      comparison: {
        title: 'Comparación de Planes',
        features: [
          {
            feature: 'Viajes que puedes añadir',
            free: '1 viaje',
            premium: 'Ilimitados'
          },
          {
            feature: 'Eventos a los que puedes unirte',
            free: '1 evento',
            premium: 'Ilimitados'
          },
          {
            feature: 'Crear nuevos eventos',
            free: false,
            premium: true
          },
          {
            feature: 'Chat con organizadores',
            free: true,
            premium: true
          },
          {
            feature: 'Chat grupal con participantes',
            free: false,
            premium: true
          },
          {
            feature: 'Eventos recurrentes',
            free: false,
            premium: true
          },
          {
            feature: 'Estadísticas avanzadas ahorro/CO₂',
            free: 'Básicas',
            premium: 'Completas'
          },
          {
            feature: 'Soporte prioritario',
            free: false,
            premium: true
          },
          {
            feature: 'Distintivo Premium en perfil',
            free: false,
            premium: true
          }
        ]
      }
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesitas saber sobre Cojauny',
      items: [
        {
          question: '¿Cómo funciona el matching por vuelo?',
          answer: 'Simplemente introduces tu número de vuelo y fecha. Cojauny busca automáticamente en nuestra base de datos de vuelos (integrada con Aerodatabox API) y te conecta con otros viajeros del mismo vuelo o vuelos similares en las mismas fechas.'
        },
        {
          question: '¿Es seguro compartir transporte con desconocidos?',
          answer: 'Sí. Todos los usuarios deben verificar su perfil con foto. Además, tenemos un sistema de reputación donde puedes ver las valoraciones de otros viajeros. Puedes revisar el perfil completo de cada persona antes de unirte a un evento, y el chat te permite conocerles antes del viaje.'
        },
        {
          question: '¿Qué pasa si necesito cancelar?',
          answer: 'Puedes salir de un evento en cualquier momento desde la app. Si eres el organizador y cancelas, todos los participantes recibirán una notificación automática. Recomendamos avisar con la mayor antelación posible para que otros puedan reorganizarse.'
        },
        {
          question: '¿Cuál es la diferencia entre el plan Free y Premium?',
          answer: 'Con Free puedes añadir 1 viaje y unirte a 1 evento, perfecto para probar. Solo puedes chatear con organizadores, no con el grupo. Con Premium puedes añadir viajes ilimitados, unirte y crear eventos ilimitados, acceder a chats grupales, crear eventos recurrentes y obtener estadísticas completas.'
        },
        {
          question: '¿Cómo se manejan los pagos del transporte compartido?',
          answer: 'Cojauny no procesa pagos directamente. Los viajeros coordinan entre ellos cómo dividir el costo (efectivo, Bizum, transferencia, etc.). La app muestra estimaciones de ahorro, pero el pago final es responsabilidad de los participantes.'
        },
        {
          question: '¿Qué tipos de eventos puedo crear o unirme?',
          answer: 'Hay varios tipos: transporte compartido al aeropuerto de salida, transporte desde el aeropuerto de llegada, compartir taxi, compartir coche privado, compartir parking de larga estancia, comidas en el destino, y actividades sociales post-vuelo. Los usuarios Premium pueden crear cualquier tipo.'
        },
        {
          question: '¿Funciona Cojauny en todos los aeropuertos?',
          answer: 'Cojauny opera en más de 120 aeropuertos principales en todo el mundo y seguimos expandiéndonos. Si tu aeropuerto no está en la lista, puedes solicitarlo y lo añadiremos según la demanda.'
        },
        {
          question: '¿Qué pasa con mis datos personales?',
          answer: 'Tu privacidad es nuestra prioridad. Solo compartimos la información mínima necesaria (nombre y foto de perfil). Tú decides si quieres compartir redes sociales o números de teléfono. Todos los datos están encriptados y cumplimos 100% con GDPR.'
        },
        {
          question: '¿Puedo usar Cojauny en mi idioma?',
          answer: '¡Sí! Cojauny soporta 78 idiomas diferentes, incluyendo español, inglés, francés, alemán, chino, japonés, árabe y muchos más. La app detecta automáticamente tu idioma del sistema.'
        },
        {
          question: '¿Cuánto puedo ahorrar realmente?',
          answer: 'El ahorro depende de la ruta y cuántas personas comparten. En promedio, nuestros usuarios ahorran entre 50-75% en transporte al aeropuerto. Por ejemplo, un taxi de 60€ dividido entre 4 personas son solo 15€ por persona.'
        },
        {
          question: '¿Existe un plan anual? ¿Cuánto ahorro?',
          answer: 'Sí. El plan Premium cuesta 4,99€/mes o 49€/año. Con el plan anual ahorras 10,88€ (17% de descuento). Si viajas regularmente, el plan anual se paga solo con 2-3 trayectos compartidos al año.'
        },
        {
          question: '¿Qué pasa si mi vuelo se retrasa o cancela?',
          answer: 'Cojauny recibe actualizaciones en tiempo real de los vuelos. Si tu vuelo cambia, todos los participantes de tus eventos reciben notificaciones automáticas. Puedes ajustar los horarios del evento o cancelarlo si es necesario.'
        },
        {
          question: '¿Cómo funciona el sistema de reputación?',
          answer: 'Después de cada evento, los participantes pueden dejar valoraciones y comentarios. Estas reseñas son visibles en tu perfil. Una buena reputación aumenta la confianza y hace que más personas quieran viajar contigo.'
        }
      ]
    },
    forms: {
      beta: {
        title: 'Únete al Beta de Cojauny',
        description:
          '🌟 Acceso anticipado | 💰 Precio especial de lanzamiento | 🏆 Distintivo de early adopter | 🛠️ Feedback directo al equipo | 🚀 Soporte prioritario',
        success:
          '¡Bienvenido a Cojauny! 🎉 Te enviaremos un correo desde support@cojauny.com con tu código de acceso beta y próximos pasos.',
        error: 'No se pudo enviar tu solicitud. Inténtalo de nuevo en unos minutos.',
        submit: 'Únete al Beta',
        checkboxLabel: 'Acepto la {privacyLink} y quiero recibir actualizaciones sobre Cojauny.',
        privacyLinkLabel: 'política de privacidad',
        fields: {
          fullName: 'Nombre completo',
          email: 'Correo electrónico',
          company: '¿Viajas por trabajo o placer? (opcional)',
          useCase: 'Cuéntanos sobre tus viajes habituales'
        }
      },
      feedback: {
        title: 'Cuéntanos tu caso de uso',
        description:
          '¿Gestionas transfer colectivos? ¿Quieres mejorar la experiencia de pasajeros corporativos? Comparte detalles y te responderemos desde support@cojauny.com.',
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
      description: 'Cojauny conecta viajeros del mismo vuelo para compartir transporte, reducir costos y crear comunidad. Disponible en iOS 14+ y Android 8+.',
      rights: 'Todos los derechos reservados.',
      appStoreSoon: 'Descargar en App Store',
      playStoreSoon: 'Descargar en Google Play',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      terms: 'Términos',
      contact: 'Contacto',
      blog: 'Blog',
      languageLabel: 'Idioma'
    }
  },
  en: {
    skipLink: 'Skip to main content',
    header: {
      home: 'Home',
      features: 'Features',
      demo: 'Demo',
      pricing: 'Pricing',
      beta: 'Beta',
      blog: 'Blog'
    },
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
          iconName: 'bolt'
        },
        {
          title: '48h ephemeral chat',
          description:
            'Coordinate in a chat that self-destructs 48 hours after take-off. Share live location, traffic status or gate changes without endless threads.',
          iconName: 'chat'
        },
        {
          title: 'Transparent savings',
          description:
            'Show how much each passenger saves compared with travelling alone—taxi, Uber, private car or long-term parking.',
          iconName: 'users'
        },
        {
          title: 'Privacy-first control',
          description:
            'Share the minimum data required and decide whether to exchange social handles. Everything is encrypted and GDPR compliant.',
          iconName: 'shield'
        }
      ]
    },
    value: {
      title: 'A control tower for shared ground transport',
      subtitle:
        'Cojauny removes spreadsheets and scattered chats so your ops team knows who is sharing a ride, how much it costs and what passengers experience.',
      items: [
        {
          title: 'No more back-and-forth emails',
          description:
            'Automate invites, confirmations and reminders for every flight. All status updates live in one dashboard with roles for CX, ops and partners.'
        },
        {
          title: 'Peace of mind for travellers',
          description:
            'Clear instructions, driver tracking and temporary chat reduce pre-flight anxiety. Your passengers arrive coordinated and happier.'
        },
        {
          title: 'Insights to optimise suppliers',
          description:
            'Track occupancy, seat cost and cumulative savings to negotiate better rates and reinforce your loyalty programmes.'
        }
      ]
    },
    savings: {
      title: 'The impact of smart travel with Cojauny',
      caption: 'The potential we will achieve together when you launch your next trip with us.',
      metrics: [
        {
          value: '50,000+',
          label: 'Target Travelers Year 1',
          description: 'Our goal is to connect over 50,000 travelers in the first year, creating a global shared transport community.'
        },
        {
          value: '50-75%',
          label: 'Potential Savings',
          description: 'You can save between 50% and 75% on each airport trip by sharing with other passengers from your same flight.'
        },
        {
          value: '1,000+ Tons',
          label: 'CO₂ to Reduce',
          description: 'Together we can avoid over 1,000 tons of CO₂ emissions in the first year by sharing trips.'
        },
        {
          value: '120+',
          label: 'Airports Available',
          description: 'Cojauny will be available in over 120 major airports in Europe and the United States from launch.'
        }
      ]
    },
    workflow: {
      title: 'From pilot to production in three steps',
      intro: 'Set up your workspace in hours and start validating with real passengers while keeping compliance in check.',
      steps: [
        {
          title: 'Import flights and invite passengers',
          description: 'Sync schedules or create events manually. Customise messaging and let Cojauny send segmented invitations.'
        },
        {
          title: 'Coordinate in a shared hub',
          description: 'Passengers see compatible times, estimated savings and start a 48-hour chat to finalise details.'
        },
        {
          title: 'Measure impact and expand',
          description: 'Review occupancy, savings and feedback. Scale to new routes or integrate your preferred transport partners.'
        }
      ]
    },
    mockups: {
      heading: 'Explore the app that will transform how you travel',
      description:
        'Explore Cojauny’s key flows: home dashboard, shared transport event creation, temporary chat and privacy settings.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Search',
          title: 'Find your flight in seconds',
          description:
            'Enter your flight number and date. Our system automatically finds flight information and shows you other available travelers.',
          image: '/images/mockups/mockup-flight-search.svg'
        },
        {
          id: 'events-list',
          badge: 'Events',
          title: 'Events for your flight',
          description:
            'See all available events for your flight: "Share taxi from airport A to city B", "Dinner at destination", etc. With real-time capacity and participants.',
          image: '/images/mockups/mockup-events-list.svg'
        },
        {
          id: 'event-detail',
          badge: 'Detail',
          title: 'Complete event information',
          description:
            'View organizer, confirmed participants, available spots, meeting point, time and estimated costs. Like or comment.',
          image: '/images/mockups/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Private and group chat',
          description:
            'Chat directly with organizers (Free) or with the entire group (Premium). Share location, payment details and coordinate in real-time.',
          image: '/images/mockups/mockup-chat.svg'
        },
        {
          id: 'profile',
          badge: 'Profile',
          title: 'Verified profiles',
          description:
            'See other travelers information: photo, name, verification, reputation and events they have participated in. Travel with confidence.',
          image: '/images/mockups/mockup-profile.svg'
        },
        {
          id: 'impact',
          badge: 'Impact',
          title: 'Your savings and carbon footprint',
          description:
            'Dashboard with charts of how much money you have saved, how much CO₂ you have reduced and statistics of your shared trips.',
          image: '/images/mockups/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Ready to start saving on your trips?',
      body: 'Join the shared travel revolution. Be part of a community that will reduce costs, CO₂ emissions, and create new friendships on every flight.',
      link: '#beta-signup',
      linkLabel: 'Join Beta Now'
    },
    pricing: {
      title: 'Choose the perfect plan for you',
      subtitle: 'Start free and upgrade when ready to unlock Cojauny’s full potential.',
      plans: {
        free: {
          name: 'Free',
          price: 'Free',
          description: 'Perfect for trying Cojauny and your first shared ride',
          cta: 'Start Free'
        },
        premium: {
          name: 'Premium',
          price: '$4.99/month',
          description: 'For travelers who want full access and unlimited trips. $49/year (save 17%)',
          cta: 'Upgrade to Premium'
        }
      },
      comparison: {
        title: 'Plan Comparison',
        features: [
          {
            feature: 'Trips you can add',
            free: '1 trip',
            premium: 'Unlimited'
          },
          {
            feature: 'Events you can join',
            free: '1 event',
            premium: 'Unlimited'
          },
          {
            feature: 'Create new events',
            free: false,
            premium: true
          },
          {
            feature: 'Chat with organizers',
            free: true,
            premium: true
          },
          {
            feature: 'Group chat with participants',
            free: false,
            premium: true
          },
          {
            feature: 'Recurring events',
            free: false,
            premium: true
          },
          {
            feature: 'Advanced savings/CO₂ stats',
            free: 'Basic',
            premium: 'Complete'
          },
          {
            feature: 'Priority support',
            free: false,
            premium: true
          },
          {
            feature: 'Premium badge on profile',
            free: false,
            premium: true
          }
        ]
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about Cojauny',
      items: [
        {
          question: 'How does flight matching work?',
          answer: 'Simply enter your flight number and date. Cojauny automatically searches our flight database (integrated with Aerodatabox API) and connects you with other travelers on the same or similar flights on the same dates.'
        },
        {
          question: 'Is it safe to share transport with strangers?',
          answer: 'Yes. All users must verify their profile with a photo. We also have a reputation system where you can see ratings from other travelers. You can review each person’s full profile before joining an event, and chat allows you to get to know them before the trip.'
        },
        {
          question: 'What if I need to cancel?',
          answer: 'You can leave an event anytime from the app. If you’re the organizer and cancel, all participants receive an automatic notification. We recommend giving as much notice as possible so others can reorganize.'
        },
        {
          question: 'What’s the difference between Free and Premium?',
          answer: 'With Free you can add 1 trip and join 1 event, perfect for trying. You can only chat with organizers, not the group. With Premium you get unlimited trips, unlimited events, group chats, recurring events, and complete statistics.'
        },
        {
          question: 'How are shared transport payments handled?',
          answer: 'Cojauny doesn’t process payments directly. Travelers coordinate among themselves how to split costs (cash, Venmo, transfer, etc.). The app shows savings estimates, but final payment is the participants\' responsibility.'
        },
        {
          question: 'What types of events can I create or join?',
          answer: 'Various types: shared transport to departure airport, transport from arrival airport, shared taxi, shared private car, shared long-term parking, meals at destination, and post-flight social activities. Premium users can create any type.'
        },
        {
          question: 'Does Cojauny work at all airports?',
          answer: 'Cojauny operates at 120+ major airports worldwide and we keep expanding. If your airport isn’t listed, you can request it and we’ll add it based on demand.'
        },
        {
          question: 'What about my personal data?',
          answer: 'Your privacy is our priority. We only share minimum necessary information (name and profile photo). You decide if you want to share social media or phone numbers. All data is encrypted and we’re 100% GDPR compliant.'
        },
        {
          question: 'Can I use Cojauny in my language?',
          answer: 'Yes! Cojauny supports 78 different languages, including English, Spanish, French, German, Chinese, Japanese, Arabic and many more. The app automatically detects your system language.'
        },
        {
          question: 'How much can I really save?',
          answer: 'Savings depend on the route and how many people share. On average, our users save 50-75% on airport transport. For example, a $60 taxi split among 4 people is only $15 per person.'
        },
        {
          question: 'Is there an annual plan? How much do I save?',
          answer: 'Yes. Premium costs $4.99/month or $49/year. With the annual plan you save $10.88 (17% discount). If you travel regularly, the annual plan pays for itself with just 2-3 shared trips per year.'
        },
        {
          question: 'What if my flight is delayed or canceled?',
          answer: 'Cojauny receives real-time flight updates. If your flight changes, all participants in your events receive automatic notifications. You can adjust event times or cancel if necessary.'
        },
        {
          question: 'How does the reputation system work?',
          answer: 'After each event, participants can leave ratings and comments. These reviews are visible on your profile. A good reputation increases trust and makes more people want to travel with you.'
        }
      ]
    },
    forms: {
      beta: {
        title: 'Join the private beta',
        description:
          'Priority for airlines, corporate travel and mobility teams wanting to validate shared rides with real passengers.',
        success:
          'Thanks! You will receive an email from support@cojauny.com with your activation token.',
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
          'Managing group transfers or premium passengers? Tell us more and we will reply from support@cojauny.com.',
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
        'Cojauny powers flight-based ride coordination with measurable savings for demanding mobility teams.',
      rights: 'All rights reserved.',
      appStoreSoon: 'App Store (coming soon)',
      playStoreSoon: 'Google Play (coming soon)',
      privacy: 'Privacy',
      cookies: 'Cookies',
      terms: 'Terms',
      contact: 'Contact',
      blog: 'Blog',
      languageLabel: 'Language'
    }
  },
  de: {
    skipLink: 'Zum Hauptinhalt springen',
    header: {
      home: 'Startseite',
      features: 'Funktionen',
      demo: 'Demo',
      pricing: 'Preise',
      beta: 'Beta',
      blog: 'Blog'
    },
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
          iconName: 'bolt'
        },
        {
          title: '48h-Chat',
          description:
            'Koordiniere Details in einem Chat, der 48 Stunden nach dem Flug automatisch gelöscht wird. Keine endlosen Gruppen.',
          iconName: 'chat'
        },
        {
          title: 'Transparente Ersparnis',
          description:
            'Zeige, wie viel jeder Passagier im Vergleich zur Einzelfahrt spart – Taxi, Uber, Privatwagen oder Langzeitparkplatz.',
          iconName: 'users'
        },
        {
          title: 'Datenschutz zuerst',
          description:
            'Teile nur notwendige Informationen und entscheide selbst, ob du weitere Kontaktdaten austauschst. Alles DSGVO-konform.',
          iconName: 'shield'
        }
      ]
    },
    value: {
      title: 'Die Leitstelle für geteilte Flughafentransfers',
      subtitle:
        'Cojauny ersetzt Excel-Listen und verstreute Chats. Dein Team sieht auf einen Blick, wer mit wem fährt, welche Kosten entstehen und wie die Reise erlebt wird.',
      items: [
        {
          title: 'Weniger manuelle Abstimmung',
          description:
            'Einladungen, Bestätigungen und Erinnerungen laufen automatisiert. Status und Verantwortlichkeiten bleiben in einem gemeinsamen Dashboard.'
        },
        {
          title: 'Bessere Passagiererfahrung',
          description:
            'Klare Anweisungen, Fahrer-Tracking und zeitlich begrenzter Chat reduzieren Stress vor Abflug und Ankunft. Zufriedenere Gäste, weniger Supportfälle.'
        },
        {
          title: 'Kennzahlen für bessere Konditionen',
          description:
            'Analysiere Auslastung, Sitzkosten und kumulierte Einsparungen, um mit Transportpartnern neu zu verhandeln und Treueprogramme zu stärken.'
        }
      ]
    },
    savings: {
      title: 'Die Wirkung von intelligentem Reisen mit Cojauny',
      caption: 'Das Potenzial, das wir gemeinsam erreichen werden, wenn Sie Ihre nächste Reise mit uns starten.',
      metrics: [
        {
          value: '50.000+',
          label: 'Ziel Reisende Jahr 1',
          description: 'Unser Ziel ist es, im ersten Jahr über 50.000 Reisende zu verbinden und eine globale Gemeinschaft für geteilte Mobilität zu schaffen.'
        },
        {
          value: '50-75%',
          label: 'Potenzielles Sparen',
          description: 'Sie können bei jeder Flughafen-Fahrt zwischen 50% und 75% sparen, indem Sie mit anderen Passagieren Ihres Fluges teilen.'
        },
        {
          value: '1.000+ Tonnen',
          label: 'CO₂ zu reduzieren',
          description: 'Gemeinsam können wir im ersten Jahr über 1.000 Tonnen CO₂-Emissionen vermeiden, indem wir Fahrten teilen.'
        },
        {
          value: '120+',
          label: 'Verfügbare Flughäfen',
          description: 'Cojauny wird ab dem Start in über 120 Hauptflughäfen in Europa und den USA verfügbar sein.'
        }
      ]
    },
    workflow: {
      title: 'In drei Schritten live',
      intro: 'Setze dein Projekt binnen Stunden auf und teste mit realen Passagieren – ohne langwierige IT-Roadmaps.',
      steps: [
        {
          title: 'Flüge importieren und Gäste einladen',
          description: 'Synchronisiere Flugpläne oder lege Events manuell an. Passe Texte an und lass Cojauny segmentierte Einladungen versenden.'
        },
        {
          title: 'Alle koordinieren in einem Hub',
          description: 'Passagiere sehen passende Slots, geschätzte Ersparnisse und starten einen 48-Stunden-Chat zur Feinabstimmung.'
        },
        {
          title: 'Ergebnisse auswerten und skalieren',
          description: 'Analysiere Auslastung, Einsparungen und Feedback. Rolle das Programm auf neue Strecken aus oder binde bestehende Partner an.'
        }
      ]
    },
    mockups: {
      heading: 'Entdecken Sie die App, die Ihr Reisen transformieren wird',
      description:
        'Entdecken Sie die Hauptbildschirme von Cojauny: Flugsuche, Events mit Kapazität, Echtzeit-Chat, verifizierte Profile und Impact-Dashboard.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Suche',
          title: 'Finde deinen Flug in Sekunden',
          description:
            'Gib deine Flugnummer und Datum ein. Unser System findet automatisch Fluginformationen und zeigt dir andere verfügbare Reisende.',
          image: '/images/mockups/mockup-flight-search.svg'
        },
        {
          id: 'events-list',
          badge: 'Events',
          title: 'Events für deinen Flug',
          description:
            'Sieh alle verfügbaren Events für deinen Flug: "Taxi teilen von Flughafen A nach Stadt B", "Abendessen am Ziel", etc. Mit Echtzeit-Kapazität und Teilnehmern.',
          image: '/images/mockups/mockup-events-list.svg'
        },
        {
          id: 'event-detail',
          badge: 'Details',
          title: 'Alle Event-Informationen',
          description:
            'Siehe Organisator, bestätigte Teilnehmer, verfügbare Plätze, Treffpunkt, Zeit und geschätzte Kosten. Liken oder kommentieren.',
          image: '/images/mockups/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Privater und Gruppen-Chat',
          description:
            'Chatte direkt mit Organisatoren (Free) oder mit der ganzen Gruppe (Premium). Teile Standort, Zahlungsdetails und koordiniere in Echtzeit.',
          image: '/images/mockups/mockup-chat.svg'
        },
        {
          id: 'profile',
          badge: 'Profil',
          title: 'Verifizierte Profile',
          description:
            'Siehe Informationen anderer Reisender: Foto, Name, Verifizierung, Reputation und Events, an denen sie teilgenommen haben. Reise mit Vertrauen.',
          image: '/images/mockups/mockup-profile.svg'
        },
        {
          id: 'impact',
          badge: 'Impact',
          title: 'Deine Ersparnisse und CO₂-Fußabdruck',
          description:
            'Dashboard mit Grafiken über eingesparte Geld, reduziertes CO₂ und Statistiken deiner geteilten Reisen.',
          image: '/images/mockups/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Bereit, bei Ihren Reisen zu sparen?',
      body: 'Werden Sie Teil der geteilten Reiserevolution. Seien Sie Teil einer Gemeinschaft, die Kosten reduzieren, CO₂-Emissionen senken und neue Freundschaften auf jedem Flug schließen wird.',
      link: '#beta-signup',
      linkLabel: 'Beta jetzt beitreten'
    },
    pricing: {
      title: 'Wähle den perfekten Plan für dich',
      subtitle: 'Start kostenlos und upgrade, wenn du bereit bist, Cojaunys volles Potenzial freizuschalten.',
      plans: {
        free: {
          name: 'Free',
          price: 'Kostenlos',
          description: 'Perfekt zum Ausprobieren von Cojauny und deiner ersten gemeinsamen Fahrt',
          cta: 'Kostenlos starten'
        },
        premium: {
          name: 'Premium',
          price: '4,99€/Monat',
          description: 'Für Reisende mit vollem Zugriff und unbegrenzten Reisen. 49€/Jahr (17% sparen)',
          cta: 'Auf Premium upgraden'
        }
      },
      comparison: {
        title: 'Plan-Vergleich',
        features: [
          {
            feature: 'Reisen, die du hinzufügen kannst',
            free: '1 Reise',
            premium: 'Unbegrenzt'
          },
          {
            feature: 'Events, denen du beitreten kannst',
            free: '1 Event',
            premium: 'Unbegrenzt'
          },
          {
            feature: 'Neue Events erstellen',
            free: false,
            premium: true
          },
          {
            feature: 'Chat mit Organisatoren',
            free: true,
            premium: true
          },
          {
            feature: 'Gruppenchat mit Teilnehmern',
            free: false,
            premium: true
          },
          {
            feature: 'Wiederkehrende Events',
            free: false,
            premium: true
          },
          {
            feature: 'Erweiterte Einsparungs-/CO₂-Statistiken',
            free: 'Basis',
            premium: 'Komplett'
          },
          {
            feature: 'Prioritätssupport',
            free: false,
            premium: true
          },
          {
            feature: 'Premium-Badge im Profil',
            free: false,
            premium: true
          }
        ]
      }
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      subtitle: 'Alles, was du über Cojauny wissen musst',
      items: [
        {
          question: 'Wie funktioniert das Flug-Matching?',
          answer: 'Gib einfach deine Flugnummer und das Datum ein. Cojauny durchsucht automatisch unsere Flugdatenbank (integriert mit Aerodatabox API) und verbindet dich mit anderen Reisenden auf demselben oder ähnlichen Flügen an denselben Daten.'
        },
        {
          question: 'Ist es sicher, mit Fremden zu fahren?',
          answer: 'Ja. Alle Benutzer müssen ihr Profil mit einem Foto verifizieren. Wir haben auch ein Reputationssystem, in dem du Bewertungen anderer Reisender sehen kannst. Du kannst das vollständige Profil jeder Person überprüfen, bevor du einem Event beitrittst, und der Chat ermöglicht es dir, sie vor der Reise kennenzulernen.'
        },
        {
          question: 'Was ist, wenn ich stornieren muss?',
          answer: 'Du kannst ein Event jederzeit über die App verlassen. Wenn du der Organisator bist und stornierst, erhalten alle Teilnehmer eine automatische Benachrichtigung. Wir empfehlen, so früh wie möglich Bescheid zu geben, damit andere sich neu organisieren können.'
        },
        {
          question: 'Was ist der Unterschied zwischen Free und Premium?',
          answer: 'Mit Free kannst du 1 Reise hinzufügen und an 1 Event teilnehmen, perfekt zum Ausprobieren. Du kannst nur mit Organisatoren chatten, nicht mit der Gruppe. Mit Premium erhältst du unbegrenzte Reisen, unbegrenzte Events, Gruppenchats, wiederkehrende Events und vollständige Statistiken.'
        },
        {
          question: 'Wie werden Zahlungen für gemeinsame Fahrten abgewickelt?',
          answer: 'Cojauny verarbeitet keine Zahlungen direkt. Die Reisenden koordinieren untereinander, wie sie die Kosten aufteilen (Bargeld, Überweisung usw.). Die App zeigt Einsparungsschätzungen, aber die endgültige Zahlung liegt in der Verantwortung der Teilnehmer.'
        },
        {
          question: 'Welche Arten von Events kann ich erstellen oder beitreten?',
          answer: 'Verschiedene Typen: gemeinsamer Transport zum Abflughafen, Transport vom Ankunftsflughafen, geteiltes Taxi, geteilter Privatwagen, geteilter Langzeitparkplatz, Mahlzeiten am Zielort und soziale Aktivitäten nach dem Flug. Premium-Benutzer können jeden Typ erstellen.'
        },
        {
          question: 'Funktioniert Cojauny an allen Flughäfen?',
          answer: 'Cojauny ist an über 120 großen Flughäfen weltweit verfügbar und wir expandieren weiter. Wenn dein Flughafen nicht aufgeführt ist, kannst du ihn anfordern und wir fügen ihn je nach Nachfrage hinzu.'
        },
        {
          question: 'Was passiert mit meinen persönlichen Daten?',
          answer: 'Deine Privatsphäre hat Priorität. Wir teilen nur die minimal notwendigen Informationen (Name und Profilfoto). Du entscheidest, ob du soziale Medien oder Telefonnummern teilen möchtest. Alle Daten sind verschlüsselt und wir sind zu 100% DSGVO-konform.'
        },
        {
          question: 'Kann ich Cojauny in meiner Sprache verwenden?',
          answer: 'Ja! Cojauny unterstützt 78 verschiedene Sprachen, darunter Deutsch, Englisch, Spanisch, Französisch, Chinesisch, Japanisch, Arabisch und viele mehr. Die App erkennt automatisch deine Systemsprache.'
        },
        {
          question: 'Wie viel kann ich wirklich sparen?',
          answer: 'Die Einsparungen hängen von der Route und der Anzahl der Teilnehmer ab. Im Durchschnitt sparen unsere Benutzer 50-75% beim Flughafentransport. Zum Beispiel: Ein 60€-Taxi geteilt durch 4 Personen sind nur 15€ pro Person.'
        },
        {
          question: 'Gibt es einen Jahresplan? Wie viel spare ich?',
          answer: 'Ja. Premium kostet 4,99€/Monat oder 49€/Jahr. Mit dem Jahresplan sparst du 10,88€ (17% Rabatt). Wenn du regelmäßig reist, amortisiert sich der Jahresplan bereits mit 2-3 geteilten Fahrten pro Jahr.'
        },
        {
          question: 'Was ist, wenn mein Flug verspätet oder gestrichen wird?',
          answer: 'Cojauny erhält Echtzeit-Flugaktualisierungen. Wenn sich dein Flug ändert, erhalten alle Teilnehmer deiner Events automatische Benachrichtigungen. Du kannst Event-Zeiten anpassen oder bei Bedarf stornieren.'
        },
        {
          question: 'Wie funktioniert das Reputationssystem?',
          answer: 'Nach jedem Event können Teilnehmer Bewertungen und Kommentare hinterlassen. Diese Bewertungen sind in deinem Profil sichtbar. Eine gute Reputation erhöht das Vertrauen und mehr Leute möchten mit dir reisen.'
        }
      ]
    },
    forms: {
      beta: {
        title: 'Werde Teil der privaten Beta',
        description:
          'Priorität für Airlines, Geschäftsreise-Teams und Mobilitätsanbieter, die gemeinsame Fahrten mit echten Passagieren testen möchten.',
        success:
          'Danke! Du erhältst eine E-Mail von support@cojauny.com mit deinem Aktivierungs-Token.',
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
          'Du organisierst Sammeltransfers oder Premium-Reisende? Teile Details, wir melden uns von support@cojauny.com.',
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
        'Cojauny orchestriert Flughafentransfers mit nachweisbaren Einsparungen für anspruchsvolle Teams.',
      rights: 'Alle Rechte vorbehalten.',
      appStoreSoon: 'App Store (bald verfügbar)',
      playStoreSoon: 'Google Play (bald verfügbar)',
      privacy: 'Datenschutz',
      cookies: 'Cookies',
      terms: 'AGB',
      contact: 'Kontakt',
      blog: 'Blog',
      languageLabel: 'Sprache'
    }
  },
  fr: {
    skipLink: 'Aller au contenu principal',
    header: {
      home: 'Accueil',
      features: 'Fonctionnalités',
      demo: 'Démo',
      pricing: 'Tarifs',
      beta: 'Beta',
      blog: 'Blog'
    },
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
          iconName: 'bolt'
        },
        {
          title: 'Chat éphémère 48h',
          description:
            "Coordonnez-vous dans un chat qui s'efface 48h après le vol. Partagez localisation, circulation ou changement de porte sans bruit inutile.",
          iconName: 'chat'
        },
        {
          title: 'Économies claires',
          description:
            'Affichez les économies par passager par rapport à un trajet individuel — taxi, VTC, voiture privée ou parking longue durée.',
          iconName: 'users'
        },
        {
          title: 'Contrôle de la confidentialité',
          description:
            'Partagez seulement les informations nécessaires et choisissez si vous souhaitez échanger vos réseaux. Conforme RGPD.',
          iconName: 'shield'
        }
      ]
    },
    value: {
      title: 'Le cockpit de vos transferts partagés',
      subtitle:
        'Cojauny supprime les feuilles de calcul et les groupes dispersés. Vos équipes savent qui partage un trajet, quel est le coût et comment se déroule l’expérience passager.',
      items: [
        {
          title: 'Moins de coordination manuelle',
          description:
            'Invitations, relances et confirmations sont automatisées. Chaque vol dispose d’un suivi clair pour les équipes opérations et relation client.'
        },
        {
          title: 'Des voyageurs rassurés',
          description:
            'Briefs précis, suivi chauffeur et chat temporaire limitent le stress avant ou après le vol. Vos clients arrivent ensemble, à l’heure et informés.'
        },
        {
          title: 'Des données pour négocier',
          description:
            'Mesurez taux de remplissage, coût par siège et économies cumulées afin d’optimiser vos contrats transport et programmes de fidélité.'
        }
      ]
    },
    savings: {
      title: "L'impact du voyage intelligent avec Cojauny",
      caption: 'Le potentiel que nous atteindrons ensemble lorsque vous lancerez votre prochain voyage avec nous.',
      metrics: [
        {
          value: '50 000+',
          label: 'Objectif voyageurs Année 1',
          description: 'Notre objectif est de connecter plus de 50 000 voyageurs la première année, créant une communauté mondiale de transport partagé.'
        },
        {
          value: '50-75%',
          label: 'Économies potentielles',
          description: 'Heures hebdomadaires libérées pour les équipes grâce à l’automatisation des communications.'
        },
        {
          value: '1 000+ tonnes',
          label: 'CO₂ à réduire',
          description: 'Ensemble, nous pouvons éviter plus de 1 000 tonnes d’émissions de CO₂ la première année en partageant les trajets.'
        },
        {
          value: '120+',
          label: 'Aéroports disponibles',
          description: 'Cojauny sera disponible dans plus de 120 grands aéroports en Europe et aux États-Unis dès le lancement.'
        }
      ]
    },
    workflow: {
      title: 'Déployer Cojauny en trois étapes',
      intro: 'Configurez votre espace en quelques heures et testez avec de vrais passagers tout en respectant vos exigences conformité.',
      steps: [
        {
          title: 'Importer vos vols et inviter',
          description: 'Synchronisez vos plannings ou créez des événements manuellement. Personnalisez les messages et laissez Cojauny envoyer les invitations ciblées.'
        },
        {
          title: 'Coordonner dans un hub partagé',
          description: 'Les passagers visualisent les créneaux compatibles, les économies estimées et ouvrent un chat de 48 h pour finaliser les détails.'
        },
        {
          title: 'Mesurer et étendre',
          description: 'Analysez remplissage, économies et feedback. Répliquez sur d’autres lignes ou connectez vos fournisseurs préférés.'
        }
      ]
    },
    mockups: {
      heading: "Découvrez l'app qui transformera votre façon de voyager",
      description:
        'Découvrez les écrans clés : tableau de bord, création d’événement partagé, chat temporaire et réglages de confidentialité.',
      screens: [
        {
          id: 'flight-search',
          badge: 'Recherche',
          title: 'Trouvez votre vol en quelques secondes',
          description:
            'Entrez votre num?ro de vol et la date. Notre syst?me trouve automatiquement les informations du vol et vous montre d\'autres voyageurs disponibles.',
          image: '/images/mockups/mockup-flight-search.svg'
        },
        {
          id: 'events-list',
          badge: '?v?nements',
          title: '?v?nements pour votre vol',
          description:
            'Voyez tous les ?v?nements disponibles pour votre vol : "Partager un taxi de l\'a?roport A ? la ville B", "D?ner ? destination", etc. Avec capacit? et participants en temps r?el.',
          image: '/images/mockups/mockup-events-list.svg'
        },
        {
          id: 'event-detail',
          badge: 'D?tail',
          title: 'Informations compl?tes de l\'?v?nement',
          description:
            'Voir l\'organisateur, les participants confirm?s, les places disponibles, le point de rencontre, l\'heure et les co?ts estim?s. Liker ou commenter.',
          image: '/images/mockups/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Chat priv? et de groupe',
          description:
            'Chattez directement avec les organisateurs (Free) ou avec tout le groupe (Premium). Partagez la localisation, les d?tails de paiement et coordonnez en temps r?el.',
          image: '/images/mockups/mockup-chat.svg'
        },
        {
          id: 'profile',
          badge: 'Profil',
          title: 'Profils v?rifi?s',
          description:
            'Voir les informations des autres voyageurs : photo, nom, v?rification, r?putation et ?v?nements auxquels ils ont particip?. Voyagez en toute confiance.',
          image: '/images/mockups/mockup-profile.svg'
        },
        {
          id: 'impact',
          badge: 'Impact',
          title: 'Vos ?conomies et empreinte carbone',
          description:
            'Tableau de bord avec graphiques de combien d\'argent vous avez ?conomis?, combien de CO? vous avez r?duit et statistiques de vos trajets partag?s.',
          image: '/images/mockups/mockup-impact.svg'
        }
      ]

    },
    ctaStrip: {
      heading: 'Prêt à économiser sur vos voyages?',
      body: 'Rejoignez la révolution du voyage partagé. Faites partie d’une communauté qui réduira les coûts, les émissions de CO₂ et créera de nouvelles amitiés à chaque vol.',
      link: '#beta-signup',
      linkLabel: 'Rejoindre la Bêta'
    },
    pricing: {
      title: 'Choisissez le plan parfait pour vous',
      subtitle: 'Commencez gratuitement et passez à la version supérieure quand vous êtes prêt à débloquer tout le potentiel de Cojauny.',
      plans: {
        free: {
          name: 'Free',
          price: 'Gratuit',
          description: 'Parfait pour essayer Cojauny et votre premier trajet partagé',
          cta: 'Commencer gratuitement'
        },
        premium: {
          name: 'Premium',
          price: '4,99€/mois',
          description: 'Pour les voyageurs avec accès complet et voyages illimités. 49€/an (économisez 17%)',
          cta: 'Passer à Premium'
        }
      },
      comparison: {
        title: 'Comparaison des plans',
        features: [
          { feature: 'Voyages que vous pouvez ajouter', free: '1 voyage', premium: 'Illimités' },
          { feature: 'Événements auxquels vous pouvez participer', free: '1 événement', premium: 'Illimités' },
          { feature: 'Créer de nouveaux événements', free: false, premium: true },
          { feature: 'Chat avec organisateurs', free: true, premium: true },
          { feature: 'Chat de groupe avec participants', free: false, premium: true },
          { feature: 'Événements récurrents', free: false, premium: true },
          { feature: 'Statistiques avancées économies/CO₂', free: 'Basiques', premium: 'Complètes' },
          { feature: 'Support prioritaire', free: false, premium: true },
          { feature: 'Badge Premium sur profil', free: false, premium: true }
        ]
      }
    },
    faq: {
      title: 'Questions fréquentes',
      subtitle: 'Tout ce que vous devez savoir sur Cojauny',
      items: [
        {
          question: 'Comment fonctionne le matching de vol ?',
          answer: 'Il suffit d\'entrer votre numéro de vol et la date. Cojauny recherche automatiquement dans notre base de données de vols (intégrée avec Aerodatabox API) et vous connecte avec d\'autres voyageurs sur le même vol ou des vols similaires aux mêmes dates.'
        },
        {
          question: 'Est-il sûr de partager un transport avec des inconnus ?',
          answer: 'Oui. Tous les utilisateurs doivent vérifier leur profil avec une photo. Nous avons également un système de réputation où vous pouvez voir les évaluations d\'autres voyageurs. Vous pouvez consulter le profil complet de chaque personne avant de rejoindre un événement, et le chat vous permet de les connaître avant le voyage.'
        },
        {
          question: 'Et si je dois annuler ?',
          answer: 'Vous pouvez quitter un événement à tout moment depuis l\'application. Si vous êtes l\'organisateur et annulez, tous les participants reçoivent une notification automatique. Nous recommandons de prévenir le plus tôt possible pour que les autres puissent se réorganiser.'
        },
        {
          question: 'Quelle est la différence entre Free et Premium ?',
          answer: 'Avec Free, vous pouvez ajouter 1 voyage et participer à 1 événement, parfait pour essayer. Vous pouvez seulement chatter avec les organisateurs, pas le groupe. Avec Premium, vous obtenez des voyages illimités, des événements illimités, des chats de groupe, des événements récurrents et des statistiques complètes.'
        },
        {
          question: 'Comment sont gérés les paiements des transports partagés ?',
          answer: 'Cojauny ne traite pas les paiements directement. Les voyageurs se coordonnent entre eux pour partager les coûts (espèces, virement, etc.). L\'application affiche des estimations d\'économies, mais le paiement final relève de la responsabilité des participants.'
        },
        {
          question: 'Quels types d\'événements puis-je créer ou rejoindre ?',
          answer: 'Différents types : transport partagé vers l\'aéroport de départ, transport depuis l\'aéroport d\'arrivée, taxi partagé, voiture privée partagée, parking longue durée partagé, repas à destination et activités sociales post-vol. Les utilisateurs Premium peuvent créer tous les types.'
        },
        {
          question: 'Cojauny fonctionne-t-il dans tous les aéroports ?',
          answer: 'Cojauny opère dans plus de 120 grands aéroports dans le monde et nous continuons à nous développer. Si votre aéroport n\'est pas listé, vous pouvez le demander et nous l\'ajouterons selon la demande.'
        },
        {
          question: 'Qu\'en est-il de mes données personnelles ?',
          answer: 'Votre vie privée est notre priorité. Nous ne partageons que les informations minimales nécessaires (nom et photo de profil). Vous décidez si vous voulez partager les réseaux sociaux ou les numéros de téléphone. Toutes les données sont cryptées et nous sommes conformes RGPD à 100%.'
        },
        {
          question: 'Puis-je utiliser Cojauny dans ma langue ?',
          answer: 'Oui ! Cojauny supporte 78 langues différentes, dont le français, l\'anglais, l\'espagnol, l\'allemand, le chinois, le japonais, l\'arabe et bien d\'autres. L\'application détecte automatiquement la langue de votre système.'
        },
        {
          question: 'Combien puis-je vraiment économiser ?',
          answer: 'Les économies dépendent de l\'itinéraire et du nombre de personnes qui partagent. En moyenne, nos utilisateurs économisent 50-75% sur le transport aéroportuaire. Par exemple, un taxi de 60€ partagé entre 4 personnes ne coûte que 15€ par personne.'
        },
        {
          question: 'Existe-t-il un plan annuel ? Combien j\'économise ?',
          answer: 'Oui. Premium coûte 3,99€/mois ou 39€/an. Avec le plan annuel, vous économisez 8,88€ (18% de réduction). Si vous voyagez régulièrement, le plan annuel est rentabilisé avec seulement 2-3 trajets partagés par an.'
        },
        {
          question: 'Que se passe-t-il si mon vol est retardé ou annulé ?',
          answer: 'Cojauny reçoit des mises à jour de vol en temps réel. Si votre vol change, tous les participants à vos événements reçoivent des notifications automatiques. Vous pouvez ajuster les horaires des événements ou annuler si nécessaire.'
        },
        {
          question: 'Comment fonctionne le système de réputation ?',
          answer: 'Après chaque événement, les participants peuvent laisser des évaluations et des commentaires. Ces avis sont visibles sur votre profil. Une bonne réputation augmente la confiance et plus de gens voudront voyager avec vous.'
        }
      ]
    },
    forms: {
      beta: {
        title: 'Rejoignez la beta privée',
        description:
          'Priorité aux compagnies aériennes, agences corporate et équipes mobilité voulant tester des trajets partagés avec de vrais passagers.',
        success:
          'Merci ! Vous recevrez un e-mail de support@cojauny.com avec votre token d’activation.',
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
          'Vous gérez des transferts collectifs ou des voyageurs premium ? Donnez-nous des détails et nous répondrons depuis support@cojauny.com.',
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
        'Cojauny orchestre les trajets d’aéroport avec des économies mesurables pour les équipes les plus exigeantes.',
      rights: 'Tous droits réservés.',
      appStoreSoon: 'App Store (bientôt)',
      playStoreSoon: 'Google Play (bientôt)',
      privacy: 'Confidentialité',
      cookies: 'Cookies',
      terms: 'Conditions',
      contact: 'Contact',
      blog: 'Blog',
      languageLabel: 'Langue'
    }
  }
};

export function getLandingCopy(locale: Locale): LandingCopy {
  return landingCopy[locale] ?? landingCopy[defaultLocale];
}


