# Soporte de Cojauny app — extensión de la tarea 025

Fecha: 09/10/2026. Rama: `task/025-app-support`, desde `origin/main` (`24c9605`).

## Petición y criterio

El usuario pide investigar landing y studio; si falta soporte, crear `https://www.cojauny.com/support` con contenido útil y publicar el código. Preservar los trabajos ajenos y documentar evidencia real. La tarea 025 de la app conserva sus criterios y no se considera completada por este cambio.

## Investigación y decisiones

- Landing define `support@cojauny.com` en `src/lib/site.ts`, JSON-LD y eliminación de cuenta, pero carece de ruta de soporte. El GET público de `/support` devuelve 404 antes del cambio.
- Studio, revisado en `e501b2e28f256ecfa6780cc89e0fc7a280398f4d`, ofrece `/contact` para proyectos y `studio@cojauny.com`; no se ha encontrado una ruta de soporte de la app.
- Se reutiliza el correo explícitamente definido por landing, sin inventar buzones ni afirmar recepción verificada. No se envían mensajes reales ni se crea un formulario que aparente entregar solicitudes.
- Ruta localizada en EN/ES/DE/FR con ayuda para acceso, vuelos/Jaunts, mensajes, notificaciones, abusos, privacidad y eliminación. Explica cómo preparar una consulta minimizando datos personales y cómo abrir o copiar el correo. No promete tiempos de respuesta, garantías de seguridad ni servicios de transporte.
- Se conservan el contacto comercial de Studio y la configuración de privacidad. Se añade navegación desde el pie, canonical/hreflang y sitemap usando los mecanismos existentes. `/support` utiliza el idioma por defecto y la detección ya configurada.
- El checkout previo de landing tiene trabajo ajeno sin guardar: se usa un worktree nuevo desde main y no se modifican esos archivos.

## Validación y entrega

- PASS: instalación desde lockfile; ESLint y TypeScript. Next.js instalado 16.3.8; Node 24.16.0 local, Node 22 en la CI existente.
- PASS: 147 pruebas Jest / 32 suites, repetidas después del parche de dependencia y con `src/proxy.ts`. La cobertura final observada de landing es 54,29% de líneas (antes de migrar proxy: 54,45%); no representa la cobertura de Flutter ni el objetivo del 75% de la tarea 025.
- PASS: build de producción, 900 páginas generadas incluidas las cuatro de soporte. Se conservan advertencias existentes de `metadataBase` en otras rutas; no equivalen a fallo del build.
- PASS: 18 pruebas de soporte y portada, más 18 de navegación, cambio de idioma y accesibilidad, en Chromium y perfil móvil. Incluyen HTTP 200, idioma del documento, enlaces, canonical, WCAG 2 A/AA y 2.1 AA mediante axe, ancho de 320 y navegación a eliminación de cuenta. No certifican todos los dispositivos físicos.
- PASS: 132 páginas verificadas con HTML real para canonical/hreflang, idioma, h1 y JSON-LD; las cuatro URL de soporte figuran en el sitemap servido.
- PASS: cinco capturas reales revisadas por el agente (cuatro idiomas en escritorio y español a 320 px): contenido legible, sin recortes ni desbordamientos observados. No se presentan como revisión nativa humana.
- PASS: auditoría de dependencias de producción, cero vulnerabilidades después de actualizar únicamente `source-map-js` 1.2.1 → 1.2.2 en el lockfile. Antes falló por [GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q); no se ocultó ni se desactivó el control.

La primera ejecución de navegador produjo 6 PASS / 2 FAIL: bucle de redirección en inglés con servidor enlazado a `127.0.0.1`. La migración aislada al `proxy.ts` oficial de Next no bastó: en raíz no se registró y produjo 14 PASS / 4 FAIL; en `src`, al nivel de `app`, sí se registró, pero el enlace a `127.0.0.1` mantuvo el bucle (14 PASS / 4 FAIL). Ejecutando servidor y cliente en `localhost`, igual que la CI existente, las 18 pruebas pasaron. Se conserva la migración a `src/proxy.ts` con la lógica original de idioma/cookie; solo cambian ubicación, import relativo y nombre. No se elimina ninguna prueba ni se rebaja su aserción. Este [informe upstream](https://github.com/vercel/next.js/issues/94342) describe el desajuste de origen de las reescrituras; no se trata como confirmación de resolución upstream. El despliegue debe validar su propio dominio/proxy.

Entrega de código: commit `371c2bcf55843093360e588c10ff59fe504f8d25`, push verificado por SHA y los diez blobs remotos, checkout limpio. [PR #15](https://github.com/Richarddigo/cojauny-landing/pull/15), abierta como borrador contra main. Las ejecuciones de Quality de [push](https://github.com/Richarddigo/cojauny-landing/actions/runs/37857273972) y [PR](https://github.com/Richarddigo/cojauny-landing/actions/runs/37857312744) terminaron SUCCESS para ese código: 147 Jest, 36 navegador, 132 SEO y auditoría sin vulnerabilidades en Linux/Node 22. Los tres análisis CodeQL terminaron SUCCESS; el agregador aparece NEUTRAL, no se cuenta como un análisis adicional.

Vercel creó automáticamente una vista previa del commit con estado SUCCESS. Su `/support` redirige a la autenticación de Vercel: el HTTP 200 final corresponde al login, no acredita la página de soporte. No se elude esa protección. PENDIENTE: disponibilidad pública en `www.cojauny.com/support` y recepción del correo. No se fusiona main ni se realiza un despliegue de producción con esta entrega de código. El commit posterior de documentación conserva los bytes de implementación; la CI automática de esa revisión se evalúa aparte.

## Reversión

Revertir el commit de esta rama elimina únicamente la nueva ruta/copia y sus enlaces. No cambia datos, APIs, configuración de correo ni contratos de la app.

## Corrección de contacto aprobada — 2026-10-11

La decisión del propietario del 8 de octubre está registrada en la app, commit `52b7424d6e67a44c106c11f96edfaf49b5356bd5`, tarea 006 y `docs/ops/RELEASE_READINESS_TRACKER.md:87`: soporte `soporte@cojauny.com`; contacto general/legal/privacidad `cojauny@cojauny.com`. La coordinación confirmó esa aprobación. Se añade `appSupportEmail` y se usa sólo en SupportPage; los demás contactos existentes permanecen intactos. Esta decisión sustituye la reutilización inicial del correo de landing en esta página.

Regresión real: la página anterior falla las cuatro expectativas de contacto (5 PASS / 4 FAIL); corregida, 9 PASS / 0 FAIL. TypeScript y ESLint de los cuatro archivos afectados pasan. Next dev recién compilado en localhost sirve las cuatro rutas; ocho pruebas Chromium/escritorio-móvil pasan en 18,8 s incluyendo contacto, canonical, navegación, axe y ancho de 320 px. El árbol de servidor propio se apagó. El primer import del nuevo test falló TypeScript por un alias no registrado; se corrigió al import relativo sin modificar configuración ni aserciones.

[Recibo actual](evidence/task053-contact-20261011.json). Los controles completos anteriores siguen atribuidos a su revisión original. El GET público sigue devolviendo 404; no se afirma recepción del buzón, disponibilidad pública, despliegue ni integración. Falta acreditar recepción y realizar la publicación autorizada cuando corresponda, sin volver a pedir confirmación de la dirección ya aprobada.

## Corrección explícita del propietario — 2026-10-15

El propietario aclara que no existe el buzón `soporte@cojauny.com` y ordena sustituir su uso vigente por `support@cojauny.com`. Solo existen `cojauny@cojauny.com` y `support@cojauny.com`. Esta instrucción sustituye la decisión de contacto anterior; las notas y los recibos históricos se conservan como tales. Se actualizan el contacto de SupportPage y las expectativas existentes de Jest/Playwright. La recepción de correo y la publicación pública siguen sin acreditarse. No se crea otro buzón, no se envía correo y no se modifica la configuración de correo.

Validación de esta corrección: 9/9 pruebas Jest PASS sobre SupportPage real en cuatro idiomas; canonical y contacto compartido preservados. ESLint: EXIT0, cero errores en site.ts y support.spec.ts; el archivo unitario está ignorado por la configuración y no se afirma analizado. E2E, suite completa, despliegue y recepción del buzón: NOT RUN para estos bytes. [Recibo y logs](evidence/contact-correction-20261016/receipt.json).

## Idiomas de atención y documentos de identidad — 2026-10-16

El propietario confirma atención en español y alemán, e inglés para los demás idiomas. Se añade esa información al contacto en los cuatro idiomas de la página, sin prometer atención en los 73 idiomas de la interfaz ni un plazo de respuesta.

La decisión de la tarea 074 aplaza DNI/pasaporte a v2: v1 no recoge esos documentos. Se sustituye la invitación condicional anterior por una indicación explícita de no enviarlos al soporte. La instrucción no modifica la verificación de correo ni la biometría local.

Esta revisión cambia únicamente la copia localizada y este registro. Validación de estos bytes: NOT RUN; pendiente de la ventana compartida. No se atribuyen las pruebas anteriores a esta revisión ni se afirma despliegue o aprobación legal.

Disponibilidad operativa declarada por el propietario: revisará el buzón al menos una vez al día, todos los días. No equivale a respuesta/resolución en 24 horas, cobertura de incidentes o suplencia acreditadas; se conserva la copia pública sin plazo garantizado.

## Composición local de políticas y copia aprobada — 2026-10-21

La implementación de soporte permanecía en esta rama sin integrar en main;
por ello la verificación pública actual sigue encontrando404 en `/support`.
Se conservaron externamente los bytes de los dos archivos modificados y se
registró la copia aprobada en un commit local antes de componer origin/main
`7c45ef0713a5fb785b17f8c77b76cf63544b326b`, mediante merge normal sin stash,
reset ni descarte. No hubo conflictos. Entran AGENTS, reglas y políticas manuales:
Quality/Mail outbox solo workflow_dispatch y despliegue Git de Vercel desactivado.
No se ejecutó job ni se escribió remotamente.

Pruebas actuales de la página real:13JestPASS antes y después de la composición,
cuatro idiomas con mailto `support@cojauny.com`, metadata canonical, atención
ES/DE/EN y rechazo de documentos de identidad en v1. Los cuatro casos nuevos
preservan las nueve aserciones anteriores. Logs externos en
`outputs/landing-support-main-composition-20261021/`.
La comprobación inicial de9casos no incluía todavía esos cuatro casos nuevos;
una primera edición falló por ruta de trabajo incorrecta y no modificó el test.

Build completo, HTTP servido y navegador actuales:NOT RUN para esta composición.
RAM libre observada4,12GiB con suite Flutter de otra rama en ejecución; se
pospone el heap de Next hasta una ventana estable. No se instalaron dependencias.
La ruta de middleware de soporte conserva src/proxy.ts; la rama056/invitaciones
permanece separada y sin cambios. No se atribuye paridad de despliegue.
La disponibilidad pública y recepción de correo continúan sin aceptación;
no se envió correo, no hubo push/PRwrite/deploy ni se declara100%.
