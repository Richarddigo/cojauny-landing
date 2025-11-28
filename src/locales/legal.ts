import type { Locale } from './config';
import { defaultLocale } from './config';

interface LegalSection {
  heading: string;
  body: string;
}

export interface LegalPageCopy {
  title: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
  contact: string;
}

interface FAQCategory {
  name: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

interface Subprocessor {
  name: string;
  purpose: string;
  location: string;
  security: string;
}

interface ExtendedLegalCopy {
  privacy: LegalPageCopy;
  cookies: LegalPageCopy;
  terms: LegalPageCopy;
  acceptableUse: LegalPageCopy;
  faq: {
    title: string;
    intro: string;
    updatedAt: string;
    categories: FAQCategory[];
    contact: string;
  };
  subprocessors: {
    title: string;
    intro: string;
    updatedAt: string;
    providers: Subprocessor[];
    contact: string;
  };
}

const legalCopy: Record<Locale, ExtendedLegalCopy> = {
  es: {
    privacy: {
      title: 'Arquitectura de Privacidad: Nuestro Compromiso con la Protección de Datos',
      intro: 'En Cojauny, la privacidad no es una característica adicional—es el fundamento de nuestra arquitectura. Esta política desglosa meticulosamente cómo custodiamos, procesamos y protegemos cada byte de información que nos confías durante tu interacción con nuestra plataforma beta.',
      updatedAt: 'Última revisión arquitectónica: 17 de noviembre de 2025',
      sections: [
        {
          heading: 'Responsabilidad Técnica y Operativa',
          body: 'Durante la fase de constitución de nuestra entidad mercantil definitiva, la gestión de datos recae en el equipo fundador de Cojauny (denominado "Equipo Cojauny" en este contexto). Operamos desde España bajo un modelo de responsabilidad distribuida, manteniendo un canal único de comunicación: support@cojauny.com. Los datos registrales completos se publicarán en esta sección inmediatamente después de su formalización jurídica.'
        },
        {
          heading: 'Taxonomía de Datos: Lo que Realmente Recolectamos',
          body: 'Nuestro esquema de recolección sigue el principio de minimización extrema: procesamos únicamente datos proporcionados voluntariamente (identificación, contacto, contexto organizacional y comunicaciones) junto con métricas de navegación anonimizadas (patrones de interacción, preferencias lingüísticas, fingerprinting técnico no identificativo) y registros de seguridad indispensables para garantizar la integridad del sistema.'
        },
        {
          heading: 'Procesamiento de Datos de Localización',
          body: 'Durante la coordinación de eventos, procesamos temporalmente datos de ubicación con encriptación end-to-end. Estos datos se auto-destruyen 2 horas después del evento y nunca se almacenan en nuestros servidores de forma permanente. Puedes desactivar esta función en cualquier momento desde la configuración de la aplicación sin afectar funcionalidades core.'
        },
        {
          heading: 'Finalidades y Fundamentos Jurídicos: La Matemática de la Privacidad',
          body: 'Cada procesamiento de datos responde a una ecuación precisa: gestión de acceso beta (base: consentimiento explícito), optimización del servicio mediante feedback (base: interés legítimo calibrado) y análisis agregado para decisiones de producto (base: consentimiento para cookies analíticas e interés legítimo proporcional para estabilidad y seguridad del sistema).'
        },
        {
          heading: 'Flujos de Datos y Fronteras Digitales',
          body: 'Implementamos un modelo de soberanía de datos donde la información solo transita por proveedores esenciales para la infraestructura, hospedaje, comunicaciones y analítica. Para transferencias extra-EEE aplicamos un protocolo multicapa: Cláusulas Contractuales Tipo reforzadas con evaluaciones de impacto y medidas técnicas suplementarias. Excluimos categóricamente la venta o cesión comercial de datos.'
        },
        {
          heading: 'Derechos de Menores',
          body: 'Nuestro servicio está dirigido exclusivamente a mayores de 18 años. No recopilamos conscientemente información de menores. Si descubrimos que hemos procesado datos de un menor sin verificación de consentimiento parental, eliminaremos inmediatamente dicha información de nuestros sistemas y notificaremos a las autoridades competentes cuando sea requerido.'
        },
        {
          heading: 'Cronometría de la Conservación',
          body: 'Los datos persisten exclusivamente durante el ciclo beta activo, con un horizonte máximo de 12 meses post-última interacción. Este plazo se interrumpe únicamente por mandato legal específico o mediante ejercicio temprano de derechos de supresión. Los datos de localización tienen retención máxima de 2 horas.'
        },
        {
          heading: 'Derechos y Mecanismos de Ejecución',
          body: 'Tu panel de control incluye derechos de acceso, rectificación, oposición, portabilidad, limitación y supresión—ejercitables via support@cojauny.com con respuesta en 72 horas hábiles. El consentimiento es revocable en cualquier punto del journey. Para reclamaciones, la Agencia Española de Protección de Datos (www.aepd.es) actúa como autoridad de supervisión.'
        },
        {
          heading: 'Protocolo de Notificación de Brechas',
          body: 'En el improbable caso de una violación de seguridad que afecte datos personales, notificaremos a la autoridad competente dentro de 72 horas y a los usuarios afectados sin demora injustificada. Mantenemos registros detallados de todos los incidentes de seguridad para auditoría y mejora continua.'
        },
        {
          heading: 'Evolución de la Política: Transparencia Proactiva',
          body: 'Revisaremos arquitectónicamente esta política ante cambios sustanciales en procesamiento o formalización jurídica. Notificaremos mediante canales prioritarios y mantendremos versionamiento completo en esta ubicación. Los cambios sustanciales requerirán re-consentimiento para procesamientos basados en esta base jurídica.'
        }
      ],
      contact: 'Para consultas técnicas sobre privacidad: support@cojauny.com | Respuesta en ≤24h'
    },

    cookies: {
      title: 'Protocolo de Cookies: Gestión Técnica de Identificadores',
      intro: 'Este protocolo desgrana la ingeniería detrás de cookies y tecnologías análogas en cojauny.com, funcionando como anexo técnico especializado de nuestra política de privacidad principal.',
      updatedAt: 'Última calibración técnica: 17 de noviembre de 2025',
      sections: [
        {
          heading: 'Anatomía de las Cookies: Más Allá del Archivo de Texto',
          body: 'Las cookies operan como registros de estado sesión—pequeños artefactos digitales que el navegador almacena temporalmente para preservar contexto operativo. Extendemos este concepto a tecnologías hermanas como localStorage, sessionStorage y IndexedDB, siempre con la misma filosofía de minimización.'
        },
        {
          heading: 'Taxonomía de Identificadores Técnicos',
          body: 'Clasificamos los trackers en tres categorías operativas: cookies esenciales (gestión de sesión, balanceo de carga, preferencia idiomática), cookies de preferencias (memoria de selecciones en banners) y cookies analíticas (Google Analytics 4 con anonimización de IP y truncamiento de datos). Las categorías no esenciales requieren consentimiento explícito mediante opt-in granular.'
        },
        {
          heading: 'Tecnologías de Tracking Avanzadas',
          body: 'Además de cookies, utilizamos localStorage para preferencias de interfaz y sessionStorage para tokens de autenticación temporal. Implementamos fingerprinting técnico no identificativo únicamente para prevención de fraude y seguridad, excluyendo este análisis del scope de consentimiento por ser esencial para la integridad del servicio.'
        },
        {
          heading: 'Ingeniería del Consentimiento: Control Granular',
          body: 'Gestiona tu preferencia mediante el banner inicial o el centro de preferencias persistente. Alternativamente, configura tu navegador (Chrome, Safari, Edge, Firefox) para gestión avanzada—aunque esto puede impactar funcionalidades no críticas. Implementamos cookieless tracking para métricas agregadas esenciales de rendimiento.'
        },
        {
          heading: 'Geolocalización y Persistencia de Datos',
          body: 'Procesamos el 92% de datos de cookies dentro de la UE. Para el 8% restante (proveedores globales), aplicamos Cláusulas Contractuales Tipo con encriptación adicional y evaluaciones de impacto trimestrales. Los identificadores analíticos tienen un TTL máximo de 14 meses con rotación automática y revisión semestral.'
        },
        {
          heading: 'Evolución del Protocolo',
          body: 'Revisaremos técnicamente este protocolo ante cambios en la stack tecnológica o períodos de retención. Mantendremos changelog público y notificaremos cambios sustanciales via email para usuarios activos. Los cambios que expandan el scope de tracking requerirán nuevo consentimiento.'
        }
      ],
      contact: 'Consultas técnicas sobre cookies: support@cojauny.com | Especificar "Protocolo Cookies" en asunto'
    },

    terms: {
      title: 'Marco Contractual: Términos de Servicio para Fase Beta',
      intro: 'Este marco regula la relación jurídica entre el usuario y Cojauny durante la fase beta precomercial. La navegación y envío de información constituye aceptación expresa de estos términos en su versión vigente.',
      updatedAt: 'Última actualización contractual: 17 de noviembre de 2025',
      sections: [
        {
          heading: 'Alcance Operativo y Objeto del Servicio',
          body: 'Cojauny opera como plataforma beta precomercial proporcionando: (i) información corporativa y técnica, (ii) gestión de acceso anticipado, (iii) canal de feedback estructurado. El servicio se presta "as-is" sin garantías de disponibilidad continuada y sujeto a evolución constante durante el periodo beta.'
        },
        {
          heading: 'Condiciones Específicas de la Fase Beta',
          body: 'Al participar en la beta aceptas: (i) posible inestabilidad del servicio, (ii) características limitadas respecto a la versión final, (iii) reinicios periódicos de la base de datos, (iv) comunicación activa de bugs y feedback. Los usuarios beta que proporcionen feedback sustancial podrán acceder a condiciones especiales en el lanzamiento comercial.'
        },
        {
          heading: 'Requisitos de Elegibilidad y Calidad de Datos',
          body: 'Para interactuar con los formularios se requiere: mayoría de edad verificable (18+), veracidad de información proporcionada y autorización explícita para datos de terceros. Prohibimos categóricamente la introducción de datos sensibles (salud, ideología, biometría, etc.) excepto cuando sean estrictamente necesarios y exista base legal adecuada documentada.'
        },
        {
          heading: 'Protocolo de Uso Aceptable',
          body: 'El marco excluye: actividades ilícitas, interferencia con infraestructura, ingeniería inversa no autorizada, scraping automatizado masivo, introducción de código malicioso y cualquier actividad que comprometa la experiencia de otros usuarios beta. Reservamos derecho de suspensión inmediata ante violaciones de este protocolo.'
        },
        {
          heading: 'Política de Cancelación y Suspensión',
          body: 'Reservamos el derecho de suspender acceso inmediatamente en casos de: uso malicioso, violación de términos, actividades que comprometan la seguridad de otros usuarios o comportamiento que degrade la experiencia beta. Notificaremos la suspensión vía email y ofreceremos proceso de apelación dentro de 72 horas hábiles.'
        },
        {
          heading: 'Propiedad Intelectual y Licencias Limitadas',
          body: 'Cojauny, el código subyacente, diseños de interfaz, documentación técnica y metodologías de coordinación son propiedad del Equipo Cojauny o sus licenciantes. Se concede licencia limitada no exclusiva para uso personal durante la beta. Prohibida la reproducción, distribución o creación de obras derivadas sin autorización por escrito.'
        },
        {
          heading: 'Estructura de Responsabilidad en Entorno Beta',
          body: 'Al operar en fase beta, excluimos responsabilidad por: (i) interrupciones de servicio, (ii) inexactitudes en contenido, (iii) daños indirectos o lucro cesante, (iv) pérdida de datos durante reinicios programados. Tu interacción con servicios terceros se rige por sus propios términos. Implementamos medidas de seguridad razonables pero no garantizamos protección absoluta.'
        },
        {
          heading: 'Cambios de Control y Continuidad del Servicio',
          body: 'En caso de cambio de control corporativo (fusión, adquisición o venta), notificaremos con 30 días de antelación. Los datos se transferirán bajo los mismos términos de privacidad o se ofrecerá opción de eliminación completa. Los usuarios beta mantendrán sus beneficios adquiridos durante la transición.'
        },
        {
          heading: 'Evolución Contractual y Jurisdicción',
          body: 'Modificaremos estos términos para reflejar: (i) cambios sustanciales en el servicio, (ii) evoluciones regulatorias, (iii) transición a fase comercial. Notificaremos cambios relevantes via email y mantendremos versionamiento público. La relación se rige por legislación española con jurisdicción exclusiva en tribunales de Madrid capital.'
        }
      ],
      contact: 'Comunicaciones legales: support@cojauny.com | Especificar "Asunto Legal" en asunto | Respuesta en 72h hábiles'
    },

    acceptableUse: {
      title: 'Política de Uso Aceptable: Límites y Responsabilidades',
      intro: 'Esta política define los parámetros de uso responsable de Cojauny durante la fase beta, estableciendo expectativas claras y protegiendo la integridad de nuestra plataforma y comunidad.',
      updatedAt: 'Última revisión: 17 de noviembre de 2025',
      sections: [
        {
          heading: 'Límites de Uso Comercial',
          body: 'Durante la fase beta, el servicio se ofrece exclusivamente para evaluación interna y testing. Prohibido su uso para operaciones comerciales en producción sin autorización expresa. Límite operativo de 50 eventos coordinados mensuales por organización durante beta. El uso comercial requerirá migración a plan empresarial post-lanzamiento.'
        },
        {
          heading: 'Restricciones de Contenido y Conducta',
          body: 'Prohibido utilizar la plataforma para coordinar eventos que involucren: actividades ilegales, contenido ofensivo, acoso, discriminación, violación de derechos de terceros o cualquier actividad que pueda dañar la reputación de Cojauny. Implementamos moderación proactiva y mecanismos de reporte escalable.'
        },
        {
          heading: 'Límites Técnicos y de Rendimiento',
          body: 'Cada organización beta tiene asignado: 10GB de almacenamiento total, 1000 notificaciones mensuales y procesamiento máximo de 100 usuarios simultáneos por evento. Superar estos límites puede resultar en throttling automático o requerir aprobación para expansión.'
        },
        {
          heading: 'Responsabilidades del Usuario Beta',
          body: 'Como usuario beta aceptas: (i) reportar bugs dentro de 48 horas de detección, (ii) participar en al menos una sesión de feedback mensual, (iii) mantener confidencialidad sobre características no públicas, (iv) no realizar benchmarking público contra competidores durante la fase beta.'
        },
        {
          heading: 'Propiedad de Datos Generados',
          body: 'Los usuarios mantienen propiedad completa sobre sus datos de evento y contenido. Cojauny retiene derecho a utilizar datos anonimizados y agregados para mejora de producto, pero nunca accederá a contenido específico sin consentimiento explícito excepto por requerimiento legal.'
        },
        {
          heading: 'Mecanismos de Cumplimiento',
          body: 'Implementamos monitoreo automatizado y revisión manual para asegurar cumplimiento. Las violaciones resultarán en: (i) advertencia formal para infracciones menores, (ii) suspensión temporal para reincidencias, (iii) terminación permanente para violaciones graves. Todos los casos incluyen proceso de apelación documentado.'
        }
      ],
      contact: 'Reportar violaciones de uso: support@cojauny.com | Asunto: "Reporte Uso Aceptable"'
    },

    faq: {
      title: 'Centro de Transparencia: Preguntas Frecuentes Legales',
      intro: 'Respuestas claras a las preguntas más comunes sobre nuestros términos, privacidad y políticas durante la fase beta de Cojauny.',
      updatedAt: 'Actualizado: 17 de noviembre de 2025',
      categories: [
        {
          name: 'Privacidad y Datos',
          questions: [
            {
              question: '¿Cómo manejan los datos de mis empleados o invitados?',
              answer: 'Operamos como encargado del tratamiento bajo instrucciones del cliente. Proporcionamos DPAs pre-firmados y herramientas para gestión de consentimiento en cadena. Puedes solicitar nuestro modelo de DPA estándar en support@cojauny.com.'
            },
            {
              question: '¿Qué sucede con mis datos si Cojauny es adquirida?',
              answer: 'Notificaremos con 30 días de antelación cualquier cambio de control. Los datos personales se transferirán bajo términos equivalentes o se ofrecerá opción de eliminación completa. Los beneficios de usuarios beta se mantendrán durante la transición.'
            },
            {
              question: '¿Realizan profiling o toma de decisiones automatizada?',
              answer: 'No realizamos profiling con consecuencias legales ni decisiones totalmente automatizadas. El algoritmo de matching para compartir viajes sugiere pero nunca decide automáticamente—siempre requiere confirmación humana.'
            }
          ]
        },
        {
          name: 'Términos y Condiciones',
          questions: [
            {
              question: '¿Puedo usar Cojauny para eventos de clientes externos?',
              answer: 'Durante la beta, solo para testing interno. El uso comercial con clientes externos requerirá plan empresarial post-lanzamiento. Contacta para discusión de casos especiales.'
            },
            {
              question: '¿Qué soporte técnico incluye la beta?',
              answer: 'Soporte comunitario via Discord, respuesta a bugs en 48h, y sesiones mensuales de feedback. Soporte prioritario 24/7 estará disponible en planes empresariales post-lanzamiento.'
            },
            {
              question: '¿Puedo exportar mis datos si decido cancelar?',
              answer: 'Sí, proporcionamos exportación completa en formatos estándar (JSON, CSV) dentro de 72 horas. Los datos se mantienen 30 días post-cancelación para permitir exportación, luego eliminación permanente.'
            }
          ]
        },
        {
          name: 'Seguridad y Cumplimiento',
          questions: [
            {
              question: '¿Cómo manejan las solicitudes de autoridades?',
              answer: 'Solo proporcionamos datos en respuesta a solicitudes judiciales válidas. Notificamos a los usuarios afectados a menos que esté prohibido legalmente. Mantenemos transparencia reportando solicitudes gubernamentales anualmente.'
            },
            {
              question: '¿Dónde se almacenan físicamente los datos?',
              answer: 'Utilizamos Supabase con centros de datos en Frankfurt (Alemania) para base de datos y Firebase Hosting en Bélgica para el frontend. Todos los centros cumplen Tier III+ con certificaciones ISO 27001, SOC 2.'
            }
          ]
        }
      ],
      contact: '¿No encuentras tu pregunta? support@cojauny.com | Respuesta en 24h'
    },

    subprocessors: {
      title: 'Registro de Subprocesadores: Transparencia en la Cadena de Datos',
      intro: 'Lista completa de proveedores que procesan datos en nombre de Cojauny, actualizada trimestralmente con información sobre su ubicación y medidas de seguridad.',
      updatedAt: 'Última actualización: 17 de noviembre de 2025',
      providers: [
        {
          name: 'Supabase',
          purpose: 'Base de datos PostgreSQL, autenticación y almacenamiento',
          location: 'Frankfurt, Alemania (UE)',
          security: 'ISO 27001, SOC 2, GDPR Compliance, encriptación AES-256 en reposo'
        },
        {
          name: 'Firebase Hosting (Google Cloud)',
          purpose: 'Alojamiento web, CDN y distribución global del frontend',
          location: 'Bélgica (UE) con edge locations globales',
          security: 'ISO 27001, SOC 2, GDPR Compliance, SSL/TLS everywhere'
        },
        {
          name: 'Zoho Mail',
          purpose: 'Comunicaciones transaccionales, notificaciones y soporte',
          location: 'Países Bajos (UE)',
          security: 'Encriptación end-to-end, GDPR Compliance, autenticación 2FA'
        },
        {
          name: "Dynadot",
          purpose: "Servicios DNS y registro de dominios",
          location: "Estados Unidos",
          security: "Cumplimiento GDPR mediante Cláusulas Contractuales Estándar, protección de privacidad WHOIS, DNSSEC, cifrado TLS para consultas DNS"
        }
      ],
      contact: 'Consultas sobre subprocesadores: support@cojauny.com | Actualizaciones trimestrales'
    }
  },

  en: {
    privacy: {
      title: "Privacy Architecture: Our Commitment to Data Protection",
      intro: "At Cojauny, privacy isn't an added feature—it's the foundation of our architecture. This policy meticulously details how we safeguard, process, and protect every byte of information you entrust to us during your interaction with our beta platform.",
      updatedAt: "Last architectural review: November 17, 2025",
      sections: [
        {
          heading: "Technical and Operational Responsibility",
          body: "During the establishment phase of our definitive commercial entity, data management falls to Cojauny's founding team (referred to as the 'Cojauny Team' in this context). We operate from Spain under a distributed responsibility model, maintaining a single communication channel: support@cojauny.com. Complete registration details will be published in this section immediately following legal formalization."
        },
        {
          heading: "Data Taxonomy: What We Actually Collect",
          body: "Our collection schema follows the principle of extreme minimization: we only process voluntarily provided data (identification, contact, organizational context, and communications) along with anonymized browsing metrics (interaction patterns, language preferences, non-identifying technical fingerprinting) and essential security logs to ensure system integrity."
        },
        {
          heading: "Location Data Processing",
          body: "During event coordination, we temporarily process location data with end-to-end encryption. This data self-destructs 2 hours after the event and is never permanently stored on our servers. You can disable this feature at any time in the application settings without affecting core functionality."
        },
        {
          heading: "Purposes and Legal Bases: The Mathematics of Privacy",
          body: "Each data processing operation responds to a precise equation: beta access management (basis: explicit consent), service optimization through feedback (basis: calibrated legitimate interest), and aggregated analysis for product decisions (basis: consent for analytical cookies and proportional legitimate interest for system stability and security)."
        },
        {
          heading: "Data Flows and Digital Borders",
          body: "We implement a data sovereignty model where information only flows through providers essential for infrastructure, hosting, communications, and analytics. For extra-EEA transfers, we apply a multi-layer protocol: Standard Contractual Clauses reinforced with impact assessments and supplementary technical measures. We categorically exclude the sale or commercial transfer of data."
        },
        {
          heading: "Minor's Rights",
          body: "Our service is exclusively intended for individuals over 18 years of age. We do not knowingly collect information from minors. If we discover that we have processed a minor's data without parental consent verification, we will immediately delete such information from our systems and notify the competent authorities when required."
        },
        {
          heading: "Data Retention Timeline",
          body: "Data persists exclusively during the active beta cycle, with a maximum horizon of 12 months post-last interaction. This period is only interrupted by specific legal mandate or early exercise of deletion rights. Location data has a maximum retention of 2 hours."
        },
        {
          heading: "Rights and Enforcement Mechanisms",
          body: "Your control panel includes rights to access, rectification, objection, portability, restriction, and deletion—exercisable via support@cojauny.com with responses within 72 business hours. Consent is revocable at any point in the journey. For claims, the Spanish Data Protection Agency (www.aepd.es) acts as the supervisory authority."
        },
        {
          heading: "Breach Notification Protocol",
          body: "In the unlikely event of a security breach affecting personal data, we will notify the competent authority within 72 hours and affected users without undue delay. We maintain detailed records of all security incidents for audit and continuous improvement."
        },
        {
          heading: "Policy Evolution: Proactive Transparency",
          body: "We will architecturally review this policy in response to substantial processing changes or legal formalization. We will notify through priority channels and maintain complete versioning in this location. Substantial changes will require re-consent for processings based on this legal basis."
        }
      ],
      contact: "Technical privacy inquiries: support@cojauny.com | Response within ≤24h"
    },

    cookies: {
      title: "Cookie Protocol: Technical Management of Identifiers",
      intro: "This protocol details the engineering behind cookies and analogous technologies on cojauny.com, functioning as a specialized technical annex to our main privacy policy.",
      updatedAt: "Last technical calibration: November 17, 2025",
      sections: [
        {
          heading: "Cookie Anatomy: Beyond the Text File",
          body: "Cookies operate as session state records—small digital artifacts that the browser temporarily stores to preserve operational context. We extend this concept to sibling technologies like localStorage, sessionStorage, and IndexedDB, always following the same minimization philosophy."
        },
        {
          heading: "Technical Identifier Taxonomy",
          body: "We classify trackers into three operational categories: essential cookies (session management, load balancing, language preference), preference cookies (memory of banner selections), and analytical cookies (Google Analytics 4 with IP anonymization and data truncation). Non-essential categories require explicit consent through granular opt-in."
        },
        {
          heading: "Advanced Tracking Technologies",
          body: "Beyond cookies, we use localStorage for interface preferences and sessionStorage for temporary authentication tokens. We implement non-identifying technical fingerprinting solely for fraud prevention and security, excluding this analysis from the consent scope as it's essential for service integrity."
        },
        {
          heading: "Consent Engineering: Granular Control",
          body: "Manage your preferences through the initial banner or persistent preference center. Alternatively, configure your browser (Chrome, Safari, Edge, Firefox) for advanced management—though this may impact non-critical functionality. We implement cookieless tracking for essential aggregated performance metrics."
        },
        {
          heading: "Geolocation and Data Persistence",
          body: "We process 92% of cookie data within the EU. For the remaining 8% (global providers), we apply Standard Contractual Clauses with additional encryption and quarterly impact assessments. Analytical identifiers have a maximum TTL of 14 months with automatic rotation and semi-annual review."
        },
        {
          heading: "Protocol Evolution",
          body: "We will technically review this protocol in response to changes in the technology stack or retention periods. We will maintain a public changelog and notify substantial changes via email to active users. Changes expanding the tracking scope will require new consent."
        }
      ],
      contact: "Technical cookie inquiries: support@cojauny.com | Specify 'Cookie Protocol' in subject"
    },

    terms: {
      title: "Contractual Framework: Terms of Service for Beta Phase",
      intro: "This framework regulates the legal relationship between the user and Cojauny during the pre-commercial beta phase. Navigation and information submission constitute express acceptance of these terms in their current version.",
      updatedAt: "Last contractual update: November 17, 2025",
      sections: [
        {
          heading: "Operational Scope and Service Purpose",
          body: "Cojauny operates as a pre-commercial beta platform providing: (i) corporate and technical information, (ii) early access management, (iii) structured feedback channel. The service is provided 'as-is' without continuous availability guarantees and subject to constant evolution during the beta period."
        },
        {
          heading: "Specific Beta Phase Conditions",
          body: "By participating in the beta, you accept: (i) potential service instability, (ii) limited features compared to the final version, (iii) periodic database resets, (iv) active communication of bugs and feedback. Beta users providing substantial feedback may access special conditions at commercial launch."
        },
        {
          heading: "Eligibility Requirements and Data Quality",
          body: "Form interaction requires: verifiable age of majority (18+), truthfulness of provided information, and explicit authorization for third-party data. We categorically prohibit entering sensitive data (health, ideology, biometrics, etc.) except when strictly necessary with properly documented legal basis."
        },
        {
          heading: "Acceptable Use Protocol",
          body: "The framework excludes: illegal activities, infrastructure interference, unauthorized reverse engineering, mass automated scraping, malicious code introduction, and any activity compromising other beta users' experience. We reserve the right to immediate suspension for protocol violations."
        },
        {
          heading: "Cancellation and Suspension Policy",
          body: "We reserve the right to immediately suspend access in cases of: malicious use, terms violation, activities compromising other users' security, or behavior degrading the beta experience. We will notify suspensions via email and offer an appeal process within 72 business hours."
        },
        {
          heading: "Intellectual Property and Limited Licenses",
          body: "Cojauny, underlying code, interface designs, technical documentation, and coordination methodologies are property of the Cojauny Team or its licensors. A limited non-exclusive license is granted for personal use during beta. Reproduction, distribution, or derivative works are prohibited without written authorization."
        },
        {
          heading: "Liability Structure in Beta Environment",
          body: "Operating in beta phase, we exclude liability for: (i) service interruptions, (ii) content inaccuracies, (iii) indirect damages or lost profits, (iv) data loss during scheduled resets. Your interaction with third-party services is governed by their own terms. We implement reasonable security measures but don't guarantee absolute protection."
        },
        {
          heading: "Control Changes and Service Continuity",
          body: "In case of corporate control change (merger, acquisition, or sale), we will notify with 30 days' advance notice. Data will be transferred under the same privacy terms or complete deletion will be offered. Beta users will maintain their acquired benefits during the transition."
        },
        {
          heading: "Contractual Evolution and Jurisdiction",
          body: "We will modify these terms to reflect: (i) substantial service changes, (ii) regulatory evolution, (iii) transition to commercial phase. We will notify relevant changes via email and maintain public versioning. The relationship is governed by Spanish law with exclusive jurisdiction in Madrid capital courts."
        }
      ],
      contact: "Legal communications: support@cojauny.com | Specify 'Legal Matter' in subject | Response within 72 business hours"
    },

    acceptableUse: {
      title: "Acceptable Use Policy: Limits and Responsibilities",
      intro: "This policy defines the parameters for responsible use of Cojauny during the beta phase, establishing clear expectations and protecting the integrity of our platform and community.",
      updatedAt: "Last review: November 17, 2025",
      sections: [
        {
          heading: "Commercial Use Limits",
          body: "During the beta phase, the service is offered exclusively for internal evaluation and testing. Commercial use for production operations is prohibited without express authorization. Operational limit of 50 coordinated events monthly per organization during beta. Commercial use will require migration to enterprise plan post-launch."
        },
        {
          heading: "Content and Conduct Restrictions",
          body: "Prohibited use of the platform to coordinate events involving: illegal activities, offensive content, harassment, discrimination, third-party rights violation, or any activity that could harm Cojauny's reputation. We implement proactive moderation and scalable reporting mechanisms."
        },
        {
          heading: "Technical and Performance Limits",
          body: "Each beta organization is allocated: 10GB total storage, 1000 monthly notifications, and maximum processing of 100 simultaneous users per event. Exceeding these limits may result in automatic throttling or require expansion approval."
        },
        {
          heading: "Beta User Responsibilities",
          body: "As a beta user, you accept: (i) reporting bugs within 48 hours of detection, (ii) participating in at least one monthly feedback session, (iii) maintaining confidentiality about non-public features, (iv) not conducting public benchmarking against competitors during the beta phase."
        },
        {
          heading: "Generated Data Ownership",
          body: "Users maintain complete ownership of their event data and content. Cojauny retains the right to use anonymized and aggregated data for product improvement, but will never access specific content without explicit consent except by legal requirement."
        },
        {
          heading: "Compliance Mechanisms",
          body: "We implement automated monitoring and manual review to ensure compliance. Violations will result in: (i) formal warning for minor infractions, (ii) temporary suspension for repeat offenses, (iii) permanent termination for serious violations. All cases include a documented appeal process."
        }
      ],
      contact: "Report use violations: support@cojauny.com | Subject: 'Acceptable Use Report'"
    },

    faq: {
      title: "Transparency Center: Legal Frequently Asked Questions",
      intro: "Clear answers to the most common questions about our terms, privacy, and policies during Cojauny's beta phase.",
      updatedAt: "Updated: November 17, 2025",
      categories: [
        {
          name: "Privacy and Data",
          questions: [
            {
              question: "How do you handle my employees' or guests' data?",
              answer: "We operate as data processors under client instructions. We provide pre-signed DPAs and tools for chain-of-consent management. You can request our standard DPA model at support@cojauny.com."
            },
            {
              question: "What happens to my data if Cojauny is acquired?",
              answer: "We will notify you 30 days in advance of any control change. Personal data will be transferred under equivalent terms or complete deletion will be offered. Beta user benefits will be maintained during the transition."
            },
            {
              question: "Do you perform profiling or automated decision-making?",
              answer: "We do not perform profiling with legal consequences nor fully automated decisions. The matching algorithm for trip sharing suggests but never automatically decides—it always requires human confirmation."
            }
          ]
        },
        {
          name: "Terms and Conditions",
          questions: [
            {
              question: "Can I use Cojauny for external client events?",
              answer: "During beta, only for internal testing. Commercial use with external clients will require an enterprise plan post-launch. Contact us for special case discussions."
            },
            {
              question: "What technical support does the beta include?",
              answer: "Community support via Discord, bug responses within 48h, and monthly feedback sessions. Priority 24/7 support will be available in enterprise plans post-launch."
            },
            {
              question: "Can I export my data if I decide to cancel?",
              answer: "Yes, we provide complete export in standard formats (JSON, CSV) within 72 hours. Data is maintained for 30 days post-cancellation to allow export, then permanently deleted."
            }
          ]
        },
        {
          name: "Security and Compliance",
          questions: [
            {
              question: "How do you handle authority requests?",
              answer: "We only provide data in response to valid judicial requests. We notify affected users unless legally prohibited. We maintain transparency by reporting government requests annually."
            },
            {
              question: "Where is data physically stored?",
              answer: "We use Supabase with data centers in Frankfurt (Germany) for databases and Firebase Hosting in Belgium for frontend. All centers meet Tier III+ with ISO 27001, SOC 2 certifications."
            }
          ]
        }
      ],
      contact: "Can't find your question? support@cojauny.com | Response within 24h"
    },

    subprocessors: {
      title: "Subprocessor Registry: Transparency in the Data Chain",
      intro: "Complete list of providers processing data on behalf of Cojauny, updated quarterly with information about their location and security measures.",
      updatedAt: "Last update: November 17, 2025",
      providers: [
        {
          name: "Supabase",
          purpose: "PostgreSQL database, authentication and storage",
          location: "Frankfurt, Germany (EU)",
          security: "ISO 27001, SOC 2, GDPR Compliance, AES-256 encryption at rest"
        },
        {
          name: "Firebase Hosting (Google Cloud)",
          purpose: "Web hosting, CDN and global frontend distribution",
          location: "Belgium (EU) with global edge locations",
          security: "ISO 27001, SOC 2, GDPR Compliance, SSL/TLS everywhere"
        },
        {
          name: "Zoho Mail",
          purpose: "Transactional communications, notifications and support",
          location: "Netherlands (EU)",
          security: "End-to-end encryption, GDPR Compliance, 2FA authentication"
        },
        {
          name: "Dynadot",
          purpose: "DNS services and domain registration",
          location: "United States",
          security: "GDPR compliant through Standard Contractual Clauses, WHOIS privacy protection, DNSSEC, TLS encryption for DNS queries"
        }
      ],
      contact: "Subprocessor inquiries: support@cojauny.com | Quarterly updates"
    }
  },
  
  de: {
    privacy: {
      title: "Privacy-Architektur: Unser Engagement für den Datenschutz",
      intro: "Bei Cojauny ist Datenschutz kein zusätzliches Feature – er ist das Fundament unserer Architektur. Diese Policy erläutert detailliert, wie wir jedes Byte an Informationen, das Sie uns während Ihrer Interaktion mit unserer Beta-Plattform anvertrauen, bewachen, verarbeiten und schützen.",
      updatedAt: "Letzte architektonische Überprüfung: 17. November 2025",
      sections: [
        {
          heading: "Technische und operative Verantwortung",
          body: "Während der Gründungsphase unserer endgültigen Handelsgesellschaft obliegt das Datenmanagement dem Gründungsteam von Cojauny (in diesem Kontext als 'Cojauny Team' bezeichnet). Wir operieren von Spanien aus unter einem Modell verteilter Verantwortung und unterhalten einen einzigen Kommunikationskanal: support@cojauny.com. Vollständige Registerdaten werden unmittelbar nach der rechtlichen Formalisierung in diesem Abschnitt veröffentlicht."
        },
        {
          heading: "Daten-Taxonomie: Was wir tatsächlich erfassen",
          body: "Unser Erfassungsschema folgt dem Prinzip extremer Minimierung: Wir verarbeiten nur freiwillig bereitgestellte Daten (Identifikation, Kontakt, organisatorischer Kontext und Kommunikation) zusammen mit anonymisierten Browser-Metriken (Interaktionsmuster, Sprachpräferenzen, nicht identifizierender technischer Fingerabdruck) und unverzichtbaren Sicherheitsprotokollen zur Gewährleistung der Systemintegrität."
        },
        {
          heading: "Verarbeitung von Standortdaten",
          body: "Während der Event-Koordination verarbeiten wir temporär Standortdaten mit End-to-End-Verschlüsselung. Diese Daten löschen sich 2 Stunden nach dem Event selbst und werden niemals dauerhaft auf unseren Servern gespeichert. Sie können diese Funktion jederzeit in den App-Einstellungen deaktivieren, ohne dass Kernfunktionalitäten beeinträchtigt werden."
        },
        {
          heading: "Zwecke und Rechtsgrundlagen: Die Mathematik des Datenschutzes",
          body: "Jede Datenverarbeitung folgt einer präzisen Gleichung: Beta-Zugangsmanagement (Grundlage: ausdrückliche Einwilligung), Service-Optimierung durch Feedback (Grundlage: kalibriertes berechtigtes Interesse) und aggregierte Analyse für Produktentscheidungen (Grundlage: Einwilligung für analytische Cookies und proportionales berechtigtes Interesse für Systemstabilität und -sicherheit)."
        },
        {
          heading: "Datenflüsse und digitale Grenzen",
          body: "Wir implementieren ein Datenhoheitsmodell, bei dem Informationen nur über für Infrastruktur, Hosting, Kommunikation und Analytics essentielle Anbieter fließen. Für Extra-EWR-Übermittlungen wenden wir ein mehrschichtiges Protokoll an: Standardvertragsklauseln, verstärkt durch Folgenabschätzungen und ergänzende technische Maßnahmen. Den Verkauf oder die kommerzielle Weitergabe von Daten schließen wir kategorisch aus."
        },
        {
          heading: "Rechte Minderjähriger",
          body: "Unser Service ist ausschließlich für Personen über 18 Jahre bestimmt. Wir erfassen wissentlich keine Informationen von Minderjährigen. Wenn wir feststellen, dass wir Daten eines Minderjährigen ohne elterliche Einwilligungsüberprüfung verarbeitet haben, löschen wir diese Informationen sofort aus unseren Systemen und benachrichtigen die zuständigen Behörden, sofern erforderlich."
        },
        {
          heading: "Aufbewahrungsdauer",
          body: "Daten bestehen ausschließlich während des aktiven Beta-Zyklus, mit einem maximalen Horizont von 12 Monaten nach der letzten Interaktion. Diese Frist wird nur durch spezifische gesetzliche Verpflichtung oder vorzeitige Ausübung von Löschungsrechten unterbrochen. Standortdaten unterliegen einer maximalen Aufbewahrungsdauer von 2 Stunden."
        },
        {
          heading: "Rechte und Durchsetzungsmechanismen",
          body: "Ihr Kontrollpanel umfasst Rechte auf Auskunft, Berichtigung, Widerspruch, Übertragbarkeit, Einschränkung und Löschung – ausübbar via support@cojauny.com mit Antwort innerhalb von 72 Geschäftsstunden. Die Einwilligung ist zu jedem Zeitpunkt des Nutzerwegs widerrufbar. Für Beschwerden ist die Spanische Datenschutzbehörde (www.aepd.es) die Aufsichtsbehörde."
        },
        {
          heading: "Verletzungsmeldeverfahren",
          body: "Im unwahrscheinlichen Fall eines Sicherheitsverstoßes, der personenbezogene Daten betrifft, benachrichtigen wir die zuständige Behörde innerhalb von 72 Stunden und betroffene Nutzer ohne unangemessene Verzögerung. Wir führen detaillierte Aufzeichnungen über alle Sicherheitsvorfälle für Audit- und Kontinuierliche-Verbesserungs-Zwecke."
        },
        {
          heading: "Policy-Entwicklung: Proaktive Transparenz",
          body: "Wir werden diese Policy architektonisch überprüfen bei wesentlichen Änderungen der Verarbeitung oder rechtlichen Formaliserung. Wir werden über Prioritätskanäle benachrichtigen und eine vollständige Versionierung an diesem Ort pflegen. Wesentliche Änderungen erfordern eine Neueinwilligung für Verarbeitungen, die auf dieser Rechtsgrundlage basieren."
        }
      ],
      contact: "Technische Datenschutzanfragen: support@cojauny.com | Antwort innerhalb von ≤24h"
    },

    cookies: {
      title: "Cookie-Protokoll: Technisches Management von Identifikatoren",
      intro: "Dieses Protokoll erläutert die Technik hinter Cookies und analogen Technologien auf cojauny.com und fungiert als spezialisierter technischer Anhang zu unserer Haupt-Datenschutzrichtlinie.",
      updatedAt: "Letzte technische Kalibrierung: 17. November 2025",
      sections: [
        {
          heading: "Cookie-Anatomie: Über die Textdatei hinaus",
          body: "Cookies operieren als Sitzungsstatusaufzeichnungen – kleine digitale Artefakte, die der Browser temporär speichert, um den operationellen Kontext zu erhalten. Wir erweitern dieses Konzept auf verwandte Technologien wie localStorage, sessionStorage und IndexedDB, stets nach derselben Minimierungsphilosophie."
        },
        {
          heading: "Technische Identifikator-Taxonomie",
          body: "Wir klassifizieren Tracker in drei operationelle Kategorien: essentielle Cookies (Sitzungsverwaltung, Lastenausgleich, Sprachpräferenz), Präferenz-Cookies (Speicherung von Banner-Auswahlen) und analytische Cookies (Google Analytics 4 mit IP-Anonymisierung und Datenkürzung). Nicht-essentielle Kategorien erfordern ausdrückliche Einwilligung durch granulare Opt-in."
        },
        {
          heading: "Erweiterte Tracking-Technologien",
          body: "Über Cookies hinaus nutzen wir localStorage für Interface-Präferenzen und sessionStorage für temporäre Authentifizierungstokens. Wir implementieren nicht-identifizierenden technischen Fingerabdruck ausschließlich zur Betrugsprävention und Sicherheit, wobei diese Analyse vom Einwilligungsumfang ausgeschlossen ist, da sie für die Service-Integrität essentiell ist."
        },
        {
          heading: "Einwilligungs-Engineering: Granulare Kontrolle",
          body: "Verwalten Sie Ihre Präferenzen durch das initiale Banner oder das persistente Präferenz-Center. Alternativ konfigurieren Sie Ihren Browser (Chrome, Safari, Edge, Firefox) für erweitertes Management – was jedoch nicht-kritische Funktionalitäten beeinträchtigen kann. Wir implementieren Cookieless-Tracking für essentielle aggregierte Performance-Metriken."
        },
        {
          heading: "Geolokalisierung und Datenpersistenz",
          body: "Wir verarbeiten 92 % der Cookie-Daten innerhalb der EU. Für die verbleibenden 8 % (globale Anbieter) wenden wir Standardvertragsklauseln mit zusätzlicher Verschlüsselung und vierteljährlichen Folgenabschätzungen an. Analytische Identifikatoren haben eine maximale TTL von 14 Monaten mit automatischer Rotation und halbjährlicher Überprüfung."
        },
        {
          heading: "Protokoll-Entwicklung",
          body: "Wir werden dieses Protokoll technisch überprüfen bei Änderungen im Technologie-Stack oder Aufbewahrungsfristen. Wir führen ein öffentliches Changelog und benachrichtigen über wesentliche Änderungen per E-Mail an aktive Nutzer. Änderungen, die den Tracking-Umfang erweitern, erfordern neue Einwilligung."
        }
      ],
      contact: "Technische Cookie-Anfragen: support@cojauny.com | Betreff: 'Cookie-Protokoll'"
    },

    terms: {
      title: "Vertragsrahmen: Nutzungsbedingungen für die Beta-Phase",
      intro: "Dieser Rahmen regelt die rechtliche Beziehung zwischen dem Nutzer und Cojauny während der prä-kommerziellen Beta-Phase. Navigation und Übermittlung von Informationen stellen ausdrückliche Annahme dieser Bedingungen in ihrer gültigen Fassung dar.",
      updatedAt: "Letzte vertragliche Aktualisierung: 17. November 2025",
      sections: [
        {
          heading: "Operativer Umfang und Service-Zweck",
          body: "Cojauny operiert als prä-kommerzielle Beta-Plattform, die bereitstellt: (i) Unternehmens- und technische Informationen, (ii) Early-Access-Management, (iii) strukturierten Feedback-Kanal. Der Service wird 'as-is' ohne kontinuierliche Verfügbarkeitsgarantien bereitgestellt und unterliegt während der Beta-Phase konstanter Evolution."
        },
        {
          heading: "Spezifische Beta-Phase-Bedingungen",
          body: "Durch die Teilnahme an der Beta akzeptieren Sie: (i) potenzielle Service-Instabilität, (ii) eingeschränkte Features im Vergleich zur Finalversion, (iii) periodische Datenbank-Resets, (iv) aktive Kommunikation von Bugs und Feedback. Beta-Nutzer, die substanzielles Feedback liefern, können bei kommerziellem Launch Sonderkonditionen erhalten."
        },
        {
          heading: "Eignungsvoraussetzungen und Datenqualität",
          body: "Formular-Interaktion erfordert: Volljährigkeit (18+), Wahrhaftigkeit der bereitgestellten Informationen und explizite Autorisierung für Drittparteien-Daten. Wir untersagen kategorisch die Eingabe sensibler Daten (Gesundheit, Ideologie, Biometrie etc.), außer wenn strikt notwendig mit ordnungsgemäß dokumentierter Rechtsgrundlage."
        },
        {
          heading: "Akzeptable Nutzungsrichtlinie",
          body: "Der Rahmen schließt aus: illegale Aktivitäten, Infrastruktur-Interferenz, nicht-autorisierte Reverse Engineering, massives automatisiertes Scraping, Einführung von Schadcode und jede Aktivität, die die Erfahrung anderer Beta-Nutzer beeinträchtigt. Wir behalten uns das Recht auf sofortige Suspendierung bei Verstößen gegen das Protokoll vor."
        },
        {
          heading: "Kündigungs- und Suspendierungsrichtlinie",
          body: "Wir behalten uns das Recht vor, den Zugang sofort zu suspendieren in Fällen von: böswilliger Nutzung, Verstoß gegen die Bedingungen, Aktivitäten, die die Sicherheit anderer Nutzer gefährden, oder Verhalten, das die Beta-Erfahrung beeinträchtigt. Wir benachrichtigen über Suspendierungen per E-Mail und bieten einen Einspruchsprozess innerhalb von 72 Geschäftsstunden."
        },
        {
          heading: "Geistiges Eigentum und beschränkte Lizenzen",
          body: "Cojauny, zugrundeliegender Code, Interface-Designs, technische Dokumentation und Koordinationsmethodologien sind Eigentum des Cojauny Teams oder seiner Lizenzgeber. Eine beschränkte, nicht-exklusive Lizenz wird für persönliche Nutzung während der Beta gewährt. Reproduktion, Distribution oder abgeleitete Werke sind ohne schriftliche Autorisierung verboten."
        },
        {
          heading: "Haftungsstruktur in Beta-Umgebung",
          body: "Da wir in der Beta-Phase operieren, schließen wir Haftung aus für: (i) Service-Unterbrechungen, (ii) Inhalts-Ungenauigkeiten, (iii) indirekte Schäden oder entgangenen Gewinn, (iv) Datenverlust während geplanter Resets. Ihre Interaktion mit Drittparteien-Services unterliegt deren eigenen Bedingungen. Wir implementieren angemessene Sicherheitsmaßnahmen, garantieren aber keinen absoluten Schutz."
        },
        {
          heading: "Kontrolländerungen und Service-Kontinuität",
          body: "Im Falle eines Unternehmenskontrollwechsels (Fusion, Akquisition oder Verkauf) benachrichtigen wir mit 30 Tagen Vorlauf. Daten werden unter denselben Datenschutzbedingungen transferiert oder komplette Löschung wird angeboten. Beta-Nutzer behalten ihre erworbenen Vorteile während des Übergangs."
        },
        {
          heading: "Vertragliche Evolution und Gerichtsstand",
          body: "Wir modifizieren diese Bedingungen, um widerzuspiegeln: (i) wesentliche Service-Änderungen, (ii) regulatorische Evolution, (iii) Übergang zur kommerziellen Phase. Wir benachrichtigen über relevante Änderungen per E-Mail und pflegen öffentliche Versionierung. Die Beziehung unterliegt spanischem Recht mit ausschließlichem Gerichtsstand in Gerichten der Hauptstadt Madrid."
        }
      ],
      contact: "Rechtliche Kommunikation: support@cojauny.com | Betreff: 'Rechtliche Angelegenheit' | Antwort innerhalb von 72 Geschäftsstunden"
    },
    acceptableUse: {
      title: "Richtlinie für akzeptable Nutzung: Grenzen und Verantwortlichkeiten",
      intro: "Diese Richtlinie definiert die Parameter für die verantwortungsvolle Nutzung von Cojauny während der Beta-Phase, stellt klare Erwartungen auf und schützt die Integrität unserer Plattform und Community.",
      updatedAt: "Letzte Überprüfung: 17. November 2025",
      sections: [
        {
          heading: "Grenzen der kommerziellen Nutzung",
          body: "Während der Beta-Phase wird der Service ausschließlich für interne Bewertung und Testing angeboten. Kommerzielle Nutzung für Produktionsbetrieb ist ohne ausdrückliche Autorisierung verboten. Betriebslimit von 50 koordinierten Events monatlich pro Organisation während der Beta. Kommerzielle Nutzung erfordert Migration zum Enterprise-Plan nach dem Launch."
        },
        {
          heading: "Inhalts- und Verhaltensbeschränkungen",
          body: "Verboten ist die Nutzung der Plattform zur Koordination von Events, die beinhalten: illegale Aktivitäten, anstößige Inhalte, Belästigung, Diskriminierung, Verletzung von Drittanbieterrechten oder jede Aktivität, die dem Ruf von Cojauny schaden könnte. Wir implementieren proaktive Moderation und skalierbare Meldemechanismen."
        },
        {
          heading: "Technische und Leistungsgrenzen",
          body: "Jeder Beta-Organisation wird zugewiesen: 10GB Gesamtspeicher, 1000 monatliche Benachrichtigungen und maximale Verarbeitung von 100 gleichzeitigen Benutzern pro Event. Das Überschreiten dieser Grenzen kann zu automatischem Throttling führen oder eine Erweiterungsgenehmigung erfordern."
        },
        {
          heading: "Verantwortlichkeiten der Beta-Nutzer",
          body: "Als Beta-Nutzer akzeptieren Sie: (i) Meldung von Bugs innerhalb von 48 Stunden nach Erkennung, (ii) Teilnahme an mindestens einer monatlichen Feedback-Session, (iii) Vertraulichkeit über nicht-öffentliche Features, (iv) keine Durchführung von öffentlichem Benchmarking gegen Wettbewerber während der Beta-Phase."
        },
        {
          heading: "Eigentum an generierten Daten",
          body: "Nutzer behalten das vollständige Eigentum an ihren Event-Daten und Inhalten. Cojauny behält sich das Recht vor, anonymisierte und aggregierte Daten zur Produktverbesserung zu nutzen, wird jedoch niemals auf spezifische Inhalte ohne ausdrückliche Einwilligung zugreifen, außer bei gesetzlicher Anforderung."
        },
        {
          heading: "Compliance-Mechanismen",
          body: "Wir implementieren automatisiertes Monitoring und manuelle Überprüfung zur Compliance-Sicherung. Verstöße führen zu: (i) formeller Warnung bei geringfügigen Verstößen, (ii) temporärer Suspendierung bei Wiederholungstätern, (iii) dauerhafter Kündigung bei schwerwiegenden Verstößen. Alle Fälle beinhalten einen dokumentierten Beschwerdeprozess."
        }
      ],
      contact: "Nutzungsverstöße melden: support@cojauny.com | Betreff: 'Akzeptable Nutzung Melden'"
    },

    subprocessors: {
      title: "Auftragsverarbeiter-Register: Transparenz in der Datenkette",
      intro: "Vollständige Liste der Anbieter, die Daten im Namen von Cojauny verarbeiten, vierteljährlich aktualisiert mit Informationen zu ihrem Standort und Sicherheitsmaßnahmen.",
      updatedAt: "Letzte Aktualisierung: 17. November 2025",
      providers: [
        {
          name: "Supabase",
          purpose: "PostgreSQL-Datenbank, Authentifizierung und Speicherung",
          location: "Frankfurt, Deutschland (EU)",
          security: "ISO 27001, SOC 2, DSGVO-Konformität, AES-256-Verschlüsselung im Ruhezustand"
        },
        {
          name: "Firebase Hosting (Google Cloud)",
          purpose: "Web-Hosting, CDN und globale Frontend-Verteilung",
          location: "Belgien (EU) mit globalen Edge-Standorten",
          security: "ISO 27001, SOC 2, DSGVO-Konformität, SSL/TLS überall"
        },
        {
          name: "Zoho Mail",
          purpose: "Transaktionale Kommunikation, Benachrichtigungen und Support",
          location: "Niederlande (EU)",
          security: "End-to-End-Verschlüsselung, DSGVO-Konformität, 2FA-Authentifizierung"
        },
        {
          name: "Dynadot",
          purpose: "DNS-Dienste und Domain-Registrierung",
          location: "Vereinigte Staaten",
          security: "DSGVO-konform durch Standardvertragsklauseln, WHOIS-Datenschutz, DNSSEC, TLS-Verschlüsselung für DNS-Abfragen"
        }
      ],
      contact: "Anfragen zu Auftragsverarbeitern: support@cojauny.com | Vierteljährliche Updates"
    },
    faq: {
      title: "Transparenz-Center: Häufig gestellte rechtliche Fragen",
      intro: "Klar verständliche Antworten auf die häufigsten Fragen zu unseren Nutzungsbedingungen, Datenschutz und Richtlinien während der Cojauny Beta-Phase.",
      updatedAt: "Aktualisiert: 17. November 2025",
      categories: [
        {
          name: "Privatsphäre und Daten",
          questions: [
            {
              question: "Wie handhaben Sie die Daten meiner Mitarbeiter oder Gäste?",
              answer: "Wir agieren als Auftragsverarbeiter gemäß Kundenanweisungen. Wir stellen vorunterschriebene AV-Verträge (DPAs) und Tools für die Einwilligungsmanagement-Kette bereit. Sie können unser standard DPA-Modell unter support@cojauny.com anfordern."
            },
            {
              question: "Was passiert mit meinen Daten, wenn Cojauny übernommen wird?",
              answer: "Wir werden Sie 30 Tage im Voraus über etwaige Kontrolländerungen informieren. Personenbezogene Daten werden unter gleichwertigen Bedingungen übertragen oder eine vollständige Löschoption wird angeboten. Beta-Nutzer-Vorteile werden während des Übergangs beibehalten."
            },
            {
              question: "Führen Sie Profiling oder automatisierte Entscheidungsfindung durch?",
              answer: "Wir führen kein Profiling mit rechtlichen Konsequenzen durch und treffen keine vollständig automatisierten Entscheidungen. Der Matching-Algorithmus für die Reiseteilung schlägt vor, entscheidet aber niemals automatisch – er erfordert stets menschliche Bestätigung."
            }
          ]
        },
        {
          name: "Nutzungsbedingungen",
          questions: [
            {
              question: "Kann ich Cojauny für Events externer Kunden nutzen?",
              answer: "Während der Beta nur für internes Testing. Kommerzielle Nutzung mit externen Kunden erfordert einen Enterprise-Plan nach dem Launch. Kontaktieren Sie uns für die Besprechung von Sonderfällen."
            },
            {
              question: "Welchen technischen Support beinhaltet die Beta?",
              answer: "Community-Support via Discord, Bug-Antworten innerhalb von 48h und monatliche Feedback-Sessions. Prioritäts-Support 24/7 wird in Enterprise-Plänen nach dem Launch verfügbar sein."
            },
            {
              question: "Kann ich meine Daten exportieren, wenn ich kündige?",
              answer: "Ja, wir bieten vollständigen Export in Standardformaten (JSON, CSV) innerhalb von 72 Stunden an. Daten werden 30 Tage nach Kündigung aufbewahrt, um Exporte zu ermöglichen, dann erfolgt permanente Löschung."
            }
          ]
        },
        {
          name: "Sicherheit und Compliance",
          questions: [
            {
              question: "Wie gehen Sie mit Behördenanfragen um?",
              answer: "Wir stellen Daten nur als Antwort auf gültige gerichtliche Anfragen bereit. Wir benachrichtigen betroffene Nutzer, sofern nicht gesetzlich verboten. Wir wahren Transparenz durch jährliche Berichterstattung über staatliche Anfragen."
            },
            {
              question: "Wo werden Daten physisch gespeichert?",
              answer: "Wir nutzen Supabase mit Rechenzentren in Frankfurt (Deutschland) für Datenbanken und Firebase Hosting in Belgien für das Frontend. Alle Zentren erfüllen Tier III+ mit ISO 27001, SOC 2 Zertifizierungen."
            }
          ]
        }
      ],
      contact: "Ihre Frage nicht gefunden? support@cojauny.com | Antwort innerhalb von 24h"
    }
  },

  fr: {
    privacy: {
      title: "Architecture de Confidentialité : Notre Engagement pour la Protection des Données",
      intro: "Chez Cojauny, la confidentialité n'est pas une fonctionnalité supplémentaire—c'est le fondement de notre architecture. Cette politique détaille méticuleusement comment nous conservons, traitons et protégeons chaque octet d'information que vous nous confiez lors de votre interaction avec notre plateforme bêta.",
      updatedAt: "Dernière revue architecturale : 17 novembre 2025",
      sections: [
        {
          heading: "Responsabilité Technique et Opérationnelle",
          body: "Pendant la phase de constitution de notre entité commerciale définitive, la gestion des données incombe à l'équipe fondatrice de Cojauny (désignée Équipe Cojauny dans ce contexte). Nous opérons depuis l'Espagne sous un modèle de responsabilité distribuée, en maintenant un canal unique de communication : support@cojauny.com. Les données d'enregistrement complètes seront publiées dans cette section immédiatement après leur formalisation juridique."
        },
        {
          heading: "Taxonomie des Données : Ce que Nous Collectons Réellement",
          body: "Notre schéma de collecte suit le principe de minimisation extrême : nous traitons uniquement les données fournies volontairement (identification, contact, contexte organisationnel et communications) ainsi que des métriques de navigation anonymisées (modèles d'interaction, préférences linguistiques, empreinte technique non identificative) et des journaux de sécurité indispensables pour garantir l'intégrité du système."
        },
        {
          heading: "Traitement des Données de Localisation",
          body: "Pendant la coordination d'événements, nous traitons temporairement les données de localisation avec chiffrement de bout en bout. Ces données s'autodétruisent 2 heures après l'événement et ne sont jamais stockées de façon permanente sur nos serveurs. Vous pouvez désactiver cette fonctionnalité à tout moment depuis les paramètres de l'application sans affecter les fonctionnalités principales."
        },
        {
          heading: "Finalités et Bases Juridiques : Les Mathématiques de la Confidentialité",
          body: "Chaque traitement de données répond à une équation précise : gestion d'accès bêta (base : consentement explicite), optimisation du service par feedback (base : intérêt légitime calibré) et analyse agrégée pour les décisions produit (base : consentement pour les cookies analytiques et intérêt légitime proportionnel pour la stabilité et sécurité du système)."
        },
        {
          heading: "Flux de Données et Frontières Numériques",
          body: "Nous implémentons un modèle de souveraineté des données où l'information ne transite que par des fournisseurs essentiels pour l'infrastructure, l'hébergement, les communications et l'analytique. Pour les transferts extra-EEE, nous appliquons un protocole multicouche : Clauses Contractuelles Types renforcées par des analyses d'impact et mesures techniques supplémentaires. Nous excluons catégoriquement la vente ou cession commerciale de données."
        },
        {
          heading: "Droits des Mineurs",
          body: "Notre service s'adresse exclusivement aux personnes majeures de 18 ans. Nous ne collectons pas sciemment d'informations de mineurs. Si nous découvrons avoir traité des données d'un mineur sans vérification du consentement parental, nous supprimerons immédiatement ces informations de nos systèmes et notifierons les autorités compétentes lorsque requis."
        },
        {
          heading: "Chronométrie de la Conservation",
          body: "Les données persistent exclusivement pendant le cycle bêta actif, avec un horizon maximum de 12 mois post-dernière interaction. Ce délai n'est interrompu que par mandat légal spécifique ou exercice anticipé des droits de suppression. Les données de localisation ont une rétention maximale de 2 heures."
        },
        {
          heading: "Droits et Mécanismes d'Exécution",
          body: "Votre panneau de contrôle inclut les droits d'accès, de rectification, d'opposition, de portabilité, de limitation et de suppression—exerçables via support@cojauny.com avec réponse sous 72 heures ouvrables. Le consentement est révocable à tout moment du parcours. Pour les réclamations, l'Agence Espagnole de Protection des Données (www.aepd.es) agit comme autorité de supervision."
        },
        {
          heading: "Protocole de Notification de Violation",
          body: "Dans l'éventualité improbable d'une violation de sécurité affectant des données personnelles, nous notifierons l'autorité compétente sous 72 heures et les utilisateurs concernés sans retard injustifié. Nous maintenons des registres détaillés de tous les incidents de sécurité pour audit et amélioration continue."
        },
        {
          heading: "Évolution de la Politique : Transparence Proactive",
          body: "Nous réviserons architecturalement cette politique face à des changements substantiels dans le traitement ou la formalisation juridique. Nous notifierons via des canaux prioritaires et maintiendrons un versionnage complet à cet emplacement. Les changements substantiels requerront un re-consentement pour les traitements basés sur cette base juridique."
        }
      ],
      contact: "Pour les questions techniques sur la confidentialité : support@cojauny.com | Réponse sous ≤24h"
    },

    cookies: {
      title: "Protocole des Cookies : Gestion Technique des Identifiants",
      intro: "Ce protocole détaille l'ingénierie derrière les cookies et technologies analogues sur cojauny.com, fonctionnant comme annexe technique spécialisée de notre politique de confidentialité principale.",
      updatedAt: "Dernier calibrage technique : 17 novembre 2025",
      sections: [
        {
          heading: "Anatomie des Cookies : Au-delà du Fichier Texte",
          body: "Les cookies opèrent comme des registres d'état de session—petits artefacts numériques que le navigateur stocke temporairement pour préserver le contexte opérationnel. Nous étendons ce concept aux technologies sœurs comme localStorage, sessionStorage et IndexedDB, toujours avec la même philosophie de minimisation."
        },
        {
          heading: "Taxonomie des Identifiants Techniques",
          body: "Nous classons les traceurs en trois catégories opérationnelles : cookies essentiels (gestion de session, répartition de charge, préférence linguistique), cookies de préférences (mémorisation des sélections dans les bannières) et cookies analytiques (Google Analytics 4 avec anonymisation IP et troncation des données). Les catégories non essentielles requièrent un consentement explicite via opt-in granulaire."
        },
        {
          heading: "Technologies de Tracking Avancées",
          body: "Au-delà des cookies, nous utilisons localStorage pour les préférences d'interface et sessionStorage pour les jetons d'authentification temporaires. Nous implémentons l'empreinte technique non identificative uniquement pour la prévention de fraude et la sécurité, excluant cette analyse du champ de consentement car essentielle pour l'intégrité du service."
        },
        {
          heading: "Ingénierie du Consentement : Contrôle Granulaire",
          body: "Gérez vos préférences via la bannière initiale ou le centre de préférences persistant. Configurez alternativement votre navigateur (Chrome, Safari, Edge, Firefox) pour une gestion avancée—bien que cela puisse impacter les fonctionnalités non critiques. Nous implémentons le tracking sans cookies pour les métriques agrégées essentielles de performance."
        },
        {
          heading: "Géolocalisation et Persistance des Données",
          body: "Nous traitons 92% des données de cookies dans l'UE. Pour les 8% restants (fournisseurs globaux), nous appliquons des Clauses Contractuelles Types avec chiffrement supplémentaire et évaluations d'impact trimestrielles. Les identifiants analytiques ont une TTL maximale de 14 mois avec rotation automatique et revue semestrielle."
        },
        {
          heading: "Évolution du Protocole",
          body: "Nous réviserons techniquement ce protocole face à des changements dans la stack technologique ou les périodes de rétention. Nous maintiendrons un changelog public et notifierons les changements substantiels par email aux utilisateurs actifs. Les changements étendant le champ du tracking requerront un nouveau consentement."
        }
      ],
      contact: "Questions techniques sur les cookies : support@cojauny.com | Spécifier Protocole Cookies dans l'objet"
    },

    terms: {
      title: "Cadre Contractuel : Conditions de Service pour la Phase Bêta",
      intro: "Ce cadre régit la relation juridique entre l'utilisateur et Cojauny pendant la phase bêta pré-commerciale. La navigation et l'envoi d'information constituent une acceptation expresse de ces conditions dans leur version en vigueur.",
      updatedAt: "Dernière mise à jour contractuelle : 17 novembre 2025",
      sections: [
        {
          heading: "Champ Opérationnel et Objet du Service",
          body: "Cojauny opère comme plateforme bêta pré-commerciale fournissant : (i) informations corporatives et techniques, (ii) gestion d'accès anticipé, (iii) canal de feedback structuré. Le service est fourni tel quel sans garanties de disponibilité continue et sujet à évolution constante pendant la période bêta."
        },
        {
          heading: "Conditions Spécifiques de la Phase Bêta",
          body: "En participant à la bêta, vous acceptez : (i) instabilité potentielle du service, (ii) fonctionnalités limitées par rapport à la version finale, (iii) réinitialisations périodiques de la base de données, (iv) communication active de bugs et feedback. Les utilisateurs bêta fournissant un feedback substantiel pourront accéder à des conditions spéciales au lancement commercial."
        },
        {
          heading: "Exigences d'Éligibilité et Qualité des Données",
          body: "L'interaction avec les formulaires requiert : majorité vérifiable (18+), véracité des informations fournies et autorisation explicite pour les données tierces. Nous prohibons catégoriquement l'introduction de données sensibles (santé, idéologie, biométrie, etc.) sauf quand strictement nécessaire avec base légale adéquate documentée."
        },
        {
          heading: "Protocole d'Usage Acceptable",
          body: "Le cadre exclut : activités illicites, interférence avec l'infrastructure, ingénierie inverse non autorisée, scraping automatisé massif, introduction de code malveillant et toute activité compromettant l'expérience d'autres utilisateurs bêta. Nous réservons le droit de suspension immédiate en cas de violation de ce protocole."
        },
        {
          heading: "Politique d'Annulation et de Suspension",
          body: "Nous réservons le droit de suspendre l'accès immédiatement en cas de : usage malveillant, violation des conditions, activités compromettant la sécurité d'autres utilisateurs ou comportement dégradant l'expérience bêta. Nous notifierons la suspension par email et offrirons un processus d'appel sous 72 heures ouvrables."
        },
        {
          heading: "Propriété Intellectuelle et Licences Limitées",
          body: "Cojauny, le code sous-jacent, designs d'interface, documentation technique et méthodologies de coordination sont propriété de l'Équipe Cojauny ou de ses concédants. Une licence limitée non exclusive est concédée pour usage personnel pendant la bêta. Reproduction, distribution ou création d'œuvres dérivées interdites sans autorisation écrite."
        },
        {
          heading: "Structure de Responsabilité en Environnement Bêta",
          body: "En opérant en phase bêta, nous excluons la responsabilité pour : (i) interruptions de service, (ii) inexactitudes dans le contenu, (iii) dommages indirects ou perte de profit, (iv) perte de données pendant les réinitialisations programmées. Votre interaction avec des services tiers est régie par leurs propres conditions. Nous implémentons des mesures de sécurité raisonnables mais ne garantissons pas une protection absolue."
        },
        {
          heading: "Changements de Contrôle et Continuité du Service",
          body: "En cas de changement de contrôle corporatif (fusion, acquisition ou vente), nous notifierons avec 30 jours d'avance. Les données seront transférées sous les mêmes conditions de confidentialité ou l'option de suppression complète sera offerte. Les utilisateurs bêta maintiendront leurs bénéfices acquis pendant la transition."
        },
        {
          heading: "Évolution Contractuelle et Juridiction",
          body: "Nous modifierons ces conditions pour refléter : (i) changements substantiels dans le service, (ii) évolutions réglementaires, (iii) transition vers la phase commerciale. Nous notifierons les changements pertinents par email et maintiendrons un versionnage public. La relation est régie par la législation espagnole avec juridiction exclusive dans les tribunaux de Madrid capitale."
        }
      ],
      contact: "Communications légales : support@cojauny.com | Spécifier Sujet Légal dans l'objet | Réponse sous 72h ouvrables"
    },

    acceptableUse: {
      title: "Politique d'Usage Acceptable : Limites et Responsabilités",
      intro: "Cette politique définit les paramètres d'usage responsable de Cojauny pendant la phase bêta, établissant des attentes claires et protégeant l'intégrité de notre plateforme et communauté.",
      updatedAt: "Dernière revue : 17 novembre 2025",
      sections: [
        {
          heading: "Limites d'Usage Commercial",
          body: "Pendant la phase bêta, le service est offert exclusivement pour évaluation interne et testing. Usage commercial pour opérations en production interdit sans autorisation expresse. Limite opérationnelle de 50 événements coordonnés mensuels par organisation pendant la bêta. L'usage commercial requerra une migration vers le plan entreprise post-lancement."
        },
        {
          heading: "Restrictions de Contenu et de Conduite",
          body: "Interdit d'utiliser la plateforme pour coordonner des événements impliquant : activités illégales, contenu offensant, harcèlement, discrimination, violation de droits tiers ou toute activité pouvant nuire à la réputation de Cojauny. Nous implémentons une modération proactive et des mécanismes de signalement évolutifs."
        },
        {
          heading: "Limites Techniques et de Performance",
          body: "Chaque organisation bêta dispose de : 10GB de stockage total, 1000 notifications mensuelles et traitement maximum de 100 utilisateurs simultanés par événement. Dépasser ces limites peut résulter en un throttling automatique ou requérir une approbation d'expansion."
        },
        {
          heading: "Responsabilités de l'Utilisateur Bêta",
          body: "En tant qu'utilisateur bêta, vous acceptez : (i) reporter les bugs sous 48 heures de détection, (ii) participer à au moins une session de feedback mensuelle, (iii) maintenir la confidentialité sur les caractéristiques non publiques, (iv) ne pas réaliser de benchmarking public contre des concurrents pendant la phase bêta."
        },
        {
          heading: "Propriété des Données Générées",
          body: "Les utilisateurs conservent la propriété complète de leurs données d'événement et contenu. Cojauny conserve le droit d'utiliser des données anonymisées et agrégées pour l'amélioration du produit, mais n'accédera jamais au contenu spécifique sans consentement explicite sauf requête légale."
        },
        {
          heading: "Mécanismes de Conformité",
          body: "Nous implémentons un monitoring automatisé et une revue manuelle pour assurer la conformité. Les violations résulteront en : (i) avertissement formel pour infractions mineures, (ii) suspension temporaire pour récidives, (iii) résiliation permanente pour violations graves. Tous les cas incluent un processus d'appel documenté."
        }
      ],
      contact: "Reporter des violations d'usage : support@cojauny.com | Objet : Report Usage Acceptable"
    },

    faq: {
      title: "Centre de Transparence : Questions Légales Fréquentes",
      intro: "Réponses claires aux questions les plus courantes sur nos conditions, confidentialité et politiques pendant la phase bêta de Cojauny.",
      updatedAt: "Mis à jour : 17 novembre 2025",
      categories: [
        {
          name: "Confidentialité et Données",
          questions: [
            {
              question: "Comment gérez-vous les données de mes employés ou invités ?",
              answer: "Nous opérons comme sous-traitants sous les instructions du client. Nous fournissons des DPAs pré-signés et des outils pour la gestion du consentement en chaîne. Vous pouvez demander notre modèle DPA standard à support@cojauny.com."
            },
            {
              question: "Que advient-il de mes données si Cojauny est acquise ?",
              answer: "Nous notifierons avec 30 jours d'avance tout changement de contrôle. Les données personnelles seront transférées sous des termes équivalents ou l'option de suppression complète sera offerte. Les bénéfices des utilisateurs bêta seront maintenus pendant la transition."
            },
            {
              question: "Effectuez-vous du profilage ou de la prise de décision automatisée ?",
              answer: "Nous n'effectuons pas de profilage avec conséquences légales ni de décisions entièrement automatisées. L'algorithme de matching pour le partage de trajets suggère mais ne décide jamais automatiquement—requiert toujours une confirmation humaine."
            }
          ]
        },
        {
          name: "Termes et Conditions",
          questions: [
            {
              question: "Puis-je utiliser Cojauny pour des événements de clients externes ?",
              answer: "Pendant la bêta, uniquement pour testing interne. L'usage commercial avec clients externes requerra un plan entreprise post-lancement. Contactez-nous pour discussion de cas spéciaux."
            },
            {
              question: "Quel support technique inclut la bêta ?",
              answer: "Support communautaire via Discord, réponse aux bugs sous 48h, et sessions mensuelles de feedback. Le support prioritaire 24/7 sera disponible dans les plans entreprise post-lancement."
            },
            {
              question: "Puis-je exporter mes données si je décide d'annuler ?",
              answer: "Oui, nous fournissons une exportation complète dans des formats standard (JSON, CSV) sous 72 heures. Les données sont maintenues 30 jours post-annulation pour permettre l'exportation, puis suppression permanente."
            }
          ]
        },
        {
          name: "Sécurité et Conformité",
          questions: [
            {
              question: "Comment gérez-vous les demandes des autorités ?",
              answer: "Nous ne fournissons des données qu'en réponse à des demandes judiciaires valides. Nous notifions les utilisateurs affectés sauf interdiction légale. Nous maintenons la transparence en reportant les demandes gouvernementales annuellement."
            },
            {
              question: "Où les données sont-elles stockées physiquement ?",
              answer: "Nous utilisons Supabase avec des centres de données à Francfort (Allemagne) pour la base de données et Firebase Hosting en Belgique pour le frontend. Tous les centres respectent Tier III+ avec certifications ISO 27001, SOC 2."
            }
          ]
        }
      ],
      contact: "Vous ne trouvez pas votre question ? support@cojauny.com | Réponse sous 24h"
    },

    subprocessors: {
      title: "Registre des Sous-traitants : Transparence dans la Chaîne de Données",
      intro: "Liste complète des fournisseurs traitant des données au nom de Cojauny, mise à jour trimestriellement avec informations sur leur localisation et mesures de sécurité.",
      updatedAt: "Dernière mise à jour : 17 novembre 2025",
      providers: [
        {
          name: "Supabase",
          purpose: "Base de données PostgreSQL, authentification et stockage",
          location: "Francfort, Allemagne (UE)",
          security: "ISO 27001, SOC 2, Conformité GDPR, chiffrement AES-256 au repos"
        },
        {
          name: "Firebase Hosting (Google Cloud)",
          purpose: "Hébergement web, CDN et distribution globale du frontend",
          location: "Belgique (UE) avec edge locations globales",
          security: "ISO 27001, SOC 2, Conformité GDPR, SSL/TLS partout"
        },
        {
          name: "Zoho Mail",
          purpose: "Communications transactionnelles, notifications et support",
          location: "Pays-Bas (UE)",
          security: "Chiffrement de bout en bout, Conformité GDPR, authentification 2FA"
        },
        {
          name: "Dynadot",
          purpose: "Services DNS et enregistrement de domaines",
          location: "États-Unis",
          security: "Conformité RGPD via les Clauses Contractuelles Types, protection de la vie privée WHOIS, DNSSEC, chiffrement TLS pour les requêtes DNS"
        }
      ],
      contact: "Questions sur les sous-traitants : support@cojauny.com | Mises à jour trimestrielles"
    }
  }
};

export const getLegalCopy = (locale: Locale): ExtendedLegalCopy => 
  legalCopy[locale] ?? legalCopy[defaultLocale];