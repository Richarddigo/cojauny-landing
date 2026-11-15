# Cojauny · guía de llegada

Landing multilingüe de Cojauny: información del viaje, acceso beta, soporte y
documentos legales en español, inglés, alemán y francés.

La dirección editorial utiliza papel cálido, tinta verde, titulares serif del
sistema y un itinerario con los cinco pasos reales del producto. Las ventajas
son notas numeradas, las funciones un índice abierto y las preguntas una lista
de consulta. Los mockups permanecen en la demostración. No se inventan vuelos,
testimonios, disponibilidad o métricas para decorar la portada.

`src/styles/travel-guide.css` contiene esta composición. Los nombres históricos
de utilidades `studio` siguen siendo alias compatibles; la landing tiene su
propia paleta. El menú, los formularios, las traducciones y los enlaces de
soporte y privacidad conservan sus contratos. Los desplazamientos respetan
`prefers-reduced-motion` y los destinos quedan debajo del encabezado fijo.

## Desarrollo y validación local

Validado con Node 24.22.3 y el lockfile versionado. La base de este trabajo es la
fuente publicada `f7722511c3a0fa9b46c8e228dc8ff46e97507d00`, que contiene
correcciones de soporte y seguridad todavía ausentes del antiguo `main`.

```sh
npm ci
npm run lint
npm run type-check
npm run test:ci -- --runInBand
npm run build
npm run start -- --hostname localhost --port 3000
```

Abrir `http://localhost:3000/es`. Usar el mismo hostname en el servidor y en las
pruebas para que las reescrituras de idiomas se resuelvan correctamente.
`src/proxy.ts` conserva la detección y las URL canónicas de next-intl.

La prueba de accesibilidad existente comprueba también que el aviso de primera
visita, su texto y sus acciones quedan dentro del viewport en escritorio y
móvil sobre el build optimizado. No basta con ocultar el aviso para capturarlo.

```sh
npm run test:e2e -- --workers=1 --project=chromium accessibility.spec.ts menu.focus.spec.ts menu.spec.ts language.switcher.spec.ts support.spec.ts
```

## Consentimiento

El aviso mantiene las categorías, el periodo de doce meses y la posibilidad de
cambiar la elección. Una escritura fallida no permite que el permiso anterior
prevalezca sobre la nueva elección del documento. Las lecturas que observan una
retirada, un dato inválido o una denegación retiran también el fallback anterior.

Google Analytics sólo se prepara tras aceptar. La revocación aplica el opt-out
oficial y actualiza Consent Mode de forma síncrona; una inicialización diferida
revalida el estado actual. Las regresiones usan un ID ficticio y una cola local,
sin cargar el SDK de Google ni enviar datos. Vercel conserva su comprobación de
consentimiento antes de cada envío.

Si el navegador impide guardar la preferencia, la elección en memoria sólo se
garantiza para el documento actual. No se promete persistencia entre recargas
en ese caso, ni cancelar solicitudes emitidas antes de revocar.

## Entrega

El recibo en `tareas/evidence/landing-editorial-local-20261116.json` registra los
gates, hashes y límites. Las capturas y logs quedan en `reports/`, fuera de Git.
Los formularios del recorrido local usan respuestas interceptadas: no prueban
la entrega real de correo ni el backend de producción.

Esta entrega es local. No incluye despliegue, cambios de Vercel, activación de
tags, push, PR, merge o ejecución de automatizaciones alojadas. Se conserva
`AGENTS.md` y `vercel.json` con el despliegue Git deshabilitado.
