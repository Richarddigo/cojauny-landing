import { jest } from '@jest/globals';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import FeedbackForm from '@/components/FeedbackForm';
import { getLandingCopy } from '@/locales/copy';

jest.mock('@/i18n/useAppMessages', () => {
    const { getLandingCopy: getCopy } = require('@/locales/copy');
    return {
        useAppMessages: () => ({
            landing: getCopy('es')
        })
    };
});

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

        const formCopy = copy.forms.feedback;

        fireEvent.change(screen.getByLabelText(new RegExp(`^${formCopy.fields.fullName}$`, 'i')), {
            target: { value: 'Laura' }
        });
        fireEvent.change(screen.getByLabelText(new RegExp(`^${formCopy.fields.email}$`, 'i')), {
            target: { value: 'laura@example.com' }
        });
        // select case radio by its visible option label to avoid ambiguity with other labels
        const caseLabel = formCopy.caseOptions?.[0]?.label || 'Feedback';
        fireEvent.click(screen.getByRole('radio', { name: new RegExp(caseLabel, 'i') }));
        fireEvent.change(screen.getByLabelText(new RegExp(formCopy.fields.message || 'Mensaje', 'i')), {
            target: { value: 'Me encanta la interfaz y la velocidad.' }
        });

        fireEvent.submit(screen.getByRole('button', { name: new RegExp(formCopy.submit, 'i') }));

        await waitFor(() => {
            expect(screen.getByText(formCopy.success)).toBeInTheDocument();
        });

        expect(mockFetch).toHaveBeenCalledWith(
            '/api/feedback',
            expect.objectContaining({ method: 'POST' })
        );
    });
});
