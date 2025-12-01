-- ============================================================
-- Mejoras a tabla emails_sent para logging completo
-- Ejecutar en Supabase SQL Editor
-- ============================================================

-- 1. Añadir columna subject para búsqueda/filtrado rápido
ALTER TABLE public.emails_sent 
ADD COLUMN IF NOT EXISTS subject text;

-- 2. Añadir columna smtp_host para auditoría de qué servidor se usó
ALTER TABLE public.emails_sent 
ADD COLUMN IF NOT EXISTS smtp_host text;

-- 3. Añadir columna message_id para tracking (el ID que devuelve el servidor SMTP)
ALTER TABLE public.emails_sent 
ADD COLUMN IF NOT EXISTS message_id text;

-- 4. Añadir columna locale para saber en qué idioma se envió
ALTER TABLE public.emails_sent 
ADD COLUMN IF NOT EXISTS locale text DEFAULT 'es';

-- 5. Índices para consultas frecuentes
CREATE INDEX IF NOT EXISTS emails_sent_recipient_idx ON public.emails_sent (recipient);
CREATE INDEX IF NOT EXISTS emails_sent_template_idx ON public.emails_sent (template);
CREATE INDEX IF NOT EXISTS emails_sent_status_idx ON public.emails_sent (status);
CREATE INDEX IF NOT EXISTS emails_sent_created_idx ON public.emails_sent (created_at);

-- 6. Comentarios descriptivos
COMMENT ON TABLE public.emails_sent IS 'Log de todos los emails enviados desde Firebase Functions para auditoría y GDPR compliance';
COMMENT ON COLUMN public.emails_sent.subject IS 'Asunto del email enviado';
COMMENT ON COLUMN public.emails_sent.smtp_host IS 'Servidor SMTP usado para el envío';
COMMENT ON COLUMN public.emails_sent.message_id IS 'Message-ID devuelto por el servidor SMTP';
COMMENT ON COLUMN public.emails_sent.locale IS 'Idioma del template usado';
