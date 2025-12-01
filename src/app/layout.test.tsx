/* eslint-disable testing-library/no-node-access, testing-library/prefer-screen-queries */
import { render, screen } from '@testing-library/react';
import { metadata } from './layout';
import StructuredData from '@/components/StructuredData';

// RootLayout renders <html> which JSDOM doesn't handle well in render()
// Test StructuredData component separately
describe('StructuredData', () => {
    it('debe renderizar los scripts JSON-LD', () => {
        render(<StructuredData id={''} data={{}} />);
        expect(document.querySelector('#ld-org')).toBeInTheDocument();
        expect(document.querySelector('#ld-website')).toBeInTheDocument();
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
