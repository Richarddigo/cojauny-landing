// @ts-nocheck
// deno-lint-ignore-file no-explicit-any
import { serve } from 'https://deno.land/std@0.192.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.6';

// Polyfill helpers for older SMTP library that calls Deno.writeAll / Deno.readAll.
// Newer Deno runtimes don't expose these globals; provide small compatible impls.
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
    // concat
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
    password: Deno.env.get('SMTP_PASS') ?? undefined,
    name: Deno.env.get('SMTP_FROM_NAME_BETA') ?? 'Cojauny Beta'
  },
  feedback: {
    email: Deno.env.get('SMTP_USER_FEEDBACK') ?? undefined,
    password: Deno.env.get('SMTP_PASS') ?? undefined,
    name: Deno.env.get('SMTP_FROM_NAME_FEEDBACK') ?? 'Cojauny Feedback'
  },
  support: {
    email: Deno.env.get('SMTP_USER_SUPPORT') ?? undefined,
    password: Deno.env.get('SMTP_PASS') ?? undefined,
    name: Deno.env.get('SMTP_FROM_NAME_SUPPORT') ?? 'Cojauny Support Team'
  }
};

const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
  }
});

// Build a canonical site URL for absolute asset links (ensure protocol present)
const _rawSite = Deno.env.get('CURRENT_SITE_URL') || Deno.env.get('BASE_URL') || Deno.env.get('SUPABASE_URL') || 'https://www.cojauny.com';
const siteUrlFromEnv = (_rawSite.startsWith('http') ? _rawSite : `https://${_rawSite}`).replace(/\/$/, '');
const logoUrl = `${siteUrlFromEnv}/assets/logo/mountain_black.svg`;

const emailSignatureHtml = (locale: Locale) => `\n  <br/>\n  <div style="display:flex;gap:12px;align-items:center;margin-top:18px">\n    <img src=\"${logoUrl}\" width=\"72\" alt=\"Cojauny\" style=\"display:block;border:0;\" />\n    <div style=\"font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#333;\">\n      <div style=\"font-weight:700\">Cojauny</div>\n      <div style=\"font-size:13px;color:#555;margin-top:4px\">Productivity tools for creative teams — <a href=\"${siteUrlFromEnv}\" style=\"color:#1a73e8;text-decoration:none\">${siteUrlFromEnv.replace(/^https?:\/\//, '')}</a></div>\n    </div>\n  </div>\n  <div style=\"margin-top:12px;font-size:12px;color:#777\">If you need help, contact <a href=\"mailto:support@cojauny.com\" style=\"color:#1a73e8\">support@cojauny.com</a></div>\n`;

const emailSignatureText = `\n--\nCojauny — Productivity tools for creative teams\n${siteUrlFromEnv}\nSupport: support@cojauny.com\n`;

const localizedTemplates: Record<Extract<TemplateKey, 'beta-confirmation' | 'feedback-thanks' | 'contact-thanks'>, Record<Locale, TemplateContent>> = {
  'beta-confirmation': {
    es: {
      subject: 'Tu token de acceso a la beta de Cojauny',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#222;\"><p>Hola {{name}},</p><p>Gracias por unirte a la beta privada de <strong>Cojauny</strong>. Aquí tienes tu token personal:</p><div style=\"background:#f7f9fc;padding:12px;border-radius:6px;display:inline-block;margin:8px 0;font-size:22px;font-weight:700;letter-spacing:2px;color:#0b3d91\">{{confirmation_token}}</div><p>Usa este código en las próximas <strong>72 horas</strong> en la app. Responde a este correo si necesitas ayuda.</p></div>" + emailSignatureHtml('es'),
      text: 'Hola {{name}},\n\nGracias por unirte a la beta privada de Cojauny. Tu token personal es {{confirmation_token}}. Úsalo en las próximas 72 horas en la app o responde a este correo para asistencia.' + emailSignatureText
    },
    en: {
      subject: 'Your Cojauny beta access token',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#222;\"><p>Hi {{name}},</p><p>Thanks for joining the private Cojauny beta. Your personal token:</p><div style=\"background:#f7f9fc;padding:12px;border-radius:6px;display:inline-block;margin:8px 0;font-size:22px;font-weight:700;letter-spacing:2px;color:#0b3d91\">{{confirmation_token}}</div><p>Please use it within the next <strong>72 hours</strong> in the app. Reply to this email if you need help.</p></div>" + emailSignatureHtml('en'),
      text: 'Hi {{name}},\n\nThanks for joining the private Cojauny beta. Your token: {{confirmation_token}}. Use it within the next 72 hours in the app. Reply to this email for help.' + emailSignatureText
    },
    de: {
      subject: 'Dein Zugangscode para la Cojauny-Beta',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#222;\"><p>Hallo {{name}},</p><p>Willkommen in der privaten Cojauny-Beta. Dein persönlicher Code:</p><div style=\"background:#f7f9fc;padding:12px;border-radius:6px;display:inline-block;margin:8px 0;font-size:22px;font-weight:700;letter-spacing:2px;color:#0b3d91\">{{confirmation_token}}</div><p>Bitte nutze ihn innerhalb von <strong>72 Stunden</strong> in der App. Antworte auf diese E-Mail bei Fragen.</p></div>" + emailSignatureHtml('de'),
      text: 'Hallo {{name}},\n\nWillkommen in der privaten Cojauny-Beta. Dein Code: {{confirmation_token}}. Por favor usa' + emailSignatureText
    },
    fr: {
      subject: 'Votre code d’accès à la bêta Cojauny',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#222;\"><p>Bonjour {{name}},</p><p>Merci d’avoir rejoint la bêta privée de Cojauny. Votre code :</p><div style=\"background:#f7f9fc;padding:12px;border-radius:6px;display:inline-block;margin:8px 0;font-size:22px;font-weight:700;letter-spacing:2px;color:#0b3d91\">{{confirmation_token}}</div><p>Utilisez-le dans les <strong>72 prochaines heures</strong> dans l’app. Répondez à cet email si vous avez besoin d’aide.</p></div>" + emailSignatureHtml('fr'),
      text: 'Bonjour {{name}},\n\nMerci d’avoir rejoint la bêta privée. Votre code: {{confirmation_token}}. Utilisez-le dans les 72 prochaines heures dans l’app.' + emailSignatureText
    }
  },
  'feedback-thanks': {
    es: {
      subject: '¡Gracias por tu feedback, {{name}}! 💌',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#222;\"><p>Hola {{name}},</p><p>Gracias por tu comentario — lo hemos recibido y el equipo de producto lo está revisando. Tus ideas nos ayudan a priorizar lo siguiente.</p><p>Si quieres agregar contexto adicional, responde a este correo y lo adjuntaremos a tu ticket.</p></div>" + emailSignatureHtml('es'),
      text: 'Hola {{name}},\n\nGracias por tu feedback — lo recibimos y el equipo de producto lo está revisando. Responde a este correo para añadir más contexto.' + emailSignatureText
    },
    en: {
      subject: 'Thanks for your Cojauny feedback, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#222;\"><p>Hi {{name}},</p><p>Thanks for your note — it landed in our product queue and the team is reviewing it. Feedback like yours helps us decide what to build next.</p><p>Reply to this email if you want to add more details.</p></div>" + emailSignatureHtml('en'),
      text: 'Hi {{name}},\n\nThanks for your feedback — our product team has received it and is reviewing it. Reply here to add more details.' + emailSignatureText
    },
    de: {
      subject: 'Danke für dein Feedback zu Cojauny, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#222;\"><p>Hallo {{name}},</p><p>Danke für dein Feedback — wir haben es erhalten und unser Produktteam prüft es. Solche Rückmeldungen sind sehr wertvoll para nuestra planificación.</p><p>Antworte auf diese E-Mail, um weitere Details hinzuzufügen.</p></div>" + emailSignatureHtml('de'),
      text: 'Hallo {{name}},\n\nDanke für dein Feedback — wir haben deine Nachricht erhalten y nuestro equipo estará revisándolo. Responde a este correo para añadir contexto.' + emailSignatureText
    },
    fr: {
      subject: 'Merci pour votre retour sur Cojauny, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#222;\"><p>Bonjour {{name}},</p><p>Merci — votre message a bien été reçu et notre équipe produit l’examine. Vos retours nous aident à prioriser les améliorations.</p><p>Répondez à cet e-mail pour ajouter un complément d’information.</p></div>" + emailSignatureHtml('fr'),
      text: 'Bonjour {{name}},\n\nMerci pour votre retour — nous avons bien reçu votre message et notre équipe produit l’examine. Répondez pour ajouter des précisions.' + emailSignatureText
    }
  },
  'contact-thanks': {
    es: {
      subject: 'Hemos recibido tu solicitud, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#222;\"><p>Hola {{name}},</p><p>Hemos recibido tu mensaje y un miembro del equipo de soporte lo revisará en menos de 48 horas. Responderemos desde <a href=\"mailto:support@cojauny.com\">support@cojauny.com</a>.</p><p>Responde a este correo si necesitas añadir más información o archivos.</p></div>" + emailSignatureHtml('es'),
      text: 'Hola {{name}},\n\nHemos recibido tu solicitud y la revisaremos en menos de 48 h. Responderemos desde support@cojauny.com. Responde a este correo si necesitas añadir más información.' + emailSignatureText
    },
    en: {
      subject: 'We received your request, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#222;\"><p>Hi {{name}},</p><p>We received your message. Our support team will review it and reply within 48 hours from <a href=\"mailto:support@cojauny.com\">support@cojauny.com</a>.</p><p>If you want to add attachments or more details, reply to this email.</p></div>" + emailSignatureHtml('en'),
      text: 'Hi {{name}},\n\nThanks — we received your request and will respond within 48 hours from support@cojauny.com. Reply to add more details or attachments.' + emailSignatureText
    },
    de: {
      subject: 'Wir haben deine Anfrage erhalten, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#222;\"><p>Hallo {{name}},</p><p>Wir haben deine Nachricht erhalten. Unser Support-Team prüft sie und meldet sich innerhalb von 48 Stunden von <a href=\"mailto:support@cojauny.com\">support@cojauny.com</a>.</p><p>Antworte auf diese E-Mail, um Anhänge oder weitere Informationen zu senden.</p></div>" + emailSignatureHtml('de'),
      text: 'Hallo {{name}},\n\nWir haben deine Anfrage erhalten und melden uns innerhalb von 48 Stunden von support@cojauny.com. Antworte auf diese E-Mail, um zusätzliche Informationen hinzuzufügen.' + emailSignatureText
    },
    fr: {
      subject: 'Nous avons bien reçu votre demande, {{name}}',
      html: "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#222;\"><p>Bonjour {{name}},</p><p>Votre message est bien arrivé. Notre équipe support vous répondra sous 48 heures depuis <a href=\"mailto:support@cojauny.com\">support@cojauny.com</a>.</p><p>Répondez à cet e-mail pour ajouter des pièces jointes ou des informations supplémentaires.</p></div>" + emailSignatureHtml('fr'),
      text: 'Bonjour {{name}},\n\nMerci — nous avons bien reçu votre message. Nous vous répondrons sous 48 heures depuis support@cojauny.com. Répondez pour ajouter des précisions ou des pièces jointes.' + emailSignatureText
    }
  }
};

const staticTemplates: Record<Extract<TemplateKey, 'contact-notification' | 'internal-notification'>, TemplateContent> = {
  'contact-notification': {
    subject: 'Nuevo mensaje en el formulario de soporte',
    html:
      "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#222;\">" +
      `<div style=\"display:flex;gap:12px;align-items:center;margin-bottom:12px\"><img src=\"${logoUrl}\" width=\"64\" alt=\"Cojauny\" style=\"display:block;border:0\" /><div style=\"font-weight:700\">Cojauny</div></div>` +
      "<p><strong>Nombre:</strong> {{name}}</p><p><strong>Email:</strong> {{email}}</p><p><strong>Asunto:</strong> {{topic}}</p><p><strong>Mensaje:</strong></p><pre style=\"white-space:pre-wrap;font-family:inherit;\">{{message}}</pre><p style=\"color:#666;font-size:13px;margin-top:8px\">Idioma declarado: {{locale}}</p>" +
      emailSignatureHtml('en'),
    text:
      'Nuevo mensaje de {{name}} ({{email}})\nAsunto: {{topic}}\nIdioma: {{locale}}\n---\n{{message}}\n\nCojauny · ' + siteUrlFromEnv + '\nSupport: support@cojauny.com'
  },
  'internal-notification': {
    subject: 'Nuevo feedback en Cojauny',
    html:
      "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;color:#222;\">" +
      `<div style=\"display:flex;gap:12px;align-items:center;margin-bottom:12px\"><img src=\"${logoUrl}\" width=\"64\" alt=\"Cojauny\" style=\"display:block;border:0\" /><div style=\"font-weight:700\">Cojauny — Feedback</div></div>` +
      "<p><strong>{{name}}</strong> ({{email}}) envió un nuevo feedback.</p><p><strong>Sentimiento:</strong> {{sentiment}}</p><p><strong>Idioma:</strong> {{locale}}</p><p><strong>Mensaje:</strong></p><pre style=\"white-space:pre-wrap;font-family:inherit;\">{{message}}</pre>" +
      emailSignatureHtml('en'),
    text:
      '{{name}} ({{email}}) envió un nuevo feedback.\nSentimiento: {{sentiment}}\nIdioma: {{locale}}\n---\n{{message}}\n\nCojauny · ' + siteUrlFromEnv + ' · support@cojauny.com'
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
  const profileKey = templateSenders[key];
  const profile = senderProfiles[profileKey];

  // If the profile has its own credentials, authenticate and send as that account.
  if (profile.email && profile.password) {
    // send as the profile and authenticate as the profile
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
    // No password for alias: authenticate with default account but use alias as From
    console.warn(
      `SMTP_PASS_${profileKey.toUpperCase()} no está configurada. Autenticando con la cuenta predeterminada, pero usando la dirección alias como From.`
    );
    return {
      email: profile.email,
      name: profile.name,
      authEmail: defaultUser,
      authPassword: defaultPassword
    };
  }

  // No specific profile email: authenticate and send from default
  console.warn(`SMTP_USER_${profileKey.toUpperCase()} no está configurada. Se enviará desde la cuenta predeterminada.`);
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
  // Import SMTP client dynamically so polyfills run first and avoid std/io version mismatches
  const { SmtpClient } = await import('https://deno.land/x/smtp@v0.7.0/mod.ts');
  const client = new SmtpClient();
  // Authenticate with the resolved auth credentials, but set the From header to sender.email
  // which may be an alias. This requires the alias to be authorized as "send as" for the
  // authenticated account in Zoho.
  await client.connectTLS({
    hostname: smtpHost,
    port: smtpPort,
    username: sender.authEmail,
    password: sender.authPassword
  });

  await client.send({
    from: `${sender.name} <${sender.email}>`,
    to: recipient,
    subject: rendered.subject,
    content: rendered.text,
    html: rendered.html,
    headers: {
      'Reply-To': `${sender.name} <${sender.email}>`
    }
  });

  await client.close();
}

async function logEmail(payload: Payload, status: 'sent' | 'error', errorMessage?: string) {
  const { error } = await supabase.from('emails_sent').insert({
    recipient: payload.email,
    template: payload.template,
    status,
    error_message: errorMessage ?? null,
    metadata: {
      locale: payload.locale ?? 'es',
      variables: payload.variables ?? {}
    }
  });
  if (error) {
    console.error('No se pudo registrar el email en emails_sent', error);
  }
}

serve(async (request: Request) => {
  if (request.method !== 'POST') {
    return new Response('Método no permitido', { status: 405 });
  }

  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch (_error) {
    return new Response('Payload inválido', { status: 400 });
  }

  if (!payload.email || !payload.template) {
    return new Response('Faltan campos obligatorios', { status: 400 });
  }

  const locale = normalizeLocale(payload.locale);
  const template = resolveTemplate(payload.template, locale);
  if (!template) {
    return new Response('Plantilla no soportada', { status: 400 });
  }

  const rendered = render(template, payload.variables ?? {});
  const sender = resolveSender(payload.template);

  try {
    await sendViaSmtp(payload.email, rendered, sender);
    await logEmail(payload, 'sent');
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Fallo enviando email', error);
    const message = error instanceof Error ? error.message : String(error);
    const stack = error instanceof Error && error.stack ? error.stack : null;
    await logEmail(payload, 'error', `${message}${stack ? '\n' + stack : ''}`);
    return new Response(JSON.stringify({ error: 'No se pudo enviar el email', details: { message, stack } }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
});
