import type { Locale } from './config';
import { defaultLocale } from './config';

interface LegalSection {
  heading: string;
  body: string;
}

export interface LegalPageCopy {
  title: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
  contact: string;
}

interface LegalCopy {
  privacy: LegalPageCopy;
  cookies: LegalPageCopy;
  terms: LegalPageCopy;
}

const legalCopy: Record<Locale, LegalCopy> = {
  es: {
    privacy: {
      title: 'Política de privacidad',
      intro:
        'En Cojauny tratamos la información personal con responsabilidad y transparencia. Esta política explica cómo gestionamos los datos que nos facilitas cuando solicitas acceso a la beta, compartes feedback o navegas por la web.',
      updatedAt: 'Actualizado el 17 de noviembre de 2025',
      sections: [
        {
          heading: 'Responsable del tratamiento',
          body: 'Mientras formalizamos la sociedad mercantil definitiva, el tratamiento de datos recae en el equipo fundador de Cojauny (en adelante, "Equipo Cojauny"), con organización en España y contacto exclusivo a través de support@cojauny.com. Publicaremos los datos registrales en esta página tan pronto estén disponibles.'
        },
        {
          heading: 'Datos personales que tratamos',
          body: 'Recopilamos la información que nos facilitas directamente (nombre, correo profesional, empresa, caso de uso, mensajes) junto a métricas anónimas de navegación como páginas visitadas, idioma, dispositivo o eventos de formularios, además de registros técnicos necesarios para la seguridad.'
        },
        {
          heading: 'Finalidades y bases jurídicas',
          body: 'Tratamos tus datos para gestionar la solicitud de acceso a la beta y enviarte comunicaciones relacionadas (base jurídica: tu consentimiento), responder consultas o feedback (interés legítimo en mejorar el servicio) y analizar de forma agregada el uso de la web para tomar decisiones de producto (consentimiento para cookies analíticas y, en lo estrictamente necesario, interés legítimo en garantizar la estabilidad y la seguridad).'
        },
        {
          heading: 'Destinatarios y transferencias',
          body: 'Solo compartimos datos con proveedores que nos ayudan a prestar el servicio: infraestructura y base de datos (Supabase Europe), alojamiento web (Vercel), correo transaccional (Resend) y analítica (Google Analytics 4). Todos operan desde la Unión Europea o aplican Cláusulas Contractuales Tipo cuando es necesario transferir datos fuera del EEE. No vendemos ni cedemos tus datos a terceros con fines comerciales.'
        },
        {
          heading: 'Plazos de conservación',
          body: 'Conservamos la información durante la fase beta y la eliminamos transcurridos 12 meses desde tu último contacto o solicitud, salvo obligación legal distinta o que solicites la supresión antes.'
        },
        {
          heading: 'Derechos y reclamaciones',
          body: 'Puedes ejercer los derechos de acceso, rectificación, oposición, portabilidad, limitación y supresión escribiendo a support@cojauny.com. También puedes retirar tu consentimiento en cualquier momento. Si consideras que no hemos atendido correctamente tu petición, tienes derecho a reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).'
        },
        {
          heading: 'Actualizaciones de esta política',
          body: 'Revisaremos esta política cuando cambiemos la forma de tratar tus datos o formalicemos la nueva entidad jurídica. Avisaremos por los canales disponibles y publicaremos la versión vigente en esta página.'
        }
      ],
      contact: 'Para cualquier duda adicional escribe a support@cojauny.com.'
    },
    cookies: {
      title: 'Política de cookies',
      intro:
        'Esta política detalla cómo utilizamos cookies y tecnologías similares en la web de Cojauny y complementa nuestra política de privacidad.',
      updatedAt: 'Actualizado el 17 de noviembre de 2025',
      sections: [
        {
          heading: 'Qué son las cookies',
          body: 'Las cookies son archivos que el navegador guarda temporalmente para recordar preferencias, garantizar la seguridad o medir la actividad. También utilizamos tecnologías similares como localStorage con la misma finalidad.'
        },
        {
          heading: 'Cookies que utilizamos',
          body: 'Clasificamos las cookies en: esenciales (sesión, idioma, balanceo de carga), de preferencias (recordar tus elecciones en el banner) y analíticas (Google Analytics 4 con IP anonimizada). Solo instalamos las categorías de preferencias y analíticas cuando otorgas tu consentimiento explícito.'
        },
        {
          heading: 'Cómo gestionar el consentimiento',
          body: 'Puedes aceptar o rechazar las cookies opcionales desde el banner inicial o a través del enlace de configuración. También puedes borrar o bloquear cookies en tu navegador siguiendo la ayuda de Chrome, Safari, Edge o Firefox.'
        },
        {
          heading: 'Transferencias y conservación',
          body: 'Procesamos los datos generados por las cookies en la Unión Europea siempre que es posible. Cuando colaboramos con proveedores que pueden operar fuera del EEE, aplicamos Cláusulas Contractuales Tipo y medidas adicionales de seguridad. Los identificadores analíticos se conservan durante un máximo de 14 meses.'
        },
        {
          heading: 'Actualizaciones',
          body: 'Revisaremos esta política cuando incorporemos nuevos proveedores o cambiemos los periodos de conservación. Publicaremos la versión vigente en esta página.'
        }
      ],
      contact: 'Si tienes preguntas sobre cookies, contáctanos en support@cojauny.com.'
    },
    terms: {
      title: 'Términos y condiciones de uso',
      intro:
        'Estas condiciones regulan el uso del sitio web cojauny.com durante la fase beta. Al navegar por la página o enviarnos información aceptas las cláusulas que se describen a continuación.',
      updatedAt: 'Actualizado el 17 de noviembre de 2025',
      sections: [
        {
          heading: 'Objeto y alcance',
          body: 'El sitio web ofrece información sobre Cojauny y permite solicitar acceso a la beta privada o enviar comentarios sin coste. El servicio es precomercial, puede modificarse en cualquier momento y se presta sin obligación de disponibilidad continuada.'
        },
        {
          heading: 'Requisitos de acceso',
          body: 'Para utilizar los formularios debes ser mayor de 18 años, facilitar datos veraces y contar con autorización para compartir información de terceras personas. No introduzcas datos confidenciales o sensibles salvo que sean imprescindibles y dispongas de base legal para hacerlo.'
        },
        {
          heading: 'Uso aceptable',
          body: 'No está permitido utilizar la web con fines ilícitos, interferir en su funcionamiento, realizar ingeniería inversa, automatizar descargas masivas ni introducir código malicioso que pueda afectar a otros usuarios o a nuestra infraestructura.'
        },
        {
          heading: 'Propiedad intelectual',
          body: 'El contenido, la marca Cojauny™ y los diseños de la web son titularidad del Equipo Cojauny o de sus licenciantes. Se prohíbe copiar, distribuir o crear obras derivadas sin autorización expresa, salvo los usos previstos en la ley.'
        },
        {
          heading: 'Limitación de responsabilidad',
          body: 'Prestamos el servicio en estado beta y sin garantías de disponibilidad, exactitud o adecuación. No asumimos responsabilidad por daños indirectos, pérdida de datos o lucro cesante derivados del uso de la web. Tu interacción con proveedores externos corre por tu cuenta.'
        },
        {
          heading: 'Modificaciones y contacto',
          body: 'Podemos actualizar estos términos para reflejar cambios en el servicio o en la legislación. Publicaremos la versión vigente en esta página y, si la modificación es relevante, avisaremos por correo. La relación se rige por la legislación española y cualquier disputa se somete a los tribunales de Madrid. Puedes escribirnos en cualquier momento a support@cojauny.com.'
        }
      ],
      contact: 'Para cuestiones legales escribe a support@cojauny.com.'
    }
  },
  en: {
    privacy: {
      title: 'Privacy Policy',
      intro:
        'We handle personal information responsibly and transparently. This notice describes how we process the data you share when requesting beta access, submitting feedback or browsing the website.',
      updatedAt: 'Updated on November 17, 2025',
      sections: [
        {
          heading: 'Data controller',
          body: 'Until the company incorporation is completed, data processing is carried out by the Cojauny founding team (the “Cojauny Team”), organised in Spain and reachable exclusively at support@cojauny.com. We will publish the corporate details here as soon as they are available.'
        },
        {
          heading: 'Personal data we process',
          body: 'We process the information you provide directly (name, professional email, company, use case, messages), aggregated browsing analytics such as visited pages, language, device or form events, and basic technical logs required for security.'
        },
        {
          heading: 'Purposes and legal bases',
          body: 'We use your data to manage beta requests and send related communications (legal basis: your consent), respond to enquiries or feedback (legitimate interest in improving the service) and analyse website usage in aggregate to make product decisions (consent for analytics cookies and, where strictly necessary, legitimate interest in keeping the site stable and secure).'
        },
        {
          heading: 'Recipients and transfers',
          body: 'We only share data with providers that help us deliver the service: infrastructure and database (Supabase Europe), hosting (Vercel), transactional email (Resend) and analytics (Google Analytics 4). They operate from the European Union or rely on Standard Contractual Clauses when data leaves the EEA. We never sell or exchange your data for advertising purposes.'
        },
        {
          heading: 'Retention period',
          body: 'We keep your information during the beta phase and delete it 12 months after your last interaction or request, unless the law requires a longer period or you request deletion earlier.'
        },
        {
          heading: 'Your rights',
          body: 'You can request access, rectification, objection, portability, restriction or erasure by emailing support@cojauny.com. You may withdraw consent at any time. If you believe we have not handled your request properly you can lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).'
        },
        {
          heading: 'Policy updates',
          body: 'We will revise this policy whenever we change how we process your data or when the new corporate entity is formalised. We will notify you through the available channels and publish the latest version on this page.'
        }
      ],
      contact: 'Questions? Reach us at support@cojauny.com.'
    },
    cookies: {
      title: 'Cookie Policy',
      intro:
        'This policy explains how Cojauny uses cookies and similar technologies, complementing the information provided in the privacy notice.',
      updatedAt: 'Updated on November 17, 2025',
      sections: [
        {
          heading: 'What cookies are',
          body: 'Cookies are small files stored by your browser to remember preferences, secure sessions or measure activity. We may also rely on similar technologies such as localStorage for the same purposes.'
        },
        {
          heading: 'Cookies we use',
          body: 'We group cookies into essential (session management, language, load balancing), preference (store your choices in the consent banner) and analytics (Google Analytics 4 with IP anonymisation). Preference and analytics cookies only load when you provide explicit consent.'
        },
        {
          heading: 'Managing consent',
          body: 'You can accept or reject optional cookies from the initial banner or via the configuration link. You may also delete or block cookies in your browser by following the help pages for Chrome, Safari, Edge or Firefox.'
        },
        {
          heading: 'Transfers and retention',
          body: 'We process cookie data within the European Union whenever possible. When providers may operate outside the EEA we rely on Standard Contractual Clauses and additional safeguards. Analytics identifiers are retained for up to 14 months.'
        },
        {
          heading: 'Updates',
          body: 'We will update this policy when we add new providers or change retention periods, and the latest version will always be available on this page.'
        }
      ],
      contact: 'For cookie questions, email support@cojauny.com.'
    },
    terms: {
      title: 'Terms of Use',
      intro:
        'These terms govern the use of cojauny.com during the beta phase. By browsing the site or sending us information you agree to the clauses below.',
      updatedAt: 'Updated on November 17, 2025',
      sections: [
        {
          heading: 'Purpose and scope',
          body: 'The site provides information about Cojauny and lets you request beta access or submit feedback free of charge. The service is pre-commercial, may change at any time and is offered without a commitment of continuous availability.'
        },
        {
          heading: 'Eligibility',
          body: 'You must be at least 18 years old, provide accurate information and be authorised to share third-party data. Please avoid submitting confidential or sensitive information unless it is strictly necessary and you have a lawful basis to do so.'
        },
        {
          heading: 'Acceptable use',
          body: 'You may not use the site for unlawful purposes, interfere with its operation, reverse engineer its components, automate large-scale extraction or introduce malicious code that could harm other users or our infrastructure.'
        },
        {
          heading: 'Intellectual property',
          body: 'The content, design and Cojauny™ brand belong to the Cojauny Team or its licensors. You may not copy, distribute or create derivative works without prior written permission, except where mandatory law allows it.'
        },
        {
          heading: 'Liability',
          body: 'The service is provided on a beta and “as is” basis. We do not guarantee accuracy, availability or suitability, and we are not liable for indirect damages, data loss or loss of profit arising from the use of the site. Your interactions with external providers are at your own risk.'
        },
        {
          heading: 'Changes and contact',
          body: 'We may update these terms to reflect changes in the service or applicable law. We will publish the current version on this page and notify you by email when the changes are material. Spanish law governs the relationship and any dispute will be submitted to the courts of Madrid. Contact us anytime at support@cojauny.com.'
        }
      ],
      contact: 'For legal matters contact support@cojauny.com.'
    }
  },
  de: {
    privacy: {
      title: 'Datenschutzerklärung',
      intro:
        'Wir verarbeiten personenbezogene Daten verantwortungsbewusst und transparent. Diese Erklärung erläutert, welche Daten wir erheben, wenn du einen Beta-Zugang anfragst, Feedback sendest oder die Website nutzt.',
      updatedAt: 'Aktualisiert am 17. November 2025',
      sections: [
        {
          heading: 'Verantwortliche Stelle',
          body: 'Bis zur formellen Gründung der Gesellschaft übernimmt das Gründerteam von Cojauny (nachfolgend "Cojauny-Team") die Datenverarbeitung. Das Team ist in Spanien organisiert und ausschließlich unter support@cojauny.com erreichbar. Die Registerdaten veröffentlichen wir hier, sobald sie vorliegen.'
        },
        {
          heading: 'Welche Daten wir verarbeiten',
          body: 'Wir verarbeiten die Informationen, die du direkt bereitstellst (Name, berufliche E-Mail, Unternehmen, geplante Nutzung, Nachrichten), aggregierte Nutzungsdaten wie besuchte Seiten, Sprache, Gerät oder Formularevents sowie technische Protokolle, die für die Sicherheit erforderlich sind.'
        },
        {
          heading: 'Zwecke und Rechtsgrundlagen',
          body: 'Wir nutzen deine Daten, um Beta-Anfragen zu verwalten und dir dazugehörige Informationen zu senden (Rechtsgrundlage: deine Einwilligung), Rückfragen oder Feedback zu beantworten (berechtigtes Interesse an der Verbesserung des Dienstes) und die Websitenutzung aggregiert auszuwerten (Einwilligung für Analyse-Cookies sowie, soweit unbedingt erforderlich, berechtigtes Interesse an Stabilität und Sicherheit).'
        },
        {
          heading: 'Empfänger und Übermittlungen',
          body: 'Wir teilen Daten nur mit Dienstleistern, die uns bei der Bereitstellung unterstützen: Infrastruktur und Datenbank (Supabase Europe), Hosting (Vercel), Transaktionsmails (Resend) sowie Analytik (Google Analytics 4). Diese Anbieter agieren innerhalb der EU oder setzen Standardvertragsklauseln ein, wenn Daten den EWR verlassen. Eine Weitergabe zu Werbezwecken findet nicht statt.'
        },
        {
          heading: 'Aufbewahrungsdauer',
          body: 'Wir speichern deine Informationen während der Beta-Phase und löschen sie spätestens 12 Monate nach deinem letzten Kontakt oder deiner Anfrage, sofern keine gesetzlichen Pflichten oder deine vorherige Löschanweisung entgegenstehen.'
        },
        {
          heading: 'Deine Rechte',
          body: 'Du kannst Auskunft, Berichtigung, Widerspruch, Datenübertragbarkeit, Einschränkung oder Löschung verlangen, indem du uns an support@cojauny.com schreibst. Eine erteilte Einwilligung kannst du jederzeit widerrufen. Wenn du der Ansicht bist, dass wir dein Anliegen nicht korrekt bearbeitet haben, kannst du Beschwerde bei der spanischen Datenschutzbehörde (www.aepd.es) einlegen.'
        },
        {
          heading: 'Aktualisierungen',
          body: 'Wir passen diese Erklärung an, sobald sich unsere Verarbeitung ändert oder die neue juristische Person feststeht. Über relevante Änderungen informieren wir dich über verfügbare Kanäle und veröffentlichen die aktuelle Version auf dieser Seite.'
        }
      ],
      contact: 'Fragen? Melde dich unter support@cojauny.com.'
    },
    cookies: {
      title: 'Cookie-Richtlinie',
      intro:
        'Diese Richtlinie erläutert, wie Cojauny Cookies und ähnliche Technologien einsetzt und ergänzt die Hinweise in der Datenschutzerklärung.',
      updatedAt: 'Aktualisiert am 17. November 2025',
      sections: [
        {
          heading: 'Was sind Cookies',
          body: 'Cookies sind kleine Dateien, die der Browser speichert, um Einstellungen zu merken, Sitzungen zu sichern oder Aktivitäten zu messen. Wir nutzen bei Bedarf vergleichbare Technologien wie localStorage mit denselben Zielen.'
        },
        {
          heading: 'Welche Cookies wir einsetzen',
          body: 'Wir unterscheiden zwischen essenziellen Cookies (Sitzungsverwaltung, Sprache, Lastverteilung), Präferenz-Cookies (speichern deine Auswahl im Consent-Banner) und Analyse-Cookies (Google Analytics 4 mit anonymisierter IP). Präferenz- und Analyse-Cookies setzen wir ausschließlich nach deiner ausdrücklichen Einwilligung.'
        },
        {
          heading: 'Einwilligung verwalten',
          body: 'Du kannst optionale Cookies über das Banner annehmen oder ablehnen und deine Entscheidung jederzeit über den Einstellungslink ändern. Zusätzlich lassen sich Cookies in deinem Browser (Chrome, Safari, Edge, Firefox) löschen oder blockieren.'
        },
        {
          heading: 'Übermittlungen und Speicherfrist',
          body: 'Wir verarbeiten Cookie-Daten nach Möglichkeit innerhalb der EU. Falls Dienstleister außerhalb des EWR agieren, nutzen wir Standardvertragsklauseln und zusätzliche Schutzmaßnahmen. Analyse-IDs bewahren wir höchstens 14 Monate auf.'
        },
        {
          heading: 'Änderungen',
          body: 'Wir aktualisieren diese Richtlinie, wenn neue Anbieter hinzukommen oder sich Speicherfristen ändern. Die jeweils gültige Version findest du stets auf dieser Seite.'
        }
      ],
      contact: 'Bei Fragen zu Cookies erreichst du uns unter support@cojauny.com.'
    },
    terms: {
      title: 'Nutzungsbedingungen',
      intro:
        'Diese Bedingungen regeln die Nutzung von cojauny.com während der Beta-Phase. Wenn du die Website verwendest oder uns Informationen sendest, akzeptierst du die folgenden Regelungen.',
      updatedAt: 'Aktualisiert am 17. November 2025',
      sections: [
        {
          heading: 'Zweck und Geltungsbereich',
          body: 'Die Website stellt Informationen über Cojauny bereit und ermöglicht kostenlose Beta-Anfragen sowie Feedback. Der Dienst ist vorkommerziell, kann jederzeit verändert werden und wird ohne Garantie auf dauerhafte Verfügbarkeit bereitgestellt.'
        },
        {
          heading: 'Zugangsvoraussetzungen',
          body: 'Du musst mindestens 18 Jahre alt sein, korrekte Angaben machen und berechtigt sein, Daten Dritter zu teilen. Verzichte darauf, vertrauliche oder sensible Informationen zu übermitteln, sofern dies nicht unbedingt erforderlich und rechtlich zulässig ist.'
        },
        {
          heading: 'Akzeptable Nutzung',
          body: 'Es ist untersagt, die Website zu illegalen Zwecken zu verwenden, ihren Betrieb zu stören, Komponenten zurückzuentwickeln, automatisierte Massendownloads durchzuführen oder schädlichen Code einzuschleusen, der andere Nutzer oder unsere Infrastruktur beeinträchtigen könnte.'
        },
        {
          heading: 'Geistiges Eigentum',
          body: 'Inhalte, Gestaltung und die Marke Cojauny™ gehören dem Cojauny-Team oder seinen Lizenzgebern. Kopieren, Verteilen oder Ableiten ist ohne vorherige schriftliche Zustimmung unzulässig, soweit das Gesetz nichts anderes vorsieht.'
        },
        {
          heading: 'Haftung',
          body: 'Der Dienst befindet sich in der Beta-Phase und wird ohne Gewähr bereitgestellt. Wir übernehmen keine Haftung für mittelbare Schäden, Datenverluste oder entgangenen Gewinn, die durch die Nutzung der Website entstehen. Interaktionen mit externen Anbietern erfolgen auf eigene Verantwortung.'
        },
        {
          heading: 'Änderungen und Kontakt',
          body: 'Wir können diese Bedingungen anpassen, wenn sich der Dienst oder die Rechtslage ändert. Die aktuelle Fassung veröffentlichen wir auf dieser Seite und informieren bei wesentlichen Änderungen per E-Mail. Es gilt spanisches Recht; Gerichtsstand ist Madrid. Für Rückfragen kannst du uns jederzeit unter support@cojauny.com schreiben.'
        }
      ],
      contact: 'Rechtliche Anfragen an support@cojauny.com.'
    }
  },
  fr: {
    privacy: {
      title: 'Politique de confidentialité',
      intro:
        'Nous traitons vos données personnelles avec responsabilité et transparence. Cette politique détaille les informations que nous collectons lorsque vous demandez l’accès à la bêta, partagez un retour ou naviguez sur le site.',
      updatedAt: 'Mis à jour le 17 novembre 2025',
      sections: [
        {
          heading: 'Responsable du traitement',
          body: 'Le traitement est assuré par l’équipe fondatrice de Cojauny (ci-après « Équipe Cojauny ») tant que l’entité juridique définitive n’est pas constituée. L’équipe est organisée en Espagne et joignable exclusivement à support@cojauny.com. Les informations d’immatriculation seront publiées sur cette page dès qu’elles seront disponibles.'
        },
        {
          heading: 'Données que nous traitons',
          body: 'Nous collectons les informations fournies directement (nom, e-mail professionnel, entreprise, cas d’usage, messages), des métriques de navigation agrégées telles que pages consultées, langue, appareil ou événements de formulaires, ainsi que des journaux techniques nécessaires à la sécurité.'
        },
        {
          heading: 'Finalités et bases légales',
          body: 'Nous utilisons vos données pour gérer les demandes d’accès à la bêta et vous adresser des communications associées (base légale : votre consentement), répondre aux questions ou retours (intérêt légitime à améliorer le service) et analyser de manière agrégée l’usage du site (consentement pour les cookies analytiques et, si nécessaire, intérêt légitime à garantir la stabilité et la sécurité).' 
        },
        {
          heading: 'Destinataires et transferts',
          body: 'Nous partageons les données uniquement avec les prestataires qui nous aident à fournir le service : infrastructure et base de données (Supabase Europe), hébergement (Vercel), e-mails transactionnels (Resend) et analytique (Google Analytics 4). Ces prestataires opèrent dans l’Union européenne ou appliquent des Clauses Contractuelles Types lorsqu’une exportation hors EEE est nécessaire. Nous ne vendons ni n’échangeons vos données à des fins publicitaires.'
        },
        {
          heading: 'Durées de conservation',
          body: 'Les informations sont conservées pendant la phase bêta puis supprimées 12 mois après votre dernier contact ou demande, sauf obligation légale contraire ou suppression anticipée à votre demande.'
        },
        {
          heading: 'Vos droits',
          body: 'Vous pouvez demander l’accès, la rectification, l’opposition, la portabilité, la limitation ou l’effacement en écrivant à support@cojauny.com. Vous pouvez retirer votre consentement à tout moment. Si vous estimez que votre demande n’a pas été traitée correctement, vous pouvez saisir l’Agence espagnole de protection des données (www.aepd.es).'
        },
        {
          heading: 'Mises à jour',
          body: 'Nous réviserons cette politique si nos traitements évoluent ou lorsque l’entité juridique sera formalisée. Nous vous informerons par les canaux disponibles et publierons la version la plus récente sur cette page.'
        }
      ],
      contact: 'Pour toute question, écrivez à support@cojauny.com.'
    },
    cookies: {
      title: 'Politique de cookies',
      intro:
        'La présente politique décrit l’usage des cookies et technologies similaires sur cojauny.com et complète les informations fournies dans la politique de confidentialité.',
      updatedAt: 'Mis à jour le 17 novembre 2025',
      sections: [
        {
          heading: 'Ce que sont les cookies',
          body: 'Les cookies sont de petits fichiers enregistrés par votre navigateur pour mémoriser des préférences, sécuriser les sessions ou mesurer l’activité. Nous pouvons également utiliser des technologies équivalentes comme le localStorage aux mêmes fins.'
        },
        {
          heading: 'Cookies que nous utilisons',
          body: 'Nous distinguons les cookies essentiels (gestion de session, langue, répartition de charge), de préférence (mémorisent vos choix dans la bannière de consentement) et analytiques (Google Analytics 4 avec anonymisation d’IP). Les cookies de préférence et analytiques ne sont déposés qu’avec votre consentement explicite.'
        },
        {
          heading: 'Gestion du consentement',
          body: 'Vous pouvez accepter ou refuser les cookies optionnels depuis la bannière initiale ou via le lien de configuration. Il est également possible de supprimer ou bloquer les cookies dans votre navigateur (Chrome, Safari, Edge, Firefox).'
        },
        {
          heading: 'Transferts et durée de conservation',
          body: 'Nous traitons les données issues des cookies au sein de l’Union européenne autant que possible. Lorsque des prestataires opèrent en dehors de l’EEE, nous appliquons des Clauses Contractuelles Types et des mesures de sécurité supplémentaires. Les identifiants analytiques sont conservés au maximum 14 mois.'
        },
        {
          heading: 'Évolutions',
          body: 'Nous mettrons cette politique à jour en cas de nouveaux prestataires ou de changement de durée de conservation. La version la plus récente restera disponible sur cette page.'
        }
      ],
      contact: 'Questions sur les cookies ? support@cojauny.com.'
    },
    terms: {
      title: 'Conditions d’utilisation',
      intro:
        'Les présentes conditions régissent l’usage de cojauny.com pendant la phase bêta. En consultant le site ou en nous adressant des informations, vous acceptez les clauses suivantes.',
      updatedAt: 'Mis à jour le 17 novembre 2025',
      sections: [
        {
          heading: 'Objet et portée',
          body: 'Le site fournit des informations sur Cojauny et permet de demander un accès à la bêta ou d’envoyer un retour sans frais. Le service est précommercial, susceptible d’évoluer à tout moment et fourni sans garantie de disponibilité continue.'
        },
        {
          heading: 'Conditions d’accès',
          body: 'Vous devez avoir au moins 18 ans, fournir des informations exactes et être autorisé à partager des données de tiers. Veuillez éviter de transmettre des données confidentielles ou sensibles sauf nécessité absolue et base légale adéquate.'
        },
        {
          heading: 'Utilisation acceptable',
          body: 'Il est interdit d’utiliser le site à des fins illicites, d’en perturber le fonctionnement, d’effectuer de l’ingénierie inverse, d’automatiser des extractions massives ou d’introduire du code malveillant pouvant nuire à d’autres utilisateurs ou à notre infrastructure.'
        },
        {
          heading: 'Propriété intellectuelle',
          body: 'Le contenu, le design et la marque Cojauny™ sont la propriété de l’Équipe Cojauny ou de ses concédants. Toute reproduction, distribution ou création d’œuvres dérivées est interdite sans autorisation écrite préalable, sauf dispositions légales contraires.'
        },
        {
          heading: 'Responsabilité',
          body: 'Le service est fourni en version bêta et « en l’état ». Nous n’offrons aucune garantie d’exactitude, de disponibilité ou d’adéquation et déclinons toute responsabilité pour les dommages indirects, la perte de données ou le manque à gagner liés à l’usage du site. Les interactions avec des prestataires externes relèvent de votre responsabilité.'
        },
        {
          heading: 'Modifications et contact',
          body: 'Nous pouvons modifier ces conditions pour refléter l’évolution du service ou de la législation. La version en vigueur sera publiée sur cette page et nous vous préviendrons par e-mail en cas de changement substantiel. Le droit espagnol s’applique et tout litige sera porté devant les tribunaux de Madrid. Vous pouvez nous contacter à support@cojauny.com.'
        }
      ],
      contact: 'Pour toute demande légale, écrivez à support@cojauny.com.'
    }
  }
};

export const getLegalCopy = (locale: Locale): LegalCopy => legalCopy[locale] ?? legalCopy[defaultLocale];
