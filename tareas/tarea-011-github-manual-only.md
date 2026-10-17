# 011 · Pipelines exclusivamente manuales

Petición del propietario, 2026-10-17: investigar y retirar todos los disparadores
automáticos y no ejecutar trabajos GitHub sin permiso previo por ejecución.

El origen de las notificaciones es `Mail outbox`, cron `2/5 * * * *`, añadido en
27e091b8 el30 de septiembre. Las235 ejecuciones del16–17 de octubre UTC consultadas
son schedule;16 fallaron. El fallo39060426572 inspeccionado es TLS hostname mismatch:
cojauny.com recibió certificado de Dynadot. No acredita la causa de los demás fallos.
El actor de un cron no prueba intervención manual. No se envió correo para verificarlo.

Actions, los tres workflows y las actualizaciones automáticas de seguridad
Dependabot quedan deshabilitados mediante API con lectura posterior. Se mantienen
alertas y secret scanning. Se retiran schedule/push/PR del código y se mantiene
workflow_dispatch válido. Vercel Git deployments deshabilitados en vercel.json
para evitar ejecución indirecta al publicar. AGENTS y regla alwaysApply exigen
permiso explícito por ejecución. No se sustituyen por otro scheduler.

Los reintentos automáticos del correo se detienen; la cola no se elimina.
No hay cambios de DNS, certificados, secretos, lógica de correo ni despliegue.

Estado: validación local PASS; publicación pendiente. No finalizada. YAML validado, único evento workflow_dispatch, jobs preservados. JSON Vercel, regla alwaysApply y enlaces PASS. Copilot autenticado: No rulesets; no cambios de opciones.
Rama task/001-github-manual-only desde24c9605. Jobs iniciados/reintentados:0.
