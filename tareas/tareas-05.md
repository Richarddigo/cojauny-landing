# BLOG-05 · Qué esperar de la beta de Cojauny

Estado: implementado en ES/EN/DE/FR; pendiente de revisión editorial humana y despliegue. Prioridad: P1. Idiomas: ES/EN/DE/FR. `postId` implementado: `post-017`. Slug propuesto: `cojauny-beta-access-guide`.

## Idea e intención

Convertir curiosidad en un registro informado: qué ocurre al apuntarse, qué se puede probar y cuáles son los límites actuales. Es la guía de producto que debe enlazarse desde emails y FAQ.

Títulos sugeridos:

- ES: «Qué pasa después de apuntarte a Cojauny: guía de la beta».
- EN: «What happens after joining Cojauny? Your beta access guide».
- DE: «Was passiert nach der Anmeldung bei Cojauny? Dein Beta-Leitfaden».
- FR: «Après l’inscription à Cojauny : votre guide de la bêta».

## Dependencia obligatoria

Completar PROD-01 de `tareas-00.md`: confirmar disponibilidad, correos enviados, regla real de prioridad por referidos, tratamiento de datos y acceso. No inventar fechas, número de plazas ni beneficios de fundador. Revisar que API-01 persista los registros correctamente.

## Contenido

1. Explicar el problema que resuelve y quién puede encontrarlo útil.
2. Diferenciar inscripción en lista, confirmación de recepción y acceso efectivo.
3. Mostrar el flujo real del primer vuelo con capturas aprobadas.
4. Explicar disponibilidad de compañeros y qué hacer si aún no hay grupo.
5. Explicar invitaciones sin prometer ascenso o fecha de acceso que el sistema no soporte.
6. Indicar cómo enviar feedback y gestionar privacidad/borrado conforme a las rutas reales.
7. Distinguir funciones actuales y previstas; añadir fecha de actualización.

Extensión: 700–1.000 palabras. Query orientativa: «Cojauny cómo funciona» / «Cojauny beta». No hacer pasar este artículo por un testimonio de un usuario independiente.

## CTA y distribución

CTA: «Apúntate a la lista de acceso a la beta». Usar versiones locales en landing, FAQ y correos; después medir clics y registros sin PII y solo con consentimiento para analytics. Mantener esta guía al cambiar el producto.

## Aceptación

- [ ] Producto confirma cada paso y beneficio descrito.
- [ ] ES/EN/DE/FR equivalentes, con capturas reales o vistas previas etiquetadas.
- [ ] No hay acceso inmediato garantizado, falsa escasez ni promesas de seguridad absoluta.
- [ ] Enlaces de registro/feedback/privacidad funcionan; metadata y SEO técnico revisados.
- [ ] Responsable y criterio de actualización definidos para que el artículo no quede obsoleto.


## Entrega de esta iteración

Cuatro versiones incorporadas a `src/content/blog/posts.ts`, enlazadas con otras guías y la lista beta. RSS, sitemap y alternates se generan desde las mismas entradas. Las rutas están incluidas en la validación de HTML. Los criterios editoriales y fuentes locales que no se hayan consultado siguen pendientes; no se publican cifras reales de tarifas ni horarios.
