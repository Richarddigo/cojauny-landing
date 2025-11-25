import { jest } from '@jest/globals';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import BetaSignupForm from '@/components/BetaSignupForm';
import { getLandingCopy } from '@/locales/copy';

describe('BetaSignupForm', () => {
    const originalFetch = global.fetch;
    const mockFetch = jest.fn() as jest.MockedFunction<typeof fetch>;

    beforeEach(() => {
        mockFetch.mockResolvedValue({
            ok: true,
            json: async () => ({ success: true })
        } as unknown as Response);
        global.fetch = mockFetch as unknown as typeof fetch;
    });

    afterEach(() => {
        global.fetch = originalFetch;
        jest.resetAllMocks();
    });

    it('envía el formulario cuando los datos son válidos', async () => {
        const copy = getLandingCopy('es');

        render(<BetaSignupForm copy={copy.forms.beta} referralPanelCopy={copy.referralPanel} locale="es" />);

        const formCopy = copy.forms.beta;

        fireEvent.change(screen.getByLabelText(new RegExp(formCopy.fields.fullName || 'Nombre completo', 'i')), {
            target: { value: 'Juan Pérez' }
        });
        fireEvent.change(screen.getByLabelText(new RegExp(formCopy.fields.email || 'Email', 'i')), {
            target: { value: 'juan@example.com' }
        });
        fireEvent.change(screen.getByLabelText(new RegExp(formCopy.fields.country || 'País', 'i')), {
            target: { value: 'es' }
        });
        // Fill home airport using the field label (placeholder is not label)
        fireEvent.change(screen.getByLabelText(new RegExp(formCopy.fields.homeAirport || 'Aeropuerto de origen', 'i')), {
            target: { value: 'Madrid (MAD)' }
        });
        // Select flight frequency option by role (radio) using visible label
        const freqLabel = formCopy.flightFrequencyOptions?.[1]?.label ?? '2–5 veces al año';
        fireEvent.click(screen.getByRole('radio', { name: new RegExp(freqLabel, 'i') }));
        fireEvent.change(screen.getByLabelText(new RegExp(formCopy.fields.useCase || '¿Cómo usarás Cojauny?', 'i')), {
            target: { value: 'Gestionar beta testers' }
        });
        // Click updates opt-in checkbox (label text)
        fireEvent.click(screen.getByRole('checkbox', { name: new RegExp(formCopy.fields.updatesOptIn || 'Quiero recibir novedades del desarrollo', 'i') }));
        // privacy acceptance checkbox (label uses copy.fields.privacyAcceptance)
        fireEvent.click(screen.getByRole('checkbox', { name: new RegExp(formCopy.fields.privacyAcceptance || 'Acepto la política de privacidad', 'i') }));
        // terms/checkbox with privacy link is rendered as copy.checkboxLabel; match part of it
        const checkboxLabelSnippet = formCopy.checkboxLabel?.split('{privacyLink}')[0].trim() || 'He leído y acepto la';
        fireEvent.click(screen.getByRole('checkbox', { name: new RegExp(checkboxLabelSnippet, 'i') }));

        fireEvent.submit(screen.getByRole('button', { name: /Enviar solicitud/i }));

        await waitFor(() => {
            expect(screen.getByText(new RegExp(formCopy.success, 'i'))).toBeInTheDocument();
        });

        expect(mockFetch).toHaveBeenCalledWith(
            '/api/beta-signups',
            expect.objectContaining({ method: 'POST' })
        );
    });

    it('muestra un mensaje claro cuando el correo ya está registrado', async () => {
        mockFetch.mockResolvedValueOnce({
            ok: false,
            json: async () => ({ errorCode: 'beta_duplicate_email' })
        } as unknown as Response);

        const copy = getLandingCopy('es');

        render(<BetaSignupForm copy={copy.forms.beta} locale="es" />);

        fireEvent.change(screen.getByLabelText(/nombre completo/i), {
            target: { value: 'Ana Gómez' }
        });
        fireEvent.change(screen.getByLabelText(/correo electrónico/i), {
            target: { value: 'ana@example.com' }
        });
        fireEvent.change(screen.getByLabelText(/país de residencia/i), {
            target: { value: 'es' }
        });
        fireEvent.click(screen.getByLabelText(/2–5 veces al año/i));
        fireEvent.click(screen.getByRole('checkbox', { name: /política de privacidad/i }));
        fireEvent.click(
            screen.getByRole('checkbox', {
                name: /acepto que se almacenen mis datos para participar en la beta/i
            })
        );

        fireEvent.submit(screen.getByRole('button', { name: /Enviar solicitud/i }));

        await waitFor(() => {
            expect(
                screen.getByText(copy.forms.beta.duplicateError ?? copy.forms.beta.error)
            ).toBeInTheDocument();
        });
    });
});
