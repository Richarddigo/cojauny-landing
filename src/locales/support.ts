import type { Locale } from './config';

interface SupportCopy {
  title: string;
  intro: string;
  contact: string;
  emailHint: string;
  sections: { heading: string; body: string }[];
  privacy: string;
  deletion: string;
  terms: string;
  faq: string;
}

export const supportCopy: Record<Locale, SupportCopy> = {
  en: {
    title: 'Cojauny app support',
    intro: 'Help with your account, flights, Jaunts and conversations in Cojauny.',
    contact: 'Contact the Cojauny team',
    emailHint:
      'Email us with a description of the problem. This link opens your email app; if none is configured, copy the address. This page does not send a message.',
    sections: [
      {
        heading: 'Before contacting us',
        body: 'Check your connection and installed app version. Close and reopen the app, then retry. If you cannot sign in, check that you are using the correct account and check your email spam folder for verification messages. Avoid deleting app data while you have unsent messages or drafts.',
      },
      {
        heading: 'What to include',
        body: 'Describe what you expected, what happened and the steps to reproduce it. Include your app version, device model, operating system, approximate time and any visible error. Share screenshots only after hiding personal information. Never send passwords, verification codes, encryption keys, payment details or a full boarding pass.',
      },
      {
        heading: 'Flights and Jaunts',
        body: 'Check the flight number, travel date and airport before reporting a missing flight or Jaunt. Explain which action failed, such as creating, joining or leaving a Jaunt. Cojauny helps people coordinate; contact your airline or transport provider directly about bookings, delays, refunds or lost property.',
      },
      {
        heading: 'Messages and notifications',
        body: 'Check notification permissions in your device settings and your notification preferences in Cojauny. Include whether the issue affects one conversation or all conversations. Do not send private chat content unless necessary, and remove other people’s personal information.',
      },
      {
        heading: 'Safety and abuse',
        body: 'Use the app’s report and block options where available. If you cannot access them, describe the incident by email with only the information needed to investigate. This support channel is not an emergency service: for immediate danger, contact local emergency services or airport staff.',
      },
      {
        heading: 'Privacy and account deletion',
        body: 'Use the links below for privacy information and account deletion instructions. For account-related requests, write from the email associated with your account when possible. Do not send identity documents unless the team requests them through an appropriate channel.',
      },
      {
        heading: 'After you contact us',
        body: 'Keep your sent email and continue in the same thread if you have more information. Response times depend on availability; no immediate response or resolution time is guaranteed.',
      },
    ],
    privacy: 'Privacy policy',
    deletion: 'Delete your account',
    terms: 'Terms of service',
    faq: 'Frequently asked questions',
  },
  es: {
    title: 'Soporte de la app Cojauny',
    intro: 'Ayuda con tu cuenta, vuelos, Jaunts y conversaciones en Cojauny.',
    contact: 'Contactar con el equipo de Cojauny',
    emailHint:
      'Escríbenos describiendo el problema. Este enlace abre tu aplicación de correo; si no tienes una configurada, copia la dirección. Esta página no envía un mensaje.',
    sections: [
      {
        heading: 'Antes de contactar',
        body: 'Comprueba tu conexión y la versión instalada. Cierra y vuelve a abrir la app e inténtalo de nuevo. Si no puedes acceder, comprueba que usas la cuenta correcta y revisa el correo no deseado por si hay mensajes de verificación. Evita borrar los datos de la app si tienes mensajes sin enviar o borradores.',
      },
      {
        heading: 'Qué información incluir',
        body: 'Describe qué esperabas, qué ocurrió y los pasos para reproducirlo. Incluye la versión de la app, modelo del dispositivo, sistema operativo, hora aproximada y cualquier error visible. Oculta los datos personales antes de compartir capturas. Nunca envíes contraseñas, códigos de verificación, claves de cifrado, datos de pago ni una tarjeta de embarque completa.',
      },
      {
        heading: 'Vuelos y Jaunts',
        body: 'Comprueba el número de vuelo, la fecha y el aeropuerto antes de comunicar que falta un vuelo o Jaunt. Explica qué acción falló, como crear, unirte o salir de un Jaunt. Cojauny ayuda a coordinarse; contacta directamente con la aerolínea o el transportista para reservas, retrasos, reembolsos u objetos perdidos.',
      },
      {
        heading: 'Mensajes y notificaciones',
        body: 'Revisa los permisos de notificaciones del dispositivo y tus preferencias en Cojauny. Indica si el problema afecta a una conversación o a todas. No envíes contenido privado del chat salvo que sea necesario y elimina los datos personales de otras personas.',
      },
      {
        heading: 'Seguridad y abusos',
        body: 'Utiliza las opciones de denunciar y bloquear de la app cuando estén disponibles. Si no puedes acceder a ellas, describe el incidente por correo con solo la información necesaria para investigarlo. Este canal no es un servicio de emergencias: ante un peligro inmediato, contacta con las emergencias locales o el personal del aeropuerto.',
      },
      {
        heading: 'Privacidad y eliminación de cuenta',
        body: 'Consulta los enlaces siguientes para la información de privacidad y las instrucciones de eliminación de cuenta. Para solicitudes sobre tu cuenta, escribe desde su correo asociado cuando sea posible. No envíes documentos de identidad salvo que el equipo los solicite por un canal adecuado.',
      },
      {
        heading: 'Después de contactar',
        body: 'Conserva tu correo enviado y continúa en el mismo hilo si tienes más información. Los plazos dependen de la disponibilidad; no se garantiza una respuesta inmediata ni un plazo de resolución.',
      },
    ],
    privacy: 'Política de privacidad',
    deletion: 'Eliminar tu cuenta',
    terms: 'Términos de uso',
    faq: 'Preguntas frecuentes',
  },
  de: {
    title: 'Support für die Cojauny-App',
    intro: 'Hilfe zu deinem Konto, Flügen, Jaunts und Unterhaltungen in Cojauny.',
    contact: 'Das Cojauny-Team kontaktieren',
    emailHint:
      'Beschreibe uns das Problem per E-Mail. Dieser Link öffnet dein E-Mail-Programm. Ist keines eingerichtet, kopiere die Adresse. Diese Seite versendet keine Nachricht.',
    sections: [
      {
        heading: 'Vor der Kontaktaufnahme',
        body: 'Prüfe deine Verbindung und die installierte App-Version. Schließe die App, öffne sie erneut und versuche es noch einmal. Prüfe bei Anmeldeproblemen das verwendete Konto und den Spamordner auf Bestätigungsnachrichten. Lösche keine App-Daten, wenn du noch ungesendete Nachrichten oder Entwürfe hast.',
      },
      {
        heading: 'Hilfreiche Angaben',
        body: 'Beschreibe das erwartete und tatsächliche Verhalten sowie die Schritte zum Nachstellen. Nenne App-Version, Gerätemodell, Betriebssystem, ungefähre Uhrzeit und angezeigte Fehler. Verdecke persönliche Daten in Screenshots. Sende niemals Passwörter, Bestätigungscodes, Verschlüsselungsschlüssel, Zahlungsdaten oder eine vollständige Bordkarte.',
      },
      {
        heading: 'Flüge und Jaunts',
        body: 'Prüfe Flugnummer, Reisedatum und Flughafen, bevor du einen fehlenden Flug oder Jaunt meldest. Beschreibe die fehlgeschlagene Aktion, etwa Erstellen, Beitreten oder Verlassen eines Jaunts. Cojauny hilft bei der Abstimmung. Wende dich wegen Buchungen, Verspätungen, Erstattungen oder Fundsachen direkt an die Fluggesellschaft oder den Beförderungsanbieter.',
      },
      {
        heading: 'Nachrichten und Benachrichtigungen',
        body: 'Prüfe die Benachrichtigungsberechtigungen des Geräts und deine Einstellungen in Cojauny. Gib an, ob eine oder alle Unterhaltungen betroffen sind. Sende private Chat-Inhalte nur bei Bedarf und entferne persönliche Daten anderer Personen.',
      },
      {
        heading: 'Sicherheit und Missbrauch',
        body: 'Nutze die Melde- und Blockierfunktionen der App, sofern verfügbar. Falls du sie nicht erreichen kannst, beschreibe den Vorfall per E-Mail mit den zur Untersuchung nötigen Angaben. Dieser Kanal ist kein Notdienst. Bei unmittelbarer Gefahr kontaktiere den örtlichen Notruf oder das Flughafenpersonal.',
      },
      {
        heading: 'Datenschutz und Kontolöschung',
        body: 'Die folgenden Links führen zu Datenschutzinformationen und zur Anleitung für die Kontolöschung. Schreibe bei Kontoanfragen möglichst von der zugehörigen E-Mail-Adresse. Sende Ausweisdokumente nur, wenn das Team sie über einen geeigneten Kanal anfordert.',
      },
      {
        heading: 'Nach der Kontaktaufnahme',
        body: 'Bewahre deine gesendete E-Mail auf und ergänze weitere Angaben im selben Verlauf. Die Antwortzeit hängt von der Verfügbarkeit ab. Eine sofortige Antwort oder eine bestimmte Lösungsfrist wird nicht garantiert.',
      },
    ],
    privacy: 'Datenschutz',
    deletion: 'Konto löschen',
    terms: 'Nutzungsbedingungen',
    faq: 'Häufige Fragen',
  },
  fr: {
    title: 'Assistance pour l’application Cojauny',
    intro:
      'De l’aide pour votre compte, vos vols, vos Jaunts et vos conversations dans Cojauny.',
    contact: 'Contacter l’équipe Cojauny',
    emailHint:
      'Décrivez-nous le problème par e-mail. Ce lien ouvre votre application de messagerie ; si aucune n’est configurée, copiez l’adresse. Cette page n’envoie aucun message.',
    sections: [
      {
        heading: 'Avant de nous contacter',
        body: 'Vérifiez votre connexion et la version installée. Fermez puis rouvrez l’application et réessayez. En cas de problème de connexion au compte, vérifiez le compte utilisé et cherchez les messages de vérification dans les courriers indésirables. Évitez d’effacer les données de l’application si vous avez des messages non envoyés ou des brouillons.',
      },
      {
        heading: 'Informations utiles',
        body: 'Décrivez le résultat attendu, ce qui s’est passé et les étapes pour reproduire le problème. Indiquez la version, le modèle de l’appareil, le système, l’heure approximative et les erreurs affichées. Masquez les données personnelles sur les captures. N’envoyez jamais de mots de passe, codes de vérification, clés de chiffrement, données de paiement ou cartes d’embarquement complètes.',
      },
      {
        heading: 'Vols et Jaunts',
        body: 'Vérifiez le numéro de vol, la date et l’aéroport avant de signaler un vol ou un Jaunt manquant. Précisez l’action qui a échoué, par exemple créer, rejoindre ou quitter un Jaunt. Cojauny facilite la coordination. Contactez directement la compagnie aérienne ou le transporteur pour les réservations, retards, remboursements ou objets perdus.',
      },
      {
        heading: 'Messages et notifications',
        body: 'Vérifiez les autorisations de notification de l’appareil et vos préférences dans Cojauny. Précisez si une seule conversation ou toutes sont concernées. Ne transmettez du contenu privé que si nécessaire et retirez les données personnelles des autres personnes.',
      },
      {
        heading: 'Sécurité et abus',
        body: 'Utilisez les fonctions de signalement et de blocage de l’application lorsqu’elles sont disponibles. Si vous ne pouvez pas y accéder, décrivez l’incident par e-mail avec uniquement les informations nécessaires à l’enquête. Ce canal n’est pas un service d’urgence. En cas de danger immédiat, contactez les secours locaux ou le personnel de l’aéroport.',
      },
      {
        heading: 'Confidentialité et suppression du compte',
        body: 'Les liens ci-dessous expliquent la confidentialité et la suppression du compte. Pour une demande concernant votre compte, écrivez si possible depuis l’adresse associée. N’envoyez des pièces d’identité que si l’équipe les demande par un canal approprié.',
      },
      {
        heading: 'Après votre message',
        body: 'Conservez votre e-mail envoyé et poursuivez dans le même fil si vous avez des précisions. Les délais dépendent de la disponibilité ; aucune réponse immédiate ni aucun délai de résolution ne sont garantis.',
      },
    ],
    privacy: 'Politique de confidentialité',
    deletion: 'Supprimer votre compte',
    terms: 'Conditions d’utilisation',
    faq: 'Questions fréquentes',
  },
};
