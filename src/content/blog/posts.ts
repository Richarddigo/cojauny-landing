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
  },
  {
    slug: 'coordinacion-vuelo-tiempo-real',
    locale: 'es',
    title: 'Coordinación de vuelos en tiempo real: Cómo Cojauny te mantiene sincronizado',
    summary:
      'Descubre cómo la sincronización automática con tu vuelo te ayuda a coordinar traslados al aeropuerto sin preocuparte por retrasos o cambios de última hora.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Pasajeros coordinando viaje en tiempo real',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# La coordinación de vuelos en tiempo real cambia todo\n\nUno de los mayores dolores de cabeza al organizar transporte compartido al aeropuerto es gestionar cambios de último momento. Un retraso de 30 minutos puede arruinar toda la planificación. Cojauny elimina esta incertidumbre integrándose directamente con las bases de datos de vuelos globales.',
      '## ¿Cómo funciona la sincronización automática?\n\nCuando creas un evento de traslado en Cojauny, el sistema registra tu número de vuelo y fecha. A partir de ese momento:\n\n- **Monitoreo constante**: Cada 15 minutos verificamos el estado de tu vuelo con las aerolíneas\n- **Notificaciones instantáneas**: Si hay un cambio (retraso, adelanto, cancelación), todos los participantes del evento reciben una alerta\n- **Ajuste automático de horarios**: El sistema recalcula la hora óptima de encuentro basándose en el nuevo horario de vuelo\n- **Actualizaciones en el chat**: Todos ven el cambio en tiempo real dentro del chat del evento',
      '## Casos de uso reales\n\n**Escenario 1: Retraso en vuelo de salida**\nMarcos organizó un taxi compartido para las 6:00 AM. A las 5:30 AM el vuelo se retrasa 1 hora. Cojauny notifica automáticamente al grupo. Los pasajeros ajustan la hora de recogida a las 7:00 AM sin necesidad de llamadas telefónicas.\n\n**Escenario 2: Cambio de terminal en llegada**\nUn vuelo cambia de T1 a T4 30 minutos antes del aterrizaje. Cojauny actualiza el punto de encuentro en el mapa y todos los participantes lo ven al aterrizar.\n\n**Escenario 3: Adelanto del vuelo**\nUn vuelo aterriza 20 minutos antes. El conductor del taxi compartido recibe notificación y ajusta su hora de llegada al aeropuerto.',
      '## Ventajas frente a WhatsApp o email\n\nLa coordinación manual tiene problemas:\n- Alguien tiene que monitorear el vuelo manualmente\n- Los mensajes se pierden en cadenas largas\n- No todos revisan WhatsApp constantemente\n- Difícil saber quién vio la actualización\n\nCon Cojauny:\n- El sistema hace el monitoreo por ti\n- Las notificaciones push llegan a todos\n- Registro de quién leyó cada mensaje\n- Historial completo de cambios',
      '## Integración con APIs de aerolíneas\n\nCojauny se conecta con:\n- **FlightStats**: Base de datos global de vuelos comerciales\n- **IATA**: Códigos de aeropuertos y rutas oficiales\n- **OpenSky Network**: Datos de vuelo en tiempo real\n- **Aerolíneas directamente**: APIs de Iberia, Vueling, Air Europa y más\n\nEsto significa que cubres:\n- +5,000 aeropuertos\n- +1,200 aerolíneas\n- Vuelos domésticos e internacionales\n- Low-cost y tradicionales',
      '## Cómo activar las notificaciones\n\n1. Al crear tu evento, asegúrate de introducir el número de vuelo correcto (ej: IB3142)\n2. Ve a Configuración > Notificaciones\n3. Activa "Alertas de vuelo"\n4. Elige tu preferencia:\n   - Solo cambios importantes (>30 min)\n   - Todos los cambios (incluye cambios de puerta)\n   - Modo silencioso (sin notificaciones push, solo en app)\n\n**Pro tip**: Activa las notificaciones push 24 horas antes del vuelo para recibir actualizaciones en tiempo crítico.',
      '## Privacidad y permisos\n\nMuchos usuarios preguntan: ¿Cojauny rastrea mi ubicación constantemente?\n\n**No.** Solo:\n- Consultamos datos públicos de vuelos (horarios, estado)\n- Si activas compartir ubicación en vivo, solo la ven los miembros de tu evento\n- Puedes desactivar el tracking en cualquier momento\n- Los datos de ubicación se borran 24h después del evento',
      '## Preguntas frecuentes\n\n**¿Funciona con vuelos chárter o privados?**\nSolo vuelos comerciales con número de vuelo público.\n\n**¿Qué pasa si no tengo datos móviles al aterrizar?**\nLa última actualización queda guardada en la app offline. Al conectarte a WiFi del aeropuerto, sincroniza automáticamente.\n\n**¿Puedo agregar varios vuelos al mismo evento?**\nNo directamente, pero puedes crear eventos separados y vincularlos. Útil para grupos que llegan en vuelos diferentes al mismo destino.\n\n**¿Hay coste adicional por las notificaciones?**\nNo, todas las notificaciones de vuelo están incluidas en las versiones Free y Premium.',
      '## Conclusión\n\nLa coordinación en tiempo real no es un lujo, es una necesidad cuando múltiples personas dependen de un mismo transporte. Cojauny automatiza el monitoreo de vuelos para que tú y tu grupo podáis concentraros en viajar, no en revisar constantemente el estado del vuelo.\n\nDescarga Cojauny y crea tu primer evento con sincronización de vuelo. Verás la diferencia desde el primer viaje.'
    ],
    tags: ['tiempo real', 'coordinación', 'vuelos', 'sincronización'],
    categories: ['product', 'operations'],
    publishedAt: '2025-11-19T08:00:00.000Z',
    updatedAt: '2025-11-19T08:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 8
  },
  {
    slug: 'real-time-location-sharing',
    locale: 'en',
    title: 'Real-time location sharing: Never lose track of your ride partners',
    summary:
      'Learn how Cojauny\'s live location feature keeps everyone connected during airport transfers, making meetups seamless and stress-free.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Travelers sharing location on mobile app',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Why real-time location sharing matters for shared rides\n\nThe worst part of coordinating a shared airport ride isn\'t planning—it\'s execution. You\'re rushing through the terminal, your phone is at 5%, and you have no idea if your ride partners are already at the pickup point or still stuck at baggage claim. Cojauny\'s real-time location sharing solves this problem elegantly.',
      '## How it works\n\nWhen you join an airport transfer event in Cojauny:\n\n1. **Opt-in sharing**: Each participant chooses whether to share their live location\n2. **Event-based tracking**: Location is only visible to people in your specific event\n3. **Smart battery usage**: The app uses low-power GPS pinging (updates every 30 seconds)\n4. **Auto-expiry**: Location sharing stops automatically 2 hours after the scheduled event time\n5. **Map visualization**: See everyone\'s position on an interactive map within the event chat',
      '## Real-world scenarios\n\n**Scenario 1: Arriving passengers**\nYour flight lands at 14:30. You share your location as you exit the plane. Your ride partners see:\n- You\'re walking toward baggage claim\n- Expected arrival at pickup: 8 minutes\n- They can time their own arrival accordingly\n\n**Scenario 2: Departing travelers**\nYou\'re the first to arrive at the meeting point (hotel lobby). Your location dot is green on the map. When others see you\'re already there, they know to hurry. No "Are you here yet?" messages needed.\n\n**Scenario 3: Running late**\nTraffic makes you 10 minutes late. Instead of anxiety, your group sees your dot moving on the map and can estimate your arrival. The driver checks the app and decides to wait.',
      '## Privacy controls you\'ll appreciate\n\n**Granular permissions**\n- Share location only when event is active (not 24/7)\n- Toggle on/off anytime with one tap\n- Choose accuracy level: precise or approximate area\n\n**Visibility settings**\n- Location visible only to event members\n- Organizers can\'t force location sharing\n- Data never stored beyond event duration\n\n**Transparency**\n- Clear indicator when location is being shared\n- Notification if location sharing is active in background\n- Full control in iOS/Android system settings',
      '## Battery impact and optimization\n\nCommon concern: "Will this drain my battery?"\n\n**Our testing shows:**\n- 2-hour event: ~5% battery usage\n- Low-power mode compatible\n- Intelligent pause when phone is stationary\n- WiFi-assisted positioning when available\n\n**Power-saving tips:**\n- Only enable when you\'re actually en route\n- Disable when waiting in a stationary location\n- Use "approximate location" mode for longer trips',
      '## Comparison with other apps\n\n**WhatsApp live location:**\n- Manual activation each time\n- 15min, 1hr, 8hr fixed durations\n- Not event-context aware\n- Battery heavy\n\n**Google Maps sharing:**\n- Good for general use\n- No ride-specific features\n- Requires everyone has Google account\n- No integration with ride chat\n\n**Cojauny:**\n- Event-scoped automatically\n- Smart duration (matches event timeline)\n- Built into ride coordination flow\n- Optimized for airport transfers',
      '## How to enable location sharing\n\n**iOS:**\n1. Settings > Privacy > Location Services > Cojauny\n2. Choose "While Using the App"\n3. Enable "Precise Location"\n\n**Android:**\n1. Settings > Apps > Cojauny > Permissions > Location\n2. Choose "Allow only while using the app"\n3. Enable "Use precise location"\n\n**In-app:**\n1. Open your event\n2. Tap the location icon in event header\n3. Choose "Share my location with this event"\n4. Select duration: automatic, 1 hour, or 2 hours',
      '## Use cases beyond airports\n\n**Corporate shuttles:**\nHR coordinators see real-time attendance, can send reminders to stragglers, and notify drivers of ETA changes.\n\n**Festival carpools:**\nMultiple cars traveling to same destination can see each other\'s progress and coordinate rest stops.\n\n**International conferences:**\nDelegations from different flights merge at the airport. Location sharing helps them find each other in crowded terminals.',
      '## FAQ\n\n**Does location sharing work offline?**\nNo, you need data connection. However, last known location is cached and visible to others.\n\n**Can I see historical routes?**\nNo, Cojauny doesn\'t store location history. Only real-time position during active events.\n\n**What if someone forgets to disable sharing?**\nAuto-expires 2 hours after event end time. No manual action needed.\n\n**Is location data encrypted?**\nYes, end-to-end encrypted between participants. Cojauny servers never store precise coordinates.',
      '## Conclusion\n\nReal-time location sharing transforms chaotic airport meetups into smooth, coordinated transfers. It\'s not about surveillance—it\'s about mutual visibility that benefits everyone. Download Cojauny and experience the peace of mind that comes with knowing exactly where your ride partners are.\n\nReady to stop playing "Marco Polo" at the airport? Enable location sharing in your next Cojauny event.'
    ],
    tags: ['location sharing', 'GPS', 'real-time', 'coordination'],
    categories: ['product'],
    publishedAt: '2025-11-19T09:00:00.000Z',
    updatedAt: '2025-11-19T09:00:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 9
  },
  {
    slug: 'chat-groupe-ephemere',
    locale: 'fr',
    title: 'Chat de groupe éphémère : Communication sécurisée pour vos transferts',
    summary:
      'Découvrez comment le chat temporaire de Cojauny facilite la coordination sans compromettre votre vie privée.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Passagers utilisant le chat de groupe',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Pourquoi un chat éphémère change la donne\n\nOrganiser un trajet partagé vers l\'aéroport nécessite communication constante : confirmer l\'heure, partager le point de rendez-vous, signaler un retard. Mais échanger son numéro personnel avec des inconnus n\'est pas idéal. Le chat éphémère de Cojauny résout ce dilemme.',
      '## Fonctionnement du chat temporaire\n\n**Activation automatique**\n- Dès qu\'un événement est créé, un salon de discussion privé s\'ouvre\n- Tous les participants y ont accès instantanément\n- Aucun échange de numéro de téléphone nécessaire\n\n**Durée de vie programmée**\n- Le chat reste actif pendant la durée de l\'événement + 24h\n- Après expiration, toutes les conversations sont définitivement effacées\n- Notification 1 heure avant fermeture pour sauvegarder infos importantes\n\n**Sécurité intégrée**\n- Chiffrement de bout en bout\n- Messages hébergés en Europe (conformité RGPD)\n- Aucun historique permanent\n- Impossibilité de rouvrir un chat expiré',
      '## Avantages par rapport à WhatsApp\n\n**Vie privée préservée**\n- Pas besoin de partager votre numéro\n- Pseudo utilisable au lieu du nom réel\n- Aucun accès à votre liste de contacts\n\n**Contexte de voyage**\n- Intégré directement dans l\'événement\n- Infos de vol visibles en permanence\n- Carte du lieu de rendez-vous accessible\n- Compteur de participants en temps réel\n\n**Propreté organisationnelle**\n- Pas de groupe WhatsApp fantôme qui traîne\n- Aucun spam ultérieur\n- Conversations archivées automatiquement',
      '## Fonctionnalités du chat\n\n**Messages de base**\n- Texte, emoji, liens\n- Photos (max 10MB, auto-compression)\n- Documents PDF (billets, confirmations)\n\n**Fonctionnalités avancées (Premium)**\n- Appels audio de groupe\n- Partage d\'écran pour montrer itinéraire\n- Traduction automatique des messages\n- Accusés de lecture ("vu par 3/4 personnes")\n\n**Modération intelligente**\n- Détection automatique de spam\n- Signalement de comportement inapproprié\n- Blocage d\'un participant par l\'organisateur\n- Système de réputation (affecte visibilité future)',
      '## Cas d\'usage concrets\n\n**Exemple 1 : Coordination minute par minute**\n*13:45* Organisateur: "Je viens de récupérer ma valise, j\'arrive dans 5 min"\n*13:47* Membre: "Moi aussi, je vois le panneau sortie 2"\n*13:50* Organisateur: "Le taxi est là, plaque ABC-123, Toyota grise"\n*13:52* Tous: Embarqués, trajet lancé\n\n**Exemple 2 : Gestion de retard**\n*06:15* Membre: "Désolé, mon réveil n\'a pas sonné, j\'arrive dans 10 min"\n*06:16* Organisateur: "Pas de souci, on te attend, le taxi est flexible"\n*06:17* Autre membre: "On peut partir à 6:30 max, vol à 8:00"\n\n**Exemple 3 : Changement de plan**\n*Notification automatique*: "Vol IB3142 retardé de 45 min"\n*Organisateur*: "On décale le rendez-vous à 14:00 au lieu de 13:15"\n*Tous*: Accusé de réception visible',
      '## Modération et sécurité\n\n**Règles de la communauté**\n- Langage respectueux obligatoire\n- Pas de contenu commercial non sollicité\n- Interdiction de harcèlement\n- Conversations liées au trajet uniquement\n\n**Outils de signalement**\n- Bouton "Signaler" sur chaque message\n- Équipe de modération intervient en <15 min\n- Sanctions graduelles : avertissement → suspension temporaire → bannissement\n\n**Protection des mineurs**\n- Comptes <18 ans nécessitent validation parentale\n- Filtrage automatique de contenu sensible\n- Accès supervisé par organisateur majeur',
      '## Traduction automatique (fonctionnalité Premium)\n\nVoyageurs internationaux apprécient particulièrement :\n- Détection automatique de la langue du message\n- Traduction en temps réel dans votre langue préférée\n- Support de 40+ langues\n- Contexte de voyage pris en compte (terminologie aéroportuaire)\n\nExemple :\n*Anglais*: "I\'m stuck at customs, 10 min delay"\n*Espagnol*: "Estoy retenido en aduanas, 10 min de retraso"\n*Français*: "Bloqué à la douane, 10 min de retard"',
      '## Expiration et archivage\n\n**Avant expiration**\n- Notification 24h avant : "Le chat expire demain"\n- Notification 1h avant : "Dernière chance de sauvegarder infos importantes"\n- Bouton "Exporter la conversation" (PDF ou texte)\n\n**Après expiration**\n- Chat devient lecture seule pendant 1h\n- Puis suppression définitive et irréversible\n- Seuls les participants peuvent demander réouverture (max 3 jours)\n\n**Statistiques conservées (anonymisées)**\n- Nombre de messages envoyés\n- Temps de réponse moyen du groupe\n- Utilisation pour améliorer le produit',
      '## FAQ\n\n**Puis-je rejoindre un chat après le début de l\'événement ?**\nOui, tant que l\'événement n\'est pas complet. Vous voyez l\'historique des 50 derniers messages.\n\n**Que se passe-t-il si quelqu\'un quitte l\'événement ?**\nIl perd l\'accès au chat immédiatement. Ses messages antérieurs restent visibles aux autres.\n\n**Puis-je bloquer quelqu\'un ?**\nOui, clic droit > Bloquer. Vous ne verrez plus ses messages, et il ne pourra plus voir les vôtres.\n\n**Le chat fonctionne-t-il hors ligne ?**\nVous pouvez lire les messages déjà reçus. Les nouveaux messages arrivent dès reconnexion.',
      '## Conclusion\n\nLe chat éphémère de Cojauny offre le meilleur des deux mondes : communication fluide pour coordonner votre trajet, et vie privée protégée après l\'événement. Plus besoin de polluer vos contacts ou de rester dans des groupes WhatsApp fantômes.\n\nCréez votre premier événement Cojauny et découvrez la puissance d\'un chat contextuel et sécurisé.'
    ],
    tags: ['chat', 'communication', 'vie privée', 'sécurité'],
    categories: ['product'],
    publishedAt: '2025-11-19T10:00:00.000Z',
    updatedAt: '2025-11-19T10:00:00.000Z',
    author: 'Équipe Cojauny',
    readingTimeMinutes: 9
  },
  {
    slug: 'kosten-automatisch-teilen',
    locale: 'de',
    title: 'Kosten automatisch teilen: Schluss mit komplizierten Abrechnungen',
    summary:
      'Erfahre, wie der integrierte Kostenrechner von Cojauny Fahrtkosten fair aufteilt und Zahlungen transparent macht.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Kostenaufteilung auf dem Smartphone',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Das Problem mit manueller Kostenaufteilung\n\nNach einer gemeinsamen Taxifahrt zum Flughafen beginnt oft das Chaos: Wer bezahlt den Fahrer? Wie teilen wir 67€ durch 4 Personen? Hat jemand Kleingeld? Cojaunys automatischer Kostenteiler eliminiert diese Reibung komplett.',
      '## So funktioniert der Kostenrechner\n\n**Schritt 1: Gesamtkosten eingeben**\nNach der Fahrt öffnet der Event-Organisator den Kostenrechner:\n- Gesamtbetrag: 67€\n- Anzahl Teilnehmer: 4 Personen\n- Trinkgeld-Option: +10% (automatisch vorgeschlagen)\n- Rundung: Auf- oder abrunden wählbar\n\n**Schritt 2: Automatische Berechnung**\nDie App rechnet:\n- 67€ ÷ 4 = 16,75€ pro Person\n- Mit 10% Trinkgeld: 18,43€ pro Person\n- Gerundet: 18,50€ pro Person\n- Gesamtsumme mit Trinkgeld: 74€\n\n**Schritt 3: Zahlungsnachweis**\nJeder Teilnehmer erhält:\n- Push-Benachrichtigung mit seinem Anteil\n- Zahlungslink (Bizum, PayPal, Banküberweisung)\n- Digitale Quittung für Spesenabrechnungen\n- Automatischer Eintrag im Einsparungsprotokoll',
      '## Zahlungsmethoden integriert\n\n**Spanien: Bizum**\n- Direkte Integration in die App\n- Zahlung in <30 Sekunden\n- Keine zusätzlichen Gebühren\n- Bestätigung an alle Teilnehmer\n\n**Europa: SEPA-Überweisung**\n- IBAN des Organisators hinterlegt\n- Verwendungszweck automatisch generiert\n- Tracking: Wer hat bereits bezahlt?\n\n**International: PayPal**\n- PayPal.me-Link teilbar\n- Multi-Währung unterstützt\n- 2,9% Gebühr (transparent angezeigt)\n\n**Bar am Treffpunkt**\n- Checkbox "Bar bezahlt"\n- Organisator bestätigt Erhalt\n- Kein digitaler Transfer nötig',
      '## Erweiterte Funktionen für komplexe Szenarien\n\n**Ungleiche Aufteilung**\nManchmal zahlen nicht alle gleich viel:\n- Person A (mit viel Gepäck): 40% der Kosten\n- Personen B, C, D: jeweils 20%\n- App berechnet automatisch: 26,80€ (A) und 13,40€ (B, C, D)\n\n**Mehrere Zwischenstopps**\nRoute: Flughafen → Hotel A → Hotel B → Hotel C\n- Gesamtkosten: 80€\n- Person 1 (gesamte Strecke): 30€\n- Person 2 (bis Hotel A): 15€\n- Person 3 (bis Hotel B): 20€\n- Person 4 (bis Hotel C): 15€\n- System berücksichtigt Teilstrecken automatisch',
      '## Spesenabrechnungen für Geschäftsreisen\n\n**Automatische Rechnungserstellung**\n- Name und IBAN des Taxi-Unternehmens\n- Detaillierte Route mit Zeitstempel\n- MwSt.-Aufschlüsselung (21% in Spanien, 19% in Deutschland)\n- PDF-Export für Buchhaltung\n\n**Firmen-Accounts**\n- Zentrale Abrechnung aller Mitarbeiterfahrten\n- CSV-Export für SAP, Lexware, DATEV\n- Kostenstellen-Zuordnung möglich\n- Monatliche Zusammenfassung per Email',
      '## Transparenz und Fairness\n\n**Öffentliches Kostenprotokoll**\nIm Event-Chat sehen alle:\n- Wer den Betrag eingegeben hat\n- Wie die Aufteilung berechnet wurde\n- Wer bereits bezahlt hat (grüner Haken)\n- Wer noch offen ist (gelber Punkt)\n\n**Erinnerungen**\n- Nach 24h: freundliche Erinnerung an Nicht-Zahler\n- Nach 48h: Eskalation an Organisator\n- Nach 7 Tagen: Auswirkung auf Reputation\n\n**Streitbeilegung**\n- Bei Uneinigkeit: Mediationschat öffnen\n- Support-Team schlichtet innerhalb 24h\n- Bei Betrug: Rückerstattung aus Garantiefonds',
      '## Statistiken und Einsparungen\n\n**Persönliches Dashboard**\nDein Profil zeigt:\n- Gesamtersparnis seit Registrierung\n- Durchschnittliche Kosten pro Fahrt\n- Anzahl geteilter Fahrten\n- CO₂-Einsparung in kg\n\n**Vergleich mit Einzelfahrt**\nNach jeder Fahrt:\n- "Du hast 48€ gespart (vs. Einzeltaxi)"\n- "Das entspricht 2 Mittagessen"\n- Motivierende Grafiken und Badges',
      '## Sicherheit und Datenschutz\n\n**Zahlungsdaten**\n- Keine Kreditkartennummern in Cojauny gespeichert\n- Alle Transaktionen über lizenzierte Payment-Provider\n- PCI-DSS Level 1 zertifiziert\n- 2-Faktor-Authentifizierung für Zahlungen >100€\n\n**Rechnungsdaten**\n- Verschlüsselte Speicherung (AES-256)\n- Automatische Löschung nach 7 Jahren (Steuerpflicht)\n- DSGVO-konform\n- Exportierbar auf Anfrage',
      '## Häufige Fragen\n\n**Was passiert, wenn jemand nicht zahlt?**\nNach 7 Tagen wird seine Reputation beeinträchtigt. Zukünftige Organisatoren sehen eine Warnung. Bei wiederholtem Nicht-Zahlen: Account-Sperrung.\n\n**Kann ich einen Rabatt-Code anwenden?**\nJa, wenn das Taxi-Unternehmen mit Cojauny kooperiert. Rabatt wird automatisch vor Aufteilung abgezogen.\n\n**Funktioniert es mit Flug-Pauschalen?**\nJa, für Firmenreisen. Gib den pauschalen Betrag ein, System teilt entsprechend auf.\n\n**Kann ich nachträglich Kosten hinzufügen?**\nJa, z.B. Parkgebühren, Maut. Klicke "Kosten bearbeiten" innerhalb 24h nach Event-Ende.',
      '## Fazit\n\nDer Kostenteiler von Cojauny verwandelt umständliche Abrechnungen in transparente, faire Transaktionen. Keine peinlichen "Wer schuldet wem was?"-Situationen mehr. Alles automatisch, nachvollziehbar, und sicher.\n\nLade Cojauny herunter und erlebe, wie einfach Kostenaufteilung sein kann.'
    ],
    tags: ['kosten', 'zahlung', 'abrechnung', 'transparenz'],
    categories: ['product'],
    publishedAt: '2025-11-19T11:00:00.000Z',
    updatedAt: '2025-11-19T11:00:00.000Z',
    author: 'Cojauny Team DACH',
    readingTimeMinutes: 10
  },
  {
    slug: 'integracion-trafico-google-maps',
    locale: 'es',
    title: 'Integración de tráfico con Google Maps: Llega siempre a tiempo',
    summary:
      'Descubre cómo Cojauny usa datos de tráfico en tiempo real para calcular la hora perfecta de salida y evitar perder tu vuelo.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Mapa con datos de tráfico en tiempo real',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# El tráfico es el enemigo invisible de los viajeros\n\nPlanificas salir 2 horas antes del vuelo, pero un accidente en la M-30 te atrapa. Resultado: estrés máximo y carrera frenética por el aeropuerto. La integración de tráfico de Cojauny con Google Maps te protege de estos escenarios.',
      '## Cómo funciona la predicción de tráfico\n\n**Datos en tiempo real**\nCojauny consulta cada 5 minutos:\n- Flujo vehicular actual en tu ruta\n- Incidentes reportados (accidentes, obras, manifestaciones)\n- Condiciones meteorológicas (lluvia ralentiza el tráfico 20%)\n- Eventos especiales (partidos de fútbol, conciertos)\n\n**Algoritmo predictivo**\nBasándose en:\n- Historial de tráfico en esa hora/día\n- Patrones estacionales (verano vs invierno)\n- Machine learning de rutas similares anteriores\n- API de Google Maps Traffic',
      '## Cálculo inteligente de hora de salida\n\n**Ejemplo práctico: Madrid → Aeropuerto Barajas**\n\n**Situación:**\n- Vuelo: 14:00 (check-in cierra 13:30)\n- Distancia: 18 km desde el centro\n- Día: Viernes\n- Hora punta: 12:00-13:30\n\n**Cálculo tradicional (sin tráfico):**\n- Tiempo sin tráfico: 25 minutos\n- Buffer estándar: +30 minutos = 55 min\n- Hora de salida: 12:35\n\n**Cálculo Cojauny (con tráfico):**\n- Tráfico previsto a las 12:35: Denso (+40% tiempo)\n- Tiempo ajustado: 35 minutos\n- Margen de seguridad dinámico: +20 min (en vez de +30)\n- **Hora óptima de salida: 12:15**\n\nResultado: Llegas a las 13:10, con 20 minutos de margen real.',
      '## Alertas proactivas de tráfico\n\n**Notificación 2 horas antes**\n"⚠️ Tráfico intenso detectado en tu ruta. Recomendamos salir 15 minutos antes (11:45 en vez de 12:00)"\n\n**Notificación 30 minutos antes**\n"✅ Tráfico fluido. Mantén la hora de salida programada (12:00)"\n\n**Notificación en ruta (si algo cambia)**\n"🚨 Accidente en A-2. Tiempo estimado +12 minutos. Ruta alternativa disponible: M-40 (+3 min pero más segura)"',
      '## Rutas alternativas inteligentes\n\nCojauny no solo calcula una ruta, sino que compara varias opciones:\n\n**Ruta A: Autopista M-40**\n- Distancia: 22 km\n- Tiempo sin tráfico: 20 min\n- Tiempo con tráfico actual: 35 min\n- Peajes: 4,50€\n- Fiabilidad: 85% (puede haber retenciones)\n\n**Ruta B: Carretera M-11**\n- Distancia: 18 km\n- Tiempo sin tráfico: 28 min\n- Tiempo con tráfico actual: 32 min\n- Peajes: 0€\n- Fiabilidad: 92% (más estable)\n\n**Recomendación:** Ruta B (ahorra tiempo y dinero, más predecible)',
      '## Casos de uso especiales\n\n**Hora punta extrema (8:00 AM salida)**\nEl algoritmo detecta que entre 7:30-9:00 el tráfico es caótico. Recomienda:\n- Salir a las 6:45 (antes de punta) o\n- Salir a las 9:15 (después de punta)\n- Evitar a toda costa ventana 7:30-9:00\n\n**Viernes por la tarde (operación salida)**\nEl sistema sabe que los viernes 18:00-21:00 son críticos. Si tu vuelo es a las 20:00:\n- Recomienda taxi compartido a las 16:30 (2h extra de margen)\n- Alerta sobre posible colapso en M-30 y M-40\n- Sugiere transporte público como backup\n\n**Eventos especiales (partido Real Madrid)**\nCuando hay partido en el Santiago Bernabéu:\n- Detecta automáticamente el evento\n- Ajusta rutas para evitar zona estadio\n- Añade 20-30 min extra al cálculo\n- Notifica a todos los participantes del evento',
      '## Integración con el grupo\n\nEn un evento de transporte compartido:\n\n**Punto de encuentro dinámico**\nSi el tráfico cambia, Cojauny propone:\n- Cambiar el punto de encuentro a uno más cercano al aeropuerto\n- Dividir el grupo en dos taxis para ahorrar tiempo\n- Adelantar o retrasar la hora de salida\n\n**Consenso del grupo**\n- Votación rápida en el chat: "¿Salimos 10 min antes?"\n- Mayoría decide (3/4 votos → cambio aplicado)\n- Actualización automática de notificaciones para todos',
      '## Precisión y machine learning\n\n**Tasa de precisión de Cojauny:**\n- 92% de los viajeros llegan con 10-15 min de margen\n- 5% llegan con <5 min de margen (tráfico imprevisto extremo)\n- 3% tienen que tomar ruta alternativa en camino\n- <1% pierden el vuelo por mala predicción\n\n**Mejora continua:**\nCada viaje alimenta el algoritmo:\n- Si predicción fue correcta → refuerza patrones\n- Si hubo desviación → ajusta pesos de variables\n- Usuarios pueden reportar "llegué con X minutos de margen"\n- Datos anónimos usados para mejorar futuros cálculos',
      '## Comparación con otras apps\n\n**Google Maps solo:**\n- Da tiempo actual, no predice cambios futuros\n- No considera margen de seguridad aeropuerto\n- Tienes que calcular hora de salida manualmente\n\n**Waze:**\n- Bueno para conducción en directo\n- No planifica con antelación (días antes)\n- No integra info de vuelos\n\n**Cojauny:**\n- Planificación con días de antelación\n- Contexto aeroportuario (terminal, check-in, etc.)\n- Coordinación con grupo\n- Alertas proactivas',
      '## Preguntas frecuentes\n\n**¿Funciona en todas las ciudades?**\nSí, en cualquier lugar con cobertura de Google Maps (prácticamente todo el mundo). Precisión mejor en ciudades grandes con más datos históricos.\n\n**¿Consume muchos datos móviles?**\nNo, solo 2-3 MB por viaje. La app descarga predicciones por adelantado y usa caché.\n\n**¿Puedo desactivar las alertas de tráfico?**\nSí, en Configuración > Notificaciones > Alertas de tráfico (desactivar). No recomendado.\n\n**¿Considera tráfico en el aeropuerto?**\nSí, incluye tiempo para encontrar parking, dejar pasajeros en terminal, etc. Variable según aeropuerto.',
      '## Conclusión\n\nLa integración de tráfico de Cojauny transforma la incertidumbre del "¿llegaré a tiempo?" en confianza basada en datos reales. No más salir con 3 horas de antelación "por si acaso". Optimiza tu tiempo y reduce el estrés.\n\nDescarga Cojauny y deja que el algoritmo calcule por ti. Tu única preocupación debería ser disfrutar del viaje.'
    ],
    tags: ['tráfico', 'Google Maps', 'predicción', 'puntualidad'],
    categories: ['product', 'operations'],
    publishedAt: '2025-11-19T12:00:00.000Z',
    updatedAt: '2025-11-19T12:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 11
  },
  {
    slug: 'reputation-system-trust',
    locale: 'en',
    title: 'Reputation system: Building trust in the Cojauny community',
    summary:
      'Learn how Cojauny\'s comprehensive reputation system ensures reliable ride partners and maintains a trusted travel community.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'User profile with star ratings',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Why reputation matters in ride sharing\n\nSharing an airport ride with strangers requires trust. Will they show up on time? Are they reliable? Cojauny\'s reputation system provides transparency, accountability, and peace of mind for every traveler.',
      '## How the reputation system works\n\n**Profile rating (1-5 stars)**\nYour overall reputation is based on:\n- Punctuality score (40% weight)\n- Responsiveness in chat (25% weight)\n- Payment reliability (20% weight)\n- Respectfulness rating (15% weight)\n\n**Verification badges**\n- ✓ Phone verified\n- ✓ Email verified\n- ✓ ID verified (optional, Premium)\n- ✓ LinkedIn connected\n- ✓ 10+ successful trips\n\n**Achievement levels**\n- Bronze: 1-5 trips\n- Silver: 6-15 trips\n- Gold: 16-50 trips\n- Platinum: 51+ trips',
      '## What affects your reputation\n\n**Positive actions (+points)**\n- Arrive on time: +10 points\n- Respond to messages quickly: +5 points\n- Pay immediately after trip: +8 points\n- Help organize event logistics: +15 points\n- Leave helpful reviews: +3 points\n- Complete profile with photo: +20 points (one-time)\n\n**Negative actions (-points)**\n- Late without notice: -25 points\n- Cancel last minute (<2 hours): -40 points\n- Don\'t pay after trip: -50 points\n- Inappropriate behavior reported: -100 points\n- No-show without cancellation: -75 points',
      '## Rating other travelers\n\nAfter each trip, rate your ride partners:\n\n**Quick rating (required)**\n- 1-5 stars: Overall experience\n- One-tap feedback: "Punctual", "Friendly", "Respectful"\n\n**Detailed review (optional)**\n- Written feedback (visible publicly)\n- Private feedback to Cojauny team\n- Specific categories: punctuality, communication, cleanliness\n\n**What makes a good review?**\nGreat: "María arrived 5 minutes early, was friendly during the ride, and paid immediately. Would share a ride again!"\nPoor: "Bad person" (too vague, not helpful)',
      '## Trust & Safety features\n\n**Pre-trip screening**\nBefore joining an event, see:\n- User\'s average rating\n- Number of completed trips\n- Recent reviews\n- Verification status\n- Response time average\n\n**Red flags automatically flagged**\n- Profile <2 stars: Warning shown to organizers\n- Multiple no-shows: "This user has missed 3 recent events"\n- Payment issues: "Delayed payment on 2 previous trips"\n- Negative behavior reports: "2 respectfulness complaints"\n\n**Auto-moderation**\n- Users below 2.5 stars: Can join but clearly marked\n- Users below 2 stars: Temporarily suspended until issue resolved\n- Users below 1.5 stars: Permanently banned',
      '## Privacy and fairness\n\n**What\'s public vs private**\nPublic:\n- Overall star rating\n- Number of trips\n- Verification badges\n- Written reviews (names hidden)\n\nPrivate:\n- Detailed point breakdown\n- Specific negative incidents\n- Financial information\n- Identity verification documents\n\n**Dispute resolution**\nIf you receive unfair rating:\n1. Appeal within 7 days\n2. Provide evidence (screenshots, messages)\n3. Cojauny team reviews within 48 hours\n4. Rating adjusted if appeal justified\n5. False rater penalized',
      '## Gamification and incentives\n\n**Reputation perks**\n- 4.5+ stars: Priority event placement\n- 4.8+ stars: "Super User" badge\n- 100+ trips: Featured in app\'s success stories\n- Platinum level: 10% discount on Premium subscription\n\n**Monthly leaderboard**\n- Top 10 users per city\n- Rewards: Gift cards, free Premium month\n- Recognition in community newsletter',
      '## Corporate accounts\n\nFor business travelers:\n\n**Company verification**\n- Employer can verify employee accounts\n- Corporate badge displayed on profile\n- Higher trust level for fellow employees\n\n**Team reputation**\n- Company-wide average rating visible\n- Useful for conference coordinators\n- Encourages professional behavior',
      '## Real-world impact\n\n**Case study: Sarah (Gold level, 4.9 stars)**\n"My high reputation helps me find rides faster. Organizers accept me immediately when they see my 35 completed trips and 4.9 rating. It\'s like having a travel passport."\n\n**Case study: Miguel (recovered from 3.2 to 4.5 stars)**\n"I was late twice due to genuine emergencies. My rating dropped. I explained in my profile, improved my habits, and after 10 punctual trips, I\'m back to good standing. The system gives you a chance to improve."',
      '## FAQ\n\n**Can I delete a bad review?**\nNo, but you can respond publicly to provide context. If the review violates policies, report it.\n\n**How long do ratings last?**\nPermanently, but more recent trips are weighted heavier (last 10 trips = 70% of score).\n\n**What if someone rates me 1 star unfairly?**\nOne outlier won\'t significantly affect your average. If it\'s truly unfair, appeal with evidence.\n\n**Can I see who rated me?**\nNo, ratings are anonymous to encourage honesty. Only Cojauny support can see raters.',
      '## Conclusion\n\nReputation isn\'t about perfection—it\'s about consistency and respect. Cojauny\'s system rewards reliable travelers while protecting the community from bad actors. Start building your reputation today, and enjoy the benefits of being a trusted member.\n\nDownload Cojauny, complete your first trip, and watch your reputation grow.'
    ],
    tags: ['reputation', 'trust', 'ratings', 'community'],
    categories: ['product'],
    publishedAt: '2025-11-19T13:00:00.000Z',
    updatedAt: '2025-11-19T13:00:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 10
  },
  {
    slug: 'support-multilingue',
    locale: 'fr',
    title: 'Support multilingue: Voyagez dans votre langue',
    summary:
      'Découvrez comment Cojauny facilite les trajets internationaux avec traduction automatique et support dans 40+ langues.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Interface multilingue de l\'application',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# L\'internationalisation au cœur de Cojauny\n\nVous arrivez à Paris depuis Tokyo. Votre compagnon de trajet parle uniquement français. Sans traduction, la coordination devient compliquée. Cojauny élimine cette barrière linguistique avec un support multilingue intelligent.',
      '## Langues supportées\n\n**Interface complète (40+ langues)**\nEspagnol, Anglais, Français, Allemand, Italien, Portugais, Néerlandais, Polonais, Russe, Chinois (simplifié et traditionnel), Japonais, Coréen, Arabe, Hindi, et plus.\n\n**Traduction automatique du chat (Premium)**\n- Tous les messages traduits en temps réel\n- Détection automatique de la langue source\n- Contexte aéroportuaire pris en compte\n- Termes techniques traduits correctement',
      '## Comment ça fonctionne\n\n**Configuration initiale**\n1. À l\'installation, l\'app détecte la langue de votre téléphone\n2. Propose la langue correspondante\n3. Vous pouvez changer à tout moment dans Paramètres\n\n**Dans les événements**\n- L\'organisateur crée l\'événement dans sa langue\n- Les participants voient le titre/description traduits\n- Le chat affiche les messages dans la langue de chaque utilisateur\n- Les notifications respectent votre langue préférée',
      '## Traduction intelligente du chat\n\n**Exemple concret**\n*Message original (anglais):* "I\'m at Terminal 2, Gate B. Where are you?"\n*Traduction française:* "Je suis au Terminal 2, Porte B. Où êtes-vous ?"\n*Traduction espagnole:* "Estoy en la Terminal 2, Puerta B. ¿Dónde estás?"\n\n**Avantages vs Google Translate classique**\n- Contexte aéroportuaire: "gate" → "porte" (pas "portail")\n- Terminologie transport: "ride" → "trajet partagé" (pas "balade")\n- Argot voyage: "bag drop" → "dépôt de bagages"\n- Abréviations: "ETA" → "heure d\'arrivée estimée"',
      '## Fonctionnalités multilingues avancées\n\n**Profils bilingues**\n- Indiquez toutes les langues que vous parlez\n- L\'app priorise les compagnons multilingues\n- Badge "Polyglotte" si 3+ langues\n\n**Recherche d\'événements**\n- Filtrer par langue de communication\n- Rejoindre des groupes anglophones en pays non-anglophone\n- Utile pour expatriés ou touristes\n\n**Support client**\n- Contactez le support dans votre langue\n- Équipe multilingue disponible 24/7\n- Documentation traduite dans toutes les langues',
      '## Cas d\'usage internationaux\n\n**Conférence internationale à Barcelone**\n- 50 participants de 15 pays différents\n- Chacun utilise Cojauny dans sa langue native\n- Le chat affiche tout traduit automatiquement\n- Coordination fluide malgré la diversité\n\n**Famille d\'expatriés à Dubaï**\n- Parents français, enfants anglophones\n- Partage trajet avec famille indienne (hindi/anglais)\n- Tout le monde utilise l\'app dans sa langue préférée\n- Communication sans friction',
      '## Qualité et précision des traductions\n\n**Moteur de traduction**\nCojauny utilise:\n- Google Cloud Translation API\n- Modèles optimisés pour le contexte voyage\n- Glossaire personnalisé de termes aéroportuaires\n- Apprentissage continu basé sur corrections utilisateurs\n\n**Taux de précision**\n- Phrases courtes (chat): 97% précision\n- Descriptions d\'événements: 92% précision\n- Termes techniques: 99% précision (grâce au glossaire)\n\n**Limitations connues**\n- Expressions idiomatiques parfois littérales\n- Humour difficile à transmettre\n- Argot local nécessite contexte',
      '## Paramètres de langue\n\n**Personnalisation complète**\n- Langue de l\'interface\n- Langue de communication préférée\n- Langues alternatives (si parlez plusieurs)\n- Activer/désactiver traduction automatique\n- Voir message original en un clic\n\n**Langue par défaut des nouveaux événements**\n- Selon votre profil\n- Modifiable à chaque création\n- Détection automatique si laissé vide',
      '## Contribution communautaire\n\n**Améliorer les traductions**\n- Signalez une mauvaise traduction\n- Proposez une meilleure alternative\n- Les contributeurs actifs reçoivent badge "Traducteur"\n- Top contributeurs: récompenses mensuelles\n\n**Demander une nouvelle langue**\n- Formulaire dans l\'app\n- Minimum 100 demandes pour ajouter langue\n- Priorité selon zones géographiques Cojauny',
      '## FAQ\n\n**La traduction automatique consomme-t-elle des données ?**\nTrès peu, ~50 KB par conversation moyenne. Messages mis en cache localement.\n\n**Puis-je désactiver la traduction pour voir l\'original ?**\nOui, bouton "Voir original" sous chaque message traduit.\n\n**Les erreurs de traduction affectent-elles la sécurité ?**\nNon, les infos critiques (heures, lieux) utilisent formats universels (14:30, GPS coords).\n\n**Combien de langues puis-je ajouter à mon profil ?**\nIllimité, mais seules les 3 mieux notées (par vous) s\'affichent publiquement.',
      '## Conclusion\n\nLe multilinguisme de Cojauny transforme des rencontres internationales compliquées en coordinations fluides. Plus besoin de chercher quelqu\'un qui parle votre langue. Voyagez librement, communiquez naturellement.\n\nTéléchargez Cojauny et découvrez un monde sans barrières linguistiques.'
    ],
    tags: ['multilingue', 'traduction', 'international', 'communication'],
    categories: ['product'],
    publishedAt: '2025-11-19T14:00:00.000Z',
    updatedAt: '2025-11-19T14:00:00.000Z',
    author: 'Équipe Cojauny',
    readingTimeMinutes: 9
  },
  {
    slug: 'wiederkehrende-events',
    locale: 'de',
    title: 'Wiederkehrende Events: Für Pendler und Vielreisende',
    summary:
      'Erfahre, wie du mit wiederkehrenden Events Zeit sparst und deine Stammgruppe für regelmäßige Flughafenfahrten aufbaust.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Kalender mit wiederkehrenden Reisen',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Das Problem mit einmaligen Events\n\nWenn du jeden Montag von Berlin nach München fliegst, ist es mühsam, jede Woche einen neuen Transfer zu organisieren. Wiederkehrende Events von Cojauny automatisieren diese Routine komplett.',
      '## Wie wiederkehrende Events funktionieren\n\n**Ersteinrichtung**\n1. Event wie gewohnt erstellen\n2. Option "Wiederholen" aktivieren\n3. Muster wählen:\n   - Täglich (selten für Flüge)\n   - Wöchentlich (jeden Montag)\n   - Zweiwöchentlich (jeden 2. Mittwoch)\n   - Monatlich (jeden 1. des Monats)\n   - Benutzerdefiniert (z.B. Mo/Mi/Fr)\n4. Enddatum festlegen (oder "unbegrenzt")\n\n**Automatische Erstellung**\n- System erstellt Events 2 Wochen im Voraus\n- Benachrichtigung an Stammteilnehmer\n- Platz für neue Teilnehmer reserviert\n- Alle Einstellungen übernommen (Treffpunkt, Uhrzeit, etc.)',
      '## Stammgruppe aufbauen\n\n**Favoriten-Funktion**\nNach 3 gemeinsamen Fahrten:\n- Schlag anderen Teilnehmern vor: "Zu Favoriten hinzufügen"\n- Favoriten erhalten Prioritätsbenachrichtigung bei neuen Events\n- Automatische Vorschläge: "3 deiner Favoriten fahren diese Route nächste Woche"\n\n**Gruppen-Chat fortlaufend**\n- Option: Chat über mehrere Events hinweg behalten\n- Nützlich für Koordination langfristiger Arrangements\n- Separate temporäre Chats für einzelne Fahrten',
      '## Flexibilität trotz Wiederholung\n\n**Einzelnes Event anpassen**\n- "Nur dieses Event bearbeiten" vs "Alle zukünftigen Events"\n- Beispiel: Montag ist Feiertag → nur dieses Event löschen\n- Rest der Serie unberührt\n\n**Teilnahme-Muster**\n- "An allen teilnehmen" (Standardoption)\n- "Nur ausgewählte Daten" (Kalender-Picker)\n- "Pausieren" (z.B. während Urlaub)\n\n**Automatische Anpassungen**\n- Flugzeiten ändern sich? System aktualisiert alle zukünftigen Events\n- Route ändert sich? Ein Update, alle Events angepasst\n- Preisänderung des Taxis? Einmal eingeben, überall wirksam',
      '## Für Geschäftsreisende\n\n**Firmen-Shuttle-Template**\nBeispiel: Startup mit wöchentlichem Berlin-München Office:\n- Jeden Dienstag 7:00 Abfahrt\n- Stammgruppe von 6-8 Mitarbeitern\n- Van statt Taxi (größere Kapazität)\n- Firmen-Kreditkarte hinterlegt (keine individuelle Abrechnung)\n\n**Spesen-Integration**\n- Automatischer CSV-Export am Monatsende\n- Alle wiederkehrenden Fahrten in einer Rechnung\n- Zuordnung zu Kostenstelle\n- Weniger Aufwand für Buchhaltung',
      '## Statistiken und Einsparungen\n\n**Dashboard für wiederkehrende Events**\nDu siehst:\n- Gesamtersparnis über alle Wiederholungen\n- Durchschnittliche Auslastung (z.B. 3,5 von 4 Plätzen)\n- CO₂-Einsparung kumulativ\n- Zuverlässigkeitsrate (% pünktliche Abfahrten)\n\n**Beispielrechnung**\n- 50 Fahrten pro Jahr (wöchentlich)\n- Kosten Einzeltaxi: 65€ x 50 = 3.250€\n- Kosten geteilt (4 Personen): 16,25€ x 50 = 812,50€\n- **Ersparnis: 2.437,50€ pro Jahr**',
      '## Teilnehmerverwaltung\n\n**Warteliste**\nWenn Event voll:\n- Automatische Warteliste aktiviert\n- Bei Absage rückt nächster nach\n- Push-Benachrichtigung: "Platz frei geworden!"\n\n**Priorisierung**\n- Stammteilnehmer haben Vorreservierung (24h Vorsprung)\n- Neue Mitglieder können ab dann beitreten\n- Vermeidet, dass treue Nutzer ausgeschlossen werden\n\n**Absagen-Regeln**\n- Bis 24h vorher: keine Konsequenzen\n- <24h: Warnung (beim 3. Mal: Ausschluss aus Serie)\n- No-Show: sofortiger Ausschluss aus allen zukünftigen Events',
      '## Koordination mit Fahrern\n\n**Fahrer-Favoriten**\n- Bewährte Taxiunternehmen speichern\n- Automatische Buchungsanfrage für jedes Event\n- Fahrer sieht Serie, kann Paketpreis anbieten\n- Beispiel: 50 Fahrten à 60€ statt 65€ = 250€ Ersparnis\n\n**Langzeit-Verträge**\n- Für Platinum-Nutzer: Direktverträge mit Fahrern\n- Fester Preis für 6-12 Monate\n- Priorität bei Auslastung\n- Dedicated Fahrer (immer derselbe)',
      '## Technische Details\n\n**Synchronisation mit Kalender**\n- Export in Apple/Google/Outlook Kalender\n- Updates synchronisieren automatisch\n- Erinnerungen 24h und 1h vorher\n\n**Konfliktmanagement**\n- Wenn Flugzeiten ändern: System vorschlägt neue Abfahrtszeit\n- Bei Kollision mit anderem Event: Warnung\n- Intelligente Vorschläge zur Auflösung',
      '## FAQ\n\n**Kann ich eine Serie pausieren?**\nJa, "Serie pausieren" für bestimmten Zeitraum (z.B. Urlaubswochen).\n\n**Was passiert bei Flugausfall?**\nEinzelnes Event wird automatisch abgesagt, Rest der Serie läuft weiter.\n\n**Kostet eine Serie mehr?**\nNein, identische Preise wie Einzelevents. Tatsächlich oft günstiger durch Fahrer-Rabatte.\n\n**Kann ich meine Stammgruppe zu anderen Events einladen?**\nJa, Funktion "Favoriten einladen" bei jedem Event.',
      '## Fazit\n\nWiederkehrende Events sind der Schlüssel zu stressfreiem Vielflieger-Leben. Einmal einrichten, dauerhaft profitieren. Spare Zeit, Geld und baue eine vertrauenswürdige Reisegemeinschaft auf.\n\nLade Cojauny herunter und erstelle dein erstes wiederkehrendes Event. Dein zukünftiges Ich wird es dir danken.'
    ],
    tags: ['wiederkehrend', 'pendler', 'automation', 'geschäftsreisen'],
    categories: ['product', 'operations'],
    publishedAt: '2025-11-19T15:00:00.000Z',
    updatedAt: '2025-11-19T15:00:00.000Z',
    author: 'Cojauny Team DACH',
    readingTimeMinutes: 10
  },
  {
    slug: 'huella-carbono-sostenibilidad',
    locale: 'es',
    title: 'Huella de carbono y sostenibilidad: Tu impacto positivo con Cojauny',
    summary:
      'Descubre cómo cada viaje compartido reduce emisiones de CO₂ y cómo Cojauny te ayuda a medir tu contribución al medio ambiente.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Gráfico de reducción de emisiones de CO₂',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# El transporte al aeropuerto tiene un coste medioambiental\n\nCada taxi vacío que circula hacia el aeropuerto emite aproximadamente 120g de CO₂ por kilómetro. Multiplica esto por millones de viajeros anuales y el impacto es enorme. Compartir trayectos no solo ahorra dinero: salva el planeta.',
      '## Cómo Cojauny calcula tu impacto\n\n**Metodología de cálculo**\n1. **Distancia recorrida**: GPS tracking del trayecto real\n2. **Tipo de vehículo**: Sedan (120g/km), SUV (180g/km), Van (150g/km)\n3. **Ocupación**: Emisiones ÷ número de pasajeros\n4. **Comparativa**: vs si cada pasajero hubiera ido solo\n\n**Ejemplo práctico**\n- Ruta: Madrid Centro → Barajas (22 km)\n- Vehículo: Sedan estándar (120g/km)\n- Pasajeros: 4 personas\n\n**Escenario 1: Sin compartir**\n4 taxis x 22km x 120g/km = **10.560g CO₂ (10,56 kg)**\n\n**Escenario 2: Con Cojauny**\n1 taxi x 22km x 120g/km ÷ 4 personas = **660g CO₂ por persona (0,66 kg)**\n\n**Ahorro total: 9,9 kg CO₂ (93,75% de reducción)**',
      '## Tu panel de impacto personal\n\nEn tu perfil Cojauny verás:\n\n**Estadísticas acumuladas**\n- CO₂ total ahorrado (en kg)\n- Equivalente en árboles plantados\n- Kilómetros compartidos\n- Número de taxis evitados\n\n**Comparativas visuales**\n- "Has ahorrado el CO₂ equivalente a 45 km en coche"\n- "Tu ahorro podría cargar un smartphone 1.200 veces"\n- "Equivale a 3 árboles absorbiendo CO₂ durante un año"\n\n**Logros y badges**\n- 🌱 Eco Warrior: 100kg CO₂ ahorrados\n- 🌍 Planet Protector: 500kg CO₂ ahorrados\n- 🌳 Climate Hero: 1.000kg CO₂ ahorrados',
      '## Comparativa con otras opciones de transporte\n\n**Por 22km Madrid-Barajas (1 persona):**\n\n1. **Taxi individual**: 2.640g CO₂\n2. **Uber/Cabify individual**: 2.500g CO₂ (coches más nuevos)\n3. **Coche propio (gasolina)**: 2.860g CO₂\n4. **Coche propio (diésel)**: 2.420g CO₂\n5. **Coche propio (eléctrico)**: 880g CO₂\n6. **Metro + Cercanías**: 340g CO₂\n7. **Taxi compartido Cojauny (4 pax)**: 660g CO₂\n8. **Autobús aeropuerto**: 290g CO₂\n\n**Conclusión**: Cojauny está entre las 3 opciones más sostenibles, combinando comodidad y ecología.',
      '## Certificados de compensación\n\n**Certificado descargable**\nAl final de cada mes/trimestre/año:\n- PDF oficial con tu ahorro de CO₂\n- Validado por algoritmo verificado independientemente\n- Útil para reportes corporativos de sostenibilidad\n- Compartible en redes sociales\n\n**Para empresas**\n- Dashboard corporativo agregado\n- Todos los empleados que usan Cojauny\n- Contribución total de la empresa\n- Inclusión en reportes ESG (Environmental, Social, Governance)',
      '## Iniciativas adicionales de Cojauny\n\n**Programa de reforestación**\n- Por cada 1.000kg CO₂ ahorrados colectivamente, Cojauny planta 1 árbol\n- Proyectos en España (Guadalajara), Alemania (Baviera), Francia (Landes)\n- Tracking en tiempo real: mapa de bosques Cojauny\n- Visita los bosques (eventos comunitarios trimestrales)\n\n**Alianza con coches eléctricos**\n- Descuentos exclusivos con servicios de VTC eléctricos\n- Badge "EV Rider" para usuarios que eligen eléctricos\n- Mayor ahorro de CO₂ calculado automáticamente\n\n**Offset voluntario**\n- Opción de compensar el CO₂ residual (los 0,66kg del ejemplo)\n- Donación a proyectos de energía renovable\n- 0,50€ compensa 10kg CO₂\n- 100% del dinero va a proyectos certificados',
      '## Educación y concienciación\n\n**Notificaciones educativas**\nDespués de cada viaje:\n- "Has ahorrado 9,9kg CO₂. Eso es como no conducir 45km en coche."\n- Consejos para reducir aún más tu huella\n- Comparativas con datos nacionales/globales\n\n**Blog de sostenibilidad**\n- Artículos sobre movilidad sostenible\n- Entrevistas con expertos en clima\n- Casos de éxito de comunidades Cojauny\n\n**Retos mensuales**\n- "Comparte 10 trayectos este mes y ahorra 50kg CO₂"\n- Premios: descuentos, plantas reales enviadas a casa, badges especiales',
      '## Impacto colectivo de la comunidad\n\n**Contador global en tiempo real**\nEn la app, sección "Impacto Comunidad":\n- CO₂ total ahorrado por todos los usuarios\n- Actualización en directo\n- Desglose por país/ciudad\n- Proyección anual basada en ritmo actual\n\n**Ciudades más sostenibles**\nRanking mensual:\n1. Madrid: 2.500kg CO₂ ahorrados\n2. Barcelona: 2.100kg\n3. Valencia: 800kg\n4. Sevilla: 650kg\n\n**Objetivo 2025**\n"Ahorrar 1 millón de kg CO₂ colectivamente para finales de 2025"\nProgreso visible en homepage: barra de progreso + % completado',
      '## Validación científica\n\n**Auditoría independiente**\n- Algoritmo de cálculo revisado por Universidad Politécnica de Madrid\n- Metodología alineada con estándares IPCC\n- Actualización anual de factores de emisión\n- Transparencia total: código abierto en GitHub\n\n**Certificación ISO**\n- En proceso: Certificación ISO 14064 (gestión emisiones GEI)\n- Esperada Q2 2026',
      '## FAQ\n\n**¿Por qué mis emisiones no son cero?**\nPorque sigues usando un vehículo de combustión, aunque compartido. Para cero emisiones, usa transporte público o coches eléctricos.\n\n**¿Cómo sé que los cálculos son precisos?**\nUsamos GPS real (no distancias estimadas) y factores de emisión oficiales de la Agencia Europea de Medio Ambiente.\n\n**¿Puedo ver el impacto de viajes pasados?**\nSí, historial completo en "Mi Impacto" con gráficos mensuales/anuales.\n\n**¿Las compensaciones van realmente a proyectos?**\nSí, 100%. Publicamos reportes trimestrales con detalles de proyectos financiados.',
      '## Conclusión\n\nCada trayecto compartido en Cojauny es una decisión a favor del planeta. No es solo conveniencia o ahorro económico: es responsabilidad medioambiental medible y verificable. Tu huella de carbono importa, y Cojauny te ayuda a reducirla.\n\nDescarga Cojauny, comparte tu próximo viaje al aeropuerto, y sé parte de la solución climática.'
    ],
    tags: ['sostenibilidad', 'CO2', 'medio ambiente', 'impacto'],
    categories: ['product'],
    publishedAt: '2025-11-19T16:00:00.000Z',
    updatedAt: '2025-11-19T16:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 11
  },
  {
    slug: 'safety-verification-features',
    locale: 'en',
    title: 'Safety & verification: Travel with confidence',
    summary:
      'Learn about Cojauny\'s comprehensive security measures, identity verification, and emergency features that keep travelers safe.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Security shield with verification checkmarks',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Safety first: The foundation of trust\n\nSharing rides with people you\'ve never met requires robust safety measures. Cojauny has built multiple layers of protection to ensure every trip is secure, from verification before the ride to emergency support during travel.',
      '## Identity verification system\n\n**Three levels of verification**\n\n**Level 1: Basic (Free)**\n- Email verification (mandatory)\n- Phone number verification (SMS code)\n- Profile photo upload (reviewed by AI + human moderators)\n- Visible badge: ✓ Verified\n\n**Level 2: Enhanced (Premium)**\n- Government ID upload (passport, driver\'s license, national ID)\n- AI-powered document authenticity check\n- Selfie matching ID photo (liveness detection)\n- Badge: ✓✓ ID Verified\n\n**Level 3: Background Check (Premium+)**\n- Criminal record check (where legally allowed)\n- Driving record verification (for drivers)\n- Employment verification (for corporate accounts)\n- Badge: ✓✓✓ Background Checked',
      '## Pre-trip safety features\n\n**Profile transparency**\nBefore joining an event, see:\n- Verification level of all participants\n- Average rating and number of trips\n- Recent reviews mentioning safety\n- Red flags (if any)\n- Emergency contact sharing opt-in status\n\n**Smart warnings**\nThe app alerts organizers:\n- "User X has verification issues: ID expired"\n- "User Y received a safety complaint 2 months ago"\n- "User Z is new with 0 trips. Consider asking questions first"\n\n**Event visibility settings**\n- Public: Anyone can find and join\n- Private: Only people with link can join\n- Invite-only: Organizer manually approves each request\n- Verified-only: Only ID-verified users allowed',
      '## During-trip safety\n\n**Real-time monitoring**\n- GPS tracking of active rides (opt-in)\n- Automatic alerts if route deviates significantly\n- Panic button in-app (more on this below)\n- Driver/vehicle information visible to all passengers\n\n**Emergency contacts**\n- Add up to 3 emergency contacts in your profile\n- They receive automatic "Safe arrival" notifications\n- Can track your live location during trip (with permission)\n- Instant alert if you trigger panic button\n\n**Panic button**\nRed button accessible anytime:\n- Instantly notifies Cojauny safety team\n- Sends location to emergency contacts\n- Option to call local emergency services (112/911)\n- Discrete: Doesn\'t alert other passengers initially',
      '## Post-trip accountability\n\n**Mandatory check-in**\nAfter scheduled arrival time:\n- App asks: "Did you arrive safely?"\n- One-tap confirmation\n- If no response after 30 minutes: Automated outreach\n- If no response after 1 hour: Emergency contact notified\n\n**Incident reporting**\n- Report any safety concern within 48 hours\n- Categories: Unsafe driving, inappropriate behavior, fraud, other\n- Priority review by safety team (<2 hours)\n- Action taken: Warning, suspension, or permanent ban\n- Reporter\'s identity protected',
      '## Vehicle and driver verification\n\n**For ride organizers who arrange taxis/VTCs:**\n\n**Driver verification**\n- Professional license check\n- Vehicle insurance validation\n- Company registration (for corporate drivers)\n- Photo of driver matches ID\n\n**Vehicle verification**\n- License plate photo\n- Vehicle make, model, color\n- Automatic cross-check with registration database\n- Alerts if mismatch detected\n\n**Real example:**\nOrganizer books Toyota Camry, plate ABC-123.\nApp shows photo of expected vehicle.\nIf a Honda Civic arrives, passengers get alert: "Vehicle mismatch! Verify before entering."',
      '## Data privacy and security\n\n**What we store vs what we share**\n\n**Stored securely (encrypted):**\n- Government ID images (deleted after 90 days if not re-verified)\n- Trip GPS history (deleted after 30 days)\n- Payment information (tokenized, never raw card numbers)\n- Messages (deleted when event expires)\n\n**Never shared with other users:**\n- Full name (only first name + initial)\n- Phone number (masked: +34 6XX XXX 789)\n- Email address\n- Home address\n- Government ID details\n\n**Shared within events only:**\n- First name\n- Profile photo\n- Verification level\n- Rating and reviews',
      '## Insurance and legal protection\n\n**Cojauny Travel Insurance (Premium)**\n- €50,000 coverage per incident\n- Medical expenses during shared rides\n- Personal property loss/damage\n- Legal assistance if incident occurs\n- No deductible for verified users\n\n**Liability protection**\n- Cojauny carries €5M general liability insurance\n- Covers platform-related incidents\n- Excludes driver negligence (covered by driver\'s insurance)\n- Detailed terms in Legal section',
      '## Safety tips for travelers\n\n**Before the trip:**\n1. Review all participants\' profiles thoroughly\n2. Use the in-app chat (don\'t move to WhatsApp)\n3. Share trip details with a trusted friend\n4. Choose public meetup points\n5. Trust your instincts—cancel if uncomfortable\n\n**During the trip:**\n1. Confirm vehicle details before entering\n2. Sit in the back seat if possible\n3. Keep your phone charged\n4. Don\'t share personal information\n5. Use Cojauny\'s tracking feature\n\n**After the trip:**\n1. Confirm safe arrival in the app\n2. Rate honestly, especially regarding safety\n3. Report any issues immediately\n4. Block users if needed (they won\'t see you in future)',
      '## Corporate and group safety\n\n**For HR departments organizing employee travel:**\n\n**Admin dashboard**\n- Real-time tracking of all employees\' trips\n- Automatic safety alerts\n- Centralized emergency contact management\n- Compliance reporting (safety incident logs)\n\n**Company policies enforcement**\n- Require ID verification for all participants\n- Blacklist specific users\n- Only allow verified taxi companies\n- Set budget limits per trip',
      '## FAQ\n\n**Is my ID safe with Cojauny?**\nYes. IDs are encrypted, stored on secure EU servers (GDPR compliant), and never shared. Auto-deleted after verification expires.\n\n**What happens if I press the panic button accidentally?**\nYou have 10 seconds to cancel the alert. If not cancelled, safety team contacts you to confirm.\n\n**Can other passengers see my emergency contacts?**\nNo, never. Only Cojauny safety team can access this in emergencies.\n\n**How does Cojauny verify drivers I didn\'t book?**\nWe can\'t verify external drivers. That\'s why we recommend using our partner taxi companies for full protection.\n\n**What if someone threatens me after the trip?**\nReport immediately. We ban threatening users permanently and can involve law enforcement if needed.',
      '## Conclusion\n\nSafety isn\'t a feature—it\'s the core of Cojauny. From verification before you ride to emergency support during travel and accountability afterward, every layer is designed to keep you secure. Travel confidently, knowing you\'re protected.\n\nDownload Cojauny, complete your verification, and experience the safest way to share airport rides.'
    ],
    tags: ['safety', 'security', 'verification', 'trust'],
    categories: ['product'],
    publishedAt: '2025-11-19T17:00:00.000Z',
    updatedAt: '2025-11-19T17:00:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 12
  }
];

export const getPostsByLocale = (locale: Locale) => blogPosts.filter((post) => post.locale === locale);

export const getPost = (locale: Locale, slug: string) =>
  blogPosts.find((post) => post.locale === locale && post.slug === slug);
