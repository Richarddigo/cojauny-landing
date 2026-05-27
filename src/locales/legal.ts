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
  dataTypes: string;
  policyLink?: string;
}

export interface ExtendedLegalCopy {
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
      title: 'Política de Privacidad y Protección de Datos',
      intro: 'En Cojauny, nos tomamos su privacidad muy en serio. Esta política detalla cómo recopilamos, utilizamos, protegemos y gestionamos sus datos personales de conformidad con el RGPD y otras normativas aplicables.',
      updatedAt: 'Última actualización: 25 de mayo de 2026',
      sections: [
        {
          heading: '1. Responsable del Tratamiento',
          body: 'El responsable del tratamiento de sus datos es Cojauny Studio - Richard Díaz González ("Cojauny"), con operaciones en España. Puede contactar con nuestro Delegado de Protección de Datos (DPO) en support@cojauny.com.'
        },
        {
          heading: '2. Categorías de Datos Recopilados',
          body: 'Recopilamos: (a) Datos de Identificación: Nombre, email, ID de usuario; (b) Datos Técnicos: IP, dispositivo, SO, logs; (c) Datos de Uso: Interacciones, preferencias; (d) Datos de Localización: Geolocalización precisa (solo con consentimiento explícito); (e) Datos de Eventos: Información sobre eventos coordinados; (f) Contenido de Usuario: Fotos, descripciones y mensajes.'
        },
        {
          heading: '3. Finalidad y Base Jurídica',
          body: 'Tratamos sus datos para: (i) Prestación del Servicio (Contrato); (ii) Mejora y Seguridad (Interés legítimo); (iii) Comunicaciones (Contrato); (iv) Cumplimiento Legal (Obligación legal); (v) Geolocalización (Consentimiento). No realizamos decisiones automatizadas ni elaboración de perfiles con efectos jurídicos sin su consentimiento explícito.'
        },
        {
          heading: '4. Conservación de los Datos',
          body: 'Conservamos datos mientras la cuenta esté activa. Geolocalización: eliminada tras 2 horas. Logs técnicos: 12 meses. Tras el cierre, los datos se bloquean durante el plazo de prescripción legal (hasta 5 años) antes de su borrado total.'
        },
        {
          heading: '5. Destinatarios y Transferencias',
          body: 'Compartimos datos con proveedores (hosting, analítica) bajo contratos de encargado del tratamiento. Transferencias fuera del EEE se protegen mediante Cláusulas Contractuales Tipo (SCC) de la UE.'
        },
        {
          heading: '6. Derechos del Usuario',
          body: 'Puede acceder, rectificar, suprimir, limitar, oponerse y portar sus datos escribiendo a support@cojauny.com. Tiene derecho a reclamar ante la AEPD (www.aepd.es).'
        },
        {
          heading: '7. Seguridad',
          body: 'Aplicamos encriptación TLS 1.2+ y AES-256, controles de acceso (RBAC) y auditorías. Notificaremos brechas de seguridad en 72h si existe riesgo para sus derechos.'
        },
        {
          heading: '8. App Móvil y Permisos',
          body: 'La app puede solicitar acceso a: Cámara/Galería (para subir fotos), Ubicación (coordinación), y Notificaciones. Puede revocar estos permisos en los ajustes de su móvil.'
        }
      ],
      contact: 'DPO: support@cojauny.com | Respuesta en 24h'
    },
    cookies: {
      title: 'Política de Cookies',
      intro: 'Uso de cookies y tecnologías de rastreo para mejorar la experiencia y seguridad.',
      updatedAt: '25 de mayo de 2026',
      sections: [
        {
          heading: '1. Definición y Uso',
          body: 'Usamos cookies (archivos de texto) y almacenamiento local para mantener su sesión, recordar preferencias y analizar el tráfico anónimo.'
        },
        {
          heading: '2. Tipos de Cookies',
          body: '(a) Esenciales: Necesarias para login y seguridad (sin consentimiento). (b) Analíticas: Google Analytics (con consentimiento). (c) Funcionales: Preferencias de idioma.'
        },
        {
          heading: '3. Control del Usuario',
          body: 'Puede gestionar sus preferencias desde el banner de cookies o la configuración de la app. Bloquear cookies esenciales puede impedir el uso del servicio.'
        }
      ],
      contact: 'Cookies: support@cojauny.com'
    },
    terms: {
      title: 'Términos y Condiciones de Uso',
      intro: 'Contrato legal vinculante entre el Usuario y Cojauny para el uso de la plataforma.',
      updatedAt: '25 de mayo de 2026',
      sections: [
        {
          heading: '1. Naturaleza del Servicio y Exención de Responsabilidad Offline',
          body: 'Cojauny es una herramienta tecnológica para coordinar eventos. NO somos organizadores de eventos ni supervisamos las interacciones en el mundo real. Usted reconoce que Cojauny NO es responsable de la seguridad, conducta o legalidad de los eventos o encuentros offline coordinados a través de la App. Asista a eventos bajo su propia responsabilidad y riesgo.'
        },
        {
          heading: '2. Licencia de Contenido del Usuario',
          body: 'Usted conserva la propiedad de lo que publica. Sin embargo, al subir contenido (fotos, textos), otorga a Cojauny una licencia mundial, no exclusiva, gratuita y transferible para usar, reproducir, mostrar y distribuir dicho contenido únicamente para el funcionamiento y promoción del servicio.'
        },
        {
          heading: '3. Registro y Seguridad',
          body: 'Debe ser mayor de 18 años. Es responsable de custodiar su contraseña. Notifique cualquier acceso no autorizado inmediatamente.'
        },
        {
          heading: '4. Indemnización',
          body: 'Usted acuerda indemnizar y mantener indemne a Cojauny, sus directivos y empleados frente a cualquier reclamación, daño o gasto (incluyendo abogados) derivado de: (a) su incumplimiento de estos Términos; (b) su violación de derechos de terceros; (c) su conducta en eventos offline.'
        },
        {
          heading: '5. Propiedad Intelectual de la Plataforma',
          body: 'El software, diseño y marcas de Cojauny son propiedad exclusiva nuestra. Se prohíbe la ingeniería inversa o copia no autorizada.'
        },
        {
          heading: '6. Limitación de Responsabilidad',
          body: 'En la máxima medida legal, Cojauny no responde por daños indirectos, lucro cesante o daños físicos derivados de eventos. Nuestra responsabilidad total se limita a la cantidad pagada por usted en los últimos 12 meses o 50€.'
        },
        {
          heading: '7. Modificación y Terminación',
          body: 'Podemos modificar estos términos notificándole. Podemos suspender su cuenta por incumplimiento sin previo aviso.'
        },
        {
          heading: '8. Ley y Jurisdicción',
          body: 'Rige la ley española. Jurisdicción exclusiva: Tribunales de Madrid, España.'
        }
      ],
      contact: 'Legal: support@cojauny.com'
    },
    acceptableUse: {
      title: 'Política de Uso Aceptable',
      intro: 'Normas de convivencia y seguridad para la comunidad Cojauny.',
      updatedAt: '25 de mayo de 2026',
      sections: [
        {
          heading: '1. Comportamiento Prohibido',
          body: 'Se prohíbe: Acoso, amenazas, discurso de odio, contenido sexual explícito, promoción de actividades ilegales, y spam.'
        },
        {
          heading: '2. Seguridad en Eventos',
          body: 'Se prohíbe usar la plataforma para organizar eventos que pongan en peligro la seguridad física de las personas, promuevan la violencia o violen leyes locales.'
        },
        {
          heading: '3. Integridad Técnica',
          body: 'Prohibido el scraping de datos, distribución de malware, o ataques DDoS contra la plataforma.'
        },
        {
          heading: '4. Consecuencias',
          body: 'El incumplimiento conllevará la suspensión inmediata de la cuenta y, si procede, denuncia ante las autoridades.'
        }
      ],
      contact: 'Reportes: support@cojauny.com'
    },
    faq: {
      title: 'FAQ Legal',
      intro: 'Dudas frecuentes sobre legalidad y seguridad.',
      updatedAt: '25 de mayo de 2026',
      categories: [
        {
          name: 'Responsabilidad',
          questions: [
            {
              question: '¿Es Cojauny responsable de los eventos?',
              answer: 'No. Cojauny es solo la herramienta de coordinación. Los organizadores y asistentes son responsables de sus actos.'
            }
          ]
        },
        {
          name: 'Privacidad',
          questions: [
            {
              question: '¿Venden mis datos?',
              answer: 'Nunca. Su privacidad es nuestra prioridad.'
            },
            {
              question: '¿Cómo borro mi cuenta?',
              answer: 'Desde los ajustes de la app o escribiendo a soporte.'
            }
          ]
        }
      ],
      contact: 'Soporte: support@cojauny.com'
    },
    subprocessors: {
      title: 'Subprocesadores',
      intro: 'Proveedores externos.',
      updatedAt: '25 de mayo de 2026',
      providers: [
        {
          name: 'Supabase',
          purpose: 'Base de Datos',
          location: 'Alemania (UE)',
          security: 'ISO 27001',
          dataTypes: 'Datos de usuario',
          policyLink: 'https://supabase.com/privacy'
        },
        {
          name: 'Zoho',
          purpose: 'Email',
          location: 'UE',
          security: 'GDPR',
          dataTypes: 'Emails',
          policyLink: 'https://www.zoho.com/privacy.html'
        },
        {
          name: 'Dynadot',
          purpose: 'Dominios',
          location: 'USA',
          security: 'Privacy Shield',
          dataTypes: 'Datos de red',
          policyLink: 'https://www.dynadot.com/privacy_policy.html'
        }
      ],
      contact: 'Legal: support@cojauny.com'
    }
  },
  en: {
    privacy: {
      title: 'Privacy and Data Protection Policy',
      intro: 'At Cojauny, we take your privacy seriously. This policy details how we collect, use, protect, and manage your personal data in compliance with GDPR and other applicable regulations.',
      updatedAt: 'Last updated: May 25, 2026',
      sections: [
        {
          heading: '1. Data Controller',
          body: 'The data controller is Cojauny Studio - Richard Díaz González ("Cojauny"), operating from Spain. You can contact our Data Protection Officer (DPO) at support@cojauny.com.'
        },
        {
          heading: '2. Categories of Data Collected',
          body: 'We collect: (a) Identity Data: Name, email, user ID; (b) Technical Data: IP, device, OS, logs; (c) Usage Data: Interactions, preferences; (d) Location Data: Precise geolocation (only with explicit consent); (e) Event Data: Information about coordinated events; (f) User Content: Photos, descriptions, and messages.'
        },
        {
          heading: '3. Purpose and Legal Basis',
          body: 'We process data for: (i) Service Provision (Contract); (ii) Improvement & Security (Legitimate Interest); (iii) Communications (Contract); (iv) Legal Compliance (Legal Obligation); (v) Geolocation (Consent). We do not engage in automated decision-making with legal effects without explicit consent.'
        },
        {
          heading: '4. Data Retention',
          body: 'We retain data while the account is active. Geolocation: deleted after 2 hours. Technical logs: 12 months. After closure, data is blocked during the statute of limitations period (up to 5 years) before total deletion.'
        },
        {
          heading: '5. Recipients and Transfers',
          body: 'We share data with providers (hosting, analytics) under data processing agreements. Transfers outside the EEA are protected via EU Standard Contractual Clauses (SCCs).'
        },
        {
          heading: '6. User Rights',
          body: 'You can access, rectify, erase, restrict, object, and port your data by writing to support@cojauny.com. You have the right to lodge a complaint with the AEPD (www.aepd.es).'
        },
        {
          heading: '7. Security',
          body: 'We apply TLS 1.2+ and AES-256 encryption, access controls (RBAC), and audits. We will notify of security breaches within 72h if there is a risk to your rights.'
        },
        {
          heading: '8. Mobile App and Permissions',
          body: 'The app may request access to: Camera/Gallery (uploading photos), Location (coordination), and Notifications. You can revoke these permissions in your device settings.'
        }
      ],
      contact: 'DPO: support@cojauny.com | Response within 24h'
    },
    cookies: {
      title: 'Cookie Policy',
      intro: 'Use of cookies and tracking technologies to improve experience and security.',
      updatedAt: 'May 25, 2026',
      sections: [
        {
          heading: '1. Definition and Use',
          body: 'We use cookies (text files) and local storage to maintain your session, remember preferences, and analyze anonymous traffic.'
        },
        {
          heading: '2. Types of Cookies',
          body: '(a) Essential: Necessary for login and security (no consent). (b) Analytics: Google Analytics (with consent). (c) Functional: Language preferences.'
        },
        {
          heading: '3. User Control',
          body: 'You can manage preferences from the cookie banner or app settings. Blocking essential cookies may prevent service usage.'
        }
      ],
      contact: 'Cookies: support@cojauny.com'
    },
    terms: {
      title: 'Terms and Conditions of Use',
      intro: 'Binding legal contract between the User and Cojauny for platform use.',
      updatedAt: 'May 25, 2026',
      sections: [
        {
          heading: '1. Nature of Service and Offline Liability Disclaimer',
          body: 'Cojauny is a tech tool for coordinating events. We are NOT event organizers nor do we supervise real-world interactions. You acknowledge that Cojauny is NOT responsible for the safety, conduct, or legality of offline events or meetings coordinated via the App. Attend events at your own risk.'
        },
        {
          heading: '2. User Content License',
          body: 'You retain ownership of what you post. However, by uploading content (photos, text), you grant Cojauny a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, display, and distribute such content solely for operating and promoting the service.'
        },
        {
          heading: '3. Registration and Security',
          body: 'Must be 18+. You are responsible for safeguarding your password. Notify us of unauthorized access immediately.'
        },
        {
          heading: '4. Indemnification',
          body: 'You agree to indemnify and hold Cojauny, its officers, and employees harmless from any claim, damage, or expense (including legal fees) arising from: (a) your breach of these Terms; (b) your violation of third-party rights; (c) your conduct at offline events.'
        },
        {
          heading: '5. Platform Intellectual Property',
          body: 'Cojauny software, design, and trademarks are our exclusive property. Reverse engineering or unauthorized copying is prohibited.'
        },
        {
          heading: '6. Limitation of Liability',
          body: 'To the maximum extent legal, Cojauny is not liable for indirect damages, lost profits, or physical damages arising from events. Our total liability is limited to the amount paid by you in the last 12 months or €50.'
        },
        {
          heading: '7. Modification and Termination',
          body: 'We may modify these terms with notice. We may suspend your account for breach without prior notice.'
        },
        {
          heading: '8. Law and Jurisdiction',
          body: 'Spanish law applies. Exclusive jurisdiction: Courts of Madrid, Spain.'
        }
      ],
      contact: 'Legal: support@cojauny.com'
    },
    acceptableUse: {
      title: 'Acceptable Use Policy',
      intro: 'Community standards and safety rules for Cojauny.',
      updatedAt: 'May 25, 2026',
      sections: [
        {
          heading: '1. Prohibited Behavior',
          body: 'Prohibited: Harassment, threats, hate speech, explicit sexual content, promotion of illegal activities, and spam.'
        },
        {
          heading: '2. Event Safety',
          body: 'Prohibited to use the platform to organize events that endanger physical safety, promote violence, or violate local laws.'
        },
        {
          heading: '3. Technical Integrity',
          body: 'Data scraping, malware distribution, or DDoS attacks against the platform are prohibited.'
        },
        {
          heading: '4. Consequences',
          body: 'Non-compliance will result in immediate account suspension and, if applicable, reporting to authorities.'
        }
      ],
      contact: 'Reports: support@cojauny.com'
    },
    faq: {
      title: 'Legal FAQ',
      intro: 'Common questions about legality and safety.',
      updatedAt: 'May 25, 2026',
      categories: [
        {
          name: 'Liability',
          questions: [
            {
              question: 'Is Cojauny responsible for events?',
              answer: 'No. Cojauny is just the coordination tool. Organizers and attendees are responsible for their actions.'
            }
          ]
        },
        {
          name: 'Privacy',
          questions: [
            {
              question: 'Do you sell my data?',
              answer: 'Never. Your privacy is our priority.'
            },
            {
              question: 'How do I delete my account?',
              answer: 'From app settings or by writing to support.'
            }
          ]
        }
      ],
      contact: 'Support: support@cojauny.com'
    },
    subprocessors: {
      title: 'Subprocessors',
      intro: 'External providers.',
      updatedAt: 'May 25, 2026',
      providers: [
        {
          name: 'Supabase',
          purpose: 'Database',
          location: 'Germany (EU)',
          security: 'ISO 27001',
          dataTypes: 'User data',
          policyLink: 'https://supabase.com/privacy'
        },
        {
          name: 'Zoho',
          purpose: 'Email',
          location: 'EU',
          security: 'GDPR',
          dataTypes: 'Emails',
          policyLink: 'https://www.zoho.com/privacy.html'
        },
        {
          name: 'Dynadot',
          purpose: 'Domains',
          location: 'USA',
          security: 'Privacy Shield',
          dataTypes: 'Network data',
          policyLink: 'https://www.dynadot.com/privacy_policy.html'
        }
      ],
      contact: 'Legal: support@cojauny.com'
    }
  },
  de: {
    privacy: {
      title: 'Datenschutz- und Datensicherheitsrichtlinie',
      intro: 'Bei Cojauny nehmen wir Ihre Privatsphäre sehr ernst. Diese Richtlinie erläutert, wie wir Ihre personenbezogenen Daten gemäß DSGVO verwalten.',
      updatedAt: 'Letzte Aktualisierung: 25. Mai 2026',
      sections: [
        {
          heading: '1. Verantwortlicher',
          body: 'Verantwortlicher ist Cojauny Studio - Richard Díaz González ("Cojauny"), Spanien. Kontakt DSB: support@cojauny.com.'
        },
        {
          heading: '2. Erfasste Datenkategorien',
          body: 'Wir erfassen: (a) Identitätsdaten: Name, E-Mail, ID; (b) Technische Daten: IP, Gerät, Logs; (c) Nutzungsdaten: Interaktionen; (d) Standortdaten: Präzise Geolokalisierung (nur mit Einwilligung); (e) Eventdaten: Infos zu Events; (f) Nutzerinhalte: Fotos, Texte.'
        },
        {
          heading: '3. Zweck und Rechtsgrundlage',
          body: 'Wir verarbeiten für: (i) Leistungserbringung (Vertrag); (ii) Sicherheit (Berechtigtes Interesse); (iii) Kommunikation (Vertrag); (iv) Compliance (Gesetz); (v) Geolokalisierung (Einwilligung). Keine automatisierten Entscheidungen mit Rechtswirkung ohne Einwilligung.'
        },
        {
          heading: '4. Datenspeicherung',
          body: 'Speicherung solange Konto aktiv. Geolokalisierung: Löschung nach 2 Std. Logs: 12 Monate. Nach Schließung Sperrung während Verjährungsfrist (bis 5 Jahre).'
        },
        {
          heading: '5. Empfänger und Übermittlungen',
          body: 'Weitergabe an Provider (Hosting) unter Auftragsverarbeitungsverträgen. Transfers außerhalb EWR geschützt durch EU-Standardvertragsklauseln (SCC).'
        },
        {
          heading: '6. Nutzerrechte',
          body: 'Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Übertragbarkeit via support@cojauny.com. Beschwerderecht bei der AEPD.'
        },
        {
          heading: '7. Sicherheit',
          body: 'TLS 1.2+, AES-256, Zugriffskontrollen und Audits. Meldung von Sicherheitsverletzungen binnen 72h bei Risiko.'
        },
        {
          heading: '8. App und Berechtigungen',
          body: 'App fragt nach: Kamera/Galerie (Fotos), Standort (Koordination), Benachrichtigungen. Widerruf in Geräteeinstellungen möglich.'
        }
      ],
      contact: 'DSB: support@cojauny.com | Antwort in 24h'
    },
    cookies: {
      title: 'Cookie-Richtlinie',
      intro: 'Nutzung von Cookies zur Verbesserung der Erfahrung.',
      updatedAt: '25. Mai 2026',
      sections: [
        {
          heading: '1. Definition',
          body: 'Wir nutzen Cookies und lokalen Speicher für Sitzungserhalt und Analyse.'
        },
        {
          heading: '2. Arten',
          body: '(a) Essenziell: Login/Sicherheit (ohne Einwilligung). (b) Analyse: Google Analytics (mit Einwilligung). (c) Funktional: Sprache.'
        },
        {
          heading: '3. Kontrolle',
          body: 'Verwaltung über Banner oder App-Einstellungen. Blockieren essenzieller Cookies kann Nutzung verhindern.'
        }
      ],
      contact: 'Cookies: support@cojauny.com'
    },
    terms: {
      title: 'Allgemeine Geschäftsbedingungen',
      intro: 'Rechtlich bindender Vertrag zwischen Nutzer und Cojauny.',
      updatedAt: '25. Mai 2026',
      sections: [
        {
          heading: '1. Art des Dienstes und Haftungsausschluss Offline',
          body: 'Cojauny ist ein Tech-Tool zur Event-Koordination. Wir sind KEINE Event-Veranstalter und überwachen keine realen Interaktionen. Cojauny haftet NICHT für Sicherheit, Verhalten oder Legalität von Offline-Events. Teilnahme auf eigenes Risiko.'
        },
        {
          heading: '2. Lizenz für Nutzerinhalte',
          body: 'Sie behalten das Eigentum an Ihren Posts. Mit dem Upload gewähren Sie Cojauny eine weltweite, nicht-exklusive, kostenlose Lizenz zur Nutzung, Anzeige und Verbreitung der Inhalte für den Betrieb des Dienstes.'
        },
        {
          heading: '3. Registrierung und Sicherheit',
          body: 'Mindestalter 18. Sie haften für Ihr Passwort. Melden Sie unbefugten Zugriff sofort.'
        },
        {
          heading: '4. Schadloshaltung',
          body: 'Sie stellen Cojauny von allen Ansprüchen, Schäden oder Kosten frei, die entstehen aus: (a) Ihrem Vertragsbruch; (b) Verletzung Dritter; (c) Ihrem Verhalten bei Offline-Events.'
        },
        {
          heading: '5. Geistiges Eigentum der Plattform',
          body: 'Software und Marken gehören exklusiv Cojauny. Reverse Engineering verboten.'
        },
        {
          heading: '6. Haftungsbeschränkung',
          body: 'Soweit gesetzlich zulässig, haftet Cojauny nicht für indirekte Schäden oder physische Schäden bei Events. Gesamthaftung beschränkt auf Zahlungen der letzten 12 Monate oder 50€.'
        },
        {
          heading: '7. Änderung und Kündigung',
          body: 'Änderungen mit Benachrichtigung. Sperrung bei Verstoß ohne Vorankündigung.'
        },
        {
          heading: '8. Recht und Gerichtsstand',
          body: 'Spanisches Recht. Gerichtsstand: Madrid, Spanien.'
        }
      ],
      contact: 'Recht: support@cojauny.com'
    },
    acceptableUse: {
      title: 'Richtlinie für akzeptable Nutzung',
      intro: 'Sicherheitsregeln für die Community.',
      updatedAt: '25. Mai 2026',
      sections: [
        {
          heading: '1. Verbotenes Verhalten',
          body: 'Verboten: Belästigung, Hassrede, explizite sexuelle Inhalte, illegale Aktivitäten, Spam.'
        },
        {
          heading: '2. Event-Sicherheit',
          body: 'Verboten: Organisation von Events, die Sicherheit gefährden oder Gesetze verletzen.'
        },
        {
          heading: '3. Technische Integrität',
          body: 'Scraping, malware, DDoS-Attacken verboten.'
        },
        {
          heading: '4. Konsequenzen',
          body: 'Verstoß führt zu sofortiger Sperrung und ggf. Anzeige.'
        }
      ],
      contact: 'Meldungen: support@cojauny.com'
    },
    faq: {
      title: 'Rechtliche FAQ',
      intro: 'Häufige Fragen.',
      updatedAt: '25. Mai 2026',
      categories: [
        {
          name: 'Haftung',
          questions: [
            {
              question: 'Haftet Cojauny für Events?',
              answer: 'Nein. Wir sind nur das Tool. Organisatoren haften für ihre Taten.'
            }
          ]
        },
        {
          name: 'Datenschutz',
          questions: [
            {
              question: 'Verkaufen Sie Daten?',
              answer: 'Niemals.'
            },
            {
              question: 'Konto löschen?',
              answer: 'Über App-Einstellungen oder Support.'
            }
          ]
        }
      ],
      contact: 'Support: support@cojauny.com'
    },
    subprocessors: {
      title: 'Unterauftragsverarbeiter',
      intro: 'Externe Anbieter.',
      updatedAt: '25. Mai 2026',
      providers: [
        {
          name: 'Supabase',
          purpose: 'Datenbank',
          location: 'Deutschland (EU)',
          security: 'ISO 27001',
          dataTypes: 'Nutzerdaten',
          policyLink: 'https://supabase.com/privacy'
        },
        {
          name: 'Zoho',
          purpose: 'E-Mail',
          location: 'EU',
          security: 'DSGVO',
          dataTypes: 'E-Mails',
          policyLink: 'https://www.zoho.com/privacy.html'
        },
        {
          name: 'Dynadot',
          purpose: 'Domains',
          location: 'USA',
          security: 'Privacy Shield',
          dataTypes: 'Netzwerkdaten',
          policyLink: 'https://www.dynadot.com/privacy_policy.html'
        }
      ],
      contact: 'Recht: support@cojauny.com'
    }
  },
  fr: {
    privacy: {
      title: 'Politique de Confidentialité',
      intro: 'Chez Cojauny, nous prenons votre vie privée au sérieux. Cette politique détaille la gestion de vos données selon le RGPD.',
      updatedAt: 'Dernière mise à jour : 25 mai 2026',
      sections: [
        {
          heading: '1. Responsable du Traitement',
          body: 'Responsable : Cojauny Studio - Richard Díaz González ("Cojauny"), Espagne. Contact DPO : support@cojauny.com.'
        },
        {
          heading: '2. Données Collectées',
          body: 'Nous collectons : (a) Identité : Nom, email, ID ; (b) Technique : IP, appareil, logs ; (c) Usage : Interactions ; (d) Localisation : Précise (avec consentement) ; (e) Événements : Infos événements ; (f) Contenu : Photos, textes.'
        },
        {
          heading: '3. Finalité et Base Légale',
          body: 'Traitement pour : (i) Service (Contrat) ; (ii) Sécurité (Intérêt légitime) ; (iii) Comms (Contrat) ; (iv) Légal (Obligation) ; (v) Localisation (Consentement). Pas de décision automatisée sans consentement.'
        },
        {
          heading: '4. Conservation',
          body: 'Tant que le compte est actif. Localisation : supprimée après 2h. Logs : 12 mois. Après fermeture, blocage durant prescription (5 ans).'
        },
        {
          heading: '5. Destinataires et Transferts',
          body: 'Partage avec prestataires (hébergement) sous contrat. Transferts hors EEE protégés par Clauses Contractuelles Types (CCT).'
        },
        {
          heading: '6. Droits',
          body: 'Accès, rectification, suppression, limitation, opposition, portabilité via support@cojauny.com. Réclamation auprès de l\'AEPD.'
        },
        {
          heading: '7. Sécurité',
          body: 'TLS 1.2+, AES-256, contrôles d\'accès, audits. Notification de brèche sous 72h si risque.'
        },
        {
          heading: '8. App et Permissions',
          body: 'L\'app demande : Caméra/Galerie (photos), Localisation (coordination), Notifications. Révocable dans les réglages.'
        }
      ],
      contact: 'DPO : support@cojauny.com | Réponse sous 24h'
    },
    cookies: {
      title: 'Politique de Cookies',
      intro: 'Usage de cookies pour améliorer l\'expérience.',
      updatedAt: '25 mai 2026',
      sections: [
        {
          heading: '1. Définition',
          body: 'Cookies et stockage local pour session et analyse.'
        },
        {
          heading: '2. Types',
          body: '(a) Essentiels : Login/Sécurité (sans consentement). (b) Analytique : Google Analytics (avec consentement). (c) Fonctionnel : Langue.'
        },
        {
          heading: '3. Contrôle',
          body: 'Gestion via bannière ou réglages. Bloquer les essentiels peut empêcher l\'usage.'
        }
      ],
      contact: 'Cookies : support@cojauny.com'
    },
    terms: {
      title: 'Conditions Générales d\'Utilisation',
      intro: 'Contrat légal entre l\'Utilisateur et Cojauny.',
      updatedAt: '25 mai 2026',
      sections: [
        {
          heading: '1. Nature du Service et Non-Responsabilité Offline',
          body: 'Cojauny est un outil tech de coordination. Nous ne sommes PAS organisateurs d\'événements et ne surveillons pas le réel. Cojauny n\'est PAS responsable de la sécurité ou légalité des événements offline. Participation à vos risques.'
        },
        {
          heading: '2. Licence Contenu Utilisateur',
          body: 'Vous gardez la propriété de vos posts. En publiant, vous accordez à Cojauny une licence mondiale, non-exclusive, gratuite pour utiliser, afficher et distribuer le contenu pour le service.'
        },
        {
          heading: '3. Inscription et Sécurité',
          body: '18 ans min. Vous êtes responsable de votre mot de passe. Signalez tout accès non autorisé.'
        },
        {
          heading: '4. Indemnisation',
          body: 'Vous acceptez d\'indemniser Cojauny contre toute réclamation ou dommage découlant de : (a) votre violation des termes ; (b) violation de droits tiers ; (c) votre conduite aux événements.'
        },
        {
          heading: '5. Propriété Intellectuelle Plateforme',
          body: 'Logiciel et marques sont propriété exclusive de Cojauny. Ingénierie inverse interdite.'
        },
        {
          heading: '6. Limitation de Responsabilité',
          body: 'Dans la limite légale, Cojauny ne répond pas des dommages indirects ou physiques liés aux événements. Responsabilité limitée aux paiements des 12 derniers mois ou 50€.'
        },
        {
          heading: '7. Modification et Résiliation',
          body: 'Modifications avec préavis. Suspension immédiate si violation.'
        },
        {
          heading: '8. Loi et Juridiction',
          body: 'Loi espagnole. Tribunaux de Madrid, Espagne.'
        }
      ],
      contact: 'Juridique : support@cojauny.com'
    },
    acceptableUse: {
      title: 'Politique d\'Usage Acceptable',
      intro: 'Règles de sécurité pour la communauté.',
      updatedAt: '25 mai 2026',
      sections: [
        {
          heading: '1. Comportement Interdit',
          body: 'Interdit : Harcèlement, haine, contenu sexuel, activités illégales, spam.'
        },
        {
          heading: '2. Sécurité Événements',
          body: 'Interdit : Organiser des événements dangereux ou illégaux.'
        },
        {
          heading: '3. Intégrité Technique',
          body: 'Scraping, malware, DDoS interdits.'
        },
        {
          heading: '4. Conséquences',
          body: 'Violation entraîne suspension immédiate et signalement aux autorités.'
        }
      ],
      contact: 'Signalement : support@cojauny.com'
    },
    faq: {
      title: 'FAQ Juridique',
      intro: 'Questions fréquentes.',
      updatedAt: '25 mai 2026',
      categories: [
        {
          name: 'Responsabilité',
          questions: [
            {
              question: 'Cojauny est-il responsable des événements ?',
              answer: 'Non. Nous sommes l\'outil. Les organisateurs sont responsables.'
            }
          ]
        },
        {
          name: 'Confidentialité',
          questions: [
            {
              question: 'Vendez-vous mes données ?',
              answer: 'Jamais.'
            },
            {
              question: 'Supprimer mon compte ?',
              answer: 'Via réglages ou support.'
            }
          ]
        }
      ],
      contact: 'Support : support@cojauny.com'
    },
    subprocessors: {
      title: 'Sous-traitants',
      intro: 'Fournisseurs externes.',
      updatedAt: '25 mai 2026',
      providers: [
        {
          name: 'Supabase',
          purpose: 'Base de données',
          location: 'Allemagne (UE)',
          security: 'ISO 27001',
          dataTypes: 'Données utilisateur',
          policyLink: 'https://supabase.com/privacy'
        },
        {
          name: 'Zoho',
          purpose: 'Email',
          location: 'UE',
          security: 'RGPD',
          dataTypes: 'Emails',
          policyLink: 'https://www.zoho.com/privacy.html'
        },
        {
          name: 'Dynadot',
          purpose: 'Domaines',
          location: 'USA',
          security: 'Privacy Shield',
          dataTypes: 'Données réseau',
          policyLink: 'https://www.dynadot.com/privacy_policy.html'
        }
      ],
      contact: 'Juridique : support@cojauny.com'
    }
  }
};

export const getLegalCopy = (locale: Locale): ExtendedLegalCopy => 
  legalCopy[locale] ?? legalCopy[defaultLocale];
