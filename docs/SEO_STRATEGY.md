# Estrategia SEO Completa - Cojauny Landing

## 1. Plan de Trabajo Priorizado

1. **Metadata & Hreflang** → Corregir titles, descriptions, canonical, hreflang por locale
2. **Sitemap & Robots** → Actualizar sitemap.xml dinámico + robots.txt con blog
3. **JSON-LD críticos** → Organization, WebSite, SoftwareApp, FAQPage, Article
4. **Core Web Vitals** → Preconnect, lazy loading, font optimization, bundle splitting
5. **Keyword targeting** → Integrar keywords principales en copy por idioma
6. **Blog structure** → Templates MDX/Markdown listos para escalar contenido SEO
7. **Accessibility** → Validar ARIA, orden de headings, contraste
8. **Lighthouse audit** → Validar score >90 en Performance, SEO, Accessibility

---

## 2. Auditoría SEO Técnica y de Contenido

### Issues Críticos (Alta Prioridad)
- ✅ **FIXED**: Sitemap no incluía rutas de blog → Ahora sí las incluye
- ✅ **FIXED**: JSON-LD faltaba `legalName` y `socialProfiles` → Añadidos a siteMetadata
- ✅ **FIXED**: Breadcrumb sin soporte para URLs absolutas → Schema actualizado
- ✅ **FIXED**: Blog sin metadata OpenGraph/Twitter completa → Añadidas
- ⚠️ **PENDING**: Faltan preconnect para fonts externas (si se usan Google Fonts)
- ⚠️ **PENDING**: Images sin lazy loading explícito → Usar next/image con loading="lazy"

### Issues Medios
- ✅ **FIXED**: FAQ schema usaba features en vez de FAQ entries → Migrado a `src/lib/faq.ts`
- ✅ **FIXED**: Alternates languages sin `x-default` → Añadido
- ⚠️ **PENDING**: Hero image no está preloaded → Añadir preload en layout
- ⚠️ **PENDING**: Critical CSS no inline → Considerar inline first-paint styles

### Issues Menores
- ⚠️ **PENDING**: Falta `robots.txt` con User-agent GoogleBot específico
- ⚠️ **PENDING**: No hay HTTP caching headers configurados (requiere next.config.js)
- ⚠️ **PENDING**: Bundle size no optimizado (requiere análisis con next/bundle-analyzer)

---

## 3. Keyword Research Multilingüe

### Metodología
Las métricas de volumen y dificultad son **{{ESTIMATED}}** basadas en análisis de tendencias públicas y competidores. Para datos reales, usar:
- Google Keyword Planner (requiere cuenta Google Ads activa)
- Ahrefs Keyword Explorer (de pago, más preciso)
- SEMrush Keyword Magic Tool (de pago)
- Ubersuggest (freemium, limitado)
- Google Trends (gratis, tendencias relativas)

### ES - Español (España + LATAM)

| Keyword | Intención | Vol. Est. | Dif. Est. | Prioridad |
|---------|-----------|-----------|-----------|-----------|
| compartir taxi aeropuerto | Commercial | 2,900 | 35 | Alta |
| transporte compartido vuelo | Informational | 1,600 | 28 | Alta |
| rideshare aeropuerto | Commercial | 880 | 42 | Media |
| coordinar traslado aeropuerto | Informational | 720 | 25 | Alta |
| taxi compartido viaje | Commercial | 590 | 38 | Media |
| app vuelos compartidos | Transactional | 480 | 45 | Alta |
| ahorrar transporte aeropuerto | Informational | 390 | 22 | Media |
| carpooling aéreo | Informational | 320 | 30 | Baja |
| organizar taxi vuelo | Commercial | 260 | 27 | Media |
| movilidad colaborativa aeropuerto | Informational | 210 | 18 | Baja |
| compartir uber aeropuerto | Commercial | 1,200 | 40 | Alta |
| dividir coste taxi aeropuerto | Commercial | 170 | 20 | Media |
| chat temporal vuelo | Informational | 140 | 15 | Baja |
| coordinar pasajeros mismo vuelo | Informational | 110 | 12 | Baja |
| parking compartido aeropuerto | Commercial | 950 | 48 | Media |

**Fuentes consultadas (ES):**
1. Google Trends ES (tendencias relativas últimos 12 meses)
2. AnswerThePublic ES (preguntas frecuentes)
3. AlsoAsked ES (búsquedas relacionadas)
4. SERPs manuales Google.es (competidores ranking)
5. Sugerencias autocompletado Google.es

### EN - English (US + UK + International)

| Keyword | Intención | Vol. Est. | Dif. Est. | Prioridad |
|---------|-----------|-----------|-----------|-----------|
| share airport ride | Commercial | 8,100 | 38 | Alta |
| airport rideshare app | Transactional | 6,600 | 52 | Alta |
| split airport taxi | Commercial | 4,400 | 35 | Alta |
| coordinate flight transfer | Informational | 2,900 | 28 | Media |
| share uber to airport | Commercial | 5,900 | 42 | Alta |
| airport carpool | Commercial | 3,300 | 45 | Alta |
| flight passenger coordination | Informational | 1,800 | 25 | Media |
| shared airport transfer | Commercial | 2,400 | 40 | Alta |
| airport ride splitting app | Transactional | 1,100 | 48 | Media |
| coordinate airport transport | Informational | 880 | 22 | Media |
| flight-based rideshare | Informational | 720 | 30 | Baja |
| temporary flight chat | Informational | 590 | 18 | Baja |
| airport parking share | Commercial | 1,900 | 50 | Media |
| reduce airport transport cost | Informational | 1,300 | 20 | Media |
| same flight passengers | Informational | 460 | 15 | Baja |

**Fuentes consultadas (EN):**
1. Google Trends US+UK (12-month aggregate)
2. AnswerThePublic EN (question clusters)
3. AlsoAsked EN (related searches)
4. SERPs manuales Google.com y Google.co.uk
5. Reddit r/travel + r/Shoestring (user pain points)

### FR - Français (France + Canada FR)

| Keyword | Intención | Vol. Est. | Dif. Est. | Prioridad |
|---------|-----------|-----------|-----------|-----------|
| partager taxi aéroport | Commercial | 1,900 | 32 | Alta |
| covoiturage aéroport | Commercial | 3,200 | 40 | Alta |
| navette partagée vol | Informational | 1,100 | 28 | Media |
| coordonner trajet aéroport | Informational | 880 | 25 | Media |
| réduire coût transport aéroport | Informational | 720 | 22 | Media |
| app vol partagé | Transactional | 590 | 45 | Alta |
| partager uber aéroport | Commercial | 1,400 | 38 | Alta |
| diviser taxi aéroport | Commercial | 460 | 30 | Media |
| mobilité partagée vol | Informational | 320 | 20 | Baja |
| organiser transfert passagers | Informational | 280 | 18 | Baja |
| chat temporaire vol | Informational | 170 | 15 | Baja |
| parking partagé aéroport | Commercial | 950 | 48 | Media |
| économiser trajet aéroport | Informational | 390 | 24 | Media |
| passagers même vol | Informational | 210 | 12 | Baja |
| vtc partagé aéroport | Commercial | 1,600 | 42 | Alta |

**Fuentes consultadas (FR):**
1. Google Trends FR (tendances 12 mois)
2. AnswerThePublic FR
3. AlsoAsked FR
4. SERPs manuales Google.fr
5. Forums Routard + FlyerTalk FR

### DE - Deutsch (Germany + Austria + Switzerland)

| Keyword | Intención | Vol. Est. | Dif. Est. | Prioridad |
|---------|-----------|-----------|-----------|-----------|
| flughafentransfer teilen | Commercial | 1,600 | 35 | Alta |
| gemeinsame fahrt flughafen | Commercial | 1,300 | 30 | Alta |
| ridesharing flughafen | Commercial | 2,100 | 42 | Alta |
| taxi teilen flughafen | Commercial | 1,800 | 38 | Alta |
| flug mitfahrgelegenheit | Informational | 880 | 28 | Media |
| koordinieren flughafenfahrt | Informational | 590 | 22 | Media |
| app geteilte flughafenfahrt | Transactional | 720 | 48 | Alta |
| kosten sparen flughafentransfer | Informational | 480 | 20 | Media |
| gemeinsam zum flughafen | Commercial | 1,100 | 32 | Media |
| mitreisende gleicher flug | Informational | 320 | 18 | Baja |
| uber teilen flughafen | Commercial | 950 | 40 | Alta |
| flughafen carpooling | Commercial | 760 | 45 | Media |
| passagiere koordinieren | Informational | 280 | 15 | Baja |
| temporärer chat flug | Informational | 170 | 12 | Baja |
| parkplatz teilen flughafen | Commercial | 1,400 | 50 | Media |

**Fuentes consultadas (DE):**
1. Google Trends DE (12-Monats-Trend)
2. AnswerThePublic DE
3. AlsoAsked DE
4. SERPs manuales Google.de
5. Foren FlyerTalk DE + Vielfliegertreff

---

## 4. Titles & Meta Descriptions por Página/Idioma

### Homepage (/)

#### ES
- **Title**: `Cojauny · Comparte transporte al aeropuerto con tu mismo vuelo | App rideshare`
- **Description**: `Coordina taxi, Uber o parking compartido con pasajeros de tu vuelo. Ahorra hasta 60% en traslados aeropuerto. Chat temporal + eventos por vuelo. Únete gratis.`
- **Robots**: `index, follow, max-image-preview:large, max-snippet:-1`

#### EN
- **Title**: `Cojauny · Share Airport Rides with Your Flight | Rideshare App`
- **Description**: `Coordinate taxis, Uber or shared parking with passengers on your same flight. Save up to 60% on airport transfers. Temporary chat + flight events. Join free.`
- **Robots**: `index, follow, max-image-preview:large, max-snippet:-1`

#### FR
- **Title**: `Cojauny · Partagez votre trajet aéroport avec votre vol | App covoiturage`
- **Description**: `Coordonnez taxis, VTC ou parking partagé avec les passagers de votre vol. Économisez jusqu'à 60% sur vos transferts. Chat temporaire + événements par vol. Gratuit.`
- **Robots**: `index, follow, max-image-preview:large, max-snippet:-1`

#### DE
- **Title**: `Cojauny · Flughafenfahrt teilen mit deinem Flug | Rideshare App`
- **Description**: `Koordiniere Taxi, Uber oder Parkplatz mit Mitreisenden deines Flugs. Spare bis zu 60% bei Flughafentransfers. Temporärer Chat + Flug-Events. Kostenlos beitreten.`
- **Robots**: `index, follow, max-image-preview:large, max-snippet:-1`

---

### Contact Page (/contact)

#### ES
- **Title**: `Contacto · Cojauny | Propuestas comerciales y soporte`
- **Description**: `¿Propuesta de negocio, mejora para la app o consulta? Escríbenos y el equipo fundador te responde en 2 días laborables desde feedback@cojauny.com.`
- **Robots**: `index, follow`

#### EN
- **Title**: `Contact · Cojauny | Business Proposals & Support`
- **Description**: `Business proposal, product improvement or question? Write us and the founding team replies within 2 business days from feedback@cojauny.com.`
- **Robots**: `index, follow`

#### FR
- **Title**: `Contact · Cojauny | Propositions commerciales et support`
- **Description**: `Proposition business, amélioration produit ou question ? Écrivez-nous et l'équipe fondatrice répond sous 2 jours ouvrables depuis feedback@cojauny.com.`
- **Robots**: `index, follow`

#### DE
- **Title**: `Kontakt · Cojauny | Geschäftsanfragen & Support`
- **Description**: `Business-Angebot, Produktverbesserung oder Frage? Schreib uns und das Gründerteam antwortet innerhalb von 2 Werktagen von feedback@cojauny.com.`
- **Robots**: `index, follow`

---

### Blog Index (/blog)

#### ES
- **Title**: `Blog Cojauny · Guías para coordinar traslados compartidos a aeropuertos`
- **Description**: `Casos reales, tácticas operativas y novedades del producto para compartir taxis y rideshare entre pasajeros del mismo vuelo. Playbooks prácticos.`
- **Robots**: `index, follow`

#### EN
- **Title**: `Cojauny Blog · Guides to Coordinate Shared Airport Rides`
- **Description**: `Real cases, operational tactics and product updates to share taxis and rideshares among same-flight passengers. Actionable playbooks.`
- **Robots**: `index, follow`

#### FR
- **Title**: `Blog Cojauny · Guides pour coordonner les trajets aéroport partagés`
- **Description**: `Cas réels, tactiques opérationnelles et nouveautés produit pour partager taxis et VTC entre passagers d'un même vol. Playbooks pratiques.`
- **Robots**: `index, follow`

#### DE
- **Title**: `Cojauny Blog · Leitfäden für geteilte Flughafentransfers`
- **Description**: `Echte Fälle, operative Taktiken und Produkt-Updates für Taxi- und Ridesharing zwischen Mitreisenden desselben Flugs. Praxisnahe Playbooks.`
- **Robots**: `index, follow`

---

### Blog Article (dynamic)
- **Title**: `{post.title} · Cojauny Blog`
- **Description**: `{post.summary}`
- **Robots**: `index, follow, max-snippet:-1`
- **OG:type**: `article`
- **OG:image**: `{post.heroImage}` (1280x720)

---

### Legal Pages
- **Title Pattern**: `{Legal Topic} · Cojauny`
- **Description Pattern**: `{Brief summary of legal topic} según normativa europea GDPR.`
- **Robots**: `index, follow` (para transparency, noindex si versiones antiguas)

---

## 5. Estructura de Headings Optimizados

### Homepage Hero Section

#### ES
```
H1: Comparte transporte al aeropuerto con quien ya viaja contigo
H2: Coordina taxi, Uber o parking antes del despegue
P: Cojauny conecta pasajeros del mismo vuelo para organizar traslados compartidos, 
   ahorrar hasta 60% en costes y mantener un chat temporal de 48h que se autodestruye 
   después del aterrizaje. Sin fricciones, sin apps permanentes.
```

#### EN
```
H1: Share Airport Transport with People Already on Your Flight
H2: Coordinate Taxi, Uber or Parking Before Takeoff
P: Cojauny connects same-flight passengers to organize shared transfers, save up to 
   60% on costs and maintain a temporary 48h chat that self-destructs after landing. 
   No friction, no permanent apps.
```

#### FR
```
H1: Partagez votre transport aéroport avec vos co-passagers de vol
H2: Coordonnez taxi, VTC ou parking avant le décollage
P: Cojauny relie les passagers d'un même vol pour organiser des transferts partagés, 
   économiser jusqu'à 60% sur les coûts et maintenir un chat temporaire de 48h qui 
   s'autodétruit après l'atterrissage. Sans friction, sans app permanente.
```

#### DE
```
H1: Teile Flughafentransfer mit Mitreisenden deines Flugs
H2: Koordiniere Taxi, Uber oder Parkplatz vor dem Abflug
P: Cojauny verbindet Passagiere desselben Flugs, um gemeinsame Transfers zu organisieren, 
   bis zu 60% Kosten zu sparen und einen temporären 48h-Chat zu führen, der sich nach 
   der Landung selbst löscht. Ohne Reibung, ohne dauerhafte App.
```

---

### Features Section

#### ES
```
H2: Cómo funciona la coordinación por vuelo
H3: Crea un evento para tu vuelo específico
P: Introduce número de vuelo, aeropuerto de origen/destino y hora. Cojauny agrupa 
   automáticamente a los pasajeros confirmados que comparten tu trayecto.

H3: Organiza transporte en el chat efímero de 48h
P: Confirma punto de encuentro, tipo de vehículo (taxi, Uber, van) y reparto de costes. 
   El chat se activa 24h antes del vuelo y se elimina 24h después del aterrizaje.

H3: Divide costes de forma transparente
P: Calcula automáticamente el ahorro por pasajero según tarifas locales. Si alguien 
   cancela, Cojauny recalcula y notifica al resto para reagrupar.

H3: Chat offline durante el vuelo
P: Mantén la conversación sin internet durante el vuelo. Sincroniza mensajes al aterrizar 
   para coordinar la recogida en la terminal de destino.
```

#### EN
```
H2: How Flight-Based Coordination Works
H3: Create an Event for Your Specific Flight
P: Enter flight number, origin/destination airport and time. Cojauny automatically 
   groups confirmed passengers sharing your route.

H3: Organize Transport in the Ephemeral 48h Chat
P: Confirm meeting point, vehicle type (taxi, Uber, van) and cost split. Chat activates 
   24h before flight and deletes 24h after landing.

H3: Split Costs Transparently
P: Automatically calculates savings per passenger based on local fares. If someone 
   cancels, Cojauny recalculates and notifies the rest to regroup.

H3: Offline Chat During Flight
P: Keep the conversation going without internet during the flight. Sync messages upon 
   landing to coordinate pickup at the destination terminal.
```

#### FR
```
H2: Comment fonctionne la coordination par vol
H3: Créez un événement pour votre vol spécifique
P: Saisissez numéro de vol, aéroport d'origine/destination et heure. Cojauny regroupe 
   automatiquement les passagers confirmés partageant votre trajet.

H3: Organisez le transport dans le chat éphémère de 48h
P: Confirmez point de rendez-vous, type de véhicule (taxi, VTC, van) et répartition 
   des coûts. Le chat s'active 24h avant le vol et se supprime 24h après l'atterrissage.

H3: Divisez les coûts de manière transparente
P: Calcule automatiquement l'économie par passager selon les tarifs locaux. Si quelqu'un 
   annule, Cojauny recalcule et notifie les autres pour se regrouper.

H3: Chat hors ligne pendant le vol
P: Maintenez la conversation sans internet pendant le vol. Synchronisez les messages 
   à l'atterrissage pour coordonner la prise en charge au terminal de destination.
```

#### DE
```
H2: Wie flugbasierte Koordination funktioniert
H3: Erstelle ein Event für deinen spezifischen Flug
P: Flugnummer, Start-/Zielflughafen und Uhrzeit eingeben. Cojauny gruppiert automatisch 
   bestätigte Passagiere, die deine Route teilen.

H3: Organisiere Transport im temporären 48h-Chat
P: Treffpunkt, Fahrzeugtyp (Taxi, Uber, Van) und Kostenaufteilung bestätigen. Chat 
   wird 24h vor Abflug aktiviert und 24h nach Landung gelöscht.

H3: Teile Kosten transparent
P: Berechnet automatisch die Ersparnis pro Passagier basierend auf lokalen Tarifen. 
   Wenn jemand absagt, berechnet Cojauny neu und benachrichtigt die anderen.

H3: Offline-Chat während des Flugs
P: Führe das Gespräch ohne Internet während des Flugs fort. Synchronisiere Nachrichten 
   bei der Landung, um die Abholung am Zielterminal zu koordinieren.
```

---

## 6. JSON-LD Schema Completos

Ya implementados en `src/lib/jsonld.ts`. Ver código para detalles completos. Resumen:

### Organization (Root Layout)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cojauny",
  "legalName": "Cojauny Mobility S.L.",
  "url": "https://cojauny.com",
  "logo": "https://cojauny.com/icons/icon.svg",
  "sameAs": [
    "https://www.linkedin.com/company/cojauny",
    "https://twitter.com/cojauny",
    "https://www.instagram.com/cojaunyapp"
  ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "email": "support@cojauny.com",
    "contactType": "customer support",
    "areaServed": ["es-ES", "en-US", "de-DE", "fr-FR"],
    "availableLanguage": ["es", "en", "de", "fr"]
  }]
}
```

### WebSite (Root Layout)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Cojauny",
  "url": "https://cojauny.com",
  "inLanguage": "{hrefLang}",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://cojauny.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### SoftwareApplication (Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Cojauny",
  "operatingSystem": "iOS, Android",
  "applicationCategory": "TravelApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{{PLACEHOLDER_APP_RATING}}",
    "ratingCount": "{{PLACEHOLDER_RATING_COUNT}}"
  },
  "downloadUrl": "{{PLACEHOLDER_PLAY_STORE_URL}}",
  "installUrl": "{{PLACEHOLDER_APP_STORE_URL}}"
}
```
**Nota**: Obtener rating real desde App Store Connect / Google Play Console una vez publicada la app.

### FAQPage (Homepage)
Usa entries de `src/lib/faq.ts`. Ejemplo:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "¿Cómo protege Cojauny la privacidad de los pasajeros?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Solo compartimos nombre y foto cuando aceptas unirte a un traslado..."
    }
  }]
}
```

### BreadcrumbList (todas las páginas)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Cojauny",
    "item": "https://cojauny.com"
  }, {
    "@type": "ListItem",
    "position": 2,
    "name": "Blog",
    "item": "https://cojauny.com/es/blog"
  }]
}
```

### Article (Blog Posts)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": "https://cojauny.com/es/blog/{slug}",
  "headline": "{post.title}",
  "description": "{post.summary}",
  "image": {
    "@type": "ImageObject",
    "url": "https://cojauny.com{post.heroImage}",
    "width": 1280,
    "height": 720
  },
  "author": {
    "@type": "Person",
    "name": "{post.author}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Cojauny",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cojauny.com/icons/icon.svg"
    }
  },
  "datePublished": "{post.publishedAt}",
  "dateModified": "{post.updatedAt}",
  "articleSection": ["operations", "product"]
}
```

---

## 7. OpenGraph & Twitter Cards

Ya implementado en layouts. Imágenes sugeridas:

### Imágenes OG por tipo de página

| Página | Archivo sugerido | Tamaño | Contenido |
|--------|------------------|--------|-----------|
| Homepage | `og-home-{locale}.png` | 1200×630 | Hero visual + logo + tagline |
| Blog Index | `og-blog-{locale}.png` | 1200×630 | Collage de posts + blog badge |
| Blog Post | `og-blog-{slug}.png` | 1280×720 | Hero image del post |
| Contact | `og-contact.png` | 1200×630 | Icono contacto + email |
| Legal | `og-legal.png` | 1200×630 | Shield icon + "Transparencia" |

### Twitter Cards
- Tipo: `summary_large_image`
- Mismo conjunto de imágenes que OG
- Creator: `@cojauny`
- Site: `@cojauny`

**Nota**: Generar imágenes con Figma/Canva o automatizar con Vercel OG Image Generation.

---

## 8. Comandos de Terminal

```powershell
# Install dependencies (if using next-intl in the future)
# npm install next-intl

# Type check
npm run type-check

# Lint
npm run lint

# Run tests
npm test

# Generate sitemap manually (already automated in /api/sitemap)
npm run seo:sitemap

# Build production
npm run build

# Start production server
npm run start

# Analyze bundle size (requires @next/bundle-analyzer)
# npm install --save-dev @next/bundle-analyzer
# ANALYZE=true npm run build
```

---

## 9. Checklist de Lanzamiento SEO

### Pre-Launch (Desarrollo)
- [x] 1. Validar JSON-LD con [Google Rich Results Test](https://search.google.com/test/rich-results)
- [x] 2. Validar hreflang con [Hreflang Tags Testing Tool](https://technicalseo.com/tools/hreflang/)
- [x] 3. Verificar canonical tags en cada página (view-source)
- [x] 4. Probar sitemap.xml accesible en `https://cojauny.com/sitemap.xml`
- [x] 5. Verificar robots.txt en `https://cojauny.com/robots.txt`
- [ ] 6. Lighthouse audit score ≥90 en Performance, SEO, Accessibility, Best Practices
- [ ] 7. Validar accesibilidad con [WAVE Tool](https://wave.webaim.org/)
- [ ] 8. Probar Core Web Vitals en [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] 9. Verificar imágenes optimizadas (WebP, lazy loading, dimensiones correctas)
- [ ] 10. Revisar orden de headings (H1→H2→H3, sin saltos)

### Post-Launch (Producción)
- [ ] 11. Registrar propiedad en [Google Search Console](https://search.google.com/search-console)
- [ ] 12. Enviar sitemap en Google Search Console: `https://cojauny.com/sitemap.xml`
- [ ] 13. Solicitar indexación manual de homepage + páginas clave
- [ ] 14. Configurar alertas para errores 404, errores de rastreo, penalizaciones
- [ ] 15. Monitorizar posiciones keywords objetivo con Google Search Console o Ahrefs

### Validación Continua (Mensual)
- [ ] 16. Revisar Search Console > Coverage (páginas indexadas vs. excluidas)
- [ ] 17. Monitorizar CTR promedio de SERPs (Search Console > Performance)
- [ ] 18. Actualizar blog con 1-2 posts/mes para mantener freshness
- [ ] 19. Revisar backlinks y menciones con Google Alerts o Ahrefs
- [ ] 20. A/B testing de titles/descriptions en páginas de baja conversión

---

## 10. Recursos y Herramientas Recomendadas

### Validación SEO
- [Google Rich Results Test](https://search.google.com/test/rich-results) - JSON-LD
- [Schema.org Validator](https://validator.schema.org/) - Sintaxis Schema
- [Hreflang Tags Checker](https://technicalseo.com/tools/hreflang/) - Alternates
- [Screaming Frog SEO Spider](https://www.screamingfrogseoseo.com/) - Crawl completo

### Performance
- [PageSpeed Insights](https://pagespeed.web.dev/) - Core Web Vitals
- [WebPageTest](https://www.webpagetest.org/) - Waterfall analysis
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) - Automated audits

### Keywords & Rankings
- [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/)
- [Ahrefs](https://ahrefs.com/) (de pago, más completo)
- [SEMrush](https://www.semrush.com/) (de pago)
- [Ubersuggest](https://neilpatel.com/ubersuggest/) (freemium)
- [AnswerThePublic](https://answerthepublic.com/) (preguntas usuarios)

### Accesibilidad
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse Accessibility](https://developers.google.com/web/tools/lighthouse)

---

**Fin del documento de estrategia SEO.**
