import type { Locale } from './config';
import { defaultLocale } from './config';

interface ContactFormCopy {
  title: string;
  description: string;
  success: string;
  error: string;
  submit: string;
  optionalLabel?: string;
  optionalHint?: string;
  fields: {
    name: string;
    email: string;
    topic: string;
    message: string;
  };
  legalNotice: string;
}

export interface ContactPageCopy {
  heading: string;
  intro: string;
  banner: string;
  form: ContactFormCopy;
}

const contactCopy: Record<Locale, ContactPageCopy> = {
  es: {
    heading: 'Hablemos de tu proyecto',
    intro:
      '¿Tienes una propuesta, ideas para mejorar o sugerencias? Escríbenos y el equipo fundador te responderá en menos de 48 horas.',
    banner: 'Usa este formulario para propuestas, mejoras o cualquier otro tema.',
    form: {
      title: 'Envíanos un mensaje',
      description:
        'Cuéntanos cómo podemos ayudarte. Tu nombre y email son necesarios para responderte.',
      success: '¡Recibido! Te escribiremos desde support@cojauny.com muy pronto.',
      error: "El mensaje debe tener al menos 10 caracteres.",
      submit: 'Enviar mensaje',
      optionalLabel: '(opcional)',
      fields: {
        name: 'Nombre',
        email: 'Email',
        topic: 'Asunto',
        message: 'Mensaje'
      },
      legalNotice: 'Guardamos tu mensaje para responderte. Pide borrarlo cuando quieras en support@cojauny.com.'
    }
  },
  en: {
    heading: "Let's Talk About Your Project",
    intro:
      'Got a proposal, improvement ideas, or suggestions? Message us and the founding team will reply within 48 hours.',
    banner: 'Use this form for proposals, improvements, or any other topic.',
    form: {
      title: 'Send us a message',
      description:
        "Tell us how we can help. Name and email are required for our response.",
      success: 'Received! We will reply from support@cojauny.com shortly.',
      error: "Message must be at least 10 characters long.",
      submit: 'Send message',
      optionalLabel: '(optional)',
      fields: {
        name: 'Name',
        email: 'Email',
        topic: 'Subject',
        message: 'Message'
      },
      legalNotice: 'We store your message to respond. Request deletion anytime at support@cojauny.com.'
    }
  },
  de: {
    heading: 'Lass uns über dein Projekt sprechen',
    intro:
      'Hast du ein Angebot, Ideen oder Vorschläge? Schreib uns, und das Gründerteam antwortet innerhalb von 48 Stunden.',
    banner: 'Nutze dieses Formular für Angebote, Verbesserungen oder andere Themen.',
    form: {
      title: 'Schreib uns',
      description:
        'Sag uns, wie wir helfen können. Name und E-Mail brauchen wir für die Antwort.',
      success: 'Erhalten! Wir melden uns bald von support@cojauny.com.',
      error: "Die Nachricht muss mindestens 10 Zeichen lang sein.",
      submit: 'Nachricht senden',
      optionalLabel: '(optional)',
      fields: {
        name: 'Name',
        email: 'E-Mail',
        topic: 'Betreff',
        message: 'Nachricht'
      },
      legalNotice: 'Wir speichern deine Nachricht für die Antwort. Löschung jederzeit möglich unter support@cojauny.com.'
    }
  },
  fr: {
    heading: 'Discutons de Votre Projet',
    intro:
      "Une proposition, des idées ou des suggestions ? Écrivez-nous et l'équipe fondatrice vous répondra sous 48 heures.",
    banner: 'Utilisez ce formulaire pour vos propositions, améliorations ou tout autre sujet.',
    form: {
      title: 'Envoyez-nous un message',
      description:
        'Dites-nous comment nous pouvons aider. Nom et e-mail requis pour la réponse.',
      success: 'Bien reçu ! Nous vous répondrons rapidement depuis support@cojauny.com.',
      error: "Le message doit contenir au moins 10 caractères.",
      submit: 'Envoyer le message',
      optionalLabel: '(Optionnel)',
      fields: {
        name: 'Nom',
        email: 'E-mail',
        topic: 'Objet',
        message: 'Message'
      },
      legalNotice: 'Nous conservons votre message pour répondre. Demandez sa suppression à tout moment à support@cojauny.com.'
    }
  }
};

export const getContactCopy = (locale: Locale): ContactPageCopy =>
  contactCopy[locale] ?? contactCopy[defaultLocale];
