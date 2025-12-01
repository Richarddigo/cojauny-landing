// Email templates and helpers ported from Supabase Edge Function

const supportedLocales = ['es', 'en', 'de', 'fr'];
const siteUrl = 'https://www.cojauny.com'; // Hardcoded or from config
const logoUrl = `${siteUrl}/assets/logo/mountain_black.png`;

function normalizeLocale(requested) {
    if (!requested) return 'es';
    if (supportedLocales.includes(requested)) {
        return requested;
    }
    return 'es';
}

const emailSignatureHtml = (locale) => {
    const lines = {
        es: {
            tagline: 'Cojauny — Ahorra en cada viaje al aeropuerto',
            contactHtml: '¿Necesitas ayuda? Escríbenos a <a href="mailto:support@cojauny.com" style="color:#0ea5e9;text-decoration:none;">support@cojauny.com</a>'
        },
        en: {
            tagline: 'Cojauny — Save on every trip to the airport',
            contactHtml: 'Need help? Contact us at <a href="mailto:support@cojauny.com" style="color:#0ea5e9;text-decoration:none;">support@cojauny.com</a>'
        },
        de: {
            tagline: 'Cojauny — Spare bei jeder Fahrt zum Flughafen',
            contactHtml: 'Brauchen Sie Hilfe? Kontaktieren Sie uns unter <a href="mailto:support@cojauny.com" style="color:#0ea5e9;text-decoration:none;">support@cojauny.com</a>'
        },
        fr: {
            tagline: "Cojauny — Économise sur chaque trajet vers l'aéroport",
            contactHtml: 'Besoin d\'aide ? Contactez-nous à <a href="mailto:support@cojauny.com" style="color:#0ea5e9;text-decoration:none;">support@cojauny.com</a>'
        }
    };

    const pick = lines[locale] ?? lines.es;
    const privacyUrl = `${siteUrl}/${locale}/legal/privacy`;
    const termsUrl = `${siteUrl}/${locale}/legal/terms`;

    const labels = {
        es: { privacy: 'Privacidad', terms: 'Términos' },
        en: { privacy: 'Privacy', terms: 'Terms' },
        de: { privacy: 'Datenschutz', terms: 'Nutzungsbedingungen' },
        fr: { privacy: 'Confidentialité', terms: 'Conditions' }
    };

    const pickLabels = labels[locale] ?? labels.es;

    return `
    <div style="margin-top:32px;padding-top:24px;border-top:2px solid #e5e7eb;">
      <table cellpadding="0" cellspacing="0" border="0" style="font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;">
        <tr>
          <td style="padding-right:16px;vertical-align:top;">
            <img src="${logoUrl}" width="48" height="48" alt="Cojauny" style="display:block;border:0;" />
          </td>
          <td style="vertical-align:top;">
            <div style="font-weight:700;font-size:16px;color:#0f172a;margin-bottom:4px;">${pick.tagline}</div>
            <div style="font-size:12px;color:#9ca3af;margin-top:4px;">${pick.contactHtml}</div>
            <div style="font-size:12px;color:#9ca3af;margin-top:6px;"><a href="${privacyUrl}" style="color:#0ea5e9;text-decoration:none;">${pickLabels.privacy}</a> · <a href="${termsUrl}" style="color:#0ea5e9;text-decoration:none;">${pickLabels.terms}</a></div>
          </td>
        </tr>
      </table>
    </div>
  `;
};

const emailSignatureText = (locale) => {
    const lines = {
        es: { tagline: 'Cojauny — Ahorra en cada viaje al aeropuerto', contact: '¿Necesitas ayuda? Escríbenos a support@cojauny.com' },
        en: { tagline: 'Cojauny — Save on every trip to the airport', contact: 'Need help? Contact us at support@cojauny.com' },
        de: { tagline: 'Cojauny — Spare bei jeder Fahrt zum Flughafen', contact: 'Brauchen Sie Hilfe? Kontaktieren Sie uns unter support@cojauny.com' },
        fr: { tagline: "Cojauny — Économise sur chaque trajet vers l'aéroport", contact: "Besoin d'aide ? Contactez-nous à support@cojauny.com" }
    };

    const pick = lines[locale] ?? lines.es;
    const privacyUrl = `${siteUrl}/${locale}/legal/privacy`;
    const termsUrl = `${siteUrl}/${locale}/legal/terms`;
    const labels = {
        es: { privacy: 'Privacidad', terms: 'Términos' },
        en: { privacy: 'Privacy', terms: 'Terms' },
        de: { privacy: 'Datenschutz', terms: 'Nutzungsbedingungen' },
        fr: { privacy: 'Confidentialité', terms: 'Conditions' }
    };
    const pickLabels = labels[locale] ?? labels.es;
    return `\n---\n${pick.tagline}\n${siteUrl}\n${pick.contact}\n${pickLabels.privacy}: ${privacyUrl}\n${pickLabels.terms}: ${termsUrl}\n`;
};

const localizedTemplates = {
    'beta-confirmation': {
        es: {
            subject: 'Bienvenido a la lista de espera de Cojauny',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hola <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Gracias por unirte a la lista de espera de <strong style=\"color:#0ea5e9;\">Cojauny</strong>. Te avisaremos por email cuando la beta esté disponible.</p><div style=\"background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);border-left:4px solid #0ea5e9;padding:20px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 12px 0;font-weight:600;color:#0c4a6e;font-size:15px;\">Avanza en la lista compartiendo tu enlace:</p><div style=\"background:#ffffff;padding:14px;border-radius:6px;margin-top:12px;\"><a href=\"{{referral_link}}\" style=\"color:#0369a1;font-weight:600;font-size:14px;word-break:break-all;text-decoration:none;\">{{referral_link}}</a></div><p style=\"margin:12px 0 0 0;font-size:13px;color:#475569;\">Cuantos más amigos se registren con tu enlace, antes tendrás acceso a la beta.</p></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">¿Preguntas? Responde a este correo.</p></div>",
            text: 'Hola {{name}},\n\nGracias por unirte a la lista de espera de Cojauny. Te avisaremos por email cuando la beta esté disponible.\n\nAVANZA EN LA LISTA:\nComparte tu enlace personal:\n{{referral_link}}\n\nCuantos más amigos se registren con tu enlace, antes tendrás acceso.\n\n¿Preguntas? Responde a este correo.'
        },
        en: {
            subject: 'Welcome to the Cojauny Waitlist',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hi <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Thanks for joining the <strong style=\"color:#0ea5e9;\">Cojauny</strong> waitlist. We'll email you when the beta is ready.</p><div style=\"background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);border-left:4px solid #0ea5e9;padding:20px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 12px 0;font-weight:600;color:#0c4a6e;font-size:15px;\">Move up the list by sharing your link:</p><div style=\"background:#ffffff;padding:14px;border-radius:6px;margin-top:12px;\"><a href=\"{{referral_link}}\" style=\"color:#0369a1;font-weight:600;font-size:14px;word-break:break-all;text-decoration:none;\">{{referral_link}}</a></div><p style=\"margin:12px 0 0 0;font-size:13px;color:#475569;\">The more friends sign up with your link, the sooner you'll get beta access.</p></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Questions? Just reply to this email.</p></div>",
            text: 'Hi {{name}},\n\nThanks for joining the Cojauny waitlist. We\'ll email you when the beta is ready.\n\nMOVE UP THE LIST:\nShare your personal link:\n{{referral_link}}\n\nThe more friends sign up with your link, the sooner you\'ll get access.\n\nQuestions? Reply to this email.'
        },
        de: {
            subject: 'Willkommen auf der Cojauny-Warteliste',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hallo <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Danke, dass du der <strong style=\"color:#0ea5e9;\">Cojauny</strong>-Warteliste beigetreten bist. Wir senden dir eine E-Mail, wenn die Beta bereit ist.</p><div style=\"background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);border-left:4px solid #0ea5e9;padding:20px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 12px 0;font-weight:600;color:#0c4a6e;font-size:15px;\">Rücke in der Liste nach vorne:</p><div style=\"background:#ffffff;padding:14px;border-radius:6px;margin-top:12px;\"><a href=\"{{referral_link}}\" style=\"color:#0369a1;font-weight:600;font-size:14px;word-break:break-all;text-decoration:none;\">{{referral_link}}</a></div><p style=\"margin:12px 0 0 0;font-size:13px;color:#475569;\">Je mehr Freunde sich über deinen Link registrieren, desto früher erhältst du Beta-Zugang.</p></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Fragen? Antworte einfach auf diese E-Mail.</p></div>",
            text: 'Hallo {{name}},\n\nDanke für die Anmeldung zur Cojauny-Warteliste. Wir benachrichtigen dich, wenn die Beta bereit ist.\n\nRÜCKE NACH VORNE:\nTeile deinen persönlichen Link:\n{{referral_link}}\n\nJe mehr Freunde sich registrieren, desto schneller erhältst du Zugang.\n\nFragen? Antworte auf diese E-Mail.'
        },
        fr: {
            subject: 'Bienvenue sur la liste d\'attente Cojauny',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Bonjour <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Merci de rejoindre la liste d'attente <strong style=\"color:#0ea5e9;\">Cojauny</strong>. Nous vous enverrons un email lorsque la bêta sera prête.</p><div style=\"background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);border-left:4px solid #0ea5e9;padding:20px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 12px 0;font-weight:600;color:#0c4a6e;font-size:15px;\">Avancez dans la liste en partageant votre lien:</p><div style=\"background:#ffffff;padding:14px;border-radius:6px;margin-top:12px;\"><a href=\"{{referral_link}}\" style=\"color:#0369a1;font-weight:600;font-size:14px;word-break:break-all;text-decoration:none;\">{{referral_link}}</a></div><p style=\"margin:12px 0 0 0;font-size:13px;color:#475569;\">Plus vos amis s'inscrivent via votre lien, plus vite vous aurez accès à la bêta.</p></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Des questions? Répondez simplement à cet email.</p></div>",
            text: 'Bonjour {{name}},\n\nMerci de rejoindre la liste d\'attente Cojauny. Nous vous préviendrons quand la bêta sera prête.\n\nAVANCEZ DANS LA LISTE:\nPartagez votre lien personnel:\n{{referral_link}}\n\nPlus d\'inscriptions = accès plus rapide.\n\nQuestions? Répondez à cet email.'
        }
    },
    'contact-confirmation': {
        es: {
            subject: 'Hemos recibido tu mensaje, {{name}}',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hola <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos pronto.</p><div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">📋 Tu mensaje:</p><p style=\"margin:0 0 8px 0;color:#475569;font-size:13px;\"><strong>Asunto:</strong> {{topic}}</p><pre style=\"white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;color:#1f2937;background:#ffffff;padding:12px;border-radius:6px;\">{{message}}</pre></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Responde directamente a este correo para continuar la conversación.</p></div>",
            text: "Hola {{name}},\n\nGracias por contactarnos. Hemos recibido tu mensaje y te responderemos pronto.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 TU MENSAJE:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nAsunto: {{topic}}\n\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nResponde directamente a este correo para continuar la conversación."
        },
        en: {
            subject: 'We received your message, {{name}}',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hi <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Thanks for reaching out. We've received your message and will get back to you soon.</p><div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">📋 Your message:</p><p style=\"margin:0 0 8px 0;color:#475569;font-size:13px;\"><strong>Subject:</strong> {{topic}}</p><pre style=\"white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;color:#1f2937;background:#ffffff;padding:12px;border-radius:6px;\">{{message}}</pre></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Reply directly to this email to continue the conversation.</p></div>",
            text: "Hi {{name}},\n\nThanks for reaching out. We've received your message and will get back to you soon.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 YOUR MESSAGE:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nSubject: {{topic}}\n\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nReply directly to this email to continue the conversation."
        },
        de: {
            subject: 'Wir haben deine Nachricht erhalten, {{name}}',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hallo <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Danke für deine Nachricht. Wir haben sie erhalten und werden uns bald bei dir melden.</p><div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">📋 Deine Nachricht:</p><p style=\"margin:0 0 8px 0;color:#475569;font-size:13px;\"><strong>Betreff:</strong> {{topic}}</p><pre style=\"white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;color:#1f2937;background:#ffffff;padding:12px;border-radius:6px;\">{{message}}</pre></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Antworte direkt auf diese E-Mail, um das Gespräch fortzusetzen.</p></div>",
            text: "Hallo {{name}},\n\nDanke für deine Nachricht. Wir haben sie erhalten und werden uns bald bei dir melden.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 DEINE NACHRICHT:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nBetreff: {{topic}}\n\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nAntworte direkt auf diese E-Mail, um das Gespräch fortzusetzen."
        },
        fr: {
            subject: 'Nous avons reçu votre message, {{name}}',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Bonjour <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Merci de nous avoir contactés. Nous avons bien reçu votre message et vous répondrons bientôt.</p><div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">📋 Votre message:</p><p style=\"margin:0 0 8px 0;color:#475569;font-size:13px;\"><strong>Sujet:</strong> {{topic}}</p><pre style=\"white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;color:#1f2937;background:#ffffff;padding:12px;border-radius:6px;\">{{message}}</pre></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Répondez directement à cet e-mail pour continuer la conversation.</p></div>",
            text: "Bonjour {{name}},\n\nMerci de nous avoir contactés. Nous avons bien reçu votre message et vous répondrons bientôt.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 VOTRE MESSAGE:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nSujet: {{topic}}\n\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nRépondez directement à cet e-mail pour continuer la conversation."
        }
    },
    'feedback-confirmation': {
        es: {
            subject: 'Gracias por tu feedback, {{name}}',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hola <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Gracias por tu comentario sobre Cojauny. Lo hemos recibido y nuestro equipo de producto lo está revisando.</p><div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">📋 Tu feedback:</p><pre style=\"white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;color:#1f2937;background:#ffffff;padding:12px;border-radius:6px;\">{{message}}</pre></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Si quieres añadir más contexto, responde a este correo.</p></div>",
            text: "Hola {{name}},\n\nGracias por tu comentario sobre Cojauny. Lo hemos recibido y nuestro equipo de producto lo está revisando.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 TU FEEDBACK:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nSi quieres añadir más contexto, responde a este correo."
        },
        en: {
            subject: 'Thanks for your feedback, {{name}}',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hi <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Thanks for your feedback about Cojauny. We've received it and our product team is reviewing it.</p><div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">📋 Your feedback:</p><pre style=\"white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;color:#1f2937;background:#ffffff;padding:12px;border-radius:6px;\">{{message}}</pre></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Reply to this email if you'd like to add more context.</p></div>",
            text: "Hi {{name}},\n\nThanks for your feedback about Cojauny. We've received it and our product team is reviewing it.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 YOUR FEEDBACK:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nReply to this email if you'd like to add more context."
        },
        de: {
            subject: 'Danke für dein Feedback, {{name}}',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hallo <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Danke für dein Feedback zu Cojauny. Wir haben es erhalten und unser Produktteam prüft es.</p><div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">📋 Dein Feedback:</p><pre style=\"white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;color:#1f2937;background:#ffffff;padding:12px;border-radius:6px;\">{{message}}</pre></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Antworte auf diese E-Mail, um mehr Kontext hinzuzufügen.</p></div>",
            text: "Hallo {{name}},\n\nDanke für dein Feedback zu Cojauny. Wir haben es erhalten und unser Produktteam prüft es.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 DEIN FEEDBACK:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nAntworte auf diese E-Mail, um mehr Kontext hinzuzufügen."
        },
        fr: {
            subject: 'Merci pour votre retour, {{name}}',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Bonjour <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Merci pour votre retour sur Cojauny. Nous l'avons bien reçu et notre équipe produit l'examine.</p><div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">📋 Votre retour:</p><pre style=\"white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;color:#1f2937;background:#ffffff;padding:12px;border-radius:6px;\">{{message}}</pre></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Répondez à cet e-mail pour ajouter plus de contexte.</p></div>",
            text: "Bonjour {{name}},\n\nMerci pour votre retour sur Cojauny. Nous l'avons bien reçu et notre équipe produit l'examine.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 VOTRE RETOUR:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nRépondez à cet e-mail pour ajouter plus de contexte."
        }
    },
    'idea-confirmation': {
        es: {
            subject: 'Gracias por tu idea, {{name}}',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hola <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Gracias por compartir tu idea para Cojauny. La hemos recibido y la incluiremos en nuestro proceso de evaluación.</p><div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">💡 Tu idea:</p><pre style=\"white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;color:#1f2937;background:#ffffff;padding:12px;border-radius:6px;\">{{message}}</pre></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Si puedes compartir casos de uso o métricas, responde a este correo.</p></div>",
            text: "Hola {{name}},\n\nGracias por compartir tu idea para Cojauny. La hemos recibido y la incluiremos en nuestro proceso de evaluación.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💡 TU IDEA:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nResponde a este correo para añadir información adicional."
        },
        en: {
            subject: 'Thanks for your idea, {{name}}',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hi <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Thanks for sharing your idea for Cojauny. We received it and will consider it in our roadmap discussions.</p><div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">💡 Your idea:</p><pre style=\"white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;color:#1f2937;background:#ffffff;padding:12px;border-radius:6px;\">{{message}}</pre></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Reply with any additional examples or metrics.</p></div>",
            text: "Hi {{name}},\n\nThanks for sharing your idea for Cojauny. We received it and will consider it in our roadmap.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💡 YOUR IDEA:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nReply to add examples or metrics."
        },
        de: {
            subject: 'Danke für deine Idee, {{name}}',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hallo <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Danke, dass du deine Idee für Cojauny geteilt hast. Wir haben sie erhalten und werden sie in unsere Produktplanung einbeziehen.</p><div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">💡 Deine Idee:</p><pre style=\"white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;color:#1f2937;background:#ffffff;padding:12px;border-radius:6px;\">{{message}}</pre></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Antworte, um weitere Beispiele oder Metriken zu teilen.</p></div>",
            text: "Hallo {{name}},\n\nDanke für deine Idee für Cojauny. Wir haben sie erhalten und prüfen sie.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💡 DEINE IDEE:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nAntworte, um Beispiele oder Metriken hinzuzufügen."
        },
        fr: {
            subject: 'Merci pour votre idée, {{name}}',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Bonjour <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Merci d'avoir partagé votre idée pour Cojauny. Nous l'avons reçue et l'intégrerons à notre réflexion produit.</p><div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">💡 Votre idée:</p><pre style=\"white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;color:#1f2937;background:#ffffff;padding:12px;border-radius:6px;\">{{message}}</pre></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Répondez pour ajouter des exemples ou des métriques.</p></div>",
            text: "Bonjour {{name}},\n\nMerci pour votre idée pour Cojauny. Nous l'avons reçue et l'examinerons.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💡 VOTRE IDÉE:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nRépondez pour ajouter des exemples."
        }
    },
    'business-proposal-confirmation': {
        es: {
            subject: 'Gracias por tu propuesta comercial, {{name}}',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hola <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Gracias por enviarnos tu propuesta comercial. Nuestro equipo de partnerships la revisará y contactará si hay interés.</p><div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">📊 Tu propuesta:</p><pre style=\"white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;color:#1f2937;background:#ffffff;padding:12px;border-radius:6px;\">{{message}}</pre></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Si quieres adjuntar documentación adicional, responde a este correo.</p></div>",
            text: "Hola {{name}},\n\nGracias por tu propuesta comercial. Nuestro equipo de partnerships la revisará y contactará si hay interés.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 TU PROPUESTA:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nResponde para adjuntar documentación."
        },
        en: {
            subject: 'Thanks for your business proposal, {{name}}',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hi <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Thanks for sending us your business proposal. Our partnerships team will review it and reach out if there's interest.</p><div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">📊 Your proposal:</p><pre style=\"white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;color:#1f2937;background:#ffffff;padding:12px;border-radius:6px;\">{{message}}</pre></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Reply to attach additional documents.</p></div>",
            text: "Hi {{name}},\n\nThanks for your business proposal. Our team will review it and reach out if we want to proceed.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 YOUR PROPOSAL:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nReply to attach documents."
        },
        de: {
            subject: 'Danke für Ihren Geschäftsvorschlag, {{name}}',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hallo <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Danke für Ihren Geschäftsvorschlag. Unser Partnerships-Team wird diesen prüfen und sich melden, wenn Interesse besteht.</p><div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">📊 Ihr Vorschlag:</p><pre style=\"white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;color:#1f2937;background:#ffffff;padding:12px;border-radius:6px;\">{{message}}</pre></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Antworten Sie, um zusätzliche Dokumente anzuhängen.</p></div>",
            text: "Hallo {{name}},\n\nDanke für Ihren Geschäftsvorschlag. Unser Team prüft ihn und meldet sich, falls wir weitergehen möchten.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 IHR VORSCHLAG:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nAntworten Sie, um Dokumente anzuhängen."
        },
        fr: {
            subject: 'Merci pour votre proposition commerciale, {{name}}',
            html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Bonjour <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Merci pour votre proposition commerciale. Notre équipe partnerships l'examinera et vous contactera si nous souhaitons poursuivre.</p><div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:8px;margin:24px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">📊 Votre proposition:</p><pre style=\"white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;color:#1f2937;background:#ffffff;padding:12px;border-radius:6px;\">{{message}}</pre></div><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Répondez pour joindre des documents supplémentaires.</p></div>",
            text: "Bonjour {{name}},\n\nMerci pour votre proposition commerciale. Notre équipe l'examinera et vous contactera si nous souhaitons avancer.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 VOTRE PROPOSITION:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nRépondez pour joindre des documents."
        }
    }
};

const feedbackInternalContent = {
    subject: 'Nuevo feedback recibido',
    html:
        "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;\">" +
        `<div style="display:flex;gap:12px;align-items:center;margin-bottom:16px;padding-bottom:16px;border-bottom:2px solid #e5e7eb;"><img src="${logoUrl}" width="48" alt="Cojauny" style="display:block;border:0" /><div style="font-weight:700;font-size:18px;">Cojauny — Feedback</div></div>` +
        "<p style=\"font-size:15px;font-weight:600;color:#0f172a;\">Nuevo feedback del producto</p>" +
        "<table style=\"width:100%;border-collapse:collapse;margin:16px 0;\"><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">De:</td><td style=\"padding:8px 0;font-size:14px;\">{{name}}</td></tr><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">Email:</td><td style=\"padding:8px 0;font-size:14px;\"><a href=\"mailto:{{email}}\" style=\"color:#0ea5e9;text-decoration:none;\">{{email}}</a></td></tr><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">Usecase:</td><td style=\"padding:8px 0;font-size:14px;\">{{usecase}}</td></tr><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">Idioma:</td><td style=\"padding:8px 0;font-size:14px;\">{{locale}}</td></tr></table>" +
        "<div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:4px;margin:16px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">Mensaje:</p><pre style=\"white-space:pre-wrap;font-family:'Courier New',monospace;font-size:14px;margin:0;color:#1f2937;\">{{message}}</pre></div>" +
        "<p style=\"margin-top:24px;font-size:12px;color:#9ca3af;\">Responde directamente al usuario en: {{email}}</p>" +
        "</div>",
    text:
        '=== NUEVO FEEDBACK ===\n\nDe: {{name}}\nEmail: {{email}}\nUsecase: {{usecase}}\nIdioma: {{locale}}\n\n--- MENSAJE ---\n{{message}}\n\nResponde a: {{email}}\n\nCojauny · ' + siteUrl
};

const staticTemplates = {
    'contact-internal': {
        subject: 'Nueva solicitud de soporte',
        html:
            "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;\">" +
            `<div style="display:flex;gap:12px;align-items:center;margin-bottom:16px;padding-bottom:16px;border-bottom:2px solid #e5e7eb;"><img src="${logoUrl}" width="48" alt="Cojauny" style="display:block;border:0" /><div style="font-weight:700;font-size:18px;">Cojauny — Soporte</div></div>` +
            "<p style=\"font-size:15px;font-weight:600;color:#0f172a;\">Nueva solicitud de contacto</p>" +
            "<table style=\"width:100%;border-collapse:collapse;margin:16px 0;\"><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">De:</td><td style=\"padding:8px 0;font-size:14px;\">{{name}}</td></tr><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">Email:</td><td style=\"padding:8px 0;font-size:14px;\"><a href=\"mailto:{{email}}\" style=\"color:#0ea5e9;text-decoration:none;\">{{email}}</a></td></tr><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">Asunto:</td><td style=\"padding:8px 0;font-size:14px;\">{{topic}}</td></tr><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">Idioma:</td><td style=\"padding:8px 0;font-size:14px;\">{{locale}}</td></tr></table>" +
            "<div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:4px;margin:16px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">Mensaje:</p><pre style=\"white-space:pre-wrap;font-family:'Courier New',monospace;font-size:14px;margin:0;color:#1f2937;\">{{message}}</pre></div>" +
            "<p style=\"margin-top:24px;font-size:12px;color:#9ca3af;\">Responde directamente al usuario en: {{email}}</p>" +
            "</div>",
        text:
            '=== NUEVA SOLICITUD DE SOPORTE ===\n\nDe: {{name}}\nEmail: {{email}}\nAsunto: {{topic}}\nIdioma: {{locale}}\n\n--- MENSAJE ---\n{{message}}\n\nResponde a: {{email}}\n\nCojauny · ' + siteUrl
    },
    'feedback-internal': feedbackInternalContent,
    'idea-internal': {
        subject: 'Nueva idea recibida',
        html: feedbackInternalContent.html.replace('Feedback', 'Idea'),
        text: feedbackInternalContent.text.replace('FEEDBACK', 'IDEA')
    },
    'business-proposal-internal': {
        subject: 'Nueva propuesta comercial recibida',
        html: feedbackInternalContent.html.replace('Feedback', 'Propuesta comercial'),
        text: feedbackInternalContent.text.replace('FEEDBACK', 'PROPUESTA COMERCIAL')
    },
    'beta-internal': {
        subject: 'New beta signup - {{email}}',
        html:
            "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;\">" +
            `<div style="display:flex;gap:12px;align-items:center;margin-bottom:16px;padding-bottom:16px;border-bottom:2px solid #e5e7eb;"><img src="${logoUrl}" width="48" alt="Cojauny" style="display:block;border:0" /><div style="font-weight:700;font-size:18px;">Cojauny — Beta</div></div>` +
            "<p style=\"font-size:15px;font-weight:600;color:#0f172a;\">New beta signup</p>" +
            "<table style=\"width:100%;border-collapse:collapse;margin:16px 0;\"><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">Email:</td><td style=\"padding:8px 0;font-size:14px;\">{{email}}</td></tr><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">Name:</td><td style=\"padding:8px 0;font-size:14px;\">{{name}}</td></tr><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">Usecase:</td><td style=\"padding:8px 0;font-size:14px;\">{{usecase}}</td></tr><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">Language:</td><td style=\"padding:8px 0;font-size:14px;\">{{language}}</td></tr></table>" +
            "<div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:4px;margin:16px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">Saved data (JSON):</p><pre style=\"white-space:pre-wrap;font-family:'Courier New',monospace;font-size:12px;margin:0;color:#1f2937;\">{{message}}</pre></div>" +
            "</div>",
        text:
            'New beta signup\n\nEmail: {{email}}\nName: {{name}}\nUsecase: {{usecase}}\nLanguage: {{language}}\n\nData: {{message}}\n\nCojauny · ' + siteUrl
    }
};

const templateSenders = {
    'beta-confirmation': 'beta',
    'feedback-confirmation': 'feedback',
    'idea-confirmation': 'feedback',
    'business-proposal-confirmation': 'feedback',
    'contact-confirmation': 'support',
    'contact-internal': 'support',
    'feedback-internal': 'feedback',
    'idea-internal': 'feedback',
    'business-proposal-internal': 'feedback',
    'beta-internal': 'beta'
};

function resolveTemplate(key, locale) {
    if (key in localizedTemplates) {
        const localized = localizedTemplates[key];
        return localized[locale] ?? localized.es;
    }
    return staticTemplates[key];
}

function render(content, variables) {
    const replace = (input) =>
        input.replace(/{{(\w+)}}/g, (_, key) => variables[key] ?? '');
    return {
        subject: replace(content.subject),
        html: replace(content.html),
        text: replace(content.text)
    };
}

module.exports = {
    normalizeLocale,
    resolveTemplate,
    render,
    emailSignatureHtml,
    emailSignatureText,
    templateSenders
};
