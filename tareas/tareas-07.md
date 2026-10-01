# Captación basada en confianza, privacidad y llegada organizada

Fecha: 01/10/2026. Sustituye la prioridad comercial del ahorro en la landing ES/EN/DE/FR; las funcionalidades y la condición de lista de acceso beta se mantienen.

## Contenido y recorrido

- La portada y ambas variantes priorizan elección informada de compañeros, control de la información y planificación con margen. El identificador histórico `savings` se conserva para compatibilidad; su texto también sigue esta prioridad. No comparar esta versión con campañas anteriores como si fueran el mismo experimento.
- Ventajas: confianza entre usuarios, privacidad, horarios y ahorro, en ese orden.
- Explicación visible de datos de captación, opt-in y analítica consentida, con enlaces a privacidad y eliminación de cuenta.
- Funciones de confianza antes del proceso, demo y ejemplo de ahorro. Bloqueo, denuncia, perfiles y conversación previa se presentan como herramientas, sin garantía de seguridad total.
- FAQ: seguridad entre usuarios, tratamiento de datos y puntualidad antes del coste. Se conserva la pregunta Premium condicionada al flag existente.
- Registro, CTA, pie, promoción del blog, SEO y tarjetas sociales coherentes en los cuatro idiomas. No se cambian pagos, APIs, permisos, cookies ni proveedores.

## Evidencia y límites de las afirmaciones

Se contrastaron fuentes de `cojauny-app` en `fe74a12d39614e21c8d43393cba3eb2cc417ce8a`: campos públicos en `functions/src/users/publicProfileFields.ts`, bloqueo en `lib/src/core/services/user_block_service.dart`, cifrado en `lib/src/core/security/chat_message_crypto_service.dart` y flags en `remote-config-template.json`.

- Hay implementación de cifrado, pero su flag por defecto está desactivado: no se anuncia cifrado universal ni de extremo a extremo en todas las conversaciones.
- El perfil puede incluir información voluntaria y aeropuerto habitual: se explica que el alias es una elección; no se promete anonimato absoluto.
- Confirmar email no verifica identidad. Las valoraciones aportan referencias y no certifican seguridad.
- Cojauny no opera el transporte: coordinar tiempos y preparar alternativas ayuda a planificar, pero no garantiza puntualidad.
- Se corrige la afirmación absoluta de no compartir nunca datos con terceros: la política identifica los proveedores de tratamiento.

## Validación

TypeScript, ESLint, 147 pruebas Jest y build comprobados localmente antes de la validación final de navegador/CI. Las pruebas de navegación, accesibilidad, responsive y SEO se ejecutan también sobre esta versión. La captación se evalúa con métricas consentidas; este cambio no acredita por sí solo un aumento de conversiones.
