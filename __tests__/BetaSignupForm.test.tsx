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

        render(<BetaSignupForm copy={copy.forms.beta} locale="es" />);

        fireEvent.change(screen.getByLabelText(/nombre completo/i), {
            target: { value: 'Juan Pérez' }
        });
        fireEvent.change(screen.getByLabelText(/correo profesional/i), {
            target: { value: 'juan@example.com' }
        });
        fireEvent.change(screen.getByLabelText(/país de residencia/i), {
            target: { value: 'es' }
        });
        fireEvent.change(screen.getByLabelText(/ciudad o aeropuerto habitual/i), {
            target: { value: 'Madrid (MAD)' }
        });
        fireEvent.click(screen.getByLabelText(/2–5 veces al año/i));
        fireEvent.change(screen.getByLabelText(/cuéntanos cómo planeas usar cojauny/i), {
            target: { value: 'Gestionar beta testers' }
        });
        fireEvent.change(screen.getByLabelText(/beta\?/i), {
            target: { value: 'Quiero validar ride-sharing corporativo' }
        });
        fireEvent.click(screen.getByRole('checkbox', { name: /novedades del desarrollo/i }));
        fireEvent.click(screen.getByRole('checkbox', { name: /política de privacidad/i }));
        fireEvent.click(
            screen.getByRole('checkbox', {
                name: /acepto que se almacenen mis datos para participar en la beta/i
            })
        );

        fireEvent.submit(screen.getByRole('button', { name: /Enviar solicitud/i }));

        await waitFor(() => {
            expect(screen.getByText(/Enviaremos tu código/i)).toBeInTheDocument();
        });

        expect(mockFetch).toHaveBeenCalledWith(
            '/api/beta-signups',
            expect.objectContaining({ method: 'POST' })
        );
    });
});
