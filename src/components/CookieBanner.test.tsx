/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import CookieBanner from './CookieBanner';
import type { LandingCopy } from '@/locales/copy';

const mockAcceptAll = jest.fn();
const mockRejectAnalytics = jest.fn();
const mockSavePreferences = jest.fn();
let mockIsConfigured = false;

jest.mock('@/hooks/useConsent', () => ({
  useConsent: () => ({
    isConfigured: mockIsConfigured,
    acceptAll: mockAcceptAll,
    rejectAnalytics: mockRejectAnalytics,
    savePreferences: mockSavePreferences,
  }),
}));

const mockCopy: LandingCopy['cookie'] = {
  message: 'Usamos cookies esenciales y analíticas opcionales.',
  acceptAll: 'Aceptar todas',
  reject: 'Solo necesarias',
  customize: 'Personalizar',
  savePreferences: 'Guardar preferencias',
  essentialLabel: 'Esenciales',
  essentialDescription: 'Necesarias para el sitio.',
  analyticsLabel: 'Analíticas',
  analyticsDescription: 'Nos ayudan a medir visitas.',
  alwaysOn: 'Siempre activas',
  moreInfo: 'Más información',
};

describe('CookieBanner', () => {
  beforeEach(() => {
    mockIsConfigured = false;
    mockAcceptAll.mockClear();
    mockRejectAnalytics.mockClear();
    mockSavePreferences.mockClear();
  });

  it('shows the banner when consent is not configured', () => {
    render(<CookieBanner copy={mockCopy} locale="es" />);

    expect(screen.getByText(mockCopy.message)).toBeInTheDocument();
    expect(screen.getByText(mockCopy.acceptAll)).toBeInTheDocument();
    expect(screen.getByText(mockCopy.reject)).toBeInTheDocument();
  });

  it('hides the banner when consent is configured', () => {
    mockIsConfigured = true;
    render(<CookieBanner copy={mockCopy} locale="es" />);

    const dialog = screen.getByRole('dialog', { hidden: true });
    expect(dialog).toHaveAttribute('aria-hidden', 'true');
  });

  it('calls acceptAll on accept click', () => {
    render(<CookieBanner copy={mockCopy} locale="es" />);
    fireEvent.click(screen.getByText(mockCopy.acceptAll));
    expect(mockAcceptAll).toHaveBeenCalledTimes(1);
  });

  it('calls rejectAnalytics on reject click', () => {
    render(<CookieBanner copy={mockCopy} locale="es" />);
    fireEvent.click(screen.getByText(mockCopy.reject));
    expect(mockRejectAnalytics).toHaveBeenCalledTimes(1);
  });

  it('links to cookie policy with locale', () => {
    render(<CookieBanner copy={mockCopy} locale="fr" />);
    expect(screen.getByText(mockCopy.moreInfo)).toHaveAttribute('href', '/fr/legal/cookies');
  });
});
