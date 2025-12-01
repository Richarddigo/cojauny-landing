/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import AccessibilitySkipLink from './AccessibilitySkipLink';

describe('AccessibilitySkipLink', () => {
    it('renderiza con label por defecto', () => {
        render(<AccessibilitySkipLink />);
        expect(screen.getByText('Skip to main content')).toBeInTheDocument();
    });

    it('usa label personalizado', () => {
        render(<AccessibilitySkipLink label="Saltar al contenido principal" />);
        expect(screen.getByText('Saltar al contenido principal')).toBeInTheDocument();
    });

    it('tiene href a #main-content', () => {
        render(<AccessibilitySkipLink />);
        const link = screen.getByText('Skip to main content');
        expect(link).toHaveAttribute('href', '#main-content');
    });

    it('tiene clases de accesibilidad para focus', () => {
        render(<AccessibilitySkipLink />);
        const link = screen.getByText('Skip to main content');
        expect(link.className).toContain('focus-visible:opacity-100');
        expect(link.className).toContain('opacity-0');
    });
});
