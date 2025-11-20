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

        fireEvent.change(screen.getByLabelText(/nombre completo/i), {
            target: { value: 'Juan Pérez' }
        });
        fireEvent.change(screen.getByLabelText(/correo profesional/i), {
            target: { value: 'juan@example.com' }
        });
        fireEvent.change(screen.getByLabelText(/organización/i), {
            target: { value: 'Cojauny' }
        });
        fireEvent.change(screen.getByLabelText(/¿cómo quieres usar cojauny\?/i), {
            target: { value: 'Gestionar beta testers' }
        });
        fireEvent.click(screen.getByRole('checkbox', { name: /política de privacidad/i }));

        fireEvent.submit(screen.getByRole('button', { name: /Solicitar acceso/i }));

        await waitFor(() => {
            expect(screen.getByText(/Te enviaremos un correo/i)).toBeInTheDocument();
        });

        expect(mockFetch).toHaveBeenCalledWith(
            '/api/beta-signups',
            expect.objectContaining({ method: 'POST' })
        );
    });
});
