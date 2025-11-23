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
    slug: 'share-airport-ride',
    locale: 'es',
    title: 'La guía definitiva para coordinar taxis al aeropuerto con tu mismo vuelo',
    summary: 'Descubre cómo transformar la logística de traslados aeroportuarios: estrategias para crear eventos, invitar pasajeros, negociar tarifas corporativas y dividir costos sin fricciones.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Pasajeros de negocios compartiendo un taxi ejecutivo hacia el aeropuerto',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Por qué compartir el taxi al aeropuerto es una estrategia inteligente',
      'En el entorno corporativo actual, la eficiencia no solo se mide en tiempo, sino también en la optimización de recursos. Cada año, millones de viajeros de negocios y turistas pagan tarifas exorbitantes, que oscilan entre 40 y 80 euros por trayecto, para desplazarse desde el aeropuerto a la ciudad. Si viajas solo, este coste es un gasto fijo inevitable. Sin embargo, la realidad cambia drásticamente cuando compartes el trayecto con otros pasajeros de tu mismo vuelo: esa misma carrera puede reducirse a apenas 10-15 euros por persona, liberando presupuesto para otras experiencias o ahorros corporativos.',
      'Cojauny surge como la solución tecnológica para este problema logístico, conectando a pasajeros del mismo vuelo mucho antes de que el avión despegue. En esta guía exhaustiva, te explicaremos paso a paso cómo utilizar nuestra plataforma para crear eventos de transporte compartido, invitar a tus compañeros de reserva, seleccionar las mejores franjas horarias basadas en datos de tráfico real y negociar tarifas cerradas con operadores locales de confianza.',
      '## Paso 1: Crea tu evento de vuelo en Cojauny con precisión',
      'El primer paso para una coordinación exitosa es la creación del evento. Tras registrarte en la aplicación, dirígete a la pestaña "Eventos" y selecciona "+ Nuevo Evento". La precisión es clave aquí: introduce tu número de vuelo, la fecha exacta de salida o llegada, y el tipo de evento (salida o llegada). Cojauny utiliza esta información para sincronizarse con las bases de datos de vuelos en tiempo real, asegurando que cualquier retraso o cambio de puerta se actualice automáticamente en tu evento.',
      '## Paso 2: Invita y coordina a tus compañeros de viaje eficientemente',
      'Una vez creado el evento, la magia de Cojauny entra en acción. La aplicación mostrará tu propuesta a otros usuarios verificados que viajen en el mismo vuelo. Recibirás notificaciones instantáneas cada vez que alguien solicite unirse. A través del chat integrado y seguro del evento, podrás coordinar detalles cruciales como la hora exacta de recogida, compartir ubicaciones en tiempo real para el punto de encuentro y acordar el método de pago preferido por el grupo, todo sin salir de la app.',
      '## Paso 3: Gestión transparente de costes',
      'Olvídate de los cálculos manuales y las situaciones incómodas al final del trayecto. Cojauny incorpora una herramienta de división de gastos inteligente. Al finalizar el viaje, simplemente introduce el coste total del servicio. La aplicación calculará automáticamente la cuota de cada participante y enviará recordatorios de pago. Además, registrará este ahorro en tu perfil personal, permitiéndote visualizar no solo el dinero ahorrado, sino también las emisiones de CO₂ evitadas gracias al transporte compartido.',
      '## Conclusión: Viaja de forma más inteligente, no más cara',
      'Organizar un taxi compartido al aeropuerto ya no tiene por qué ser una odisea de correos electrónicos y mensajes perdidos. Con Cojauny, centralizas la logística en una plataforma intuitiva: creas el evento en menos de 2 minutos, encuentras compañeros de vuelo verificados, coordinas los detalles en un chat seguro y gestionas los pagos automáticamente. Es hora de viajar de manera más inteligente, sostenible y económica.'
    ],
    tags: ['movilidad', 'taxi compartido', 'aeropuerto', 'ahorro', 'sostenibilidad'],
    categories: ['operations', 'product'],
    publishedAt: '2025-11-10T08:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 10
  },

  // POST-001: Airport Taxi Coordination (ENGLISH)
  {
    postId: 'post-001',
    slug: 'share-airport-ride',
    locale: 'en',
    title: 'The Ultimate Guide to Sharing Airport Rides with Your Flight',
    summary: 'A comprehensive framework to align passengers, secure pickup points, and split transfers seamlessly before your trip begins.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Business travelers organizing an airport ride on their phones',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# The Playbook for Sharing Airport Rides with Confidence',
      'Coordinating a shared ride with fellow passengers on your same flight sounds simple in theory, but reality often introduces friction: staggered arrival times, unexpected luggage delays, or drivers calling the wrong phone number. To turn this chaos into a seamless experience, you need a structured approach.',
      '## 1. Capture the Basics Early and Accurately',
      'Success starts with preparation. Create a flight event in Cojauny as soon as your tickets are confirmed. Input the airline, flight number, date, and the specific city where everyone will meet. Cojauny\'s intelligent system automatically proposes optimal meeting points based on historical data and user success rates, removing the guesswork from the equation.',
      '## 2. Offer Clear and Configurable Ride Slots',
      'Ambiguity is the enemy of coordination. For each ride event, configure the capacity (number of seats), the precise pickup window, and a buffer for travel time. When other travelers tap "Join ride," they should see exactly how many seats remain and what behavior is expected (e.g., "Ready at curb in 15 mins"). This transparency builds trust and ensures commitment.',
      '## 3. Keep the Chat Structured and Focused',
      'Pinned prompts are your best friend to avoid a chaotic chat stream. Start with a pinned message: "👋 Please introduce yourself + mention your luggage type (Carry-on/Checked)". Follow up with automated reminders to share driver details (license plate, car model) the moment the car departs. This keeps the conversation actionable and relevant.',
      '## 4. Align on Payments Before Boarding',
      'Money matters can be awkward if left for the last minute. Use Cojauny\'s integrated cost splitter to define upfront how the fare will be divided (e.g., equal split vs. custom amounts). Add your preferred payment links (PayPal, Revolut, etc.) directly in the event details. Travelers receive a notification with their exact share minutes after the ride closes, ensuring prompt reimbursement.',
      '## Final Thoughts: Reliability Through Transparency',
      'Shared rides stop being a gamble when the process is transparent and structured. By setting expectations early, documenting who is in charge of what, and relying on Cojauny to keep information synced across all devices, you transform a stressful commute into a reliable, cost-effective, and social experience.'
    ],
    tags: ['airport ride', 'travel planning', 'logistics', 'cost saving'],
    categories: ['operations'],
    publishedAt: '2025-11-10T08:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 8
  },

  // POST-001: Airport Taxi Coordination (FRENCH)
  {
    postId: 'post-001',
    slug: 'share-airport-ride',
    locale: 'fr',
    title: 'Le guide complet pour partager votre navette aéroport',
    summary: 'Stratégies pour réduire vos coûts de transport en partageant taxi, VTC ou parking longue durée grâce à Cojauny.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Voyageurs d\'affaires organisant une navette partagée',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Organiser une navette partagée sans stress ni imprévus',
      'Partager un taxi ou un VTC avec les passagers de votre vol est sans doute le moyen le plus efficace de réduire les coûts de déplacement tout en arrivant à destination confortablement. Cependant, sans les bons outils, cela peut vite devenir un casse-tête logistique.',
      '## 1. Créez l\'événement de vol avec précision',
      'Dans l\'application Cojauny, commencez par sélectionner votre vol spécifique. Précisez clairement si le trajet concerne le départ ou l\'arrivée et indiquez le nombre exact de places disponibles dans votre véhicule. Cette première étape est cruciale pour filtrer les participants potentiels et assurer la compatibilité des horaires.',
      '## 2. Invitez vos co-passagers et gérez les demandes',
      'Une fois l\'événement créé, partagez le lien unique généré par Cojauny. Les passagers intéressés verront immédiatement l\'heure de rencontre proposée, le nombre de sièges restants et une estimation du prix par personne. Vous gardez le contrôle total pour accepter ou refuser les demandes, garantissant ainsi la sécurité et la fiabilité du groupe.',
      '## 3. Verrouillez le point de rendez-vous sur la carte',
      'Ne laissez pas le lieu de rencontre au hasard. Utilisez la carte interactive intégrée pour placer précisément le repère du lieu de départ (par exemple, "Sortie 3, Niveau Arrivées"). En cas de changement de dernière minute, mettez simplement à jour l\'événement : tous les participants recevront une notification push instantanée, évitant ainsi les confusions.',
      '## 4. Répartition instantanée et équitable des coûts',
      'La question financière est souvent délicate. Avec Cojauny, elle devient simple. À la fin du trajet, saisissez le montant total de la course. L\'application répartit automatiquement la somme entre les participants selon les règles définies (parts égales ou personnalisées) et envoie à chacun un rappel de paiement avec les détails nécessaires.',
      '## Conclusion',
      'Une navette partagée réussie repose sur la clarté des informations et la visibilité en temps réel. Avec Cojauny, chaque participant sait exactement où aller, combien payer et quoi faire si le plan change, transformant le transport aéroportuaire en une expérience fluide et collaborative.'
    ],
    tags: ['navette', 'aéroport', 'mobilité partagée', 'économies'],
    categories: ['product'],
    publishedAt: '2025-11-10T08:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Équipe Cojauny',
    readingTimeMinutes: 7
  },

  // POST-001: Airport Taxi Coordination (GERMAN)
  {
    postId: 'post-001',
    slug: 'share-airport-ride',
    locale: 'de',
    title: 'Der ultimative Guide zum Teilen von Flughafentransfers',
    summary: 'Bewährte Strategien für Teams und Reisende, die am selben Flug teilnehmen und ihre Transfers effizient bündeln möchten.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Geschäftsreisende koordinieren ihren Transfer am Flughafen',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Leitfaden für stressfreie gemeinsame Flughafentransfers',
      'Wer mit Kolleg:innen oder anderen Passagieren desselben Fluges reist, hat die Chance, Reisekosten zu halbieren und den Stress der Anreise zu minimieren. Doch Koordination erfordert Struktur.',
      '## 1. Event professionell anlegen',
      'Der erste Schritt ist die Erstellung eines präzisen Events in Cojauny. Lege deinen Flug fest, wähle ob es sich um einen Abflug- oder Ankunftstransfer handelt, und definiere klar die Kapazität, den genauen Treffpunkt sowie das Zeitfenster. Je genauer die Daten, desto reibungsloser der Ablauf.',
      '## 2. Rollen klar verteilen',
      'Effizienz entsteht durch Klarheit. Bestimme eine moderierende Person im Chat, die den Kontakt zum Fahrer hält und letzte Updates postet. Teilnehmende können ihre Anwesenheit mit einem einfachen Tap bestätigen, was unnötiges Hin-und-Her-Schreiben vermeidet.',
      '## 3. Strukturierte Kommunikation im Event-Chat',
      'Nutze den integrierten Chat für wesentliche Informationen. Verwende vordefinierte Prompts wie "Wo bist du gerade?" oder "Wann bist du am Treffpunkt?", um den Status schnell abzufragen. Ein großer Vorteil: Auch offline gesendete Infos synchronisieren sich automatisch, sobald das Flugzeug landet und eine Verbindung besteht.',
      '## 4. Transparente Abrechnung nach der Fahrt',
      'Vermeide Diskussionen über Geld am Ende der Reise. Trage den Gesamtpreis inklusive Trinkgeld in die App ein und lass das System den Betrag pro Person berechnen. Jeder erhält eine Benachrichtigung mit seinem Anteil, was die Rückzahlung beschleunigt.',
      '## Fazit',
      'Eine geteilte Flughafentransfer-Experience muss kein Chaos sein. Strukturierte Events, klare Rollenverteilung und transparente Kostenaufteilung sorgen dafür, dass Teams und Reisende entspannt und kosteneffizient ankommen.'
    ],
    tags: ['reiseplanung', 'fahrgemeinschaft', 'flughafen', 'effizienz'],
    categories: ['operations'],
    publishedAt: '2025-11-10T08:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Cojauny Team DACH',
    readingTimeMinutes: 7
  },

  // ============================================================================
  // POST-002: Real-time Flight Coordination
  // ============================================================================
  {
    postId: 'post-002',
    slug: 'real-time-flight-coordination',
    locale: 'es',
    title: 'Dominando la coordinación de vuelos en tiempo real para equipos distribuidos',
    summary: 'Aprende a sincronizar horarios de vuelo, compartir actualizaciones críticas de puertas y organizar encuentros en terminales con visibilidad total del equipo.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Equipo corporativo coordinando vuelos en la terminal con tablets',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Por qué la coordinación de vuelos en tiempo real es crítica para el éxito',
      'En el mundo de los negocios globalizados, cuando varios miembros del equipo viajan al mismo evento pero en vuelos diferentes, la falta de visibilidad centralizada puede crear un caos logístico: reuniones improvisadas en salas de embarque vacías, mensajes de WhatsApp sin respuesta por falta de conectividad, y equipos llegando a los hoteles de manera descoordinada y fatigada.',
      '## 1. Crea un "Workspace" de viaje compartido',
      'Deja atrás la práctica obsoleta de compartir PDFs de itinerarios por cadenas de correo electrónico. Crea un "Workspace" dedicado en Cojauny para el viaje. Invita a todos los viajeros implicados y añade cada vuelo como un evento separado dentro de este espacio. Esto centraliza la información y la hace accesible para todos en tiempo real.',
      '## 2. Activa notificaciones inteligentes de cambios',
      'La incertidumbre es el mayor enemigo del viajero. Cojauny se conecta directamente con las APIs de las aerolíneas para monitorizar y detectar cambios de puerta, retrasos o cancelaciones al instante. Los miembros del equipo reciben alertas push críticas incluso si su conexión a internet es intermitente, permitiéndoles reaccionar a tiempo.',
      '## 3. Coordina puntos de encuentro precisos en terminales',
      'Si varios vuelos aterrizan con 30 o 45 minutos de diferencia, la espera puede ser tediosa si no se gestiona bien. Utiliza la función "Punto de Encuentro" para fijar un lugar preciso (por ejemplo, "Starbucks T2, frente al Duty Free") e incluye una foto de referencia. Esto elimina la confusión y facilita la reagrupación.',
      '## 4. Visibilidad total del estado del equipo',
      'El dashboard de Cojauny ofrece una vista de pájaro del estado de cada miembro: quién ya ha embarcado, quién está en ruta y quién está sufriendo retrasos. Esta información es vital para los líderes de equipo, permitiéndoles reorganizar reuniones, cenas o traslados sin tener que esperar a que todos aterricen para tomar decisiones.',
      '## Resultado: Eficiencia operativa',
      'Los equipos que antes perdían 2-3 horas intentando reagruparse en aeropuertos desconocidos, ahora logran encontrarse en menos de 15 minutos gracias a la visibilidad compartida y las notificaciones proactivas de Cojauny.'
    ],
    tags: ['coordinación', 'vuelos', 'equipos', 'productividad', 'viajes de negocios'],
    categories: ['operations'],
    publishedAt: '2025-11-12T09:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 9
  },

  {
    postId: 'post-002',
    slug: 'real-time-flight-coordination',
    locale: 'en',
    title: 'Mastering Real-Time Flight Coordination for Distributed Teams',
    summary: 'How to seamlessly sync flight schedules, share critical gate updates, and organize terminal meetups with full team visibility.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Corporate team coordinating flights at the terminal using tablets',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Why Real-Time Flight Coordination Matters More Than Ever',
      'When multiple team members fly to the same conference or client meeting on different flights, a lack of centralized visibility creates unnecessary chaos: meetings scheduled at empty gates, unanswered messages due to spotty WiFi, and teams arriving at hotels completely uncoordinated. This friction costs time and energy.',
      '## 1. Create a Shared Travel Workspace',
      'Move beyond the inefficient practice of sharing PDF itineraries via email threads. Create a dedicated Travel Workspace in Cojauny. Invite all travelers and add each flight as a separate event. This creates a single source of truth for the entire trip, accessible to everyone involved.',
      '## 2. Enable Proactive Gate Change Notifications',
      'Stay ahead of disruptions. Cojauny connects directly to global airline APIs to detect gate changes, delays, or cancellations in real-time. Team members receive push alerts immediately—even when offline—allowing them to adjust their plans proactively rather than reactively.',
      '## 3. Coordinate Precise Meeting Points in Terminals',
      'When flights land 30 minutes apart, finding colleagues in a busy terminal can be frustrating. Use the "Meeting Point" feature to pin a precise location (e.g., "Starbucks T2, near Gate B12") complete with a reference photo. This visual aid eliminates confusion and speeds up regrouping.',
      '## 4. Full Team Status Visibility',
      'The Cojauny dashboard provides a live overview of your team\'s status: see who has boarded, who is currently en route, and who is experiencing delays. This visibility empowers team leads to reorganize meetings, dinner reservations, or ground transport without waiting for everyone to land to get a status update.',
      '## Result: Operational Excellence',
      'Teams that used to waste 2-3 hours trying to regroup at destination airports now meet in under 15 minutes, thanks to the shared visibility and proactive notifications provided by Cojauny.'
    ],
    tags: ['coordination', 'flights', 'teams', 'productivity', 'business travel'],
    categories: ['operations'],
    publishedAt: '2025-11-12T09:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 8
  },

  {
    postId: 'post-002',
    slug: 'real-time-flight-coordination',
    locale: 'fr',
    title: 'Maîtriser la coordination des vols en temps réel pour les équipes',
    summary: 'Comment synchroniser les horaires de vol, partager les mises à jour critiques de porte et organiser des rencontres dans les terminaux avec une visibilité complète.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Équipe d\'entreprise se coordonnant dans le terminal',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Pourquoi la coordination des vols en temps réel est essentielle',
      'Lorsque plusieurs membres d\'une équipe se rendent au même événement par des vols différents, le manque de visibilité centralisée crée inévitablement du chaos : réunions manquées dans des salles d\'embarquement vides, messages sans réponse faute de WiFi, et arrivées désordonnées aux hôtels.',
      '## 1. Créer un espace de travail de voyage partagé',
      'Abandonnez l\'échange inefficace de PDF par e-mail. Créez un espace de travail dédié dans Cojauny. Invitez tous les voyageurs et ajoutez chaque vol comme un événement distinct. Cela devient votre source unique de vérité pour tout le voyage.',
      '## 2. Activer les notifications intelligentes',
      'Cojauny se connecte aux API des compagnies aériennes pour détecter instantanément les changements de porte, les retards ou les annulations. Les membres de l\'équipe reçoivent des alertes push même hors ligne, leur permettant d\'anticiper les problèmes.',
      '## 3. Coordonner des points de rencontre précis',
      'Si les vols arrivent avec un décalage, utilisez la fonction "Point de rencontre" pour définir un lieu exact (par exemple, "Starbucks T2, Salon VIP") avec une photo de référence. Cela élimine les recherches frustrantes dans les terminaux bondés.',
      '## 4. Visibilité totale du statut de l\'équipe',
      'Le tableau de bord permet de voir qui a embarqué, qui est en vol et qui est retardé. Cette vue d\'ensemble permet de réorganiser logistiquement les réunions ou les transferts sans attendre que tout le monde ait atterri.',
      '## Résultat',
      'Les équipes qui perdaient auparavant des heures à se regrouper se retrouvent désormais en 15 minutes grâce à la visibilité partagée et aux notifications proactives de Cojauny.'
    ],
    tags: ['coordination', 'vols', 'équipes', 'productivité', 'voyage d\'affaires'],
    categories: ['operations'],
    publishedAt: '2025-11-12T09:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Équipe Cojauny',
    readingTimeMinutes: 8
  },

  {
    postId: 'post-002',
    slug: 'real-time-flight-coordination',
    locale: 'de',
    title: 'Meisterhafte Echtzeit-Flugkoordinierung für verteilte Teams', 
    summary: 'So synchronisierst du Flugpläne, teilst kritische Gate-Updates und organisierst Terminal-Treffpunkte mit vollständiger Team-Visibilität.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Firmenteam koordiniert Flüge am Terminal',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Warum Echtzeit-Flugkoordinierung entscheidend ist',
      'Wenn mehrere Teammitglieder mit unterschiedlichen Flügen zu demselben Event reisen, führt mangelnde Transparenz oft zu Chaos: verpasste Treffen an leeren Gates, Kommunikationsausfälle wegen fehlendem WLAN und unkoordinierte Ankünfte im Hotel.',
      '## 1. Gemeinsamen Reise-Workspace erstellen',
      'Statt PDF-Reisepläne per E-Mail zu versenden, erstelle einen dedizierten Workspace in Cojauny. Lade alle Reisenden ein und füge jeden Flug als separates Event hinzu. Dies schafft eine zentrale Anlaufstelle für alle Reiseinformationen.',
      '## 2. Proaktive Benachrichtigungen aktivieren',
      'Cojauny verbindet sich direkt mit Airline-APIs, um Gate-Änderungen, Verspätungen oder Stornierungen sofort zu erkennen. Teammitglieder erhalten Push-Benachrichtigungen auch offline, was ihnen ermöglicht, proaktiv zu handeln statt nur zu reagieren.',
      '## 3. Präzise Treffpunkte in Terminals koordinieren',
      'Wenn Flüge zeitversetzt landen, nutze die "Treffpunkt"-Funktion, um einen genauen Ort festzulegen (z.B. "Starbucks T2, VIP-Lounge") inklusive Referenzfoto. Dies vermeidet Verwirrung in unübersichtlichen Terminals.',
      '## 4. Vollständige Sichtbarkeit des Team-Status',
      'Das Dashboard zeigt live, wer bereits an Bord ist, wer unterwegs ist und wer Verspätung hat. Diese Übersicht ermöglicht es Teamleitern, Meetings oder Transfers neu zu organisieren, ohne auf die Landung aller warten zu müssen.',
      '## Ergebnis',
      'Teams, die früher Stunden mit der Neugruppierung verloren haben, treffen sich jetzt dank geteilter Sichtbarkeit und proaktiver Benachrichtigungen in weniger als 15 Minuten.'
    ],
    tags: ['koordination', 'flüge', 'teams', 'produktivität', 'geschäftsreisen'],
    categories: ['operations'],
    publishedAt: '2025-11-12T09:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Cojauny Team DACH',
    readingTimeMinutes: 8
  },

  // ============================================================================
  // POST-003: Minibus Team Coordination
  // ============================================================================
  {
    postId: 'post-003',
    slug: 'minibus-team-coordination',
    locale: 'es',
    title: 'Estrategias de coordinación de minibús para equipos grandes',
    summary: 'Guía avanzada para organizar transporte en grupo para 8-15 personas, optimizando el reparto de costes y la gestión inteligente de asientos.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Equipo corporativo subiendo a un minibús compartido de lujo',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Organiza el transporte para grupos grandes sin complicaciones logísticas',
      'Cuando tu equipo supera las 4-5 personas, un simple taxi deja de ser una opción viable. La coordinación de minibuses o vans se convierte en una necesidad, pero también en un reto logístico. Cojauny simplifica este proceso.',
      '## 1. Calcula la capacidad real con precisión',
      'Un error común es asumir la capacidad nominal del vehículo. Una van de 9 plazas raramente transporta cómodamente a 9 adultos con equipaje completo. Usa la calculadora de capacidad de Cojauny para estimar los espacios reales necesarios basándote en el número de pasajeros y el volumen de equipaje, evitando sorpresas desagradables al cargar el vehículo.',
      '## 2. Reparte los asientos equitativamente y con antelación',
      'Evita la carrera por el "mejor asiento". La función "Mapa de Asientos" de Cojauny permite asignar lugares de antemano según el orden de llegada, jerarquía o preferencias del equipo. Esto agiliza el proceso de embarque y reduce fricciones innecesarias.',
      '## 3. Centralización de la comunicación',
      'Grupos grandes suelen fragmentarse en múltiples chats (WhatsApp, Slack, SMS). Cojauny centraliza toda la comunicación del transporte en un único evento, asegurando que todos tengan la misma información sobre horarios, puntos de recogida y paradas.',
      '## Conclusión',
      'La logística de grupos grandes no tiene por qué ser caótica. Con las herramientas adecuadas, puedes transformar un traslado estresante en una experiencia de equipo organizada y eficiente.'
    ],
    tags: ['minibús', 'equipos', 'logística', 'transporte grupal'],
    categories: ['operations'],
    publishedAt: '2025-11-14T10:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 6
  },

  {
    postId: 'post-003',
    slug: 'minibus-team-coordination',
    locale: 'en',
    title: 'Advanced Minibus Coordination Strategies for Large Teams',
    summary: 'A complete guide to organizing group transport for 8-15 people, optimizing cost splitting and intelligent seat management.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Corporate team boarding a luxury shared minibus',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Organizing Transport for Large Groups Without the Logistics Headache',
      'When your team size exceeds 4-5 people, relying on standard taxis is no longer viable. Coordinating minibuses or vans becomes necessary but introduces new logistical challenges. Cojauny streamlines this entire process.',
      '## 1. Calculate Real Capacity accurately',
      'A common pitfall is trusting the vehicle\'s nominal capacity. A "9-seater" van rarely accommodates 9 adults comfortably once luggage is factored in. Use Cojauny\'s capacity calculator to estimate the actual space needed based on passenger count and luggage volume, preventing last-minute squeezing or the need for a second vehicle.',
      '## 2. Distribute Seats Equitably in Advance',
      'Avoid the awkward rush for the "best seat." Cojauny\'s "Seat Map" feature allows you to assign seats beforehand based on arrival order, seniority, or team preferences. This simple step speeds up boarding and eliminates unnecessary friction among team members.',
      '## 3. Centralize Communication',
      'Large groups tend to splinter into multiple communication channels (WhatsApp, Slack, SMS). Cojauny centralizes all transport-related communication within a single event, ensuring everyone has the same up-to-date information regarding schedules, pickup points, and stops.',
      '## Conclusion',
      'Large group logistics don\'t have to be chaotic. With the right tools, you can transform a stressful transfer into an organized and efficient team experience.'
    ],
    tags: ['minibus', 'teams', 'logistics', 'group transport'],
    categories: ['operations'],
    publishedAt: '2025-11-14T10:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 6
  },

  {
    postId: 'post-003',
    slug: 'minibus-team-coordination',
    locale: 'fr',
    title: 'Stratégies de coordination de minibus pour grandes équipes',
    summary: 'Guide complet pour organiser le transport de groupe pour 8-15 personnes, en optimisant le partage des coûts et la gestion intelligente des sièges.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Équipe d\'entreprise montant dans un minibus partagé de luxe',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Organiser le transport pour de grands groupes sans maux de tête',
      'Lorsque votre équipe dépasse 4-5 personnes, les taxis standards ne suffisent plus. La coordination de minibus ou de vans devient nécessaire mais complexe. Cojauny simplifie ce processus.',
      '## 1. Calculer la capacité réelle avec précision',
      'Un piège courant est de se fier à la capacité nominale du véhicule. Un van de 9 places transporte rarement 9 adultes confortablement avec des bagages. Utilisez le calculateur de Cojauny pour estimer l\'espace réel nécessaire, évitant ainsi les mauvaises surprises au moment du départ.',
      '## 2. Répartir les sièges équitablement à l\'avance',
      'Évitez la course pour la "meilleure place". La fonction "Plan des sièges" de Cojauny permet d\'attribuer les places à l\'avance selon l\'ordre d\'arrivée ou les préférences. Cela accélère l\'embarquement et réduit les frictions.',
      '## 3. Centraliser la communication',
      'Les grands groupes ont tendance à se disperser sur plusieurs canaux. Cojauny centralise toute la communication liée au transport dans un seul événement, garantissant que tout le monde dispose des mêmes informations à jour.',
      '## Conclusion',
      'La logistique des grands groupes n\'a pas à être chaotique. Avec les bons outils, vous pouvez transformer un transfert stressant en une expérience d\'équipe organisée.'
    ],
    tags: ['minibus', 'équipes', 'logistique', 'transport de groupe'],
    categories: ['operations'],
    publishedAt: '2025-11-14T10:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Équipe Cojauny',
    readingTimeMinutes: 6
  },

  {
    postId: 'post-003',
    slug: 'minibus-team-coordination',
    locale: 'de',
    title: 'Fortgeschrittene Minibus-Koordinierungsstrategien für große Teams',
    summary: 'Ein kompletter Leitfaden zur Organisation von Gruppentransporten für 8-15 Personen, mit optimierter Kostenaufteilung und intelligentem Sitzplatzmanagement.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Firmenteam steigt in luxuriösen geteilten Minibus',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Transport für große Gruppen ohne Logistik-Kopfschmerzen organisieren',
      'Wenn dein Team größer als 4-5 Personen ist, reichen Standardtaxis nicht mehr aus. Die Koordination von Minibussen wird notwendig, bringt aber neue Herausforderungen mit sich. Cojauny vereinfacht diesen Prozess.',
      '## 1. Reale Kapazität präzise berechnen',
      'Ein häufiger Fehler ist das Vertrauen auf die Nennkapazität. Ein "9-Sitzer"-Van fasst selten 9 Erwachsene mit Gepäck bequem. Nutze Cojaunys Rechner, um den tatsächlichen Platzbedarf zu ermitteln und böse Überraschungen beim Beladen zu vermeiden.',
      '## 2. Sitze im Voraus gerecht verteilen',
      'Vermeide das Gedränge um den "besten Platz". Mit der "Sitzplan"-Funktion von Cojauny kannst du Plätze vorab basierend auf Ankunft oder Präferenzen zuweisen. Das beschleunigt das Einsteigen und eliminiert unnötige Reibereien.',
      '## 3. Kommunikation zentralisieren',
      'Große Gruppen neigen dazu, sich auf verschiedene Kanäle zu verteilen. Cojauny zentralisiert alle transportbezogenen Informationen in einem einzigen Event, sodass alle auf dem gleichen Stand sind.',
      '## Fazit',
      'Großgruppenlogistik muss nicht chaotisch sein. Mit den richtigen Tools wird aus einem stressigen Transfer ein organisiertes Teamerlebnis.'
    ],
    tags: ['minibus', 'teams', 'logistik', 'gruppentransport'],
    categories: ['operations'],
    publishedAt: '2025-11-14T10:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Cojauny Team DACH',
    readingTimeMinutes: 6
  },

  // ============================================================================
  // POST-004: Real-time Location Sharing
  // ============================================================================
  {
    postId: 'post-004',
    slug: 'real-time-location-sharing',
    locale: 'es',
    title: 'Compartir ubicación en tiempo real: Seguridad y eficiencia en eventos',
    summary: 'Descubre cómo el seguimiento de ubicación inteligente permite a los equipos encontrarse rápidamente en entornos complejos como aeropuertos y ferias, respetando la privacidad.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Mapa digital en tablet mostrando ubicaciones del equipo en tiempo real',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# El fin de los "¿Dónde estás?" interminables en eventos masivos',
      'En grandes eventos o aeropuertos desconocidos, el seguimiento de ubicación en tiempo real no es un lujo, es una necesidad operativa. Elimina la fricción y la ansiedad de intentar encontrarse en lugares abarrotados.',
      '## 1. Activa la compartición temporal inteligente',
      'La clave es la temporalidad. Cuando creas un evento en Cojauny, puedes habilitar "Ubicación en tiempo real". Los miembros del equipo aparecerán en el mapa interactivo únicamente durante la ventana de tiempo del evento (por ejemplo, 2 horas). Esto facilita la convergencia sin necesidad de llamadas constantes.',
      '## 2. Privacidad por diseño: Tu seguridad es lo primero',
      'Entendemos la importancia de la privacidad. La función está diseñada para desactivarse automáticamente en el momento en que el evento finaliza. No queda ningún rastro permanente de tu ubicación, garantizando que tu vida privada permanezca privada una vez terminado el trabajo.',
      '## Resultado: Reagrupación ultrarrápida',
      'Los datos muestran que los equipos que utilizan esta función reducen el tiempo de reagrupación de 30 minutos a menos de 5 minutos, permitiendo aprovechar ese tiempo en actividades más productivas.'
    ],
    tags: ['ubicación', 'tiempo real', 'coordinación', 'seguridad', 'privacidad'],
    categories: ['product'],
    publishedAt: '2025-11-15T11:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 5
  },

  {
    postId: 'post-004',
    slug: 'real-time-location-sharing',
    locale: 'en',
    title: 'Real-Time Location Sharing: Safety and Efficiency at Events',
    summary: 'Discover how intelligent location tracking allows teams to find each other quickly in complex environments like airports and trade shows, while respecting privacy.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Digital map on tablet showing real-time team locations',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# The End of Endless "Where Are You?" at Massive Events',
      'At large conferences or unfamiliar airports, real-time location tracking isn\'t a luxury—it\'s an operational necessity. It eliminates the friction and anxiety of trying to meet up in crowded spaces.',
      '## 1. Enable Smart Temporary Sharing',
      'The key feature is temporality. When creating an event in Cojauny, enable "Real-time location." Team members appear on the interactive map only during the specific event window (e.g., 2 hours). This facilitates rapid convergence without the need for constant phone calls.',
      '## 2. Privacy by Design: Your Security First',
      'We understand the critical importance of privacy. This feature is engineered to automatically disable itself the moment the event concludes. No permanent trace of your location remains, ensuring your private life stays private once the job is done.',
      '## Result: Ultra-Fast Regrouping',
      'Data shows that teams using this feature reduce regrouping time from an average of 30 minutes to under 5 minutes, freeing up valuable time for more productive activities.'
    ],
    tags: ['location', 'real-time', 'coordination', 'safety', 'privacy'],
    categories: ['product'],
    publishedAt: '2025-11-15T11:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 5
  },

  {
    postId: 'post-004',
    slug: 'real-time-location-sharing',
    locale: 'fr',
    title: 'Partage de localisation en temps réel : Sécurité et efficacité',
    summary: 'Découvrez comment le suivi de localisation intelligent permet aux équipes de se retrouver rapidement dans des environnements complexes tout en respectant la vie privée.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Carte numérique sur tablette montrant les positions de l\'équipe',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# La fin des "Où es-tu ?" interminables lors des grands événements',
      'Dans les grands salons ou les aéroports inconnus, le suivi de localisation en temps réel est une nécessité opérationnelle. Il élimine la friction et l\'anxiété liées aux retrouvailles dans les lieux bondés.',
      '## 1. Activer le partage temporaire intelligent',
      'La clé est la temporalité. Lors de la création d\'un événement, activez "Localisation en temps réel". Les membres apparaissent sur la carte uniquement pendant la fenêtre de l\'événement. Cela facilite la convergence sans appels constants.',
      '## 2. Confidentialité par conception',
      'Nous comprenons l\'importance de la vie privée. La fonction se désactive automatiquement dès la fin de l\'événement. Aucune trace permanente ne subsiste, garantissant que votre vie privée le reste.',
      '## Résultat : Regroupement ultra-rapide',
      'Les équipes utilisant cette fonction réduisent le temps de regroupement de 30 minutes à moins de 5 minutes, libérant du temps pour des activités plus productives.'
    ],
    tags: ['localisation', 'temps réel', 'coordination', 'sécurité', 'confidentialité'],
    categories: ['product'],
    publishedAt: '2025-11-15T11:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Équipe Cojauny',
    readingTimeMinutes: 5
  },

  {
    postId: 'post-004',
    slug: 'real-time-location-sharing',
    locale: 'de',
    title: 'Echtzeit-Standortfreigabe: Sicherheit und Effizienz bei Events',
    summary: 'Entdecke, wie intelligentes Standort-Tracking Teams hilft, sich in komplexen Umgebungen schnell zu finden, unter Wahrung der Privatsphäre.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Digitale Karte auf Tablet zeigt Team-Standorte in Echtzeit',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Das Ende endloser "Wo bist du?"-Fragen bei Großevents',
      'Auf großen Messen oder unbekannten Flughäfen ist Echtzeit-Tracking eine operative Notwendigkeit. Es beseitigt die Reibung und den Stress, sich in überfüllten Räumen zu finden.',
      '## 1. Intelligente temporäre Freigabe aktivieren',
      'Der Schlüssel ist die Zeitbegrenzung. Aktiviere beim Erstellen eines Events "Echtzeit-Standort". Teammitglieder erscheinen nur während des Event-Fensters auf der Karte. Das erleichtert das Treffen ohne ständige Anrufe.',
      '## 2. Datenschutz durch Design',
      'Wir verstehen die Bedeutung der Privatsphäre. Die Funktion deaktiviert sich automatisch nach Eventende. Es bleibt keine dauerhafte Spur, sodass dein Privatleben privat bleibt.',
      '## Ergebnis: Ultraschnelles Wiederfinden',
      'Teams, die diese Funktion nutzen, reduzieren die Zeit zum Wiederfinden von 30 Minuten auf unter 5 Minuten und gewinnen so wertvolle Zeit.'
    ],
    tags: ['standort', 'echtzeit', 'koordination', 'sicherheit', 'datenschutz'],
    categories: ['product'],
    publishedAt: '2025-11-15T11:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Cojauny Team DACH',
    readingTimeMinutes: 5
  },

  // ============================================================================
  // POST-005: Ephemeral Group Chat
  // ============================================================================
  {
    postId: 'post-005',
    slug: 'ephemeral-group-chat',
    locale: 'es',
    title: 'Chats grupales efímeros: Comunicación segura que se autodestruye',
    summary: 'Entiende por qué los chats temporales son el futuro de la coordinación de eventos, protegiendo tu privacidad y manteniendo limpio tu historial digital.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Interfaz de chat seguro indicando cuenta atrás para autodestrucción',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# La privacidad importa: Por qué necesitamos chats que desaparecen',
      'En la era digital, la acumulación de datos es un riesgo. Los chats de eventos en Cojauny están diseñados con un principio de caducidad: se autodestruyen irrevocablemente 48 horas después de que el evento termina.',
      '## 1. Sin rastro digital permanente',
      'A diferencia de WhatsApp o Slack, donde las conversaciones triviales sobre logística permanecen archivadas indefinidamente, Cojauny borra automáticamente estos datos. Esto reduce la huella digital de tu empresa y protege información sensible de ser accedida meses después.',
      '## 2. Higiene digital: Menos ruido en tu bandeja',
      'Todos hemos sufrido el síndrome de los "grupos zombi": chats de eventos pasados que reviven meses después con mensajes irrelevantes. Con los chats efímeros, esto es imposible. Una vez cumplido su propósito, el canal desaparece, manteniendo tu bandeja de entrada limpia y enfocada en lo actual.',
      '## Conclusión',
      'Los chats efímeros son la solución perfecta para la coordinación puntual. Ofrecen todas las funcionalidades de una app de mensajería moderna sin comprometer tu privacidad ni saturar tu atención a largo plazo.'
    ],
    tags: ['privacidad', 'chat', 'efímero', 'seguridad', 'comunicación'],
    categories: ['product'],
    publishedAt: '2025-11-16T12:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 4
  },

  {
    postId: 'post-005',
    slug: 'ephemeral-group-chat',
    locale: 'en',
    title: 'Ephemeral Group Chats: Secure Communication That Self-Destructs',
    summary: 'Understand why temporary chats are the future of event coordination, protecting your privacy and keeping your digital history clean.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Secure chat interface showing countdown to self-destruction',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Privacy Matters: Why We Need Disappearing Chats',
      'In the digital age, data accumulation is a liability. Event chats in Cojauny are designed with an expiration principle: they irrevocably self-destruct 48 hours after the event concludes.',
      '## 1. No Permanent Digital Trace',
      'Unlike WhatsApp or Slack, where trivial logistical conversations remain archived indefinitely, Cojauny automatically wipes this data. This reduces your company\'s digital footprint and protects sensitive operational details from being accessed months later.',
      '## 2. Digital Hygiene: Less Noise in Your Inbox',
      'We\'ve all suffered from "zombie groups"—chats from past events that revive months later with irrelevant messages. With ephemeral chats, this is impossible. Once the purpose is served, the channel vanishes, keeping your inbox clean and focused on the present.',
      '## Conclusion',
      'Ephemeral chats are the perfect solution for ad-hoc coordination. They offer all the functionality of a modern messaging app without compromising your long-term privacy or cluttering your attention span.'
    ],
    tags: ['privacy', 'chat', 'ephemeral', 'security', 'communication'],
    categories: ['product'],
    publishedAt: '2025-11-16T12:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 4
  },

  {
    postId: 'post-005',
    slug: 'ephemeral-group-chat',
    locale: 'fr',
    title: 'Chats de groupe éphémères : Communication sécurisée qui s\'autodétruit',
    summary: 'Comprenez pourquoi les chats temporaires sont l\'avenir de la coordination d\'événements, protégeant votre vie privée et gardant votre historique numérique propre.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Interface de chat sécurisé montrant le compte à rebours',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# La confidentialité compte : Pourquoi nous avons besoin de chats qui disparaissent',
      'À l\'ère numérique, l\'accumulation de données est un risque. Les chats Cojauny sont conçus avec un principe d\'expiration : ils s\'autodétruisent irrévocablement 48 heures après la fin de l\'événement.',
      '## 1. Aucune trace numérique permanente',
      'Contrairement à WhatsApp ou Slack, où les conversations logistiques restent archivées indéfiniment, Cojauny efface automatiquement ces données. Cela réduit l\'empreinte numérique de votre entreprise et protège les informations sensibles.',
      '## 2. Hygiène numérique : Moins de bruit',
      'Nous avons tous subi les "groupes zombies" qui revivent des mois plus tard. Avec les chats éphémères, c\'est impossible. Une fois l\'objectif atteint, le canal disparaît, gardant votre boîte de réception propre.',
      '## Conclusion',
      'Les chats éphémères sont la solution parfaite pour la coordination ponctuelle, offrant fonctionnalité sans compromettre la confidentialité à long terme.'
    ],
    tags: ['confidentialité', 'chat', 'éphémère', 'sécurité', 'communication'],
    categories: ['product'],
    publishedAt: '2025-11-16T12:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Équipe Cojauny',
    readingTimeMinutes: 4
  },

  {
    postId: 'post-005',
    slug: 'ephemeral-group-chat',
    locale: 'de',
    title: 'Ephemere Gruppenchats: Sichere Kommunikation, die sich selbst zerstört',
    summary: 'Warum temporäre Chats die Zukunft der Eventkoordination sind – sie schützen deine Privatsphäre und halten deinen digitalen Verlauf sauber.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Sichere Chat-Oberfläche mit Selbstzerstörungs-Countdown',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Privatsphäre zählt: Warum wir verschwindende Chats brauchen',
      'Im digitalen Zeitalter ist Datenanhäufung ein Risiko. Cojauny-Chats basieren auf einem Verfallsprinzip: Sie zerstören sich 48 Stunden nach Eventende unwiderruflich selbst.',
      '## 1. Keine permanente digitale Spur',
      'Im Gegensatz zu WhatsApp oder Slack löscht Cojauny diese Daten automatisch. Das reduziert den digitalen Fußabdruck deines Unternehmens und schützt sensible Informationen vor späterem Zugriff.',
      '## 2. Digitale Hygiene: Weniger Rauschen',
      'Wir alle kennen "Zombie-Gruppen", die Monate später wieder aufleben. Mit ephemeren Chats ist das unmöglich. Sobald der Zweck erfüllt ist, verschwindet der Kanal und hält deinen Posteingang sauber.',
      '## Fazit',
      'Ephemere Chats sind die perfekte Lösung für punktuelle Koordination. Sie bieten moderne Messaging-Funktionen ohne langfristige Datenschutzrisiken.'
    ],
    tags: ['privatsphäre', 'chat', 'ephemer', 'sicherheit', 'kommunikation'],
    categories: ['product'],
    publishedAt: '2025-11-16T12:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Cojauny Team DACH',
    readingTimeMinutes: 4
  },

  // ============================================================================
  // POST-006: Automatic Cost Splitting
  // ============================================================================
  {
    postId: 'post-006',
    slug: 'automatic-cost-splitting',
    locale: 'es',
    title: 'División automática de costes: Finanzas claras para viajes en grupo',
    summary: 'Aprende a repartir gastos de taxi, comidas o alojamiento de forma justa y transparente, eliminando las hojas de cálculo y los conflictos financieros.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Gráfico visual mostrando la división equitativa de gastos entre usuarios',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Adiós a las hojas de cálculo de gastos y a los recibos perdidos',
      'La gestión de gastos compartidos es, tradicionalmente, la parte más tediosa de cualquier viaje en grupo. La función de división de costes de Cojauny automatiza este proceso, garantizando un reparto equitativo y transparente.',
      '## 1. Registra el gasto al momento, no después',
      'La memoria es frágil. Desde el evento en la app, toca "Añadir gasto", introduce el monto total y selecciona quién participa. Al hacerlo en tiempo real, evitas el olvido de pequeños gastos que suman grandes cantidades al final del viaje.',
      '## 2. División inteligente y flexible',
      'No todos los gastos son iguales. Nuestra herramienta te permite dividir a partes iguales o asignar porcentajes personalizados (ideal si alguien pidió extras en una cena o consumió más servicios). Esta flexibilidad previene resentimientos y asegura que cada uno pague lo justo.',
      '## Conclusión: Transparencia financiera',
      'Los equipos ahorran horas de contabilidad manual y evitan malentendidos incómodos sobre quién debe qué a quién. Con Cojauny, las cuentas claras conservan la amistad y la armonía del equipo.'
    ],
    tags: ['costes', 'división', 'finanzas', 'automatización', 'viajes'],
    categories: ['product'],
    publishedAt: '2025-11-17T13:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Equipo Cojauny',
    readingTimeMinutes: 5
  },

  {
    postId: 'post-006',
    slug: 'automatic-cost-splitting',
    locale: 'en',
    title: 'Automatic Cost Splitting: Clear Finances for Group Travel',
    summary: 'Learn how to split taxi, meal, or accommodation expenses fairly and transparently, eliminating spreadsheets and financial conflicts.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Visual chart showing equitable expense splitting among users',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Goodbye to Expense Spreadsheets and Lost Receipts',
      'Managing shared expenses is traditionally the most tedious part of any group trip. Cojauny\'s cost splitting feature automates this process, ensuring equitable and transparent distribution.',
      '## 1. Record Expenses on the Spot, Not Later',
      'Memory is unreliable. From the event in the app, tap "Add expense," enter the total amount and select participants. Doing this in real-time prevents forgetting small expenses that add up to significant amounts by the end of the trip.',
      '## 2. Smart and Flexible Division',
      'Not all expenses are equal. Our tool allows you to split equally or assign custom percentages (ideal if someone ordered extras at dinner). This flexibility prevents resentment and ensures everyone pays their fair share.',
      '## Conclusion: Financial Transparency',
      'Teams save hours of manual accounting and avoid awkward misunderstandings about who owes what. With Cojauny, clear accounts keep team harmony intact.'
    ],
    tags: ['costs', 'splitting', 'finance', 'automation', 'travel'],
    categories: ['product'],
    publishedAt: '2025-11-17T13:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Cojauny Team',
    readingTimeMinutes: 5
  },

  {
    postId: 'post-006',
    slug: 'automatic-cost-splitting',
    locale: 'fr',
    title: 'Division automatique des coûts : Finances claires pour voyages de groupe',
    summary: 'Apprenez à répartir les frais de taxi, repas ou hébergement de manière juste et transparente, en éliminant les feuilles de calcul et les conflits.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Graphique visuel montrant la répartition équitable des dépenses',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Adieu aux feuilles de calcul et aux reçus perdus',
      'La gestion des dépenses partagées est souvent fastidieuse. La fonction de répartition des coûts de Cojauny automatise ce processus, garantissant une distribution équitable.',
      '## 1. Enregistrer les dépenses sur le moment',
      'La mémoire est faillible. Depuis l\'événement, appuyez sur "Ajouter une dépense", saisissez le montant et sélectionnez les participants. Le faire en temps réel évite d\'oublier les petites dépenses.',
      '## 2. Division intelligente et flexible',
      'Notre outil permet de diviser également ou d\'attribuer des pourcentages personnalisés. Cette flexibilité évite les ressentiments et assure que chacun paie sa juste part.',
      '## Conclusion : Transparence financière',
      'Les équipes économisent des heures de comptabilité et évitent les malentendus. Avec Cojauny, les bons comptes font les bons amis.'
    ],
    tags: ['coûts', 'répartition', 'finances', 'automatisation', 'voyage'],
    categories: ['product'],
    publishedAt: '2025-11-17T13:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Équipe Cojauny',
    readingTimeMinutes: 5
  },

  {
    postId: 'post-006',
    slug: 'automatic-cost-splitting',
    locale: 'de',
    title: 'Automatische Kostenaufteilung: Klare Finanzen für Gruppenreisen',
    summary: 'Lerne, wie du Taxi-, Essens- oder Unterkunftskosten fair und transparent aufteilst – ohne Tabellen und finanzielle Konflikte.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Visuelles Diagramm zeigt gerechte Kostenaufteilung',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      '# Abschied von Ausgaben-Tabellen und verlorenen Belegen',
      'Das Management gemeinsamer Ausgaben ist oft mühsam. Cojaunys Kostenaufteilungs-Funktion automatisiert diesen Prozess und garantiert eine faire Verteilung.',
      '## 1. Ausgaben sofort erfassen',
      'Das Gedächtnis ist unzuverlässig. Tippe im Event auf "Ausgabe hinzufügen", gib den Betrag ein und wähle die Teilnehmer. So vergisst du keine kleinen Ausgaben, die sich summieren.',
      '## 2. Intelligente und flexible Aufteilung',
      'Unser Tool erlaubt das gleichmäßige Aufteilen oder benutzerdefinierte Prozentsätze. Diese Flexibilität verhindert Unmut und sorgt dafür, dass jeder seinen fairen Anteil zahlt.',
      '## Fazit: Finanzielle Transparenz',
      'Teams sparen Stunden manueller Buchhaltung und vermeiden peinliche Missverständnisse. Mit Cojauny bleiben die Finanzen klar und das Team harmonisch.'
    ],
    tags: ['kosten', 'aufteilung', 'finanzen', 'automatisierung', 'reisen'],
    categories: ['product'],
    publishedAt: '2025-11-17T13:00:00.000Z',
    updatedAt: '2025-11-23T12:00:00.000Z',
    author: 'Cojauny Team DACH',
    readingTimeMinutes: 5
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
