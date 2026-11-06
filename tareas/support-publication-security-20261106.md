# Soporte: candidato de dependencias corregidas

Estado del 6 de noviembre de 2026: preparado para revisión independiente y validación local de publicación. No está publicado ni cierra la tarea 053 de la aplicación.

La auditoría previa del candidato de soporte `3522ee3fb8a572d7ca2fbfe1be80097575920188` detectó vulnerabilidades de producción en Next, Undici y Zod. Se detuvo la promoción; ese candidato congelado y la producción vigente permanecen intactos.

La fuente corregida es `ed085b8b961bf59527d5da792cb20373fb7b8822`, en `task/025-support-safe-dependencies-20261106`. Resuelve las versiones oficiales Next y eslint-config-next 16.4.5, Zod 4.6.7, Undici 7.30.2 y Sharp 0.35.5. Conserva TypeScript 6.0.3 y las dependencias directas ajenas a esta corrección.

La instalación estricta detectó que `ts-jest`, sin consumidores en la configuración de pruebas activa, excluía TypeScript 6 en su contrato de compatibilidad. Se retiró esa dependencia sin forzar la resolución ni rebajar TypeScript. Las pruebas reales utilizan `next/jest` y su transformador SWC. El antiguo `deno.lock` contiene una instantánea histórica con otras versiones; se conserva intacto y no constituye la configuración activa de Jest. Tras acreditar instalación y pruebas, `.npmrc` pasa de `legacy-peer-deps=true` a `false`; se verificó ese valor sin imponerlo mediante el entorno.

Zod 4 requiere adaptar dos opciones de error de enumeración. Cuatro regresiones reprodujeron la pérdida de los mensajes aprobados, tanto en el esquema como en las respuestas HTTP 422; después del ajuste pasan. También se conservan límites, consentimiento, campos opcionales, entradas Unicode, los cuatro idiomas y la ausencia de contenido privado en los errores HTTP.

La configuración de lint asociada a Next detectó dos actualizaciones de estado dentro de efectos en los formularios afectados. El código de invitación se guarda ahora en una referencia, pues no controla contenido renderizado. El formulario de comentarios reinicia sus campos y mensajes únicamente al cambiar su idioma almacenado, antes de presentar el idioma nuevo. Cuatro controles verifican la atribución válida, el rechazo de códigos malformados y el reinicio o conservación de campos al cambiar o mantener el idioma. No se silenciaron reglas.

Evidencia local:

- Instalación con lock y comprobación del árbol completo de dependencias correctas, sin ignorar contratos de compatibilidad.
- 61 casos únicos correctos en nueve archivos específicos; las tandas repetidas no se suman como casos adicionales.
- Análisis de tipos del proyecto correcto y lint sin diagnósticos en siete consumidores y cuatro archivos nuevos de pruebas.
- Auditoría de producción: cero vulnerabilidades notificadas en esa consulta. La auditoría completa conserva 17 nodos de desarrollo notificados —seis de nivel bajo y once moderados—, sin altos ni críticos. No se presentan como resueltos ni se ejecuta una corrección automática.
- Entorno sin credenciales heredadas ni archivos `.env`; configuración npm de usuario y global vacía; instalación sin scripts de ciclo de vida. Las pruebas sustituyen los efectos externos y no transmiten correo ni acceden a bases de datos, analítica o servicios de verificación reales.

El [recibo completo](evidence/support-dependency-security-validation-20261106.json) incluye hashes de fuente y lock, metadatos oficiales, cambios del grafo, intentos causales y límites. Los [criterios originales](evidence/support-publication-dependency-plan-20261106.json) y sus pesos 45/20/25/10 permanecen intactos; C1 y C2 tienen evidencia preparada pendiente de revisión independiente. C3 requiere el build local exacto y la comprobación de navegador en cuatro idiomas. C4 requiere entrega remota revisada y una autorización específica nueva para publicar esta fuente, seguida de evidencia HTTPS real.

No se han ejecutado builds, la suite completa, GitHub Actions, Codemagic ni despliegues en este checkpoint. Un retorno de versión debe conservar las correcciones de seguridad, sin volver a publicar el grafo afectado.


## Continuación posterior: fuente local lista para publicación

El primer build de84c311cd falló en siete páginas antiguas de redirección sin layout raíz. Se conserva ese fallo. El plan9b3bd0c precede a dos layouts mínimos que reutilizan RootDocument por separado para legal y docs, sin envolver el layout de idiomas ni anidar html/body. Los siete handlers y destinos permanecen intactos. Nueve casos nuevos verifican documentos reales y redirecciones; tipos y lint pasan. Un error inicial de alias en el nuevo fixture se corrigió usando imports relativos.

La fuenteacfb61e8 compila correctamente en29,402s y pasa los ocho casos de navegador en12,224s, cuatro idiomas y dos tamaños. Se verifican HTTP local, navegación, canonical, mailto, idioma, controles de accesibilidad y ancho320px. Los70 casos unitarios focales son61 anteriores más9 de layout, sin sumar reintentos o los13 casos históricos de soporte. El servidor local propio se cerró y se conservaron los cambios ajenos. Dos revisiones independientes no encontraron hallazgos accionables en sus alcances.

[Recibo de continuación](evidence/support-security-local-publication-validation-20261106.json): C1=45, C2=20 y C3=25 acreditados; corrección de publicación al90%, C4 abierto. Falta publicar la fuente corregida con autorización nueva y comprobar HTTPS real. La Preview autorizada de3522 estáReady, pero nunca se promovió a producción. Su permiso pendiente no cubre este commit distinto. La tarea053 de la app sigue al50%; esta dependencia no concede aceptación de las tiendas.


## Publicación real y aceptación del alcance

El propietario autorizó dos ejecuciones manuales sobre f7722511: Preview y promoción con reconstrucción. Preview6ccjBzWzr terminóReady en119s; producción5fiwgF3Cp terminóReady en114s y sirve cojauny.com. Vercel exigió una verificación privada de identidad y la completó el propietario. No se leyó ni guardó el código; no se repitieron ejecuciones.

La verificación pública hace16GET totales con CA/hostname válidos y TLS1.3: las cuatro URLs de soporte redirigen desdewww a apex y terminan200, y las cuatro páginas de borrado de cuenta responden200. El navegador real verifica idioma, H1, canonical, correo y los cuatro enlaces de navegación en los cuatro idiomas. Los12 destinos legales restantes se verificaron comohrefs, sin visitar cada destino ni acreditar contenido/cumplimiento jurídico. No se envió correo ni se ejecutaron formularios.

Se conserva el primer resultadoNOT_ACCREDITED del parser estático: Next emite contenido en contenedores ocultos y lo mueve con React almain. La causa se comprobó sin nuevas solicitudes y la prueba DOM pública acredita la estructura real; no se ocultó un fallo ni se convirtió la falta de prueba enPASS. [Seguimiento HTTPS/DOM](evidence/support-public-https-rendered-contract-followup.json).

[Acta de aceptación](evidence/support-publication-acceptance-20261106.json): C1=45, C2=20, C3=25 y C4=10 acreditados, alcance listo para merge a main y posterior limpieza verificada. La entrega Git real se registrará después de ejecutar esas acciones. La tarea053 de la aplicación conserva50% y sus gates de listing, legal y binario; el global de la app no cambia por cerrar esta dependencia. GitHub Actions y Codemagic no se ejecutaron, y los despliegues automáticos siguen desactivados.
