# BLOG-02 · El coste real de compartir un taxi

Estado: implementado en ES/EN/DE/FR; pendiente de revisión editorial humana y despliegue. Prioridad: P1. Idiomas: ES/EN/DE/FR. `postId` implementado: `post-014`. Slug propuesto: `split-airport-taxi-cost`.

## Idea e intención

Resolver «¿cuánto ahorraría yo?» con aritmética transparente, distinguiendo reparto del coste, suplementos y ahorro real. Complementa la landing sin presentar el 75 % como media observada.

Títulos sugeridos:

- ES: «Cuánto cuesta compartir un taxi del aeropuerto: cuentas sin sorpresas».
- EN: «How much does a shared airport taxi cost? Do the maths before you ride».
- DE: «Was kostet ein geteiltes Flughafentaxi? Klar rechnen vor der Fahrt».
- FR: «Combien coûte un taxi partagé à l’aéroport ? Faites le calcul avant de partir».

## Contenido

1. Fórmula: coste por persona = importe total acordado / participantes, si el reparto es igual.
2. Caso ilustrativo de 40 €: uno 40 €, dos 20 €, tres 13,33 € aproximadamente, cuatro 10 €; explicar redondeo.
3. Tarifa nocturna, equipaje, sillas infantiles, capacidad y desvíos: compartir puede cambiar el precio.
4. Diferencia entre ahorro por trayecto y ahorro anual; no extrapolar sin frecuencia y escenarios.
5. Cómo acordar pago y reparto antes del viaje; Cojauny no procesa el pago.
6. Checklist de preguntas para el grupo y transportista.

Extensión: 800–1.100 palabras. Queries orientativas: «compartir taxi aeropuerto precio», «split airport taxi fare». No duplicar una guía general actual; centrar este artículo en cálculo y excepciones.

## Fuentes y CTA

Las cuentas hipotéticas no necesitan una tarifa local inventada. Si se añade una tarifa real, usar fuente oficial fechada. No convertir ocupación del taxi en una cifra de CO₂ sin metodología.

CTA: «Encuentra compañeros de vuelo para organizar el reparto: apúntate a la beta». Enlaces a landing, BLOG-01 y página local de aeropuerto.

## Aceptación

- [ ] Cálculos revisados, mismas hipótesis en las cuatro versiones y formato monetario local.
- [ ] Ninguna media o ahorro garantizado sin datos verificados.
- [ ] Coste, precio por persona y ahorro se distinguen claramente.
- [ ] Metadata, imagen/alt, enlaces y alternates/RSS/sitemap comprobados.
- [ ] CTA explica lista de acceso, sin simular que el usuario ya puede reservar taxi.


## Entrega de esta iteración

Cuatro versiones incorporadas a `src/content/blog/posts.ts`, enlazadas con otras guías y la lista beta. RSS, sitemap y alternates se generan desde las mismas entradas. Las rutas están incluidas en la validación de HTML. Los criterios editoriales y fuentes locales que no se hayan consultado siguen pendientes; no se publican cifras reales de tarifas ni horarios.
