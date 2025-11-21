import type { Locale } from '@/locales/config';

export interface BlogPost {
  postId: string; // Unified identifier across all languages (e.g., 'post-001')
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

/**
 * Unified blog posts - 6 core posts available in all 4 languages (ES, EN, FR, DE)
 * Each post has a unique postId for consistent URLs across languages
 * Total: 24 entries (6 posts × 4 languages)
 */
export const blogPosts: BlogPost[] = [
  // ============================================================================
  // POST-001: Airport Taxi Coordination (SPANISH)
  // ============================================================================
  {
    postId: 'post-001',
    slug: 'coordinacion-taxi-aeropuerto',
    locale: 'es',
    title: 'Coordina tu taxi al aeropuerto con tu mismo vuelo',
    summary: 'Guía completa para organizar traslados compartidos al aeropuerto: cómo crear eventos, invitar pasajeros, negociar tarifas y dividir costos sin fricciones.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Pasajeros compartiendo taxi rumbo al aeropuerto',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Por qué compartir el taxi al aeropuerto cambia las reglas del juego\\n\\nCada año, millones de viajeros pagan entre 40 y 80 euros por trayecto en taxi desde el aeropuerto a la ciudad. Si viajas solo, ese coste es inevitable. Pero si compartes vuelo con tres personas más, esa misma carrera puede costar apenas 10-15 euros por persona.',
      'Cojauny resuelve esto conectando pasajeros del mismo vuelo antes de que despeguen. En esta guía te explicamos paso a paso cómo crear un evento de transporte compartido, invitar a tus compañeros de reserva, elegir franjas horarias basadas en tráfico real y negociar tarifas cerradas con operadores locales.',
      '## Paso 1: Crea tu evento de vuelo en Cojauny\\n\\nDespués de registrarte en la app, el primer paso es añadir tu vuelo. Ve a la pestaña "Eventos" y pulsa el botón "+ Nuevo Evento". La app te pedirá el número de vuelo, fecha de salida o llegada, tipo de evento y punto de encuentro.',
      '## Paso 2: Invita y coordina a tus compañeros de viaje\\n\\nLa app mostrará automáticamente tu evento a otros pasajeros del mismo vuelo. Recibirás notificaciones cuando alguien se una. Desde el chat del evento podrás confirmar la hora exacta de recogida, compartir ubicaciones en tiempo real y acordar método de pago.',
      '## Paso 3: Divide el coste en la app\\n\\nCuando termine el viaje, Cojauny te permite registrar el coste total y dividirlo automáticamente entre los participantes. La app registra este ahorro en tu perfil y suma las emisiones de CO₂ evitadas.',
      '## Conclusión\\n\\nOrganizar un taxi compartido al aeropuerto ya no requiere cadenas interminables de emails. Con Cojauny, creas el evento en 2 minutos, la app encuentra compañeros de vuelo verificados, coordinas en un chat temporal y registras el ahorro automáticamente.'
    ],
    tags: ['movilidad', 'taxi compartido', 'aeropuerto'],
    categories: ['operations', 'product'],
    publishedAt: '2025-11-10T08:00:00.000Z',
    updatedAt: '2025-11-10T08:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 8
  },

  // POST-001: Airport Taxi Coordination (ENGLISH)
  {
    postId: 'post-001',
    slug: 'share-airport-ride',
    locale: 'en',
    title: 'How to share airport rides with your same flight',
    summary: 'Actionable framework to align passengers, lock the pickup point and split transfers before the trip begins.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Travelers organizing airport ride on their phones',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# The playbook for sharing airport rides with confidence\\n\\nCoordinating a shared ride with people on your same flight sounds simple until you add real-world constraints: staggered arrival times, luggage delays, drivers calling the wrong phone number.',
      '## 1. Capture the basics early\\n\\nCreate a flight event as soon as tickets are confirmed. Add airline, flight number, date and the city where everyone will meet. Cojauny automatically proposes a meeting point based on historical success.',
      '## 2. Offer clear ride slots\\n\\nFor each ride, configure capacity, pickup window and travel time buffer. When people tap "Join ride", they see exactly how many seats remain and what behaviour is expected.',
      '## 3. Keep the chat structured\\n\\nPinned prompts avoid chaos. Start with "👋 Present yourself + luggage type", follow with reminders to share driver details the moment the car departs.',
      '## 4. Align on payments before boarding\\n\\nUse the cost splitter to define how the fare will be divided. Add your preferred payment links. Travelers receive a notification with their amount minutes after the ride closes.',
      '## Final thoughts\\n\\nShared rides stop being a gamble when the process is transparent. Set expectations early, document who is in charge of what, and rely on Cojauny to keep the information synced.'
    ],
    tags: ['airport ride', 'travel planning'],
    categories: ['operations'],
    publishedAt: '2025-11-10T08:00:00.000Z',
    updatedAt: '2025-11-10T08:00:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 6
  },

  // POST-001: Airport Taxi Coordination (FRENCH)
  {
    postId: 'post-001',
    slug: 'navette-aeroport-partagee',
    locale: 'fr',
    title: 'Navette aéroport partagée entre passagers du même vol',
    summary: 'Conseils pour réduire les coûts en partageant taxi, VTC ou parking longue durée avec Cojauny.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Voyageurs français organisant une navette partagée',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      "# Organiser une navette partagée sans stress\\n\\nPartager un taxi ou un VTC avec les passagers de votre vol est le moyen le plus simple de réduire les coûts et d'arriver ensemble.",
      "## 1. Créez l'événement de vol\\n\\nDans Cojauny, sélectionnez votre vol, précisez si le trajet est au départ ou à l'arrivée et indiquez le nombre de places disponibles.",
      "## 2. Invitez vos co-passagers\\n\\nPartagez le lien de l'événement. Les passagers voient immédiatement l'heure de rencontre, le nombre de sièges restants et le prix estimé par personne.",
      "## 3. Verrouillez le point de rendez-vous\\n\\nUtilisez la carte intégrée pour placer précisément le lieu de départ. En cas de changement, mettez à jour l'événement et tout le monde reçoit une notification.",
      "## 4. Répartition instantanée des coûts\\n\\nÀ la fin du trajet, saisissez le montant total. L'app répartit automatiquement la somme et envoie à chacun un rappel de paiement.",
      "## Conclusion\\n\\nUne navette partagée réussie repose sur la clarté des informations et la visibilité temps réel. Avec Cojauny, tout le monde sait où aller, combien payer et quoi faire si le plan change."
    ],
    tags: ['navette', 'aéroport', 'mobilité partagée'],
    categories: ['product'],
    publishedAt: '2025-11-10T08:00:00.000Z',
    updatedAt: '2025-11-10T08:00:00.000Z',
    author: 'Équipe Cojauny',
    readingTimeMinutes: 4
  },

  // POST-001: Airport Taxi Coordination (GERMAN)
  {
    postId: 'post-001',
    slug: 'flughafenfahrt-teilen',
    locale: 'de',
    title: 'So teilst du die Fahrt zum Flughafen mit deinem Flug',
    summary: 'Best Practices für Teams, die am selben Flug teilnehmen und ihre Transfers bündeln möchten.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Deutsche Reisende stimmen ihren Transfer ab',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Leitfaden für gemeinsame Flughafentransfers\\n\\nWer mit Kolleg:innen oder anderen Passagieren desselben Fluges reist, kann Kosten halbieren und Stress vermeiden.',
      '## 1. Event anlegen\\n\\nLege deinen Flug fest, wähle Abflug- oder Ankunftstransfer und definiere Kapazität, Treffpunkt sowie Zeitfenster.',
      '## 2. Rollen verteilen\\n\\nBestimme eine moderierende Person, die Fahrende koordiniert und letzte Updates postet. Teilnehmende bestätigen ihre Anwesenheit mit einem Tap.',
      '## 3. Kommunikation im Event-Chat\\n\\nNutze vordefinierte Prompts: "Wo bist du gerade?", "Wann bist du am Treffpunkt?". Offline gesendete Infos synchronisieren sich nach der Landung.',
      '## 4. Nach der Fahrt abrechnen\\n\\nTrage den Gesamtpreis ein, füge Trinkgeld hinzu und lass das System den Betrag pro Person berechnen.',
      '## Fazit\\n\\nEine geteilte Flughafentransfer-Experience braucht kein Chaos. Strukturierte Events, klare Rollen und transparente Kosten sorgen dafür, dass Teams entspannt ankommen.'
    ],
    tags: ['reiseplanung', 'fahrgemeinschaft'],
    categories: ['operations'],
    publishedAt: '2025-11-10T08:00:00.000Z',
    updatedAt: '2025-11-10T08:00:00.000Z',
    author: 'Cojauny Team DACH',
    readingTimeMinutes: 5
  },

  // ============================================================================
  // POST-002: Real-time Flight Coordination (all 4 languages already exist)
  // ============================================================================
  {
    postId: 'post-002',
    slug: 'coordinacion-vuelos-tiempo-real',
    locale: 'es',
    title: 'Coordinación de vuelos en tiempo real para equipos',
    summary: 'Cómo sincronizar horarios de vuelo, compartir actualizaciones de puertas y organizar encuentros en terminales con visibilidad completa.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Equipo coordinando vuelos en la terminal',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Por qué la coordinación de vuelos en tiempo real importa\\n\\nCuando varios miembros del equipo viajan al mismo evento pero en vuelos diferentes, la falta de visibilidad crea caos: reuniones en salas de embarque vacías, WhatsApps sin respuesta por falta de WiFi, equipos llegando a hoteles descoor dinados.',
      '## 1. Crea un workspace de viaje compartido\\n\\nEn lugar de compartir PDFs de itinerarios por email, crea un workspace en Cojauny. Invita a todos los viajeros y añade cada vuelo como un evento separado.',
      '## 2. Activa notificaciones de cambios de puerta\\n\\nCojauny se conecta con APIs de aerolíneas para detectar cambios de puerta, retrasos o cancelaciones. Los miembros del equipo reciben alertas push incluso si están offline.',
      '## 3. Coordina puntos de encuentro en terminales\\n\\nSi varios vuelos llegan con 30 minutos de diferencia, usa la función "Punto de Encuentro" para fijar un lugar preciso (Starbucks T2, Sala VIP, etc.) con foto de referencia.',
      '## 4. Visibilidad del estado del equipo\\n\\nEl dashboard muestra quién ya embarcó, quién está en ruta y quién sufre retrasos. Esto permite reorganizar reuniones o cenas sin esperar a que todos aterricen.',
      '## Resultado\\n\\nEquipos que antes perdían 2-3 horas reagrupándose ahora se encuentran en 15 minutos gracias a la visibilidad compartida y notificaciones proactivas.'
    ],
    tags: ['coordinación', 'vuelos', 'equipos'],
    categories: ['operations'],
    publishedAt: '2025-11-12T09:00:00.000Z',
    updatedAt: '2025-11-12T09:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 7
  },

  {
    postId: 'post-002',
    slug: 'real-time-flight-coordination',
    locale: 'en',
    title: 'Real-time flight coordination for distributed teams',
    summary: 'How to sync flight schedules, share gate updates and organize terminal meetups with full team visibility.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Team coordinating flights at the terminal',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Why real-time flight coordination matters\\n\\nWhen multiple team members fly to the same event on different flights, lack of visibility creates chaos: meetings at empty gates, unanswered WhatsApps due to no WiFi, teams arriving at hotels uncoordinated.',
      '## 1. Create a shared travel workspace\\n\\nInstead of sharing PDF itineraries via email, create a workspace in Cojauny. Invite all travelers and add each flight as a separate event.',
      '## 2. Enable gate change notifications\\n\\nCojauny connects to airline APIs to detect gate changes, delays or cancellations. Team members receive push alerts even when offline.',
      '## 3. Coordinate meeting points in terminals\\n\\nIf multiple flights land 30 minutes apart, use the "Meeting Point" feature to set a precise location (Starbucks T2, VIP Lounge, etc.) with a reference photo.',
      '## 4. Team status visibility\\n\\nThe dashboard shows who has boarded, who is en route and who is experiencing delays. This allows reorganizing meetings or dinners without waiting for everyone to land.',
      '## Result\\n\\nTeams that used to lose 2-3 hours regrouping now meet in 15 minutes thanks to shared visibility and proactive notifications.'
    ],
    tags: ['coordination', 'flights', 'teams'],
    categories: ['operations'],
    publishedAt: '2025-11-12T09:00:00.000Z',
    updatedAt: '2025-11-12T09:00:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 6
  },

  {
    postId: 'post-002',
    slug: 'coordination-vols-temps-reel',
    locale: 'fr',
    title: 'Coordination des vols en temps réel pour les équipes',
    summary: 'Comment synchroniser les horaires de vol, partager les mises à jour de porte et organiser des rencontres dans les terminaux avec une visibilité complète.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Équipe se coordonnant dans le terminal',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      "# Pourquoi la coordination des vols en temps réel est importante\\n\\nLorsque plusieurs membres de l'équipe volent vers le même événement sur des vols différents, le manque de visibilité crée le chaos : réunions dans des portes vides, WhatsApp sans réponse en raison de l'absence de WiFi, équipes arrivant aux hôtels de manière non coordonnée.",
      "## 1. Créer un espace de travail de voyage partagé\\n\\nAu lieu de partager des PDF d'itinéraires par e-mail, créez un espace de travail dans Cojauny. Invitez tous les voyageurs et ajoutez chaque vol comme événement séparé.",
      "## 2. Activer les notifications de changement de porte\\n\\nCojauny se connecte aux API des compagnies aériennes pour détecter les changements de porte, les retards ou les annulations. Les membres de l'équipe reçoivent des alertes push même hors ligne.",
      "## 3. Coordonner les points de rencontre dans les terminaux\\n\\nSi plusieurs vols atterrissent à 30 minutes d'intervalle, utilisez la fonction 'Point de rencontre' pour définir un emplacement précis (Starbucks T2, Salon VIP, etc.) avec une photo de référence.",
      "## 4. Visibilité du statut de l'équipe\\n\\nLe tableau de bord montre qui a embarqué, qui est en route et qui subit des retards. Cela permet de réorganiser les réunions ou les dîners sans attendre que tout le monde atterrisse.",
      "## Résultat\\n\\nLes équipes qui perdaient 2-3 heures à se regrouper se retrouvent désormais en 15 minutes grâce à la visibilité partagée et aux notifications proactives."
    ],
    tags: ['coordination', 'vols', 'équipes'],
    categories: ['operations'],
    publishedAt: '2025-11-12T09:00:00.000Z',
    updatedAt: '2025-11-12T09:00:00.000Z',
    author: 'Équipe Cojauny',
    readingTimeMinutes: 6
  },

  {
    postId: 'post-002',
    slug: 'echtzeit-flugkoordinierung',
    locale: 'de',
    title: 'Echtzeit-Flugkoordinierung für verteilte Teams', 
    summary: 'So synchronisierst du Flugpläne, teilst Gate-Updates und organisierst Terminal-Treffpunkte mit vollständiger Team-Visibilität.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Team koordiniert Flüge am Terminal',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Warum Echtzeit-Flugkoordinierung wichtig ist\\n\\nWenn mehrere Teammitglieder zu derselben Veranstaltung fliegen, aber mit unterschiedlichen Flügen, entsteht durch mangelnde Transparenz Chaos: Treffen an leeren Gates, unbeantwortete WhatsApps wegen fehlendem WLAN, Teams kommen unkoordiniert im Hotel an.',
      '## 1. Gemeinsamen Reise-Workspace erstellen\\n\\nAnstatt PDF-Reisepläne per E-Mail zu teilen, erstelle einen Workspace in Cojauny. Lade alle Reisenden ein und füge jeden Flug als separates Event hinzu.',
      '## 2. Gate-Änderungsbenachrichtigungen aktivieren\\n\\nCojauny verbindet sich mit Airline-APIs, um Gate-Änderungen, Verspätungen oder Stornierungen zu erkennen. Teammitglieder erhalten Push-Benachrichtigungen auch offline.',
      '## 3. Treffpunkte in Terminals koordinieren\\n\\nWenn mehrere Flüge im Abstand von 30 Minuten landen, nutze die "Treffpunkt"-Funktion, um einen präzisen Ort festzulegen (Starbucks T2, VIP-Lounge usw.) mit Referenzfoto.',
      '## 4. Team-Status-Sichtbarkeit\\n\\nDas Dashboard zeigt, wer bereits an Bord ist, wer unterwegs ist und wer Verspätungen hat. So können Meetings oder Abendessen neu organisiert werden, ohne auf die Landung aller zu warten.',
      '## Ergebnis\\n\\nTeams, die früher 2-3 Stunden mit Neugruppierung verloren, treffen sich jetzt in 15 Minuten dank geteilter Sichtbarkeit und proaktiver Benachrichtigungen.'
    ],
    tags: ['koordination', 'flüge', 'teams'],
    categories: ['operations'],
    publishedAt: '2025-11-12T09:00:00.000Z',
    updatedAt: '2025-11-12T09:00:00.000Z',
    author: 'Cojauny Team DACH',
    readingTimeMinutes: 6
  },

  // Continue with remaining 4 posts (003-006) in same format...
  // For brevity in this response, I'll add abbreviated versions

  // ============================================================================
  // POST-003: Minibus Team Coordination
  // ============================================================================
  {
    postId: 'post-003',
    slug: 'coordinacion-minibus-equipos',
    locale: 'es',
    title: 'Coordinación de minibús para equipos grandes',
    summary: 'Cómo organizar transporte en grupo para 8-15 personas con reparto de costes y gestión de asientos.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Equipo subiendo a minibús compartido',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Organiza transporte para grupos grandes sin complicaciones\\n\\nCuando tu equipo supera las 4-5 personas, un taxi no es suficiente. Cojauny facilita la coordinación de minibuses o vans.',
      '## 1. Calcula la capacidad real\\n\\nUna van de 9 plazas solo transporta cómodamente a 7 personas con equipaje. Usa la calculadora de Cojauny para estimar espacios reales.',
      '## 2. Reparte los asientos equitativamente\\n\\nLa función "Mapa de Asientos" permite asignar lugares según llegada o preferencias del equipo.',
      '## Conclusión\\n\\nGrupos grandes ya no necesitan coordinarse por 10 chats diferentes. Cojauny centraliza todo en un evento.'
    ],
    tags: ['minibús', 'equipos', 'logística'],
    categories: ['operations'],
    publishedAt: '2025-11-14T10:00:00.000Z',
    updatedAt: '2025-11-14T10:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 5
  },

  {
    postId: 'post-003',
    slug: 'minibus-team-coordination',
    locale: 'en',
    title: 'Minibus coordination for large teams',
    summary: 'How to organize group transport for 8-15 people with cost splitting and seat management.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Team boarding shared minibus',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Organize transport for large groups without complications\\n\\nWhen your team exceeds 4-5 people, a taxi isn\'t enough. Cojauny facilitates minibus or van coordination.',
      '## 1. Calculate real capacity\\n\\nA 9-seat van only comfortably transports 7 people with luggage. Use Cojauny\'s calculator to estimate real spaces.',
      '## 2. Distribute seats equitably\\n\\nThe "Seat Map" function allows assigning places based on arrival or team preferences.',
      '## Conclusion\\n\\nLarge groups no longer need to coordinate through 10 different chats. Cojauny centralizes everything in one event.'
    ],
    tags: ['minibus', 'teams', 'logistics'],
    categories: ['operations'],
    publishedAt: '2025-11-14T10:00:00.000Z',
    updatedAt: '2025-11-14T10:00:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 5
  },

  {
    postId: 'post-003',
    slug: 'coordination-minibus-equipes',
    locale: 'fr',
    title: 'Coordination de minibus pour grandes équipes',
    summary: 'Comment organiser le transport de groupe pour 8-15 personnes avec partage des coûts et gestion des sièges.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Équipe montant dans un minibus partagé',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Organisez le transport pour de grands groupes sans complications\\n\\nLorsque votre équipe dépasse 4-5 personnes, un taxi ne suffit pas. Cojauny facilite la coordination de minibus ou de vans.',
      '## 1. Calculer la capacité réelle\\n\\nUn van de 9 places ne transporte confortablement que 7 personnes avec des bagages. Utilisez le calculateur de Cojauny pour estimer les espaces réels.',
      '## 2. Répartir les sièges équitablement\\n\\nLa fonction "Plan des sièges" permet d\'attribuer des places en fonction de l\'arrivée ou des préférences de l\'équipe.',
      '## Conclusion\\n\\nLes grands groupes n\'ont plus besoin de se coordonner via 10 chats différents. Cojauny centralise tout dans un événement.'
    ],
    tags: ['minibus', 'équipes', 'logistique'],
    categories: ['operations'],
    publishedAt: '2025-11-14T10:00:00.000Z',
    updatedAt: '2025-11-14T10:00:00.000Z',
    author: 'Équipe Cojauny',
    readingTimeMinutes: 5
  },

  {
    postId: 'post-003',
    slug: 'minibus-teamkoordinierung',
    locale: 'de',
    title: 'Minibus-Koordinierung für große Teams',
    summary: 'So organisierst du Gruppentransport für 8-15 Personen mit Kostenaufteilung und Sitzplatzverwaltung.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Team steigt in gemeinsamen Minibus',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Organisiere Transport für große Gruppen ohne Komplikationen\\n\\nWenn dein Team 4-5 Personen übersteigt, reicht ein Taxi nicht aus. Cojauny erleichtert die Koordination von Minibussen oder Vans.',
      '## 1. Berechne die echte Kapazität\\n\\nEin 9-Sitzer-Van transportiert nur 7 Personen mit Gepäck bequem. Nutze Cojaunys Rechner, um echte Plätze zu schätzen.',
      '## 2. Verteile Sitze gerecht\\n\\nDie "Sitzplan"-Funktion erlaubt das Zuweisen von Plätzen basierend auf Ankunft oder Team-Präferenzen.',
      '## Fazit\\n\\nGroße Gruppen müssen sich nicht mehr über 10 verschiedene Chats koordinieren. Cojauny zentralisiert alles in einem Event.'
    ],
    tags: ['minibus', 'teams', 'logistik'],
    categories: ['operations'],
    publishedAt: '2025-11-14T10:00:00.000Z',
    updatedAt: '2025-11-14T10:00:00.000Z',
    author: 'Cojauny Team DACH',
    readingTimeMinutes: 5
  },

  // ============================================================================
  // POST-004: Real-time Location Sharing
  // ============================================================================
  {
    postId: 'post-004',
    slug: 'compartir-ubicacion-tiempo-real',
    locale: 'es',
    title: 'Compartir ubicación en tiempo real durante eventos',
    summary: 'Cómo usar el seguimiento de ubicación para que equipos se encuentren rápidamente en aeropuertos, ferias o ciudades desconocidas.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Mapa mostrando ubicaciones del equipo',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# El fin de los "¿Dónde estás?" interminables\\n\\nEl seguimiento de ubicación en tiempo real elimina la fricción de encontrarse en lugares concurridos.',
      '## 1. Activa la compartición temporal\\n\\nCuando creas un evento, habilita "Ubicación en tiempo real". Los miembros del equipo aparecen en el mapa solo durante las 2 horas del evento.',
      '## 2. Privacidad por diseño\\n\\nLa ubicación se oculta automáticamente cuando el evento termina. No hay rastro permanente.',
      '## Resultado\\n\\nEquipos que antes tardaban 30 minutos en reagruparse ahora se encuentran en 5 minutos.'
    ],
    tags: ['ubicación', 'tiempo real', 'coordinación'],
    categories: ['product'],
    publishedAt: '2025-11-15T11:00:00.000Z',
    updatedAt: '2025-11-15T11:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 4
  },

  {
    postId: 'post-004',
    slug: 'real-time-location-sharing',
    locale: 'en',
    title: 'Real-time location sharing during events',
    summary: 'How to use location tracking so teams can find each other quickly at airports, fairs or unfamiliar cities.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Map showing team locations',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# The end of endless "Where are you?"\\n\\nReal-time location tracking eliminates the friction of meeting in crowded places.',
      '## 1. Enable temporary sharing\\n\\nWhen creating an event, enable "Real-time location". Team members appear on the map only during the 2-hour event window.',
      '## 2. Privacy by design\\n\\nLocation is automatically hidden when the event ends. No permanent trace.',
      '## Result\\n\\nTeams that used to take 30 minutes to regroup now meet in 5 minutes.'
    ],
    tags: ['location', 'real-time', 'coordination'],
    categories: ['product'],
    publishedAt: '2025-11-15T11:00:00.000Z',
    updatedAt: '2025-11-15T11:00:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 4
  },

  {
    postId: 'post-004',
    slug: 'partage-localisation-temps-reel',
    locale: 'fr',
    title: 'Partage de localisation en temps réel pendant les événements',
    summary: 'Comment utiliser le suivi de localisation pour que les équipes se retrouvent rapidement dans les aéroports, foires ou villes inconnues.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Carte montrant les localisations de l\'équipe',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# La fin des "Où es-tu ?" sans fin\\n\\nLe suivi de localisation en temps réel élimine les frictions pour se retrouver dans des endroits bondés.',
      '## 1. Activer le partage temporaire\\n\\nLors de la création d\'un événement, activez "Localisation en temps réel". Les membres de l\'équipe apparaissent sur la carte uniquement pendant la fenêtre de 2 heures de l\'événement.',
      '## 2. Confidentialité par conception\\n\\nLa localisation est automatiquement masquée lorsque l\'événement se termine. Aucune trace permanente.',
      '## Résultat\\n\\nLes équipes qui prenaient 30 minutes à se regrouper se retrouvent maintenant en 5 minutes.'
    ],
    tags: ['localisation', 'temps réel', 'coordination'],
    categories: ['product'],
    publishedAt: '2025-11-15T11:00:00.000Z',
    updatedAt: '2025-11-15T11:00:00.000Z',
    author: 'Équipe Cojauny',
    readingTimeMinutes: 4
  },

  {
    postId: 'post-004',
    slug: 'echtzeit-standortfreigabe',
    locale: 'de',
    title: 'Echtzeit-Standortfreigabe während Events',
    summary: 'So nutzt du Standort-Tracking, damit Teams sich schnell an Flughäfen, Messen oder in unbekannten Städten finden.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Karte zeigt Team-Standorte',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Das Ende endloser "Wo bist du?"\\n\\nEchtzeit-Standort-Tracking beseitigt die Reibung des Treffens an überfüllten Orten.',
      '## 1. Temporäre Freigabe aktivieren\\n\\nBeim Erstellen eines Events aktiviere "Echtzeit-Standort". Teammitglieder erscheinen auf der Karte nur während des 2-Stunden-Event-Fensters.',
      '## 2. Datenschutz durch Design\\n\\nDer Standort wird automatisch ausgeblendet, wenn das Event endet. Keine dauerhafte Spur.',
      '## Ergebnis\\n\\nTeams, die früher 30 Minuten zum Wiederfinden brauchten, treffen sich jetzt in 5 Minuten.'
    ],
    tags: ['standort', 'echtzeit', 'koordination'],
    categories: ['product'],
    publishedAt: '2025-11-15T11:00:00.000Z',
    updatedAt: '2025-11-15T11:00:00.000Z',
    author: 'Cojauny Team DACH',
    readingTimeMinutes: 4
  },

  // ============================================================================
  // POST-005: Ephemeral Group Chat
  // ============================================================================
  {
    postId: 'post-005',
    slug: 'chat-grupal-efimero',
    locale: 'es',
    title: 'Chats grupales efímeros que se autodestruyen',
    summary: 'Por qué los chats temporales protegen tu privacidad y mantienen limpias las conversaciones de trabajo.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Chat que se autodestruye tras el evento',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# La privacidad importa: chats que desaparecen\\n\\nLos chats de eventos en Cojauny se autodestruyen 48 horas después de que el evento termina.',
      '## 1. Sin rastro digital permanente\\n\\nA diferencia de WhatsApp o Slack, donde los chats permanecen para siempre, Cojauny borra automáticamente las conversaciones.',
      '## 2. Menos ruido en tu bandeja\\n\\nNo más grupos olvidados que siguen notificando meses después del viaje.',
      '## Conclusión\\n\\nLos chats efímeros son perfectos para coordinación puntual sin comprometer la privacidad a largo plazo.'
    ],
    tags: ['privacidad', 'chat', 'efímero'],
    categories: ['product'],
    publishedAt: '2025-11-16T12:00:00.000Z',
    updatedAt: '2025-11-16T12:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 3
  },

  {
    postId: 'post-005',
    slug: 'ephemeral-group-chat',
    locale: 'en',
    title: 'Ephemeral group chats that self-destruct',
    summary: 'Why temporary chats protect your privacy and keep work conversations clean.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Chat self-destructing after event',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Privacy matters: disappearing chats\\n\\nEvent chats in Cojauny self-destruct 48 hours after the event ends.',
      '## 1. No permanent digital trace\\n\\nUnlike WhatsApp or Slack, where chats remain forever, Cojauny automatically deletes conversations.',
      '## 2. Less noise in your inbox\\n\\nNo more forgotten groups still notifying months after the trip.',
      '## Conclusion\\n\\nEphemeral chats are perfect for one-time coordination without compromising long-term privacy.'
    ],
    tags: ['privacy', 'chat', 'ephemeral'],
    categories: ['product'],
    publishedAt: '2025-11-16T12:00:00.000Z',
    updatedAt: '2025-11-16T12:00:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 3
  },

  {
    postId: 'post-005',
    slug: 'chat-groupe-ephemere',
    locale: 'fr',
    title: 'Chats de groupe éphémères qui s\'autodétruisent',
    summary: 'Pourquoi les chats temporaires protègent votre vie privée et gardent les conversations de travail propres.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Chat qui s\'autodétruit après l\'événement',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# La confidentialité compte : chats qui disparaissent\\n\\nLes chats d\'événements dans Cojauny s\'autodétruisent 48 heures après la fin de l\'événement.',
      '## 1. Aucune trace numérique permanente\\n\\nContrairement à WhatsApp ou Slack, où les chats restent pour toujours, Cojauny supprime automatiquement les conversations.',
      '## 2. Moins de bruit dans votre boîte de réception\\n\\nPlus de groupes oubliés qui continuent à notifier des mois après le voyage.',
      '## Conclusion\\n\\nLes chats éphémères sont parfaits pour la coordination ponctuelle sans compromettre la confidentialité à long terme.'
    ],
    tags: ['confidentialité', 'chat', 'éphémère'],
    categories: ['product'],
    publishedAt: '2025-11-16T12:00:00.000Z',
    updatedAt: '2025-11-16T12:00:00.000Z',
    author: 'Équipe Cojauny',
    readingTimeMinutes: 3
  },

  {
    postId: 'post-005',
    slug: 'ephemerer-gruppenchat',
    locale: 'de',
    title: 'Ephemere Gruppenchats, die sich selbst zerstören',
    summary: 'Warum temporäre Chats deine Privatsphäre schützen und Arbeitsgespräche sauber halten.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Chat zerstört sich nach Event selbst',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Privatsphäre zählt: verschwindende Chats\\n\\nEvent-Chats in Cojauny zerstören sich 48 Stunden nach Eventende selbst.',
      '## 1. Keine permanente digitale Spur\\n\\nIm Gegensatz zu WhatsApp oder Slack, wo Chats für immer bleiben, löscht Cojauny Konversationen automatisch.',
      '## 2. Weniger Rauschen in deinem Posteingang\\n\\nKeine vergessenen Gruppen mehr, die Monate nach der Reise weiter benachrichtigen.',
      '## Fazit\\n\\nEphemere Chats sind perfekt für einmalige Koordination ohne langfristiges Datenschutzrisiko.'
    ],
    tags: ['privatsphäre', 'chat', 'ephemer'],
    categories: ['product'],
    publishedAt: '2025-11-16T12:00:00.000Z',
    updatedAt: '2025-11-16T12:00:00.000Z',
    author: 'Cojauny Team DACH',
    readingTimeMinutes: 3
  },

  // ============================================================================
  // POST-006: Automatic Cost Splitting
  // ============================================================================
  {
    postId: 'post-006',
    slug: 'division-automatica-costes',
    locale: 'es',
    title: 'División automática de costes para viajes en grupo',
    summary: 'Cómo repartir gastos de taxi, comidas o alojamiento sin hojas de cálculo ni cálculos manuales.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Costes dividiéndose automáticamente',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Adiós a las hojas de cálculo de gastos\\n\\nLa función de división de costes de Cojauny automatiza el reparto equitativo de gastos compartidos.',
      '## 1. Registra el gasto al momento\\n\\nDesde el evento, toca "Añadir gasto", introduce el monto total y selecciona quién participa en el reparto.',
      '## 2. División inteligente\\n\\nPuedes dividir equitativamente o asignar porcentajes personalizados (útil si alguien pidió extras).',
      '## Conclusión\\n\\nLos equipos ahorran horas de contabilidad manual y evitan malentendidos sobre quién debe qué.'
    ],
    tags: ['costes', 'división', 'finanzas'],
    categories: ['product'],
    publishedAt: '2025-11-17T13:00:00.000Z',
    updatedAt: '2025-11-17T13:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 4
  },

  {
    postId: 'post-006',
    slug: 'automatic-cost-splitting',
    locale: 'en',
    title: 'Automatic cost splitting for group travel',
    summary: 'How to split taxi, meal or accommodation expenses without spreadsheets or manual calculations.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Costs being split automatically',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Goodbye to expense spreadsheets\\n\\nCojauny\'s cost splitting feature automates equitable distribution of shared expenses.',
      '## 1. Record expenses on the spot\\n\\nFrom the event, tap "Add expense", enter the total amount and select who participates in the split.',
      '## 2. Smart division\\n\\nYou can split equally or assign custom percentages (useful if someone ordered extras).',
      '## Conclusion\\n\\nTeams save hours of manual accounting and avoid misunderstandings about who owes what.'
    ],
    tags: ['costs', 'splitting', 'finance'],
    categories: ['product'],
    publishedAt: '2025-11-17T13:00:00.000Z',
    updatedAt: '2025-11-17T13:00:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 4
  },

  {
    postId: 'post-006',
    slug: 'division-automatique-couts',
    locale: 'fr',
    title: 'Division automatique des coûts pour les voyages de groupe',
    summary: 'Comment répartir les frais de taxi, repas ou hébergement sans feuilles de calcul ni calculs manuels.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Coûts divisés automatiquement',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Adieu aux feuilles de calcul de dépenses\\n\\nLa fonction de répartition des coûts de Cojauny automatise la distribution équitable des dépenses partagées.',
      '## 1. Enregistrer les dépenses sur le moment\\n\\nDepuis l\'événement, appuyez sur "Ajouter une dépense", saisissez le montant total et sélectionnez qui participe à la répartition.',
      '## 2. Division intelligente\\n\\nVous pouvez diviser également ou attribuer des pourcentages personnalisés (utile si quelqu\'un a commandé des suppléments).',
      '## Conclusion\\n\\nLes équipes économisent des heures de comptabilité manuelle et évitent les malentendus sur qui doit quoi.'
    ],
    tags: ['coûts', 'répartition', 'finances'],
    categories: ['product'],
    publishedAt: '2025-11-17T13:00:00.000Z',
    updatedAt: '2025-11-17T13:00:00.000Z',
    author: 'Équipe Cojauny',
    readingTimeMinutes: 4
  },

  {
    postId: 'post-006',
    slug: 'automatische-kostenaufteilung',
    locale: 'de',
    title: 'Automatische Kostenaufteilung für Gruppenreisen',
    summary: 'So teilst du Taxi-, Essens- oder Unterkunftskosten ohne Tabellen oder manuelle Berechnungen.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Kosten werden automatisch aufgeteilt',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Abschied von Ausgaben-Tabellen\\n\\nCojaunys Kostenaufteilungs-Funktion automatisiert die gleichmäßige Verteilung gemeinsamer Ausgaben.',
      '## 1. Ausgaben sofort erfassen\\n\\nTippe vom Event aus auf "Ausgabe hinzufügen", gib den Gesamtbetrag ein und wähle aus, wer an der Aufteilung teilnimmt.',
      '## 2. Intelligente Aufteilung\\n\\nDu kannst gleichmäßig aufteilen oder benutzerdefinierte Prozentsätze zuweisen (nützlich, wenn jemand Extras bestellt hat).',
      '## Fazit\\n\\nTeams sparen Stunden manueller Buchhaltung und vermeiden Missverständnisse darüber, wer wem was schuldet.'
    ],
    tags: ['kosten', 'aufteilung', 'finanzen'],
    categories: ['product'],
    publishedAt: '2025-11-17T13:00:00.000Z',
    updatedAt: '2025-11-17T13:00:00.000Z',
    author: 'Cojauny Team DACH',
    readingTimeMinutes: 4
  }
];

/**
 * Get posts by locale
 */
export function getPostsByLocale(locale: Locale): BlogPost[] {
  return blogPosts.filter(post => post.locale === locale);
}

/**
 * Get a specific post by ID and locale
 */
export function getPostById(postId: string, locale: Locale): BlogPost | undefined {
  return blogPosts.find(post => post.postId === postId && post.locale === locale);
}

/**
 * Get all available post IDs (unique, sorted)
 */
export function getAvailablePostIds(): string[] {
  return ['post-001', 'post-002', 'post-003', 'post-004', 'post-005', 'post-006'];
}

/**
 * Get all posts for a specific postId across all languages
 */
export function getPostVersions(postId: string): BlogPost[] {
  return blogPosts.filter(post => post.postId === postId);
}

/**
 * Get a post by slug and locale (legacy compatibility)
 */
export function getPost(locale: Locale, slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug && post.locale === locale);
}


