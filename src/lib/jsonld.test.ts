import {
    buildCanonicalUrl,
    buildLocaleAlternates,
    buildRobotsMeta,
    buildOrganizationJsonLd,
    buildWebsiteJsonLd,
    buildSoftwareAppJsonLd,
    buildFaqJsonLd,
    buildBreadcrumbJsonLd,
    buildArticleJsonLd
} from './jsonld';

describe('jsonld utilities', () => {
    describe('buildCanonicalUrl', () => {
        it('construye URL canónica para locale sin path', () => {
            const url = buildCanonicalUrl('es');
            expect(url).toContain('/es');
            expect(url).not.toContain('//es');
        });

        it('construye URL canónica con path', () => {
            const url = buildCanonicalUrl('en', '/blog/test-article');
            expect(url).toContain('/en/blog/test-article');
        });

        it('normaliza paths con barras extras', () => {
            const url = buildCanonicalUrl('de', '///blog///');
            expect(url).toContain('/de/blog');
            expect(url).not.toContain('///');
        });
    });

    describe('buildLocaleAlternates', () => {
        it('devuelve objeto con canonical y languages', () => {
            const alternates = buildLocaleAlternates('es', '/blog');
            expect(alternates).toHaveProperty('canonical');
            expect(alternates).toHaveProperty('languages');
            expect(alternates?.languages).toHaveProperty('x-default');
        });

        it('incluye todas las locales soportadas', () => {
            const alternates = buildLocaleAlternates('fr');
            expect(alternates?.languages).toHaveProperty('es');
            expect(alternates?.languages).toHaveProperty('en');
            expect(alternates?.languages).toHaveProperty('de');
            expect(alternates?.languages).toHaveProperty('fr');
        });
    });

    describe('buildRobotsMeta', () => {
        it('devuelve index y follow por defecto', () => {
            const robots = buildRobotsMeta();
            expect(robots).toEqual({ index: true, follow: true });
        });

        it('puede deshabilitar indexación', () => {
            const robots = buildRobotsMeta(false, true);
            expect(robots).toEqual({ index: false, follow: true });
        });

        it('puede deshabilitar follow', () => {
            const robots = buildRobotsMeta(true, false);
            expect(robots).toEqual({ index: true, follow: false });
        });
    });

    describe('buildOrganizationJsonLd', () => {
        it('genera JSON-LD válido para Organization', () => {
            const org = buildOrganizationJsonLd();
            expect(org['@context']).toBe('https://schema.org');
            expect(org['@type']).toBe('Organization');
            expect(org).toHaveProperty('name');
            expect(org).toHaveProperty('url');
            expect(org).toHaveProperty('logo');
            expect(org).toHaveProperty('contactPoint');
            expect(Array.isArray(org.contactPoint)).toBe(true);
        });
    });

    describe('buildWebsiteJsonLd', () => {
        it('genera JSON-LD para WebSite con locale', () => {
            const website = buildWebsiteJsonLd('es');
            expect(website['@type']).toBe('WebSite');
            expect(website).toHaveProperty('potentialAction');
            expect(website.potentialAction['@type']).toBe('SearchAction');
        });

        it('usa idioma correcto según locale', () => {
            const websiteEs = buildWebsiteJsonLd('es');
            const websiteEn = buildWebsiteJsonLd('en');
            expect(websiteEs.inLanguage).toBeDefined();
            expect(websiteEn.inLanguage).toBeDefined();
        });
    });

    describe('buildSoftwareAppJsonLd', () => {
        it('genera JSON-LD para SoftwareApplication', () => {
            const app = buildSoftwareAppJsonLd('es');
            expect(app['@type']).toBe('SoftwareApplication');
            expect(app.operatingSystem).toBe('iOS, Android');
            expect(app.applicationCategory).toBe('TravelApplication');
            expect(app).toHaveProperty('offers');
            expect(app).toHaveProperty('aggregateRating');
        });
    });

    describe('buildFaqJsonLd', () => {
        it('genera JSON-LD para FAQPage', () => {
            const items = [
                { question: '¿Cómo funciona?', answer: 'Muy fácil.' },
                { question: '¿Es gratis?', answer: 'Sí, tiene versión gratuita.' }
            ];
            const faq = buildFaqJsonLd(items);
            expect(faq['@type']).toBe('FAQPage');
            expect(faq.mainEntity).toHaveLength(2);
            expect(faq.mainEntity[0]['@type']).toBe('Question');
            expect(faq.mainEntity[0].acceptedAnswer['@type']).toBe('Answer');
        });

        it('maneja lista vacía', () => {
            const faq = buildFaqJsonLd([]);
            expect(faq.mainEntity).toHaveLength(0);
        });
    });

    describe('buildBreadcrumbJsonLd', () => {
        it('genera JSON-LD para BreadcrumbList', () => {
            const items = [
                { name: 'Inicio', path: '' },
                { name: 'Blog', path: '/blog' },
                { name: 'Artículo', path: '/blog/articulo' }
            ];
            const breadcrumb = buildBreadcrumbJsonLd('es', items);
            expect(breadcrumb['@type']).toBe('BreadcrumbList');
            expect(breadcrumb.itemListElement).toHaveLength(3);
            expect(breadcrumb.itemListElement[0].position).toBe(1);
            expect(breadcrumb.itemListElement[2].position).toBe(3);
        });

        it('usa absoluteUrl si está definida', () => {
            const items = [
                { name: 'External', absoluteUrl: 'https://external.com/page' }
            ];
            const breadcrumb = buildBreadcrumbJsonLd('en', items);
            expect(breadcrumb.itemListElement[0].item).toBe('https://external.com/page');
        });
    });

    describe('buildArticleJsonLd', () => {
        it('genera JSON-LD completo para Article', () => {
            const params = {
                title: 'Test Article',
                description: 'Article description',
                slug: 'test-article',
                categories: ['Travel', 'Tips'],
                heroImage: { src: '/images/hero.jpg', width: 1200, height: 630 },
                publishedAt: '2024-01-15T10:00:00Z',
                updatedAt: '2024-01-20T10:00:00Z',
                author: 'John Doe'
            };
            const article = buildArticleJsonLd('es', params);
            expect(article['@type']).toBe('Article');
            expect(article.headline).toBe('Test Article');
            expect(article.author.name).toBe('John Doe');
            expect(article.image['@type']).toBe('ImageObject');
            expect(article.articleSection).toEqual(['Travel', 'Tips']);
            expect(article.datePublished).toBe('2024-01-15T10:00:00Z');
        });
    });
});
