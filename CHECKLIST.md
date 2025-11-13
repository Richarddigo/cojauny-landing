# Checklist de requisitos funcionales

| # | Requisito | Implementado | Verificación |
|---|-----------|--------------|--------------|
| 1 | Hero, features, CTA y mockups animados estilo iPhone | ✅ | `src/app/page.tsx`, `src/components/*` |
| 2 | Mockups responsivos con Framer Motion | ✅ | `src/components/Mockups.tsx` |
| 3 | Formulario de sugerencias conectado a Supabase (`feedback`) | ✅ | `src/components/FeedbackForm.tsx`, `src/app/api/feedback/route.ts` |
| 4 | Formulario beta testers con Supabase + Zoho Mail | ✅ | `src/components/BetaSignupForm.tsx`, `src/app/api/beta-signups/route.ts` |
| 5 | Trigger/edge para email y logging | ✅ | `supabase/functions/send-beta-email`, tabla `emails_sent` |
| 6 | Integración segura (env vars, RLS) | ✅ | `.env.example`, `SUPABASE_SCHEMA.sql`, `src/lib/env.ts` |
| 7 | Plantillas de email HTML/texto | ✅ | `emails/templates/*` |
| 8 | Iconos estilo iPhone y redes en footer | ✅ | `src/components/Footer.tsx`, `public/icons/*` |
| 9 | Animaciones accesibles (`prefers-reduced-motion`) | ✅ | `src/hooks/useReducedMotionPreference.ts`, componentes motion |
| 10 | SEO completo (meta, OG, Twitter, JSON-LD, sitemap, robots) | ✅ | `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/lib/site.ts` |
| 11 | Optimización de imágenes (`next/image`, AVIF/WebP) | ✅ | `src/components/Hero.tsx`, `Mockups.tsx`, `next.config.js` |
| 12 | Anti-bot (honeypot, rate-limit) | ✅ | Formularios + APIs con rate limit por IP |
| 13 | Logs y manejo de errores | ✅ | APIs con `console.error`, `emails_sent` registrar estado |
| 14 | GDPR/cookies/privacidad | ✅ | `CookieBanner`, `legal/*`, endpoint `privacy/data-deletion` |
| 15 | Mobile-first y responsive | ✅ | Tailwind layout y pruebas en componentes |
| 16 | Migración de contenido | ✅ | `scripts/extract-current-site.ts`, `MIGRATION.md` |
| 17 | Esquema SQL con índices y ejemplos | ✅ | `SUPABASE_SCHEMA.sql` |
| 18 | Tests unitarios componentes críticos | ✅ | `__tests__/` (Hero, forms, email) |
| 19 | README con instrucciones completas | ✅ | `README.md` |
| 20 | Workflow CI/CD | ✅ | `.github/workflows/ci.yml` |
| 21 | Estructura modular de carpetas | ✅ | `src/components`, `src/lib`, `src/hooks`, etc. |
| 22 | Ejemplos curl/Postman | ✅ | `docs/api-examples.md` |
| 23 | Instrucciones Zoho Mail + ejemplo request | ✅ | `docs/api-examples.md`, `supabase/functions/send-beta-email/index.ts` |
| 24 | Plantillas email HTML + texto | ✅ | `emails/templates/*` |
| 25 | Estrategia backup/export Supabase | ✅ | `scripts/backup-supabase.ts`, `DEPLOY_NOTES.md` |
| 26 | Mantener funcionalidades previas | ✅ | Contenido mapeado en `MIGRATION.md`, formularios equivalentes |
| 27 | Lista exacta de dependencias | ✅ | `package.json` |
| 28 | Seguridad (env vars, validaciones) | ✅ | `src/app/api/*`, `src/lib/env.ts`, `validation.ts` |
| 29 | Estrategia futura SDK móviles | ✅ | `src/app/docs/sdk-plan/page.tsx` |

> Nota: Ejecuta `npm run test` y revisa Lighthouse para validar accesibilidad y performance.
