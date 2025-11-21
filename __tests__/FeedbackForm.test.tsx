import { jest } from '@jest/globals';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import FeedbackForm from '@/components/FeedbackForm';
import { getLandingCopy } from '@/locales/copy';

describe('FeedbackForm', () => {
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

    it('envía feedback correctamente', async () => {
        const copy = getLandingCopy('es');

        render(<FeedbackForm copy={copy.forms.feedback} locale="es" />);

        fireEvent.change(screen.getByLabelText(/^nombre$/i), {
            target: { value: 'Laura' }
        });
        fireEvent.change(screen.getByLabelText(/^correo$/i), {
            target: { value: 'laura@example.com' }
        });
        fireEvent.change(screen.getByLabelText(/tipo de mensaje/i), {
            target: { value: 'positive' }
        });
        fireEvent.change(screen.getByLabelText(/cuéntanos tu caso/i), {
            target: { value: 'Me encanta la interfaz y la velocidad.' }
        });

        fireEvent.submit(screen.getByRole('button', { name: /Enviar mensaje/i }));

        await waitFor(() => {
            expect(screen.getByText(copy.forms.feedback.success)).toBeInTheDocument();
        });

        expect(mockFetch).toHaveBeenCalledWith(
            '/api/feedback',
            expect.objectContaining({ method: 'POST' })
        );
    });
});
