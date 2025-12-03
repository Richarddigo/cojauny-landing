import type { Locale } from '@/locales/config';
import { defaultLocale } from '@/locales/config';

export interface FaqEntry {
  question: string;
  answer: string;
}

const faqEntries: Record<Locale, FaqEntry[]> = {
  es: [
    {
      question: '¿Cómo funciona el sistema de matching de vuelos?',
      answer:
        'Introduce tu número de vuelo (por ejemplo: IB2345) y fecha de salida o llegada. Cojauny consulta nuestra base de datos integrada con APIs de aerolíneas para identificar automáticamente otros pasajeros del mismo vuelo. El sistema verifica la compatibilidad de horarios, terminales y destinos para garantizar una coordinación perfecta. Recibirás sugerencias de grupos con los que compartir transporte basándose en tu aeropuerto de origen o destino.'
    },
    {
      question: '¿Es seguro compartir transporte con personas desconocidas?',
      answer:
        'La seguridad es nuestra máxima prioridad. Todos los usuarios deben verificar su identidad mediante foto y documento oficial. Implementamos un sistema de reputación transparente donde puedes consultar valoraciones y comentarios de otros viajeros antes de confirmar tu participación. Además, nuestra moderación automática detecta y elimina comportamientos sospechosos en tiempo real. Puedes revisar perfiles completos, historial de viajes y comunicarte con el grupo a través del chat antes de tomar cualquier decisión.'
    },
    {
      question: '¿Cómo se coordinan los pagos entre participantes?',
      answer:
        'Cojauny no procesa pagos directamente para mantener costes bajos y máxima flexibilidad. Los participantes coordinan el método de pago que prefieran: efectivo al conductor, Bizum, transferencia bancaria, PayPal o tarjeta compartida. La aplicación proporciona una calculadora automática que divide los costes equitativamente entre todos los participantes y guarda el registro del ahorro estimado en tu perfil. Todos los cálculos son transparentes y visibles para el grupo antes del viaje.'
    },
    {
      question: '¿Puedo cancelar mi participación sin penalización?',
      answer:
        'Sí, tienes total flexibilidad para salir de cualquier evento directamente desde la app sin costes adicionales. Si eres el organizador, al cancelar todos los participantes reciben una notificación instantánea con opciones para reorganizar el grupo o buscar alternativas. Recomendamos avisar con la mayor antelación posible para permitir que otros viajeros se reorganicen. Tu historial de cancelaciones es visible en tu perfil para mantener la transparencia en la comunidad.'
    },
    {
      question: '¿En qué aeropuertos está disponible Cojauny?',
      answer:
        'Actualmente operamos en más de 120 aeropuertos principales a nivel mundial, cubriendo Europa, América, Asia y Oceanía. Nuestra cobertura incluye todos los hubs principales como Madrid-Barajas, Barcelona-El Prat, Londres-Heathrow, París-Charles de Gaulle, Nueva York-JFK, y muchos más. Añadimos nuevos aeropuertos trimestralmente basándonos en la demanda de usuarios. Si tu aeropuerto no aparece en la lista, puedes solicitarlo desde Configuración → Solicitar Aeropuerto y lo priorizaremos según el volumen de peticiones.'
    },
    {
      question: '¿Cómo protege Cojauny mis datos personales y privacidad?',
      answer:
        'Tu privacidad es fundamental para nosotros. Solo mostramos públicamente tu nombre de perfil, país de residencia y foto opcional. Tu email, teléfono, dirección y documentos de identidad permanecen completamente cifrados con encriptación AES-256 y solo son accesibles por ti. Cumplimos estrictamente con el Reglamento General de Protección de Datos (GDPR) europeo. Tú decides manualmente si compartes información adicional como redes sociales o número de teléfono con otros participantes. No vendemos ni compartimos tus datos con terceros bajo ninguna circunstancia. Puedes descargar o eliminar todos tus datos en cualquier momento desde tu perfil.'
    },
    {
      question: '¿La aplicación está disponible en mi idioma?',
      answer:
        'Sí, Cojauny está completamente traducido a 78 idiomas incluyendo español, inglés, francés, alemán, portugués, italiano, chino mandarín, japonés, coreano, árabe, ruso y muchos más. La interfaz detecta automáticamente el idioma de tu dispositivo al iniciar sesión por primera vez. Puedes cambiarlo manualmente en cualquier momento desde Configuración → Idioma. Esto es especialmente útil en grupos multiculturales donde participantes de diferentes países necesitan comunicarse eficazmente.'
    },
    {
      question: '¿Cuánto dinero puedo ahorrar realmente usando Cojauny?',
      answer:
        'El ahorro promedio es del 50-75% en transporte aeroportuario. Ejemplo concreto: un traslado desde el centro de Madrid al Aeropuerto T4 cuesta aproximadamente 30-35€. Si viajas solo, pagas el total. Compartiendo con 3 pasajeros más del mismo vuelo, tu parte es solo 7,50-9€, ahorrando 22-25€ por trayecto. Viajeros frecuentes que hacen 2 viajes mensuales ahorran aproximadamente 500-600€ al año. El panel de impacto en tu perfil muestra estadísticas detalladas de ahorro acumulado, CO₂ evitado y número de conexiones realizadas.'
    },
    {
      question: '¿Qué sucede si mi vuelo se retrasa o cancela?',
      answer:
        'Cojauny recibe actualizaciones de vuelos en tiempo real desde múltiples fuentes (aerolíneas, aeropuertos, FlightAware). Cuando tu vuelo sufre cambios, todos los participantes de tus eventos reciben notificaciones push instantáneas con los detalles actualizados. Puedes ajustar automáticamente la hora del evento con un solo clic, cambiar el punto de encuentro si hay cambio de terminal, o cancelar el evento si el vuelo se cancela definitivamente. El historial de cambios queda registrado para transparencia. Nuestro sistema de alertas tempranas te avisa incluso 6 horas antes del despegue si detecta probabilidad alta de retraso basándose en condiciones meteorológicas o congestión aeroportuaria.'
    },
    {
      question: '¿Cómo funciona el sistema de reputación y valoraciones?',
      answer:
        'Después de completar cada evento, todos los participantes pueden evaluarse mutuamente en tres dimensiones: puntualidad (llegó a la hora acordada), comunicación (respondió rápido en el chat) y amabilidad (fue agradable durante el viaje). Usas un sistema de 5 estrellas con comentario opcional. Estas valoraciones se promedian y aparecen en tu perfil público junto con insignias especiales (Viajero de Oro 100+ viajes, Eco-Warrior 5 toneladas CO₂ ahorradas, etc.). Una reputación alta (4,5+ estrellas) te posiciona automáticamente en los primeros resultados cuando otros buscan compañeros de viaje. Las valoraciones negativas son analizadas por nuestro equipo de moderación para detectar abusos.'
    }
  ],
  en: [
    {
      question: 'How does the flight matching system work?',
      answer:
        'Enter your flight number (e.g., BA1234) and departure or arrival date. Cojauny queries our database integrated with airline APIs to automatically identify other passengers on the same flight. The system verifies schedule compatibility, terminals, and destinations to ensure perfect coordination. You will receive suggestions for groups to share transport with based on your origin or destination airport.'
    },
    {
      question: 'Is it safe to share transport with strangers?',
      answer:
        'Safety is our top priority. All users must verify their identity with a photo and official document. We implement a transparent reputation system where you can check ratings and comments from other travelers before confirming your participation. Additionally, our automatic moderation detects and removes suspicious behavior in real time. You can review complete profiles, travel history, and communicate with the group through chat before making any decision.'
    },
    {
      question: 'How are payments coordinated between participants?',
      answer:
        'Cojauny does not process payments directly to keep costs low and maintain maximum flexibility. Participants coordinate their preferred payment method: cash to the driver, bank transfer, PayPal, or shared card payment. The app provides an automatic calculator that divides costs equitably among all participants and saves the estimated savings record in your profile. All calculations are transparent and visible to the group before the trip.'
    },
    {
      question: 'Can I cancel my participation without penalty?',
      answer:
        'Yes, you have complete flexibility to leave any event directly from the app without additional costs. If you are the organizer, when you cancel all participants receive an instant notification with options to reorganize the group or find alternatives. We recommend giving as much notice as possible to allow other travelers to reorganize. Your cancellation history is visible on your profile to maintain transparency in the community.'
    },
    {
      question: 'Which airports is Cojauny available at?',
      answer:
        'We currently operate at over 120 major airports worldwide, covering Europe, America, Asia, and Oceania. Our coverage includes all major hubs such as Madrid-Barajas, Barcelona-El Prat, London-Heathrow, Paris-Charles de Gaulle, New York-JFK, and many more. We add new airports quarterly based on user demand. If your airport is not on the list, you can request it from Settings → Request Airport and we will prioritize it based on request volume.'
    },
    {
      question: 'How does Cojauny protect my personal data and privacy?',
      answer:
        'Your privacy is fundamental to us. We only publicly display your profile name, country of residence, and optional photo. Your email, phone, address, and identity documents remain completely encrypted with AES-256 encryption and are only accessible by you. We strictly comply with the European General Data Protection Regulation (GDPR). You manually decide whether to share additional information such as social networks or phone number with other participants. We do not sell or share your data with third parties under any circumstances. You can download or delete all your data at any time from your profile.'
    },
    {
      question: 'Is the application available in my language?',
      answer:
        'Yes, Cojauny is fully translated into 78 languages including Spanish, English, French, German, Portuguese, Italian, Mandarin Chinese, Japanese, Korean, Arabic, Russian, and many more. The interface automatically detects your device language when you first log in. You can change it manually at any time from Settings → Language. This is especially useful in multicultural groups where participants from different countries need to communicate effectively.'
    },
    {
      question: 'How much money can I actually save using Cojauny?',
      answer:
        'The average savings is 50-75% on airport transportation. Concrete example: a taxi from central London to Heathrow Airport costs approximately £50-60. If you travel alone, you pay the full amount. Sharing with 3 more passengers from the same flight, your share is only £12-15, saving £35-45 per trip. Frequent travelers making 2 trips monthly save approximately £500-700 per year. The impact panel on your profile shows detailed statistics of accumulated savings, avoided CO₂, and number of connections made.'
    },
    {
      question: 'What happens if my flight is delayed or cancelled?',
      answer:
        'Cojauny receives real-time flight updates from multiple sources (airlines, airports, FlightAware). When your flight experiences changes, all participants in your events receive instant push notifications with updated details. You can automatically adjust the event time with one click, change the meeting point if there is a terminal change, or cancel the event if the flight is definitively cancelled. The change history is recorded for transparency. Our early warning system alerts you even 6 hours before takeoff if it detects a high probability of delay based on weather conditions or airport congestion.'
    },
    {
      question: 'How does the reputation and rating system work?',
      answer:
        'After completing each event, all participants can rate each other in three dimensions: punctuality (arrived on time), communication (responded quickly in chat), and friendliness (was pleasant during the trip). You use a 5-star system with optional comment. These ratings are averaged and appear on your public profile along with special badges (Gold Traveler 100+ trips, Eco-Warrior 5 tons CO₂ saved, etc.). A high reputation (4.5+ stars) automatically positions you in the top results when others search for travel companions. business_proposal ratings are analyzed by our moderation team to detect abuse.'
    }
  ],
  de: [
    {
      question: 'Wie funktioniert das Flug-Matching-System?',
      answer:
        'Gib deine Flugnummer (z.B. LH1234) und Abflug- oder Ankunftsdatum ein. Cojauny durchsucht unsere Datenbank, die mit Airline-APIs integriert ist, um automatisch andere Passagiere desselben Fluges zu identifizieren. Das System überprüft die Kompatibilität von Zeitplänen, Terminals und Zielen, um eine perfekte Koordination zu gewährleisten. Du erhältst Vorschläge für Gruppen, mit denen du den Transport teilen kannst, basierend auf deinem Abflug- oder Zielflughafen.'
    },
    {
      question: 'Ist es sicher, Transport mit Fremden zu teilen?',
      answer:
        'Sicherheit hat für uns höchste Priorität. Alle Nutzer müssen ihre Identität mit Foto und offiziellem Dokument verifizieren. Wir implementieren ein transparentes Reputationssystem, in dem du Bewertungen und Kommentare anderer Reisender überprüfen kannst, bevor du deine Teilnahme bestätigst. Zusätzlich erkennt und entfernt unsere automatische Moderation verdächtiges Verhalten in Echtzeit. Du kannst vollständige Profile, Reisehistorien einsehen und über den Chat mit der Gruppe kommunizieren, bevor du eine Entscheidung triffst.'
    },
    {
      question: 'Wie werden Zahlungen zwischen Teilnehmern koordiniert?',
      answer:
        'Cojauny verarbeitet keine Zahlungen direkt, um die Kosten niedrig zu halten und maximale Flexibilität zu gewährleisten. Die Teilnehmer koordinieren ihre bevorzugte Zahlungsmethode: Bargeld an den Fahrer, Banküberweisung, PayPal oder gemeinsame Kartenzahlung. Die App bietet einen automatischen Rechner, der die Kosten gleichmäßig auf alle Teilnehmer aufteilt und die geschätzten Einsparungen in deinem Profil speichert. Alle Berechnungen sind transparent und für die Gruppe vor der Reise sichtbar.'
    },
    {
      question: 'Kann ich meine Teilnahme ohne Strafe stornieren?',
      answer:
        'Ja, du hast vollständige Flexibilität, jedes Event direkt aus der App zu verlassen, ohne zusätzliche Kosten. Wenn du der Organisator bist, erhalten beim Stornieren alle Teilnehmer eine sofortige Benachrichtigung mit Optionen zur Neuorganisation der Gruppe oder zum Finden von Alternativen. Wir empfehlen, so früh wie möglich Bescheid zu geben, damit sich andere Reisende neu organisieren können. Deine Stornierungshistorie ist in deinem Profil sichtbar, um Transparenz in der Community zu wahren.'
    },
    {
      question: 'An welchen Flughäfen ist Cojauny verfügbar?',
      answer:
        'Wir sind derzeit an über 120 großen Flughäfen weltweit aktiv und decken Europa, Amerika, Asien und Ozeanien ab. Unsere Abdeckung umfasst alle wichtigen Hubs wie Madrid-Barajas, Barcelona-El Prat, London-Heathrow, Paris-Charles de Gaulle, New York-JFK und viele mehr. Wir fügen vierteljährlich neue Flughäfen basierend auf der Nutzernachfrage hinzu. Wenn dein Flughafen nicht auf der Liste steht, kannst du ihn unter Einstellungen → Flughafen anfordern anfordern, und wir priorisieren ihn basierend auf dem Anfragevolumen.'
    },
    {
      question: 'Wie schützt Cojauny meine persönlichen Daten und Privatsphäre?',
      answer:
        'Deine Privatsphäre ist uns fundamental wichtig. Wir zeigen nur deinen Profilnamen, dein Wohnsitzland und ein optionales Foto öffentlich an. Deine E-Mail, Telefonnummer, Adresse und Ausweisdokumente bleiben vollständig mit AES-256-Verschlüsselung verschlüsselt und sind nur für dich zugänglich. Wir halten uns strikt an die Europäische Datenschutz-Grundverordnung (DSGVO). Du entscheidest manuell, ob du zusätzliche Informationen wie soziale Netzwerke oder Telefonnummer mit anderen Teilnehmern teilst. Wir verkaufen oder teilen deine Daten unter keinen Umständen mit Dritten. Du kannst alle deine Daten jederzeit von deinem Profil herunterladen oder löschen.'
    },
    {
      question: 'Ist die Anwendung in meiner Sprache verfügbar?',
      answer:
        'Ja, Cojauny ist vollständig in 78 Sprachen übersetzt, darunter Spanisch, Englisch, Französisch, Deutsch, Portugiesisch, Italienisch, Mandarin-Chinesisch, Japanisch, Koreanisch, Arabisch, Russisch und viele mehr. Die Benutzeroberfläche erkennt automatisch die Sprache deines Geräts beim ersten Anmelden. Du kannst sie jederzeit manuell unter Einstellungen → Sprache ändern. Dies ist besonders nützlich in multikulturellen Gruppen, in denen Teilnehmer aus verschiedenen Ländern effektiv kommunizieren müssen.'
    },
    {
      question: 'Wie viel Geld kann ich mit Cojauny tatsächlich sparen?',
      answer:
        'Die durchschnittliche Ersparnis beträgt 50-75% beim Flughafentransport. Konkretes Beispiel: Ein Taxi vom Zentrum Frankfurts zum Flughafen kostet etwa 30-40€. Wenn du alleine reist, zahlst du den vollen Betrag. Beim Teilen mit 3 weiteren Passagieren desselben Fluges beträgt dein Anteil nur 7,50-10€, wodurch du 20-30€ pro Fahrt sparst. Vielreisende, die 2 Fahrten monatlich machen, sparen etwa 500-700€ pro Jahr. Das Impact-Panel in deinem Profil zeigt detaillierte Statistiken über kumulierte Einsparungen, vermiedenes CO₂ und Anzahl der hergestellten Verbindungen.'
    },
    {
      question: 'Was passiert, wenn mein Flug verspätet ist oder ausfällt?',
      answer:
        'Cojauny erhält Echtzeit-Flugaktualisierungen aus mehreren Quellen (Fluggesellschaften, Flughäfen, FlightAware). Wenn dein Flug Änderungen erfährt, erhalten alle Teilnehmer deiner Events sofortige Push-Benachrichtigungen mit aktualisierten Details. Du kannst die Event-Zeit mit einem Klick automatisch anpassen, den Treffpunkt ändern, wenn es einen Terminalwechsel gibt, oder das Event stornieren, wenn der Flug endgültig gestrichen wird. Die Änderungshistorie wird zur Transparenz aufgezeichnet. Unser Frühwarnsystem warnt dich sogar 6 Stunden vor dem Abflug, wenn es eine hohe Wahrscheinlichkeit für Verspätungen basierend auf Wetterbedingungen oder Flughafenüberlastung erkennt.'
    },
    {
      question: 'Wie funktioniert das Reputations- und Bewertungssystem?',
      answer:
        'Nach Abschluss jedes Events können alle Teilnehmer einander in drei Dimensionen bewerten: Pünktlichkeit (kam pünktlich an), Kommunikation (antwortete schnell im Chat) und Freundlichkeit (war angenehm während der Reise). Du verwendest ein 5-Sterne-System mit optionalem Kommentar. Diese Bewertungen werden gemittelt und erscheinen in deinem öffentlichen Profil zusammen mit speziellen Abzeichen (Gold-Reisender 100+ Fahrten, Öko-Krieger 5 Tonnen CO₂ gespart usw.). Eine hohe Reputation (4,5+ Sterne) positioniert dich automatisch in den Top-Ergebnissen, wenn andere nach Reisebegleitern suchen. business_proposal Bewertungen werden von unserem Moderationsteam analysiert, um Missbrauch zu erkennen.'
    }
  ],
  fr: [
    {
      question: 'Comment fonctionne le système de matching de vols ?',
      answer:
        'Entrez votre numéro de vol (par exemple AF1234) et votre date de départ ou d\'arrivée. Cojauny interroge notre base de données intégrée aux API des compagnies aériennes pour identifier automatiquement les autres passagers du même vol. Le système vérifie la compatibilité des horaires, des terminaux et des destinations pour garantir une coordination parfaite. Vous recevrez des suggestions de groupes avec lesquels partager le transport en fonction de votre aéroport d\'origine ou de destination.'
    },
    {
      question: 'Est-il sûr de partager le transport avec des inconnus ?',
      answer:
        'La sécurité est notre priorité absolue. Tous les utilisateurs doivent vérifier leur identité avec une photo et un document officiel. Nous mettons en œuvre un système de réputation transparent où vous pouvez consulter les évaluations et les commentaires d\'autres voyageurs avant de confirmer votre participation. De plus, notre modération automatique détecte et supprime les comportements suspects en temps réel. Vous pouvez consulter les profils complets, l\'historique des voyages et communiquer avec le groupe via le chat avant de prendre une décision.'
    },
    {
      question: 'Comment les paiements sont-ils coordonnés entre les participants ?',
      answer:
        'Cojauny ne traite pas les paiements directement pour maintenir les coûts bas et une flexibilité maximale. Les participants coordonnent leur méthode de paiement préférée : espèces au conducteur, virement bancaire, PayPal ou paiement par carte partagée. L\'application fournit un calculateur automatique qui divise les coûts équitablement entre tous les participants et enregistre les économies estimées dans votre profil. Tous les calculs sont transparents et visibles pour le groupe avant le voyage.'
    },
    {
      question: 'Puis-je annuler ma participation sans pénalité ?',
      answer:
        'Oui, vous avez une flexibilité totale pour quitter n\'importe quel événement directement depuis l\'application sans frais supplémentaires. Si vous êtes l\'organisateur, lors de l\'annulation tous les participants reçoivent une notification instantanée avec des options pour réorganiser le groupe ou trouver des alternatives. Nous recommandons de prévenir le plus tôt possible pour permettre aux autres voyageurs de se réorganiser. Votre historique d\'annulations est visible sur votre profil pour maintenir la transparence dans la communauté.'
    },
    {
      question: 'Dans quels aéroports Cojauny est-il disponible ?',
      answer:
        'Nous opérons actuellement dans plus de 120 aéroports majeurs dans le monde, couvrant l\'Europe, l\'Amérique, l\'Asie et l\'Océanie. Notre couverture inclut tous les hubs principaux tels que Madrid-Barajas, Barcelone-El Prat, Londres-Heathrow, Paris-Charles de Gaulle, New York-JFK et bien d\'autres. Nous ajoutons de nouveaux aéroports trimestriellement en fonction de la demande des utilisateurs. Si votre aéroport n\'est pas sur la liste, vous pouvez le demander depuis Paramètres → Demander un aéroport et nous le prioriserons en fonction du volume de demandes.'
    },
    {
      question: 'Comment Cojauny protège-t-il mes données personnelles et ma vie privée ?',
      answer:
        'Votre vie privée est fondamentale pour nous. Nous n\'affichons publiquement que votre nom de profil, votre pays de résidence et votre photo optionnelle. Votre email, téléphone, adresse et documents d\'identité restent complètement chiffrés avec un chiffrement AES-256 et ne sont accessibles que par vous. Nous respectons strictement le Règlement Général sur la Protection des Données (RGPD) européen. Vous décidez manuellement si vous partagez des informations supplémentaires telles que les réseaux sociaux ou le numéro de téléphone avec d\'autres participants. Nous ne vendons ni ne partageons vos données avec des tiers en aucune circonstance. Vous pouvez télécharger ou supprimer toutes vos données à tout moment depuis votre profil.'
    },
    {
      question: 'L\'application est-elle disponible dans ma langue ?',
      answer:
        'Oui, Cojauny est entièrement traduit en 78 langues, dont l\'espagnol, l\'anglais, le français, l\'allemand, le portugais, l\'italien, le chinois mandarin, le japonais, le coréen, l\'arabe, le russe et bien d\'autres. L\'interface détecte automatiquement la langue de votre appareil lors de votre première connexion. Vous pouvez la changer manuellement à tout moment depuis Paramètres → Langue. Ceci est particulièrement utile dans les groupes multiculturels où les participants de différents pays doivent communiquer efficacement.'
    },
    {
      question: 'Combien d\'argent puis-je réellement économiser en utilisant Cojauny ?',
      answer:
        'L\'économie moyenne est de 50-75% sur le transport aéroportuaire. Exemple concret : un taxi du centre de Paris à l\'aéroport Charles de Gaulle coûte environ 50-60€. Si vous voyagez seul, vous payez le montant total. En partageant avec 3 autres passagers du même vol, votre part n\'est que de 12-15€, économisant 35-45€ par trajet. Les voyageurs fréquents effectuant 2 trajets mensuels économisent environ 500-700€ par an. Le panneau d\'impact sur votre profil affiche des statistiques détaillées des économies cumulées, du CO₂ évité et du nombre de connexions réalisées.'
    },
    {
      question: 'Que se passe-t-il si mon vol est retardé ou annulé ?',
      answer:
        'Cojauny reçoit des mises à jour de vols en temps réel provenant de multiples sources (compagnies aériennes, aéroports, FlightAware). Lorsque votre vol subit des changements, tous les participants de vos événements reçoivent des notifications push instantanées avec les détails mis à jour. Vous pouvez ajuster automatiquement l\'heure de l\'événement en un clic, changer le point de rencontre s\'il y a un changement de terminal, ou annuler l\'événement si le vol est définitivement annulé. L\'historique des changements est enregistré pour la transparence. Notre système d\'alerte précoce vous avertit même 6 heures avant le décollage s\'il détecte une forte probabilité de retard basée sur les conditions météorologiques ou la congestion de l\'aéroport.'
    },
    {
      question: 'Comment fonctionne le système de réputation et d\'évaluation ?',
      answer:
        'Après avoir terminé chaque événement, tous les participants peuvent s\'évaluer mutuellement selon trois dimensions : ponctualité (arrivé à l\'heure), communication (répondu rapidement dans le chat) et amabilité (agréable pendant le voyage). Vous utilisez un système de 5 étoiles avec commentaire optionnel. Ces évaluations sont moyennées et apparaissent sur votre profil public avec des badges spéciaux (Voyageur Or 100+ trajets, Éco-Guerrier 5 tonnes CO₂ économisées, etc.). Une haute réputation (4,5+ étoiles) vous positionne automatiquement dans les premiers résultats lorsque d\'autres recherchent des compagnons de voyage. Les évaluations négatives sont analysées par notre équipe de modération pour détecter les abus.'
    }
  ]
};

export const getFaqEntries = (locale: Locale) => faqEntries[locale] ?? faqEntries[defaultLocale];
