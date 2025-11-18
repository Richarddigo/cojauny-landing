import type { Locale } from '@/locales/config';

export interface BlogPost {
  slug: string;
  locale: Locale;
  title: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  heroWidth: number;
  heroHeight: number;
  body: string[];
  tags: string[];
  categories: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
  readingTimeMinutes: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'coordinacion-taxi-aeropuerto',
    locale: 'es',
    title: 'Coordina tu taxi al aeropuerto con tu mismo vuelo',
    summary:
      'Guía completa para organizar traslados compartidos al aeropuerto: cómo crear eventos, invitar pasajeros, negociar tarifas y dividir costos sin fricciones.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Pasajeros compartiendo taxi rumbo al aeropuerto',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Por qué compartir el taxi al aeropuerto cambia las reglas del juego\n\nCada año, millones de viajeros pagan entre 40 y 80 euros por trayecto en taxi desde el aeropuerto a la ciudad. Si viajas solo, ese coste es inevitable. Pero si compartes vuelo con tres personas más, esa misma carrera puede costar apenas 10-15 euros por persona. El problema tradicional ha sido encontrar y coordinar a esos compañeros de viaje de forma segura y eficiente.',
      'Cojauny resuelve esto conectando pasajeros del mismo vuelo antes de que despeguen. En esta guía te explicamos paso a paso cómo crear un evento de transporte compartido, invitar a tus compañeros de reserva, elegir franjas horarias basadas en tráfico real y negociar tarifas cerradas con operadores locales.',
      '## Paso 1: Crea tu evento de vuelo en Cojauny\n\nDespués de registrarte en la app (disponible para iOS y Android), el primer paso es añadir tu vuelo. Ve a la pestaña "Eventos" y pulsa el botón "+ Nuevo Evento". La app te pedirá:\n\n- **Número de vuelo**: Por ejemplo, IB3142 o VY2205\n- **Fecha de salida o llegada**: El sistema detecta automáticamente los horarios oficiales\n- **Tipo de evento**: Selecciona "Transporte compartido al aeropuerto de salida" o "Desde aeropuerto de llegada"\n- **Punto de encuentro**: Si es ida, define un lugar céntrico (estación de tren, plaza principal). Si es vuelta, será la terminal del aeropuerto\n- **Cupos disponibles**: Número máximo de pasajeros (recomendamos 4 para un taxi estándar, 7-8 para van)',
      'Una vez creado el evento, Cojauny lo hace visible para todos los usuarios que tengan el mismo vuelo registrado. También puedes compartir un enlace directo por WhatsApp o email si ya conoces a otros viajeros.',
      '## Paso 2: Invita y coordina a tus compañeros de viaje\n\nLa app mostrará automáticamente tu evento a otros pasajeros del mismo vuelo. Recibirás notificaciones cuando alguien se una. Desde el chat del evento (incluido en la versión Premium, o chat directo con organizador en Free) podrás:\n\n- **Confirmar la hora exacta de recogida**: Usa las recomendaciones de tráfico que muestra Cojauny (integradas con Google Maps Traffic)\n- **Compartir ubicaciones en tiempo real**: Muy útil el día del viaje para saber si alguien se retrasa\n- **Acordar método de pago**: Efectivo, Bizum, transferencia o pago compartido con tarjeta al conductor\n- **Verificar perfiles**: Revisa reputación, foto y valoraciones de otros usuarios para viajar con confianza',
      'Pro tip: Si viajas regularmente en la misma ruta (por ejemplo, cada lunes Madrid-Barcelona), crea un "evento recurrente" desde la configuración avanzada. Así tu grupo habitual recibe notificaciones automáticas cada semana.',
      '## Paso 3: Elige franjas de recogida basadas en tráfico real\n\nCojauny integra datos de tráfico en tiempo real para sugerirte la mejor hora de salida. Por ejemplo:\n\n- **Vuelo doméstico a las 8:00**: Recomendación de recogida 2 horas antes (6:00) más 30-45 min de tráfico → salida 5:15-5:30\n- **Vuelo internacional a las 14:00**: Recomendación 3 horas antes (11:00) más tráfico punta → salida 9:45-10:00\n\nLa app ajusta estas franjas según el día de la semana y condiciones meteorológicas. Si hay huelga de transporte público o evento especial en la ciudad, recibirás una alerta para adelantar la salida.',
      'También puedes ver en el mapa del evento cuánto tardaría el taxi desde cada punto de encuentro propuesto. Esto ayuda a elegir la ubicación más justa para todos los participantes.',
      '## Paso 4: Negocia tarifas cerradas con operadores locales\n\nUna de las ventajas de organizar el grupo con antelación es que puedes contactar directamente con empresas de taxi o VTC para negociar precio cerrado. Usa esta checklist:\n\n**Checklist de negociación de tarifas:**\n- ☑ Solicita presupuesto para 4 pasajeros con equipaje estándar (1 maleta + 1 bolsa de mano cada uno)\n- ☑ Pregunta si hay suplemento por hora (madrugada, festivos)\n- ☑ Confirma que el precio incluye peajes y parking del aeropuerto\n- ☑ Pide el contacto directo del conductor para el día del viaje\n- ☑ Acuerda la política de cancelación (¿con cuánta antelación? ¿hay penalización?)\n- ☑ Solicita factura si viajas por trabajo (importante para reembolsos)',
      'Muchos operadores ofrecen descuentos del 10-15% para grupos organizados vs llamar en el momento. Guarda los presupuestos en el chat del evento para que todos los participantes los vean.',
      '## Paso 5: Divide el coste en la app\n\nCuando termine el viaje, Cojauny te permite registrar el coste total y dividirlo automáticamente entre los participantes. Ve a "Cerrar evento" y añade:\n\n- **Coste total del taxi**: Por ejemplo, 65€\n- **Número de participantes confirmados**: 4 personas\n- **Coste por persona**: 16,25€ (calculado automáticamente)\n\nLa app registra este ahorro en tu perfil (49€ ahorrados vs viajar solo pagando 65€) y suma las emisiones de CO₂ evitadas (aproximadamente 12 kg por cada taxi compartido). Estos datos alimentan tu "Panel de Impacto" visible en tu perfil.',
      'Si algún participante no se presentó sin avisar, puedes reportarlo desde el evento. Esto afecta a su reputación y ayuda a mantener la confianza en la comunidad.',
      '## Casos de uso reales\n\n**Caso 1: Viaje de negocios Madrid-Barajas**\nMaría, consultora freelance, viaja cada dos semanas a Madrid. Creó un evento recurrente "Martes 18:00 Centro→T4" y ahora tiene un grupo estable de 3 personas más que comparten el trayecto. Ahorro anual: ~800€.\n\n**Caso 2: Familia con niños Barcelona-El Prat**\nLos García necesitaban van para 6 personas (2 adultos + 4 niños + equipaje). Publicaron evento con 5 días de antelación, encontraron otra familia en su vuelo y negociaron van compartida por 45€ total (vs 90€ que les cotizaban individualmente).',
      '**Caso 3: Evento corporativo con 20 asistentes**\nUna startup organizó transporte compartido para su offsite en Valencia. Crearon 3 eventos (mañana, tarde, noche) y coordinaron 4 vans. Resultado: 65% de ahorro vs taxis individuales + cero emails perdidos gracias al chat centralizado.\n\n## Preguntas frecuentes\n\n**¿Qué pasa si mi vuelo se retrasa?**\nCojauny recibe actualizaciones en tiempo real y notifica automáticamente al grupo. Desde el chat puedes reorganizar la hora de recogida al aterrizar.\n\n**¿Puedo unirme a un evento ya creado?**\nSí, siempre que haya cupos disponibles. La app muestra eventos abiertos de tu vuelo en la pestaña "Descubrir".',
      '**¿Es obligatorio pagar dentro de la app?**\nNo, Cojauny no procesa pagos. Coordináis el método entre vosotros (efectivo, Bizum, etc). La app solo registra el ahorro para tus estadísticas.\n\n**¿Funciona en todos los aeropuertos?**\nCojauny opera en +120 aeropuertos principales. Si el tuyo no aparece, solicítalo desde Configuración y lo añadiremos según demanda.\n\n## Conclusión\n\nOrganizar un taxi compartido al aeropuerto ya no requiere cadenas interminables de emails o grupos de WhatsApp desorganizados. Con Cojauny, creas el evento en 2 minutos, la app encuentra compañeros de vuelo verificados, coordinas en un chat temporal y registras el ahorro automáticamente.\n\nEl resultado: viajas más barato, más sostenible y con la tranquilidad de saber con quién compartes el trayecto. Si aún no lo has probado, descarga Cojauny y crea tu primer evento de transporte compartido hoy mismo.'
    ],
    tags: ['movilidad', 'taxi compartido', 'aeropuerto', 'ahorro', 'guía completa'],
    categories: ['operations', 'product'],
    publishedAt: '2025-11-10T08:00:00.000Z',
    updatedAt: '2025-11-10T08:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 12
  },
  {
    slug: 'share-airport-ride',
    locale: 'en',
    title: 'How to share airport rides with your same flight',
    summary:
      'Actionable framework to align passengers, lock the pickup point and split transfers before the trip begins.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Travelers organizing airport ride on their phones',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      'We cover pre-flight coordination, recommended chat prompts and how to keep the channel live offline during the flight.',
        'Use the downloadable checklist (https://cojauny.com/resources/airport-ride-checklist.pdf) to brief the group before boarding.'
    ],
    tags: ['airport ride', 'travel planning'],
    categories: ['operations'],
    publishedAt: '2025-11-10T08:00:00.000Z',
    updatedAt: '2025-11-10T08:00:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 6
  },
  {
    slug: 'navette-aeroport-partagee',
    locale: 'fr',
    title: 'Navette aéroport partagée entre passagers du même vol',
    summary:
      'Conseils pour réduire les coûts en partageant taxi, VTC ou parking longue durée avec Cojauny.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Voyageurs français organisant une navette partagée',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      "Découvrez comment configurer un salon temporaire Cojauny, verrouiller le point de rencontre et suivre l'arrivée du chauffeur.",
      "Ajoutez vos propres conseils tarifaires dans la checklist afin d'éviter les malentendus à l'arrivée."
    ],
    tags: ['navette', 'aéroport', 'mobilité partagée'],
    categories: ['product'],
    publishedAt: '2025-11-12T09:00:00.000Z',
    updatedAt: '2025-11-12T09:00:00.000Z',
    author: 'Équipe Cojauny',
    readingTimeMinutes: 4
  },
  {
    slug: 'flughafenfahrt-teilen',
    locale: 'de',
    title: 'So teilst du die Fahrt zum Flughafen mit deinem Flug',
    summary:
      'Best Practices für Business-Teams, die am selben Flug teilnehmen und ihre Transfers bündeln möchten.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Deutsche Reisende stimmen ihren Transfer ab',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      'Wir erklären, wie du Slots für Fahrer erstellst, jemanden als Moderator festlegst und auch nach der Landung synchron bleibst.',
        'Nutze die Vorlage https://cojauny.com/resources/briefing-global-crews.pdf als Pflichtbriefing für internationale Crews.'
    ],
    tags: ['reiseplanung', 'fahrgemeinschaft'],
    categories: ['operations'],
    publishedAt: '2025-11-15T10:00:00.000Z',
    updatedAt: '2025-11-15T10:00:00.000Z',
    author: 'Cojauny Team DACH',
    readingTimeMinutes: 7
  },
  {
    slug: 'microbuses-para-equipos-en-gira',
    locale: 'es',
    title: 'Cómo coordinar microbuses para equipos en gira',
    summary:
      'Guía operativa completa para managers deportivos, tour coordinators y event planners que necesitan mover plantillas de 15-50 personas entre hotel, aeropuerto, estadio y eventos. Incluye templates, checklists y casos de éxito.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Equipo deportivo subiendo a un microbús coordinado con Cojauny',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# El desafío de mover equipos completos durante giras\n\nCuando gestionas la logística de un equipo deportivo, delegación corporativa o tour artístico, coordinar los traslados terrestres se convierte en un rompecabezas diario. Tienes que:\n\n- Sincronizar horarios de jugadores, staff técnico, médicos, fisios, prensa y sponsors\n- Gestionar cambios de último minuto (lesiones, ruedas de prensa extra, entrenamientos adicionales)\n- Mantener la privacidad del equipo (nada de compartir ubicaciones en grupos públicos)\n- Controlar costes (los microbuses cuestan 400-800€/día pero el 30% del tiempo van medio vacíos)\n- Documentar cada trayecto para reporting a la federación o al sponsor principal',
      'Cojauny centraliza toda esta operación en una sola plataforma, permitiendo al manager crear "eventos recurrentes" por cada desplazamiento clave de la gira y asignar roles (conductor, coordinador, persona de contacto en destino). En esta guía te explicamos cómo configurarlo, qué información necesitas del proveedor de transporte y cómo medir el ROI de optimizar las rutas.',
      '## Paso 1: Define la estructura de tu gira en eventos recurrentes\n\nAntes de crear nada en Cojauny, necesitas mapear todos los traslados de la gira completa. Usa esta plantilla:\n\n**Template de desplazamientos de gira:**\n- **D+0 (Llegada)**: Aeropuerto → Hotel (1 microbús, 30 pax)\n- **D+1 (Entrenamiento AM)**: Hotel → Campo de entrenamiento → Hotel (1 microbús, 22 pax + equipo técnico)\n- **D+1 (Partido)**: Hotel → Estadio → Hotel (2 microbuses, 45 pax total incluye delegación)\n- **D+2 (Salida)**: Hotel → Aeropuerto (1 microbús, 28 pax)\n\nCon este mapa claro, ve a Cojauny → "Eventos" → "+ Nuevo Evento Recurrente". Para cada desplazamiento, rellena:',
      '- **Nombre del evento**: "Traslado Entrenamiento AM - [Nombre del torneo]"\n- **Tipo**: Transporte grupal privado\n- **Recurrencia**: Todos los días del D+1 al D+5 a las 09:00\n- **Capacidad del vehículo**: 30 plazas (microbús estándar)\n- **Cupos reservados**: 22 (jugadores + cuerpo técnico)\n- **Cupos flotantes**: 8 (staff médico, prensa acreditada, invitados del sponsor)\n- **Punto de salida**: Lobby del Hotel [Nombre]\n- **Punto de llegada**: Entrada principal Campo [Nombre]\n- **Tiempo estimado**: 25 minutos + 10 min buffer\n- **Responsable del evento**: [Manager de logística] + [Coordinador local]',
      'Al crear el evento recurrente, Cojauny genera automáticamente instancias para cada día. Si un día específico cambia (por ejemplo, el entrenamiento se mueve a las 10:00), puedes editar solo esa instancia sin afectar al resto de la serie.',
      '## Paso 2: Asigna roles y permisos en cada evento\n\nNo todos los miembros del equipo necesitan la misma visibilidad ni los mismos permisos. Cojauny permite definir roles:\n\n**Rol Admin (Manager de logística)**\n- Crea y edita todos los eventos\n- Ve lista completa de asistentes\n- Puede cerrar cupos o añadir invitados externos\n- Accede al chat maestro con el proveedor de transporte\n\n**Rol Moderador (Coordinador de viaje)**\n- Confirma asistencia de su grupo (ej: todos los fisios)\n- Recibe alertas si alguien falta 15 min antes de la salida\n- Puede enviar recordatorios al subgrupo',
      '**Rol Participante (Jugador, staff, prensa)**\n- Ve horarios y puntos de encuentro\n- Confirma o cancela su asistencia\n- Recibe notificaciones 60min y 15min antes del traslado\n- Accede al chat del evento (solo lectura para jugadores, escritura para staff)\n\nAsigna estos roles desde "Configuración del Evento" → "Gestionar Participantes". Por defecto, quien crea el evento es Admin y puede nombrar hasta 3 Moderadores.',
      '## Paso 3: Integra con tu proveedor de microbuses\n\nLa mayoría de empresas de transporte corporativo ya trabajan con plataformas de gestión de flotas (Samsara, Fleetio, etc). Cojauny puede integrarse vía API o simplemente compartir un calendario iCal con todos los servicios confirmados.\n\n**Opción A: Integración API (para proveedores tech-friendly)**\nSolicita a tu proveedor las credenciales API. Desde Cojauny → "Integraciones" → "Conectar proveedor de transporte", introduces:\n- API Key del proveedor\n- Endpoint de confirmación de servicios\n- Webhook para recibir actualizaciones de tracking en vivo\n\nUna vez conectado, cada evento de Cojauny genera automáticamente una orden de servicio en el sistema del proveedor con: fecha, hora, origen, destino, nº de pasajeros, requisitos especiales (ej: "vehículo con wifi", "espacio para camillas").',
      '**Opción B: Calendario compartido (para proveedores tradicionales)**\nSi tu proveedor no tiene API, Cojauny genera un enlace iCal que puedes compartir. El proveedor lo suscribe en su Google Calendar o Outlook y ve todos los servicios confirmados en tiempo real. Cuando haces un cambio en Cojauny, el calendario se actualiza automáticamente.\n\nAmbas opciones incluyen tracking GPS del vehículo. Los participantes pueden ver en el mapa del evento dónde está el microbús ("A 8 min del hotel", "Parado en semáforo calle X").',
      '## Paso 4: Comparte la hoja de ruta con stakeholders críticos\n\nEn una gira deportiva hay gente que necesita saber los traslados pero no viaja en el microbús:\n\n- **Staff médico en el hotel**: Por si hay emergencia y necesitan enviar ambulancia al punto exacto donde está el equipo\n- **Prensa no acreditada**: Para que sepan cuándo llega el equipo al estadio y puedan posicionarse para fotos/entrevistas\n- **Sponsors con hospitality**: Para coordinar recepciones en el estadio con la llegada del equipo\n- **Federación/Liga**: Para reporting de cumplimiento de horarios contractuales',
      'Desde Cojauny puedes generar un "enlace de seguimiento público" que muestra solo:\n- Horario de salida y llegada estimada\n- Estado del traslado (confirmado / en curso / completado)\n- Tracking GPS del vehículo (opcional, puedes desactivarlo para viajes sensibles)\n\nNo muestra lista de pasajeros ni chat interno. Ideal para compartir con externos. Copia el enlace desde "Compartir Evento" → "Generar enlace público" y envíalo por email o WhatsApp.',
      '## Paso 5: Gestiona cambios de última hora sin caos\n\n**Escenario 1: Un jugador se lesiona y no viaja al entrenamiento**\nEl fisio va a Cojauny → Evento "Traslado Entrenamiento AM" → Gestionar asistentes → Marca "Ausente" al jugador lesionado. El sistema:\n- Notifica al coordinador: "28/30 plazas ocupadas, 2 libres"\n- Pregunta si quiere invitar a alguien de la lista de espera (ej: juvenil que entrena con el primer equipo)\n- Actualiza el manifiesto que ve el conductor en su app\n\n**Escenario 2: El entrenamiento se alarga 45 minutos**\nEl coordinador desde el campo abre Cojauny → Edita hora de recogida de 12:00 a 12:45. Todos los participantes reciben push notification: "Cambio de horario: Salida retrasada 45min". El proveedor de transporte ve el cambio en su panel y reposiciona el vehículo.',
      '**Escenario 3: Rueda de prensa extra, necesitas un segundo microbús**\nEl manager crea un nuevo evento "Traslado Prensa Urgente" seleccionando solo a los 8 periodistas acreditados + director de comunicación. Asigna vehículo secundario. Cojauny envía notificación solo a ese subgrupo, sin molestar al resto del equipo.\n\n**Escenario 4: El patrocinador principal trae 5 invitados VIP al partido**\nDesde "Eventos" → "Traslado Partido" → "Añadir invitados externos", introduces emails de los VIPs. Reciben enlace para descargar Cojauny (o acceso web si prefieren), ven solo el evento del partido (no otros traslados privados del equipo) y pueden trackear dónde está el microbús.',
      '## Métricas clave para medir el ROI\n\nCojauny genera un dashboard de logística con métricas que puedes exportar en PDF para reportar a dirección o sponsors:\n\n**Ocupación media de vehículos**\n- Cálculo: (Pasajeros confirmados / Capacidad total) por trayecto\n- Objetivo: >75% ocupación media en toda la gira\n- Métrica real de un caso: Equipo de baloncesto ACB mejoró de 68% a 81% ocupación optimizando horarios con Cojauny\n\n**Puntualidad**\n- % de traslados que salieron ±5min del horario previsto\n- Incluye gráfico de causas de retraso (pasajeros, tráfico, vehículo)\n- Métrica real: Club de fútbol 2ªB redujo retrasos de 23% a 9% usando alertas automáticas',
      '**Ahorro por optimización**\n- Compara coste real vs coste si cada subgrupo hubiera contratado vehículo aparte\n- Ejemplo: 45 personas en 2 microbuses (800€/día) vs 5 taxis grandes (180€×5 = 900€/día) → Ahorro 100€/día × 10 días gira = 1.000€\n\n**Sostenibilidad**\n- CO₂ evitado consolidando traslados\n- Cojauny calcula: 2 microbuses completos emiten ~40% menos que 5 taxis semi-vacíos\n- Métrica real: Selección nacional de hockey reportó 1,2 toneladas CO₂ ahorradas en torneo europeo (útil para sponsors con compromisos ESG)',
      '**Satisfacción del equipo**\n- Encuesta post-traslado (opcional, 3 preguntas rápidas)\n- Evalúa: puntualidad, comodidad del vehículo, comunicación del coordinador\n- Métrica real: Equipo de rugby incrementó NPS de traslados de 6,5 a 8,2 en una temporada\n\n## Casos de éxito reales\n\n**Caso 1: Club de fútbol profesional (2ª División)**\nUsaban WhatsApp para coordinar traslados de 35 personas (plantilla + staff). Problemas: mensajes perdidos, gente que no veía los cambios de hora, coordinador saturado respondiendo lo mismo 10 veces.\n\nCon Cojauny:\n- Crearon eventos recurrentes para toda la temporada en 2 horas\n- Ahorro de 6 horas/semana del coordinador (dejó de responder "¿a qué hora salimos?" por privado)\n- Redujeron de 3 a 0 los casos de jugadores que llegaron tarde por no enterarse de cambios\n- ROI documentado: 4.200€ ahorrados en temporada (optimización vehículos + tiempo del coordinador)',
      '**Caso 2: Gira de orquesta sinfónica (12 ciudades, 80 músicos + equipo técnico)**\nNecesitaban coordinar 3 autobuses + 1 camión de instrumentos. Problema: logística en Excel, comunicación por email, cero visibilidad para músicos.\n\nCon Cojauny:\n- Configuraron jerarquía: Director de gira (admin) → 4 jefes de sección (moderadores) → 80 músicos (participantes)\n- Integraron tracking GPS de los 4 vehículos\n- Los músicos veían ETA del autobús en tiempo real desde el hotel\n- Resultado: 100% puntualidad en 36 traslados, 0 incidencias. Director de producción reportó "la gira más fluida en 10 años"',
      '**Caso 3: Startup tech con offsite trimestral (40 empleados, 3 días)**\nContrataban vans ad-hoc cada trimestre sin optimizar rutas. Con Cojauny:\n- Crearon encuesta previa: ¿de qué zona de la ciudad sales?\n- Algoritmo de Cojauny propuso 3 puntos de recogida óptimos (vs 7 que pedían originalmente)\n- Pasaron de 5 vans a 3 microbuses → ahorro 520€ por offsite\n- Bonus: empleados valoraron positivamente poder conocer a compañeros de otros equipos durante el trayecto (mejora culture fit)\n\n## Checklist final para tu primera gira con Cojauny\n\n**2 semanas antes:**\n- ☑ Crea cuenta de equipo en Cojauny (plan Business recomendado para +20 personas)\n- ☑ Importa lista de participantes (CSV o integración con Slack/Google Workspace)\n- ☑ Mapea todos los traslados de la gira en el template\n- ☑ Crea eventos recurrentes para desplazamientos fijos\n- ☑ Asigna roles (admin, moderadores, participantes)',
      '**1 semana antes:**\n- ☑ Comparte enlace de descarga de Cojauny con todo el equipo\n- ☑ Haz onboarding rápido (videollamada 15min explicando cómo confirmar asistencia y ver tracking)\n- ☑ Conecta con proveedor de transporte (API o calendario)\n- ☑ Prueba notificaciones: crea evento de prueba y verifica que todos reciben la alerta\n\n**3 días antes:**\n- ☑ Confirma asistencia de todos los participantes en cada evento\n- ☑ Identifica cupos vacíos y optimiza (¿puedes reducir un vehículo?)\n- ☑ Genera enlaces públicos para stakeholders externos (prensa, sponsors)',
      '**Durante la gira:**\n- ☑ Abre Cojauny 15min antes de cada traslado para ver confirmaciones en tiempo real\n- ☑ Usa chat del evento para coordinar cualquier cambio\n- ☑ Activa tracking GPS cuando los vehículos salgan\n- ☑ Cierra cada evento al completarse (esto desbloquea las métricas)\n\n**Post-gira:**\n- ☑ Descarga informe de métricas (ocupación, puntualidad, ahorro, CO₂)\n- ☑ Envía encuesta de satisfacción opcional a participantes\n- ☑ Archiva eventos completados (quedan en historial pero no estorban en vista activa)\n- ☑ Programa retrospectiva con coordinadores: ¿qué mejorar para la próxima?\n\n## Conclusión\n\nCoordinar traslados de equipos ya no requiere hojas de cálculo, cadenas de emails ni saturar al coordinador con consultas repetitivas. Cojauny centraliza la operación, automatiza notificaciones, integra con proveedores y mide el impacto real en ahorro y eficiencia.\n\nSi gestionas logística de equipos deportivos, eventos corporativos o tours, prueba Cojauny para tu próxima gira. El onboarding toma menos de 2 horas y el ROI es medible desde el primer desplazamiento.'
    ],
    tags: ['deporte', 'logística', 'microbús', 'eventos', 'coordinación'],
    categories: ['operations'],
    publishedAt: '2025-11-17T07:00:00.000Z',
    updatedAt: '2025-11-17T07:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 15
  },
  {
    slug: 'optimize-airport-shuttles-for-tech-events',
    locale: 'en',
    title: 'How to optimise airport shuttles for tech events',
    summary:
      'Playbook for event ops teams that need to move speakers, sponsors and staff between the venue and the airport without surprises.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Event coordinators reviewing shuttle routes on Cojauny',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      'Segment shuttles by hotel cluster, assign moderators inside Cojauny and keep everyone updated with the temporary chat.',
      'Export savings and occupancy metrics to align with finance and prove the ROI of shared ground transport.'
    ],
    tags: ['events', 'airport shuttles'],
    categories: ['operations', 'case-studies'],
    publishedAt: '2025-11-16T10:30:00.000Z',
    updatedAt: '2025-11-16T10:30:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 5
  },
  {
    slug: 'navette-durable-pour-equipes',
    locale: 'fr',
    title: 'Navettes durables pour équipes en mission',
    summary:
      'Conseils pratiques pour réduire les coûts de transport terrestre tout en respectant les objectifs RSE de votre entreprise.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Manager français planifiant une navette partagée',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      'Créez des événements par vol ou train et invitez automatiquement chaque collaborateur avec les instructions adaptées.',
      'Analysez les économies générées grâce au tableau d’impact pour alimenter votre reporting climat.'
    ],
    tags: ['durabilité', 'transport partagé'],
    categories: ['sustainability'],
    publishedAt: '2025-11-17T09:45:00.000Z',
    updatedAt: '2025-11-17T09:45:00.000Z',
    author: 'Équipe Cojauny',
    readingTimeMinutes: 4
  },
  {
    slug: 'team-shuttle-bestenpraktiken',
    locale: 'de',
    title: 'Best Practices für Team-Shuttles zwischen Flughafen und Hotel',
    summary:
      'So planst du Sammeltransfers für Projektteams oder Delegationen, ohne jedes Mal neue Gruppen zu erstellen.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Projektteam koordiniert Shuttle im DACH-Raum',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      'Nutze wiederkehrende Events für jede Route, tracke Auslastung und teile Statusupdates über den temporären Chat.',
      'Verknüpfe deine bevorzugten Shuttle-Partner und lasse sie selbst Slots bestätigen, um Zeit im Backoffice zu sparen.'
    ],
    tags: ['shuttle', 'teamreisen'],
    categories: ['operations'],
    publishedAt: '2025-11-18T06:30:00.000Z',
    updatedAt: '2025-11-18T06:30:00.000Z',
    author: 'Cojauny Team DACH',
    readingTimeMinutes: 6
  }
];

export const getPostsByLocale = (locale: Locale) => blogPosts.filter((post) => post.locale === locale);

export const getPost = (locale: Locale, slug: string) =>
  blogPosts.find((post) => post.locale === locale && post.slug === slug);
