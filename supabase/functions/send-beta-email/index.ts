// deno-lint-ignore-file no-explicit-any
import { serve } from 'https://deno.land/std@0.192.0/http/server.ts';
import { SmtpClient } from 'https://deno.land/x/smtp@v0.7.0/mod.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.6';

interface Payload {
  email: string;
  template: 'beta-confirmation' | 'feedback-thanks' | 'internal-notification';
  variables: Record<string, string>;
}

const smtpUser = Deno.env.get('ZOHO_SMTP_USER') ?? '';
const smtpPassword = Deno.env.get('ZOHO_SMTP_PASSWORD') ?? '';
const zohoApiKey = Deno.env.get('ZOHO_API_KEY');
const zohoAccountId = Deno.env.get('ZOHO_ACCOUNT_ID');
const fromAddress = Deno.env.get('EMAIL_FROM_ADDRESS') ?? smtpUser;

const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
  }
});

const templates: Record<Payload['template'], { subject: string; html: string; text: string }> = {
  'beta-confirmation': {
    subject: 'Tu token de acceso a la beta de Cojauny',
    html: `Hola {{name}},<br/><br/>Tu token de activación es <strong>{{confirmation_token}}</strong>.`,
    text: 'Hola {{name}},\n\nTu token de activación es {{confirmation_token}}.'
  },
  'feedback-thanks': {
    subject: 'Gracias por tu feedback para Cojauny',
    html: `Hola {{name}},<br/>Gracias por ayudarnos a mejorar Cojauny.`,
    text: 'Hola {{name}}, gracias por ayudarnos a mejorar Cojauny.'
  },
  'internal-notification': {
    subject: 'Nuevo evento importante en Cojauny',
    html: `Nuevo feedback de {{name}} ({{email}}): {{message}}`,
    text: 'Nuevo feedback recibido'
  }
};

function render(template: { subject: string; html: string; text: string }, variables: Record<string, string>) {
  const replace = (input: string) =>
    input.replace(/{{(\w+)}}/g, (_, key) => variables[key] ?? '');
  return {
    subject: replace(template.subject),
    html: replace(template.html),
    text: replace(template.text)
  };
}

async function sendViaZohoApi(payload: Payload, rendered: ReturnType<typeof render>) {
  if (!zohoApiKey || !zohoAccountId) {
    throw new Error('ZOHO_API_KEY y ZOHO_ACCOUNT_ID son necesarios para la integración HTTP');
  }

  const response = await fetch(
    `https://mail.zoho.eu/api/accounts/${zohoAccountId}/messages`,
    {
      method: 'POST',
      headers: {
        Authorization: `Zoho-oauthtoken ${zohoApiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        fromAddress,
        toAddress: [payload.email],
        subject: rendered.subject,
        content: rendered.html,
        mailFormat: 'html'
      })
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Zoho API error: ${errorText}`);
  }
}

async function sendViaSmtp(payload: Payload, rendered: ReturnType<typeof render>) {
  if (!smtpUser || !smtpPassword) {
    throw new Error('Configura ZOHO_SMTP_USER y ZOHO_SMTP_PASSWORD para el envío SMTP');
  }

  const client = new SmtpClient();
  await client.connectTLS({
    hostname: 'smtp.zoho.eu',
    port: 465,
    username: smtpUser,
    password: smtpPassword
  });

  await client.send({
    from: fromAddress,
    to: payload.email,
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
    error_message: errorMessage ?? null
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

  const template = templates[payload.template];
  if (!template) {
    return new Response('Plantilla no soportada', { status: 400 });
  }

  const rendered = render(template, payload.variables ?? {});

  try {
    if (zohoApiKey && zohoAccountId) {
      await sendViaZohoApi(payload, rendered);
    } else {
      await sendViaSmtp(payload, rendered);
    }
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
