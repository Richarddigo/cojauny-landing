import { getFaqEntries } from './faq';
import type { Locale } from '@/locales/config';

describe('faq utilities', () => {
    describe('getFaqEntries', () => {
        it('devuelve entradas para locale español', () => {
            const entries = getFaqEntries('es');
            expect(Array.isArray(entries)).toBe(true);
            expect(entries.length).toBeGreaterThan(0);
            expect(entries[0]).toHaveProperty('question');
            expect(entries[0]).toHaveProperty('answer');
        });

        it('devuelve entradas para locale inglés', () => {
            const entries = getFaqEntries('en');
            expect(Array.isArray(entries)).toBe(true);
            expect(entries.length).toBeGreaterThan(0);
        });

        it('devuelve entradas para locale alemán', () => {
            const entries = getFaqEntries('de');
            expect(Array.isArray(entries)).toBe(true);
            expect(entries.length).toBeGreaterThan(0);
        });

        it('devuelve entradas para locale francés', () => {
            const entries = getFaqEntries('fr');
            expect(Array.isArray(entries)).toBe(true);
            expect(entries.length).toBeGreaterThan(0);
        });

        it('las preguntas contienen texto relevante', () => {
            const entriesEs = getFaqEntries('es');
            const entriesEn = getFaqEntries('en');
            
            // Verificar que hay contenido en diferentes idiomas
            const spanishQuestion = entriesEs[0].question;
            const englishQuestion = entriesEn[0].question;
            
            expect(spanishQuestion).not.toBe(englishQuestion);
        });

        it('devuelve locale por defecto para locale no existente', () => {
            // Simular locale inválida (cast forzado)
            const entries = getFaqEntries('xx' as Locale);
            expect(Array.isArray(entries)).toBe(true);
            expect(entries.length).toBeGreaterThan(0);
        });
    });
});
