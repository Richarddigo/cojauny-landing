# BLOG-04 · Llegadas tardías, retrasos y plan B

Estado: implementado en ES/EN/DE/FR; pendiente de revisión editorial humana y despliegue. Prioridad: P2. Idiomas: ES/EN/DE/FR. `postId` implementado: `post-016`. Slug propuesto: `late-arrival-airport-transfer-plan`.

## Idea e intención

Captar una necesidad concreta: llegar de noche o con retraso sin quedarse improvisando el traslado. Diferenciarse de artículos genéricos de planificación.

Títulos sugeridos:

- ES: «Tu vuelo llega tarde: prepara el traslado y un plan B».
- EN: «Landing late? Plan your airport ride and a backup».
- DE: «Späte Landung? Plane deinen Transfer und eine Alternative».
- FR: «Vous atterrissez tard ? Préparez le transfert et un plan B».

## Contenido

1. Comprobar el último transporte público y el margen para salir de la terminal.
2. Revisar tarifa nocturna, transporte autorizado y punto de recogida.
3. Acordar con el grupo una ventana de espera y cuándo cambiar de plan.
4. Tener mensajes y punto de encuentro preparados antes de embarcar; no asumir chat offline ni tracking automático de Cojauny.
5. Prever ausencia de conexión/batería y equipaje retrasado.
6. Crear una plantilla de plan A/B con datos que debe rellenar el viajero.

Extensión: 900–1.100 palabras. Queries orientativas: «llegar al aeropuerto de noche», «late arrival airport transfer». Si se elige un aeropuerto, usar el mismo conjunto de fuentes oficiales en las cuatro versiones.

## Fuentes y CTA

Horarios reales solo con enlace oficial y fecha de comprobación. No afirmar que un tren opera toda la noche sin verificarlo. Explicar que condiciones de cancelación del transportista son independientes del evento en Cojauny.

CTA: «Organiza los detalles con otros viajeros antes del vuelo. Apúntate a la beta». Enlaces a aeropuerto relevante, BLOG-01 y FAQ de cambios de planes.

## Aceptación

- [ ] Horarios y reglas locales comprobados y fechados; plan B no depende de una prestación futura.
- [ ] Consejos útiles incluso si no aparece ningún compañero en Cojauny.
- [ ] Traducciones revisadas con tono coherente y enlaces locales correctos.
- [ ] Metadata, imagen/alt y rutas/alternates/RSS/sitemap verificados.


## Entrega de esta iteración

Cuatro versiones incorporadas a `src/content/blog/posts.ts`, enlazadas con otras guías y la lista beta. RSS, sitemap y alternates se generan desde las mismas entradas. Las rutas están incluidas en la validación de HTML. Los criterios editoriales y fuentes locales que no se hayan consultado siguen pendientes; no se publican cifras reales de tarifas ni horarios.
