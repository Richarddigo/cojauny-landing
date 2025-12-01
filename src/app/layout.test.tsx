/* eslint-disable testing-library/no-node-access, testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import { metadata } from './layout';
import StructuredData from '@/components/StructuredData';

// RootLayout renders <html> which JSDOM doesn't handle well in render()
// Test StructuredData component separately
describe('StructuredData', () => {
    it('debe renderizar los scripts JSON-LD correctamente', () => {
        const testData = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Test' };
        render(<StructuredData id="test-ld" data={testData} />);
        const script = document.querySelector('#test-ld');
        expect(script).toBeInTheDocument();
        expect(script?.getAttribute('type')).toBe('application/ld+json');
        expect(script?.innerHTML).toContain('Organization');
    });

    it('renderiza múltiples scripts JSON-LD sin conflictos', () => {
        const data1 = { '@type': 'WebSite' };
        const data2 = { '@type': 'Organization' };
        render(
            <>
                <StructuredData id="ld-website" data={data1} />
                <StructuredData id="ld-org" data={data2} />
            </>
        );
        expect(document.querySelector('#ld-website')).toBeInTheDocument();
        expect(document.querySelector('#ld-org')).toBeInTheDocument();
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
