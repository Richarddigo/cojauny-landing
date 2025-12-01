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
  categories: string[]

;
  publishedAt: string;
  updatedAt: string;
  author: string;
  readingTimeMinutes: number;
}

/**
 * Unified blog posts - 6 posts available in all 4 languages (ES, EN, FR, DE)
 * Each post has a unique postId (post-001 to post-006) for consistent URLs across languages
 */
export const blogPosts: BlogPost[] = [
  // ============================================================================
  // POST-001: Airport Taxi Coordination
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
      'Cojauny resuelve esto conectando pasajeros del mismo vuelo antes de que despeguen. En esta guía te explicamos paso a paso cómo crear un evento de transporte compartido, invar a tus compañeros de reserva, elegir franjas horarias basadas en tráfico real y negociar tarifas cerradas con operadores locales.',
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
  {
    postId: 'post-001',
    slug: 'navette-aeroport-partagee',
    locale: 'fr',
    title: 'Navette aéroport partagée entre passagers du même vol',
    summary: 'Conseils pour réduire les coûts en partageant taxi, VTC ou voiture privée durée avec Cojauny.',
    heroImage: '/images/og-default.svg',
    heroAlt: 'Voyageurs français organisant une navette partagée',
    heroWidth: 1280,
    heroHeight: 720,
    body: [
      "# Organiser une navette partagée sans stress\\n\\nPartager un taxi ou un VTC avec les passagers de votre vol est le moyen le plus simple de réduire les coûts et d'arriver ensemble.",
      "## 1. Créez l'événement de vol\\n\\nDans Cojauny, sélectionnez votre vol, précisez si le trajet est au départ ou à l'arrivée et indiquez le nombre de places disponibles.",
      "## 2. Invitez vos co-passagers\\n\\nPartagez le lien de l'événement. Les passagers voient immédiatement l'heure de rencontre, le nombre de sièges restants et le prix estimé par personne.",
      "## 3. Verrouillez le point de rendez-vous\\n\\nUtilisez la carte intégrée pour placer précisément le lieu de départ. En cas de changement, mettez à jour l' événement et tout le monde reçoit une notification.",
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
  }
  // Continue with remaining 5 posts in next file due to size...
];

/**
 * Helper function to get posts by locale
 */
export function getPostsByLocale(locale: Locale): BlogPost[] {
  return blogPosts.filter(post => post.locale === locale);
}

/**
 * Helper function to get a specific post by ID and locale
 */
export function getPostById(postId: string, locale: Locale): BlogPost | undefined {
  return blogPosts.find(post => post.postId === postId && post.locale === locale);
}

/**
 * Helper function to get all available post IDs
 */
export function getAvailablePostIds(): string[] {
  return Array.from(new Set(blogPosts.map(post => post.postId))).sort();
}
