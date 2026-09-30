import type { Locale } from '@/locales/config';
import { airportBlogPosts } from './airport-blog-posts';

export interface BlogPost {
  postId: string;
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
    "postId": "post-001",
    "slug": "share-airport-ride",
    "locale": "en",
    "title": "Sharing an airport ride: what to agree on",
    "summary": "Agree on the route and total price. Sharing is not always worthwhile: include waiting and detours.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Sharing an airport ride: what to agree on",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Agree on the route and total price. Sharing is not always worthwhile: include waiting and detours.",
      "Cojauny is preparing a beta to connect people with compatible flight plans. This guide offers practical advice; it does not establish available features, transport partnerships or measured savings.",
      "Check date, terminal, timing and destination. People on the same flight may need different routes, carry different luggage or leave at different times. Agree on a waiting deadline and a public, permitted meeting point.",
      "Check the airport rules and licensed operator’s conditions. Confirm seats, luggage space, accessibility and total price before booking. Keep an independent backup when details remain uncertain. Do not publish identity documents, boarding passes or bank details in the group.",
      "A confirmed email does not establish someone’s identity or guarantee their behaviour. Deleting a chat does not erase other people’s screenshots or copies. Check the service’s policies and share only what coordination requires.",
      "[Join the beta waitlist](/#beta). Registration does not guarantee an invitation, coverage at a particular airport or a launch date.",
      "## More practical guides",
      "[Taxi, train or shared transfer: how to choose](/blog/airport-transfer-options)"
    ],
    "tags": [
      "airport transfer",
      "travel planning"
    ],
    "categories": [
      "travel planning"
    ],
    "publishedAt": "2025-11-10T08:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-001",
    "slug": "share-airport-ride",
    "locale": "es",
    "title": "Compartir un traslado: qué acordar",
    "summary": "Acordad la ruta y el coste total. Compartir no compensa siempre: considerad también la espera y los desvíos.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Compartir un traslado: qué acordar",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Acordad la ruta y el coste total. Compartir no compensa siempre: considerad también la espera y los desvíos.",
      "Cojauny prepara una beta para conectar a personas con planes de vuelo compatibles. Esta guía ofrece consejos de organización; no acredita funciones disponibles, operadores asociados ni resultados de ahorro.",
      "Comprueba fecha, terminal, hora y destino. Dos personas con el mismo vuelo pueden necesitar rutas diferentes, llevar distinto equipaje o salir a horas distintas. Acuerda una hora límite de espera y un punto de encuentro público y permitido.",
      "Consulta las condiciones del aeropuerto y del operador autorizado. Confirma plazas, espacio de equipaje, accesibilidad y precio total antes de reservar. Si faltan datos, conserva una alternativa independiente. No publiques documentos, tarjetas de embarque ni datos bancarios en el grupo.",
      "Un correo confirmado no demuestra la identidad de alguien ni garantiza su comportamiento. La eliminación de un chat tampoco borra capturas o copias ajenas. Consulta las políticas del servicio que utilices y comparte solo lo necesario.",
      "[Apúntate a la lista de espera](/es#beta). El registro no garantiza una invitación, cobertura en un aeropuerto concreto ni una fecha de lanzamiento.",
      "## También te puede ayudar",
      "[Taxi, tren o traslado compartido: cómo elegir](/es/blog/airport-transfer-options)"
    ],
    "tags": [
      "traslado aeropuerto",
      "planificación de viajes"
    ],
    "categories": [
      "planificación de viajes"
    ],
    "publishedAt": "2025-11-10T08:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-001",
    "slug": "share-airport-ride",
    "locale": "fr",
    "title": "Partager un transfert : les points à convenir",
    "summary": "Convenez du trajet et du prix total. Tenez compte de l’attente et des détours.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Partager un transfert : les points à convenir",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Convenez du trajet et du prix total. Tenez compte de l’attente et des détours.",
      "Cojauny prépare une bêta pour relier des personnes ayant des projets de vol compatibles. Ce guide donne des conseils pratiques ; il ne prouve pas la disponibilité de fonctions, partenariats ou économies mesurées.",
      "Vérifiez date, terminal, horaire et destination. Des personnes sur le même vol peuvent avoir des trajets, bagages et heures de départ différents. Fixez une limite d’attente et un rendez-vous public et autorisé.",
      "Consultez les règles de l’aéroport et du transporteur autorisé. Confirmez places, bagages, accessibilité et prix total avant de réserver. Gardez une alternative indépendante. Ne publiez ni documents d’identité, ni cartes d’embarquement, ni données bancaires dans le groupe.",
      "Un e-mail confirmé ne prouve pas l’identité et ne garantit pas le comportement. Supprimer un chat n’efface pas les captures ou copies des autres. Consultez les règles du service et partagez seulement le nécessaire.",
      "[Inscrivez-vous sur la liste d’attente](/fr#beta). L’inscription ne garantit ni invitation, ni disponibilité dans un aéroport précis, ni date de lancement.",
      "## Autres guides pratiques",
      "[Taxi, train ou transfert partagé : comment choisir](/fr/blog/airport-transfer-options)"
    ],
    "tags": [
      "transfert aéroport",
      "préparation du voyage"
    ],
    "categories": [
      "préparation du voyage"
    ],
    "publishedAt": "2025-11-10T08:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-001",
    "slug": "share-airport-ride",
    "locale": "de",
    "title": "Flughafentransfer teilen: Was ihr klären solltet",
    "summary": "Vereinbart Route und Gesamtpreis. Berücksichtigt beim Teilen auch Wartezeit und Umwege.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Flughafentransfer teilen: Was ihr klären solltet",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Vereinbart Route und Gesamtpreis. Berücksichtigt beim Teilen auch Wartezeit und Umwege.",
      "Cojauny bereitet eine Beta vor, die Menschen mit passenden Flugplänen verbinden soll. Dieser Leitfaden bietet praktische Hinweise; er belegt keine verfügbaren Funktionen, Kooperationen oder gemessenen Einsparungen.",
      "Prüfe Datum, Terminal, Uhrzeit und Ziel. Menschen auf demselben Flug können verschiedene Ziele, Gepäckmengen oder Abfahrtszeiten haben. Vereinbart eine Wartefrist und einen öffentlichen, erlaubten Treffpunkt.",
      "Prüfe Flughafenregeln und Bedingungen des zugelassenen Anbieters. Kläre Sitzplätze, Gepäckraum, Barrierefreiheit und Gesamtpreis vor der Buchung. Halte eine unabhängige Alternative bereit. Veröffentliche keine Ausweise, Bordkarten oder Bankdaten in der Gruppe.",
      "Eine bestätigte E-Mail-Adresse ist kein Identitätsnachweis und garantiert kein Verhalten. Gelöschte Chats entfernen keine fremden Screenshots oder Kopien. Prüfe die Regeln des Dienstes und teile nur nötige Daten.",
      "[Trag dich in die Beta-Warteliste ein](/de#beta). Die Anmeldung garantiert weder eine Einladung noch einen bestimmten Flughafen oder Starttermin.",
      "## Weitere praktische Tipps",
      "[Taxi, Bahn oder geteilter Transfer: So entscheidest du](/de/blog/airport-transfer-options)"
    ],
    "tags": [
      "Flughafentransfer",
      "Reiseplanung"
    ],
    "categories": [
      "Reiseplanung"
    ],
    "publishedAt": "2025-11-10T08:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-002",
    "slug": "real-time-flight-coordination",
    "locale": "en",
    "title": "Coordinating a transfer when a flight changes",
    "summary": "Check airline information and reconfirm pickup after a delay. Do not assume an app automatically updates the driver.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Coordinating a transfer when a flight changes",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Check airline information and reconfirm pickup after a delay. Do not assume an app automatically updates the driver.",
      "Cojauny is preparing a beta to connect people with compatible flight plans. This guide offers practical advice; it does not establish available features, transport partnerships or measured savings.",
      "Check date, terminal, timing and destination. People on the same flight may need different routes, carry different luggage or leave at different times. Agree on a waiting deadline and a public, permitted meeting point.",
      "Check the airport rules and licensed operator’s conditions. Confirm seats, luggage space, accessibility and total price before booking. Keep an independent backup when details remain uncertain. Do not publish identity documents, boarding passes or bank details in the group.",
      "A confirmed email does not establish someone’s identity or guarantee their behaviour. Deleting a chat does not erase other people’s screenshots or copies. Check the service’s policies and share only what coordination requires.",
      "[Join the beta waitlist](/#beta). Registration does not guarantee an invitation, coverage at a particular airport or a launch date.",
      "## More practical guides",
      "[Late arrival: prepare a transfer backup plan](/blog/late-arrival-airport-transfer-plan)"
    ],
    "tags": [
      "airport transfer",
      "travel planning"
    ],
    "categories": [
      "travel planning"
    ],
    "publishedAt": "2025-11-12T09:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-002",
    "slug": "real-time-flight-coordination",
    "locale": "es",
    "title": "Coordinar un traslado cuando cambia el vuelo",
    "summary": "Consulta a la aerolínea y vuelve a confirmar la recogida tras un retraso. No asumas que una app avisará automáticamente al conductor.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Coordinar un traslado cuando cambia el vuelo",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Consulta a la aerolínea y vuelve a confirmar la recogida tras un retraso. No asumas que una app avisará automáticamente al conductor.",
      "Cojauny prepara una beta para conectar a personas con planes de vuelo compatibles. Esta guía ofrece consejos de organización; no acredita funciones disponibles, operadores asociados ni resultados de ahorro.",
      "Comprueba fecha, terminal, hora y destino. Dos personas con el mismo vuelo pueden necesitar rutas diferentes, llevar distinto equipaje o salir a horas distintas. Acuerda una hora límite de espera y un punto de encuentro público y permitido.",
      "Consulta las condiciones del aeropuerto y del operador autorizado. Confirma plazas, espacio de equipaje, accesibilidad y precio total antes de reservar. Si faltan datos, conserva una alternativa independiente. No publiques documentos, tarjetas de embarque ni datos bancarios en el grupo.",
      "Un correo confirmado no demuestra la identidad de alguien ni garantiza su comportamiento. La eliminación de un chat tampoco borra capturas o copias ajenas. Consulta las políticas del servicio que utilices y comparte solo lo necesario.",
      "[Apúntate a la lista de espera](/es#beta). El registro no garantiza una invitación, cobertura en un aeropuerto concreto ni una fecha de lanzamiento.",
      "## También te puede ayudar",
      "[Llegar tarde: prepara un plan B para el traslado](/es/blog/late-arrival-airport-transfer-plan)"
    ],
    "tags": [
      "traslado aeropuerto",
      "planificación de viajes"
    ],
    "categories": [
      "planificación de viajes"
    ],
    "publishedAt": "2025-11-12T09:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-002",
    "slug": "real-time-flight-coordination",
    "locale": "fr",
    "title": "Organiser un transfert quand le vol change",
    "summary": "Consultez la compagnie et reconfirmez la prise en charge après un retard. Ne supposez pas une notification automatique au conducteur.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Organiser un transfert quand le vol change",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Consultez la compagnie et reconfirmez la prise en charge après un retard. Ne supposez pas une notification automatique au conducteur.",
      "Cojauny prépare une bêta pour relier des personnes ayant des projets de vol compatibles. Ce guide donne des conseils pratiques ; il ne prouve pas la disponibilité de fonctions, partenariats ou économies mesurées.",
      "Vérifiez date, terminal, horaire et destination. Des personnes sur le même vol peuvent avoir des trajets, bagages et heures de départ différents. Fixez une limite d’attente et un rendez-vous public et autorisé.",
      "Consultez les règles de l’aéroport et du transporteur autorisé. Confirmez places, bagages, accessibilité et prix total avant de réserver. Gardez une alternative indépendante. Ne publiez ni documents d’identité, ni cartes d’embarquement, ni données bancaires dans le groupe.",
      "Un e-mail confirmé ne prouve pas l’identité et ne garantit pas le comportement. Supprimer un chat n’efface pas les captures ou copies des autres. Consultez les règles du service et partagez seulement le nécessaire.",
      "[Inscrivez-vous sur la liste d’attente](/fr#beta). L’inscription ne garantit ni invitation, ni disponibilité dans un aéroport précis, ni date de lancement.",
      "## Autres guides pratiques",
      "[Arrivée tardive : prévoir un plan B](/fr/blog/late-arrival-airport-transfer-plan)"
    ],
    "tags": [
      "transfert aéroport",
      "préparation du voyage"
    ],
    "categories": [
      "préparation du voyage"
    ],
    "publishedAt": "2025-11-12T09:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-002",
    "slug": "real-time-flight-coordination",
    "locale": "de",
    "title": "Transfer abstimmen, wenn sich der Flug ändert",
    "summary": "Prüfe die Airline-Angaben und bestätige die Abholung bei Verspätung erneut. Automatische Fahrerupdates sind nicht vorauszusetzen.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Transfer abstimmen, wenn sich der Flug ändert",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Prüfe die Airline-Angaben und bestätige die Abholung bei Verspätung erneut. Automatische Fahrerupdates sind nicht vorauszusetzen.",
      "Cojauny bereitet eine Beta vor, die Menschen mit passenden Flugplänen verbinden soll. Dieser Leitfaden bietet praktische Hinweise; er belegt keine verfügbaren Funktionen, Kooperationen oder gemessenen Einsparungen.",
      "Prüfe Datum, Terminal, Uhrzeit und Ziel. Menschen auf demselben Flug können verschiedene Ziele, Gepäckmengen oder Abfahrtszeiten haben. Vereinbart eine Wartefrist und einen öffentlichen, erlaubten Treffpunkt.",
      "Prüfe Flughafenregeln und Bedingungen des zugelassenen Anbieters. Kläre Sitzplätze, Gepäckraum, Barrierefreiheit und Gesamtpreis vor der Buchung. Halte eine unabhängige Alternative bereit. Veröffentliche keine Ausweise, Bordkarten oder Bankdaten in der Gruppe.",
      "Eine bestätigte E-Mail-Adresse ist kein Identitätsnachweis und garantiert kein Verhalten. Gelöschte Chats entfernen keine fremden Screenshots oder Kopien. Prüfe die Regeln des Dienstes und teile nur nötige Daten.",
      "[Trag dich in die Beta-Warteliste ein](/de#beta). Die Anmeldung garantiert weder eine Einladung noch einen bestimmten Flughafen oder Starttermin.",
      "## Weitere praktische Tipps",
      "[Späte Ankunft: Plan B für den Transfer](/de/blog/late-arrival-airport-transfer-plan)"
    ],
    "tags": [
      "Flughafentransfer",
      "Reiseplanung"
    ],
    "categories": [
      "Reiseplanung"
    ],
    "publishedAt": "2025-11-12T09:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-003",
    "slug": "minibus-team-coordination",
    "locale": "en",
    "title": "Planning a small group transfer",
    "summary": "Request a quote for the whole group including luggage and accessibility needs. Choose one contact person and check cancellation terms.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Planning a small group transfer",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Request a quote for the whole group including luggage and accessibility needs. Choose one contact person and check cancellation terms.",
      "Cojauny is preparing a beta to connect people with compatible flight plans. This guide offers practical advice; it does not establish available features, transport partnerships or measured savings.",
      "Check date, terminal, timing and destination. People on the same flight may need different routes, carry different luggage or leave at different times. Agree on a waiting deadline and a public, permitted meeting point.",
      "Check the airport rules and licensed operator’s conditions. Confirm seats, luggage space, accessibility and total price before booking. Keep an independent backup when details remain uncertain. Do not publish identity documents, boarding passes or bank details in the group.",
      "A confirmed email does not establish someone’s identity or guarantee their behaviour. Deleting a chat does not erase other people’s screenshots or copies. Check the service’s policies and share only what coordination requires.",
      "[Join the beta waitlist](/#beta). Registration does not guarantee an invitation, coverage at a particular airport or a launch date.",
      "## More practical guides",
      "[A checklist for sharing an airport ride](/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "airport transfer",
      "travel planning"
    ],
    "categories": [
      "travel planning"
    ],
    "publishedAt": "2025-11-14T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-003",
    "slug": "minibus-team-coordination",
    "locale": "es",
    "title": "Organizar el traslado de un grupo pequeño",
    "summary": "Solicita un presupuesto para todo el grupo con equipaje y necesidades de accesibilidad. Designa una persona de contacto y revisa la cancelación.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Organizar el traslado de un grupo pequeño",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Solicita un presupuesto para todo el grupo con equipaje y necesidades de accesibilidad. Designa una persona de contacto y revisa la cancelación.",
      "Cojauny prepara una beta para conectar a personas con planes de vuelo compatibles. Esta guía ofrece consejos de organización; no acredita funciones disponibles, operadores asociados ni resultados de ahorro.",
      "Comprueba fecha, terminal, hora y destino. Dos personas con el mismo vuelo pueden necesitar rutas diferentes, llevar distinto equipaje o salir a horas distintas. Acuerda una hora límite de espera y un punto de encuentro público y permitido.",
      "Consulta las condiciones del aeropuerto y del operador autorizado. Confirma plazas, espacio de equipaje, accesibilidad y precio total antes de reservar. Si faltan datos, conserva una alternativa independiente. No publiques documentos, tarjetas de embarque ni datos bancarios en el grupo.",
      "Un correo confirmado no demuestra la identidad de alguien ni garantiza su comportamiento. La eliminación de un chat tampoco borra capturas o copias ajenas. Consulta las políticas del servicio que utilices y comparte solo lo necesario.",
      "[Apúntate a la lista de espera](/es#beta). El registro no garantiza una invitación, cobertura en un aeropuerto concreto ni una fecha de lanzamiento.",
      "## También te puede ayudar",
      "[Lista de comprobación para compartir un traslado](/es/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "traslado aeropuerto",
      "planificación de viajes"
    ],
    "categories": [
      "planificación de viajes"
    ],
    "publishedAt": "2025-11-14T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-003",
    "slug": "minibus-team-coordination",
    "locale": "fr",
    "title": "Préparer le transfert d’un petit groupe",
    "summary": "Demandez un devis pour tout le groupe, bagages et accessibilité compris. Désignez un contact et vérifiez les conditions d’annulation.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Préparer le transfert d’un petit groupe",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Demandez un devis pour tout le groupe, bagages et accessibilité compris. Désignez un contact et vérifiez les conditions d’annulation.",
      "Cojauny prépare une bêta pour relier des personnes ayant des projets de vol compatibles. Ce guide donne des conseils pratiques ; il ne prouve pas la disponibilité de fonctions, partenariats ou économies mesurées.",
      "Vérifiez date, terminal, horaire et destination. Des personnes sur le même vol peuvent avoir des trajets, bagages et heures de départ différents. Fixez une limite d’attente et un rendez-vous public et autorisé.",
      "Consultez les règles de l’aéroport et du transporteur autorisé. Confirmez places, bagages, accessibilité et prix total avant de réserver. Gardez une alternative indépendante. Ne publiez ni documents d’identité, ni cartes d’embarquement, ni données bancaires dans le groupe.",
      "Un e-mail confirmé ne prouve pas l’identité et ne garantit pas le comportement. Supprimer un chat n’efface pas les captures ou copies des autres. Consultez les règles du service et partagez seulement le nécessaire.",
      "[Inscrivez-vous sur la liste d’attente](/fr#beta). L’inscription ne garantit ni invitation, ni disponibilité dans un aéroport précis, ni date de lancement.",
      "## Autres guides pratiques",
      "[Liste de contrôle pour partager un transfert](/fr/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "transfert aéroport",
      "préparation du voyage"
    ],
    "categories": [
      "préparation du voyage"
    ],
    "publishedAt": "2025-11-14T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-003",
    "slug": "minibus-team-coordination",
    "locale": "de",
    "title": "Transfer für eine kleine Gruppe planen",
    "summary": "Fordere ein Angebot für die ganze Gruppe mit Gepäck und Barrierefreiheit an. Benenne eine Kontaktperson und prüfe Stornobedingungen.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Transfer für eine kleine Gruppe planen",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Fordere ein Angebot für die ganze Gruppe mit Gepäck und Barrierefreiheit an. Benenne eine Kontaktperson und prüfe Stornobedingungen.",
      "Cojauny bereitet eine Beta vor, die Menschen mit passenden Flugplänen verbinden soll. Dieser Leitfaden bietet praktische Hinweise; er belegt keine verfügbaren Funktionen, Kooperationen oder gemessenen Einsparungen.",
      "Prüfe Datum, Terminal, Uhrzeit und Ziel. Menschen auf demselben Flug können verschiedene Ziele, Gepäckmengen oder Abfahrtszeiten haben. Vereinbart eine Wartefrist und einen öffentlichen, erlaubten Treffpunkt.",
      "Prüfe Flughafenregeln und Bedingungen des zugelassenen Anbieters. Kläre Sitzplätze, Gepäckraum, Barrierefreiheit und Gesamtpreis vor der Buchung. Halte eine unabhängige Alternative bereit. Veröffentliche keine Ausweise, Bordkarten oder Bankdaten in der Gruppe.",
      "Eine bestätigte E-Mail-Adresse ist kein Identitätsnachweis und garantiert kein Verhalten. Gelöschte Chats entfernen keine fremden Screenshots oder Kopien. Prüfe die Regeln des Dienstes und teile nur nötige Daten.",
      "[Trag dich in die Beta-Warteliste ein](/de#beta). Die Anmeldung garantiert weder eine Einladung noch einen bestimmten Flughafen oder Starttermin.",
      "## Weitere praktische Tipps",
      "[Checkliste für einen gemeinsamen Flughafentransfer](/de/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "Flughafentransfer",
      "Reiseplanung"
    ],
    "categories": [
      "Reiseplanung"
    ],
    "publishedAt": "2025-11-14T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-004",
    "slug": "real-time-location-sharing",
    "locale": "en",
    "title": "Sharing your location for a meeting",
    "summary": "A fixed pin may be enough. If another tool supports live location, limit its duration and switch it off afterwards. This capability is not confirmed for the beta.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Sharing your location for a meeting",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "A fixed pin may be enough. If another tool supports live location, limit its duration and switch it off afterwards. This capability is not confirmed for the beta.",
      "Cojauny is preparing a beta to connect people with compatible flight plans. This guide offers practical advice; it does not establish available features, transport partnerships or measured savings.",
      "Check date, terminal, timing and destination. People on the same flight may need different routes, carry different luggage or leave at different times. Agree on a waiting deadline and a public, permitted meeting point.",
      "Check the airport rules and licensed operator’s conditions. Confirm seats, luggage space, accessibility and total price before booking. Keep an independent backup when details remain uncertain. Do not publish identity documents, boarding passes or bank details in the group.",
      "A confirmed email does not establish someone’s identity or guarantee their behaviour. Deleting a chat does not erase other people’s screenshots or copies. Check the service’s policies and share only what coordination requires.",
      "[Join the beta waitlist](/#beta). Registration does not guarantee an invitation, coverage at a particular airport or a launch date.",
      "## More practical guides",
      "[A checklist for sharing an airport ride](/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "airport transfer",
      "travel planning"
    ],
    "categories": [
      "travel planning"
    ],
    "publishedAt": "2025-11-15T11:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-004",
    "slug": "real-time-location-sharing",
    "locale": "es",
    "title": "Compartir ubicación durante un encuentro",
    "summary": "Un punto fijo puede bastar. Si otra herramienta permite ubicación en directo, limita la duración y desactívala después. Esta capacidad no está confirmada para la beta.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Compartir ubicación durante un encuentro",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Un punto fijo puede bastar. Si otra herramienta permite ubicación en directo, limita la duración y desactívala después. Esta capacidad no está confirmada para la beta.",
      "Cojauny prepara una beta para conectar a personas con planes de vuelo compatibles. Esta guía ofrece consejos de organización; no acredita funciones disponibles, operadores asociados ni resultados de ahorro.",
      "Comprueba fecha, terminal, hora y destino. Dos personas con el mismo vuelo pueden necesitar rutas diferentes, llevar distinto equipaje o salir a horas distintas. Acuerda una hora límite de espera y un punto de encuentro público y permitido.",
      "Consulta las condiciones del aeropuerto y del operador autorizado. Confirma plazas, espacio de equipaje, accesibilidad y precio total antes de reservar. Si faltan datos, conserva una alternativa independiente. No publiques documentos, tarjetas de embarque ni datos bancarios en el grupo.",
      "Un correo confirmado no demuestra la identidad de alguien ni garantiza su comportamiento. La eliminación de un chat tampoco borra capturas o copias ajenas. Consulta las políticas del servicio que utilices y comparte solo lo necesario.",
      "[Apúntate a la lista de espera](/es#beta). El registro no garantiza una invitación, cobertura en un aeropuerto concreto ni una fecha de lanzamiento.",
      "## También te puede ayudar",
      "[Lista de comprobación para compartir un traslado](/es/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "traslado aeropuerto",
      "planificación de viajes"
    ],
    "categories": [
      "planificación de viajes"
    ],
    "publishedAt": "2025-11-15T11:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-004",
    "slug": "real-time-location-sharing",
    "locale": "fr",
    "title": "Partager sa position pour un rendez-vous",
    "summary": "Un point fixe peut suffire. Limitez la durée du partage en direct et désactivez-le ensuite. Cette fonction n’est pas confirmée pour la bêta.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Partager sa position pour un rendez-vous",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Un point fixe peut suffire. Limitez la durée du partage en direct et désactivez-le ensuite. Cette fonction n’est pas confirmée pour la bêta.",
      "Cojauny prépare une bêta pour relier des personnes ayant des projets de vol compatibles. Ce guide donne des conseils pratiques ; il ne prouve pas la disponibilité de fonctions, partenariats ou économies mesurées.",
      "Vérifiez date, terminal, horaire et destination. Des personnes sur le même vol peuvent avoir des trajets, bagages et heures de départ différents. Fixez une limite d’attente et un rendez-vous public et autorisé.",
      "Consultez les règles de l’aéroport et du transporteur autorisé. Confirmez places, bagages, accessibilité et prix total avant de réserver. Gardez une alternative indépendante. Ne publiez ni documents d’identité, ni cartes d’embarquement, ni données bancaires dans le groupe.",
      "Un e-mail confirmé ne prouve pas l’identité et ne garantit pas le comportement. Supprimer un chat n’efface pas les captures ou copies des autres. Consultez les règles du service et partagez seulement le nécessaire.",
      "[Inscrivez-vous sur la liste d’attente](/fr#beta). L’inscription ne garantit ni invitation, ni disponibilité dans un aéroport précis, ni date de lancement.",
      "## Autres guides pratiques",
      "[Liste de contrôle pour partager un transfert](/fr/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "transfert aéroport",
      "préparation du voyage"
    ],
    "categories": [
      "préparation du voyage"
    ],
    "publishedAt": "2025-11-15T11:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-004",
    "slug": "real-time-location-sharing",
    "locale": "de",
    "title": "Standort für ein Treffen teilen",
    "summary": "Ein fester Treffpunkt kann genügen. Begrenzt bei Live-Standortfreigabe die Dauer und beendet sie danach. Diese Funktion ist für die Beta nicht bestätigt.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Standort für ein Treffen teilen",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Ein fester Treffpunkt kann genügen. Begrenzt bei Live-Standortfreigabe die Dauer und beendet sie danach. Diese Funktion ist für die Beta nicht bestätigt.",
      "Cojauny bereitet eine Beta vor, die Menschen mit passenden Flugplänen verbinden soll. Dieser Leitfaden bietet praktische Hinweise; er belegt keine verfügbaren Funktionen, Kooperationen oder gemessenen Einsparungen.",
      "Prüfe Datum, Terminal, Uhrzeit und Ziel. Menschen auf demselben Flug können verschiedene Ziele, Gepäckmengen oder Abfahrtszeiten haben. Vereinbart eine Wartefrist und einen öffentlichen, erlaubten Treffpunkt.",
      "Prüfe Flughafenregeln und Bedingungen des zugelassenen Anbieters. Kläre Sitzplätze, Gepäckraum, Barrierefreiheit und Gesamtpreis vor der Buchung. Halte eine unabhängige Alternative bereit. Veröffentliche keine Ausweise, Bordkarten oder Bankdaten in der Gruppe.",
      "Eine bestätigte E-Mail-Adresse ist kein Identitätsnachweis und garantiert kein Verhalten. Gelöschte Chats entfernen keine fremden Screenshots oder Kopien. Prüfe die Regeln des Dienstes und teile nur nötige Daten.",
      "[Trag dich in die Beta-Warteliste ein](/de#beta). Die Anmeldung garantiert weder eine Einladung noch einen bestimmten Flughafen oder Starttermin.",
      "## Weitere praktische Tipps",
      "[Checkliste für einen gemeinsamen Flughafentransfer](/de/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "Flughafentransfer",
      "Reiseplanung"
    ],
    "categories": [
      "Reiseplanung"
    ],
    "publishedAt": "2025-11-15T11:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-005",
    "slug": "ephemeral-group-chat",
    "locale": "en",
    "title": "What to share in a travel chat",
    "summary": "Keep the chat focused on timing, meeting points and changes. Do not assume offline access or automatic deletion; check the service’s features.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "What to share in a travel chat",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Keep the chat focused on timing, meeting points and changes. Do not assume offline access or automatic deletion; check the service’s features.",
      "Cojauny is preparing a beta to connect people with compatible flight plans. This guide offers practical advice; it does not establish available features, transport partnerships or measured savings.",
      "Check date, terminal, timing and destination. People on the same flight may need different routes, carry different luggage or leave at different times. Agree on a waiting deadline and a public, permitted meeting point.",
      "Check the airport rules and licensed operator’s conditions. Confirm seats, luggage space, accessibility and total price before booking. Keep an independent backup when details remain uncertain. Do not publish identity documents, boarding passes or bank details in the group.",
      "A confirmed email does not establish someone’s identity or guarantee their behaviour. Deleting a chat does not erase other people’s screenshots or copies. Check the service’s policies and share only what coordination requires.",
      "[Join the beta waitlist](/#beta). Registration does not guarantee an invitation, coverage at a particular airport or a launch date.",
      "## More practical guides",
      "[A checklist for sharing an airport ride](/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "airport transfer",
      "travel planning"
    ],
    "categories": [
      "travel planning"
    ],
    "publishedAt": "2025-11-16T12:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-005",
    "slug": "ephemeral-group-chat",
    "locale": "es",
    "title": "Qué compartir en un chat de viaje",
    "summary": "Mantén el chat centrado en hora, encuentro y cambios. No presupongas acceso sin conexión ni borrado automático; verifica las funciones del servicio.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Qué compartir en un chat de viaje",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Mantén el chat centrado en hora, encuentro y cambios. No presupongas acceso sin conexión ni borrado automático; verifica las funciones del servicio.",
      "Cojauny prepara una beta para conectar a personas con planes de vuelo compatibles. Esta guía ofrece consejos de organización; no acredita funciones disponibles, operadores asociados ni resultados de ahorro.",
      "Comprueba fecha, terminal, hora y destino. Dos personas con el mismo vuelo pueden necesitar rutas diferentes, llevar distinto equipaje o salir a horas distintas. Acuerda una hora límite de espera y un punto de encuentro público y permitido.",
      "Consulta las condiciones del aeropuerto y del operador autorizado. Confirma plazas, espacio de equipaje, accesibilidad y precio total antes de reservar. Si faltan datos, conserva una alternativa independiente. No publiques documentos, tarjetas de embarque ni datos bancarios en el grupo.",
      "Un correo confirmado no demuestra la identidad de alguien ni garantiza su comportamiento. La eliminación de un chat tampoco borra capturas o copias ajenas. Consulta las políticas del servicio que utilices y comparte solo lo necesario.",
      "[Apúntate a la lista de espera](/es#beta). El registro no garantiza una invitación, cobertura en un aeropuerto concreto ni una fecha de lanzamiento.",
      "## También te puede ayudar",
      "[Lista de comprobación para compartir un traslado](/es/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "traslado aeropuerto",
      "planificación de viajes"
    ],
    "categories": [
      "planificación de viajes"
    ],
    "publishedAt": "2025-11-16T12:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-005",
    "slug": "ephemeral-group-chat",
    "locale": "fr",
    "title": "Que partager dans un groupe de voyage",
    "summary": "Limitez le chat aux horaires, au rendez-vous et aux changements. Vérifiez les fonctions avant de supposer un accès hors ligne ou une suppression automatique.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Que partager dans un groupe de voyage",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Limitez le chat aux horaires, au rendez-vous et aux changements. Vérifiez les fonctions avant de supposer un accès hors ligne ou une suppression automatique.",
      "Cojauny prépare une bêta pour relier des personnes ayant des projets de vol compatibles. Ce guide donne des conseils pratiques ; il ne prouve pas la disponibilité de fonctions, partenariats ou économies mesurées.",
      "Vérifiez date, terminal, horaire et destination. Des personnes sur le même vol peuvent avoir des trajets, bagages et heures de départ différents. Fixez une limite d’attente et un rendez-vous public et autorisé.",
      "Consultez les règles de l’aéroport et du transporteur autorisé. Confirmez places, bagages, accessibilité et prix total avant de réserver. Gardez une alternative indépendante. Ne publiez ni documents d’identité, ni cartes d’embarquement, ni données bancaires dans le groupe.",
      "Un e-mail confirmé ne prouve pas l’identité et ne garantit pas le comportement. Supprimer un chat n’efface pas les captures ou copies des autres. Consultez les règles du service et partagez seulement le nécessaire.",
      "[Inscrivez-vous sur la liste d’attente](/fr#beta). L’inscription ne garantit ni invitation, ni disponibilité dans un aéroport précis, ni date de lancement.",
      "## Autres guides pratiques",
      "[Liste de contrôle pour partager un transfert](/fr/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "transfert aéroport",
      "préparation du voyage"
    ],
    "categories": [
      "préparation du voyage"
    ],
    "publishedAt": "2025-11-16T12:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-005",
    "slug": "ephemeral-group-chat",
    "locale": "de",
    "title": "Was in einen Reisechat gehört",
    "summary": "Konzentriere den Chat auf Zeiten, Treffpunkt und Änderungen. Offline-Zugang oder automatische Löschung sind beim Dienst zu prüfen.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Was in einen Reisechat gehört",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Konzentriere den Chat auf Zeiten, Treffpunkt und Änderungen. Offline-Zugang oder automatische Löschung sind beim Dienst zu prüfen.",
      "Cojauny bereitet eine Beta vor, die Menschen mit passenden Flugplänen verbinden soll. Dieser Leitfaden bietet praktische Hinweise; er belegt keine verfügbaren Funktionen, Kooperationen oder gemessenen Einsparungen.",
      "Prüfe Datum, Terminal, Uhrzeit und Ziel. Menschen auf demselben Flug können verschiedene Ziele, Gepäckmengen oder Abfahrtszeiten haben. Vereinbart eine Wartefrist und einen öffentlichen, erlaubten Treffpunkt.",
      "Prüfe Flughafenregeln und Bedingungen des zugelassenen Anbieters. Kläre Sitzplätze, Gepäckraum, Barrierefreiheit und Gesamtpreis vor der Buchung. Halte eine unabhängige Alternative bereit. Veröffentliche keine Ausweise, Bordkarten oder Bankdaten in der Gruppe.",
      "Eine bestätigte E-Mail-Adresse ist kein Identitätsnachweis und garantiert kein Verhalten. Gelöschte Chats entfernen keine fremden Screenshots oder Kopien. Prüfe die Regeln des Dienstes und teile nur nötige Daten.",
      "[Trag dich in die Beta-Warteliste ein](/de#beta). Die Anmeldung garantiert weder eine Einladung noch einen bestimmten Flughafen oder Starttermin.",
      "## Weitere praktische Tipps",
      "[Checkliste für einen gemeinsamen Flughafentransfer](/de/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "Flughafentransfer",
      "Reiseplanung"
    ],
    "categories": [
      "Reiseplanung"
    ],
    "publishedAt": "2025-11-16T12:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-006",
    "slug": "automatic-cost-splitting",
    "locale": "en",
    "title": "Splitting transport costs clearly",
    "summary": "For an illustrative €40 total, two pay €20 each and four €10 each. With three, two pay €13.33 and one €13.34. This is not a real fare or guaranteed saving.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Splitting transport costs clearly",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "For an illustrative €40 total, two pay €20 each and four €10 each. With three, two pay €13.33 and one €13.34. This is not a real fare or guaranteed saving.",
      "Cojauny is preparing a beta to connect people with compatible flight plans. This guide offers practical advice; it does not establish available features, transport partnerships or measured savings.",
      "Check date, terminal, timing and destination. People on the same flight may need different routes, carry different luggage or leave at different times. Agree on a waiting deadline and a public, permitted meeting point.",
      "Check the airport rules and licensed operator’s conditions. Confirm seats, luggage space, accessibility and total price before booking. Keep an independent backup when details remain uncertain. Do not publish identity documents, boarding passes or bank details in the group.",
      "A confirmed email does not establish someone’s identity or guarantee their behaviour. Deleting a chat does not erase other people’s screenshots or copies. Check the service’s policies and share only what coordination requires.",
      "[Join the beta waitlist](/#beta). Registration does not guarantee an invitation, coverage at a particular airport or a launch date.",
      "## More practical guides",
      "[How to split an airport taxi fare](/blog/split-airport-taxi-cost)"
    ],
    "tags": [
      "airport transfer",
      "travel planning"
    ],
    "categories": [
      "travel planning"
    ],
    "publishedAt": "2025-11-17T13:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-006",
    "slug": "automatic-cost-splitting",
    "locale": "es",
    "title": "Repartir gastos de transporte con claridad",
    "summary": "Para un total ilustrativo de 40 €, dos pagan 20 € cada uno y cuatro, 10 €. Con tres, dos pagan 13,33 € y uno 13,34 €. No es una tarifa real ni un ahorro garantizado.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Repartir gastos de transporte con claridad",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Para un total ilustrativo de 40 €, dos pagan 20 € cada uno y cuatro, 10 €. Con tres, dos pagan 13,33 € y uno 13,34 €. No es una tarifa real ni un ahorro garantizado.",
      "Cojauny prepara una beta para conectar a personas con planes de vuelo compatibles. Esta guía ofrece consejos de organización; no acredita funciones disponibles, operadores asociados ni resultados de ahorro.",
      "Comprueba fecha, terminal, hora y destino. Dos personas con el mismo vuelo pueden necesitar rutas diferentes, llevar distinto equipaje o salir a horas distintas. Acuerda una hora límite de espera y un punto de encuentro público y permitido.",
      "Consulta las condiciones del aeropuerto y del operador autorizado. Confirma plazas, espacio de equipaje, accesibilidad y precio total antes de reservar. Si faltan datos, conserva una alternativa independiente. No publiques documentos, tarjetas de embarque ni datos bancarios en el grupo.",
      "Un correo confirmado no demuestra la identidad de alguien ni garantiza su comportamiento. La eliminación de un chat tampoco borra capturas o copias ajenas. Consulta las políticas del servicio que utilices y comparte solo lo necesario.",
      "[Apúntate a la lista de espera](/es#beta). El registro no garantiza una invitación, cobertura en un aeropuerto concreto ni una fecha de lanzamiento.",
      "## También te puede ayudar",
      "[Cómo repartir el coste de un taxi al aeropuerto](/es/blog/split-airport-taxi-cost)"
    ],
    "tags": [
      "traslado aeropuerto",
      "planificación de viajes"
    ],
    "categories": [
      "planificación de viajes"
    ],
    "publishedAt": "2025-11-17T13:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-006",
    "slug": "automatic-cost-splitting",
    "locale": "fr",
    "title": "Répartir clairement les frais de transport",
    "summary": "Pour un total illustratif de 40 €, deux paient 20 € chacun et quatre 10 €. À trois, deux paient 13,33 € et un 13,34 €. Ce n’est pas un tarif réel ni une économie garantie.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Répartir clairement les frais de transport",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Pour un total illustratif de 40 €, deux paient 20 € chacun et quatre 10 €. À trois, deux paient 13,33 € et un 13,34 €. Ce n’est pas un tarif réel ni une économie garantie.",
      "Cojauny prépare une bêta pour relier des personnes ayant des projets de vol compatibles. Ce guide donne des conseils pratiques ; il ne prouve pas la disponibilité de fonctions, partenariats ou économies mesurées.",
      "Vérifiez date, terminal, horaire et destination. Des personnes sur le même vol peuvent avoir des trajets, bagages et heures de départ différents. Fixez une limite d’attente et un rendez-vous public et autorisé.",
      "Consultez les règles de l’aéroport et du transporteur autorisé. Confirmez places, bagages, accessibilité et prix total avant de réserver. Gardez une alternative indépendante. Ne publiez ni documents d’identité, ni cartes d’embarquement, ni données bancaires dans le groupe.",
      "Un e-mail confirmé ne prouve pas l’identité et ne garantit pas le comportement. Supprimer un chat n’efface pas les captures ou copies des autres. Consultez les règles du service et partagez seulement le nécessaire.",
      "[Inscrivez-vous sur la liste d’attente](/fr#beta). L’inscription ne garantit ni invitation, ni disponibilité dans un aéroport précis, ni date de lancement.",
      "## Autres guides pratiques",
      "[Comment partager le prix d’un taxi à l’aéroport](/fr/blog/split-airport-taxi-cost)"
    ],
    "tags": [
      "transfert aéroport",
      "préparation du voyage"
    ],
    "categories": [
      "préparation du voyage"
    ],
    "publishedAt": "2025-11-17T13:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-006",
    "slug": "automatic-cost-splitting",
    "locale": "de",
    "title": "Fahrtkosten nachvollziehbar teilen",
    "summary": "Bei einem Beispielgesamtpreis von 40 € zahlen zwei je 20 € und vier je 10 €. Bei drei zahlen zwei je 13,33 € und eine Person 13,34 €. Kein echter Tarif oder garantierter Vorteil.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Fahrtkosten nachvollziehbar teilen",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Bei einem Beispielgesamtpreis von 40 € zahlen zwei je 20 € und vier je 10 €. Bei drei zahlen zwei je 13,33 € und eine Person 13,34 €. Kein echter Tarif oder garantierter Vorteil.",
      "Cojauny bereitet eine Beta vor, die Menschen mit passenden Flugplänen verbinden soll. Dieser Leitfaden bietet praktische Hinweise; er belegt keine verfügbaren Funktionen, Kooperationen oder gemessenen Einsparungen.",
      "Prüfe Datum, Terminal, Uhrzeit und Ziel. Menschen auf demselben Flug können verschiedene Ziele, Gepäckmengen oder Abfahrtszeiten haben. Vereinbart eine Wartefrist und einen öffentlichen, erlaubten Treffpunkt.",
      "Prüfe Flughafenregeln und Bedingungen des zugelassenen Anbieters. Kläre Sitzplätze, Gepäckraum, Barrierefreiheit und Gesamtpreis vor der Buchung. Halte eine unabhängige Alternative bereit. Veröffentliche keine Ausweise, Bordkarten oder Bankdaten in der Gruppe.",
      "Eine bestätigte E-Mail-Adresse ist kein Identitätsnachweis und garantiert kein Verhalten. Gelöschte Chats entfernen keine fremden Screenshots oder Kopien. Prüfe die Regeln des Dienstes und teile nur nötige Daten.",
      "[Trag dich in die Beta-Warteliste ein](/de#beta). Die Anmeldung garantiert weder eine Einladung noch einen bestimmten Flughafen oder Starttermin.",
      "## Weitere praktische Tipps",
      "[Kosten für ein Flughafentaxi aufteilen](/de/blog/split-airport-taxi-cost)"
    ],
    "tags": [
      "Flughafentransfer",
      "Reiseplanung"
    ],
    "categories": [
      "Reiseplanung"
    ],
    "publishedAt": "2025-11-17T13:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-007",
    "slug": "share-taxi-madrid-barajas",
    "locale": "en",
    "title": "Planning a transfer at Madrid-Barajas",
    "summary": "Check the official airport website for terminals and pickup areas. Verify fares and timetables with the operator near your travel date.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Planning a transfer at Madrid-Barajas",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Check the official airport website for terminals and pickup areas. Verify fares and timetables with the operator near your travel date.",
      "Cojauny is preparing a beta to connect people with compatible flight plans. This guide offers practical advice; it does not establish available features, transport partnerships or measured savings.",
      "Check date, terminal, timing and destination. People on the same flight may need different routes, carry different luggage or leave at different times. Agree on a waiting deadline and a public, permitted meeting point.",
      "Check the airport rules and licensed operator’s conditions. Confirm seats, luggage space, accessibility and total price before booking. Keep an independent backup when details remain uncertain. Do not publish identity documents, boarding passes or bank details in the group.",
      "A confirmed email does not establish someone’s identity or guarantee their behaviour. Deleting a chat does not erase other people’s screenshots or copies. Check the service’s policies and share only what coordination requires.",
      "[Join the beta waitlist](/#beta). Registration does not guarantee an invitation, coverage at a particular airport or a launch date.",
      "## More practical guides",
      "[Taxi, train or shared transfer: how to choose](/blog/airport-transfer-options)"
    ],
    "tags": [
      "airport transfer",
      "travel planning"
    ],
    "categories": [
      "travel planning"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-007",
    "slug": "share-taxi-madrid-barajas",
    "locale": "es",
    "title": "Preparar un traslado en Madrid-Barajas",
    "summary": "Consulta la web oficial del aeropuerto para la terminal y zonas de recogida. Verifica tarifas y horarios directamente con el operador cerca del viaje.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Preparar un traslado en Madrid-Barajas",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Consulta la web oficial del aeropuerto para la terminal y zonas de recogida. Verifica tarifas y horarios directamente con el operador cerca del viaje.",
      "Cojauny prepara una beta para conectar a personas con planes de vuelo compatibles. Esta guía ofrece consejos de organización; no acredita funciones disponibles, operadores asociados ni resultados de ahorro.",
      "Comprueba fecha, terminal, hora y destino. Dos personas con el mismo vuelo pueden necesitar rutas diferentes, llevar distinto equipaje o salir a horas distintas. Acuerda una hora límite de espera y un punto de encuentro público y permitido.",
      "Consulta las condiciones del aeropuerto y del operador autorizado. Confirma plazas, espacio de equipaje, accesibilidad y precio total antes de reservar. Si faltan datos, conserva una alternativa independiente. No publiques documentos, tarjetas de embarque ni datos bancarios en el grupo.",
      "Un correo confirmado no demuestra la identidad de alguien ni garantiza su comportamiento. La eliminación de un chat tampoco borra capturas o copias ajenas. Consulta las políticas del servicio que utilices y comparte solo lo necesario.",
      "[Apúntate a la lista de espera](/es#beta). El registro no garantiza una invitación, cobertura en un aeropuerto concreto ni una fecha de lanzamiento.",
      "## También te puede ayudar",
      "[Taxi, tren o traslado compartido: cómo elegir](/es/blog/airport-transfer-options)"
    ],
    "tags": [
      "traslado aeropuerto",
      "planificación de viajes"
    ],
    "categories": [
      "planificación de viajes"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-007",
    "slug": "share-taxi-madrid-barajas",
    "locale": "fr",
    "title": "Préparer un transfert à Madrid-Barajas",
    "summary": "Consultez le site officiel de l’aéroport pour terminaux et prises en charge. Vérifiez tarifs et horaires auprès du transporteur près du voyage.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Préparer un transfert à Madrid-Barajas",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Consultez le site officiel de l’aéroport pour terminaux et prises en charge. Vérifiez tarifs et horaires auprès du transporteur près du voyage.",
      "Cojauny prépare une bêta pour relier des personnes ayant des projets de vol compatibles. Ce guide donne des conseils pratiques ; il ne prouve pas la disponibilité de fonctions, partenariats ou économies mesurées.",
      "Vérifiez date, terminal, horaire et destination. Des personnes sur le même vol peuvent avoir des trajets, bagages et heures de départ différents. Fixez une limite d’attente et un rendez-vous public et autorisé.",
      "Consultez les règles de l’aéroport et du transporteur autorisé. Confirmez places, bagages, accessibilité et prix total avant de réserver. Gardez une alternative indépendante. Ne publiez ni documents d’identité, ni cartes d’embarquement, ni données bancaires dans le groupe.",
      "Un e-mail confirmé ne prouve pas l’identité et ne garantit pas le comportement. Supprimer un chat n’efface pas les captures ou copies des autres. Consultez les règles du service et partagez seulement le nécessaire.",
      "[Inscrivez-vous sur la liste d’attente](/fr#beta). L’inscription ne garantit ni invitation, ni disponibilité dans un aéroport précis, ni date de lancement.",
      "## Autres guides pratiques",
      "[Taxi, train ou transfert partagé : comment choisir](/fr/blog/airport-transfer-options)"
    ],
    "tags": [
      "transfert aéroport",
      "préparation du voyage"
    ],
    "categories": [
      "préparation du voyage"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-007",
    "slug": "share-taxi-madrid-barajas",
    "locale": "de",
    "title": "Transfer in Madrid-Barajas planen",
    "summary": "Prüfe Terminals und Abholbereiche auf der offiziellen Flughafenwebsite. Bestätige Preise und Fahrpläne beim Anbieter kurz vor der Reise.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Transfer in Madrid-Barajas planen",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Prüfe Terminals und Abholbereiche auf der offiziellen Flughafenwebsite. Bestätige Preise und Fahrpläne beim Anbieter kurz vor der Reise.",
      "Cojauny bereitet eine Beta vor, die Menschen mit passenden Flugplänen verbinden soll. Dieser Leitfaden bietet praktische Hinweise; er belegt keine verfügbaren Funktionen, Kooperationen oder gemessenen Einsparungen.",
      "Prüfe Datum, Terminal, Uhrzeit und Ziel. Menschen auf demselben Flug können verschiedene Ziele, Gepäckmengen oder Abfahrtszeiten haben. Vereinbart eine Wartefrist und einen öffentlichen, erlaubten Treffpunkt.",
      "Prüfe Flughafenregeln und Bedingungen des zugelassenen Anbieters. Kläre Sitzplätze, Gepäckraum, Barrierefreiheit und Gesamtpreis vor der Buchung. Halte eine unabhängige Alternative bereit. Veröffentliche keine Ausweise, Bordkarten oder Bankdaten in der Gruppe.",
      "Eine bestätigte E-Mail-Adresse ist kein Identitätsnachweis und garantiert kein Verhalten. Gelöschte Chats entfernen keine fremden Screenshots oder Kopien. Prüfe die Regeln des Dienstes und teile nur nötige Daten.",
      "[Trag dich in die Beta-Warteliste ein](/de#beta). Die Anmeldung garantiert weder eine Einladung noch einen bestimmten Flughafen oder Starttermin.",
      "## Weitere praktische Tipps",
      "[Taxi, Bahn oder geteilter Transfer: So entscheidest du](/de/blog/airport-transfer-options)"
    ],
    "tags": [
      "Flughafentransfer",
      "Reiseplanung"
    ],
    "categories": [
      "Reiseplanung"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-008",
    "slug": "share-taxi-london-heathrow",
    "locale": "en",
    "title": "Planning a transfer at Heathrow",
    "summary": "Check the official airport website for terminals and pickup areas. Verify fares and timetables with the operator near your travel date.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Planning a transfer at Heathrow",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Check the official airport website for terminals and pickup areas. Verify fares and timetables with the operator near your travel date.",
      "Cojauny is preparing a beta to connect people with compatible flight plans. This guide offers practical advice; it does not establish available features, transport partnerships or measured savings.",
      "Check date, terminal, timing and destination. People on the same flight may need different routes, carry different luggage or leave at different times. Agree on a waiting deadline and a public, permitted meeting point.",
      "Check the airport rules and licensed operator’s conditions. Confirm seats, luggage space, accessibility and total price before booking. Keep an independent backup when details remain uncertain. Do not publish identity documents, boarding passes or bank details in the group.",
      "A confirmed email does not establish someone’s identity or guarantee their behaviour. Deleting a chat does not erase other people’s screenshots or copies. Check the service’s policies and share only what coordination requires.",
      "[Join the beta waitlist](/#beta). Registration does not guarantee an invitation, coverage at a particular airport or a launch date.",
      "## More practical guides",
      "[Taxi, train or shared transfer: how to choose](/blog/airport-transfer-options)"
    ],
    "tags": [
      "airport transfer",
      "travel planning"
    ],
    "categories": [
      "travel planning"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-008",
    "slug": "share-taxi-london-heathrow",
    "locale": "es",
    "title": "Preparar un traslado en Heathrow",
    "summary": "Consulta la web oficial del aeropuerto para la terminal y zonas de recogida. Verifica tarifas y horarios directamente con el operador cerca del viaje.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Preparar un traslado en Heathrow",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Consulta la web oficial del aeropuerto para la terminal y zonas de recogida. Verifica tarifas y horarios directamente con el operador cerca del viaje.",
      "Cojauny prepara una beta para conectar a personas con planes de vuelo compatibles. Esta guía ofrece consejos de organización; no acredita funciones disponibles, operadores asociados ni resultados de ahorro.",
      "Comprueba fecha, terminal, hora y destino. Dos personas con el mismo vuelo pueden necesitar rutas diferentes, llevar distinto equipaje o salir a horas distintas. Acuerda una hora límite de espera y un punto de encuentro público y permitido.",
      "Consulta las condiciones del aeropuerto y del operador autorizado. Confirma plazas, espacio de equipaje, accesibilidad y precio total antes de reservar. Si faltan datos, conserva una alternativa independiente. No publiques documentos, tarjetas de embarque ni datos bancarios en el grupo.",
      "Un correo confirmado no demuestra la identidad de alguien ni garantiza su comportamiento. La eliminación de un chat tampoco borra capturas o copias ajenas. Consulta las políticas del servicio que utilices y comparte solo lo necesario.",
      "[Apúntate a la lista de espera](/es#beta). El registro no garantiza una invitación, cobertura en un aeropuerto concreto ni una fecha de lanzamiento.",
      "## También te puede ayudar",
      "[Taxi, tren o traslado compartido: cómo elegir](/es/blog/airport-transfer-options)"
    ],
    "tags": [
      "traslado aeropuerto",
      "planificación de viajes"
    ],
    "categories": [
      "planificación de viajes"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-008",
    "slug": "share-taxi-london-heathrow",
    "locale": "fr",
    "title": "Préparer un transfert à Heathrow",
    "summary": "Consultez le site officiel de l’aéroport pour terminaux et prises en charge. Vérifiez tarifs et horaires auprès du transporteur près du voyage.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Préparer un transfert à Heathrow",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Consultez le site officiel de l’aéroport pour terminaux et prises en charge. Vérifiez tarifs et horaires auprès du transporteur près du voyage.",
      "Cojauny prépare une bêta pour relier des personnes ayant des projets de vol compatibles. Ce guide donne des conseils pratiques ; il ne prouve pas la disponibilité de fonctions, partenariats ou économies mesurées.",
      "Vérifiez date, terminal, horaire et destination. Des personnes sur le même vol peuvent avoir des trajets, bagages et heures de départ différents. Fixez une limite d’attente et un rendez-vous public et autorisé.",
      "Consultez les règles de l’aéroport et du transporteur autorisé. Confirmez places, bagages, accessibilité et prix total avant de réserver. Gardez une alternative indépendante. Ne publiez ni documents d’identité, ni cartes d’embarquement, ni données bancaires dans le groupe.",
      "Un e-mail confirmé ne prouve pas l’identité et ne garantit pas le comportement. Supprimer un chat n’efface pas les captures ou copies des autres. Consultez les règles du service et partagez seulement le nécessaire.",
      "[Inscrivez-vous sur la liste d’attente](/fr#beta). L’inscription ne garantit ni invitation, ni disponibilité dans un aéroport précis, ni date de lancement.",
      "## Autres guides pratiques",
      "[Taxi, train ou transfert partagé : comment choisir](/fr/blog/airport-transfer-options)"
    ],
    "tags": [
      "transfert aéroport",
      "préparation du voyage"
    ],
    "categories": [
      "préparation du voyage"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-008",
    "slug": "share-taxi-london-heathrow",
    "locale": "de",
    "title": "Transfer in Heathrow planen",
    "summary": "Prüfe Terminals und Abholbereiche auf der offiziellen Flughafenwebsite. Bestätige Preise und Fahrpläne beim Anbieter kurz vor der Reise.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Transfer in Heathrow planen",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Prüfe Terminals und Abholbereiche auf der offiziellen Flughafenwebsite. Bestätige Preise und Fahrpläne beim Anbieter kurz vor der Reise.",
      "Cojauny bereitet eine Beta vor, die Menschen mit passenden Flugplänen verbinden soll. Dieser Leitfaden bietet praktische Hinweise; er belegt keine verfügbaren Funktionen, Kooperationen oder gemessenen Einsparungen.",
      "Prüfe Datum, Terminal, Uhrzeit und Ziel. Menschen auf demselben Flug können verschiedene Ziele, Gepäckmengen oder Abfahrtszeiten haben. Vereinbart eine Wartefrist und einen öffentlichen, erlaubten Treffpunkt.",
      "Prüfe Flughafenregeln und Bedingungen des zugelassenen Anbieters. Kläre Sitzplätze, Gepäckraum, Barrierefreiheit und Gesamtpreis vor der Buchung. Halte eine unabhängige Alternative bereit. Veröffentliche keine Ausweise, Bordkarten oder Bankdaten in der Gruppe.",
      "Eine bestätigte E-Mail-Adresse ist kein Identitätsnachweis und garantiert kein Verhalten. Gelöschte Chats entfernen keine fremden Screenshots oder Kopien. Prüfe die Regeln des Dienstes und teile nur nötige Daten.",
      "[Trag dich in die Beta-Warteliste ein](/de#beta). Die Anmeldung garantiert weder eine Einladung noch einen bestimmten Flughafen oder Starttermin.",
      "## Weitere praktische Tipps",
      "[Taxi, Bahn oder geteilter Transfer: So entscheidest du](/de/blog/airport-transfer-options)"
    ],
    "tags": [
      "Flughafentransfer",
      "Reiseplanung"
    ],
    "categories": [
      "Reiseplanung"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-009",
    "slug": "share-taxi-amsterdam-schiphol",
    "locale": "en",
    "title": "Planning a transfer at Schiphol",
    "summary": "Check the official airport website for terminals and pickup areas. Verify fares and timetables with the operator near your travel date.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Planning a transfer at Schiphol",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Check the official airport website for terminals and pickup areas. Verify fares and timetables with the operator near your travel date.",
      "Cojauny is preparing a beta to connect people with compatible flight plans. This guide offers practical advice; it does not establish available features, transport partnerships or measured savings.",
      "Check date, terminal, timing and destination. People on the same flight may need different routes, carry different luggage or leave at different times. Agree on a waiting deadline and a public, permitted meeting point.",
      "Check the airport rules and licensed operator’s conditions. Confirm seats, luggage space, accessibility and total price before booking. Keep an independent backup when details remain uncertain. Do not publish identity documents, boarding passes or bank details in the group.",
      "A confirmed email does not establish someone’s identity or guarantee their behaviour. Deleting a chat does not erase other people’s screenshots or copies. Check the service’s policies and share only what coordination requires.",
      "[Join the beta waitlist](/#beta). Registration does not guarantee an invitation, coverage at a particular airport or a launch date.",
      "## More practical guides",
      "[Taxi, train or shared transfer: how to choose](/blog/airport-transfer-options)"
    ],
    "tags": [
      "airport transfer",
      "travel planning"
    ],
    "categories": [
      "travel planning"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-009",
    "slug": "share-taxi-amsterdam-schiphol",
    "locale": "es",
    "title": "Preparar un traslado en Schiphol",
    "summary": "Consulta la web oficial del aeropuerto para la terminal y zonas de recogida. Verifica tarifas y horarios directamente con el operador cerca del viaje.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Preparar un traslado en Schiphol",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Consulta la web oficial del aeropuerto para la terminal y zonas de recogida. Verifica tarifas y horarios directamente con el operador cerca del viaje.",
      "Cojauny prepara una beta para conectar a personas con planes de vuelo compatibles. Esta guía ofrece consejos de organización; no acredita funciones disponibles, operadores asociados ni resultados de ahorro.",
      "Comprueba fecha, terminal, hora y destino. Dos personas con el mismo vuelo pueden necesitar rutas diferentes, llevar distinto equipaje o salir a horas distintas. Acuerda una hora límite de espera y un punto de encuentro público y permitido.",
      "Consulta las condiciones del aeropuerto y del operador autorizado. Confirma plazas, espacio de equipaje, accesibilidad y precio total antes de reservar. Si faltan datos, conserva una alternativa independiente. No publiques documentos, tarjetas de embarque ni datos bancarios en el grupo.",
      "Un correo confirmado no demuestra la identidad de alguien ni garantiza su comportamiento. La eliminación de un chat tampoco borra capturas o copias ajenas. Consulta las políticas del servicio que utilices y comparte solo lo necesario.",
      "[Apúntate a la lista de espera](/es#beta). El registro no garantiza una invitación, cobertura en un aeropuerto concreto ni una fecha de lanzamiento.",
      "## También te puede ayudar",
      "[Taxi, tren o traslado compartido: cómo elegir](/es/blog/airport-transfer-options)"
    ],
    "tags": [
      "traslado aeropuerto",
      "planificación de viajes"
    ],
    "categories": [
      "planificación de viajes"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-009",
    "slug": "share-taxi-amsterdam-schiphol",
    "locale": "fr",
    "title": "Préparer un transfert à Schiphol",
    "summary": "Consultez le site officiel de l’aéroport pour terminaux et prises en charge. Vérifiez tarifs et horaires auprès du transporteur près du voyage.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Préparer un transfert à Schiphol",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Consultez le site officiel de l’aéroport pour terminaux et prises en charge. Vérifiez tarifs et horaires auprès du transporteur près du voyage.",
      "Cojauny prépare une bêta pour relier des personnes ayant des projets de vol compatibles. Ce guide donne des conseils pratiques ; il ne prouve pas la disponibilité de fonctions, partenariats ou économies mesurées.",
      "Vérifiez date, terminal, horaire et destination. Des personnes sur le même vol peuvent avoir des trajets, bagages et heures de départ différents. Fixez une limite d’attente et un rendez-vous public et autorisé.",
      "Consultez les règles de l’aéroport et du transporteur autorisé. Confirmez places, bagages, accessibilité et prix total avant de réserver. Gardez une alternative indépendante. Ne publiez ni documents d’identité, ni cartes d’embarquement, ni données bancaires dans le groupe.",
      "Un e-mail confirmé ne prouve pas l’identité et ne garantit pas le comportement. Supprimer un chat n’efface pas les captures ou copies des autres. Consultez les règles du service et partagez seulement le nécessaire.",
      "[Inscrivez-vous sur la liste d’attente](/fr#beta). L’inscription ne garantit ni invitation, ni disponibilité dans un aéroport précis, ni date de lancement.",
      "## Autres guides pratiques",
      "[Taxi, train ou transfert partagé : comment choisir](/fr/blog/airport-transfer-options)"
    ],
    "tags": [
      "transfert aéroport",
      "préparation du voyage"
    ],
    "categories": [
      "préparation du voyage"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-009",
    "slug": "share-taxi-amsterdam-schiphol",
    "locale": "de",
    "title": "Transfer in Schiphol planen",
    "summary": "Prüfe Terminals und Abholbereiche auf der offiziellen Flughafenwebsite. Bestätige Preise und Fahrpläne beim Anbieter kurz vor der Reise.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Transfer in Schiphol planen",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Prüfe Terminals und Abholbereiche auf der offiziellen Flughafenwebsite. Bestätige Preise und Fahrpläne beim Anbieter kurz vor der Reise.",
      "Cojauny bereitet eine Beta vor, die Menschen mit passenden Flugplänen verbinden soll. Dieser Leitfaden bietet praktische Hinweise; er belegt keine verfügbaren Funktionen, Kooperationen oder gemessenen Einsparungen.",
      "Prüfe Datum, Terminal, Uhrzeit und Ziel. Menschen auf demselben Flug können verschiedene Ziele, Gepäckmengen oder Abfahrtszeiten haben. Vereinbart eine Wartefrist und einen öffentlichen, erlaubten Treffpunkt.",
      "Prüfe Flughafenregeln und Bedingungen des zugelassenen Anbieters. Kläre Sitzplätze, Gepäckraum, Barrierefreiheit und Gesamtpreis vor der Buchung. Halte eine unabhängige Alternative bereit. Veröffentliche keine Ausweise, Bordkarten oder Bankdaten in der Gruppe.",
      "Eine bestätigte E-Mail-Adresse ist kein Identitätsnachweis und garantiert kein Verhalten. Gelöschte Chats entfernen keine fremden Screenshots oder Kopien. Prüfe die Regeln des Dienstes und teile nur nötige Daten.",
      "[Trag dich in die Beta-Warteliste ein](/de#beta). Die Anmeldung garantiert weder eine Einladung noch einen bestimmten Flughafen oder Starttermin.",
      "## Weitere praktische Tipps",
      "[Taxi, Bahn oder geteilter Transfer: So entscheidest du](/de/blog/airport-transfer-options)"
    ],
    "tags": [
      "Flughafentransfer",
      "Reiseplanung"
    ],
    "categories": [
      "Reiseplanung"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-010",
    "slug": "case-study-corporate-pilot",
    "locale": "en",
    "title": "How to evaluate a company transfer pilot",
    "summary": "This is a proposed method, not a completed pilot. With permission, measure requests, completed journeys, documented costs and cancellations without publishing personal data.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "How to evaluate a company transfer pilot",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "This is a proposed method, not a completed pilot. With permission, measure requests, completed journeys, documented costs and cancellations without publishing personal data.",
      "Cojauny is preparing a beta to connect people with compatible flight plans. This guide offers practical advice; it does not establish available features, transport partnerships or measured savings.",
      "Check date, terminal, timing and destination. People on the same flight may need different routes, carry different luggage or leave at different times. Agree on a waiting deadline and a public, permitted meeting point.",
      "Check the airport rules and licensed operator’s conditions. Confirm seats, luggage space, accessibility and total price before booking. Keep an independent backup when details remain uncertain. Do not publish identity documents, boarding passes or bank details in the group.",
      "A confirmed email does not establish someone’s identity or guarantee their behaviour. Deleting a chat does not erase other people’s screenshots or copies. Check the service’s policies and share only what coordination requires.",
      "[Join the beta waitlist](/#beta). Registration does not guarantee an invitation, coverage at a particular airport or a launch date.",
      "## More practical guides",
      "[Taxi, train or shared transfer: how to choose](/blog/airport-transfer-options)"
    ],
    "tags": [
      "airport transfer",
      "travel planning"
    ],
    "categories": [
      "travel planning"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-010",
    "slug": "case-study-corporate-pilot",
    "locale": "es",
    "title": "Cómo evaluar un piloto de traslados de empresa",
    "summary": "Este es un método propuesto, no un piloto realizado. Medid solicitudes, trayectos completados, costes documentados y cancelaciones con permiso, sin publicar datos personales.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Cómo evaluar un piloto de traslados de empresa",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Este es un método propuesto, no un piloto realizado. Medid solicitudes, trayectos completados, costes documentados y cancelaciones con permiso, sin publicar datos personales.",
      "Cojauny prepara una beta para conectar a personas con planes de vuelo compatibles. Esta guía ofrece consejos de organización; no acredita funciones disponibles, operadores asociados ni resultados de ahorro.",
      "Comprueba fecha, terminal, hora y destino. Dos personas con el mismo vuelo pueden necesitar rutas diferentes, llevar distinto equipaje o salir a horas distintas. Acuerda una hora límite de espera y un punto de encuentro público y permitido.",
      "Consulta las condiciones del aeropuerto y del operador autorizado. Confirma plazas, espacio de equipaje, accesibilidad y precio total antes de reservar. Si faltan datos, conserva una alternativa independiente. No publiques documentos, tarjetas de embarque ni datos bancarios en el grupo.",
      "Un correo confirmado no demuestra la identidad de alguien ni garantiza su comportamiento. La eliminación de un chat tampoco borra capturas o copias ajenas. Consulta las políticas del servicio que utilices y comparte solo lo necesario.",
      "[Apúntate a la lista de espera](/es#beta). El registro no garantiza una invitación, cobertura en un aeropuerto concreto ni una fecha de lanzamiento.",
      "## También te puede ayudar",
      "[Taxi, tren o traslado compartido: cómo elegir](/es/blog/airport-transfer-options)"
    ],
    "tags": [
      "traslado aeropuerto",
      "planificación de viajes"
    ],
    "categories": [
      "planificación de viajes"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-010",
    "slug": "case-study-corporate-pilot",
    "locale": "fr",
    "title": "Évaluer un pilote de transferts professionnels",
    "summary": "Il s’agit d’une méthode proposée, pas d’un pilote réalisé. Mesurez avec autorisation demandes, trajets, coûts documentés et annulations sans publier de données personnelles.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Évaluer un pilote de transferts professionnels",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Il s’agit d’une méthode proposée, pas d’un pilote réalisé. Mesurez avec autorisation demandes, trajets, coûts documentés et annulations sans publier de données personnelles.",
      "Cojauny prépare une bêta pour relier des personnes ayant des projets de vol compatibles. Ce guide donne des conseils pratiques ; il ne prouve pas la disponibilité de fonctions, partenariats ou économies mesurées.",
      "Vérifiez date, terminal, horaire et destination. Des personnes sur le même vol peuvent avoir des trajets, bagages et heures de départ différents. Fixez une limite d’attente et un rendez-vous public et autorisé.",
      "Consultez les règles de l’aéroport et du transporteur autorisé. Confirmez places, bagages, accessibilité et prix total avant de réserver. Gardez une alternative indépendante. Ne publiez ni documents d’identité, ni cartes d’embarquement, ni données bancaires dans le groupe.",
      "Un e-mail confirmé ne prouve pas l’identité et ne garantit pas le comportement. Supprimer un chat n’efface pas les captures ou copies des autres. Consultez les règles du service et partagez seulement le nécessaire.",
      "[Inscrivez-vous sur la liste d’attente](/fr#beta). L’inscription ne garantit ni invitation, ni disponibilité dans un aéroport précis, ni date de lancement.",
      "## Autres guides pratiques",
      "[Taxi, train ou transfert partagé : comment choisir](/fr/blog/airport-transfer-options)"
    ],
    "tags": [
      "transfert aéroport",
      "préparation du voyage"
    ],
    "categories": [
      "préparation du voyage"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-010",
    "slug": "case-study-corporate-pilot",
    "locale": "de",
    "title": "Einen Firmenpilot für Transfers bewerten",
    "summary": "Dies ist ein vorgeschlagenes Verfahren, kein durchgeführter Pilot. Erfasst mit Erlaubnis Anfragen, Fahrten, belegte Kosten und Absagen ohne personenbezogene Veröffentlichung.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Einen Firmenpilot für Transfers bewerten",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Dies ist ein vorgeschlagenes Verfahren, kein durchgeführter Pilot. Erfasst mit Erlaubnis Anfragen, Fahrten, belegte Kosten und Absagen ohne personenbezogene Veröffentlichung.",
      "Cojauny bereitet eine Beta vor, die Menschen mit passenden Flugplänen verbinden soll. Dieser Leitfaden bietet praktische Hinweise; er belegt keine verfügbaren Funktionen, Kooperationen oder gemessenen Einsparungen.",
      "Prüfe Datum, Terminal, Uhrzeit und Ziel. Menschen auf demselben Flug können verschiedene Ziele, Gepäckmengen oder Abfahrtszeiten haben. Vereinbart eine Wartefrist und einen öffentlichen, erlaubten Treffpunkt.",
      "Prüfe Flughafenregeln und Bedingungen des zugelassenen Anbieters. Kläre Sitzplätze, Gepäckraum, Barrierefreiheit und Gesamtpreis vor der Buchung. Halte eine unabhängige Alternative bereit. Veröffentliche keine Ausweise, Bordkarten oder Bankdaten in der Gruppe.",
      "Eine bestätigte E-Mail-Adresse ist kein Identitätsnachweis und garantiert kein Verhalten. Gelöschte Chats entfernen keine fremden Screenshots oder Kopien. Prüfe die Regeln des Dienstes und teile nur nötige Daten.",
      "[Trag dich in die Beta-Warteliste ein](/de#beta). Die Anmeldung garantiert weder eine Einladung noch einen bestimmten Flughafen oder Starttermin.",
      "## Weitere praktische Tipps",
      "[Taxi, Bahn oder geteilter Transfer: So entscheidest du](/de/blog/airport-transfer-options)"
    ],
    "tags": [
      "Flughafentransfer",
      "Reiseplanung"
    ],
    "categories": [
      "Reiseplanung"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-011",
    "slug": "integrating-flight-data-and-cojauny",
    "locale": "en",
    "title": "Using flight information to plan a transfer",
    "summary": "Distinguish scheduled arrival, estimated landing and actual airport departure. The landing does not confirm a public Cojauny API or integrations; ask the team before planning a connection.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Using flight information to plan a transfer",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Distinguish scheduled arrival, estimated landing and actual airport departure. The landing does not confirm a public Cojauny API or integrations; ask the team before planning a connection.",
      "Cojauny is preparing a beta to connect people with compatible flight plans. This guide offers practical advice; it does not establish available features, transport partnerships or measured savings.",
      "Check date, terminal, timing and destination. People on the same flight may need different routes, carry different luggage or leave at different times. Agree on a waiting deadline and a public, permitted meeting point.",
      "Check the airport rules and licensed operator’s conditions. Confirm seats, luggage space, accessibility and total price before booking. Keep an independent backup when details remain uncertain. Do not publish identity documents, boarding passes or bank details in the group.",
      "A confirmed email does not establish someone’s identity or guarantee their behaviour. Deleting a chat does not erase other people’s screenshots or copies. Check the service’s policies and share only what coordination requires.",
      "[Join the beta waitlist](/#beta). Registration does not guarantee an invitation, coverage at a particular airport or a launch date.",
      "## More practical guides",
      "[Late arrival: prepare a transfer backup plan](/blog/late-arrival-airport-transfer-plan)"
    ],
    "tags": [
      "airport transfer",
      "travel planning"
    ],
    "categories": [
      "travel planning"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-011",
    "slug": "integrating-flight-data-and-cojauny",
    "locale": "es",
    "title": "Usar datos de vuelo para planificar un traslado",
    "summary": "Distingue llegada programada, estimada y salida real del aeropuerto. La landing no confirma una API pública de Cojauny ni integraciones; consulta al equipo antes de diseñar una conexión.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Usar datos de vuelo para planificar un traslado",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Distingue llegada programada, estimada y salida real del aeropuerto. La landing no confirma una API pública de Cojauny ni integraciones; consulta al equipo antes de diseñar una conexión.",
      "Cojauny prepara una beta para conectar a personas con planes de vuelo compatibles. Esta guía ofrece consejos de organización; no acredita funciones disponibles, operadores asociados ni resultados de ahorro.",
      "Comprueba fecha, terminal, hora y destino. Dos personas con el mismo vuelo pueden necesitar rutas diferentes, llevar distinto equipaje o salir a horas distintas. Acuerda una hora límite de espera y un punto de encuentro público y permitido.",
      "Consulta las condiciones del aeropuerto y del operador autorizado. Confirma plazas, espacio de equipaje, accesibilidad y precio total antes de reservar. Si faltan datos, conserva una alternativa independiente. No publiques documentos, tarjetas de embarque ni datos bancarios en el grupo.",
      "Un correo confirmado no demuestra la identidad de alguien ni garantiza su comportamiento. La eliminación de un chat tampoco borra capturas o copias ajenas. Consulta las políticas del servicio que utilices y comparte solo lo necesario.",
      "[Apúntate a la lista de espera](/es#beta). El registro no garantiza una invitación, cobertura en un aeropuerto concreto ni una fecha de lanzamiento.",
      "## También te puede ayudar",
      "[Llegar tarde: prepara un plan B para el traslado](/es/blog/late-arrival-airport-transfer-plan)"
    ],
    "tags": [
      "traslado aeropuerto",
      "planificación de viajes"
    ],
    "categories": [
      "planificación de viajes"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-011",
    "slug": "integrating-flight-data-and-cojauny",
    "locale": "fr",
    "title": "Utiliser les informations de vol pour un transfert",
    "summary": "Distinguez arrivée prévue, estimée et départ réel de l’aéroport. La page ne confirme aucune API publique ou intégration Cojauny ; consultez l’équipe.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Utiliser les informations de vol pour un transfert",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Distinguez arrivée prévue, estimée et départ réel de l’aéroport. La page ne confirme aucune API publique ou intégration Cojauny ; consultez l’équipe.",
      "Cojauny prépare une bêta pour relier des personnes ayant des projets de vol compatibles. Ce guide donne des conseils pratiques ; il ne prouve pas la disponibilité de fonctions, partenariats ou économies mesurées.",
      "Vérifiez date, terminal, horaire et destination. Des personnes sur le même vol peuvent avoir des trajets, bagages et heures de départ différents. Fixez une limite d’attente et un rendez-vous public et autorisé.",
      "Consultez les règles de l’aéroport et du transporteur autorisé. Confirmez places, bagages, accessibilité et prix total avant de réserver. Gardez une alternative indépendante. Ne publiez ni documents d’identité, ni cartes d’embarquement, ni données bancaires dans le groupe.",
      "Un e-mail confirmé ne prouve pas l’identité et ne garantit pas le comportement. Supprimer un chat n’efface pas les captures ou copies des autres. Consultez les règles du service et partagez seulement le nécessaire.",
      "[Inscrivez-vous sur la liste d’attente](/fr#beta). L’inscription ne garantit ni invitation, ni disponibilité dans un aéroport précis, ni date de lancement.",
      "## Autres guides pratiques",
      "[Arrivée tardive : prévoir un plan B](/fr/blog/late-arrival-airport-transfer-plan)"
    ],
    "tags": [
      "transfert aéroport",
      "préparation du voyage"
    ],
    "categories": [
      "préparation du voyage"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-011",
    "slug": "integrating-flight-data-and-cojauny",
    "locale": "de",
    "title": "Mit Fluginformationen einen Transfer planen",
    "summary": "Unterscheide geplante Ankunft, geschätzte Landung und tatsächliche Abfahrt. Eine öffentliche Cojauny-API oder Integration ist hier nicht bestätigt; frage das Team.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Mit Fluginformationen einen Transfer planen",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Unterscheide geplante Ankunft, geschätzte Landung und tatsächliche Abfahrt. Eine öffentliche Cojauny-API oder Integration ist hier nicht bestätigt; frage das Team.",
      "Cojauny bereitet eine Beta vor, die Menschen mit passenden Flugplänen verbinden soll. Dieser Leitfaden bietet praktische Hinweise; er belegt keine verfügbaren Funktionen, Kooperationen oder gemessenen Einsparungen.",
      "Prüfe Datum, Terminal, Uhrzeit und Ziel. Menschen auf demselben Flug können verschiedene Ziele, Gepäckmengen oder Abfahrtszeiten haben. Vereinbart eine Wartefrist und einen öffentlichen, erlaubten Treffpunkt.",
      "Prüfe Flughafenregeln und Bedingungen des zugelassenen Anbieters. Kläre Sitzplätze, Gepäckraum, Barrierefreiheit und Gesamtpreis vor der Buchung. Halte eine unabhängige Alternative bereit. Veröffentliche keine Ausweise, Bordkarten oder Bankdaten in der Gruppe.",
      "Eine bestätigte E-Mail-Adresse ist kein Identitätsnachweis und garantiert kein Verhalten. Gelöschte Chats entfernen keine fremden Screenshots oder Kopien. Prüfe die Regeln des Dienstes und teile nur nötige Daten.",
      "[Trag dich in die Beta-Warteliste ein](/de#beta). Die Anmeldung garantiert weder eine Einladung noch einen bestimmten Flughafen oder Starttermin.",
      "## Weitere praktische Tipps",
      "[Späte Ankunft: Plan B für den Transfer](/de/blog/late-arrival-airport-transfer-plan)"
    ],
    "tags": [
      "Flughafentransfer",
      "Reiseplanung"
    ],
    "categories": [
      "Reiseplanung"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-012",
    "slug": "privacy-gdpr-event-chats",
    "locale": "en",
    "title": "Privacy when organising a group trip",
    "summary": "Read the policy and ask the controller about access, retention or deletion. No ISO certification, SOC 2 report or independent audit is claimed.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Privacy when organising a group trip",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Read the policy and ask the controller about access, retention or deletion. No ISO certification, SOC 2 report or independent audit is claimed.",
      "Cojauny is preparing a beta to connect people with compatible flight plans. This guide offers practical advice; it does not establish available features, transport partnerships or measured savings.",
      "Check date, terminal, timing and destination. People on the same flight may need different routes, carry different luggage or leave at different times. Agree on a waiting deadline and a public, permitted meeting point.",
      "Check the airport rules and licensed operator’s conditions. Confirm seats, luggage space, accessibility and total price before booking. Keep an independent backup when details remain uncertain. Do not publish identity documents, boarding passes or bank details in the group.",
      "A confirmed email does not establish someone’s identity or guarantee their behaviour. Deleting a chat does not erase other people’s screenshots or copies. Check the service’s policies and share only what coordination requires.",
      "[Join the beta waitlist](/#beta). Registration does not guarantee an invitation, coverage at a particular airport or a launch date.",
      "## More practical guides",
      "[A checklist for sharing an airport ride](/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "airport transfer",
      "travel planning"
    ],
    "categories": [
      "travel planning"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-012",
    "slug": "privacy-gdpr-event-chats",
    "locale": "es",
    "title": "Privacidad al organizar un viaje en grupo",
    "summary": "Lee la política y consulta al responsable sobre acceso, conservación o eliminación. No se afirman certificaciones ISO, SOC 2 ni auditorías externas.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Privacidad al organizar un viaje en grupo",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Lee la política y consulta al responsable sobre acceso, conservación o eliminación. No se afirman certificaciones ISO, SOC 2 ni auditorías externas.",
      "Cojauny prepara una beta para conectar a personas con planes de vuelo compatibles. Esta guía ofrece consejos de organización; no acredita funciones disponibles, operadores asociados ni resultados de ahorro.",
      "Comprueba fecha, terminal, hora y destino. Dos personas con el mismo vuelo pueden necesitar rutas diferentes, llevar distinto equipaje o salir a horas distintas. Acuerda una hora límite de espera y un punto de encuentro público y permitido.",
      "Consulta las condiciones del aeropuerto y del operador autorizado. Confirma plazas, espacio de equipaje, accesibilidad y precio total antes de reservar. Si faltan datos, conserva una alternativa independiente. No publiques documentos, tarjetas de embarque ni datos bancarios en el grupo.",
      "Un correo confirmado no demuestra la identidad de alguien ni garantiza su comportamiento. La eliminación de un chat tampoco borra capturas o copias ajenas. Consulta las políticas del servicio que utilices y comparte solo lo necesario.",
      "[Apúntate a la lista de espera](/es#beta). El registro no garantiza una invitación, cobertura en un aeropuerto concreto ni una fecha de lanzamiento.",
      "## También te puede ayudar",
      "[Lista de comprobación para compartir un traslado](/es/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "traslado aeropuerto",
      "planificación de viajes"
    ],
    "categories": [
      "planificación de viajes"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-012",
    "slug": "privacy-gdpr-event-chats",
    "locale": "fr",
    "title": "Confidentialité lors d’un voyage en groupe",
    "summary": "Lisez la politique et contactez le responsable pour l’accès, la conservation ou la suppression. Aucune certification ISO, rapport SOC 2 ou audit externe n’est revendiqué.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Confidentialité lors d’un voyage en groupe",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Lisez la politique et contactez le responsable pour l’accès, la conservation ou la suppression. Aucune certification ISO, rapport SOC 2 ou audit externe n’est revendiqué.",
      "Cojauny prépare une bêta pour relier des personnes ayant des projets de vol compatibles. Ce guide donne des conseils pratiques ; il ne prouve pas la disponibilité de fonctions, partenariats ou économies mesurées.",
      "Vérifiez date, terminal, horaire et destination. Des personnes sur le même vol peuvent avoir des trajets, bagages et heures de départ différents. Fixez une limite d’attente et un rendez-vous public et autorisé.",
      "Consultez les règles de l’aéroport et du transporteur autorisé. Confirmez places, bagages, accessibilité et prix total avant de réserver. Gardez une alternative indépendante. Ne publiez ni documents d’identité, ni cartes d’embarquement, ni données bancaires dans le groupe.",
      "Un e-mail confirmé ne prouve pas l’identité et ne garantit pas le comportement. Supprimer un chat n’efface pas les captures ou copies des autres. Consultez les règles du service et partagez seulement le nécessaire.",
      "[Inscrivez-vous sur la liste d’attente](/fr#beta). L’inscription ne garantit ni invitation, ni disponibilité dans un aéroport précis, ni date de lancement.",
      "## Autres guides pratiques",
      "[Liste de contrôle pour partager un transfert](/fr/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "transfert aéroport",
      "préparation du voyage"
    ],
    "categories": [
      "préparation du voyage"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-012",
    "slug": "privacy-gdpr-event-chats",
    "locale": "de",
    "title": "Datenschutz bei gemeinsamen Reisen",
    "summary": "Lies die Erklärung und frage die verantwortliche Stelle zu Auskunft, Speicherung und Löschung. ISO-Zertifikate, SOC-2-Berichte oder externe Audits werden nicht behauptet.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Datenschutz bei gemeinsamen Reisen",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Lies die Erklärung und frage die verantwortliche Stelle zu Auskunft, Speicherung und Löschung. ISO-Zertifikate, SOC-2-Berichte oder externe Audits werden nicht behauptet.",
      "Cojauny bereitet eine Beta vor, die Menschen mit passenden Flugplänen verbinden soll. Dieser Leitfaden bietet praktische Hinweise; er belegt keine verfügbaren Funktionen, Kooperationen oder gemessenen Einsparungen.",
      "Prüfe Datum, Terminal, Uhrzeit und Ziel. Menschen auf demselben Flug können verschiedene Ziele, Gepäckmengen oder Abfahrtszeiten haben. Vereinbart eine Wartefrist und einen öffentlichen, erlaubten Treffpunkt.",
      "Prüfe Flughafenregeln und Bedingungen des zugelassenen Anbieters. Kläre Sitzplätze, Gepäckraum, Barrierefreiheit und Gesamtpreis vor der Buchung. Halte eine unabhängige Alternative bereit. Veröffentliche keine Ausweise, Bordkarten oder Bankdaten in der Gruppe.",
      "Eine bestätigte E-Mail-Adresse ist kein Identitätsnachweis und garantiert kein Verhalten. Gelöschte Chats entfernen keine fremden Screenshots oder Kopien. Prüfe die Regeln des Dienstes und teile nur nötige Daten.",
      "[Trag dich in die Beta-Warteliste ein](/de#beta). Die Anmeldung garantiert weder eine Einladung noch einen bestimmten Flughafen oder Starttermin.",
      "## Weitere praktische Tipps",
      "[Checkliste für einen gemeinsamen Flughafentransfer](/de/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "Flughafentransfer",
      "Reiseplanung"
    ],
    "categories": [
      "Reiseplanung"
    ],
    "publishedAt": "2025-11-27T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-013",
    "slug": "airport-transfer-options",
    "locale": "es",
    "title": "Taxi, tren o traslado compartido: cómo elegir",
    "summary": "Empieza por la hora a la que realmente podrás salir de llegadas. Añade desembarque, controles y recogida de equipaje. Una conexión barata puede resultar inútil si el último servicio sale antes de que alcances la estación.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Taxi, tren o traslado compartido: cómo elegir",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Empieza por la hora a la que realmente podrás salir de llegadas. Añade desembarque, controles y recogida de equipaje. Una conexión barata puede resultar inútil si el último servicio sale antes de que alcances la estación.",
      "## Decide con tus datos de viaje",
      "Compara coste total, tiempo puerta a puerta, horario, transbordos y accesibilidad. El tren o autobús puede ser práctico si el tramo final es sencillo. Suma los billetes de todo el grupo y el transporte desde la estación al destino.",
      "Un taxi autorizado puede ofrecer un recorrido directo y flexibilidad. Confirma precio, taxímetro o tarifa aplicable, suplementos y recogida. Compartir exige además destinos compatibles, espacio para las maletas y un límite de espera. La mejor opción depende de tu viaje.",
      "## Qué comprobar antes de salir",
      "Comprueba fecha, terminal, hora y destino. Dos personas con el mismo vuelo pueden necesitar rutas diferentes, llevar distinto equipaje o salir a horas distintas. Acuerda una hora límite de espera y un punto de encuentro público y permitido.",
      "Consulta las condiciones del aeropuerto y del operador autorizado. Confirma plazas, espacio de equipaje, accesibilidad y precio total antes de reservar. Si faltan datos, conserva una alternativa independiente. No publiques documentos, tarjetas de embarque ni datos bancarios en el grupo.",
      "## Privacidad y condiciones",
      "Un correo confirmado no demuestra la identidad de alguien ni garantiza su comportamiento. La eliminación de un chat tampoco borra capturas o copias ajenas. Consulta las políticas del servicio que utilices y comparte solo lo necesario.",
      "## Conoce la beta",
      "[Apúntate a la lista de espera](/es#beta). El registro no garantiza una invitación, cobertura en un aeropuerto concreto ni una fecha de lanzamiento.",
      "## También te puede ayudar",
      "[Cómo repartir el coste de un taxi al aeropuerto](/es/blog/split-airport-taxi-cost)",
      "[Lista de comprobación para compartir un traslado](/es/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "traslado aeropuerto",
      "planificación de viajes"
    ],
    "categories": [
      "planificación de viajes"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-013",
    "slug": "airport-transfer-options",
    "locale": "en",
    "title": "Taxi, train or shared transfer: how to choose",
    "summary": "Start with the time you can actually leave arrivals. Include disembarkation, border checks and baggage. A cheap connection is useless if its last service departs before you reach the station.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Taxi, train or shared transfer: how to choose",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Start with the time you can actually leave arrivals. Include disembarkation, border checks and baggage. A cheap connection is useless if its last service departs before you reach the station.",
      "## Decide using your travel details",
      "Compare total cost, door-to-door time, operating hours, changes and accessibility. Rail or bus can work well when the final leg is simple. Add tickets for the whole group and transport from the station to your destination.",
      "A licensed taxi offers a direct route and flexible timing. Confirm the fare, meter or fixed-price rules, supplements and pickup point. Sharing also requires compatible destinations, luggage room and a waiting limit. Choose according to your journey.",
      "## What to check before leaving",
      "Check date, terminal, timing and destination. People on the same flight may need different routes, carry different luggage or leave at different times. Agree on a waiting deadline and a public, permitted meeting point.",
      "Check the airport rules and licensed operator’s conditions. Confirm seats, luggage space, accessibility and total price before booking. Keep an independent backup when details remain uncertain. Do not publish identity documents, boarding passes or bank details in the group.",
      "## Privacy and conditions",
      "A confirmed email does not establish someone’s identity or guarantee their behaviour. Deleting a chat does not erase other people’s screenshots or copies. Check the service’s policies and share only what coordination requires.",
      "## Explore the beta",
      "[Join the beta waitlist](/#beta). Registration does not guarantee an invitation, coverage at a particular airport or a launch date.",
      "## More practical guides",
      "[How to split an airport taxi fare](/blog/split-airport-taxi-cost)",
      "[A checklist for sharing an airport ride](/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "airport transfer",
      "travel planning"
    ],
    "categories": [
      "travel planning"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-013",
    "slug": "airport-transfer-options",
    "locale": "de",
    "title": "Taxi, Bahn oder geteilter Transfer: So entscheidest du",
    "summary": "Plane mit der Zeit, zu der du den Ankunftsbereich wirklich verlassen kannst. Berücksichtige Aussteigen, Kontrollen und Gepäck. Eine günstige Verbindung hilft wenig, wenn die letzte Fahrt vorher abfährt.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Taxi, Bahn oder geteilter Transfer: So entscheidest du",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Plane mit der Zeit, zu der du den Ankunftsbereich wirklich verlassen kannst. Berücksichtige Aussteigen, Kontrollen und Gepäck. Eine günstige Verbindung hilft wenig, wenn die letzte Fahrt vorher abfährt.",
      "## Mit deinen Reisedaten entscheiden",
      "Vergleiche Gesamtpreis, Zeit von Tür zu Tür, Betriebszeiten, Umstiege und Barrierefreiheit. Bahn oder Bus passen bei einem einfachen letzten Weg. Addiere Tickets für alle und die Fahrt vom Bahnhof zum Ziel.",
      "Ein zugelassenes Taxi bietet eine direkte Route und flexible Zeiten. Kläre Tarif, Taxameter oder Festpreis, Zuschläge und Abholung. Beim Teilen braucht ihr passende Ziele, Gepäckraum und eine Wartefrist. Entscheide nach deiner Reise.",
      "## Vor der Abfahrt prüfen",
      "Prüfe Datum, Terminal, Uhrzeit und Ziel. Menschen auf demselben Flug können verschiedene Ziele, Gepäckmengen oder Abfahrtszeiten haben. Vereinbart eine Wartefrist und einen öffentlichen, erlaubten Treffpunkt.",
      "Prüfe Flughafenregeln und Bedingungen des zugelassenen Anbieters. Kläre Sitzplätze, Gepäckraum, Barrierefreiheit und Gesamtpreis vor der Buchung. Halte eine unabhängige Alternative bereit. Veröffentliche keine Ausweise, Bordkarten oder Bankdaten in der Gruppe.",
      "## Datenschutz und Bedingungen",
      "Eine bestätigte E-Mail-Adresse ist kein Identitätsnachweis und garantiert kein Verhalten. Gelöschte Chats entfernen keine fremden Screenshots oder Kopien. Prüfe die Regeln des Dienstes und teile nur nötige Daten.",
      "## Die Beta kennenlernen",
      "[Trag dich in die Beta-Warteliste ein](/de#beta). Die Anmeldung garantiert weder eine Einladung noch einen bestimmten Flughafen oder Starttermin.",
      "## Weitere praktische Tipps",
      "[Kosten für ein Flughafentaxi aufteilen](/de/blog/split-airport-taxi-cost)",
      "[Checkliste für einen gemeinsamen Flughafentransfer](/de/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "Flughafentransfer",
      "Reiseplanung"
    ],
    "categories": [
      "Reiseplanung"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-013",
    "slug": "airport-transfer-options",
    "locale": "fr",
    "title": "Taxi, train ou transfert partagé : comment choisir",
    "summary": "Partez de l’heure à laquelle vous pourrez vraiment quitter les arrivées. Ajoutez débarquement, contrôles et bagages. Une liaison peu chère devient inutile si le dernier départ vous échappe.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Taxi, train ou transfert partagé : comment choisir",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Partez de l’heure à laquelle vous pourrez vraiment quitter les arrivées. Ajoutez débarquement, contrôles et bagages. Une liaison peu chère devient inutile si le dernier départ vous échappe.",
      "## Décider selon votre voyage",
      "Comparez prix total, temps porte à porte, horaires, changements et accessibilité. Le train ou le bus convient si le dernier trajet est simple. Additionnez les billets du groupe et le trajet depuis la gare.",
      "Un taxi autorisé permet un trajet direct et des horaires souples. Confirmez tarif, compteur ou forfait, suppléments et prise en charge. Le partage exige aussi des destinations compatibles, assez de place et un délai d’attente. Choisissez selon votre voyage.",
      "## Vérifier avant le départ",
      "Vérifiez date, terminal, horaire et destination. Des personnes sur le même vol peuvent avoir des trajets, bagages et heures de départ différents. Fixez une limite d’attente et un rendez-vous public et autorisé.",
      "Consultez les règles de l’aéroport et du transporteur autorisé. Confirmez places, bagages, accessibilité et prix total avant de réserver. Gardez une alternative indépendante. Ne publiez ni documents d’identité, ni cartes d’embarquement, ni données bancaires dans le groupe.",
      "## Confidentialité et conditions",
      "Un e-mail confirmé ne prouve pas l’identité et ne garantit pas le comportement. Supprimer un chat n’efface pas les captures ou copies des autres. Consultez les règles du service et partagez seulement le nécessaire.",
      "## Découvrir la bêta",
      "[Inscrivez-vous sur la liste d’attente](/fr#beta). L’inscription ne garantit ni invitation, ni disponibilité dans un aéroport précis, ni date de lancement.",
      "## Autres guides pratiques",
      "[Comment partager le prix d’un taxi à l’aéroport](/fr/blog/split-airport-taxi-cost)",
      "[Liste de contrôle pour partager un transfert](/fr/blog/shared-airport-ride-checklist)"
    ],
    "tags": [
      "transfert aéroport",
      "préparation du voyage"
    ],
    "categories": [
      "préparation du voyage"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-014",
    "slug": "split-airport-taxi-cost",
    "locale": "es",
    "title": "Cómo repartir el coste de un taxi al aeropuerto",
    "summary": "Para un total ilustrativo de 40 €, dos pagan 20 € cada uno y cuatro, 10 €. Con tres, dos pagan 13,33 € y uno 13,34 €. No es una tarifa real ni un ahorro garantizado.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Cómo repartir el coste de un taxi al aeropuerto",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Para un total ilustrativo de 40 €, dos pagan 20 € cada uno y cuatro, 10 €. Con tres, dos pagan 13,33 € y uno 13,34 €. No es una tarifa real ni un ahorro garantizado.",
      "## Decide con tus datos de viaje",
      "El reparto empieza con el total acordado. Pregunta por suplementos de equipaje, recogida, horario o paradas. Confirma un nuevo importe si cambia la ruta. No asumas que todos recorren el mismo tramo.",
      "Acordad el pago antes de subir. Si alguien adelanta el dinero, conservad el recibo y pactad el reembolso. La landing no confirma pagos integrados ni liquidación automática. Si alguien cancela, el coste por persona puede cambiar: definid ese caso antes.",
      "## Qué comprobar antes de salir",
      "Comprueba fecha, terminal, hora y destino. Dos personas con el mismo vuelo pueden necesitar rutas diferentes, llevar distinto equipaje o salir a horas distintas. Acuerda una hora límite de espera y un punto de encuentro público y permitido.",
      "Consulta las condiciones del aeropuerto y del operador autorizado. Confirma plazas, espacio de equipaje, accesibilidad y precio total antes de reservar. Si faltan datos, conserva una alternativa independiente. No publiques documentos, tarjetas de embarque ni datos bancarios en el grupo.",
      "## Privacidad y condiciones",
      "Un correo confirmado no demuestra la identidad de alguien ni garantiza su comportamiento. La eliminación de un chat tampoco borra capturas o copias ajenas. Consulta las políticas del servicio que utilices y comparte solo lo necesario.",
      "## Conoce la beta",
      "[Apúntate a la lista de espera](/es#beta). El registro no garantiza una invitación, cobertura en un aeropuerto concreto ni una fecha de lanzamiento.",
      "## También te puede ayudar",
      "[Lista de comprobación para compartir un traslado](/es/blog/shared-airport-ride-checklist)",
      "[Llegar tarde: prepara un plan B para el traslado](/es/blog/late-arrival-airport-transfer-plan)"
    ],
    "tags": [
      "traslado aeropuerto",
      "planificación de viajes"
    ],
    "categories": [
      "planificación de viajes"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-014",
    "slug": "split-airport-taxi-cost",
    "locale": "en",
    "title": "How to split an airport taxi fare",
    "summary": "For an illustrative €40 total, two pay €20 each and four €10 each. With three, two pay €13.33 and one €13.34. This is not a real fare or guaranteed saving.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "How to split an airport taxi fare",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "For an illustrative €40 total, two pay €20 each and four €10 each. With three, two pay €13.33 and one €13.34. This is not a real fare or guaranteed saving.",
      "## Decide using your travel details",
      "Begin with the agreed total. Ask about luggage, pickup, time-of-day and extra-stop charges. Confirm a new amount if the route changes. Do not assume everyone travels the same distance.",
      "Agree on payment before boarding. If someone pays upfront, keep the receipt and agree on reimbursement. The landing does not confirm in-app payments or automatic settlement. A cancellation can change each person’s contribution; decide beforehand how to handle it.",
      "## What to check before leaving",
      "Check date, terminal, timing and destination. People on the same flight may need different routes, carry different luggage or leave at different times. Agree on a waiting deadline and a public, permitted meeting point.",
      "Check the airport rules and licensed operator’s conditions. Confirm seats, luggage space, accessibility and total price before booking. Keep an independent backup when details remain uncertain. Do not publish identity documents, boarding passes or bank details in the group.",
      "## Privacy and conditions",
      "A confirmed email does not establish someone’s identity or guarantee their behaviour. Deleting a chat does not erase other people’s screenshots or copies. Check the service’s policies and share only what coordination requires.",
      "## Explore the beta",
      "[Join the beta waitlist](/#beta). Registration does not guarantee an invitation, coverage at a particular airport or a launch date.",
      "## More practical guides",
      "[A checklist for sharing an airport ride](/blog/shared-airport-ride-checklist)",
      "[Late arrival: prepare a transfer backup plan](/blog/late-arrival-airport-transfer-plan)"
    ],
    "tags": [
      "airport transfer",
      "travel planning"
    ],
    "categories": [
      "travel planning"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-014",
    "slug": "split-airport-taxi-cost",
    "locale": "de",
    "title": "Kosten für ein Flughafentaxi aufteilen",
    "summary": "Bei einem Beispielgesamtpreis von 40 € zahlen zwei je 20 € und vier je 10 €. Bei drei zahlen zwei je 13,33 € und eine Person 13,34 €. Kein echter Tarif oder garantierter Vorteil.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Kosten für ein Flughafentaxi aufteilen",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Bei einem Beispielgesamtpreis von 40 € zahlen zwei je 20 € und vier je 10 €. Bei drei zahlen zwei je 13,33 € und eine Person 13,34 €. Kein echter Tarif oder garantierter Vorteil.",
      "## Mit deinen Reisedaten entscheiden",
      "Ausgangspunkt ist der vereinbarte Gesamtpreis. Fragt nach Zuschlägen für Gepäck, Abholung, Uhrzeit oder Stopps. Klärt bei einer Routenänderung den neuen Betrag. Nicht alle fahren dieselbe Strecke.",
      "Vereinbart die Zahlung vor dem Einsteigen. Zahlt jemand vorab, bewahrt den Beleg auf und klärt die Erstattung. In-App-Zahlungen oder automatische Abrechnung sind nicht bestätigt. Eine Absage kann die Anteile ändern; regelt diesen Fall vorher.",
      "## Vor der Abfahrt prüfen",
      "Prüfe Datum, Terminal, Uhrzeit und Ziel. Menschen auf demselben Flug können verschiedene Ziele, Gepäckmengen oder Abfahrtszeiten haben. Vereinbart eine Wartefrist und einen öffentlichen, erlaubten Treffpunkt.",
      "Prüfe Flughafenregeln und Bedingungen des zugelassenen Anbieters. Kläre Sitzplätze, Gepäckraum, Barrierefreiheit und Gesamtpreis vor der Buchung. Halte eine unabhängige Alternative bereit. Veröffentliche keine Ausweise, Bordkarten oder Bankdaten in der Gruppe.",
      "## Datenschutz und Bedingungen",
      "Eine bestätigte E-Mail-Adresse ist kein Identitätsnachweis und garantiert kein Verhalten. Gelöschte Chats entfernen keine fremden Screenshots oder Kopien. Prüfe die Regeln des Dienstes und teile nur nötige Daten.",
      "## Die Beta kennenlernen",
      "[Trag dich in die Beta-Warteliste ein](/de#beta). Die Anmeldung garantiert weder eine Einladung noch einen bestimmten Flughafen oder Starttermin.",
      "## Weitere praktische Tipps",
      "[Checkliste für einen gemeinsamen Flughafentransfer](/de/blog/shared-airport-ride-checklist)",
      "[Späte Ankunft: Plan B für den Transfer](/de/blog/late-arrival-airport-transfer-plan)"
    ],
    "tags": [
      "Flughafentransfer",
      "Reiseplanung"
    ],
    "categories": [
      "Reiseplanung"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-014",
    "slug": "split-airport-taxi-cost",
    "locale": "fr",
    "title": "Comment partager le prix d’un taxi à l’aéroport",
    "summary": "Pour un total illustratif de 40 €, deux paient 20 € chacun et quatre 10 €. À trois, deux paient 13,33 € et un 13,34 €. Ce n’est pas un tarif réel ni une économie garantie.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Comment partager le prix d’un taxi à l’aéroport",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Pour un total illustratif de 40 €, deux paient 20 € chacun et quatre 10 €. À trois, deux paient 13,33 € et un 13,34 €. Ce n’est pas un tarif réel ni une économie garantie.",
      "## Décider selon votre voyage",
      "Partez du total convenu. Demandez les suppléments de bagages, prise en charge, horaire ou arrêts. Confirmez le nouveau montant si le trajet change. Tous ne parcourent pas forcément la même distance.",
      "Convenez du paiement avant de monter. Si quelqu’un avance l’argent, gardez le reçu et fixez le remboursement. Les paiements intégrés ne sont pas confirmés ici. Une annulation peut modifier la part de chacun ; prévoyez ce cas.",
      "## Vérifier avant le départ",
      "Vérifiez date, terminal, horaire et destination. Des personnes sur le même vol peuvent avoir des trajets, bagages et heures de départ différents. Fixez une limite d’attente et un rendez-vous public et autorisé.",
      "Consultez les règles de l’aéroport et du transporteur autorisé. Confirmez places, bagages, accessibilité et prix total avant de réserver. Gardez une alternative indépendante. Ne publiez ni documents d’identité, ni cartes d’embarquement, ni données bancaires dans le groupe.",
      "## Confidentialité et conditions",
      "Un e-mail confirmé ne prouve pas l’identité et ne garantit pas le comportement. Supprimer un chat n’efface pas les captures ou copies des autres. Consultez les règles du service et partagez seulement le nécessaire.",
      "## Découvrir la bêta",
      "[Inscrivez-vous sur la liste d’attente](/fr#beta). L’inscription ne garantit ni invitation, ni disponibilité dans un aéroport précis, ni date de lancement.",
      "## Autres guides pratiques",
      "[Liste de contrôle pour partager un transfert](/fr/blog/shared-airport-ride-checklist)",
      "[Arrivée tardive : prévoir un plan B](/fr/blog/late-arrival-airport-transfer-plan)"
    ],
    "tags": [
      "transfert aéroport",
      "préparation du voyage"
    ],
    "categories": [
      "préparation du voyage"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-015",
    "slug": "shared-airport-ride-checklist",
    "locale": "es",
    "title": "Lista de comprobación para compartir un traslado",
    "summary": "Antes de quedar, confirma vuelo, fecha, terminal, destino y participantes. Acordad maletas, accesibilidad y hora máxima de espera. Un plan escrito evita interpretaciones distintas.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Lista de comprobación para compartir un traslado",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Antes de quedar, confirma vuelo, fecha, terminal, destino y participantes. Acordad maletas, accesibilidad y hora máxima de espera. Un plan escrito evita interpretaciones distintas.",
      "## Decide con tus datos de viaje",
      "Para el encuentro, elegid una zona pública y permitida. Consultad al aeropuerto si no sabéis dónde recoger pasajeros. No vayáis a un lugar aislado por presión de otra persona.",
      "Utilizad un operador autorizado, revisad el importe y conservad una alternativa independiente. Podéis desistir si el plan cambia o no os resulta cómodo. Ante una emergencia, acudid a los servicios y personal locales.",
      "## Qué comprobar antes de salir",
      "Comprueba fecha, terminal, hora y destino. Dos personas con el mismo vuelo pueden necesitar rutas diferentes, llevar distinto equipaje o salir a horas distintas. Acuerda una hora límite de espera y un punto de encuentro público y permitido.",
      "Consulta las condiciones del aeropuerto y del operador autorizado. Confirma plazas, espacio de equipaje, accesibilidad y precio total antes de reservar. Si faltan datos, conserva una alternativa independiente. No publiques documentos, tarjetas de embarque ni datos bancarios en el grupo.",
      "## Privacidad y condiciones",
      "Un correo confirmado no demuestra la identidad de alguien ni garantiza su comportamiento. La eliminación de un chat tampoco borra capturas o copias ajenas. Consulta las políticas del servicio que utilices y comparte solo lo necesario.",
      "## Conoce la beta",
      "[Apúntate a la lista de espera](/es#beta). El registro no garantiza una invitación, cobertura en un aeropuerto concreto ni una fecha de lanzamiento.",
      "## También te puede ayudar",
      "[Llegar tarde: prepara un plan B para el traslado](/es/blog/late-arrival-airport-transfer-plan)",
      "[Qué ocurre al apuntarte a la beta de Cojauny](/es/blog/cojauny-beta-access-guide)"
    ],
    "tags": [
      "traslado aeropuerto",
      "planificación de viajes"
    ],
    "categories": [
      "planificación de viajes"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-015",
    "slug": "shared-airport-ride-checklist",
    "locale": "en",
    "title": "A checklist for sharing an airport ride",
    "summary": "Before meeting, confirm flight, date, terminal, destination and participants. Agree on luggage, accessibility and a maximum wait. A written plan prevents misunderstandings.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "A checklist for sharing an airport ride",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Before meeting, confirm flight, date, terminal, destination and participants. Agree on luggage, accessibility and a maximum wait. A written plan prevents misunderstandings.",
      "## Decide using your travel details",
      "Choose a public, permitted meeting area. Ask airport staff where pickups are allowed if unclear. Do not go to an isolated place because someone pressures you.",
      "Use a licensed operator, check the price and keep an independent backup. You can leave the arrangement if plans change or you feel uncomfortable. In an emergency, contact local services or airport staff.",
      "## What to check before leaving",
      "Check date, terminal, timing and destination. People on the same flight may need different routes, carry different luggage or leave at different times. Agree on a waiting deadline and a public, permitted meeting point.",
      "Check the airport rules and licensed operator’s conditions. Confirm seats, luggage space, accessibility and total price before booking. Keep an independent backup when details remain uncertain. Do not publish identity documents, boarding passes or bank details in the group.",
      "## Privacy and conditions",
      "A confirmed email does not establish someone’s identity or guarantee their behaviour. Deleting a chat does not erase other people’s screenshots or copies. Check the service’s policies and share only what coordination requires.",
      "## Explore the beta",
      "[Join the beta waitlist](/#beta). Registration does not guarantee an invitation, coverage at a particular airport or a launch date.",
      "## More practical guides",
      "[Late arrival: prepare a transfer backup plan](/blog/late-arrival-airport-transfer-plan)",
      "[What happens when you join the Cojauny beta waitlist](/blog/cojauny-beta-access-guide)"
    ],
    "tags": [
      "airport transfer",
      "travel planning"
    ],
    "categories": [
      "travel planning"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-015",
    "slug": "shared-airport-ride-checklist",
    "locale": "de",
    "title": "Checkliste für einen gemeinsamen Flughafentransfer",
    "summary": "Klärt vor dem Treffen Flug, Datum, Terminal, Ziel und Mitfahrende. Vereinbart Gepäck, Barrierefreiheit und maximale Wartezeit. Ein schriftlicher Plan verhindert Missverständnisse.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Checkliste für einen gemeinsamen Flughafentransfer",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Klärt vor dem Treffen Flug, Datum, Terminal, Ziel und Mitfahrende. Vereinbart Gepäck, Barrierefreiheit und maximale Wartezeit. Ein schriftlicher Plan verhindert Missverständnisse.",
      "## Mit deinen Reisedaten entscheiden",
      "Wählt einen öffentlichen, erlaubten Treffpunkt. Fragt das Flughafenpersonal nach Abholbereichen. Lasst euch nicht zu einem abgelegenen Ort drängen.",
      "Nutzt einen zugelassenen Anbieter, prüft den Preis und haltet eine unabhängige Alternative bereit. Ihr könnt bei Änderungen oder Unwohlsein aussteigen. Im Notfall helfen örtliche Dienste und Flughafenpersonal.",
      "## Vor der Abfahrt prüfen",
      "Prüfe Datum, Terminal, Uhrzeit und Ziel. Menschen auf demselben Flug können verschiedene Ziele, Gepäckmengen oder Abfahrtszeiten haben. Vereinbart eine Wartefrist und einen öffentlichen, erlaubten Treffpunkt.",
      "Prüfe Flughafenregeln und Bedingungen des zugelassenen Anbieters. Kläre Sitzplätze, Gepäckraum, Barrierefreiheit und Gesamtpreis vor der Buchung. Halte eine unabhängige Alternative bereit. Veröffentliche keine Ausweise, Bordkarten oder Bankdaten in der Gruppe.",
      "## Datenschutz und Bedingungen",
      "Eine bestätigte E-Mail-Adresse ist kein Identitätsnachweis und garantiert kein Verhalten. Gelöschte Chats entfernen keine fremden Screenshots oder Kopien. Prüfe die Regeln des Dienstes und teile nur nötige Daten.",
      "## Die Beta kennenlernen",
      "[Trag dich in die Beta-Warteliste ein](/de#beta). Die Anmeldung garantiert weder eine Einladung noch einen bestimmten Flughafen oder Starttermin.",
      "## Weitere praktische Tipps",
      "[Späte Ankunft: Plan B für den Transfer](/de/blog/late-arrival-airport-transfer-plan)",
      "[Was die Anmeldung zur Cojauny-Beta bedeutet](/de/blog/cojauny-beta-access-guide)"
    ],
    "tags": [
      "Flughafentransfer",
      "Reiseplanung"
    ],
    "categories": [
      "Reiseplanung"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-015",
    "slug": "shared-airport-ride-checklist",
    "locale": "fr",
    "title": "Liste de contrôle pour partager un transfert",
    "summary": "Confirmez vol, date, terminal, destination et participants. Convenez des bagages, de l’accessibilité et du délai d’attente. Un plan écrit évite les malentendus.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Liste de contrôle pour partager un transfert",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Confirmez vol, date, terminal, destination et participants. Convenez des bagages, de l’accessibilité et du délai d’attente. Un plan écrit évite les malentendus.",
      "## Décider selon votre voyage",
      "Choisissez un rendez-vous public et autorisé. Demandez au personnel où la prise en charge est permise. Ne rejoignez pas un lieu isolé sous pression.",
      "Utilisez un transporteur autorisé, vérifiez le prix et gardez une alternative. Vous pouvez renoncer si le plan change ou vous met mal à l’aise. En urgence, contactez les services locaux ou le personnel.",
      "## Vérifier avant le départ",
      "Vérifiez date, terminal, horaire et destination. Des personnes sur le même vol peuvent avoir des trajets, bagages et heures de départ différents. Fixez une limite d’attente et un rendez-vous public et autorisé.",
      "Consultez les règles de l’aéroport et du transporteur autorisé. Confirmez places, bagages, accessibilité et prix total avant de réserver. Gardez une alternative indépendante. Ne publiez ni documents d’identité, ni cartes d’embarquement, ni données bancaires dans le groupe.",
      "## Confidentialité et conditions",
      "Un e-mail confirmé ne prouve pas l’identité et ne garantit pas le comportement. Supprimer un chat n’efface pas les captures ou copies des autres. Consultez les règles du service et partagez seulement le nécessaire.",
      "## Découvrir la bêta",
      "[Inscrivez-vous sur la liste d’attente](/fr#beta). L’inscription ne garantit ni invitation, ni disponibilité dans un aéroport précis, ni date de lancement.",
      "## Autres guides pratiques",
      "[Arrivée tardive : prévoir un plan B](/fr/blog/late-arrival-airport-transfer-plan)",
      "[Que se passe-t-il après l’inscription à la bêta Cojauny ?](/fr/blog/cojauny-beta-access-guide)"
    ],
    "tags": [
      "transfert aéroport",
      "préparation du voyage"
    ],
    "categories": [
      "préparation du voyage"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-016",
    "slug": "late-arrival-airport-transfer-plan",
    "locale": "es",
    "title": "Llegar tarde: prepara un plan B para el traslado",
    "summary": "Consulta el último servicio útil en la web oficial del operador. Puede salir de otra terminal, requerir un enlace o terminar lejos del alojamiento. Compruébalo otra vez cerca del viaje.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Llegar tarde: prepara un plan B para el traslado",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Consulta el último servicio útil en la web oficial del operador. Puede salir de otra terminal, requerir un enlace o terminar lejos del alojamiento. Compruébalo otra vez cerca del viaje.",
      "## Decide con tus datos de viaje",
      "Deja margen para controles, equipaje y desplazamientos. En grupo, fija un límite de espera y un canal de contacto. Un retraso no obliga a los demás a esperar indefinidamente.",
      "Ten a mano una alternativa autorizada y el contacto del alojamiento. Confirma la entrada tardía. Guarda instrucciones esenciales sin conexión, pero no presupongas un chat sin internet. Si pierdes el enlace, confirma disponibilidad y precio y usa los puntos oficiales.",
      "## Qué comprobar antes de salir",
      "Comprueba fecha, terminal, hora y destino. Dos personas con el mismo vuelo pueden necesitar rutas diferentes, llevar distinto equipaje o salir a horas distintas. Acuerda una hora límite de espera y un punto de encuentro público y permitido.",
      "Consulta las condiciones del aeropuerto y del operador autorizado. Confirma plazas, espacio de equipaje, accesibilidad y precio total antes de reservar. Si faltan datos, conserva una alternativa independiente. No publiques documentos, tarjetas de embarque ni datos bancarios en el grupo.",
      "## Privacidad y condiciones",
      "Un correo confirmado no demuestra la identidad de alguien ni garantiza su comportamiento. La eliminación de un chat tampoco borra capturas o copias ajenas. Consulta las políticas del servicio que utilices y comparte solo lo necesario.",
      "## Conoce la beta",
      "[Apúntate a la lista de espera](/es#beta). El registro no garantiza una invitación, cobertura en un aeropuerto concreto ni una fecha de lanzamiento.",
      "## También te puede ayudar",
      "[Qué ocurre al apuntarte a la beta de Cojauny](/es/blog/cojauny-beta-access-guide)",
      "[Taxi, tren o traslado compartido: cómo elegir](/es/blog/airport-transfer-options)"
    ],
    "tags": [
      "traslado aeropuerto",
      "planificación de viajes"
    ],
    "categories": [
      "planificación de viajes"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-016",
    "slug": "late-arrival-airport-transfer-plan",
    "locale": "en",
    "title": "Late arrival: prepare a transfer backup plan",
    "summary": "Check the last useful service on the operator’s official website. It may leave from another terminal, require a connection or finish far from your accommodation. Recheck near your travel date.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Late arrival: prepare a transfer backup plan",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Check the last useful service on the operator’s official website. It may leave from another terminal, require a connection or finish far from your accommodation. Recheck near your travel date.",
      "## Decide using your travel details",
      "Allow for border checks, luggage and walking. In a group, set a waiting deadline and contact channel. A delay does not require everyone else to wait indefinitely.",
      "Keep a licensed alternative and accommodation contact details ready. Confirm late check-in. Save essential instructions offline but do not assume a chat works without internet. If you miss a connection, confirm price and availability and use official pickup points.",
      "## What to check before leaving",
      "Check date, terminal, timing and destination. People on the same flight may need different routes, carry different luggage or leave at different times. Agree on a waiting deadline and a public, permitted meeting point.",
      "Check the airport rules and licensed operator’s conditions. Confirm seats, luggage space, accessibility and total price before booking. Keep an independent backup when details remain uncertain. Do not publish identity documents, boarding passes or bank details in the group.",
      "## Privacy and conditions",
      "A confirmed email does not establish someone’s identity or guarantee their behaviour. Deleting a chat does not erase other people’s screenshots or copies. Check the service’s policies and share only what coordination requires.",
      "## Explore the beta",
      "[Join the beta waitlist](/#beta). Registration does not guarantee an invitation, coverage at a particular airport or a launch date.",
      "## More practical guides",
      "[What happens when you join the Cojauny beta waitlist](/blog/cojauny-beta-access-guide)",
      "[Taxi, train or shared transfer: how to choose](/blog/airport-transfer-options)"
    ],
    "tags": [
      "airport transfer",
      "travel planning"
    ],
    "categories": [
      "travel planning"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-016",
    "slug": "late-arrival-airport-transfer-plan",
    "locale": "de",
    "title": "Späte Ankunft: Plan B für den Transfer",
    "summary": "Prüfe die letzte passende Verbindung auf der offiziellen Website. Sie fährt vielleicht an einem anderen Terminal ab, erfordert Umstiege oder endet weit von der Unterkunft. Prüfe kurz vor der Reise erneut.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Späte Ankunft: Plan B für den Transfer",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Prüfe die letzte passende Verbindung auf der offiziellen Website. Sie fährt vielleicht an einem anderen Terminal ab, erfordert Umstiege oder endet weit von der Unterkunft. Prüfe kurz vor der Reise erneut.",
      "## Mit deinen Reisedaten entscheiden",
      "Plane Zeit für Kontrollen, Gepäck und Wege ein. Vereinbart eine Wartefrist und einen Kontaktkanal. Ein verspäteter Flug verpflichtet andere nicht zu unbegrenztem Warten.",
      "Halte einen zugelassenen Anbieter und Unterkunftskontakt bereit. Kläre späten Check-in. Speichere wichtige Hinweise offline, gehe aber nicht von einem Chat ohne Internet aus. Kläre bei verpasstem Anschluss Preis und Verfügbarkeit und nutze offizielle Abholpunkte.",
      "## Vor der Abfahrt prüfen",
      "Prüfe Datum, Terminal, Uhrzeit und Ziel. Menschen auf demselben Flug können verschiedene Ziele, Gepäckmengen oder Abfahrtszeiten haben. Vereinbart eine Wartefrist und einen öffentlichen, erlaubten Treffpunkt.",
      "Prüfe Flughafenregeln und Bedingungen des zugelassenen Anbieters. Kläre Sitzplätze, Gepäckraum, Barrierefreiheit und Gesamtpreis vor der Buchung. Halte eine unabhängige Alternative bereit. Veröffentliche keine Ausweise, Bordkarten oder Bankdaten in der Gruppe.",
      "## Datenschutz und Bedingungen",
      "Eine bestätigte E-Mail-Adresse ist kein Identitätsnachweis und garantiert kein Verhalten. Gelöschte Chats entfernen keine fremden Screenshots oder Kopien. Prüfe die Regeln des Dienstes und teile nur nötige Daten.",
      "## Die Beta kennenlernen",
      "[Trag dich in die Beta-Warteliste ein](/de#beta). Die Anmeldung garantiert weder eine Einladung noch einen bestimmten Flughafen oder Starttermin.",
      "## Weitere praktische Tipps",
      "[Was die Anmeldung zur Cojauny-Beta bedeutet](/de/blog/cojauny-beta-access-guide)",
      "[Taxi, Bahn oder geteilter Transfer: So entscheidest du](/de/blog/airport-transfer-options)"
    ],
    "tags": [
      "Flughafentransfer",
      "Reiseplanung"
    ],
    "categories": [
      "Reiseplanung"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-016",
    "slug": "late-arrival-airport-transfer-plan",
    "locale": "fr",
    "title": "Arrivée tardive : prévoir un plan B",
    "summary": "Vérifiez la dernière liaison utile sur le site officiel. Elle peut partir d’un autre terminal, demander une correspondance ou terminer loin du logement. Vérifiez encore près du départ.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Arrivée tardive : prévoir un plan B",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Vérifiez la dernière liaison utile sur le site officiel. Elle peut partir d’un autre terminal, demander une correspondance ou terminer loin du logement. Vérifiez encore près du départ.",
      "## Décider selon votre voyage",
      "Prévoyez contrôles, bagages et déplacements. Fixez une limite d’attente et un canal de contact. Un retard n’impose pas aux autres une attente indéfinie.",
      "Gardez une alternative autorisée et le contact du logement. Confirmez l’arrivée tardive. Enregistrez les instructions hors ligne sans supposer un chat sans internet. En cas de correspondance manquée, confirmez prix et disponibilité et utilisez les points officiels.",
      "## Vérifier avant le départ",
      "Vérifiez date, terminal, horaire et destination. Des personnes sur le même vol peuvent avoir des trajets, bagages et heures de départ différents. Fixez une limite d’attente et un rendez-vous public et autorisé.",
      "Consultez les règles de l’aéroport et du transporteur autorisé. Confirmez places, bagages, accessibilité et prix total avant de réserver. Gardez une alternative indépendante. Ne publiez ni documents d’identité, ni cartes d’embarquement, ni données bancaires dans le groupe.",
      "## Confidentialité et conditions",
      "Un e-mail confirmé ne prouve pas l’identité et ne garantit pas le comportement. Supprimer un chat n’efface pas les captures ou copies des autres. Consultez les règles du service et partagez seulement le nécessaire.",
      "## Découvrir la bêta",
      "[Inscrivez-vous sur la liste d’attente](/fr#beta). L’inscription ne garantit ni invitation, ni disponibilité dans un aéroport précis, ni date de lancement.",
      "## Autres guides pratiques",
      "[Que se passe-t-il après l’inscription à la bêta Cojauny ?](/fr/blog/cojauny-beta-access-guide)",
      "[Taxi, train ou transfert partagé : comment choisir](/fr/blog/airport-transfer-options)"
    ],
    "tags": [
      "transfert aéroport",
      "préparation du voyage"
    ],
    "categories": [
      "préparation du voyage"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-017",
    "slug": "cojauny-beta-access-guide",
    "locale": "es",
    "title": "Qué ocurre al apuntarte a la beta de Cojauny",
    "summary": "La landing recoge solicitudes para una lista de espera. Usa el formulario breve con tu correo o el completo con más datos de viaje. Revisa condiciones y privacidad antes de enviarlo.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Qué ocurre al apuntarte a la beta de Cojauny",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "La landing recoge solicitudes para una lista de espera. Usa el formulario breve con tu correo o el completo con más datos de viaje. Revisa condiciones y privacidad antes de enviarlo.",
      "## Decide con tus datos de viaje",
      "Un alta aceptada confirma que la solicitud se ha guardado. El correo se entrega por separado y puede tardar: revisa también spam. No implica una cuenta activa en la app ni acceso inmediato.",
      "Las novedades del formulario completo son opcionales. Las cookies de analítica tienen preferencias separadas en el pie de página. Un enlace de referido no garantiza prioridad. Guarda el enlace: las estadísticas requieren la sesión de este navegador y no se recuperan buscando un correo.",
      "## Qué comprobar antes de salir",
      "Comprueba fecha, terminal, hora y destino. Dos personas con el mismo vuelo pueden necesitar rutas diferentes, llevar distinto equipaje o salir a horas distintas. Acuerda una hora límite de espera y un punto de encuentro público y permitido.",
      "Consulta las condiciones del aeropuerto y del operador autorizado. Confirma plazas, espacio de equipaje, accesibilidad y precio total antes de reservar. Si faltan datos, conserva una alternativa independiente. No publiques documentos, tarjetas de embarque ni datos bancarios en el grupo.",
      "## Privacidad y condiciones",
      "Un correo confirmado no demuestra la identidad de alguien ni garantiza su comportamiento. La eliminación de un chat tampoco borra capturas o copias ajenas. Consulta las políticas del servicio que utilices y comparte solo lo necesario.",
      "## Conoce la beta",
      "[Apúntate a la lista de espera](/es#beta). El registro no garantiza una invitación, cobertura en un aeropuerto concreto ni una fecha de lanzamiento.",
      "## También te puede ayudar",
      "[Taxi, tren o traslado compartido: cómo elegir](/es/blog/airport-transfer-options)",
      "[Cómo repartir el coste de un taxi al aeropuerto](/es/blog/split-airport-taxi-cost)"
    ],
    "tags": [
      "traslado aeropuerto",
      "planificación de viajes"
    ],
    "categories": [
      "planificación de viajes"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-017",
    "slug": "cojauny-beta-access-guide",
    "locale": "en",
    "title": "What happens when you join the Cojauny beta waitlist",
    "summary": "The landing collects waitlist applications. Use the short email form or provide travel details in the full form. Review terms and privacy before submitting.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "What happens when you join the Cojauny beta waitlist",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "The landing collects waitlist applications. Use the short email form or provide travel details in the full form. Review terms and privacy before submitting.",
      "## Decide using your travel details",
      "An accepted registration means the application has been stored. Email is delivered separately and may take time; check spam too. It does not create an active app account or grant immediate access.",
      "Updates in the full form are optional. Analytics cookies have separate footer preferences. A referral link does not guarantee priority. Save the link: statistics require this browser session and cannot be recovered by looking up an email.",
      "## What to check before leaving",
      "Check date, terminal, timing and destination. People on the same flight may need different routes, carry different luggage or leave at different times. Agree on a waiting deadline and a public, permitted meeting point.",
      "Check the airport rules and licensed operator’s conditions. Confirm seats, luggage space, accessibility and total price before booking. Keep an independent backup when details remain uncertain. Do not publish identity documents, boarding passes or bank details in the group.",
      "## Privacy and conditions",
      "A confirmed email does not establish someone’s identity or guarantee their behaviour. Deleting a chat does not erase other people’s screenshots or copies. Check the service’s policies and share only what coordination requires.",
      "## Explore the beta",
      "[Join the beta waitlist](/#beta). Registration does not guarantee an invitation, coverage at a particular airport or a launch date.",
      "## More practical guides",
      "[Taxi, train or shared transfer: how to choose](/blog/airport-transfer-options)",
      "[How to split an airport taxi fare](/blog/split-airport-taxi-cost)"
    ],
    "tags": [
      "airport transfer",
      "travel planning"
    ],
    "categories": [
      "travel planning"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-017",
    "slug": "cojauny-beta-access-guide",
    "locale": "de",
    "title": "Was die Anmeldung zur Cojauny-Beta bedeutet",
    "summary": "Die Seite nimmt Wartelistenanmeldungen an. Nutze das kurze E-Mail-Formular oder ergänze Reiseangaben im vollständigen Formular. Lies Bedingungen und Datenschutz vor dem Absenden.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Was die Anmeldung zur Cojauny-Beta bedeutet",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "Die Seite nimmt Wartelistenanmeldungen an. Nutze das kurze E-Mail-Formular oder ergänze Reiseangaben im vollständigen Formular. Lies Bedingungen und Datenschutz vor dem Absenden.",
      "## Mit deinen Reisedaten entscheiden",
      "Eine angenommene Anmeldung bedeutet, dass die Anfrage gespeichert wurde. Die E-Mail wird separat versendet und kann später eintreffen; prüfe Spam. Es entsteht kein aktives App-Konto oder sofortiger Zugang.",
      "Neuigkeiten im vollständigen Formular sind optional. Analyse-Cookies haben eigene Einstellungen im Footer. Ein Empfehlungslink garantiert keinen Vorrang. Speichere ihn: Statistiken erfordern diese Browsersitzung und sind nicht per E-Mail-Suche wiederherstellbar.",
      "## Vor der Abfahrt prüfen",
      "Prüfe Datum, Terminal, Uhrzeit und Ziel. Menschen auf demselben Flug können verschiedene Ziele, Gepäckmengen oder Abfahrtszeiten haben. Vereinbart eine Wartefrist und einen öffentlichen, erlaubten Treffpunkt.",
      "Prüfe Flughafenregeln und Bedingungen des zugelassenen Anbieters. Kläre Sitzplätze, Gepäckraum, Barrierefreiheit und Gesamtpreis vor der Buchung. Halte eine unabhängige Alternative bereit. Veröffentliche keine Ausweise, Bordkarten oder Bankdaten in der Gruppe.",
      "## Datenschutz und Bedingungen",
      "Eine bestätigte E-Mail-Adresse ist kein Identitätsnachweis und garantiert kein Verhalten. Gelöschte Chats entfernen keine fremden Screenshots oder Kopien. Prüfe die Regeln des Dienstes und teile nur nötige Daten.",
      "## Die Beta kennenlernen",
      "[Trag dich in die Beta-Warteliste ein](/de#beta). Die Anmeldung garantiert weder eine Einladung noch einen bestimmten Flughafen oder Starttermin.",
      "## Weitere praktische Tipps",
      "[Taxi, Bahn oder geteilter Transfer: So entscheidest du](/de/blog/airport-transfer-options)",
      "[Kosten für ein Flughafentaxi aufteilen](/de/blog/split-airport-taxi-cost)"
    ],
    "tags": [
      "Flughafentransfer",
      "Reiseplanung"
    ],
    "categories": [
      "Reiseplanung"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  },
  {
    "postId": "post-017",
    "slug": "cojauny-beta-access-guide",
    "locale": "fr",
    "title": "Que se passe-t-il après l’inscription à la bêta Cojauny ?",
    "summary": "La page recueille les demandes pour une liste d’attente. Utilisez le formulaire court ou ajoutez des informations de voyage dans le formulaire complet. Lisez conditions et confidentialité avant l’envoi.",
    "heroImage": "/images/og-default.svg",
    "heroAlt": "Que se passe-t-il après l’inscription à la bêta Cojauny ?",
    "heroWidth": 1280,
    "heroHeight": 720,
    "body": [
      "La page recueille les demandes pour une liste d’attente. Utilisez le formulaire court ou ajoutez des informations de voyage dans le formulaire complet. Lisez conditions et confidentialité avant l’envoi.",
      "## Décider selon votre voyage",
      "Une inscription acceptée signifie que la demande est enregistrée. L’e-mail est envoyé séparément et peut tarder ; consultez les indésirables. Cela ne crée pas de compte actif ni d’accès immédiat.",
      "Les actualités sont facultatives. Les cookies d’analyse ont leurs préférences dans le pied de page. Un lien de parrainage ne garantit pas de priorité. Conservez-le : les statistiques nécessitent cette session et ne se récupèrent pas par recherche d’e-mail.",
      "## Vérifier avant le départ",
      "Vérifiez date, terminal, horaire et destination. Des personnes sur le même vol peuvent avoir des trajets, bagages et heures de départ différents. Fixez une limite d’attente et un rendez-vous public et autorisé.",
      "Consultez les règles de l’aéroport et du transporteur autorisé. Confirmez places, bagages, accessibilité et prix total avant de réserver. Gardez une alternative indépendante. Ne publiez ni documents d’identité, ni cartes d’embarquement, ni données bancaires dans le groupe.",
      "## Confidentialité et conditions",
      "Un e-mail confirmé ne prouve pas l’identité et ne garantit pas le comportement. Supprimer un chat n’efface pas les captures ou copies des autres. Consultez les règles du service et partagez seulement le nécessaire.",
      "## Découvrir la bêta",
      "[Inscrivez-vous sur la liste d’attente](/fr#beta). L’inscription ne garantit ni invitation, ni disponibilité dans un aéroport précis, ni date de lancement.",
      "## Autres guides pratiques",
      "[Taxi, train ou transfert partagé : comment choisir](/fr/blog/airport-transfer-options)",
      "[Comment partager le prix d’un taxi à l’aéroport](/fr/blog/split-airport-taxi-cost)"
    ],
    "tags": [
      "transfert aéroport",
      "préparation du voyage"
    ],
    "categories": [
      "préparation du voyage"
    ],
    "publishedAt": "2026-09-30T10:00:00.000Z",
    "updatedAt": "2026-09-30T10:00:00.000Z",
    "author": "Cojauny",
    "readingTimeMinutes": 2
  }
];
export const allBlogPosts: BlogPost[] = [...blogPosts, ...airportBlogPosts];
export function getPostsByLocale(locale: Locale): BlogPost[] { return allBlogPosts.filter(post => post.locale === locale); }
export function getPost(locale: Locale, slug: string): BlogPost | undefined { return allBlogPosts.find(post => post.locale === locale && post.slug === slug); }
