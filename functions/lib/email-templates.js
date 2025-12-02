// Email templates and helpers - Optimized for ZeptoMail EU
// All templates maintain consistent formatting across ES, EN, DE, FR

const supportedLocales = ['es', 'en', 'de', 'fr'];
const siteUrl = 'https://www.cojauny.com';
const logoUrl = `${siteUrl}/assets/logo/mountain_black.png`;

/**
 * Normalize locale to supported values.
 * @param {string} requested - Requested locale
 * @returns {string} Normalized locale (defaults to 'es')
 */
function normalizeLocale(requested) {
    if (!requested) return 'es';
    const normalized = requested.toLowerCase().slice(0, 2);
    return supportedLocales.includes(normalized) ? normalized : 'es';
}

// ============================================================================
// EMAIL SIGNATURE - Consistent footer for all emails
// ============================================================================

const signatureContent = {
    es: {
        tagline: 'Cojauny — Comparte traslados al aeropuerto y ahorra hasta un 75%',
        contact: '¿Necesitas ayuda? Escríbenos a',
        privacy: 'Privacidad',
        terms: 'Términos'
    },
    en: {
        tagline: 'Cojauny — Share airport transfers and save up to 75%',
        contact: 'Need help? Contact us at',
        privacy: 'Privacy',
        terms: 'Terms'
    },
    de: {
        tagline: 'Cojauny — Flughafentransfers teilen und bis zu 75% sparen',
        contact: 'Brauchen Sie Hilfe? Kontaktieren Sie uns unter',
        privacy: 'Datenschutz',
        terms: 'AGB'
    },
    fr: {
        tagline: 'Cojauny — Partagez vos transferts aéroport et économisez jusqu\'à 75%',
        contact: 'Besoin d\'aide ? Contactez-nous à',
        privacy: 'Confidentialité',
        terms: 'CGU'
    }
};

const emailSignatureHtml = (locale) => {
    const content = signatureContent[locale] || signatureContent.es;
    const privacyUrl = `${siteUrl}/${locale}/legal/privacy`;
    const termsUrl = `${siteUrl}/${locale}/legal/terms`;

    return `
    <div style="margin-top:32px;padding-top:24px;border-top:2px solid #e2e8f0;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#334155;">
        <tr>
          <td style="padding-right:16px;vertical-align:top;width:56px;">
            <img src="${logoUrl}" width="48" height="48" alt="Cojauny" style="display:block;border:0;border-radius:8px;" />
          </td>
          <td style="vertical-align:top;">
            <p style="margin:0 0 8px 0;font-weight:600;font-size:14px;color:#0f172a;">${content.tagline}</p>
            <p style="margin:0 0 8px 0;font-size:13px;color:#64748b;">${content.contact} <a href="mailto:support@cojauny.com" style="color:#0284c7;text-decoration:none;">support@cojauny.com</a></p>
            <p style="margin:0;font-size:12px;color:#94a3b8;"><a href="${privacyUrl}" style="color:#0284c7;text-decoration:none;">${content.privacy}</a> · <a href="${termsUrl}" style="color:#0284c7;text-decoration:none;">${content.terms}</a> · <a href="${siteUrl}" style="color:#0284c7;text-decoration:none;">cojauny.com</a></p>
          </td>
        </tr>
      </table>
    </div>`;
};

const emailSignatureText = (locale) => {
    const content = signatureContent[locale] || signatureContent.es;
    const privacyUrl = `${siteUrl}/${locale}/legal/privacy`;
    const termsUrl = `${siteUrl}/${locale}/legal/terms`;

    return `
---
${content.tagline}
${content.contact} support@cojauny.com

${content.privacy}: ${privacyUrl}
${content.terms}: ${termsUrl}
Web: ${siteUrl}
`;
};

// ============================================================================
// COMMON HTML HELPERS
// ============================================================================

const htmlWrapper = (content) => `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#1e293b;max-width:600px;margin:0 auto;line-height:1.6;">${content}</div>`;

const messageBox = (icon, label, content, bgColor) => {
    const bg = bgColor || '#f8fafc';
    return `<div style="background:${bg};border-left:4px solid #0284c7;padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0;"><p style="margin:0 0 12px 0;color:#475569;font-size:13px;font-weight:600;">${icon} ${label}</p><div style="background:#ffffff;padding:16px;border-radius:6px;border:1px solid #e2e8f0;"><pre style="white-space:pre-wrap;word-wrap:break-word;font-family:inherit;font-size:14px;margin:0;color:#1e293b;">${content}</pre></div></div>`;
};

const referralBoxes = {
    es: { title: '🚀 Avanza en la lista de espera', subtitle: 'Comparte tu enlace personal y obtén acceso prioritario:', cta: 'Cuantos más amigos se registren con tu enlace, antes tendrás acceso a la beta.' },
    en: { title: '🚀 Move up the waitlist', subtitle: 'Share your personal link to get priority access:', cta: 'The more friends sign up with your link, the sooner you\'ll get beta access.' },
    de: { title: '🚀 Rücke auf der Warteliste vor', subtitle: 'Teile deinen persönlichen Link für prioritären Zugang:', cta: 'Je mehr Freunde sich über deinen Link registrieren, desto früher erhältst du Beta-Zugang.' },
    fr: { title: '🚀 Avancez sur la liste d\'attente', subtitle: 'Partagez votre lien personnel pour un accès prioritaire:', cta: 'Plus vos amis s\'inscrivent via votre lien, plus vite vous aurez accès à la bêta.' }
};

const referralBox = (locale, link) => {
    const l = referralBoxes[locale] || referralBoxes.es;
    return `<div style="background:linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 100%);border-left:4px solid #0284c7;padding:20px;border-radius:0 12px 12px 0;margin:24px 0;"><p style="margin:0 0 8px 0;font-weight:700;color:#0c4a6e;font-size:16px;">${l.title}</p><p style="margin:0 0 16px 0;font-size:14px;color:#334155;">${l.subtitle}</p><div style="background:#ffffff;padding:14px 16px;border-radius:8px;border:1px solid #bae6fd;"><a href="${link}" style="color:#0369a1;font-weight:600;font-size:14px;word-break:break-all;text-decoration:none;">${link}</a></div><p style="margin:16px 0 0 0;font-size:13px;color:#475569;">${l.cta}</p></div>`;
};

// ============================================================================
// LOCALIZED USER-FACING TEMPLATES
// ============================================================================

const localizedTemplates = {
    'beta-confirmation': {
        es: {
            subject: '¡Estás en la lista de espera de Cojauny, {{name}}!',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Hola <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 24px 0;">Gracias por unirte a la lista de espera de <strong style="color:#0284c7;">Cojauny</strong>. Te avisaremos por email en cuanto la beta esté disponible para ti.</p>${referralBox('es', '{{referral_link}}')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">¿Tienes preguntas? Responde directamente a este email.</p>`),
            text: 'Hola {{name}},\n\nGracias por unirte a la lista de espera de Cojauny. Te avisaremos por email en cuanto la beta esté disponible para ti.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🚀 AVANZA EN LA LISTA DE ESPERA\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nComparte tu enlace personal:\n{{referral_link}}\n\nCuantos más amigos se registren con tu enlace, antes tendrás acceso a la beta.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n¿Tienes preguntas? Responde directamente a este email.'
        },
        en: {
            subject: 'You\'re on the Cojauny waitlist, {{name}}!',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Hi <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 24px 0;">Thanks for joining the <strong style="color:#0284c7;">Cojauny</strong> waitlist. We'll email you as soon as the beta is available for you.</p>${referralBox('en', '{{referral_link}}')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Have questions? Reply directly to this email.</p>`),
            text: 'Hi {{name}},\n\nThanks for joining the Cojauny waitlist. We\'ll email you as soon as the beta is available for you.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🚀 MOVE UP THE WAITLIST\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nShare your personal link:\n{{referral_link}}\n\nThe more friends sign up with your link, the sooner you\'ll get beta access.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nHave questions? Reply directly to this email.'
        },
        de: {
            subject: 'Du bist auf der Cojauny-Warteliste, {{name}}!',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Hallo <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 24px 0;">Danke, dass du dich für die <strong style="color:#0284c7;">Cojauny</strong>-Warteliste angemeldet hast. Wir informieren dich per E-Mail, sobald die Beta für dich verfügbar ist.</p>${referralBox('de', '{{referral_link}}')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Hast du Fragen? Antworte einfach auf diese E-Mail.</p>`),
            text: 'Hallo {{name}},\n\nDanke, dass du dich für die Cojauny-Warteliste angemeldet hast. Wir informieren dich per E-Mail, sobald die Beta für dich verfügbar ist.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🚀 RÜCKE AUF DER WARTELISTE VOR\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nTeile deinen persönlichen Link:\n{{referral_link}}\n\nJe mehr Freunde sich über deinen Link registrieren, desto früher erhältst du Beta-Zugang.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nHast du Fragen? Antworte einfach auf diese E-Mail.'
        },
        fr: {
            subject: 'Vous êtes sur la liste d\'attente Cojauny, {{name}} !',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Bonjour <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 24px 0;">Merci de rejoindre la liste d'attente <strong style="color:#0284c7;">Cojauny</strong>. Nous vous enverrons un email dès que la bêta sera disponible pour vous.</p>${referralBox('fr', '{{referral_link}}')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Des questions ? Répondez directement à cet email.</p>`),
            text: 'Bonjour {{name}},\n\nMerci de rejoindre la liste d\'attente Cojauny. Nous vous enverrons un email dès que la bêta sera disponible pour vous.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🚀 AVANCEZ SUR LA LISTE D\'ATTENTE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nPartagez votre lien personnel:\n{{referral_link}}\n\nPlus vos amis s\'inscrivent via votre lien, plus vite vous aurez accès à la bêta.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nDes questions ? Répondez directement à cet email.'
        }
    },

    'contact-confirmation': {
        es: {
            subject: 'Hemos recibido tu mensaje, {{name}}',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Hola <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 8px 0;">Gracias por contactarnos. Hemos recibido tu mensaje y nuestro equipo te responderá en un plazo de 24-48 horas laborables.</p>${messageBox('📋', 'Tu mensaje:', '<strong>Asunto:</strong> {{topic}}\n\n{{message}}')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Responde directamente a este email si necesitas añadir información adicional.</p>`),
            text: 'Hola {{name}},\n\nGracias por contactarnos. Hemos recibido tu mensaje y nuestro equipo te responderá en un plazo de 24-48 horas laborables.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 TU MENSAJE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nAsunto: {{topic}}\n\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nResponde directamente a este email si necesitas añadir información adicional.'
        },
        en: {
            subject: 'We received your message, {{name}}',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Hi <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 8px 0;">Thanks for reaching out. We've received your message and our team will respond within 24-48 business hours.</p>${messageBox('📋', 'Your message:', '<strong>Subject:</strong> {{topic}}\n\n{{message}}')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Reply directly to this email if you need to add more information.</p>`),
            text: 'Hi {{name}},\n\nThanks for reaching out. We\'ve received your message and our team will respond within 24-48 business hours.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 YOUR MESSAGE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nSubject: {{topic}}\n\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nReply directly to this email if you need to add more information.'
        },
        de: {
            subject: 'Wir haben deine Nachricht erhalten, {{name}}',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Hallo <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 8px 0;">Danke für deine Nachricht. Wir haben sie erhalten und unser Team wird sich innerhalb von 24-48 Geschäftsstunden bei dir melden.</p>${messageBox('📋', 'Deine Nachricht:', '<strong>Betreff:</strong> {{topic}}\n\n{{message}}')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Antworte direkt auf diese E-Mail, wenn du weitere Informationen hinzufügen möchtest.</p>`),
            text: 'Hallo {{name}},\n\nDanke für deine Nachricht. Wir haben sie erhalten und unser Team wird sich innerhalb von 24-48 Geschäftsstunden bei dir melden.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 DEINE NACHRICHT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nBetreff: {{topic}}\n\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nAntworte direkt auf diese E-Mail, wenn du weitere Informationen hinzufügen möchtest.'
        },
        fr: {
            subject: 'Nous avons reçu votre message, {{name}}',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Bonjour <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 8px 0;">Merci de nous avoir contactés. Nous avons bien reçu votre message et notre équipe vous répondra sous 24 à 48 heures ouvrées.</p>${messageBox('📋', 'Votre message:', '<strong>Sujet:</strong> {{topic}}\n\n{{message}}')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Répondez directement à cet email si vous souhaitez ajouter des informations.</p>`),
            text: 'Bonjour {{name}},\n\nMerci de nous avoir contactés. Nous avons bien reçu votre message et notre équipe vous répondra sous 24 à 48 heures ouvrées.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 VOTRE MESSAGE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nSujet: {{topic}}\n\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nRépondez directement à cet email si vous souhaitez ajouter des informations.'
        }
    },

    'feedback-confirmation': {
        es: {
            subject: 'Gracias por tu feedback, {{name}}',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Hola <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 8px 0;">Gracias por compartir tu opinión sobre Cojauny. Tu feedback es muy valioso para nosotros y nuestro equipo de producto lo revisará con atención.</p>${messageBox('💬', 'Tu feedback:', '{{message}}')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Si deseas añadir más contexto o detalles, responde a este email.</p>`),
            text: 'Hola {{name}},\n\nGracias por compartir tu opinión sobre Cojauny. Tu feedback es muy valioso para nosotros y nuestro equipo de producto lo revisará con atención.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💬 TU FEEDBACK\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nSi deseas añadir más contexto o detalles, responde a este email.'
        },
        en: {
            subject: 'Thanks for your feedback, {{name}}',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Hi <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 8px 0;">Thanks for sharing your thoughts about Cojauny. Your feedback is invaluable to us and our product team will carefully review it.</p>${messageBox('💬', 'Your feedback:', '{{message}}')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Want to add more context or details? Reply to this email.</p>`),
            text: 'Hi {{name}},\n\nThanks for sharing your thoughts about Cojauny. Your feedback is invaluable to us and our product team will carefully review it.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💬 YOUR FEEDBACK\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nWant to add more context or details? Reply to this email.'
        },
        de: {
            subject: 'Danke für dein Feedback, {{name}}',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Hallo <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 8px 0;">Danke, dass du deine Meinung zu Cojauny geteilt hast. Dein Feedback ist uns sehr wichtig und unser Produktteam wird es sorgfältig prüfen.</p>${messageBox('💬', 'Dein Feedback:', '{{message}}')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Möchtest du mehr Kontext hinzufügen? Antworte auf diese E-Mail.</p>`),
            text: 'Hallo {{name}},\n\nDanke, dass du deine Meinung zu Cojauny geteilt hast. Dein Feedback ist uns sehr wichtig und unser Produktteam wird es sorgfältig prüfen.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💬 DEIN FEEDBACK\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nMöchtest du mehr Kontext hinzufügen? Antworte auf diese E-Mail.'
        },
        fr: {
            subject: 'Merci pour votre retour, {{name}}',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Bonjour <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 8px 0;">Merci d'avoir partagé votre avis sur Cojauny. Votre retour est précieux pour nous et notre équipe produit l'examinera attentivement.</p>${messageBox('💬', 'Votre retour:', '{{message}}')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Vous souhaitez ajouter plus de contexte ? Répondez à cet email.</p>`),
            text: 'Bonjour {{name}},\n\nMerci d\'avoir partagé votre avis sur Cojauny. Votre retour est précieux pour nous et notre équipe produit l\'examinera attentivement.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💬 VOTRE RETOUR\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nVous souhaitez ajouter plus de contexte ? Répondez à cet email.'
        }
    },

    'idea-confirmation': {
        es: {
            subject: 'Gracias por tu idea, {{name}}',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Hola <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 8px 0;">Gracias por compartir tu idea para Cojauny. La hemos recibido y la incluiremos en nuestras discusiones de roadmap.</p>${messageBox('💡', 'Tu idea:', '{{message}}', '#fefce8')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Si tienes ejemplos de uso o métricas que compartirnos, responde a este email.</p>`),
            text: 'Hola {{name}},\n\nGracias por compartir tu idea para Cojauny. La hemos recibido y la incluiremos en nuestras discusiones de roadmap.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💡 TU IDEA\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nSi tienes ejemplos de uso o métricas que compartirnos, responde a este email.'
        },
        en: {
            subject: 'Thanks for your idea, {{name}}',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Hi <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 8px 0;">Thanks for sharing your idea for Cojauny. We've received it and will include it in our roadmap discussions.</p>${messageBox('💡', 'Your idea:', '{{message}}', '#fefce8')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Have use cases or metrics to share? Reply to this email.</p>`),
            text: 'Hi {{name}},\n\nThanks for sharing your idea for Cojauny. We\'ve received it and will include it in our roadmap discussions.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💡 YOUR IDEA\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nHave use cases or metrics to share? Reply to this email.'
        },
        de: {
            subject: 'Danke für deine Idee, {{name}}',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Hallo <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 8px 0;">Danke, dass du deine Idee für Cojauny geteilt hast. Wir haben sie erhalten und werden sie in unsere Roadmap-Diskussionen einbeziehen.</p>${messageBox('💡', 'Deine Idee:', '{{message}}', '#fefce8')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Hast du Anwendungsfälle oder Metriken? Antworte auf diese E-Mail.</p>`),
            text: 'Hallo {{name}},\n\nDanke, dass du deine Idee für Cojauny geteilt hast. Wir haben sie erhalten und werden sie in unsere Roadmap-Diskussionen einbeziehen.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💡 DEINE IDEE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nHast du Anwendungsfälle oder Metriken? Antworte auf diese E-Mail.'
        },
        fr: {
            subject: 'Merci pour votre idée, {{name}}',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Bonjour <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 8px 0;">Merci d'avoir partagé votre idée pour Cojauny. Nous l'avons reçue et l'intégrerons à nos discussions de roadmap.</p>${messageBox('💡', 'Votre idée:', '{{message}}', '#fefce8')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Vous avez des cas d'usage ou métriques à partager ? Répondez à cet email.</p>`),
            text: 'Bonjour {{name}},\n\nMerci d\'avoir partagé votre idée pour Cojauny. Nous l\'avons reçue et l\'intégrerons à nos discussions de roadmap.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💡 VOTRE IDÉE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nVous avez des cas d\'usage ou métriques à partager ? Répondez à cet email.'
        }
    },

    'business-proposal-confirmation': {
        es: {
            subject: 'Gracias por tu propuesta comercial, {{name}}',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Hola <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 8px 0;">Gracias por enviarnos tu propuesta comercial. Nuestro equipo de partnerships la revisará y se pondrá en contacto contigo si hay oportunidad de colaboración.</p>${messageBox('📊', 'Tu propuesta:', '{{message}}', '#f0fdf4')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Si deseas adjuntar documentación adicional, responde a este email.</p>`),
            text: 'Hola {{name}},\n\nGracias por enviarnos tu propuesta comercial. Nuestro equipo de partnerships la revisará y se pondrá en contacto contigo si hay oportunidad de colaboración.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 TU PROPUESTA\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nSi deseas adjuntar documentación adicional, responde a este email.'
        },
        en: {
            subject: 'Thanks for your business proposal, {{name}}',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Hi <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 8px 0;">Thanks for sending us your business proposal. Our partnerships team will review it and reach out if there's an opportunity to collaborate.</p>${messageBox('📊', 'Your proposal:', '{{message}}', '#f0fdf4')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Want to attach additional documentation? Reply to this email.</p>`),
            text: 'Hi {{name}},\n\nThanks for sending us your business proposal. Our partnerships team will review it and reach out if there\'s an opportunity to collaborate.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 YOUR PROPOSAL\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nWant to attach additional documentation? Reply to this email.'
        },
        de: {
            subject: 'Danke für Ihren Geschäftsvorschlag, {{name}}',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Hallo <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 8px 0;">Danke für Ihren Geschäftsvorschlag. Unser Partnerships-Team wird ihn prüfen und sich bei Ihnen melden, wenn es eine Möglichkeit zur Zusammenarbeit gibt.</p>${messageBox('📊', 'Ihr Vorschlag:', '{{message}}', '#f0fdf4')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Möchten Sie zusätzliche Dokumentation anhängen? Antworten Sie auf diese E-Mail.</p>`),
            text: 'Hallo {{name}},\n\nDanke für Ihren Geschäftsvorschlag. Unser Partnerships-Team wird ihn prüfen und sich bei Ihnen melden, wenn es eine Möglichkeit zur Zusammenarbeit gibt.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 IHR VORSCHLAG\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nMöchten Sie zusätzliche Dokumentation anhängen? Antworten Sie auf diese E-Mail.'
        },
        fr: {
            subject: 'Merci pour votre proposition commerciale, {{name}}',
            html: htmlWrapper(`<p style="font-size:17px;margin:0 0 16px 0;">Bonjour <strong>{{name}}</strong>,</p><p style="font-size:15px;color:#475569;margin:0 0 8px 0;">Merci pour votre proposition commerciale. Notre équipe partnerships l'examinera et vous contactera s'il y a une opportunité de collaboration.</p>${messageBox('📊', 'Votre proposition:', '{{message}}', '#f0fdf4')}<p style="font-size:14px;color:#64748b;margin:24px 0 0 0;">Vous souhaitez joindre de la documentation ? Répondez à cet email.</p>`),
            text: 'Bonjour {{name}},\n\nMerci pour votre proposition commerciale. Notre équipe partnerships l\'examinera et vous contactera s\'il y a une opportunité de collaboration.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 VOTRE PROPOSITION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nVous souhaitez joindre de la documentation ? Répondez à cet email.'
        }
    }
};

// ============================================================================
// INTERNAL TEMPLATES (Team notifications)
// ============================================================================

const internalHeader = (title) => `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#1e293b;"><div style="margin-bottom:20px;padding-bottom:16px;border-bottom:2px solid #e2e8f0;"><img src="${logoUrl}" width="40" height="40" alt="Cojauny" style="display:inline-block;vertical-align:middle;border:0;border-radius:6px;margin-right:12px;" /><span style="font-weight:700;font-size:18px;color:#0f172a;vertical-align:middle;">${title}</span></div>`;

const staticTemplates = {
    'contact-internal': {
        subject: '📬 Nueva solicitud de contacto - {{name}}',
        html: `${internalHeader('Cojauny — Contacto')}<p style="font-size:15px;margin:0 0 16px 0;color:#475569;">Nueva solicitud de contacto recibida.</p><table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;"><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;width:100px;">Nombre:</td><td style="padding:10px 0;color:#1e293b;">{{name}}</td></tr><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;">Email:</td><td style="padding:10px 0;"><a href="mailto:{{email}}" style="color:#0284c7;">{{email}}</a></td></tr><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;">Asunto:</td><td style="padding:10px 0;color:#1e293b;">{{topic}}</td></tr><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;">Idioma:</td><td style="padding:10px 0;color:#1e293b;">{{locale}}</td></tr></table><div style="background:#f8fafc;border-left:4px solid #0284c7;padding:16px 20px;border-radius:0 8px 8px 0;margin:16px 0;"><p style="margin:0 0 12px 0;color:#64748b;font-size:13px;font-weight:600;">📝 Mensaje:</p><pre style="white-space:pre-wrap;font-family:monospace;font-size:13px;margin:0;color:#1e293b;background:#fff;padding:12px;border-radius:4px;border:1px solid #e2e8f0;">{{message}}</pre></div><p style="margin-top:24px;font-size:13px;color:#64748b;">📧 Responder a: <a href="mailto:{{email}}" style="color:#0284c7;">{{email}}</a></p></div>`,
        text: '📬 NUEVA SOLICITUD DE CONTACTO\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNombre: {{name}}\nEmail: {{email}}\nAsunto: {{topic}}\nIdioma: {{locale}}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📝 MENSAJE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📧 Responder a: {{email}}\n\n--\nCojauny · ' + siteUrl
    },
    'feedback-internal': {
        subject: '💬 Nuevo feedback - {{name}}',
        html: `${internalHeader('Cojauny — Feedback')}<p style="font-size:15px;margin:0 0 16px 0;color:#475569;">Nuevo feedback del producto recibido.</p><table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;"><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;width:100px;">Nombre:</td><td style="padding:10px 0;color:#1e293b;">{{name}}</td></tr><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;">Email:</td><td style="padding:10px 0;"><a href="mailto:{{email}}" style="color:#0284c7;">{{email}}</a></td></tr><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;">Tipo:</td><td style="padding:10px 0;color:#1e293b;">{{usecase}}</td></tr><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;">Idioma:</td><td style="padding:10px 0;color:#1e293b;">{{locale}}</td></tr></table><div style="background:#f8fafc;border-left:4px solid #0284c7;padding:16px 20px;border-radius:0 8px 8px 0;margin:16px 0;"><p style="margin:0 0 12px 0;color:#64748b;font-size:13px;font-weight:600;">📝 Mensaje:</p><pre style="white-space:pre-wrap;font-family:monospace;font-size:13px;margin:0;color:#1e293b;background:#fff;padding:12px;border-radius:4px;border:1px solid #e2e8f0;">{{message}}</pre></div><p style="margin-top:24px;font-size:13px;color:#64748b;">📧 Responder a: <a href="mailto:{{email}}" style="color:#0284c7;">{{email}}</a></p></div>`,
        text: '💬 NUEVO FEEDBACK\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNombre: {{name}}\nEmail: {{email}}\nTipo: {{usecase}}\nIdioma: {{locale}}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📝 MENSAJE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📧 Responder a: {{email}}\n\n--\nCojauny · ' + siteUrl
    },
    'idea-internal': {
        subject: '💡 Nueva idea - {{name}}',
        html: `${internalHeader('Cojauny — Idea')}<p style="font-size:15px;margin:0 0 16px 0;color:#475569;">Nueva idea para el producto recibida.</p><table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;"><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;width:100px;">Nombre:</td><td style="padding:10px 0;color:#1e293b;">{{name}}</td></tr><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;">Email:</td><td style="padding:10px 0;"><a href="mailto:{{email}}" style="color:#0284c7;">{{email}}</a></td></tr><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;">Tipo:</td><td style="padding:10px 0;color:#1e293b;">Idea</td></tr><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;">Idioma:</td><td style="padding:10px 0;color:#1e293b;">{{locale}}</td></tr></table><div style="background:#f8fafc;border-left:4px solid #0284c7;padding:16px 20px;border-radius:0 8px 8px 0;margin:16px 0;"><p style="margin:0 0 12px 0;color:#64748b;font-size:13px;font-weight:600;">📝 Mensaje:</p><pre style="white-space:pre-wrap;font-family:monospace;font-size:13px;margin:0;color:#1e293b;background:#fff;padding:12px;border-radius:4px;border:1px solid #e2e8f0;">{{message}}</pre></div><p style="margin-top:24px;font-size:13px;color:#64748b;">📧 Responder a: <a href="mailto:{{email}}" style="color:#0284c7;">{{email}}</a></p></div>`,
        text: '💡 NUEVA IDEA\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNombre: {{name}}\nEmail: {{email}}\nTipo: Idea\nIdioma: {{locale}}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📝 MENSAJE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📧 Responder a: {{email}}\n\n--\nCojauny · ' + siteUrl
    },
    'business-proposal-internal': {
        subject: '📊 Nueva propuesta comercial - {{name}}',
        html: `${internalHeader('Cojauny — Propuesta comercial')}<p style="font-size:15px;margin:0 0 16px 0;color:#475569;">Nueva propuesta de negocio recibida.</p><table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;"><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;width:100px;">Nombre:</td><td style="padding:10px 0;color:#1e293b;">{{name}}</td></tr><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;">Email:</td><td style="padding:10px 0;"><a href="mailto:{{email}}" style="color:#0284c7;">{{email}}</a></td></tr><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;">Tipo:</td><td style="padding:10px 0;color:#1e293b;">Propuesta comercial</td></tr><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;">Idioma:</td><td style="padding:10px 0;color:#1e293b;">{{locale}}</td></tr></table><div style="background:#f8fafc;border-left:4px solid #0284c7;padding:16px 20px;border-radius:0 8px 8px 0;margin:16px 0;"><p style="margin:0 0 12px 0;color:#64748b;font-size:13px;font-weight:600;">📝 Mensaje:</p><pre style="white-space:pre-wrap;font-family:monospace;font-size:13px;margin:0;color:#1e293b;background:#fff;padding:12px;border-radius:4px;border:1px solid #e2e8f0;">{{message}}</pre></div><p style="margin-top:24px;font-size:13px;color:#64748b;">📧 Responder a: <a href="mailto:{{email}}" style="color:#0284c7;">{{email}}</a></p></div>`,
        text: '📊 NUEVA PROPUESTA COMERCIAL\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNombre: {{name}}\nEmail: {{email}}\nTipo: Propuesta comercial\nIdioma: {{locale}}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📝 MENSAJE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📧 Responder a: {{email}}\n\n--\nCojauny · ' + siteUrl
    },
    'beta-internal': {
        subject: '🚀 Nuevo registro beta - {{email}}',
        html: `${internalHeader('Cojauny — Beta')}<p style="font-size:15px;margin:0 0 16px 0;color:#475569;">Nuevo usuario registrado en la lista de espera.</p><table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;"><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;width:100px;">Email:</td><td style="padding:10px 0;"><a href="mailto:{{email}}" style="color:#0284c7;">{{email}}</a></td></tr><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;">Nombre:</td><td style="padding:10px 0;color:#1e293b;">{{name}}</td></tr><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;">Caso de uso:</td><td style="padding:10px 0;color:#1e293b;">{{usecase}}</td></tr><tr><td style="padding:10px 12px 10px 0;color:#64748b;font-weight:600;">Idioma:</td><td style="padding:10px 0;color:#1e293b;">{{language}}</td></tr></table><div style="background:#f8fafc;border-left:4px solid #0284c7;padding:16px 20px;border-radius:0 8px 8px 0;margin:16px 0;"><p style="margin:0 0 12px 0;color:#64748b;font-size:13px;font-weight:600;">📦 Datos (JSON):</p><pre style="white-space:pre-wrap;font-family:monospace;font-size:11px;margin:0;color:#1e293b;background:#fff;padding:12px;border-radius:4px;border:1px solid #e2e8f0;">{{message}}</pre></div></div>`,
        text: '🚀 NUEVO REGISTRO BETA\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nEmail: {{email}}\nNombre: {{name}}\nCaso de uso: {{usecase}}\nIdioma: {{language}}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📦 DATOS (JSON)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n{{message}}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n--\nCojauny · ' + siteUrl
    }
};

// ============================================================================
// TEMPLATE SENDER MAPPING
// ============================================================================

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

// ============================================================================
// TEMPLATE RESOLUTION AND RENDERING
// ============================================================================

function resolveTemplate(key, locale) {
    if (key in localizedTemplates) {
        const localized = localizedTemplates[key];
        return localized[locale] || localized.es;
    }
    return staticTemplates[key];
}

function render(content, variables) {
    const replace = (input) => {
        if (!input) return '';
        return input.replace(/\{\{(\w+)\}\}/g, (_, key) => {
            const value = variables[key];
            return value !== undefined && value !== null ? String(value) : '';
        });
    };
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
