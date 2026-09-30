# Operación y validación previa al despliegue

Estado al 30/09/2026: migración aplicada y verificada en Neon; dominio `cojauny.com` verificado en Resend; clave de la landing actualizada como Secret en Vercel para Production y Preview. Secretos independientes de sesión y cola configurados en ambos entornos. Build de preview con la nueva configuración: Ready. La protección de Vercel redirige las comprobaciones HTTP externas; entrega real de correo y despliegue de producción todavía pendientes. No introducir secretos en Git ni en logs.

## Orden de puesta en marcha

1. Crear un entorno de staging aislado con la misma versión de Node que CI (22), instalar con `npm ci` y disponer del esquema actual `schema.sql` si es una base nueva. Respaldar una base existente antes de migrar.
2. Aplicar `database/migrations/20260930-mail-outbox.sql`. Es repetible; verificar tabla, índice y función de anonimización. La app nueva depende de esta tabla: desplegar el código antes de migrar hace fallar solicitudes con 503.
3. Configurar `DATABASE_URL` (o `POSTGRES_URL`), `RESEND_API_KEY`, `FEEDBACK_TO_EMAIL`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `TURNSTILE_SECRET_KEY`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `REFERRAL_SESSION_SECRET` y `MAIL_OUTBOX_SECRET`. Los dos últimos deben ser independientes, aleatorios y de al menos 32 caracteres. Configurar antes del build los valores `NEXT_PUBLIC_*`.
4. Para dominios adicionales, definir `SUBMISSION_ALLOWED_ORIGINS` como lista separada por comas de orígenes HTTPS exactos y `TURNSTILE_ALLOWED_HOSTNAMES` como lista de hostnames admitidos. Configurar esos dominios también en Cloudflare. No admitir comodines ni previews arbitrarios.
5. Verificar DNS/remitente Resend y el destino del feedback. Configurar también `BETA_TO_EMAIL` si se desea aviso interno de nuevas altas y `RESEND_SEGMENT_BETA` para contactos con opt-in; sin destino beta solo se encola el email al usuario. Ejecutar `npm run production:preflight`; solo comprueba presencia/formato, no conectividad, esquema ni permisos de proveedores.
6. Ejecutar `npm run quality`, `npm audit`, build y las pruebas E2E/SEO sobre la instancia. La aplicación requiere secretos reales para recibir altas en producción.
7. Activar `.github/workflows/mail-outbox.yml` guardando `MAIL_OUTBOX_SECRET` en los secretos del repositorio, con autorización del propietario. Solo comparte el secreto de activación de la cola, nunca la clave de Resend. Ejecuta `scripts/retry-mail-outbox.mjs` contra el dominio fijo de producción con POST autenticado cada cinco minutos y consulta GET de estado. Si hay correos pendientes de más de quince minutos, la ejecución falla y usa las notificaciones habituales de Actions. GitHub puede retrasar o descartar ejecuciones programadas; este intervalo no es una garantía de entrega. El alta también intenta enviar tras la respuesta, pero no sustituye el scheduler. Vercel Hobby limita su cron a una vez al día.
8. Consultar GET en ese mismo endpoint con idéntica autorización: devuelve pendientes, antigüedad del más antiguo y máximo de intentos, sin emails ni mensajes. Alertar si hay pendientes de más de 15 minutos; investigar antes de reintentar en masa.

## Pruebas de aceptación externas

- Alta real nueva por idioma: un registro, un correo al usuario y otro interno si se configura BETA_TO_EMAIL, confirmación y aviso interno (cuando corresponda) recibidos, cookie de propietario segura. El código solo confirma almacenamiento; Resend confirma aceptación del envío, no lectura ni entrega final al buzón.
- Repetir email: no nuevas filas de alta ni cola, no incremento doble del referido, no filtración del ID/enlace de otra persona.
- Referido válido: incremento una sola vez y estadísticas consultables solo con sesión propia. Otra sesión o email arbitrario recibe 401.
- Redis/Turnstile/DB caídos: respuesta controlada, nunca falso éxito. Token inválido rechazado. Verificar límites sin bloquear tráfico legítimo del despliegue.
- Resend caído: alta guardada, correos pendientes; restaurar y ejecutar el worker, observar envío y `sent_at`. Usa clave de idempotencia por correo, pero no garantiza entrega exactamente una vez fuera de la ventana de idempotencia del proveedor.
- Feedback: almacenamiento y correos correctos; no alta de marketing implícita. El reintento de una solicitud ambigua puede duplicar feedback; documentar y vigilar hasta añadir idempotencia de petición.
- Opt-in opcional: solo crear contacto de marketing cuando se acepta. Revisar errores de proveedor y operación de baja en Resend.
- Aceptar/rechazar/revocar cookies entre pestañas: sin eventos de conversión, Web Vitals ni asignación persistente A/B tras revocación. Validar con proveedores reales.
- Anonimizar un registro de prueba: borrar datos personales y copias asociadas de `mail_outbox`; gestionar contactos Resend y retención de backups por separado.

## Rollback y mantenimiento

Conservar respaldo y versión anterior antes de migrar. La tabla añadida es compatible con el código anterior; preferir revertir el despliegue sin eliminar la cola ni datos. No ejecutar DROP en producción para revertir un fallo de envío. Revertir la función de anonimización requiere revisión específica para no recuperar una política de borrado incompleta.

Rotar secretos de sesión invalida las sesiones de estadísticas existentes. Rotar el secreto de cola exige actualizar el scheduler simultáneamente. Revisar pendientes, errores de proveedores, límites de tasa y expiración de consentimiento tras cada despliegue. CSP permanece en Report-Only hasta validar todas las integraciones.

## Evidencia de producto y texto

Fuentes revisadas: `Richarddigo/cojauny-app` SHA `fe74a12d39614e21c8d43393cba3eb2cc417ce8a`, `v1_features.dart`, `v1_features.ts` y `feature_flags_service.dart`. Monetización y verificación gubernamental desactivadas; matching, referido y chat cercano desactivados por defecto. Remote Config puede cambiar algunos flags: el código no demuestra los valores del entorno ni una prestación funcionando.

Glosario ES/EN/DE/FR: lista de espera / waitlist / Warteliste / liste d’attente; compartir taxi / share a taxi / Taxi teilen / partager un taxi; verificación de email / email verification / E-Mail-Bestätigung / vérification d’adresse e-mail. Evitar equiparar email con identidad, lista con acceso inmediato, coincidencia con reserva de transporte o chat cercano con mensajería offline disponible.
