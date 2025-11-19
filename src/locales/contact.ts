import type { Locale } from './config';
import { defaultLocale } from './config';

interface ContactFormCopy {
  title: string;
  description: string;
  success: string;
  error: string;
  submit: string;
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
    heading: 'Hablemos sobre tu siguiente movimiento',
    intro:
      'Si tienes una propuesta de negocio, ideas para mejorar Cojauny o quieres compartir sugerencias, déjanos un mensaje. El equipo fundador responde en menos de dos días laborables.',
    banner: 'Usa este formulario para propuestas comerciales, mejoras para la app, sugerencias u otros temas.',
    form: {
      title: 'Envíanos un mensaje',
      description:
        'Cuéntanos en qué podemos ayudarte y deja tu correo para que podamos responderte. El nombre y el email son obligatorios.',
      success: 'Gracias por escribirnos. Te responderemos desde feedback@cojauny.com muy pronto.',
      error: 'No hemos podido enviar tu mensaje. Inténtalo de nuevo en unos minutos.',
      submit: 'Enviar mensaje',
      fields: {
        name: 'Nombre',
        email: 'Email',
        topic: 'Asunto',
        message: 'Mensaje'
      },
      legalNotice: 'Guardaremos tu mensaje en nuestra base de datos segura para poder responderte. Puedes pedir que lo eliminemos cuando quieras escribiendo a feedback@cojauny.com.'
    }
  },
  en: {
    heading: "Let's talk about your next move",
    intro:
      'Have a business proposal, ideas to improve Cojauny or suggestions for future releases? Drop us a message and the founding team will reply within two business days.',
    banner: 'Use this form for business proposals, product improvements, suggestions or any other topic.',
    form: {
      title: 'Send us a message',
      description:
        "Tell us how we can help and leave your email so we can get back to you. Name and email are mandatory.",
      success: 'Thanks for reaching out. We will reply from feedback@cojauny.com shortly.',
      error: 'We could not send your message. Please try again in a few minutes.',
      submit: 'Send message',
      fields: {
        name: 'Name',
        email: 'Email',
        topic: 'Subject',
        message: 'Message'
      },
      legalNotice: 'We will store your message in our secure database so we can reply. You can request deletion at any time by emailing feedback@cojauny.com.'
    }
  },
  de: {
    heading: 'Lass uns über deine nächsten Schritte sprechen',
    intro:
      'Du hast ein Business-Angebot, Ideen zur Verbesserung von Cojauny oder allgemeine Vorschläge? Sende uns eine Nachricht, das Gründerteam meldet sich innerhalb von zwei Werktagen.',
    banner: 'Nutze dieses Formular für Geschäftsanfragen, Produktverbesserungen, Vorschläge oder andere Themen.',
    form: {
      title: 'Schreib uns eine Nachricht',
      description:
        'Erzähl uns, wobei wir helfen können, und hinterlasse deine E-Mail-Adresse. Name und E-Mail sind Pflichtfelder.',
      success: 'Vielen Dank für deine Nachricht. Wir antworten dir bald von feedback@cojauny.com.',
      error: 'Deine Nachricht konnte nicht gesendet werden. Versuch es in ein paar Minuten erneut.',
      submit: 'Nachricht senden',
      fields: {
        name: 'Name',
        email: 'Email',
        topic: 'Betreff',
        message: 'Nachricht'
      },
      legalNotice: 'Wir speichern deine Nachricht in unserer sicheren Datenbank, um dir antworten zu können. Du kannst jederzeit die Löschung beantragen unter feedback@cojauny.com.'
    }
  },
  fr: {
    heading: 'Discutons de votre prochain projet',
    intro:
      "Une proposition commerciale, des idées pour améliorer Cojauny ou des suggestions pour les prochaines versions ? Laissez-nous un message et l'équipe fondatrice vous répondra sous deux jours ouvrables.",
    banner: 'Utilisez ce formulaire pour les propositions business, les améliorations produit, les suggestions ou tout autre sujet.',
    form: {
      title: 'Envoyez-nous un message',
      description:
        'Expliquez comment nous pouvons vous aider et laissez votre e-mail pour que nous puissions répondre. Le nom et l\'e-mail sont obligatoires.',
      success: 'Merci de nous avoir écrit. Nous vous répondrons très vite depuis feedback@cojauny.com.',
      error: "Nous n'avons pas pu envoyer votre message. Veuillez réessayer dans quelques minutes.",
      submit: 'Envoyer le message',
      fields: {
        name: 'Nom',
        email: 'Email',
        topic: 'Objet',
        message: 'Message'
      },
      legalNotice: 'Nous conserverons votre message dans notre base de données sécurisée afin de pouvoir vous répondre. Vous pouvez demander sa suppression à tout moment en écrivant à feedback@cojauny.com.'
    }
  }
};

export const getContactCopy = (locale: Locale): ContactPageCopy =>
  contactCopy[locale] ?? contactCopy[defaultLocale];
