# Estado actualizado de la auditoría — 30/09/2026

Este bloque sustituye los estados pendientes de la auditoría inicial conservada más abajo. Los cambios están implementados en `improve/landing-security-content`, PR normal #13: https://github.com/Richarddigo/cojauny-landing/pull/13. El mensaje general usa transporte compartido en ES/EN/DE/FR; taxi se conserva solo en ejemplos y guías específicas. Requieren validación del entorno antes del despliegue.

## Trabajo importante completado

- Frontend y contenido comercial ES/EN/DE/FR: propuesta clara, navegación responsive, demo con teclado, movimiento reducido, CTA accesibles y contraste corregido. Se mantienen registro, feedback, referidos y selección de idioma.
- Formularios: límites de tamaño y campos, consentimiento legal explícito en el hero, controles de origen, Redis y Turnstile con errores controlados. En producción, la falta de infraestructura devuelve 503 y no un registro ficticio.
- Persistencia: registro, contador de referidos y correos pendientes en una operación SQL atómica. El correo se reintenta desde una cola duradera; la respuesta de éxito significa solicitud guardada, no entrega de email comprobada.
- Referidos: estadísticas vinculadas a una sesión firmada HttpOnly. Se elimina la consulta pública por email. Un duplicado no revela identificador ni enlace privado; la consulta propia exige la sesión del navegador original. Recuperación segura entre dispositivos queda como mejora futura.
- Privacidad: consentimiento sincronizado entre componentes y pestañas, reapertura desde el pie, revocación y caducidad. Analítica y asignación persistente de variante condicionadas al consentimiento. Se dejan de guardar IP y agente del navegador en nuevos registros.
- Dependencias actualizadas, Next 16.3.3 y eliminación de orígenes comodín del optimizador de imágenes. CSP en modo informe para validar proveedores antes de aplicar bloqueo.
- SEO: idioma correcto en HTML servido, canonical/hreflang específicos en páginas legales y blog, alternates únicamente para traducciones existentes, sitemap con índice del blog, RSS actualizado, JSON-LD sin precios ni prestaciones ficticias y escape de caracteres peligrosos.
- Blog: revisados los 12 grupos anteriores y las entradas de aeropuertos en cuatro idiomas. Añadidos cinco grupos nuevos (20 versiones), tareas 01–05 actualizadas. Se eliminan testimonios, pilotos, certificaciones y métricas sin pruebas.
- Operación: CI de calidad, preflight de configuración, endpoint protegido de reintentos/estado de correo, medición consentida de Web Vitals y pasos de conversión sin datos personales. Procedimiento en tareas-06.md.
- Contraste de la app móvil: revisión de fuentes en `cojauny-app` SHA `fe74a12d39614e21c8d43393cba3eb2cc417ce8a`. Verificación gubernamental y monetización desactivadas en v1; matching y chat cercano tienen flags desactivados por defecto. No se promete disponibilidad desplegada ni chat offline.

## Validación realizada

- 32 suites / 147 pruebas Jest: pasan; incluyen persistencia SQL real en PGlite, duplicados, rollback de cola, borrado de correos asociados, sesiones y consentimiento.
- 28 pruebas Chromium/móvil: pasan; cuatro idiomas, WCAG automática sobre todas las secciones, teclado, menús y revocación. No equivalen a una auditoría manual completa con lector de pantalla.
- 128 URLs comprobadas sobre HTML servido: cero fallos de idioma, canonical, hreflang, H1 o JSON-LD.
- TypeScript, ESLint y build de producción comprobados. Las pruebas de servicios externos usan mocks; no acreditan entrega real ni disponibilidad de Neon/Redis/Turnstile.
- Lighthouse local y capturas responsive se entregan con el informe. Son mediciones de laboratorio; no prueban mejoras de conversión ni Core Web Vitals de usuarios reales.

## P0 — requerido antes de desplegar

- [ ] Aplicar `database/migrations/20260930-mail-outbox.sql` a staging y después a producción con respaldo y revisión. La migración también actualiza la anonimización para eliminar correos asociados.
- [ ] Configurar Neon, Resend/remitente verificado, destino de feedback, Redis, Turnstile y secretos independientes de sesión y cola. Ejecutar `npm run production:preflight` dentro del entorno. Aquí los nueve grupos de configuración están ausentes.
- [ ] Programar POST autenticado a `/api/internal/mail-outbox` cada cinco minutos y alertar por antigüedad de pendientes. Probar caída temporal y recuperación de Resend, evitando registrar secretos o contenidos de mensajes.
- [ ] Registro y feedback reales en staging en los cuatro idiomas; comprobar recepción de correos, duplicados, referidos, bloqueo de bots y errores 503. Ningún proveedor externo se ha probado desde este workspace.
- [ ] Revisar política de privacidad, retención, derechos y encargados contra la configuración real. El borrado en SQL no elimina contactos de Resend ni copias de seguridad externas por sí solo.

## P1 — tras activar el entorno

- [ ] Confirmar flags y alcance de la app desplegada; revisión humana de textos ES/EN/DE/FR y del lenguaje legal.
- [ ] Comprobar URLs, canonical, RSS, sitemap y tarjetas sociales sobre el dominio público y remitir sitemap a Search Console.
- [ ] Validar CSP con formularios, Turnstile, analítica y proveedor real antes de pasar de Report-Only a bloqueo.
- [ ] Recoger p75 LCP/INP/CLS y conversiones por idioma/dispositivo, con consentimiento y volumen suficiente. Optimizar JS/CSS según datos; no declarar ganadores A/B sin tamaño de muestra.
- [ ] Añadir pruebas con Safari/Firefox, lectores de pantalla y dispositivos reales. El alcance automatizado actual es Chromium.
- [ ] Obtener evidencia real antes de añadir testimonios, cifras de ahorro, cobertura, seguridad o casos de éxito. Mantener precios/horarios específicos fuera del contenido hasta verificarlos con operadores oficiales.

## P2 — mejoras posteriores

- Recuperación verificada de estadísticas propias entre dispositivos, sin restablecer búsquedas públicas por email.
- Idempotencia de feedback frente a reintentos ambiguos y deduplicación de visitas de referidos más allá del límite de tasa.
- Expansión editorial basada en búsquedas reales, enlaces obtenidos de forma legítima y revisión periódica del contenido. Las nuevas guías compactas no incluyen tarifas locales ni horarios no verificados.

---

## Auditoría inicial (histórico; estados reemplazados por el bloque anterior)

# Auditoría y plan de mejora de Cojauny

Fecha: 30 de septiembre de 2026. Repositorio: `Richarddigo/cojauny-landing`. Base analizada: `315cda786ab1fe25f410ca5e41802fb0578fa46b` (rama `main`).

## Alcance y método

Revisión del código de la landing, componentes compartidos, rutas localizadas, blog, aeropuertos, SEO, consentimiento, formularios, APIs y dependencias. Se han aplicado mejoras de presentación y contenido en español, inglés, alemán y francés. Se conservan los contratos de los formularios, pagos externos, referidos, selección de idioma y flags de producto.

La revisión de seguridad es estática, complementada por avisos del registro de paquetes; no es una prueba de penetración. No se ha consultado la base de datos real, enviado emails, desplegado ni comprobado la configuración de producción. Las pruebas de registro en navegador usan respuestas simuladas. En la primera revisión no se había contrastado la app; la segunda revisión sí consultó su código. La disponibilidad real sigue pendiente de comprobar en staging.

Los cambios visuales y editoriales persiguen mejorar comprensión y conversión. No se ha demostrado un aumento de registros, tráfico ni rendimiento de campo: eso requiere medición posterior.

## Cambios realizados

- [x] Explicar desde el encabezado qué se comparte, con quién y para qué: taxi del aeropuerto con compañeros de vuelo.
- [x] Reescribir hero, variante de ahorro, beneficios, funciones, pasos, demo, ahorro, FAQ, CTA y textos principales de formularios/footer en ES/EN/DE/FR.
- [x] Eliminar escasez no acreditada, promesas de acceso inmediato, seguridad absoluta y cifras objetivo presentadas como resultados.
- [x] Sustituir 50–75 %, 180+, 50.000+ y toneladas de CO₂ del bloque comercial por un ejemplo explícito de un taxi de 40 € compartido. Se aclaran tarifa constante, equipaje, suplementos y capacidad.
- [x] Aclarar que verificar un email no verifica una identidad y que Cojauny no procesa pagos del transporte. Retirar la promesa de enviar mensajes sin conexión.
- [x] Reorganizar la página: propuesta → beneficios → pasos → demo → ahorro → funciones → FAQ → registro.
- [x] Incorporar una vista previa local de la app al hero, con dimensiones reservadas, sin dependencia visual externa.
- [x] Corregir la distribución de cuatro beneficios y compactar los cinco pasos en escritorio.
- [x] Compactar la demo móvil y permitir activar las tarjetas de escritorio con Enter/Espacio.
- [x] Retirar la barra social lateral de pantallas estrechas, devolver ancho al contenido y reservar espacio bajo el footer para el CTA móvil.
- [x] Mejorar foco de select/summary, saltos de títulos y preferencia de movimiento reducido.
- [x] Asociar una etiqueta real al email del hero y añadir enlaces a términos/privacidad junto al consentimiento.
- [x] Evitar un render adicional del banner de cookies y hacer inerte su contenido cuando está cerrado, conservando las opciones de consentimiento.
- [x] Actualizar títulos/descripciones de búsqueda y metadatos sociales localizados; sincronizar `messages/*.json` con la fuente TypeScript.
- [x] Simplificar los textos de entrada al blog en los cuatro idiomas.
- [x] Eliminar el fallback `src/app/page.tsx` que enviaba a `/en`, incompatible con la normalización de inglés sin prefijo; dejar la raíz en manos del middleware de `next-intl`.
- [x] Actualizar las pruebas del CTA al texto actual y declarar `@jest/globals`, usado por las pruebas pero antes dependiente de instalación transitiva.
- [x] Añadir pruebas E2E para acceso inglés y renderizado de idiomas.
- [x] Hacer que Git incluya `tareas/*.md` pese a la regla general que ignoraba Markdown.

## Pendientes prioritarios

Las prioridades indican orden de trabajo: P0 antes de ampliar exposición; P1 siguiente ciclo; P2 mejora continua. El tamaño es orientativo: S hasta un día, M varios días, L requiere trabajo entre producto/ingeniería/contenido.

### SEG-01 · P0 · Actualizar y validar las dependencias vulnerables (M)

**Evidencia:** el lockfile instala Next.js 16.2.6. La consulta de auditoría del 30/09/2026 informa 2 entradas críticas, 36 altas, 23 moderadas y 6 bajas. Son entradas del informe, no 67 componentes distintos ni 67 ataques reproducidos. Incluyen herramientas de desarrollo y dependencias transitivas.

Los dos avisos críticos de Next.js son [RCE en servidores Windows](https://github.com/advisories/GHSA-p293-qw3h-jr36) y [RCE en optimización AVIF](https://github.com/advisories/GHSA-2xp9-vwfh-vxw4). Ambos señalan 16.3.3 como versión corregida dentro de la serie 16; verificar de nuevo los avisos al implementar. El primero depende de hospedaje Windows; no se ha confirmado el SO de producción. El segundo se relaciona con el procesamiento de imágenes. No se ha intentado explotarlos.

**Trabajo:** actualizar Next, sus paquetes asociados y las transitivas afectadas siguiendo las versiones corregidas disponibles. Separar producción/desarrollo y evaluar alcanzabilidad, particularmente `sharp`, `postcss` y `undici`. Mantener `package-lock.json` como lockfile del proyecto; no introducir dos gestores de paquetes.

**Aceptación:** instalación limpia con `npm ci`, build, tipos, unitarias y E2E; nueva auditoría sin críticos/altos aplicables a producción o con justificación revisada y fecha de corrección. No resolverlo con un `audit fix --force` sin revisar el diff.

### SEG-02 · P0 · Proteger las estadísticas de referidos (M)

**Evidencia:** `src/app/api/referral/stats/route.ts` acepta `?email=`, consulta código, enlace, visitas y registros sin autenticación. El 404 distingue usuario inexistente. `ReferralPanel.tsx` usa ese contrato. Esto permite inferir registros y consultar estadísticas conociendo un email cuando la BD está configurada.

**Trabajo:** autorizar por sesión o token firmado, vinculado al propietario y con caducidad. No usar el email como secreto. Eliminar datos personales de URLs y añadir límites de solicitudes. Coordinar el cambio de contrato con ambos formularios/panel.

**Aceptación:** quien no acredita propiedad no puede consultar estadísticas; pruebas de usuario A intentando consultar B; respuestas no enumerables; panel y duplicados siguen funcionando. Referencia: [OWASP, autorización por objeto](https://api-security.owasp.org/editions/2023/en/0xa1-broken-object-level-authorization/).

### API-01 · P0 · No confirmar registros que no se han guardado (M)

**Evidencia:** en `api/beta-signups/route.ts` un error al insertar en BD se registra y el flujo continúa; también puede continuar sin BD y devolver `success: true`. Los envíos de correo capturan errores. No hay confirmación de persistencia duradera antes de informar éxito.

**Trabajo:** definir el almacenamiento obligatorio de producción, fallar de forma explícita si no persiste el registro e introducir reintentos/idempotencia para email. Revisar respuestas de error de Resend, no solo excepciones.

**Aceptación:** una BD caída produce un estado recuperable que no promete alta; una caída del email no pierde el registro; reintentos no duplican registros ni incrementos de referidos. Pruebas con BD/email simulados.

### SEG-03 · P1 · Validar configuración de producción y controles antiabuso (M)

**Evidencia:** `ratelimit.ts` devuelve limitadores nulos si faltan credenciales; Turnstile solo se verifica si existe el secreto; `env.ts` no valida toda la configuración de formularios. La validación de origen permite que el header no exista. Un origen permitido no sustituye a controles antiabuso.

**Trabajo:** verificar al iniciar producción BD, Resend, destinatarios, Redis y correspondencia de las claves Turnstile. Mantener previews sin servicios reales y estados explícitos de falta de configuración. Limitar tamaño de payload, tiempo de verificación y manejar indisponibilidad de proveedores.

**Aceptación:** no desplegar formularios aparentemente operativos con configuración incompleta; tests de 429, token ausente/expirado, timeout y JSON inválido; el usuario recibe mensajes útiles y puede reintentar.

### PRIV-01 · P1 · Sincronizar el consentimiento entre componentes (M)

**Evidencia:** cada llamada a `useConsent()` mantiene su propio estado local; el banner guarda preferencias sin notificar a las otras instancias. Analytics puede no reaccionar hasta recargar. `analytics.ts` llama a `gtag` y carga `@vercel/analytics` sin consultar directamente la preferencia vigente; que exista `gtag` no demuestra aceptación actual.

**Trabajo:** usar un contexto/store compartido con snapshot compatible con SSR; comprobar consentimiento antes de emitir eventos; permitir revocación y reaccionar en todas las instancias. Revisar preconnect y scripts de consentimiento con el responsable de privacidad.

**Aceptación:** antes de aceptar y tras rechazar/revocar no salen eventos analíticos; al aceptar se activa sin recarga; tests y captura de solicitudes, sin datos personales en eventos.

### SEG-04 · P1 · Restringir imágenes remotas y añadir CSP revisada (S/M)

**Evidencia:** `next.config.mjs` permite imágenes HTTPS de cualquier host (`hostname: '**'`) y no define CSP. La mayoría de imágenes de la landing son locales.

**Trabajo:** inventariar los hosts utilizados y permitir solo los necesarios. Diseñar CSP inicialmente en modo reporte para Next, Turnstile y analytics, con revisión de scripts inline. No romper formularios ni recursos.

**Aceptación:** los hosts ajenos no pasan al optimizador; recursos válidos funcionan; CSP sin violaciones inesperadas. Referencia: [Image y remotePatterns de Next.js](https://nextjs.org/docs/app/api-reference/components/image).

## Producto, contenido y conversión

### PROD-01 · P1 · Confirmar la matriz de funciones realmente disponibles (M)

**Evidencia:** el contenido antiguo mezclaba email, teléfono e identidad verificada; chat offline, tracking de vuelos, plazas instantáneas y funciones Premium. El repositorio es una landing, no demuestra que la app implemente cada promesa. Las capturas son SVG ilustrativos.

**Trabajo:** listar cada función como disponible/beta/prevista, contrastarla con la app y alinear landing, FAQ, capturas, blog y emails. Validar las reglas de referidos/prioridad y las prestaciones/tarifas de Free/Premium cuando se active el flag.

**Aceptación:** no hay afirmaciones de funciones no disponibles ni confusión entre lista de espera y acceso. Verificación de email e identidad se explican de forma distinta. Las cuatro traducciones tienen el mismo alcance.

### COPY-01 · P1 · Revisar el blog existente y las páginas de aeropuertos (L)

**Evidencia:** `src/content/blog/posts.ts` contiene estadísticas/casos empresariales sin fuentes visibles y prosa larga difícil de leer; `posts-unified.ts` mantiene otro conjunto de contenidos. En este cambio se reescribió la landing y la entrada al blog, no cada artículo existente ni los documentos legales.

**Trabajo:** identificar qué colección se publica, retirar duplicados muertos, contrastar cifras y casos, eliminar testimonios inventados y convertir artículos en guías prácticas. Revisar aeropuertos por utilidad local, tarifas fechadas y disponibilidad real. Evitar que una página indexada implique cobertura operativa.

**Aceptación:** todo dato externo tiene fuente, fecha y alcance; ningún caso se presenta como real sin evidencia; cada artículo se entiende y sirve a un viajero. Mantener enlaces y slugs publicados o redireccionarlos.

### COPY-02 · P1 · Revisión lingüística nativa y glosario (M)

**Trabajo:** revisar ES/EN/DE/FR en contexto con hablantes nativos. Fijar tono, tuteo/tratamiento, «beta», alias, transfer y nombres de planes. Revisar mensajes de error y emails de `email.ts`, textos de capturas y metadatos gráficos.

**Aceptación:** terminología coherente, sin cadenas mezcladas ni textos cortados; variantes comerciales y legales respetan su alcance. La fuente editorial sigue siendo TypeScript y los JSON se regeneran, no se mantienen a mano en paralelo.

### CRO-01 · P1 · Medir el embudo y el experimento del hero (M)

**Evidencia:** existen variantes trust/savings y tracking, pero no se ha consultado tráfico ni tasas de conversión. El registro rápido y el completo tienen fricción y datos distintos; no hay garantía de atribución de referidos equivalente en el hero.

**Trabajo:** definir eventos de visita, inicio, error, alta persistida y acceso efectivo, con locale, fuente y variante, sin email. Revisar preservación de `ref`/UTM y atribución de enlaces en ambos formularios. Formular hipótesis y criterio de parada antes de comparar variantes.

**Aceptación:** ratios y denominadores documentados por idioma/dispositivo; duplicados no cuentan como altas nuevas; puede seguirse un referido desde llegada a registro. No declarar ganadora una variante sin muestra suficiente.

### CRO-02 · P2 · Añadir prueba social verificada (M)

**Trabajo:** recoger testimonios autorizados de beta, rutas reales y ejemplos de coste con recibos anonimizados. Aclarar fecha, número de participantes y contexto. Comprobar si viajeros solos/frecuentes/locales entienden el producto antes de abrir campañas.

**Aceptación:** testimonios y cifras verificables, consentimiento documentado, sin identidades ni documentos privados. Mostrar solo pruebas disponibles; no inventar logos, estrellas o contadores.

## SEO y distribución

### SEO-01 · P1 · Unificar rutas, canonical y hreflang (M)

**Evidencia:** `routing.ts` usa inglés sin prefijo; `buildCanonicalUrl()` lo respeta, pero `scripts/validate-hreflang.ts` fabrica URLs prefijadas en vez de leer el HTML real. Su resultado «válido» no prueba la publicación. El fallback de raíz se ha eliminado. En Next 16.2.6 se reprodujo un bucle usando `next start --hostname 127.0.0.1`; en `localhost` la raíz responde 200 y `/en` normaliza a `/`. Hay un [issue upstream con este comportamiento](https://github.com/vercel/next.js/issues/94342).

**Trabajo:** hacer que todas las URLs se construyan con una fuente común; auditar HTML y redirects de landing/blog/aeropuertos/legales, sitemap y alternates recíprocos. Verificar por separado `localhost`, proxy de staging y producción tras actualizar Next. Revisar también los redirects legacy que apuntan a rutas inglesas prefijadas.

**Aceptación:** no hay bucles ni canonical a páginas que redirigen; idiomas correctos en SSR/HTML; sitemap y hreflang enlazan 200; `x-default` corresponde a la ruta equivalente cuando proceda.

### SEO-02 · P1 · Revisar datos estructurados y enlaces de tiendas (S/M)

**Evidencia:** `site.ts` define `/app-store` y `/google-play`; `buildSoftwareAppJsonLd` los usa como descarga/instalación aunque el footer anuncia «próximamente». Las descripciones de WebSite/SoftwareApplication son compartidas en español. `validate-jsonld.ts` comprueba campos básicos, no toda la semántica ni enlaces reales.

**Trabajo:** publicar solo URLs reales, localizar descripciones y alinear oferta gratuita con la fase del producto. Validar schemas del HTML y FAQ visible, sin esperar automáticamente un resultado enriquecido.

**Aceptación:** todas las URLs declaradas resuelven al destino previsto; JSON-LD coincide con el contenido y la disponibilidad real; no hay placeholders.

### SEO-03 · P2 · Alinear imágenes sociales y medición de indexación (S/M)

**Evidencia:** hay renderizadores separados para Open Graph/Twitter de raíz y locales con textos propios, que pueden divergir de `copy.ts`. La raíz aún tiene metadatos de fallback antiguos y algunas descripciones compartidas.

**Trabajo:** reutilizar copy editorial para gráficos y metadatos de fallback; revisar 1200×630 en cuatro idiomas. Verificar Search Console, RSS, feeds, canónicos y enlaces internos. Elegir consultas por intención real y evitar repetir páginas de escaso contenido para captar tráfico.

**Aceptación:** previsualización social legible y consistente, indexación sin errores principales y publicaciones de blog conectadas a landing/aeropuertos relevantes.

## Frontend, rendimiento y accesibilidad

### PERF-01 · P1 · Medir Core Web Vitals antes y después (M)

**Evidencia:** hay `content-visibility`, placeholders de 800 px, importaciones dinámicas, mockups y Google Fonts. La compilación y ausencia de desbordamiento no equivalen a rendimiento de campo. No se han medido percentiles reales.

**Trabajo:** Lighthouse controlado en móvil y medición de campo de LCP/INP/CLS con consentimiento. Revisar alturas reservadas, carga de Turnstile y caché. Comparar carga fría/caliente y separar resultados de laboratorio de usuarios reales.

**Aceptación:** objetivos de campo p75 LCP ≤2,5 s, INP ≤200 ms y CLS ≤0,1 por dispositivo, o plan documentado de mitigación. Fuente: [Web Vitals](https://web.dev/articles/vitals). Guardar evidencia y condiciones; no prometer un score universal.

### PERF-02 · P2 · Simplificar la demo y reducir JS necesario (M)

**Evidencia:** `DemoSection.tsx` usa varios observadores, selección por scroll/click, estado mobile y dos versiones de presentación. La demo ahora permite teclado y es más compacta en móvil, pero conserva esa lógica.

**Trabajo:** medir coste de hidratación, reducir suscripciones y valorar un patrón semántico de selección con controles nativos. Evaluar hacer server components las partes estáticas. Revisar carga prioritaria bajo el primer viewport.

**Aceptación:** misma selección/cambio de pantalla con ratón y teclado; no hay observadores activos innecesarios ni saltos de layout; mejora demostrada en tamaño JS o interacción.

### A11Y-01 · P1 · Completar auditoría de accesibilidad (M)

**Trabajo:** revisar teclado, lector de pantalla, contraste de tonos secundarios/acento, foco tras cambiar idiomas y menús, zoom 200/400 %, 320 px, cookies y CTA fijo. Las mejoras ya aplicadas no certifican conformidad completa. Comprobar estado activo y foco de la demo en tablet/escritorio.

**Aceptación:** no hay trampas de foco ni controles ocultos enfocables; navegación y formularios comprensibles sin ratón; contraste y mensajes de error medidos y corregidos; tests de automatización más revisión manual.

### UI-01 · P2 · Consolidar tokens y estilos compartidos (M)

**Evidencia:** conviven tokens `studio-*`, `brand-*`, variables CSS y colores inline; los espacios y estados de tarjetas varían por sección. `SectionIntro` tiene semántica light/dark confusa y varios overrides.

**Trabajo:** consolidar contenedores, spacing, títulos, cards, botones y tonos de texto sin cambiar interacciones. Mantener los ajustes responsive y unificar estilos de blog, aeropuertos y legales.

**Aceptación:** menos valores duplicados, estilos coherentes y capturas comparadas en ES/EN/DE/FR; el contenido largo alemán/francés no rompe el diseño.

## Calidad y operación

### QA-01 · P1 · Crear una puerta de calidad reproducible (M)

**Trabajo:** CI con `npm ci`, lint, type-check, unitarias, build y Playwright Chromium/móvil. Garantizar que los E2E levantan/esperan el servidor, añadiendo pruebas de registro rápido/completo con API simulada, idiomas, menú, FAQ y referidos.

**Aceptación:** clon limpio funciona sin pasos ocultos; no depende de una instalación transitiva accidental. Revisar los warnings existentes y separar artefactos generados de fuentes.

### OPS-01 · P1 · Alertas y procedimientos para altas y mensajes (M)

**Evidencia:** los fallos de servicios se registran por consola; no se ha verificado monitorización ni entregabilidad de email.

**Trabajo:** monitorizar altas persistidas, fallos BD/email/Turnstile, tiempos de respuesta y entregabilidad. Revisar SPF/DKIM/DMARC, datos mínimos en logs, retención y borrado. Definir rollback y reintento de correo.

**Aceptación:** alertas accionables con contexto sin PII, prueba controlada de registro/feedback en staging, copia de seguridad y restauración verificadas con el responsable de operaciones.

### MAINT-01 · P2 · Limpiar fuentes duplicadas y generados versionados (S/M)

**Evidencia:** dos colecciones de blog, JSON espejo y TypeScript, capturas/reportes históricos, `tsconfig.tsbuildinfo` versionado pese a estar ignorado y regla general `*.md`. Esta última ya permite la carpeta `tareas`.

**Trabajo:** identificar archivos realmente usados, documentar generación de contenido y quitar artefactos innecesarios del índice de Git. Revisar caché immutable de imágenes sin nombres versionados y evitar servir assets viejos tras un cambio de contenido.

**Aceptación:** única fuente por contenido, generación reproducible y repo limpio tras validaciones normales; documentación/tareas pueden versionarse y el usuario recibe la nueva imagen tras un deploy.

## Cinco tareas editoriales

Cada una es una tarea pendiente, no una entrada ya publicada. Crear las cuatro versiones, mantener un `postId` común y revisar enlaces/SEO/RSS al implementarlas. No duplicar artículos actuales sin actualizar o diferenciar intención.

1. [tareas-01.md](tareas-01.md): Taxi, tren o traslado compartido: cómo elegir desde el aeropuerto.
2. [tareas-02.md](tareas-02.md): Cuánto ahorras compartiendo taxi: cuentas claras y suplementos.
3. [tareas-03.md](tareas-03.md): Checklist para compartir traslado con personas que acabas de conocer.
4. [tareas-04.md](tareas-04.md): Llegadas tardías y retrasos: prepara un plan B.
5. [tareas-05.md](tareas-05.md): Qué pasa después de apuntarte a Cojauny: guía de la beta.

## Verificación y límites

- Build de producción: compilación correcta, 875 rutas estáticas tras retirar el fallback redundante.
- TypeScript: comprobación correcta tras declarar la dependencia directa de Jest.
- Unitarias: 26 suites y 124 pruebas aprobadas.
- Lint: sin errores; tres warnings preexistentes de mocks y estrategia de GoogleConsentMode pendientes de limpieza.
- Playwright: 16 pruebas aprobadas, incluidas rutas inglesas, idiomas, menú/foco, selector de idioma y demo por teclado. Se han precisado los selectores de los E2E antiguos para distinguir el diálogo del menú del banner de cookies.
- Navegador adicional: 16 combinaciones de ES/EN/DE/FR a 320, 390, 768 y 1440 px; sin errores JavaScript ni desbordamiento horizontal, FAQ operativa, sin anchors ausentes y registro del hero simulado enviando el locale correcto. El informe final de ejecución se conserva con la entrega.
- No se ha probado persistencia real, envío de correos, despliegue, métricas de conversión ni disponibilidad de la app móvil. La lista de pendientes continúa siendo necesaria aunque el frontend compile y sus pruebas pasen.

## Orden recomendado

Primero SEG-01/SEG-02/API-01; después configuración y consentimiento, confirmación de producto y fuentes editoriales. A continuación SEO/medición/QA; finalmente mejoras continuas de UI y las cinco publicaciones. El contenido de blog debe enlazar a una landing honesta y operativa, con el registro correctamente persistido.
