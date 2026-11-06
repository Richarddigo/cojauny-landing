# 08/001 · Enlaces nativos: handoff local hacia la landing

Fecha:21Oct2026. Rama: `task/056-landing-link-routes`.

## Contrato y alcance

Vinculada a la tarea original00/056 de cojauny-app, rama
`task/056-domain-link-evidence`, sección056 de `tareas/tareas-00.md`.
Se preservan su definición y pesos: C1=20 contratos/evidencia, C2=40
propiedad/DNS/Hosting/cabeceras/asociaciones con firma final y C3=40 enlaces en
dispositivos reales con estados auth/cold/warm. Resolución original **20%**;
C2/C3 abiertos, sin cierre ni merge. Este incremento no sustituye esos criterios.

El propietario confirmó cojauny.com16Oct; no posee cojauny.app. Rama landing
creada desde origin/main recién verificado mediante ls-remote:
`7c45ef0713a5fb785b17f8c77b76cf63544b326b`. No push, despliegue, DNS, APIs,
trabajos GitHub ni cambios de credenciales. Vercel deploymentEnabled:false y
workflows manual-only permanecen intactos.

## Implementación y decisiones

- Sólo `/invite` y `/apple-app-site-association` evitan next-intl antes de
  cookies del experimento consentido; rutas ordinarias siguen usando next-intl.
- Rewrite interno `/invite`→`/invite/index.html` conserva query/código sin
  redirección externa. FallbackHTML/JS existente muestra código con textContent,
  sin navegación automática, tracking ni atribución diferida.
- Ambas copias AASA conservan bytes/identidad/componentes aceptados; headersJSON
  explícitos mantienen seguridad global. Assetlinks se excluye deliberadamente:
  las huellas locales debug/release no acreditan el certificado final de Play052.
- Bypass exacto no transforma `/invite-other`. `/.well-known` queda fuera del
  matcher existente por contener punto; esto no acredita HTTP200 desplegado.
  La regla AASA `/invite/*` preexistente no implica que este cambio cree fallback
  web para `/invite/CODE`. HTTP→HTTPS, apex/www y rutas dinámicas/medios reales
  permanecen sujetos a verificación tras despliegue revisado.

## Identidad Apple: procedencia y límite pendiente

`352HG7A4HX.com.cojauny.app` proviene de los payloads aceptados y del handoff
`outputs/task056-canonical-landing-handoff-20261016.json`. Los tests acreditan
paridad y estructura; **no prueban entitlements de una app firmada**. No se ha
localizado recibo sanitizado con `application-identifier`. CI56 acredita archive
y subida pero su IPA no se ha inspeccionado; no deducir de ello el AppIDprefix.

Antes de desplegar asociaciones: extraer del archive/IPA autorizado
`application-identifier`, `com.apple.developer.team-identifier` y
`com.apple.developer.associated-domains`; contrastar el AppIDprefix real, que
puede diferir del TeamID. Conservar recibo/hash y revisar ambas copias/test si
difiere. El certificado Play final se acredita por separado. Hasta entonces no
se declara asociación activa ni se despliegan payloads por inferencia.

## Validación real y fallos preservados

Tests Node cargan TypeScript fuente y next-intl/NextResponse/prepareDestination
reales, sin mocks de routing. El hook `module.register` resuelve sólo el alias
oficial de bundler next/server→next/server.js. API disponible desde20.6.0;
ejecutado Node24.16.0, no se ejecutó en20/22. No se usa registerHooks22.15+.
Los workflows existentes20/22 no se modifican ni se añade ejecución automática.

- RED01:2 PASS/6 FAIL (rutas reales307 y payloads/config ausentes).
- GREEN02:7 PASS/1 FAIL: test confundía destQuery con la query final fusionada.
  Corrección sólo del test a parsedDestination.query; RED03 contra main intacto
  2 PASS/6 FAIL, GREEN04:8 PASS. Intento05 de compatibilidad del harness falla
  por interop de namespace;06:8 PASS tras corrección explícita __esModule.
- Runner01:Node8 PASS, ESLint de middleware/config PASS, TypeScript completo
  noEmit/incrementalfalse PASS. Jest7 PASS/5 FAIL por omitir el flag oficial
  --experimental-vm-modules requerido por PGlite; se conserva el fallo.
- Runner02 con flag oficial:3 suites/12 tests PASS; worker realcpus1 PASS.
  Build estándar Turbopack FAIL por junction externa fuera de filesystemroot;
  sin cambio de producto para forzar un PASS.
- Copia física independiente de37542 archivos/560684427 bytes a node_modules
  ignorado propio. Sólo se eliminó la junction verificada mediante
  Directory.Delete(false); destino primario intacto. Sin installs/hardlinks ni
  reparse following; se excluyeron .pnpm/.cache/.git/.next y env/npmrc/yarnrc.
  SHA de cada copia y manifiestos origen before/after idénticos;142,67s.
- Runner03:verificación física completa y852 metadatos de paquetes coincidentes
  con lock; reuso de Node/lint/TSC01 y Jest02 sólo con fuente/índice idénticos.
  Worker real y **Next/Turbopack build estándar PASS**,exit0,
  16:15:12→16:15:43UTC. Sin override de config ni cambio a Webpack.
  Inputs e índice estables. Warning metadataBaselocalhost3000 heredado se
  conserva; no acredita URLs sociales de producción.

Recibos externos: `outputs/task056-landing-validation01-20261021-receipt.json`,
`outputs/task056-landing-validation02-20261021-receipt.json`,
`outputs/task056-physical-dependencies01-20261021-receipt.json` y
`outputs/task056-landing-validation03-20261021-receipt.json`.
No sumar cohortes repetidas. Tras gates sólo se edita este registro documental.

## Reproducción local y recursos

Dependencias ya instaladas del lock, sin descargas. Versiones directas:
Next16.3.8,next-intl4.12.0,TypeScript6.0.3;852 paquetes no opcionales contrastados
por versión/metadatos (normalizando prefijov de dos paquetesUpstash). SHA físicos
no certifican integridad de tarballs npm. El sibling inicialmente usado para
Node tenía source-map-js1.2.2vslock1.2.1; los gates finales usan la copia exacta
del árbol primario con1.2.1. No se modificó ningún árbol de dependencias ajeno.

Comandos ejecutados secuencialmente, memoria libre mínima4,5GiB y heap≤1024MiB:

- `node --max-old-space-size=512 --test --test-concurrency=1 scripts/tests/domain-link-routes.test.cjs`
- `node --max-old-space-size=1024 node_modules/eslint/bin/eslint.js middleware.ts next.config.mjs`
- `node --max-old-space-size=1024 node_modules/typescript/bin/tsc --noEmit --incremental false`
- `node --max-old-space-size=1024 --experimental-vm-modules node_modules/jest/bin/jest.js --runInBand --coverage=false --runTestsByPath __tests__/LanguageSwitcher.test.tsx __tests__/submission-api.test.ts __tests__/submission-storage.test.ts`
- `node --max-old-space-size=1024 node_modules/next/dist/bin/next build`

Para el build, CIRCLE_NODE_TOTAL=2 resuelve el default oficial Next a un worker;
se comprobó tanto defaultConfig como el config real cargado (cpus1 y
memoryBasedWorkersCountfalse), con telemetry desactivada. Variables restauradas
al terminar. No modificaciones de configuración ni procesos del usuario.

## HTTP real local (no producción)

Smoke autorizado una vez sobre el build estándar anterior: servidor Next real
ligado únicamente a127.0.0.1:3076, heap512MiB/memoria libre mínima4,5GiB.
Sólo cinco GET y readiness, sin formularios/API mutantes, DNS externo ni seguir
redirecciones. Resultado **PASS_LOCAL_LOOPBACK_HTTP_ONLY**:

- `/.well-known/apple-app-site-association` y `/apple-app-site-association`:
  200/application/json, bytes iguales a fuente y entre sí; sin Location/cookies.
- `/invite?code=synthetic%2B056%26test`:200/text/html;charset=UTF-8, URL/query
  conservadas, script absoluto correcto, sin Location/cookies.
- `/invite/redirect.js`:200/application/javascript;charset=UTF-8, bytes de fuente
  idénticos, sin Location/cookies. Nosniff presente en las cuatro respuestas.
- `/support` con Accept-LanguageDE:307→`/de/support`, conserva locale routing.

Los cuatro endpoints de máquina se comprobaron con consent cookie+idiomaDE sin
emitir Set-Cookie. AppID contrastado sólo como paridad esperada, no entitlement
firmado. No se ejecutó JS en navegador. Fuente/índice estables; handle propio
PID23680 detenido y puerto3076 libre al terminar. BuildID local
PMNh4zl6yHontA5brdyiA. Recibo:
`outputs/task056-loopback-http01-20261021-receipt.json`.

## Pendiente para aceptación original

HTTP/HTTPS de producción, certificatefinal, respuestas directas desplegadas
sin redirects/contenttypes y matriz App/Universal Links física
auth/signedout/cold/warm: **NOT RUN**. AppIDprefix firmado/Playcertificate siguen
pendientes. No deployment,100%,merge ni nueva disponibilidad de app acreditados.
**20%,C2/C3 abiertos**.
