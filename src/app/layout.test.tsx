import { render } from '@testing-library/react';
import RootLayout, { metadata } from './layout';
import StructuredData from '@/components/StructuredData';

describe('RootLayout', () => {
    it('debe renderizar el layout raíz y los datos estructurados', () => {
        const { getByText, getByTestId, container } = render(
            <RootLayout>
                <div>Contenido de prueba</div>
            </RootLayout>
        );
        // Verifica que el contenido hijo se renderiza
        expect(container).toHaveTextContent('Contenido de prueba');
        // Verifica que los scripts JSON-LD están presentes
        expect(container.querySelector('#ld-org')).toBeInTheDocument();
        expect(container.querySelector('#ld-website')).toBeInTheDocument();
    });

    it('debe tener el idioma y clase de fuente correctos en <html>', () => {
        const { container } = render(
            <RootLayout>
                <div />
            </RootLayout>
        );
        const html = container.querySelector('html');
        expect(html).toHaveAttribute('lang');
        expect(html?.className).toContain('--font-inter');
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
