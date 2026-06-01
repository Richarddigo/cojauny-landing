/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import CookieBanner from './CookieBanner';
import type { LandingCopy } from '@/locales/copy';

// Mock useConsent hook
const mockAccept = jest.fn();
const mockReject = jest.fn();
let mockConsent: 'unknown' | 'accepted' | 'rejected' = 'unknown';

jest.mock('@/hooks/useConsent', () => ({
    useConsent: () => ({
        consent: mockConsent,
        accept: mockAccept,
        reject: mockReject
    })
}));

const mockCopy: LandingCopy['cookie'] = {
    message: 'Usamos cookies para mejorar tu experiencia.',
    acceptAll: 'Aceptar todas',
    reject: 'Rechazar',
    moreInfo: 'Más información'
};

describe('CookieBanner', () => {
    beforeEach(() => {
        mockConsent = 'unknown';
        mockAccept.mockClear();
        mockReject.mockClear();
    });

    it('muestra el banner cuando consent es unknown', () => {
        mockConsent = 'unknown';
        render(<CookieBanner copy={mockCopy} locale="es" />);

        expect(screen.getByText(mockCopy.message)).toBeInTheDocument();
        expect(screen.getByText(mockCopy.acceptAll)).toBeInTheDocument();
        expect(screen.getByText(mockCopy.reject)).toBeInTheDocument();
    });

    it('no muestra el banner cuando consent es accepted', () => {
        mockConsent = 'accepted';
        render(<CookieBanner copy={mockCopy} locale="es" />);

        // Component always renders in DOM (CSS-only visibility) — check aria-hidden instead
        const dialog = screen.getByRole('dialog', { hidden: true });
        expect(dialog).toHaveAttribute('aria-hidden', 'true');
    });

    it('no muestra el banner cuando consent es rejected', () => {
        mockConsent = 'rejected';
        render(<CookieBanner copy={mockCopy} locale="es" />);

        // Component always renders in DOM (CSS-only visibility) — check aria-hidden instead
        const dialog = screen.getByRole('dialog', { hidden: true });
        expect(dialog).toHaveAttribute('aria-hidden', 'true');
    });

    it('llama a accept() al hacer clic en Aceptar', () => {
        mockConsent = 'unknown';
        render(<CookieBanner copy={mockCopy} locale="es" />);

        fireEvent.click(screen.getByText(mockCopy.acceptAll));

        expect(mockAccept).toHaveBeenCalledTimes(1);
    });

    it('llama a reject() al hacer clic en Rechazar', () => {
        mockConsent = 'unknown';
        render(<CookieBanner copy={mockCopy} locale="es" />);

        fireEvent.click(screen.getByText(mockCopy.reject));

        expect(mockReject).toHaveBeenCalledTimes(1);
    });

    it('tiene enlace a política de cookies con locale correcto', () => {
        mockConsent = 'unknown';
        render(<CookieBanner copy={mockCopy} locale="fr" />);

        const link = screen.getByText(mockCopy.moreInfo);
        expect(link).toHaveAttribute('href', '/fr/legal/cookies');
    });
});
