import { env } from './env';
export type EmailTemplateName = 'beta-confirmation' | 'feedback-thanks' | 'internal-notification';

export interface EmailEdgePayload {
  email: string;
  template: EmailTemplateName;
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

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY ?? ''}`
    },
    body: JSON.stringify(event)
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
    description: 'Confirma el acceso de un nuevo beta tester con token único.'
  },
  'feedback-thanks': {
    description: 'Agradece el feedback recibido y mantiene el contacto.'
  },
  'internal-notification': {
    description: 'Notifica al equipo interno cuando llega feedback relevante.'
  }
};
