import { env } from './env';
import type { Locale } from '@/locales/config';

export type EmailTemplateName =
  | 'beta-confirmation'
  | 'feedback-thanks'
  | 'internal-notification'
  | 'contact-thanks'
  | 'contact-notification';

export interface EmailEdgePayload {
  email: string;
  template: EmailTemplateName;
  locale?: Locale;
  variables: Record<string, string>;
}

export function getEdgeEmailUrl() {
  // Prefer explicit project id, otherwise try to derive it from BASE_URL or BASE_URL
  const projectId = env.BASE_PROJECT_ID ?? (() => {
    try {
      const candidate = process.env.BASE_URL ?? process.env.BASE_URL ?? process.env.NEXT_PUBLIC_BASE_URL;
      if (!candidate) return undefined;
      const parsed = new URL(candidate);
      const hostParts = parsed.hostname.split('.');
      if (hostParts.length > 0) return hostParts[0];
    } catch (_e) {
      return undefined;
    }
    return undefined;
  })();

  if (!projectId) {
    throw new Error('BASE_PROJECT_ID no está configurado y no se pudo derivar a partir de BASE_URL');
  }

  return `https://${projectId}.functions.supabase.co/manage-forms`;
}

export async function triggerEdgeEmailFunction(event: EmailEdgePayload) {
  const url = getEdgeEmailUrl();
  const payload = { ...event, locale: event.locale ?? 'es' };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.BASE_SERVICE_ROLE_KEY ?? ''}`
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const bodyText = await response.text().catch(() => '');
    let parsed: any = {};
    try {
      parsed = JSON.parse(bodyText || '{}');
    } catch (_e) {
      parsed = { error: bodyText };
    }
    const message = parsed.error ?? parsed.message ?? `Edge function error: ${response.status}`;
    const err = new Error(message);
    (err as any).status = response.status;
    (err as any).body = parsed;
    throw err;
  }

  return response.json();
}

export const emailTemplateMap: Record<EmailTemplateName, { description: string }> = {
  'beta-confirmation': {
    description: 'Envía el token de acceso a la beta con el remitente beta@cojauny.com.'
  },
  'feedback-thanks': {
    description: 'Agradece el feedback recibido desde feedback@cojauny.com en el idioma del usuario.'
  },
  'contact-thanks': {
    description: 'Confirma la recepción de solicitudes de soporte desde support@cojauny.com.'
  },
  'contact-notification': {
    description: 'Notifica al equipo de soporte cada vez que llega un nuevo mensaje.'
  },
  'internal-notification': {
    description: 'Envía un resumen interno cuando se recibe feedback destacado.'
  }
};
