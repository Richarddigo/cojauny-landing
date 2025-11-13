# Plan de migración del contenido existente

Este documento detalla los pasos para trasladar el contenido del sitio actual (`https://ejemplo.com`) a la nueva landing basada en Next.js.

## 1. Extracción automática

1. Configura en `.env.local` la variable `CURRENT_SITE_URL` o pega el HTML en `CURRENT_SITE_HTML`.
2. Ejecuta `npm run migrate:content`.
3. Revisa `docs/extracted-content.json`:
   - `title` y `metaDescription` → añadir a `siteMetadata` en `src/lib/site.ts`.
   - `hero.heading` y `hero.paragraph` → actualizar el componente `Hero`.
   - `links` → comprobar que todos los enlaces existan en la nueva versión.
   - `images` → preparar listado para descargar manualmente.

## 2. Mapeo de contenido

| Contenido original                       | Destino en Next.js                                |
| ---------------------------------------- | ------------------------------------------------- |
| Título y descripción HTML                | `src/lib/site.ts`                                 |
| Hero principal                           | `src/components/Hero.tsx`                         |
| Sección de características               | `src/components/Features.tsx`                     |
| Mockups / capturas                       | `public/images/*`                                 |
| Formulario de feedback / beta            | `src/components/BetaSignupForm.tsx`, `FeedbackForm.tsx` |
| Avisos legales                           | `src/app/legal/*`                                 |
| Recursos/roadmap                         | `src/app/docs/sdk-plan/page.tsx`                  |

## 3. Migración de imágenes

1. Ejecuta `npm run migrate:content` para obtener lista de `images`.
2. Descarga las imágenes desde el sitio origen.
3. Convierte a WebP/AVIF si procede (usa `tools/convert_to_webp.py`).
4. Guarda en `public/images/` respetando naming consistente.
5. Actualiza rutas en los componentes (`next/image`).

## 4. Migración de textos

1. Copia textos del HTML original siguiendo el mapeo de la tabla.
2. Actualiza `Hero`, `Features`, formularios y secciones legales.
3. Verifica ortografía y consistencia terminológica.

## 5. SEO y meta datos

1. Copia meta tags relevantes (`og:title`, `og:description`, `twitter:card`).
2. Actualiza `siteMetadata`, `structuredData` y los objetos OG en `src/lib/site.ts`.
3. Ejecuta `npm run build` y revisa `/sitemap.xml` y `/robots.txt`.

## 6. Validación

- Ejecuta `npm run lint` y `npm run test`.
- Realiza un pase manual usando el checklist de `CHECKLIST.md`.
- Comprueba la demo desplegada en Vercel.

## 7. Automatización opcional

- Modificar `scripts/extract-current-site.ts` para transformar HTML en markdown parcial si se necesitan secciones adicionales.
- Usar `scripts/backup-supabase.ts` para versionar datos previos si ya existían tablas.
