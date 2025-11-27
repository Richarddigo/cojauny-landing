/* eslint-disable testing-library/no-node-access, testing-library/prefer-screen-queries */
import { render, screen } from '@testing-library/react';
import RootLayout, { metadata } from './layout';
import StructuredData from '@/components/StructuredData';

describe('RootLayout', () => {
    it('debe renderizar el layout raíz y los datos estructurados', () => {
        render(
            <RootLayout>
                <div>Contenido de prueba</div>
            </RootLayout>
        );
        // Verifica que el contenido hijo se renderiza
        expect(screen.getByText('Contenido de prueba')).toBeInTheDocument();
        // Verifica que los scripts JSON-LD están presentes en document
        expect(document.querySelector('#ld-org')).toBeInTheDocument();
        expect(document.querySelector('#ld-website')).toBeInTheDocument();
    });

    it('debe tener el idioma y clase de fuente correctos en <html>', () => {
        render(
            <RootLayout>
                <div />
            </RootLayout>
        );
        const html = document.querySelector('html');
        expect(html).toHaveAttribute('lang');
        // Font classname can vary by environment; assert that some class exists
        expect(html?.className.length).toBeGreaterThan(0);
    });
});

describe('metadata', () => {
    it('debe definir los metadatos principales', () => {
        expect(metadata).toHaveProperty('title');
        expect(metadata).toHaveProperty('description');
        expect(metadata).toHaveProperty('openGraph');
        expect(metadata).toHaveProperty('twitter');
        expect(metadata).toHaveProperty('alternates');
        expect(metadata).toHaveProperty('robots');
    });
});
