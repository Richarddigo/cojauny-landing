# Notas de despliegue y operación

## Estrategia de despliegue

1. **CI/CD**: GitHub Actions (`.github/workflows/ci.yml`) ejecuta lint, tests y build en cada push/PR. Solo despliega en Vercel cuando la rama es `main`.
2. **Entornos**:
   - `preview`: ramas > pull request (Vercel genera automáticamente).
   - `production`: rama `main`.
3. **Variables de entorno**: configurar en Vercel (`Project Settings → Environment Variables`). Utiliza los mismos nombres que en `.env.example`.
4. **ISR**: `src/app/page.tsx` establece `revalidate = 60` para refrescar contenido cada minuto.

## Supabase

- Provisiona tablas y políticas con `SUPABASE_SCHEMA.sql`.
- Despliega la función edge `send-beta-email` y configura secretos (`ZOHO_*`, `EMAIL_FROM_ADDRESS`).
- Habilita logs en Supabase para monitorizar errores en `emails_sent`.

## Email (Zoho)

- Configura SMTP (puerto 465) o API (oAuth token + account ID).
- La función edge detecta automáticamente qué método usar según variables disponibles.
- Define SPF/DKIM/DMARC en tu dominio para evitar spam.

## Costes estimados

| Servicio   | Plan recomendado            | Coste aproximado |
| ---------- | --------------------------- | ---------------- |
| Vercel     | Hobby (incluye 1 proyecto)  | 0 €              |
| Supabase   | Free tier (PostgreSQL + Auth + Functions) | 0 €              |
| Zoho Mail  | Mail Lite (5 GB)            | ~1 € / usuario / mes |
| Analytics  | Google Analytics / Plausible opcional | 0 € / 9 € mes |

## Escalabilidad

- **Vercel**: soporta picos vía CDN y edge network; considerar plan Pro si superas 100 GB de ancho de banda.
- **Supabase**: monitorizar conexiones concurrentes y tamaño de tabla; migrar a plan Pro si >500 usuarios activos simultáneos.
- **Emails**: configurar colas/reintentos si el volumen supera los límites de Zoho (300 envíos/día en plan básico).

## Observabilidad

- Logs serverless: Vercel (`vercel logs`) y Supabase (`supabase functions logs`).
- Añadir Sentry o LogRocket en el futuro (`src/lib/env.ts` tiene placeholder `NEXT_PUBLIC_ANALYTICS_ID`).
- `emails_sent` almacena estado del envío (ok/error) para auditoría.

## Seguridad

- Mantén claves en Variables de entorno, nunca en el repositorio.
- Revisa periódicamente políticas RLS en Supabase.
- Activa 2FA en Vercel, GitHub y Zoho.
- Considera rotar `SUPABASE_SERVICE_ROLE_KEY` trimestralmente.

## Próximos pasos sugeridos

1. Implementar verificación de dominio en Zoho y Vercel antes del lanzamiento público.
2. Añadir monitorización de Core Web Vitals (Google Analytics 4 custom events o Vercel Analytics).
3. Evaluar caching adicional con Vercel Edge Config si la demanda aumenta.
