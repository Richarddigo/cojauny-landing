# Cojauny Landing

Landing page oficial de Cojauny construida con Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Supabase y Zoho Mail.

## Requisitos previos

- Node.js 18+
- Cuenta de Supabase (`mi-proyecto-supabase`)
- Cuenta de Zoho Mail con acceso SMTP/API
- Cuenta de Vercel para el despliegue

## Instalación

```bash
npm install
```

Copia `.env.example` a `.env.local` y completa las variables de entorno:

```bash
cp .env.example .env.local
```

Variables clave:

- `NEXT_PUBLIC_BASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `BASE_SERVICE_ROLE_KEY`, `SUPABASE_PROJECT_ID`, `BASE_URL`
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- `SMTP_USER_BETA`, `SMTP_USER_FEEDBACK`, `SMTP_USER_SUPPORT` (opcional `SMTP_PASS_*` y `SMTP_FROM_NAME_*`)
- `EMAIL_FROM_ADDRESS`, `EMAIL_ADMIN_RECIPIENT`
- `CURRENT_SITE_URL` o `CURRENT_SITE_HTML` para la migración

## Desarrollo local

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Scripts útiles

- `npm run lint` – linting con ESLint.
- `npm run type-check` – verificación estricta de TypeScript.
- `npm run test` – ejecuta Jest y React Testing Library.
- `npm run build` – compila para producción (SSG/ISR).
- `npm run migrate:content` – extrae contenido del sitio actual (`scripts/extract-current-site.ts`).
- `npm run supabase:backup` – exporta tablas críticas a `docs/backups` (`scripts/backup-supabase.ts`).

## Supabase

1. Ejecuta `SUPABASE_SCHEMA.sql` en el proyecto Supabase (`mi-proyecto-supabase`).
2. Habilita las políticas RLS y asegúrate de que la función `anonymize_user_data` se haya creado.
3. Despliega la función edge `supabase/functions/send-beta-email`:

```bash
supabase functions deploy send-beta-email --project-ref mi-proyecto-supabase
```

4. Configura las variables de la función edge (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_USER_BETA`, `SMTP_USER_FEEDBACK`, `SMTP_USER_SUPPORT`, `SMTP_FROM_NAME_*`).

## Despliegue en Vercel

1. Ejecuta un build local para validar:

```bash
npm run build
```

2. Conecta el repositorio `cojauny-landing` a Vercel.
3. Define las variables en el dashboard de Vercel (incluyendo las claves de Supabase y Zoho).
4. El workflow de GitHub Actions (`.github/workflows/ci.yml`) compila, ejecuta tests y despliega en Vercel usando los secretos `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.

## Emails

- Plantillas de referencia en `emails/templates` y contenido localizado dentro de `supabase/functions/send-beta-email`.
- La función edge usa SMTP (Zoho) con remitentes dedicados: `beta@`, `feedback@` y `support@`.
- `src/lib/email.ts` expone `triggerEdgeEmailFunction` para invocar la función y se encarga de pasar el `locale` del usuario.

## Migración de contenido

1. Establece `CURRENT_SITE_URL` o `CURRENT_SITE_HTML` en `.env.local`.
2. Ejecuta `npm run migrate:content` para generar `docs/extracted-content.json`.
3. Sigue `MIGRATION.md` para asignar textos e imágenes.

## Backup de datos

Ejecuta `npm run supabase:backup` con `BASE_URL` y `BASE_SERVICE_ROLE_KEY` configurados. Los archivos se guardan en `docs/backups`.

## Pruebas y calidad

- Tests unitarios en `__tests__/` para componentes clave y librerías.
- Objetivo de Lighthouse ≥ 90 en Performance/SEO/Best Practices/Accessibility.
- Accesibilidad: WCAG 2.1 AA (usa `npm run test` y verifica manualmente con stories y Lighthouse).

## Recursos adicionales

- Plan de integración con SDK móviles en `src/app/docs/sdk-plan`.
- Políticas legales en `src/app/legal/*` (versiones base, actualiza según necesidades legales).
- Checklist de cumplimiento en `CHECKLIST.md`.

## Licencia

MIT – ver `LICENSE`.
