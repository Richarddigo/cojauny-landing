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
      blog: 'Blog',
      benefits: 'Beneficios',
      impact: 'Impacto',
      workflow: 'Cómo funciona',
      faq: 'FAQ',
      feedback: 'Propuesta'
    },
    seo: {
      title: 'Cojauny: Comparte taxi al aeropuerto y ahorra hasta un 75%',
      description:
        'App para compartir taxi al aeropuerto con pasajeros de tu mismo vuelo. Matching automático, perfiles verificados, chat seguro y ahorro real de 50-75% por trayecto. Disponible en +120 aeropuertos. Descarga gratis para iOS y Android.',
      keywords: [
        'compartir taxi aeropuerto',
        'taxi compartido al aeropuerto',
        'app viajes compartidos aeropuerto',
        'carpool aeropuerto',
        'ahorro transporte aeropuerto',
        'blablacar aeropuerto',
        'uber compartido aeropuerto',
        'viaje compartido vuelo',
        'coordinar taxi con vuelo',
        'transporte aeropuerto barato'
      ],
      ogTitle: 'Cojauny: Comparte taxi al aeropuerto y ahorra 50-75% | App gratuita',
      ogDescription:
        'Conecta con pasajeros de tu vuelo para compartir taxi, van o coche privado al aeropuerto. Perfiles verificados, chat temporal y ahorro medible. Ya en +120 aeropuertos.'
    },
    hero: {
      eyebrow: 'Ahorra hasta un 75% en tus traslados al aeropuerto',
      title: 'Comparte taxi con pasajeros de tu mismo vuelo',
      subtitle:
        'Cojauny conecta automáticamente a viajeros que comparten vuelo para organizar taxis, vans o coche privado. Divide el coste entre 3-4 personas, reduce tu huella de carbono y viaja con perfiles verificados. Todo desde una app segura con chat temporal.',
      primaryCta: 'Solicitar acceso beta',
      secondaryCta: 'Ver cómo funciona',
      imageAlt: 'App Cojauny mostrando matching automático por vuelo, chat seguro y ahorro en tiempo real'
    },
    features: {
      title: 'Todo lo que necesitas para viajar más barato y sostenible',
      subtitle:
        'Matching automático por vuelo, eventos con control de aforo, chat cifrado de 48 horas, perfiles verificados con reputación y panel de impacto con ahorro real. Cojauny elimina la incertidumbre de compartir traslados con desconocidos.',
      items: [
        {
          title: 'Matching por Vuelo',
          description:
            'Detectamos automáticamente a los pasajeros que comparten vuelo o aeropuerto y te sugerimos el mejor grupo para dividir traslados y coordinar horarios.',
          iconName: 'bolt'
        },
        {
          title: 'Eventos con Cupos',
          description:
            'Publica o únete a eventos de transporte, comidas o actividades. Controla aforos, lugares y lista de asistentes confirmados en tiempo real.',
          iconName: 'users'
        },
        {
          title: 'Chat en Tiempo Real',
          description:
            'Habla con el organizador o con todo el grupo desde un canal cifrado. Funciona incluso en modo offline durante el vuelo y se sincroniza automáticamente al aterrizar. Comparte puntos de encuentro, costos y enlaces sin salir de la app.',
          iconName: 'chat'
        },
        {
          title: 'Perfiles Verificados',
          description:
            'Todos los miembros cuentan con verificación, foto y reputación visible para que sepas con quién compartes el trayecto antes de aceptar.',
          iconName: 'shield'
        },
        {
          title: '78 Idiomas Soportados',
          description:
            'La product experience se adapta a 78 idiomas, incluidos mensajes automáticos. Así cada pasajero puede coordinar en su idioma nativo.',
          iconName: 'globe'
        },
        {
          title: 'Notificaciones Inteligentes',
          description:
            'Alertas priorizadas para nuevos eventos, modificaciones de vuelo, recordatorios de reunión y avisos de llegada del conductor.',
          iconName: 'sparkles'
        },
        {
          title: 'Estadísticas de Ahorro e Impacto',
          description:
            'Dashboard con ahorros acumulados, kilómetros compartidos y CO₂ evitado para reportar a tu equipo o comunidad.',
          iconName: 'bolt'
        },
        {
          title: 'Eventos Recurrentes',
          description:
            'Configura eventos que se repiten por ruta, horario o aerolínea y mantén a tu grupo notificado automáticamente en cada vuelo.',
          iconName: 'users'
        }
      ]
    },
    value: {
      title: '¿Por qué +15.000 viajeros eligen Cojauny cada mes?',
      subtitle:
        'Resolvemos los 3 problemas principales del transporte al aeropuerto: coste excesivo de taxis individuales (60-80€ por trayecto), coordinación caótica por WhatsApp y falta de confianza al compartir con desconocidos. Cojauny ofrece matching verificado, chat temporal y ahorro medible.',
      items: [
        {
          title: '💸 Ahorro visible en cada trayecto',
          description:
            'Divide traslados premium, vans corporativas o coches privados y controla cuánto ahorras frente a tomar un taxi individual.'
        },
        {
          title: '🌱 Impacto ambiental cuantificable',
          description:
            'Calculamos automáticamente el CO₂ evitado y lo registramos por vuelo para que puedas reportarlo a tu equipo de sostenibilidad.'
        },
        {
          title: '🤝 Comunidad que se conoce',
          description:
            'Conecta con perfiles verificados que comparten destino, aerolínea o evento. Genera networking antes del vuelo y mantén el contacto después.'
        },
        {
          title: '⏱️ Coordinación sin chats infinitos',
          description:
            'Agenda, recordatorios y confirmaciones automáticas. Cojauny avisa a todos cuando el conductor está llegando o cambia la puerta de embarque.'
        },
        {
          title: '🛡️ Confianza y reputación',
          description:
            'Ratings, verificación y políticas antibot. Si alguien no se presenta, el grupo puede reportarlo y el sistema ajusta su reputación.'
        },
        {
          title: '📱 Operación omnicanal',
          description:
            'Toda la información —vuelo, punto de encuentro, pagos, contactos— vive en un solo hilo accesible desde móvil o web progresiva.'
        }
      ]
    },
    savings: {
      title: 'El impacto medible de viajar con Cojauny',
      caption: 'Objetivos públicos que acompañamos con métricas en tiempo real para tu equipo.',
      metrics: [
        {
          value: '50,000+',
          label: 'Pasajeros sincronizados',
          description: 'Meta anual de pasajeros conectados por vuelo para garantizar masa crítica en las principales rutas.'
        },
        {
          value: '50-75%',
          label: 'Ahorro proyectado',
          description: 'Rango promedio de ahorro por trayecto terrestre cuando se comparte taxi, van o coche privado.'
        },
        {
          value: '1,000+ t',
          label: 'CO₂ evitado',
          description: 'Toneladas de dióxido de carbono que buscamos evitar durante el primer año operativo.'
        },
        {
          value: '120+',
          label: 'Aeropuertos activos',
          description: 'Red de aeropuertos soportados en Europa y América para lanzar eventos desde el día uno.'
        }
      ]
    },
    workflow: {
      title: 'Cómo se coordina un trayecto en Cojauny',
      intro: 'Cinco hitos claros desde que ingresas tu vuelo hasta que registras el ahorro para tu equipo.',
      steps: [
        {
          title: '1. Crea tu perfil verificado',
          description: 'Accede con Apple, Google o email, añade foto y documentación básica para desbloquear el matching.'
        },
        {
          title: '2. Añade el vuelo',
          description: 'Ingresa aerolínea, número y fecha. La app trae los horarios oficiales y te sugiere otros viajeros que coinciden.'
        },
        {
          title: '3. Únete o crea un evento',
          description: 'Explora eventos creados por la comunidad o lanza uno nuevo definiendo aforo, punto de encuentro y método de pago.'
        },
        {
          title: '4. Coordina en el chat seguro',
          description: 'Comparte ubicaciones, placas y tarifas desde un chat moderado con traducción automática opcional.'
        },
        {
          title: '5. Cierra el viaje y reporta',
          description: 'Marca el viaje como completado para dividir el costo y registrar automáticamente ahorro y CO₂ evitado.'
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
          image: '/images/mockups/es/mockup-flight-search.svg'
        },
        {
          id: 'events-list',
          badge: 'Eventos',
          title: 'Eventos de tu vuelo',
          description:
            'Ve todos los eventos disponibles para tu vuelo: "Compartir taxi aeropuerto A a ciudad B", "Cena en ciudad destino", etc. Con cupos y participantes en tiempo real.',
          image: '/images/mockups/es/mockup-events-list.svg'
        },
        {
          id: 'event-detail',
          badge: 'Detalle',
          title: 'Toda la información del evento',
          description:
            'Ve organizador, participantes confirmados, cupos disponibles, punto de encuentro, hora y costos estimados. Dale like o comenta.',
          image: '/images/mockups/es/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Chat privado y grupal',
          description:
            'Chatea directamente con organizadores (Free) o con todo el grupo (Premium). Comparte ubicación, detalles de pago y coordina en tiempo real.',
          image: '/images/mockups/es/mockup-chat.svg'
        },
        {
          id: 'profile',
          badge: 'Perfil',
          title: 'Perfiles verificados',
          description:
            'Consulta identidad, reputación y eventos anteriores para decidir con quién compartir trayecto.',
          image: '/images/mockups/es/mockup-profile.svg'
        },
        {
          id: 'impact',
          badge: 'Impacto',
          title: 'Tu ahorro y huella de carbono',
          description:
            'Panel resumen con ahorros, emisiones evitadas y cadencia de viaje para compartir con tu equipo.',
          image: '/images/mockups/es/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Únete a los early adopters y ahorra desde tu próximo vuelo',
      body: 'Acceso anticipado a la beta privada de Cojauny: precio especial de lanzamiento (50% descuento primer año), onboarding personalizado, línea directa con el equipo de producto y distintivo de miembro fundador. Plazas limitadas a 5.000 usuarios en fase beta.',
      link: '#beta',
      linkLabel: 'Reservar mi plaza beta'
    },
    pricing: {
      title: 'Planes pensados para cada tipo de viajero',
      subtitle: 'Empieza gratis y desbloquea funciones avanzadas cuando necesites operar varios vuelos a la vez.',
      plans: {
        free: {
          name: 'Free',
          price: 'Gratis',
          description: 'Ideal para probar Cojauny, crear tu primer evento y validar con un grupo reducido.',
          cta: 'Crear cuenta gratuita'
        },
        premium: {
          name: 'Premium',
          price: '4,99 €/mes',
          description: 'Viajes, eventos y chat ilimitados, métricas avanzadas y soporte prioritario. 49 €/año (ahorra 17%).',
          cta: 'Actualizar plan'
        }
      },
      comparison: {
        title: 'Comparativa rápida',
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
            free: 'Resumen',
            premium: 'Detalle completo'
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
      title: 'Preguntas frecuentes',
      subtitle: 'Todo lo que necesitas saber sobre Cojauny antes de tu primer viaje compartido.',
      items: [
        {
          question: '¿Cómo funciona el sistema de matching de vuelos?',
          answer: 'Simplemente introduce tu número de vuelo (ejemplo: IB2345) y fecha. Nuestra plataforma consulta en tiempo real nuestra base de datos global integrada con Aerodatabox API y automáticamente te conecta con otros viajeros del mismo vuelo o vuelos compatibles en el mismo horario y aeropuerto. El sistema verifica automáticamente la compatibilidad de horarios, terminales y destinos para garantizar coordinación perfecta.'
        },
        {
          question: '¿Es seguro compartir transporte con personas desconocidas?',
          answer: 'Absolutamente. La seguridad es nuestra máxima prioridad. Todos los usuarios deben verificar su identidad con foto y documento de identidad. Contamos con un sistema de reputación transparente donde puedes ver valoraciones y comentarios de otros viajeros. Antes de confirmar tu participación, puedes revisar perfiles completos, historial de viajes y comunicarte con el grupo a través del chat. Además, nuestra moderación automática detecta y elimina comportamientos sospechosos en tiempo real.'
        },
        {
          question: '¿Puedo cancelar mi participación sin penalización económica?',
          answer: 'Sí, tienes total flexibilidad. Puedes salir de cualquier evento directamente desde la app sin costes adicionales. Si eres el organizador del evento, al cancelar, todos los participantes reciben una notificación instantánea con opciones para reorganizar el grupo o encontrar alternativas. Recomendamos avisar con la mayor antelación posible para permitir que otros viajeros se reorganicen. Tu historial de cancelaciones es visible en tu perfil para mantener la transparencia en la comunidad.'
        },
        {
          question: '¿Qué diferencia hay entre la versión Free y Premium?',
          answer: 'La versión Free te permite gestionar 1 viaje activo y unirte a 1 evento simultáneamente, con chat directo solo con el organizador del evento. Es perfecta para probar la plataforma. Premium desbloquea viajes y eventos ilimitados, chats grupales completos, estadísticas detalladas de ahorro y CO₂, eventos recurrentes para viajeros frecuentes, soporte técnico prioritario en menos de 2 horas, y acceso anticipado a nuevas funcionalidades. Cuesta 4,99€/mes o 49€/año con 17% de descuento.'
        },
        {
          question: '¿Cómo funcionan los pagos entre participantes?',
          answer: 'Cojauny no procesa pagos directamente para mantener costes bajos y flexibilidad máxima. Los participantes coordinan el método de pago que prefieran: efectivo al conductor, Bizum, transferencia bancaria, PayPal o pago directo con tarjeta compartida. La app proporciona una calculadora automática que divide los costes equitativamente y guarda el registro del ahorro estimado en tu perfil. Todos los cálculos son transparentes y visibles para el grupo antes del viaje.'
        },
        {
          question: '¿Qué tipos de eventos puedo crear o unirme?',
          answer: 'Cojauny soporta múltiples categorías de eventos: Traslados compartidos al aeropuerto de salida, recogidas desde aeropuerto de llegada, servicios de van corporativa para equipos empresariales, coches privados compartidos, alojamientos compartidos en el destino (hostel o apartamento completo), y actividades sociales posteriores al vuelo. Los usuarios Premium pueden crear eventos personalizados para cualquier tipo de necesidad de viaje compartido.'
        },
        {
          question: '¿En qué aeropuertos está disponible Cojauny?',
          answer: 'Actualmente operamos en más de 120 aeropuertos principales a nivel mundial, cubriendo Europa, América, Asia y Oceanía. Nuestra cobertura incluye todos los hubs principales como Madrid-Barajas, Barcelona-El Prat, Londres-Heathrow, París-Charles de Gaulle, Nueva York-JFK, y muchos más. Añadimos nuevos aeropuertos trimestralmente basándonos en la demanda de usuarios. Si tu aeropuerto no aparece en la lista, puedes solicitarlo desde Configuración → Solicitar Aeropuerto y lo priorizaremos según el volumen de peticiones.'
        },
        {
          question: '¿Cómo protegen mis datos personales y privacidad?',
          answer: 'Tu privacidad es sagrada para nosotros. Solo mostramos públicamente tu nombre de perfil, país de residencia y foto de perfil. Tu email, teléfono, dirección y documentos de identidad permanecen completamente cifrados con encriptación AES-256 y solo son accesibles por ti. Cumplimos estrictamente con el Reglamento General de Protección de Datos (GDPR) europeo. Tú decides manualmente si compartes información adicional como redes sociales o número de teléfono con otros participantes. No vendemos ni compartimos tus datos con terceros bajo ninguna circunstancia. Puedes descargar o eliminar todos tus datos en cualquier momento desde tu perfil.'
        },
        {
          question: '¿La aplicación está disponible en mi idioma?',
          answer: 'Sí, Cojauny está completamente traducido a 78 idiomas incluyendo español, inglés, francés, alemán, portugués, italiano, chino mandarín, japonés, coreano, árabe, ruso, y muchos más. La interfaz detecta automáticamente el idioma de tu dispositivo al iniciar sesión por primera vez. Puedes cambiarlo manualmente en cualquier momento desde Configuración → Idioma. Esto es especialmente útil en grupos multiculturales donde participantes de diferentes países necesitan comunicarse eficazmente.'
        },
        {
          question: '¿Cuánto dinero puedo ahorrar realmente usando Cojauny?',
          answer: 'El ahorro promedio es del 50-75% en transporte aeroportuario. Ejemplo concreto: Un taxi desde el centro de Madrid al Aeropuerto T4 cuesta aproximadamente 30-35€. Si viajas solo, pagas el total. Compartiendo con 3 pasajeros más del mismo vuelo, tu parte es solo 7,50-9€, ahorrando 22-25€ por trayecto. Viajeros frecuentes que hacen 2 viajes mensuales ahorran aproximadamente 500-600€ al año. El panel de impacto en tu perfil muestra estadísticas detalladas de ahorro acumulado, CO₂ evitado y número de conexiones realizadas.'
        },
        {
          question: '¿Ofrecen plan de suscripción anual con descuento?',
          answer: 'Sí. Premium está disponible en dos modalidades: suscripción mensual a 4,99€/mes (total 59,88€/año) o suscripción anual por 49€/año, lo que representa un ahorro de 10,88€ (17% de descuento). El plan anual se amortiza fácilmente: con solo 2 viajes compartidos al año ya has recuperado la inversión. Además, los suscriptores anuales reciben beneficios exclusivos como acceso a eventos VIP, sorteos mensuales de vuelos, y distintivo especial «Anual» en su perfil que genera mayor confianza en la comunidad. Puedes cambiar de mensual a anual en cualquier momento con crédito prorrateado.'
        },
        {
          question: '¿Qué sucede si mi vuelo se retrasa, cancela o cambia de puerta?',
          answer: 'Cojauny recibe actualizaciones de vuelos en tiempo real desde múltiples fuentes (aerolíneas, aeropuertos, FlightAware). Cuando tu vuelo sufre cambios, todos los participantes de tus eventos reciben notificaciones push instantáneas con los detalles actualizados. Puedes ajustar automáticamente la hora del evento con un solo clic, cambiar el punto de encuentro si hay cambio de terminal, o cancelar el evento si el vuelo se cancela definitivamente. El historial de cambios queda registrado para transparencia. Nuestro sistema de alertas tempranas te avisa incluso 6 horas antes del despegue si detecta probabilidad alta de retraso basándose en condiciones meteorológicas o congestión aeroportuaria.'
        },
        {
          question: '¿Cómo funciona exactamente el sistema de reputación y valoraciones?',
          answer: 'Después de completar cada evento, todos los participantes pueden evaluarse mutuamente en 3 dimensiones: puntualidad (llegó a la hora acordada), comunicación (respondió rápido en el chat), y amistad (fue agradable durante el viaje). Usas un sistema de 5 estrellas con comentario opcional. Estas valoraciones se promedian y aparecen en tu perfil público junto con insignias especiales (Viajero de Oro 100+ viajes, Eco-Warrior 5 toneladas CO₂ ahorradas, etc.). Una reputación alta (4,5+ estrellas) te posiciona automáticamente en los primeros resultados cuando otros buscan compañeros de viaje, y te hacen elegible para el programa «Trusted Traveler» con verificación avanzada. Las valoraciones negativas son analizadas por nuestro equipo de moderación para detectar abusos.'
        }
      ]
    },
    forms: {
      beta: {
        heading: 'Únete a la revolución del viaje compartido',
        subheading: 'Consigue acceso anticipado a Cojauny y forma parte de la comunidad early adopter. Tarifas exclusivas, soporte prioritario y línea directa con el equipo de producto.',
        title: 'Solicita acceso beta',
        description:
          '🌟 Acceso anticipado · 💰 Tarifas preferentes · 🏆 Distintivo early adopter · 🛠️ Canal directo con producto · 🚀 Soporte prioritario',
        success:
          'Genial, estas en la lista de espera. Te avisaremos por email cuando la beta este lista.',
        error: 'No pudimos registrar tu solicitud. Revisa los datos o intentalo en unos minutos.',
        duplicateError:
          'Ya estas en nuestra lista de espera. Te notificaremos cuando la beta este disponible.',
        submit: 'Enviar solicitud',
        checkboxLabel: 'He leído y acepto la {privacyLink} de Cojauny.',
        privacyLinkLabel: 'política de privacidad',
        referralNotice:
          'ℹ️ Al registrarte obtendrás un enlace único que podrás compartir. Usamos este enlace solo para contar visitas y nuevos registros que provengan de ti. No recopilamos datos personales de quienes hagan clic.',
        optionalLabel: '(opcional)',
        optionalHint: 'Los campos marcados como "(opcional)" puedes dejarlos en blanco.',
        fields: {
          fullName: 'Nombre completo',
          email: 'Correo electrónico',
          country: 'País de residencia',
          homeAirport: 'Ciudad o aeropuerto habitual',
          flightFrequency: '¿Con qué frecuencia vuelas?',
          useCase: '¿Cómo usarás Cojauny o qué quieres validar en la beta?',
          updatesOptIn: 'Quiero recibir novedades del desarrollo',
          privacyAcceptance: 'Acepto que se almacenen mis datos para participar en la beta privada de Cojauny.'
        },
        placeholders: {
          homeAirport: 'Ej. Madrid (MAD), Barcelona-El Prat, CDMX',
          useCase: 'Comparte retos, KPIs o hipótesis que quieras validar'
        },
        countryOptions: [
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
          { value: 'once', label: '1 vez al año', description: 'Viajes puntuales o vacaciones planificadas' },
          {
            value: 'two_to_five',
            label: '2–5 veces al año',
            description: 'Frecuencia típica de equipos comerciales o viajeros frecuentes'
          },
          {
            value: 'six_to_ten',
            label: '6–10 veces al año',
            description: 'Managers de operaciones o staff corporativo con rutas fijas'
          },
          {
            value: 'more_than_ten',
            label: 'Más de 10 veces al año',
            description: 'Equipos de aerolínea, tripulaciones y cuentas intensivas'
          }
        ]
      },
      feedback: {
        heading: 'Feedback, ideas y propuestas de negocio',
        subheading: '¿Tienes una sugerencia para mejorar Cojauny? ¿Quieres compartir una idea innovadora o explorar oportunidades de negocio? Estamos aqui para escucharte.',
        title: 'Comparte tu propuesta',
        description:
          '¿Gestionas transfer colectivos o programas corporativos? Cuéntanos tu escenario para ayudarte mejor desde feedback@cojauny.com.',
        success: 'Gracias por tu mensaje. Si necesitamos ampliar información te contactaremos pronto.',
        error: "El campo 'Mensaje' debe tener al menos 10 caracteres.",
        submit: 'Enviar mensaje',
        optionalLabel: '(opcional)',
        optionalHint: 'Todos los campos son obligatorios salvo que veas "(opcional)".',
        fields: {
          fullName: 'Nombre',
          email: 'Correo',
          message: 'Cuéntanos tu caso',
          useCase: 'Caso',
          selectPlaceholder: 'Selecciona una opción'
        },
        caseOptions: [
          { value: 'feedback', label: 'Feedback' },
          { value: 'idea', label: 'Idea' },
          { value: 'business_proposal', label: 'Propuesta de negocio' }
        ]
      }
    },
    referralPanel: {
      title: 'Te avisaremos cuando la beta este lista',
      subtitle: 'Mientras tanto, comparte Cojauny con tu red y avanza en la lista de espera',
      yourLink: 'Tu enlace unico de invitacion',
      copyButton: 'Copiar enlace',
      copiedButton: 'Copiado',
      stats: {
        visits: 'Visitas',
        signups: 'Registros'
      },
      instructions: {
        title: 'Como funciona',
        step1: 'Comparte este enlace con colegas, amigos y en redes sociales.',
        step2: 'Cada vez que alguien visite tu enlace, contaremos una visita anonima.',
        step3: 'Si se registran, contaremos un nuevo registro asociado a ti y avanzaras en la cola.'
      },
      privacy:
        'Solo contamos visitas y registros de forma anonima. No recopilamos datos personales de quienes hacen clic en tu enlace.'
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
      appStoreSoon: 'App Store (próximamente)',
      playStoreSoon: 'Google Play (próximamente)',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      terms: 'Términos',
      acceptableUse: 'Uso Aceptable',
      faq: 'FAQ',
      subprocessors: 'Subprocesadores',
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
      blog: 'Blog',
      benefits: 'Benefits',
      impact: 'Impact',
      workflow: 'Workflow',
      faq: 'FAQ',
      feedback: 'Proposal'
    },
    seo: {
      title: 'Cojauny: Share airport taxi and save up to 75% on trips',
      description:
        'Connect with passengers on your flight to share airport taxis, vans or private cars. Automatic matching, verified profiles, secure chat and real savings of 50-75% per trip. Available at 120+ airports worldwide.',
      keywords: [
        'shared airport taxi',
        'airport ride sharing',
        'split airport taxi cost',
        'airport carpool app',
        'share uber to airport',
        'airport shuttle alternative',
        'cheap airport transfer',
        'airport taxi sharing app',
        'split taxi with travelers',
        'airport transportation app'
      ],
      ogTitle: 'Cojauny: Share airport taxi & save 50-75% | Free app',
      ogDescription:
        'Match with verified travelers on your flight to share airport transfers. Secure chat, automatic cost splitting, and measurable savings. Now at 120+ airports.'
    },
    hero: {
      eyebrow: 'Save up to 75% on your airport transfers',
      title: 'Your shared ride starts before boarding',
      subtitle:
        'Cojauny aligns passengers on the same flight so they can book shared taxis, vans or private cars, keep everyone updated and log savings automatically.',
      primaryCta: 'Request beta access',
      secondaryCta: 'Explore the demo',
      imageAlt: 'Cojauny interface showing flight matching, chat and savings cards'
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
            'Coordinate in a chat that self-destructs 48 hours after take-off. Works offline during flight and syncs when you land. Share live location, traffic status or gate changes without endless threads.',
          iconName: 'chat'
        },
        {
          title: 'Transparent savings',
          description:
            'Show how much each passenger saves compared with travelling alone—taxi, Uber or private car.',
          iconName: 'users'
        },
        {
          title: 'Privacy-first control',
          description:
            'Share the minimum data required and decide whether to exchange social handles. Everything is encrypted and GDPR compliant.',
          iconName: 'shield'
        },
        {
          title: '78 Languages Supported',
          description:
            'Product experience adapts to 78 languages, including automatic messages. Every passenger can coordinate in their native language.',
          iconName: 'globe'
        },
        {
          title: 'Smart Notifications',
          description:
            'Prioritized alerts for new events, flight changes, meeting reminders and driver arrival notices.',
          iconName: 'sparkles'
        },
        {
          title: 'Savings & Impact Stats',
          description:
            'Dashboard with accumulated savings, shared kilometers and avoided CO₂ to report to your team or community.',
          iconName: 'bolt'
        },
        {
          title: 'Recurring Events',
          description:
            'Set up events that repeat by route, schedule or airline and keep your group automatically notified on every flight.',
          iconName: 'users'
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
        },
        {
          title: '⏱️ Coordination without endless chats',
          description:
            'Agenda, reminders and automatic confirmations. Cojauny notifies everyone when the driver is arriving or the boarding gate changes.'
        },
        {
          title: '🛡️ Trust and reputation',
          description:
            'Ratings, verification and anti-bot policies. If someone doesn\'t show up, the group can report them and the system adjusts their reputation.'
        },
        {
          title: '📱 Omnichannel operation',
          description:
            'All information—flight, meeting point, payments, contacts—lives in a single thread accessible from mobile or progressive web.'
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
      title: 'How to coordinate a trip on Cojauny',
      intro: 'Five clear milestones from entering your flight to recording savings for your team.',
      steps: [
        {
          title: '1. Create your verified profile',
          description: 'Sign in with Apple, Google or email, add a photo and basic documentation to unlock matching.'
        },
        {
          title: '2. Add your flight',
          description: 'Enter airline, number and date. The app fetches official schedules and suggests other matching travelers.'
        },
        {
          title: '3. Join or create an event',
          description: 'Browse community-created events or launch a new one by defining capacity, meeting point and payment method.'
        },
        {
          title: '4. Coordinate in secure chat',
          description: 'Share locations, license plates and fares from a moderated chat with optional automatic translation. Works offline during flight and syncs when you land.'
        },
        {
          title: '5. Close the trip and report',
          description: 'Mark the trip as complete to split costs and automatically record savings and avoided CO₂.'
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
          image: '/images/mockups/en/mockup-flight-search.svg'
        },
        {
          id: 'events-list',
          badge: 'Events',
          title: 'Events for your flight',
          description:
            'See all available events for your flight: "Share taxi from airport A to city B", "Dinner at destination", etc. With real-time capacity and participants.',
          image: '/images/mockups/en/mockup-events-list.svg'
        },
        {
          id: 'event-detail',
          badge: 'Detail',
          title: 'Complete event information',
          description:
            'View organizer, confirmed participants, available spots, meeting point, time and estimated costs. Like or comment.',
          image: '/images/mockups/en/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Private and group chat',
          description:
            'Chat directly with organizers (Free) or with the entire group (Premium). Share location, payment details and coordinate in real-time.',
          image: '/images/mockups/en/mockup-chat.svg'
        },
        {
          id: 'profile',
          badge: 'Profile',
          title: 'Verified profiles',
          description:
            'See other travelers information: photo, name, verification, reputation and events they have participated in. Travel with confidence.',
          image: '/images/mockups/en/mockup-profile.svg'
        },
        {
          id: 'impact',
          badge: 'Impact',
          title: 'Your savings and carbon footprint',
          description:
            'Dashboard with charts of how much money you have saved, how much CO₂ you have reduced and statistics of your shared trips.',
          image: '/images/mockups/en/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Ready to start saving on your trips?',
      body: 'Join the shared travel revolution. Be part of a community that will reduce costs, CO₂ emissions, and create new friendships on every flight.',
      link: '#beta',
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
          answer: 'Various types: shared transport to departure airport, transport from arrival airport, shared taxi, shared private car, meals at destination, and post-flight social activities. Premium users can create any type.'
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
        heading: 'Join the shared travel revolution',
        subheading: 'Get early access to Cojauny and be part of the early adopter community. Exclusive pricing, priority support and a direct line with the product team.',
        title: 'Request private beta access',
        description:
          '🌟 Early access · 💰 Preferred pricing · 🏆 Early adopter badge · 🛠️ Direct product channel · 🚀 Priority support',
        success:
          'Thanks for trusting Cojauny. We will send your activation token and next steps from support@cojauny.com.',
        error: 'We could not register your request. Please verify the details or try again shortly.',
        duplicateError:
          'This email is already on the beta list. Check your inbox or contact support@cojauny.com.',
        submit: 'Submit request',
        checkboxLabel: 'I have read and accept the Cojauny {privacyLink}.',
        privacyLinkLabel: 'privacy policy',
        referralNotice:
          'ℹ️ When you register, you will get a unique link to share. We use this link only to count visits and new signups that come from you. We do not collect personal data from those who click.',
        optionalLabel: '(optional)',
        optionalHint: 'Fields marked as "(optional)" can be left blank.',
        fields: {
          fullName: 'Full name',
          email: 'Email',
          country: 'Country',
          homeAirport: 'Home city or main airport',
          flightFrequency: 'How often do you fly?',
          useCase: 'How will you use Cojauny or what do you want to validate in the beta?',
          updatesOptIn: 'Send me product updates and roadmap news',
          privacyAcceptance: 'I consent to Cojauny storing my data to participate in the beta program.'
        },
        placeholders: {
          homeAirport: 'e.g. London Heathrow (LHR), JFK, CDMX',
          useCase: 'Share the goals, KPIs or hypotheses you hope to validate'
        },
        countryOptions: [
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
          { value: 'once', label: 'Once per year', description: 'Occasional or seasonal travel' },
          {
            value: 'two_to_five',
            label: '2–5 times per year',
            description: 'Typical business travel cadence or frequent leisure trips'
          },
          {
            value: 'six_to_ten',
            label: '6–10 times per year',
            description: 'Ops managers, consultants or crews with recurring routes'
          },
          {
            value: 'more_than_ten',
            label: 'More than 10 times',
            description: 'Airline teams, travel managers or heavy travelers'
          }
        ]
      },
      feedback: {
        heading: 'Feedback, ideas and business proposals',
        subheading: 'Have a suggestion to improve Cojauny? Want to share an innovative idea or explore business opportunities? We are here to listen.',
        title: 'Share your proposal',
        description:
          'Managing group transfers or premium passengers? Tell us more and we will reply from feedback@cojauny.com.',
        success:
          'Thanks for the feedback. We will reach out using the same address if we need more context.',
        error: "The 'Message' field must be at least 10 characters long.",
        submit: 'Send message',
        optionalLabel: '(optional)',
        optionalHint: 'Every field is required unless you see "(optional)" next to the label.',
        fields: {
          fullName: 'Name',
          email: 'Email',
          message: 'Tell us about your case',
          useCase: 'Case',
          selectPlaceholder: 'Select an option'
        },
        caseOptions: [
          { value: 'feedback', label: 'Feedback' },
          { value: 'idea', label: 'Idea' },
          { value: 'business_proposal', label: 'Business proposal' }
        ]
      }
    },
    referralPanel: {
      title: '🎁 Share Cojauny and get priority access',
      subtitle: 'Invite other professionals and get exclusive benefits',
      yourLink: 'Your unique invitation link',
      copyButton: 'Copy link',
      copiedButton: '✓ Copied',
      stats: {
        visits: 'Visits',
        signups: 'Signups'
      },
      instructions: {
        title: 'How to share your link',
        step1: 'Share this link with colleagues, friends and on social media.',
        step2: 'Every time someone visits your link, we count an anonymous visit.',
        step3: 'If they sign up for the beta, we count a new signup associated with you.'
      },
      privacy:
        'We only count visits and signups anonymously. We do not collect personal data from those who click your link.'
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
      acceptableUse: 'Acceptable Use',
      faq: 'FAQ',
      subprocessors: 'Subprocessors',
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
      blog: 'Blog',
      benefits: 'Vorteile',
      impact: 'Impact',
      workflow: 'Ablauf',
      faq: 'FAQ',
      feedback: 'Vorschlag'
    },
    seo: {
      title: 'Cojauny: Teile dein Flughafentaxi und spare bis zu 75%',
      description:
        'Verbinden Sie sich mit Passagieren Ihres Fluges, um Flughafen-Taxis, Shuttles oder Privatwagen zu teilen. Automatisches Matching, verifizierte Profile, sicherer Chat und echte Ersparnisse von 50-75% pro Fahrt. Verfügbar an 120+ Flughäfen.',
      keywords: [
        'flughafen taxi teilen',
        'airport ride sharing',
        'flughafen fahrgemeinschaft',
        'taxi kosten teilen flughafen',
        'günstig zum flughafen',
        'flughafen shuttle alternative',
        'flughafen transport app',
        'mitfahrgelegenheit flughafen',
        'flughafen transfer teilen',
        'gemeinsame fahrt flughafen'
      ],
      ogTitle: 'Cojauny: Flughafen-Taxi teilen & 50-75% sparen | Kostenlose App',
      ogDescription:
        'Finden Sie verifizierte Mitreisende auf Ihrem Flug zum Teilen von Flughafen-Transfers. Sicherer Chat, automatische Kostenteilung und messbare Ersparnisse. Jetzt an 120+ Flughäfen.'
    },
    hero: {
      eyebrow: 'Spare bis zu 75% bei deinen Flughafentransfers',
      title: 'Teile die Fahrt zum Flughafen mit deinen Mitreisenden',
      subtitle:
        'Cojauny bringt Passagiere desselben Tickets zusammen, damit sie in Minuten Taxi, Ride-Sharing oder Privatwagen organisieren. Keine dauerhaften Gruppen, nur das Wesentliche zum Sparen.',
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
            'Koordiniere Details in einem Chat, der 48 Stunden nach dem Flug automatisch gelöscht wird. Funktioniert offline während des Fluges und synchronisiert sich bei der Landung. Keine endlosen Gruppen.',
          iconName: 'chat'
        },
        {
          title: 'Transparente Ersparnis',
          description:
            'Zeige, wie viel jeder Passagier im Vergleich zur Einzelfahrt spart – Taxi, Uber oder Privatwagen.',
          iconName: 'users'
        },
        {
          title: 'Datenschutz zuerst',
          description:
            'Teile nur notwendige Informationen und entscheide selbst, ob du weitere Kontaktdaten austauschst. Alles DSGVO-konform.',
          iconName: 'shield'
        },
        {
          title: '78 Unterstützte Sprachen',
          description:
            'Die Produkterfahrung passt sich an 78 Sprachen an, einschließlich automatischer Nachrichten. Jeder Passagier kann in seiner Muttersprache koordinieren.',
          iconName: 'globe'
        },
        {
          title: 'Intelligente Benachrichtigungen',
          description:
            'Priorisierte Warnungen für neue Events, Flugänderungen, Treffpunkt-Erinnerungen und Fahrer-Ankunftsmeldungen.',
          iconName: 'sparkles'
        },
        {
          title: 'Einsparungs- & Impact-Statistiken',
          description:
            'Dashboard mit kumulierten Einsparungen, geteilten Kilometern und vermiedenem CO₂ zum Berichten an dein Team oder deine Community.',
          iconName: 'bolt'
        },
        {
          title: 'Wiederkehrende Events',
          description:
            'Richte Events ein, die sich nach Route, Zeitplan oder Fluggesellschaft wiederholen, und halte deine Gruppe bei jedem Flug automatisch informiert.',
          iconName: 'users'
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
        },
        {
          title: '⏱️ Koordination ohne endlose Chats',
          description:
            'Agenda, Erinnerungen und automatische Bestätigungen. Cojauny benachrichtigt alle, wenn der Fahrer ankommt oder sich das Boarding-Gate ändert.'
        },
        {
          title: '🛡️ Vertrauen und Reputation',
          description:
            'Bewertungen, Verifizierung und Anti-Bot-Richtlinien. Wenn jemand nicht erscheint, kann die Gruppe ihn melden und das System passt seine Reputation an.'
        },
        {
          title: '📱 Omnichannel-Betrieb',
          description:
            'Alle Informationen—Flug, Treffpunkt, Zahlungen, Kontakte—leben in einem einzigen Thread, der von Mobilgeräten oder progressivem Web zugänglich ist.'
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
      title: 'So koordinierst du eine Fahrt mit Cojauny',
      intro: 'Fünf klare Meilensteine vom Eingeben deines Fluges bis zur Aufzeichnung der Einsparungen für dein Team.',
      steps: [
        {
          title: '1. Erstelle dein verifiziertes Profil',
          description: 'Melde dich mit Apple, Google oder E-Mail an, füge ein Foto und grundlegende Dokumente hinzu, um das Matching freizuschalten.'
        },
        {
          title: '2. Füge deinen Flug hinzu',
          description: 'Gib Fluggesellschaft, Nummer und Datum ein. Die App ruft offizielle Flugzeiten ab und schlägt andere passende Reisende vor.'
        },
        {
          title: '3. Tritt einem Event bei oder erstelle eines',
          description: 'Durchsuche von der Community erstellte Events oder starte ein neues, indem du Kapazität, Treffpunkt und Zahlungsmethode festlegst.'
        },
        {
          title: '4. Koordiniere im sicheren Chat',
          description: 'Teile Standorte, Kennzeichen und Tarife über einen moderierten Chat mit optionaler automatischer Übersetzung. Funktioniert offline während des Fluges und synchronisiert sich bei der Landung.'
        },
        {
          title: '5. Schließe die Fahrt ab und berichte',
          description: 'Markiere die Fahrt als abgeschlossen, um Kosten aufzuteilen und Einsparungen sowie vermiedenes CO₂ automatisch zu erfassen.'
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
          image: '/images/mockups/de/mockup-flight-search.svg'
        },
        {
          id: 'events-list',
          badge: 'Events',
          title: 'Events für deinen Flug',
          description:
            'Sieh alle verfügbaren Events für deinen Flug: "Taxi teilen von Flughafen A nach Stadt B", "Abendessen am Ziel", etc. Mit Echtzeit-Kapazität und Teilnehmern.',
          image: '/images/mockups/de/mockup-events-list.svg'
        },
        {
          id: 'event-detail',
          badge: 'Details',
          title: 'Alle Event-Informationen',
          description:
            'Siehe Organisator, bestätigte Teilnehmer, verfügbare Plätze, Treffpunkt, Zeit und geschätzte Kosten. Liken oder kommentieren.',
          image: '/images/mockups/de/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Privater und Gruppen-Chat',
          description:
            'Chatte direkt mit Organisatoren (Free) oder mit der ganzen Gruppe (Premium). Teile Standort, Zahlungsdetails und koordiniere in Echtzeit.',
          image: '/images/mockups/de/mockup-chat.svg'
        },
        {
          id: 'profile',
          badge: 'Profil',
          title: 'Verifizierte Profile',
          description:
            'Siehe Informationen anderer Reisender: Foto, Name, Verifizierung, Reputation und Events, an denen sie teilgenommen haben. Reise mit Vertrauen.',
          image: '/images/mockups/de/mockup-profile.svg'
        },
        {
          id: 'impact',
          badge: 'Impact',
          title: 'Deine Ersparnisse und CO₂-Fußabdruck',
          description:
            'Dashboard mit Grafiken über eingesparte Geld, reduziertes CO₂ und Statistiken deiner geteilten Reisen.',
          image: '/images/mockups/de/mockup-impact.svg'
        }
      ]
    },
    ctaStrip: {
      heading: 'Bereit, bei Ihren Reisen zu sparen?',
      body: 'Werden Sie Teil der geteilten Reiserevolution. Seien Sie Teil einer Gemeinschaft, die Kosten reduzieren, CO₂-Emissionen senken und neue Freundschaften auf jedem Flug schließen wird.',
      link: '#beta',
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
          answer: 'Verschiedene Typen: gemeinsamer Transport zum Abflughafen, Transport vom Ankunftsflughafen, geteiltes Taxi, geteilter Privatwagen, Mahlzeiten am Zielort und soziale Aktivitäten nach dem Flug. Premium-Benutzer können jeden Typ erstellen.'
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
        heading: 'Werde Teil der geteilten Reise-Revolution',
        subheading: 'Erhalte frühen Zugang zu Cojauny und werde Teil der Early-Adopter-Community. Exklusive Tarife, vorrangiger Support und direkter Draht zum Produktteam.',
        title: 'Werde Teil der privaten Beta',
        description:
          'Priorität für Airlines, Geschäftsreise-Teams und Mobilitätsanbieter, die gemeinsame Fahrten mit echten Passagieren testen möchten.',
        success:
          'Danke! Du erhältst eine E-Mail von support@cojauny.com mit deinem Aktivierungs-Token.',
        error: 'Deine Anfrage konnte nicht gesendet werden. Bitte versuche es später erneut.',
        duplicateError:
          'Diese E-Mail steht bereits auf der Beta-Liste. Prüfe dein Postfach oder melde dich bei support@cojauny.com.',
        submit: 'Zugang anfragen',
        checkboxLabel:
          'Ich habe die {privacyLink} gelesen und akzeptiere sie.',
        privacyLinkLabel: 'Datenschutzrichtlinie',
        referralNotice:
          'ℹ️ Bei der Registrierung erhältst du einen eindeutigen Link zum Teilen. Wir nutzen diesen Link nur, um Besuche und neue Anmeldungen zu zählen, die von dir kommen. Wir sammeln keine personenbezogenen Daten derjenigen, die klicken.',
        optionalLabel: '(optional)',
        optionalHint: 'Felder mit dem Hinweis „(optional)“ kannst du frei lassen.',
        fields: {
          fullName: 'Vollständiger Name',
          email: 'Email',
          country: 'Land oder Region',
          homeAirport: 'Stadt oder bevorzugter Flughafen',
          flightFrequency: 'Wie häufig fliegst du?',
          useCase: 'Wie nutzt du Cojauny oder was willst du in der Beta testen?',
          updatesOptIn: 'Ich möchte Produktupdates und Roadmap-News',
          privacyAcceptance: 'Ich stimme zu, dass meine Daten gespeichert werden, um an der Cojauny-Beta teilzunehmen.'
        },
        placeholders: {
          homeAirport: 'Z. B. Berlin (BER), München (MUC), Zürich',
          useCase: 'Welche Ziele, KPIs oder Hypothesen willst du überprüfen?'
        },
        countryOptions: [
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
          { value: 'once', label: '1× pro Jahr', description: 'Einmalige Reisen oder Urlaubsflüge' },
          {
            value: 'two_to_five',
            label: '2–5× pro Jahr',
            description: 'Typische Geschäftsreisen oder regelmäßige Privatreisen'
          },
          {
            value: 'six_to_ten',
            label: '6–10× pro Jahr',
            description: 'Operations-Teams, Berater:innen oder Crews mit festen Routen'
          },
          {
            value: 'more_than_ten',
            label: 'Mehr als 10×',
            description: 'Airline-Teams, Vielreisende und Vielfliegerprogramme'
          }
        ]
      },
      feedback: {
        heading: 'Feedback, Ideen und Geschäftsvorschläge',
        subheading: 'Haben Sie einen Vorschlag zur Verbesserung von Cojauny? Möchten Sie eine innovative Idee teilen oder Geschäftsmöglichkeiten erkunden? Wir sind hier, um zuzuhören.',
        title: 'Teilen Sie Ihren Vorschlag',
        description:
          'Du organisierst Sammeltransfers oder Premium-Reisende? Teile Details, wir melden uns von feedback@cojauny.com.',
        success: 'Danke für dein Feedback. Wir kontaktieren dich bei Rückfragen über dieselbe Adresse.',
        error: "Das Feld 'Nachricht' muss mindestens 10 Zeichen enthalten.",
        submit: 'Nachricht senden',
        optionalLabel: '(optional)',
        optionalHint: 'Alle Felder sind Pflicht, außer sie sind mit „(optional)“ markiert.',
        fields: {
          fullName: 'Name',
          email: 'E-Mail',
          message: 'Erzähl uns deinen Fall',
          useCase: 'Fall',
          selectPlaceholder: 'Option auswählen'
        },
        caseOptions: [
          { value: 'feedback', label: 'Feedback' },
          { value: 'idea', label: 'Idee' },
          { value: 'business_proposal', label: 'Geschäftsvorschlag' }
        ]
      }
    },
    referralPanel: {
      title: '🎁 Teile Cojauny und erhalte prioritären Zugang',
      subtitle: 'Lade andere Profis ein und erhalte exklusive Vorteile',
      yourLink: 'Dein einzigartiger Einladungslink',
      copyButton: 'Link kopieren',
      copiedButton: '✓ Kopiert',
      stats: {
        visits: 'Besuche',
        signups: 'Anmeldungen'
      },
      instructions: {
        title: 'So teilst du deinen Link',
        step1: 'Teile diesen Link mit Kollegen, Freunden und in sozialen Medien.',
        step2: 'Jedes Mal, wenn jemand deinen Link besucht, zählen wir einen anonymen Besuch.',
        step3: 'Wenn sie sich für die Beta anmelden, zählen wir eine neue Anmeldung, die dir zugeordnet ist.'
      },
      privacy:
        'Wir zählen nur Besuche und Anmeldungen anonym. Wir sammeln keine personenbezogenen Daten derjenigen, die auf deinen Link klicken.'
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
      terms: 'Bedingungen',
      acceptableUse: 'Zulässige Nutzung',
      faq: 'FAQ',
      subprocessors: 'Unterauftragsverarbeiter',
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
      blog: 'Blog',
      benefits: 'Avantages',
      impact: 'Impact',
      workflow: 'Parcours',
      faq: 'FAQ',
      feedback: 'Proposition'
    },
    seo: {
      title: 'Cojauny : Partagez un taxi d\'aéroport et économisez jusqu\'à 75%',
      description:
        'Connectez-vous avec des passagers de votre vol pour partager des taxis, navettes ou voiture privée. Matching automatique, profils vérifiés, chat sécurisé et économies réelles de 50-75% par trajet. Disponible dans 120+ aéroports.',
      keywords: [
        'partage taxi aéroport',
        'covoiturage aéroport',
        'partager taxi aéroport',
        'diviser coût taxi aéroport',
        'transport aéroport pas cher',
        'alternative navette aéroport',
        'application partage taxi',
        'covoiturage vol',
        'trajet partagé aéroport',
        'app transport aéroport'
      ],
      ogTitle: 'Cojauny : Partagez un taxi d\'aéroport & économisez 50-75% | App gratuite',
      ogDescription:
        'Trouvez des voyageurs vérifiés sur votre vol pour partager les transferts aéroport. Chat sécurisé, partage automatique des coûts et économies mesurables. Maintenant dans 120+ aéroports.'
    },
    hero: {
      eyebrow: 'Économisez jusqu\'à 75% sur vos transferts aéroportuaires',
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
            'Affichez les économies par passager par rapport à un trajet individuel — taxi, VTC ou voiture privée.',
          iconName: 'users'
        },
        {
          title: 'Contrôle de la confidentialité',
          description:
            'Partagez seulement les informations nécessaires et choisissez si vous souhaitez échanger vos réseaux. Conforme RGPD.',
          iconName: 'shield'
        },
        {
          title: '78 Langues Supportées',
          description:
            'L\'expérience produit s\'adapte à 78 langues, y compris les messages automatiques. Chaque passager peut coordonner dans sa langue maternelle.',
          iconName: 'globe'
        },
        {
          title: 'Notifications Intelligentes',
          description:
            'Alertes priorisées pour les nouveaux événements, les modifications de vol, les rappels de rendez-vous et les avis d\'arrivée du chauffeur.',
          iconName: 'sparkles'
        },
        {
          title: 'Statistiques d\'Économies et d\'Impact',
          description:
            'Tableau de bord avec économies cumulées, kilomètres partagés et CO₂ évité pour rendre compte à votre équipe ou communauté.',
          iconName: 'bolt'
        },
        {
          title: 'Événements Récurrents',
          description:
            'Configurez des événements qui se répètent par itinéraire, horaire ou compagnie aérienne et maintenez votre groupe automatiquement informé à chaque vol.',
          iconName: 'users'
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
        },
        {
          title: '⏱️ Coordination sans chats infinis',
          description:
            'Agenda, rappels et confirmations automatiques. Cojauny prévient tout le monde quand le chauffeur arrive ou que la porte d\'embarquement change.'
        },
        {
          title: '🛡️ Confiance et réputation',
          description:
            'Notes, vérification et politiques anti-bot. Si quelqu\'un ne se présente pas, le groupe peut le signaler et le système ajuste sa réputation.'
        },
        {
          title: '📱 Opération omnicanale',
          description:
            'Toutes les informations—vol, point de rencontre, paiements, contacts—vivent dans un seul fil accessible depuis mobile ou web progressif.'
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
          description: 'Vous pouvez économiser entre 50% et 75% sur chaque trajet aéroportuaire en partageant avec d\'autres passagers de votre vol.'
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
      title: 'Comment coordonner un trajet sur Cojauny',
      intro: 'Cinq étapes claires depuis la saisie de votre vol jusqu\'à l\'enregistrement des économies pour votre équipe.',
      steps: [
        {
          title: '1. Créez votre profil vérifié',
          description: 'Connectez-vous avec Apple, Google ou email, ajoutez une photo et des documents de base pour débloquer le matching.'
        },
        {
          title: '2. Ajoutez votre vol',
          description: 'Saisissez la compagnie aérienne, le numéro et la date. L\'app récupère les horaires officiels et suggère d\'autres voyageurs correspondants.'
        },
        {
          title: '3. Rejoignez ou créez un événement',
          description: 'Parcourez les événements créés par la communauté ou lancez-en un nouveau en définissant la capacité, le point de rencontre et le mode de paiement.'
        },
        {
          title: '4. Coordonnez dans le chat sécurisé',
          description: 'Partagez emplacements, plaques d\'immatriculation et tarifs depuis un chat modéré avec traduction automatique optionnelle. Fonctionne hors ligne pendant le vol et se synchronise à l\'atterrissage.'
        },
        {
          title: '5. Clôturez le trajet et rapportez',
          description: 'Marquez le trajet comme terminé pour diviser les coûts et enregistrer automatiquement les économies et le CO₂ évité.'
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
            'Entrez votre numéro de vol et la date. Notre système trouve automatiquement les informations du vol et vous montre d\'autres voyageurs disponibles.',
          image: '/images/mockups/fr/mockup-flight-search.svg'
        },
        {
          id: 'events-list',
          badge: 'Événements',
          title: 'Événements pour votre vol',
          description:
            'Voyez tous les événements disponibles pour votre vol : "Partager un taxi de l\'aéroport A à la ville B", "Dîner à destination", etc. Avec capacité et participants en temps réel.',
          image: '/images/mockups/fr/mockup-events-list.svg'
        },
        {
          id: 'event-detail',
          badge: 'Détail',
          title: 'Informations complètes de l\'événement',
          description:
            'Voir l\'organisateur, les participants confirmés, les places disponibles, le point de rencontre, l\'heure et les coûts estimés. Liker ou commenter.',
          image: '/images/mockups/fr/mockup-event-detail.svg'
        },
        {
          id: 'chat',
          badge: 'Chat',
          title: 'Chat privé et de groupe',
          description:
            'Chattez directement avec les organisateurs (Free) ou avec tout le groupe (Premium). Partagez la localisation, les détails de paiement et coordonnez en temps réel.',
          image: '/images/mockups/fr/mockup-chat.svg'
        },
        {
          id: 'profile',
          badge: 'Profil',
          title: 'Profils vérifiés',
          description:
            'Voir les informations des autres voyageurs : photo, nom, vérification, réputation et événements auxquels ils ont participé. Voyagez en toute confiance.',
          image: '/images/mockups/fr/mockup-profile.svg'
        },
        {
          id: 'impact',
          badge: 'Impact',
          title: 'Vos économies et empreinte carbone',
          description:
            'Tableau de bord avec graphiques de combien d\'argent vous avez économisé, combien de CO₂ vous avez réduit et statistiques de vos trajets partagés.',
          image: '/images/mockups/fr/mockup-impact.svg'
        }
      ]

    },
    ctaStrip: {
      heading: 'Prêt à économiser sur vos voyages?',
      body: 'Rejoignez la révolution du voyage partagé. Faites partie d’une communauté qui réduira les coûts, les émissions de CO₂ et créera de nouvelles amitiés à chaque vol.',
      link: '#beta',
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
          answer: 'Différents types : transport partagé vers l\'aéroport de départ, transport depuis l\'aéroport d\'arrivée, taxi partagé, voiture privée partagée, repas à destination et activités sociales post-vol. Les utilisateurs Premium peuvent créer tous les types.'
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
        heading: 'Rejoignez la révolution du voyage partagé',
        subheading: 'Obtenez un accès anticipé à Cojauny et rejoignez la communauté early adopter. Tarifs exclusifs, support prioritaire et ligne directe avec l’équipe produit.',
        title: 'Rejoignez la beta privée',
        description:
          'Priorité aux compagnies aériennes, agences corporate et équipes mobilité voulant tester des trajets partagés avec de vrais passagers.',
        success:
          'Merci ! Vous recevrez un e-mail de support@cojauny.com avec votre token d’activation.',
        error: 'Impossible d’envoyer votre demande. Réessayez dans quelques minutes.',
        duplicateError:
          'Cet e-mail est déjà inscrit à la bêta. Vérifiez votre boîte mail ou écrivez-nous à support@cojauny.com.',
        submit: 'Demander l’accès',
        checkboxLabel:
          'J’ai lu et j’accepte la {privacyLink}.',
        privacyLinkLabel: 'politique de confidentialité',
        referralNotice:
          'ℹ️ Lors de votre inscription, vous obtiendrez un lien unique à partager. Nous utilisons ce lien uniquement pour compter les visites et les nouvelles inscriptions provenant de vous. Nous ne collectons pas de données personnelles de ceux qui cliquent.',
        optionalLabel: '(Optionnel)',
        optionalHint: 'Les champs indiqués « (Optionnel) » peuvent être laissés vides.',
        fields: {
          fullName: 'Nom complet',
          email: 'Email',
          country: 'Pays de résidence',
          homeAirport: 'Ville ou aéroport habituel',
          flightFrequency: 'À quelle fréquence prenez-vous l’avion ?',
          useCase: 'Comment utiliserez-vous Cojauny ou que voulez-vous valider pendant la bêta ?',
          updatesOptIn: 'Je souhaite recevoir les nouveautés produit',
          privacyAcceptance: 'J’accepte que mes données soient stockées pour participer à la bêta Cojauny.'
        },
        placeholders: {
          homeAirport: 'Ex. Paris (CDG), Montréal (YUL), Genève',
          useCase: 'Précisez les objectifs, KPI ou hypothèses à valider'
        },
        countryOptions: [
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
          { value: 'once', label: '1 fois par an', description: 'Voyages ponctuels ou vacances planifiées' },
          {
            value: 'two_to_five',
            label: '2–5 fois par an',
            description: 'Cadence classique des équipes commerciales ou des voyageurs réguliers'
          },
          {
            value: 'six_to_ten',
            label: '6–10 fois par an',
            description: 'Responsables opérations ou staffs avec routes récurrentes'
          },
          {
            value: 'more_than_ten',
            label: 'Plus de 10 fois',
            description: 'Équipes compagnies, crews et voyageurs intensifs'
          }
        ]
      },
      feedback: {
        heading: 'Feedback, idées et propositions commerciales',
        subheading: 'Vous avez une suggestion pour améliorer Cojauny? Vous souhaitez partager une idée innovante ou explorer des opportunités commerciales? Nous sommes là pour vous écouter.',
        title: 'Partagez votre scénario',
        description:
          'Vous gérez des transferts collectifs ou des voyageurs premium ? Donnez-nous des détails et nous répondrons depuis feedback@cojauny.com.',
        success:
          'Merci pour votre retour. Nous vous contacterons par ce même e-mail si besoin.',
        error: "Le champ 'Message' doit contenir au moins 10 caractères.",
        submit: 'Envoyer',
        optionalLabel: '(Optionnel)',
        optionalHint: 'Tous les champs sont requis sauf indication « (Optionnel) ». ',
        fields: {
          fullName: 'Nom',
          email: 'Email',
          message: 'Parlez-nous de votre cas',
          useCase: 'Type de retour',
          selectPlaceholder: 'Choisissez une option'
        },
        caseOptions: [
          { value: 'feedback', label: 'Prêt pour un pilote' },
          { value: 'idea', label: 'Besoin de précisions' },
          { value: 'business_proposal', label: 'J’ai des freins' }
        ]
      }
    },
    referralPanel: {
      title: '🎁 Partagez Cojauny et obtenez un accès prioritaire',
      subtitle: 'Invitez d\'autres professionnels et obtenez des avantages exclusifs',
      yourLink: 'Votre lien d\'invitation unique',
      copyButton: 'Copier le lien',
      copiedButton: '✓ Copié',
      stats: {
        visits: 'Visites',
        signups: 'Inscriptions'
      },
      instructions: {
        title: 'Comment partager votre lien',
        step1: 'Partagez ce lien avec des collègues, des amis et sur les réseaux sociaux.',
        step2: 'Chaque fois que quelqu\'un visite votre lien, nous comptons une visite anonyme.',
        step3: 'S\'ils s\'inscrivent à la bêta, nous comptons une nouvelle inscription associée à vous.'
      },
      privacy:
        'Nous comptons uniquement les visites et les inscriptions de manière anonyme. Nous ne collectons pas de données personnelles de ceux qui cliquent sur votre lien.'
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
      acceptableUse: 'Utilisation Acceptable',
      faq: 'FAQ',
      subprocessors: 'Sous-traitants',
      contact: 'Contact',
      blog: 'Blog',
      languageLabel: 'Langue'
    }
  }
};

export function getLandingCopy(locale: Locale): LandingCopy {
  return landingCopy[locale] ?? landingCopy[defaultLocale];
}


