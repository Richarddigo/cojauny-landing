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
  if (!env.SUPABASE_PROJECT_ID) {
    throw new Error('SUPABASE_PROJECT_ID no está configurado');
  }

  return `https://${env.SUPABASE_PROJECT_ID}.functions.supabase.co/send-beta-email`;
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
    const payload = await response.json().catch(() => ({}));
    throw new Error(
      payload.error ?? 'No se pudo invocar la función de Supabase para enviar el correo'
    );
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
