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

interface LegalCopy {
  privacy: LegalPageCopy;
  cookies: LegalPageCopy;
  terms: LegalPageCopy;
}

const legalCopy: Record<Locale, LegalCopy> = {
  es: {
    privacy: {
      title: 'Política de privacidad',
      intro:
        'En Cojauny tratamos la información personal con especial cuidado. Este documento resume cómo recopilamos, utilizamos y protegemos tus datos cuando participas en la beta o envías feedback.',
      updatedAt: 'Actualizado el 13 de noviembre de 2025',
      sections: [
        {
          heading: 'Responsable del tratamiento',
          body: 'Cojauny Mobility S.L. (CIF B0000000) con correo de contacto privacidad@cojauny.com.'
        },
        {
          heading: 'Datos que recopilamos',
          body: 'Datos de identificación (nombre, email profesional), información sobre tu compañía y caso de uso, mensajes enviados en formularios y métricas agregadas de uso de la landing.'
        },
        {
          heading: 'Finalidades y conservación',
          body: 'Gestionar el acceso a la beta, responder a solicitudes y mejorar el producto. Conservamos los datos como máximo 12 meses desde el último contacto o hasta que solicites su eliminación.'
        },
        {
          heading: 'Derechos de las personas usuarias',
          body: 'Puedes ejercer acceso, rectificación, supresión, oposición y portabilidad escribiendo a privacidad@cojauny.com. Responderemos en un plazo máximo de 30 días.'
        }
      ],
      contact: 'Para cualquier duda adicional escribe a privacidad@cojauny.com.'
    },
    cookies: {
      title: 'Política de cookies',
      intro:
        'Utilizamos cookies estrictamente necesarias para el funcionamiento del sitio y, de forma opcional, cookies de analítica para entender cómo se utiliza la landing.',
      updatedAt: 'Actualizado el 13 de noviembre de 2025',
      sections: [
        {
          heading: 'Cookies esenciales',
          body: 'Mantienen la seguridad, recuerdan tu selección de idioma y permiten enviar formularios. No pueden deshabilitarse desde el panel porque romperían la experiencia.'
        },
        {
          heading: 'Cookies analíticas',
          body: 'Usamos Google Analytics 4 con IP anonimizada para medir conversiones y detectar errores. Solo se activan si aceptas explícitamente el banner.'
        },
        {
          heading: 'Gestión de preferencias',
          body: 'Puedes modificar tu consentimiento en cualquier momento limpiando las cookies del navegador o escribiéndonos para eliminarlas manualmente.'
        }
      ],
      contact: 'Si tienes preguntas sobre cookies, contáctanos en privacidad@cojauny.com.'
    },
    terms: {
      title: 'Términos y condiciones de uso',
      intro:
        'Estas condiciones regulan el acceso a la landing y a los formularios de beta y feedback. Participar implica aceptar los términos descritos.',
      updatedAt: 'Actualizado el 13 de noviembre de 2025',
      sections: [
        {
          heading: 'Uso permitido',
          body: 'Puedes navegar por la landing, solicitar acceso a la beta y compartir comentarios siempre que la información proporcionada sea veraz y tengas autorización para usarla.'
        },
        {
          heading: 'Contenido proporcionado',
          body: 'Los mensajes enviados a través del formulario de feedback pueden utilizarse de forma anonimizada para mejorar el producto. No se compartirán públicamente sin tu permiso.'
        },
        {
          heading: 'Limitación de responsabilidad',
          body: 'La landing se ofrece “tal cual”. Cojauny no garantiza la disponibilidad continuada ni se responsabiliza de daños derivados de interrupciones en el servicio.'
        }
      ],
      contact: 'Para cuestiones legales escribe a legal@cojauny.com.'
    }
  },
  en: {
    privacy: {
      title: 'Privacy Policy',
      intro:
        'Cojauny handles personal information with care. This notice explains what data we collect, how we use it and the rights you have when joining the beta or sending feedback.',
      updatedAt: 'Updated on November 13, 2025',
      sections: [
        {
          heading: 'Data controller',
          body: 'Cojauny Mobility S.L., contact privacy@cojauny.com.'
        },
        {
          heading: 'Data we process',
          body: 'Identification data (name, professional email), company details, intended use cases, feedback messages and aggregated usage metrics from the landing page.'
        },
        {
          heading: 'Purpose and retention',
          body: 'We use the data to manage beta access, follow up on requests and improve the product. Information is stored for up to 12 months after the last interaction or until you ask us to delete it.'
        },
        {
          heading: 'Your rights',
          body: 'You may exercise access, rectification, erasure, restriction and portability by emailing privacy@cojauny.com. We reply within 30 days.'
        }
      ],
      contact: 'Questions? Reach us at privacy@cojauny.com.'
    },
    cookies: {
      title: 'Cookie Policy',
      intro:
        'We use strictly necessary cookies to keep the site running and optional analytics cookies to understand how visitors use the landing.',
      updatedAt: 'Updated on November 13, 2025',
      sections: [
        {
          heading: 'Necessary cookies',
          body: 'They keep sessions secure, remember your language choice and allow form submissions. Disabling them would break core features.'
        },
        {
          heading: 'Analytics cookies',
          body: 'We rely on Google Analytics 4 with IP anonymisation to measure conversions and detect errors. They only load after you provide explicit consent.'
        },
        {
          heading: 'Managing preferences',
          body: 'You can withdraw consent at any time by clearing your browser cookies or contacting us for manual removal.'
        }
      ],
      contact: 'For cookie questions, email privacy@cojauny.com.'
    },
    terms: {
      title: 'Terms of Use',
      intro:
        'These terms govern access to the landing page and the beta or feedback forms. By submitting information you agree to the clauses below.',
      updatedAt: 'Updated on November 13, 2025',
      sections: [
        {
          heading: 'Permitted use',
          body: 'You may browse the site, request beta access and share feedback as long as the information you submit is accurate and you are authorised to use it.'
        },
        {
          heading: 'User contributions',
          body: 'Feedback messages may be used internally in anonymised reports to improve Cojauny. We will never publish them without your explicit approval.'
        },
        {
          heading: 'Liability',
          body: 'The site is provided “as is”. Cojauny is not liable for damages caused by downtime, maintenance or third-party services.'
        }
      ],
      contact: 'For legal matters contact legal@cojauny.com.'
    }
  },
  de: {
    privacy: {
      title: 'Datenschutzerklärung',
      intro:
        'Cojauny behandelt personenbezogene Daten vertraulich. Diese Erklärung beschreibt, welche Daten wir erheben, wie wir sie nutzen und welche Rechte du hast, wenn du an der Beta teilnimmst oder Feedback sendest.',
      updatedAt: 'Aktualisiert am 13. November 2025',
      sections: [
        {
          heading: 'Verantwortliche Stelle',
          body: 'Cojauny Mobility S.L., Kontakt privacy@cojauny.com.'
        },
        {
          heading: 'Welche Daten wir verarbeiten',
          body: 'Name, berufliche E-Mail, Unternehmensangaben, geplante Anwendungsfälle, Nachrichten aus Formularen sowie aggregierte Nutzungsmetriken der Landingpage.'
        },
        {
          heading: 'Zweck und Speicherdauer',
          body: 'Verwaltung des Beta-Zugangs, Beantwortung von Anfragen und Produktverbesserung. Die Daten werden höchstens 12 Monate nach dem letzten Kontakt oder bis zur Löschanfrage aufbewahrt.'
        },
        {
          heading: 'Rechte der betroffenen Personen',
          body: 'Du kannst Auskunft, Berichtigung, Löschung, Einschränkung und Übertragbarkeit verlangen. Schreibe dazu an privacy@cojauny.com. Wir antworten innerhalb von 30 Tagen.'
        }
      ],
      contact: 'Fragen? Melde dich unter privacy@cojauny.com.'
    },
    cookies: {
      title: 'Cookie-Richtlinie',
      intro:
        'Wir setzen unbedingt notwendige Cookies sowie optionale Analyse-Cookies ein, um die Nutzung der Landingpage zu verstehen.',
      updatedAt: 'Aktualisiert am 13. November 2025',
      sections: [
        {
          heading: 'Notwendige Cookies',
          body: 'Sie sorgen für Sicherheit, speichern die Sprachauswahl und ermöglichen Formularübermittlungen. Eine Deaktivierung würde Kernfunktionen beeinträchtigen.'
        },
        {
          heading: 'Analyse-Cookies',
          body: 'Wir nutzen Google Analytics 4 mit anonymisierten IP-Adressen, um Conversions zu messen und Fehler zu erkennen. Sie werden nur mit deiner Zustimmung geladen.'
        },
        {
          heading: 'Verwaltung der Einstellungen',
          body: 'Du kannst deine Zustimmung jederzeit widerrufen, indem du Browser-Cookies löschst oder uns kontaktierst.'
        }
      ],
      contact: 'Bei Fragen zu Cookies erreichst du uns unter privacy@cojauny.com.'
    },
    terms: {
      title: 'Nutzungsbedingungen',
      intro:
        'Diese Bedingungen regeln den Zugang zur Landingpage sowie zu Beta- und Feedbackformularen. Mit dem Absenden von Informationen stimmst du ihnen zu.',
      updatedAt: 'Aktualisiert am 13. November 2025',
      sections: [
        {
          heading: 'Zulässige Nutzung',
          body: 'Du darfst die Seite besuchen, Beta-Zugang anfordern und Feedback geben, sofern die Angaben korrekt sind und du zur Nutzung berechtigt bist.'
        },
        {
          heading: 'Bereitgestellte Inhalte',
          body: 'Feedback kann anonymisiert zur Produktverbesserung verwendet werden. Eine Veröffentlichung erfolgt nur mit deiner Zustimmung.'
        },
        {
          heading: 'Haftungsbeschränkung',
          body: 'Die Website wird ohne Garantien bereitgestellt. Cojauny haftet nicht für Schäden durch Ausfallzeiten oder Wartungsarbeiten.'
        }
      ],
      contact: 'Rechtliche Anfragen an legal@cojauny.com.'
    }
  },
  fr: {
    privacy: {
      title: 'Politique de confidentialité',
      intro:
        'Cojauny protège vos données personnelles. Ce document explique les informations collectées, leur usage et vos droits lorsque vous rejoignez la bêta ou envoyez un retour.',
      updatedAt: 'Mis à jour le 13 novembre 2025',
      sections: [
        {
          heading: 'Responsable du traitement',
          body: 'Cojauny Mobility S.L., contact privacy@cojauny.com.'
        },
        {
          heading: 'Données traitées',
          body: 'Nom, e-mail professionnel, informations sur votre organisation, cas d’usage envisagé, messages envoyés et métriques agrégées d’utilisation du site.'
        },
        {
          heading: 'Finalité et durée de conservation',
          body: 'Gérer l’accès à la bêta, répondre aux demandes et améliorer le produit. Les données sont conservées au maximum 12 mois après le dernier contact ou jusqu’à suppression sur demande.'
        },
        {
          heading: 'Vos droits',
          body: 'Vous pouvez exercer vos droits d’accès, de rectification, d’opposition, d’effacement et de portabilité en écrivant à privacy@cojauny.com. Réponse sous 30 jours.'
        }
      ],
      contact: 'Pour toute question, écrivez à privacy@cojauny.com.'
    },
    cookies: {
      title: 'Politique de cookies',
      intro:
        'Nous utilisons des cookies indispensables pour le fonctionnement du site et, avec votre accord, des cookies analytiques pour comprendre son utilisation.',
      updatedAt: 'Mis à jour le 13 novembre 2025',
      sections: [
        {
          heading: 'Cookies nécessaires',
          body: 'Ils sécurisent les sessions, mémorisent la langue et permettent l’envoi des formulaires. Les désactiver bloquerait certaines fonctionnalités.'
        },
        {
          heading: 'Cookies analytiques',
          body: 'Nous utilisons Google Analytics 4 avec IP anonymisée pour mesurer les conversions et détecter les erreurs. Ils ne sont activés qu’après consentement explicite.'
        },
        {
          heading: 'Gestion du consentement',
          body: 'Vous pouvez retirer votre consentement à tout moment en effaçant les cookies du navigateur ou en nous contactant.'
        }
      ],
      contact: 'Questions sur les cookies ? privacy@cojauny.com.'
    },
    terms: {
      title: 'Conditions d’utilisation',
      intro:
        'Ces conditions régissent l’accès au site et aux formulaires de bêta ou de feedback. En envoyant vos informations, vous acceptez ces clauses.',
      updatedAt: 'Mis à jour le 13 novembre 2025',
      sections: [
        {
          heading: 'Usage autorisé',
          body: 'Vous pouvez consulter le site, demander l’accès à la bêta et partager votre avis si les informations fournies sont exactes et autorisées.'
        },
        {
          heading: 'Contenu fourni',
          body: 'Les retours peuvent être utilisés de manière anonymisée pour améliorer Cojauny. Ils ne seront jamais publiés sans votre accord.'
        },
        {
          heading: 'Limitation de responsabilité',
          body: 'Le site est fourni « en l’état ». Cojauny n’est pas responsable des dommages causés par une indisponibilité temporaire ou un service tiers.'
        }
      ],
      contact: 'Pour toute demande légale, écrivez à legal@cojauny.com.'
    }
  }
};

export const getLegalCopy = (locale: Locale): LegalCopy => legalCopy[locale] ?? legalCopy[defaultLocale];
