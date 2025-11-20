// deno-lint-ignore-file no-explicit-any
import { serve } from 'https://deno.land/std@0.192.0/http/server.ts';
import { SmtpClient } from 'https://deno.land/x/smtp@v0.7.0/mod.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.6';

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

const senderProfiles: Record<SenderKey, { email: string; password: string; name: string }> = {
  beta: {
    email: Deno.env.get('SMTP_USER_BETA') ?? defaultUser,
    password: Deno.env.get('SMTP_PASS_BETA') ?? defaultPassword,
    name: Deno.env.get('SMTP_FROM_NAME_BETA') ?? 'Cojauny Beta'
  },
  feedback: {
    email: Deno.env.get('SMTP_USER_FEEDBACK') ?? defaultUser,
    password: Deno.env.get('SMTP_PASS_FEEDBACK') ?? defaultPassword,
    name: Deno.env.get('SMTP_FROM_NAME_FEEDBACK') ?? 'Cojauny Feedback'
  },
  support: {
    email: Deno.env.get('SMTP_USER_SUPPORT') ?? defaultUser,
    password: Deno.env.get('SMTP_PASS_SUPPORT') ?? defaultPassword,
    name: Deno.env.get('SMTP_FROM_NAME_SUPPORT') ?? 'Cojauny Support Team'
  }
};

const supabaseUrl = Deno.env.get('BASE_URL') ?? '';
const supabaseKey = Deno.env.get('BASE_SERVICE_ROLE_KEY') ?? '';

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
  }
});

const localizedTemplates: Record<Extract<TemplateKey, 'beta-confirmation' | 'feedback-thanks' | 'contact-thanks'>, Record<Locale, TemplateContent>> = {
  'beta-confirmation': {
    es: {
      subject: 'Tu token de acceso a la beta de Cojauny',
      html:
        '<p>Hola {{name}},</p><p>Gracias por unirte a la beta privada de Cojauny. Este es tu token personal:</p><p style="font-size:26px;font-weight:700;letter-spacing:2px;">{{confirmation_token}}</p><p>Úsalo en las próximas 72 horas dentro de la app o responde a este correo si necesitas ayuda.</p><p>— Equipo Cojauny</p>',
      text:
        'Hola {{name}},\n\nGracias por unirte a la beta privada de Cojauny. Tu token personal es {{confirmation_token}}. Úsalo en las próximas 72 horas o responde a este correo si necesitas ayuda.\n\n— Equipo Cojauny'
    },
    en: {
      subject: 'Your Cojauny beta access token',
      html:
        '<p>Hi {{name}},</p><p>Thanks for joining the Cojauny private beta. Here is your personal token:</p><p style="font-size:26px;font-weight:700;letter-spacing:2px;">{{confirmation_token}}</p><p>Use it within the next 72 hours inside the app or reply to this email if you need assistance.</p><p>— Cojauny Team</p>',
      text:
        'Hi {{name}},\n\nThanks for joining the Cojauny private beta. Your personal token is {{confirmation_token}}. Use it within the next 72 hours inside the app or reply to this email for assistance.\n\n— Cojauny Team'
    },
    de: {
      subject: 'Dein Zugangscode für die Cojauny-Beta',
      html:
        '<p>Hallo {{name}},</p><p>willkommen in der privaten Cojauny-Beta. Hier ist dein persönlicher Code:</p><p style="font-size:26px;font-weight:700;letter-spacing:2px;">{{confirmation_token}}</p><p>Nutze ihn innerhalb der nächsten 72 Stunden in der App oder antworte auf diese E-Mail, falls du Hilfe brauchst.</p><p>— Dein Cojauny Team</p>',
      text:
        'Hallo {{name}},\n\nwillkommen in der privaten Cojauny-Beta. Dein persönlicher Code lautet {{confirmation_token}}. Verwende ihn innerhalb der nächsten 72 Stunden in der App oder antworte auf diese E-Mail, wenn du Unterstützung brauchst.\n\n— Dein Cojauny Team'
    },
    fr: {
      subject: 'Votre code d’accès à la bêta Cojauny',
      html:
        '<p>Bonjour {{name}},</p><p>Merci de rejoindre la bêta privée de Cojauny. Voici votre code personnel :</p><p style="font-size:26px;font-weight:700;letter-spacing:2px;">{{confirmation_token}}</p><p>Utilisez-le dans les 72 prochaines heures dans l’app ou répondez à ce message si vous avez besoin d’aide.</p><p>— Équipe Cojauny</p>',
      text:
        'Bonjour {{name}},\n\nMerci de rejoindre la bêta privée de Cojauny. Votre code personnel est {{confirmation_token}}. Utilisez-le dans les 72 prochaines heures ou répondez à cet e-mail si vous avez besoin d’aide.\n\n— Équipe Cojauny'
    }
  },
  'feedback-thanks': {
    es: {
      subject: '¡Gracias por tu feedback, {{name}}! 💌',
      html:
        '<p>Hola {{name}},</p><p>Tu mensaje llegó perfecto y ya lo está revisando el equipo de producto. Estas notas nos ayudan a priorizar qué lanzar en la siguiente iteración.</p><p>Si quieres ampliar la información, basta con responder a este correo.</p><p>— Cojauny Feedback</p>',
      text:
        'Hola {{name}},\n\nTu mensaje llegó perfecto y el equipo de producto ya lo está revisando. Responde a este correo si quieres ampliar la información.\n\n— Cojauny Feedback'
    },
    en: {
      subject: 'Thanks for your Cojauny feedback, {{name}}',
      html:
        '<p>Hi {{name}},</p><p>Your note just landed in our product queue. Insights like yours guide the next Cojauny releases.</p><p>If you want to add more context simply reply to this email.</p><p>— Cojauny Feedback</p>',
      text:
        'Hi {{name}},\n\nYour note just landed in our product queue. Reply to this email any time you want to add more context.\n\n— Cojauny Feedback'
    },
    de: {
      subject: 'Danke für dein Feedback zu Cojauny, {{name}}',
      html:
        '<p>Hallo {{name}},</p><p>Deine Nachricht ist angekommen und das Produktteam schaut sie sich bereits an. Solches Feedback hilft uns bei den nächsten Releases.</p><p>Wenn du mehr Details teilen möchtest, antworte einfach auf diese E-Mail.</p><p>— Cojauny Feedback</p>',
      text:
        'Hallo {{name}},\n\nDeine Nachricht ist angekommen und unser Produktteam prüft sie bereits. Antworte einfach auf diese E-Mail, wenn du noch etwas ergänzen möchtest.\n\n— Cojauny Feedback'
    },
    fr: {
      subject: 'Merci pour votre retour sur Cojauny, {{name}}',
      html:
        '<p>Bonjour {{name}},</p><p>Votre message est bien arrivé et notre équipe produit est déjà dessus. Vos retours influencent directement les prochaines fonctionnalités.</p><p>Pour ajouter des précisions, il suffit de répondre à cet email.</p><p>— Cojauny Feedback</p>',
      text:
        'Bonjour {{name}},\n\nVotre message est bien arrivé et notre équipe produit l’examine. Répondez simplement à cet email si vous souhaitez ajouter des précisions.\n\n— Cojauny Feedback'
    }
  },
  'contact-thanks': {
    es: {
      subject: 'Tu solicitud ya está en el inbox de soporte',
      html:
        '<p>Hola {{name}},</p><p>Recibimos tu mensaje y una persona del equipo de soporte lo revisará en menos de 48h. Te responderemos desde support@cojauny.com.</p><p>Si necesitas adjuntar más detalles solo responde a este correo.</p><p>— Cojauny Support</p>',
      text:
        'Hola {{name}},\n\nRecibimos tu mensaje y lo revisaremos en menos de 48 h. Puedes responder a este correo para añadir más detalles.\n\n— Cojauny Support'
    },
    en: {
      subject: 'We are on your request, {{name}}',
      html:
        '<p>Hi {{name}},</p><p>Your message reached the Cojauny support inbox. Someone in the team will get back to you within 48h from support@cojauny.com.</p><p>Need to share more context? Reply to this email.</p><p>— Cojauny Support</p>',
      text:
        'Hi {{name}},\n\nYour message reached the Cojauny support inbox. Expect an answer within 48 h and reply to this email if you want to add details.\n\n— Cojauny Support'
    },
    de: {
      subject: 'Wir kümmern uns um deine Anfrage, {{name}}',
      html:
        '<p>Hallo {{name}},</p><p>Deine Nachricht ist im Support-Postfach eingegangen. Jemand aus dem Team meldet sich innerhalb von 48 Stunden bei dir (support@cojauny.com).</p><p>Für weitere Informationen kannst du einfach auf diese E-Mail antworten.</p><p>— Cojauny Support</p>',
      text:
        'Hallo {{name}},\n\nDeine Nachricht ist im Support-Postfach angekommen. Wir melden uns innerhalb von 48 Stunden. Antworte auf diese Mail, wenn du mehr Details brauchst.\n\n— Cojauny Support'
    },
    fr: {
      subject: 'Nous avons bien reçu votre demande, {{name}}',
      html:
        '<p>Bonjour {{name}},</p><p>Votre message est arrivé dans la boîte de support Cojauny. Nous reviendrons vers vous sous 48h depuis support@cojauny.com.</p><p>Besoin d’ajouter des détails ? Répondez simplement à cet email.</p><p>— Cojauny Support</p>',
      text:
        'Bonjour {{name}},\n\nVotre message est arrivé dans la boîte de support Cojauny. Nous vous répondrons sous 48 h. Répondez à cet email pour ajouter des détails.\n\n— Cojauny Support'
    }
  }
};

const staticTemplates: Record<Extract<TemplateKey, 'contact-notification' | 'internal-notification'>, TemplateContent> = {
  'contact-notification': {
    subject: 'Nuevo mensaje en el formulario de soporte',
    html:
      '<p>Nombre: {{name}}</p><p>Email: {{email}}</p><p>Asunto: {{topic}}</p><p>Mensaje:</p><pre style="white-space:pre-wrap;font-family:inherit;">{{message}}</pre><p>Idioma declarado: {{locale}}</p>',
    text:
      'Nuevo mensaje de {{name}} ({{email}})\nAsunto: {{topic}}\nIdioma: {{locale}}\n---\n{{message}}'
  },
  'internal-notification': {
    subject: 'Nuevo feedback en Cojauny',
    html:
      '<p>{{name}} ({{email}}) envió un nuevo feedback.</p><p>Sentimiento: {{sentiment}}</p><p>Idioma: {{locale}}</p><p>Mensaje:</p><pre style="white-space:pre-wrap;font-family:inherit;">{{message}}</pre>',
    text:
      '{{name}} ({{email}}) envió un nuevo feedback.\nSentimiento: {{sentiment}}\nIdioma: {{locale}}\n---\n{{message}}'
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

function resolveSender(key: TemplateKey) {
  const profileKey = templateSenders[key];
  const profile = senderProfiles[profileKey];
  if (!profile.email || !profile.password) {
    throw new Error(`No hay credenciales SMTP configuradas para ${profileKey}`);
  }
  return profile;
}

async function sendViaSmtp(
  recipient: string,
  rendered: ReturnType<typeof render>,
  sender: { email: string; password: string; name: string }
) {
  const client = new SmtpClient();
  await client.connectTLS({
    hostname: smtpHost,
    port: smtpPort,
    username: sender.email,
    password: sender.password
  });

  await client.send({
    from: `${sender.name} <${sender.email}>`,
    to: recipient,
    subject: rendered.subject,
    content: rendered.text,
    html: rendered.html
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

serve(async (request) => {
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
    await logEmail(payload, 'error', error instanceof Error ? error.message : String(error));
    return new Response(JSON.stringify({ error: 'No se pudo enviar el email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
});
