# BLOG-01 · Elegir transporte desde el aeropuerto

Estado: implementado en ES/EN/DE/FR; pendiente de revisión editorial humana y despliegue. Prioridad: P1. Idiomas: ES/EN/DE/FR. `postId` implementado: `post-013`. Slug común propuesto: `airport-transfer-options`.

## Idea e intención

Ayudar al viajero a elegir entre taxi, tren/metro, autobús y traslado compartido según horario, equipaje, destino y presupuesto. Es una comparación útil, no una recomendación universal de Cojauny. Revisar los posts de aeropuertos existentes para evitar canibalización.

Títulos sugeridos:

- ES: «Taxi, tren o traslado compartido: cómo elegir al aterrizar».
- EN: «Taxi, train or shared ride: choosing your airport transfer».
- DE: «Taxi, Bahn oder gemeinsame Fahrt: So wählst du deinen Flughafentransfer».
- FR: «Taxi, train ou trajet partagé : choisir son transfert à l’arrivée».

## Contenido

1. Comenzar por una situación concreta: llegada, equipaje y destino.
2. Comparar coste total, tiempo puerta a puerta, horarios, accesibilidad y tamaño de grupo.
3. Explicar cuándo el transporte público puede convenir más.
4. Explicar cuándo compartir taxi resulta práctico y qué comprobar antes.
5. Añadir un ejemplo de decisión, con precios hipotéticos claramente marcados.
6. Cerrar con una checklist y enlace a la página del aeropuerto correspondiente.

La versión implementada es una guía compacta, de unas 300–400 palabras por idioma; ampliar únicamente si añade información útil y verificada. Orientación inicial: párrafos cortos y subtítulos que respondan preguntas. Query objetivo orientativa: «cómo llegar del aeropuerto al centro»; validar demanda antes de elegir un aeropuerto específico.

## Fuentes y conexión al producto

Si se añade Madrid/Barcelona u otra ciudad, consultar páginas oficiales del aeropuerto, transporte público y tarifas de taxi. Fechar tarifas y horarios; nunca reutilizar un precio de otra ciudad. Cojauny ayuda a organizar compañeros, no opera ni reserva automáticamente el transporte.

CTA sugerido: «¿Quieres organizar un traslado con viajeros de tu vuelo? Apúntate a la lista de la beta». Enlazar a la landing local y a un segundo artículo relevante.

## Aceptación

- [ ] Cuatro versiones revisadas, mismo `postId` y slugs/rutas compatibles con el mecanismo actual.
- [ ] Comparación equilibrada y accesible; precios con fuente/fecha o ejemplo hipotético.
- [ ] Título, resumen, metadescripción e imagen con alt propios, sin inventar fotos de usuarios.
- [ ] Canonical, alternates, Article, sitemap y RSS verificados.
- [ ] Links internos válidos, CTA local y ninguna promesa de cobertura o ahorro garantizado.


## Entrega de esta iteración

Cuatro versiones incorporadas a `src/content/blog/posts.ts`, enlazadas con otras guías y la lista beta. RSS, sitemap y alternates se generan desde las mismas entradas. Las rutas están incluidas en la validación de HTML. Los criterios editoriales y fuentes locales que no se hayan consultado siguen pendientes; no se publican cifras reales de tarifas ni horarios.
