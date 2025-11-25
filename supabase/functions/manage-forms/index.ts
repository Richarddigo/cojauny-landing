// @ts-nocheck
// deno-lint-ignore-file no-explicit-any
import { serve } from 'https://deno.land/std@0.192.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.6';

// Polyfill helpers for older SMTP library
if (!(Deno as any).writeAll) {
  (Deno as any).writeAll = async (w: { write: (p: Uint8Array) => Promise<number | null> }, arr: Uint8Array) => {
    let offset = 0;
    while (offset < arr.length) {
      const n = await w.write(arr.subarray(offset));
      if (n === null || n === 0) throw new Error('writeAll: writer returned 0 or null');
      offset += n;
    }
  };
}

if (!(Deno as any).readAll) {
  (Deno as any).readAll = async (r: { read: (p: Uint8Array) => Promise<number | null> }) => {
    const chunks: Uint8Array[] = [];
    const buf = new Uint8Array(8192);
    while (true) {
      const n = await r.read(buf);
      if (n === null) break;
      chunks.push(buf.subarray(0, n));
    }
    let length = 0;
    for (const c of chunks) length += c.length;
    const out = new Uint8Array(length);
    let pos = 0;
    for (const c of chunks) {
      out.set(c, pos);
      pos += c.length;
    }
    return out;
  };
}

type Locale = 'es' | 'en' | 'de' | 'fr';
type SenderKey = 'beta' | 'feedback' | 'support';
type TemplateKey =
  | 'beta-confirmation'
  | 'feedback-thanks'
  | 'contact-thanks'
  | 'contact-notification'
  | 'internal-notification';

interface Payload {
  email: string;
  template: TemplateKey;
  locale?: Locale;
  variables?: Record<string, string>;
}

interface TemplateContent {
  subject: string;
  html: string;
  text: string;
}

const supportedLocales: Locale[] = ['es', 'en', 'de', 'fr'];
const smtpHost = Deno.env.get('SMTP_HOST') ?? 'smtppro.zoho.eu';
const smtpPort = Number(Deno.env.get('SMTP_PORT') ?? '465');
const defaultUser = Deno.env.get('SMTP_USER') ?? '';
const defaultPassword = Deno.env.get('SMTP_PASS') ?? '';

type SenderProfile = { email?: string; password?: string; name: string };
type ResolvedSender = { email: string; name: string; authEmail: string; authPassword: string };

const senderProfiles: Record<SenderKey, SenderProfile> = {
  beta: {
    email: Deno.env.get('SMTP_USER_BETA') ?? undefined,
    password: Deno.env.get('SMTP_PASS_BETA') ?? undefined,
    name: Deno.env.get('SMTP_FROM_NAME_BETA') ?? 'Cojauny Beta'
  },
  feedback: {
    email: Deno.env.get('SMTP_USER_FEEDBACK') ?? undefined,
    password: Deno.env.get('SMTP_PASS_FEEDBACK') ?? undefined,
    name: Deno.env.get('SMTP_FROM_NAME_FEEDBACK') ?? 'Cojauny Feedback'
  },
  support: {
    email: Deno.env.get('SMTP_USER_SUPPORT') ?? undefined,
    password: Deno.env.get('SMTP_PASS_SUPPORT') ?? undefined,
    name: Deno.env.get('SMTP_FROM_NAME_SUPPORT') ?? 'Cojauny Contact'
  }
};

const supabaseUrl = Deno.env.get('BASE_URL') ?? '';
// Accept multiple possible env names for the service role key
const supabaseKey = Deno.env.get('BASE_SERVICE_ROLE_KEY') ?? Deno.env.get('BASE_SERVICE_ROLE_KEY') ?? Deno.env.get('BASE_SERVICE_KEY') ?? '';

// Debugging: print presence (not values) to help diagnose env issues when running locally
try {
  console.log('manage-forms starting. BASE_URL present:', !!supabaseUrl, 'BASE_KEY present:', !!supabaseKey, 'USE_RESEND:', Deno.env.get('USE_RESEND'));
} catch (_e) {
  // ignore
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
  }
});

// Build canonical site URL — prefer explicit CURRENT_SITE_URL only to avoid
// leaking internal service URLs (e.g. Supabase project URLs) into emails.
const _rawSite = Deno.env.get('CURRENT_SITE_URL') ?? 'https://www.cojauny.com';
const siteUrlFromEnv = (_rawSite.startsWith('http') ? _rawSite : `https://${_rawSite}`).replace(/\/$/, '');
// Prefer PNG for email clients (better compatibility with some providers)
// Prefer public PNG hosted under the site public assets. Place the PNG at
// `public/assets/logo/mountain_black.png` so the signature image loads from the public site URL.
const logoUrl = `${siteUrlFromEnv}/assets/logo/mountain_black.png`;

// Load local logo file (base64) for inline attachments if available
let logoBase64: string | null = null;
try {
  const logoPath = 'public/assets/logo/mountain_black.png';
  const bytes = await Deno.readFile(logoPath);
  // Convert to base64
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  logoBase64 = btoa(binary);
  console.log('Loaded local logo for inline attachment');
} catch (_e) {
  logoBase64 = null;
}

// Localized professional email signature (no Supabase info).
const emailSignatureHtml = (locale: Locale) => {
  const lines: Record<Locale, { tagline: string; contactHtml: string }> = {
    es: {
      tagline: 'Cojauny — Comparte taxi al aeropuerto',
      contactHtml: '¿Necesitas ayuda? Escríbenos a <a href="mailto:support@cojauny.com" style="color:#0ea5e9;text-decoration:none;">support@cojauny.com</a>'
    },
    en: {
      tagline: 'Cojauny — Share airport taxi',
      contactHtml: 'Need help? Contact us at <a href="mailto:support@cojauny.com" style="color:#0ea5e9;text-decoration:none;">support@cojauny.com</a>'
    },
    de: {
      tagline: 'Cojauny — Taxi zum Flughafen teilen',
      contactHtml: 'Brauchen Sie Hilfe? Kontaktieren Sie uns unter <a href="mailto:support@cojauny.com" style="color:#0ea5e9;text-decoration:none;">support@cojauny.com</a>'
    },
    fr: {
      tagline: "Cojauny — Partagez un taxi vers l'aéroport",
      contactHtml: 'Besoin d\'aide ? Contactez-nous à <a href="mailto:support@cojauny.com" style="color:#0ea5e9;text-decoration:none;">support@cojauny.com</a>'
    }
  };

  const pick = lines[locale] ?? lines.es;

  const privacyUrl = `${siteUrlFromEnv}/${locale}/legal/privacy`;
  const termsUrl = `${siteUrlFromEnv}/${locale}/legal/terms`;

  const labels: Record<Locale, { privacy: string; terms: string }> = {
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

const emailSignatureText = (locale: Locale) => {
  const lines: Record<Locale, { tagline: string; contact: string }> = {
    es: { tagline: 'Cojauny — Comparte taxi al aeropuerto', contact: '¿Necesitas ayuda? Escríbenos a support@cojauny.com' },
    en: { tagline: 'Cojauny — Share airport taxi', contact: 'Need help? Contact us at support@cojauny.com' },
    de: { tagline: 'Cojauny — Taxi zum Flughafen teilen', contact: 'Brauchen Sie Hilfe? Kontaktieren Sie uns unter support@cojauny.com' },
    fr: { tagline: "Cojauny — Partagez un taxi vers l'aéroport", contact: "Besoin d'aide ? Contactez-nous à support@cojauny.com" }
  };

  const pick = lines[locale] ?? lines.es;

  const privacyUrl = `${siteUrlFromEnv}/${locale}/legal/privacy`;
  const termsUrl = `${siteUrlFromEnv}/${locale}/legal/terms`;
  const labels: Record<Locale, { privacy: string; terms: string }> = {
    es: { privacy: 'Privacidad', terms: 'Términos' },
    en: { privacy: 'Privacy', terms: 'Terms' },
    de: { privacy: 'Datenschutz', terms: 'Nutzungsbedingungen' },
    fr: { privacy: 'Confidentialité', terms: 'Conditions' }
  };
  const pickLabels = labels[locale] ?? labels.es;
  return `\n---\n${pick.tagline}\n${siteUrlFromEnv}\n${pick.contact}\n${pickLabels.privacy}: ${privacyUrl}\n${pickLabels.terms}: ${termsUrl}\n`;
};

const localizedTemplates: Record<Extract<TemplateKey, 'beta-confirmation' | 'feedback-thanks' | 'contact-thanks'>, Record<Locale, TemplateContent>> = {
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
  'feedback-thanks': {
    es: {
      subject: 'Gracias por tu feedback, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hola <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Gracias por tu comentario — lo hemos recibido y el equipo de producto lo está revisando.</p><p style=\"font-size:15px;line-height:1.6;\">Tus ideas nos ayudan a priorizar qué construir a continuación.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Si quieres agregar contexto adicional, simplemente responde a este correo.</p></div>" + emailSignatureHtml('es'),
      text: 'Hola {{name}},\n\nGracias por tu feedback — lo recibimos y el equipo de producto lo está revisando.\n\nTus ideas nos ayudan a decidir qué construir a continuación.\n\nResponde a este correo para añadir más contexto.' + emailSignatureText
    },
    en: {
      subject: 'Thanks for your feedback, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hi <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Thanks for your note — it landed in our product queue and the team is reviewing it.</p><p style=\"font-size:15px;line-height:1.6;\">Feedback like yours helps us decide what to build next.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Reply to this email if you want to add more details.</p></div>" + emailSignatureHtml('en'),
      text: 'Hi {{name}},\n\nThanks for your feedback — our product team has received it and is reviewing it.\n\nFeedback like yours helps us decide what to build next.\n\nReply here to add more details.' + emailSignatureText
    },
    de: {
      subject: 'Danke für dein Feedback, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hallo <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Danke für dein Feedback — wir haben es erhalten und unser Produktteam prüft es.</p><p style=\"font-size:15px;line-height:1.6;\">Solche Rückmeldungen sind sehr wertvoll für unsere Planung.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Antworte auf diese E-Mail, um weitere Details hinzuzufügen.</p></div>" + emailSignatureHtml('de'),
      text: 'Hallo {{name}},\n\nDanke für dein Feedback — wir haben deine Nachricht erhalten und unser Team prüft sie.\n\nSolche Rückmeldungen helfen uns bei der Planung.\n\nAntworte auf diese E-Mail, um weitere Informationen hinzuzufügen.' + emailSignatureText
    },
    fr: {
      subject: 'Merci pour votre retour, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Bonjour <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Merci — votre message a bien été reçu et notre équipe produit l'examine.</p><p style=\"font-size:15px;line-height:1.6;\">Vos retours nous aident à prioriser les améliorations.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Répondez à cet e-mail pour ajouter un complément d'information.</p></div>" + emailSignatureHtml('fr'),
      text: 'Bonjour {{name}},\n\nMerci pour votre retour — nous avons bien reçu votre message et notre équipe produit l\'examine.\n\nVos retours nous aident à prioriser les améliorations.\n\nRépondez pour ajouter des précisions.' + emailSignatureText
    }
  },
  'contact-thanks': {
    es: {
      subject: 'Hemos recibido tu solicitud, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hola <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Hemos recibido tu mensaje y un miembro del equipo de soporte lo revisará en menos de 48 horas.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Responde a este correo si necesitas añadir más información o archivos.</p></div>" + emailSignatureHtml('es'),
      text: 'Hola {{name}},\n\nHemos recibido tu solicitud y la revisaremos en menos de 48 h.\n\nResponde a este correo si necesitas añadir más información.' + emailSignatureText
    },
    en: {
      subject: 'We received your request, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hi <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">We received your message. Our support team will review it and reply within 48 hours.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">If you want to add attachments or more details, reply to this email.</p></div>" + emailSignatureHtml('en'),
      text: 'Hi {{name}},\n\nThanks — we received your request and will respond within 48 hours.\n\nReply to add more details or attachments.' + emailSignatureText
    },
    de: {
      subject: 'Wir haben deine Anfrage erhalten, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hallo <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Wir haben deine Nachricht erhalten. Unser Support-Team prüft sie und meldet sich innerhalb von 48 Stunden.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Antworte auf diese E-Mail, um Anhänge oder weitere Informationen zu senden.</p></div>" + emailSignatureHtml('de'),
      text: 'Hallo {{name}},\n\nWir haben deine Anfrage erhalten und melden uns innerhalb von 48 Stunden.\n\nAntworte auf diese E-Mail, um zusätzliche Informationen hinzuzufügen.' + emailSignatureText
    },
    fr: {
      subject: 'Nous avons bien reçu votre demande, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Bonjour <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Votre message est bien arrivé. Notre équipe support vous répondra sous 48 heures.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Répondez à cet e-mail pour ajouter des pièces jointes ou des informations supplémentaires.</p></div>" + emailSignatureHtml('fr'),
      text: 'Bonjour {{name}},\n\nMerci — nous avons bien reçu votre message.\n\nRépondez pour ajouter des précisions ou des pièces jointes.' + emailSignatureText
    }
  }
};

const staticTemplates: Record<Extract<TemplateKey, 'contact-notification' | 'internal-notification'>, TemplateContent> = {
  'contact-notification': {
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
      '=== NUEVA SOLICITUD DE SOPORTE ===\n\nDe: {{name}}\nEmail: {{email}}\nAsunto: {{topic}}\nIdioma: {{locale}}\n\n--- MENSAJE ---\n{{message}}\n\nResponde a: {{email}}\n\nCojauny · ' + siteUrlFromEnv
  },
  'internal-notification': {
    subject: 'Nuevo feedback recibido',
    html:
      "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;\">" +
      `<div style="display:flex;gap:12px;align-items:center;margin-bottom:16px;padding-bottom:16px;border-bottom:2px solid #e5e7eb;"><img src="${logoUrl}" width="48" alt="Cojauny" style="display:block;border:0" /><div style="font-weight:700;font-size:18px;">Cojauny — Feedback</div></div>` +
      "<p style=\"font-size:15px;font-weight:600;color:#0f172a;\">Nuevo feedback del producto</p>" +
      "<table style=\"width:100%;border-collapse:collapse;margin:16px 0;\"><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">De:</td><td style=\"padding:8px 0;font-size:14px;\">{{name}}</td></tr><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">Email:</td><td style=\"padding:8px 0;font-size:14px;\"><a href=\"mailto:{{email}}\" style=\"color:#0ea5e9;text-decoration:none;\">{{email}}</a></td></tr><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">Sentimiento:</td><td style=\"padding:8px 0;font-size:14px;\">{{case}}</td></tr><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">Idioma:</td><td style=\"padding:8px 0;font-size:14px;\">{{locale}}</td></tr></table>" +
      "<div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:4px;margin:16px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">Mensaje:</p><pre style=\"white-space:pre-wrap;font-family:'Courier New',monospace;font-size:14px;margin:0;color:#1f2937;\">{{message}}</pre></div>" +
      "<p style=\"margin-top:24px;font-size:12px;color:#9ca3af;\">Responde directamente al usuario en: {{email}}</p>" +
      "</div>",
    text:
      '=== NUEVO FEEDBACK ===\n\nDe: {{name}}\nEmail: {{email}}\nSentimiento: {{case}}\nIdioma: {{locale}}\n\n--- MENSAJE ---\n{{message}}\n\nResponde a: {{email}}\n\nCojauny · ' + siteUrlFromEnv
  }
};

const templateSenders: Record<TemplateKey, SenderKey> = {
  'beta-confirmation': 'beta',
  'feedback-thanks': 'feedback',
  'contact-thanks': 'support',
  'contact-notification': 'support',
  'internal-notification': 'feedback'
};

function normalizeLocale(requested?: string): Locale {
  if (!requested) return 'es';
  if (supportedLocales.includes(requested as Locale)) {
    return requested as Locale;
  }
  return 'es';
}

function render(content: TemplateContent, variables: Record<string, string>) {
  const replace = (input: string) =>
    input.replace(/{{(\w+)}}/g, (_, key) => variables[key] ?? '');
  return {
    subject: replace(content.subject),
    html: replace(content.html),
    text: replace(content.text)
  };
}

function resolveTemplate(key: TemplateKey, locale: Locale): TemplateContent {
  if (key in localizedTemplates) {
    const localized = localizedTemplates[key as keyof typeof localizedTemplates];
    return localized[locale] ?? localized.es;
  }
  return staticTemplates[key as keyof typeof staticTemplates];
}

function resolveSender(key: TemplateKey): ResolvedSender {
  // If sending contact confirmation, force the visible sender to contact@cojauny.com
  if (key === 'contact-thanks') {
    const contactProfile: SenderProfile = {
      email: 'contact@cojauny.com',
      password: undefined,
      name: 'Cojauny Contact'
    };
    // If a specific SMTP user for support/contact is configured, use it for auth
    const authEmail = Deno.env.get('SMTP_USER_SUPPORT') ?? Deno.env.get('SMTP_USER') ?? undefined;
    const authPassword = Deno.env.get('SMTP_PASS_SUPPORT') ?? Deno.env.get('SMTP_PASS') ?? undefined;
    if (authEmail && authPassword) {
      return { email: contactProfile.email, name: contactProfile.name, authEmail, authPassword };
    }
    if (!defaultUser || !defaultPassword) {
      throw new Error('No hay credenciales SMTP predeterminadas configuradas');
    }
    return { email: contactProfile.email, name: contactProfile.name, authEmail: defaultUser, authPassword: defaultPassword };
  }

  const profileKey = templateSenders[key];
  const profile = senderProfiles[profileKey];

  if (profile.email && profile.password) {
    return {
      email: profile.email,
      name: profile.name,
      authEmail: profile.email,
      authPassword: profile.password
    };
  }

  if (!defaultUser || !defaultPassword) {
    throw new Error('No hay credenciales SMTP predeterminadas configuradas');
  }

  if (profile.email && !profile.password) {
    console.warn(
      `SMTP_PASS_${profileKey.toUpperCase()} no está configurada. Autenticando con la cuenta predeterminada.`
    );
    return {
      email: profile.email,
      name: profile.name,
      authEmail: defaultUser,
      authPassword: defaultPassword
    };
  }

  console.warn(`SMTP_USER_${profileKey.toUpperCase()} no está configurada. Se usará la cuenta predeterminada.`);
  return {
    email: defaultUser,
    name: profile.name,
    authEmail: defaultUser,
    authPassword: defaultPassword
  };
}

async function sendViaSmtp(
  recipient: string,
  rendered: ReturnType<typeof render>,
  sender: ResolvedSender
) {
  const { SmtpClient } = await import('https://deno.land/x/smtp@v0.7.0/mod.ts');
  const client = new SmtpClient();
  
  await client.connectTLS({
    hostname: smtpHost,
    port: smtpPort,
    username: sender.authEmail,
    password: sender.authPassword
  });

  // If we have a local logo, attach it inline (CID) and rewrite the HTML to reference it
  const attachments = [];
  let htmlToSend = rendered.html;
  if (logoBase64) {
    // Replace occurrences of the public logo URL with cid reference
    htmlToSend = htmlToSend.replace(new RegExp(logoUrl.replace(/[.*+?^${}()|[\]\\]/g, '\$&'), 'g'), 'cid:cojauny_logo');
    attachments.push({
      filename: 'mountain_black.png',
      content: logoBase64,
      contentType: 'image/png',
      disposition: 'inline',
        headers: {
          'Content-ID': '<cojauny_logo>',
          'Content-Transfer-Encoding': 'base64',
          'Content-Disposition': 'inline; filename="mountain_black.png"'
        }
    });
  }

  await client.send({
    from: `${sender.name} <${sender.authEmail}>`,
    to: recipient,
    subject: rendered.subject,
    content: rendered.text,
    html: htmlToSend,
    attachments: attachments.length ? attachments : undefined,
    headers: {
      'MIME-Version': '1.0',
      'Reply-To': `${sender.name} <${sender.email}>`,
      'X-Sender': sender.authEmail,
      'X-Mailer': 'Cojauny Mailer'
    }
  });

  await client.close();
}

// Enhanced SMTP send with fallback for relay errors
async function sendWithSmtpFallback(recipient: string, rendered: ReturnType<typeof render>, sender: ResolvedSender) {
  try {
    await sendViaSmtp(recipient, rendered, sender);
    return;
  } catch (err) {
    // If SMTP server rejects the sender (common 553 relay error), retry using auth email as From and set Reply-To
    const msg = (err && err.message) ? err.message : String(err);
    console.warn('sendViaSmtp failed:', msg);
    if (msg.includes('553') || /relay/i.test(msg)) {
      console.info('Retrying send with authenticated From address to avoid relay restrictions');
      const fallbackSender: ResolvedSender = {
        email: sender.authEmail,
        name: sender.name,
        authEmail: sender.authEmail,
        authPassword: sender.authPassword
      };

      const { SmtpClient } = await import('https://deno.land/x/smtp@v0.7.0/mod.ts');
      const client = new SmtpClient();
      await client.connectTLS({ hostname: smtpHost, port: smtpPort, username: fallbackSender.authEmail, password: fallbackSender.authPassword });

      // Fallback path: also attach inline logo if available
      let htmlToSend = rendered.html;
      const attachments = [];
      if (logoBase64) {
        htmlToSend = htmlToSend.replace(new RegExp(logoUrl.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&'), 'g'), 'cid:cojauny_logo');
        attachments.push({
          filename: 'mountain_black.png',
          content: logoBase64,
          contentType: 'image/png',
          disposition: 'inline',
          headers: { 'Content-ID': '<cojauny_logo>' }
        });
      }

      await client.send({
        // Use authenticated From to avoid relay restrictions, Reply-To is the visible address
        from: `${fallbackSender.name} <${fallbackSender.authEmail}>`,
        to: recipient,
        subject: rendered.subject,
        content: rendered.text,
        html: htmlToSend,
        attachments: attachments.length ? attachments : undefined,
        headers: {
          'Reply-To': `${sender.name} <${sender.email}>`,
          'X-Sender': fallbackSender.authEmail
        }
      });

      await client.close();
      return;
    }

    throw err;
  }
}

async function sendViaResend(
  recipient: string,
  rendered: ReturnType<typeof render>,
  sender: ResolvedSender
) {
  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  if (!resendApiKey) {
    throw new Error('RESEND_API_KEY no está configurada');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: `${sender.name} <${sender.authEmail}>`,
      to: [recipient],
      subject: rendered.subject,
      html: rendered.html,
      text: rendered.text,
      reply_to: sender.email
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend API error: ${response.status} ${errorBody}`);
  }

  return await response.json();
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  try {
    const payload: Payload = await req.json();

    if (!payload.email || !payload.template) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: email, template' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const locale = normalizeLocale(payload.locale);
    const templateContent = resolveTemplate(payload.template, locale);
    const rendered = render(templateContent, payload.variables ?? {});
    // Append localized signature to both html and text outputs
    const htmlWithSignature = (rendered.html ?? '') + emailSignatureHtml(locale);
    const textWithSignature = (rendered.text ?? '') + emailSignatureText(locale);
    const sender = resolveSender(payload.template);
    const renderedWithSignature = { ...rendered, html: htmlWithSignature, text: textWithSignature } as ReturnType<typeof render>;

    // If in test capture mode, dump rendered HTML/text and metadata to tmp/email-samples
    try {
      if (Deno.env.get('TEST_CAPTURE') === 'true') {
        try {
          const outDir = 'tmp/email-samples';
          await Deno.mkdir(outDir, { recursive: true });
          const ts = Date.now();
          const base = `${outDir}/${payload.template}_${locale}_${ts}`;
          // If logoBase64 is present we will send using CID, so capture the final HTML that references CID
          const htmlToCapture = logoBase64
            ? htmlWithSignature.replace(new RegExp(logoUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), 'cid:cojauny_logo')
            : htmlWithSignature;
          await Deno.writeTextFile(base + '.html', htmlToCapture);
          await Deno.writeTextFile(base + '.txt', textWithSignature);
          const meta = {
            template: payload.template,
            locale,
            recipient: payload.email,
            sender: sender.email,
            senderName: sender.name,
            useResend: Deno.env.get('USE_RESEND') === 'true',
            attachments: !!logoBase64
          };
          await Deno.writeTextFile(base + '.json', JSON.stringify(meta, null, 2));
          console.log('[TEST_CAPTURE] Wrote sample files for', payload.template, locale, base);
        } catch (capErr) {
          console.error('TEST_CAPTURE write failed:', capErr);
        }
      }
    } catch (_e) {
      // ignore
    }

    const useResend = Deno.env.get('USE_RESEND') === 'true';

    if (useResend) {
      await sendViaResend(payload.email, renderedWithSignature, sender);
    } else {
      await sendWithSmtpFallback(payload.email, renderedWithSignature, sender);
    }

    // Log email sent
    try {
      await supabase.from('emails_sent').insert({
        recipient: payload.email,
        template: payload.template,
        status: 'sent',
        metadata: { locale, variables: payload.variables }
      });
    } catch (logError) {
      console.error('Failed to log email:', logError);
    }

    return new Response(
      JSON.stringify({ success: true, messageId: 'sent' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Email sending error:', error);
    
    // Try to log the error
    try {
      const payload: Payload = await req.clone().json();
      await supabase.from('emails_sent').insert({
        recipient: payload.email,
        template: payload.template,
        status: 'failed',
        error_message: error.message ?? 'Unknown error',
        metadata: { locale: payload.locale, variables: payload.variables }
      });
    } catch (logError) {
      console.error('Failed to log error:', logError);
    }

    return new Response(
      JSON.stringify({ error: error.message ?? 'Failed to send email' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
});
