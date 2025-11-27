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
  | 'beta-internal'
  | 'contact-confirmation'
  | 'contact-internal'
  | 'feedback-confirmation'
  | 'idea-confirmation'
  | 'business-proposal-confirmation'
  | 'feedback-internal'
  | 'idea-internal'
  | 'business-proposal-internal';

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
    name: Deno.env.get('SMTP_FROM_NAME_SUPPORT') ?? 'Cojauny Support Team'
  }
};

const supabaseUrl = Deno.env.get('BASE_URL') ?? '';
// Accept multiple possible env names for the service role key
const supabaseKey = Deno.env.get('BASE_SERVICE_ROLE_KEY') ?? Deno.env.get('BASE_SERVICE_ROLE_KEY') ?? Deno.env.get('BASE_SERVICE_KEY') ?? '';

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

// Load logo file (base64) for inline attachments by fetching from public URL
let logoBase64: string | null = null;
try {
  const response = await fetch(logoUrl);
  if (response.ok) {
    const arrayBuffer = await response.arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    // Convert to base64 in chunks to avoid call stack limits
    let binary = '';
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
      binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
    }
    // btoa is available in Deno runtime; fallback to Buffer if not
    try {
      logoBase64 = typeof btoa === 'function' ? btoa(binary) : Buffer.from(binary, 'binary').toString('base64');
    } catch (e) {
      // As a last resort, set null and continue; inline logo is optional
      logoBase64 = null;
    }
  }
} catch (_e) {
  logoBase64 = null;
}

// Localized professional email signature (no Supabase info).
const emailSignatureHtml = (locale: Locale) => {
  const lines: Record<Locale, { tagline: string; contactHtml: string }> = {
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
    es: { tagline: 'Cojauny — Ahorra en cada viaje al aeropuerto', contact: '¿Necesitas ayuda? Escríbenos a support@cojauny.com' },
    en: { tagline: 'Cojauny — Save on every trip to the airport', contact: 'Need help? Contact us at support@cojauny.com' },
    de: { tagline: 'Cojauny — Spare bei jeder Fahrt zum Flughafen', contact: 'Brauchen Sie Hilfe? Kontaktieren Sie uns unter support@cojauny.com' },
    fr: { tagline: "Cojauny — Économise sur chaque trajet vers l'aéroport", contact: "Besoin d'aide ? Contactez-nous à support@cojauny.com" }
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

const localizedTemplates: Record<Extract<TemplateKey, 'beta-confirmation' | 'contact-confirmation' | 'feedback-confirmation' | 'idea-confirmation' | 'business-proposal-confirmation'>, Record<Locale, TemplateContent>> = {
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
  // legacy 'feedback-thanks' removed; use specific confirmation templates
  'contact-confirmation': {
    es: {
      subject: 'Gracias por tu feedback, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hola <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Gracias por tu comentario — lo hemos recibido y el equipo de producto lo está revisando.</p><p style=\"font-size:15px;line-height:1.6;\">Tus ideas nos ayudan a priorizar qué construir a continuación.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Si quieres agregar contexto adicional, simplemente responde a este correo.</p></div>",
      text: "Hola {{name}},\n\nGracias por tu feedback — lo hemos recibido y nuestro equipo de producto lo está revisando.\n\nTus ideas nos ayudan a priorizar qué construir a continuación.\n\nResponde a este correo para añadir más contexto."
    },
    en: {
      subject: 'Thanks for your feedback, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hi <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Thanks for your note — it landed in our product queue and the team is reviewing it.</p><p style=\"font-size:15px;line-height:1.6;\">Feedback like yours helps us decide what to build next.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Reply to this email if you want to add more details.</p></div>",
      text: 'Hi {{name}},\n\nThanks for your feedback — our product team has received it and is reviewing it.\n\nFeedback like yours helps us decide what to build next.\n\nReply here to add more details.'
    },
    de: {
      subject: 'Danke für dein Feedback, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hallo <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Danke für dein Feedback — wir haben es erhalten und unser Produktteam prüft es.</p><p style=\"font-size:15px;line-height:1.6;\">Solche Rückmeldungen sind sehr wertvoll für unsere Planung.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Antworte auf diese E-Mail, um weitere Details hinzuzufügen.</p></div>",
      text: 'Hallo {{name}},\n\nDanke für dein Feedback — wir haben deine Nachricht erhalten und unser Team prüft sie.\n\nSolche Rückmeldungen helfen uns bei der Planung.\n\nAntworte auf diese E-Mail, um weitere Informationen hinzuzufügen.'
    },
    fr: {
      subject: 'Merci pour votre retour, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Bonjour <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Merci — votre message a bien été reçu et notre équipe produit l'examine.</p><p style=\"font-size:15px;line-height:1.6;\">Vos retours nous aident à prioriser les améliorations.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Répondez à cet e-mail pour ajouter un complément d'information.</p></div>",
      text: 'Bonjour {{name}},\n\nMerci pour votre retour — nous avons bien reçu votre message et notre équipe produit l\'examine.\n\nVos retours nous aident à prioriser les améliorations.\n\nRépondez pour ajouter des précisions.'
    }
  },
  'feedback-confirmation': {
    es: {
      subject: 'Hemos recibido tu solicitud, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hola <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Hemos recibido tu mensaje y un miembro del equipo de soporte lo revisará en menos de 48 horas.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Responde a este correo si necesitas añadir más información o archivos.</p></div>",
      text: 'Hola {{name}},\n\nHemos recibido tu solicitud y la revisaremos en menos de 48 h.\n\nResponde a este correo si necesitas añadir más información.'
    },
    en: {
      subject: 'We received your request, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hi <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">We received your message. Our support team will review it and reply within 48 hours.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">If you want to add attachments or more details, reply to this email.</p></div>",
      text: 'Hi {{name}},\n\nThanks — we received your request and will respond within 48 hours.\n\nReply to add more details or attachments.'
    },
    de: {
      subject: 'Wir haben deine Anfrage erhalten, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hallo <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Wir haben deine Nachricht erhalten. Unser Support-Team prüft sie und meldet sich innerhalb von 48 Stunden.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Antworte auf diese E-Mail, um Anhänge oder weitere Informationen zu senden.</p></div>",
      text: 'Hallo {{name}},\n\nWir haben deine Anfrage erhalten und melden uns innerhalb von 48 Stunden.\n\nAntworte auf diese E-Mail, um zusätzliche Informationen hinzuzufügen.'
    },
    fr: {
      subject: 'Nous avons bien reçu votre demande, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Bonjour <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Votre message est bien arrivé. Notre équipe support vous répondra sous 48 heures.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Répondez à cet e-mail pour ajouter des pièces jointes ou des informations supplémentaires.</p></div>",
      text: 'Bonjour {{name}},\n\nMerci — nous avons bien reçu votre message.\n\nRépondez pour ajouter des précisions ou des pièces jointes.'
    }
  }
  ,
  'feedback-confirmation': {
    es: {
      subject: 'Gracias por tu feedback, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hola <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Gracias por tu comentario sobre Cojauny. Lo hemos recibido y nuestro equipo de producto lo está revisando para mejorar la experiencia.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Si quieres añadir más contexto o ejemplos, responde a este correo.</p></div>",
      text: "Hola {{name}},\n\nGracias por tu comentario sobre Cojauny. Lo hemos recibido y nuestro equipo de producto lo está revisando para mejorar la experiencia.\n\nResponde a este correo para añadir más información."
    },
    en: {
      subject: 'Thanks for your feedback, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hi <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Thanks for your feedback about Cojauny. We've received it and our product team will review it to help improve the experience.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Reply to this email if you'd like to add more context.</p></div>",
      text: 'Hi {{name}},\n\nThanks for your feedback about Cojauny. We received it and our product team will review it.\n\nReply to this email to add more details.'
    },
    de: {
      subject: 'Danke für dein Feedback, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hallo <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Danke für dein Feedback zu Cojauny. Wir haben es erhalten und unser Produktteam prüft es, um die Nutzererfahrung zu verbessern.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Antworte auf diese E-Mail, wenn du weitere Details hinzufügen möchtest.</p></div>",
      text: 'Hallo {{name}},\n\nDanke für dein Feedback zu Cojauny. Wir haben es erhalten und unser Produktteam prüft es.\n\nAntworte auf diese E-Mail, um weitere Details hinzuzufügen.'
    },
    fr: {
      subject: 'Merci pour votre retour, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Bonjour <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Merci pour votre retour sur Cojauny. Nous l'avons bien reçu et notre équipe produit l'examinera pour améliorer le service.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Répondez à cet e-mail si vous souhaitez ajouter des précisions.</p></div>",
      text: "Bonjour {{name}},\n\nMerci pour votre retour sur Cojauny. Nous l'avons bien reçu et notre équipe produit l'examinera.\n\nRépondez pour ajouter des précisions."
    }
  },
  'idea-confirmation': {
    es: {
      subject: 'Gracias por tu idea, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hola <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Gracias por compartir tu idea para Cojauny. La hemos recibido y la incluiremos en nuestro proceso de evaluación de nuevas funcionalidades.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Si puedes compartir casos de uso o métricas, responde a este correo.</p></div>",
      text: "Hola {{name}},\n\nGracias por compartir tu idea para Cojauny. La hemos recibido y la incluiremos en nuestro proceso de evaluación de nuevas funcionalidades.\n\nResponde a este correo para añadir información adicional."
    },
    en: {
      subject: 'Thanks for your idea, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hi <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Thanks for sharing your idea for Cojauny. We received it and will consider it in our roadmap discussions.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Reply with any additional examples or metrics.</p></div>",
      text: 'Hi {{name}},\n\nThanks for sharing your idea for Cojauny. We received it and will consider it in our roadmap.\n\nReply to add examples or metrics.'
    },
    de: {
      subject: 'Danke für deine Idee, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hallo <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Danke, dass du deine Idee für Cojauny geteilt hast. Wir haben sie erhalten und werden sie in unsere Produktplanung einbeziehen.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Antworte, um weitere Beispiele oder Metriken zu teilen.</p></div>",
      text: 'Hallo {{name}},\n\nDanke für deine Idee für Cojauny. Wir haben sie erhalten und prüfen sie.\n\nAntworte, um Beispiele oder Metriken hinzuzufügen.'
    },
    fr: {
      subject: 'Merci pour votre idée, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Bonjour <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Merci d'avoir partagé votre idée pour Cojauny. Nous l'avons reçue et l'intégrerons à notre réflexion produit.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Répondez pour ajouter des exemples ou des métriques.</p></div>",
      text: "Bonjour {{name}},\n\nMerci pour votre idée pour Cojauny. Nous l'avons reçue et l'examinerons.\n\nRépondez pour ajouter des exemples."
    }
  },
  'business-proposal-confirmation': {
    es: {
      subject: 'Gracias por tu propuesta comercial, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hola <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Gracias por enviarnos tu propuesta comercial. Nuestro equipo de partnerships la revisará y contactará si hay interés para avanzar.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Si quieres adjuntar documentación adicional, responde a este correo.</p></div>",
      text: "Hola {{name}},\n\nGracias por tu propuesta comercial. Nuestro equipo de partnerships la revisará y contactará si hay interés para avanzar.\n\nResponde para adjuntar documentación."
    },
    en: {
      subject: 'Thanks for your business proposal, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hi <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Thanks for sending us your business proposal. Our partnerships team will review it and reach out if there's interest to proceed.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Reply to attach additional documents.</p></div>",
      text: 'Hi {{name}},\n\nThanks for your business proposal. Our team will review it and reach out if we want to proceed.\n\nReply to attach documents.'
    },
    de: {
      subject: 'Danke für Ihren Geschäftsvorschlag, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Hallo <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Danke für Ihren Geschäftsvorschlag. Unser Partnerships-Team wird diesen prüfen und sich melden, wenn Interesse besteht.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Antworten Sie, um zusätzliche Dokumente anzuhängen.</p></div>",
      text: 'Hallo {{name}},\n\nDanke für Ihren Geschäftsvorschlag. Unser Team prüft ihn und meldet sich, falls wir weitergehen möchten.\n\nAntworten Sie, um Dokumente anzuhängen.'
    },
    fr: {
      subject: 'Merci pour votre proposition commerciale, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;max-width:600px;\"><p style=\"font-size:16px;line-height:1.6;\">Bonjour <strong>{{name}}</strong>,</p><p style=\"font-size:15px;line-height:1.6;\">Merci pour votre proposition commerciale. Notre équipe partnerships l'examinera et vous contactera si nous souhaitons poursuivre.</p><p style=\"font-size:14px;line-height:1.6;color:#64748b;\">Répondez pour joindre des documents supplémentaires.</p></div>",
      text: "Bonjour {{name}},\n\nMerci pour votre proposition commerciale. Notre équipe l'examinera et vous contactera si nous souhaitons avancer.\n\nRépondez pour joindre des documents."
    }
  }
};

const feedbackInternalContent: TemplateContent = {
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
    '=== NUEVO FEEDBACK ===\n\nDe: {{name}}\nEmail: {{email}}\nUsecase: {{usecase}}\nIdioma: {{locale}}\n\n--- MENSAJE ---\n{{message}}\n\nResponde a: {{email}}\n\nCojauny · ' + siteUrlFromEnv
};

const staticTemplates: Record<Extract<TemplateKey, 'contact-internal' | 'feedback-internal' | 'idea-internal' | 'business-proposal-internal' | 'beta-internal'>, TemplateContent> = {
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
      '=== NUEVA SOLICITUD DE SOPORTE ===\n\nDe: {{name}}\nEmail: {{email}}\nAsunto: {{topic}}\nIdioma: {{locale}}\n\n--- MENSAJE ---\n{{message}}\n\nResponde a: {{email}}\n\nCojauny · ' + siteUrlFromEnv
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
  }
};

// Add beta-internal template for internal notifications sent from beta@cojauny.com
staticTemplates['beta-internal'] = {
  subject: 'New beta signup - {{email}}',
  html:
    "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#1f2937;\">" +
    `<div style="display:flex;gap:12px;align-items:center;margin-bottom:16px;padding-bottom:16px;border-bottom:2px solid #e5e7eb;"><img src="${logoUrl}" width="48" alt="Cojauny" style="display:block;border:0" /><div style="font-weight:700;font-size:18px;">Cojauny — Beta</div></div>` +
    "<p style=\"font-size:15px;font-weight:600;color:#0f172a;\">New beta signup</p>" +
    "<table style=\"width:100%;border-collapse:collapse;margin:16px 0;\"><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">Email:</td><td style=\"padding:8px 0;font-size:14px;\">{{email}}</td></tr><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">Name:</td><td style=\"padding:8px 0;font-size:14px;\">{{name}}</td></tr><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">Usecase:</td><td style=\"padding:8px 0;font-size:14px;\">{{usecase}}</td></tr><tr><td style=\"padding:8px 0;color:#64748b;font-size:13px;font-weight:600;\">Language:</td><td style=\"padding:8px 0;font-size:14px;\">{{language}}</td></tr></table>" +
    "<div style=\"background:#f8fafc;border-left:4px solid #0ea5e9;padding:16px;border-radius:4px;margin:16px 0;\"><p style=\"margin:0 0 8px 0;color:#64748b;font-size:13px;font-weight:600;\">Saved data (JSON):</p><pre style=\"white-space:pre-wrap;font-family:'Courier New',monospace;font-size:12px;margin:0;color:#1f2937;\">{{message}}</pre></div>" +
    "</div>",
  text:
    'New beta signup\n\nEmail: {{email}}\nName: {{name}}\nUsecase: {{usecase}}\nLanguage: {{language}}\n\nData: {{message}}\n\nCojauny · ' + siteUrlFromEnv
};

const templateSenders: Record<TemplateKey, SenderKey> = {
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
  // Support legacy incoming key 'feedback-thanks' by resolving to the proper confirmation
  if (key === 'feedback-thanks' || key === 'feedback-confirmation') {
    const pick = localizedTemplates['feedback-confirmation'];
    return pick[locale] ?? pick.es;
  }

  if (key in localizedTemplates) {
    const localized = localizedTemplates[key as keyof typeof localizedTemplates];
    return localized[locale] ?? localized.es;
  }
  return staticTemplates[key as keyof typeof staticTemplates];
}

function resolveSender(key: TemplateKey): ResolvedSender {
  // If sending contact confirmation, force the visible sender to contact@cojauny.com
  if (key === 'contact-confirmation' || key === 'contact-thanks') {
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
    throw new Error('No hay credenciales SMTP predeterminadas configuradas. Configure SMTP_USER and SMTP_PASS o las variables específicas por remitente.');
  }

  if (profile.email && !profile.password) {
    return {
      email: profile.email,
      name: profile.name,
      authEmail: defaultUser,
      authPassword: defaultPassword
    };
  }

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
    if (msg.includes('553') || /relay/i.test(msg)) {
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

function mapTemplateForStorage(original: TemplateKey, variables: Record<string, any> | undefined) {
  // For feedback flows we need to store template names that reflect the usecase
  // Support legacy originals like 'feedback-thanks' and 'internal-notification'
  const usecase = (variables && variables.usecase) || (variables && variables.type) || undefined;
  // Normalize common variants
  const normalized = typeof usecase === 'string' ? usecase.replace(/\s+/g, '_').toLowerCase() : undefined;

  if (original === 'feedback-thanks' || original === 'feedback-confirmation') {
    if (normalized === 'idea') return 'idea-confirmation';
    if (normalized === 'business_proposal' || normalized === 'business-proposal') return 'business-proposal-confirmation';
    return 'feedback-confirmation';
  }

  if (original === 'internal-notification' || original === 'feedback-internal' || original === 'idea-internal' || original === 'business-proposal-internal') {
    if (normalized === 'idea') return 'idea-internal';
    if (normalized === 'business_proposal' || normalized === 'business-proposal') return 'business-proposal-internal';
    return 'feedback-internal';
  }

  return original;
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
        } catch (capErr) {
        }
      }
    } catch (_e) {
      // ignore
    }

    const useResend = Deno.env.get('USE_RESEND') === 'true';
    const debug = Deno.env.get('DEBUG_EMAIL') === 'true' || Deno.env.get('TEST_CAPTURE') === 'true';

    if (debug) {
      try {
        await Deno.writeTextFile && Deno.writeTextFile('tmp/email-log.txt', `${new Date().toISOString()} - Sending ${payload.template} to ${payload.email} using ${useResend ? 'Resend' : 'SMTP'}\n`, { create: true, append: true });
      } catch (_e) {}
    }

    if (useResend) {
      await sendViaResend(payload.email, renderedWithSignature, sender);
    } else {
      await sendWithSmtpFallback(payload.email, renderedWithSignature, sender);
    }

    // Log email sent
    try {
      const storedTemplate = mapTemplateForStorage(payload.template, payload.variables as any);
      await supabase.from('emails_sent').insert({
        recipient: payload.email,
        template: storedTemplate,
        status: 'sent',
        metadata: { locale, variables: payload.variables }
      });
    } catch (logError) {
    }

    return new Response(
      JSON.stringify({ success: true, messageId: 'sent' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    
    // Try to log the error
    try {
      const payload: Payload = await req.clone().json();
      const storedTemplate = mapTemplateForStorage(payload.template, payload.variables as any);
      await supabase.from('emails_sent').insert({
        recipient: payload.email,
        template: storedTemplate,
        status: 'failed',
        error_message: error.message ?? 'Unknown error',
        metadata: { locale: payload.locale, variables: payload.variables }
      });
    } catch (logError) {
    }

    return new Response(
      JSON.stringify({ error: error.message ?? 'Failed to send email' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
});
