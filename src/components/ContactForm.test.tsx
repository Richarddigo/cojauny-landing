/**
 * @jest-environment jsdom
 */
import { jest } from '@jest/globals';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';
import type { ContactPageCopy } from '@/locales/contact';

// Mock global fetch
const mockFetch = jest.fn() as jest.MockedFunction<typeof fetch>;

beforeAll(() => {
    global.fetch = mockFetch as unknown as typeof fetch;
});

const mockCopy: ContactPageCopy['form'] = {
    title: 'Contáctanos',
    description: 'Estamos aquí para ayudarte',
    optionalHint: 'Los campos son obligatorios',
    fields: {
        name: 'Nombre',
        email: 'Email',
        topic: 'Asunto',
        message: 'Mensaje'
    },
    submit: 'Enviar mensaje',
    success: '¡Mensaje enviado correctamente!',
    error: 'Error al enviar el mensaje',
    legalNotice: 'Al enviar aceptas nuestra política de privacidad'
};

describe('ContactForm', () => {
    beforeEach(() => {
        mockFetch.mockClear();
        mockFetch.mockResolvedValue({
            ok: true,
            json: async () => ({ success: true })
        } as unknown as Response);
    });

    it('renderiza todos los campos del formulario', () => {
        render(<ContactForm locale="es" copy={mockCopy} />);

        expect(screen.getByLabelText(mockCopy.fields.name)).toBeInTheDocument();
        expect(screen.getByLabelText(mockCopy.fields.email)).toBeInTheDocument();
        expect(screen.getByLabelText(mockCopy.fields.topic)).toBeInTheDocument();
        expect(screen.getByLabelText(mockCopy.fields.message)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: mockCopy.submit })).toBeInTheDocument();
    });

    it('muestra título y descripción', () => {
        render(<ContactForm locale="es" copy={mockCopy} />);

        expect(screen.getByText(mockCopy.title)).toBeInTheDocument();
        expect(screen.getByText(mockCopy.description)).toBeInTheDocument();
    });

    it('envía el formulario cuando los datos son válidos', async () => {
        render(<ContactForm locale="es" copy={mockCopy} />);

        fireEvent.change(screen.getByLabelText(mockCopy.fields.name), {
            target: { value: 'Juan Pérez' }
        });
        fireEvent.change(screen.getByLabelText(mockCopy.fields.email), {
            target: { value: 'juan@example.com' }
        });
        fireEvent.change(screen.getByLabelText(mockCopy.fields.topic), {
            target: { value: 'Consulta general' }
        });
        fireEvent.change(screen.getByLabelText(mockCopy.fields.message), {
            target: { value: 'Este es un mensaje de prueba con más de 10 caracteres.' }
        });

        fireEvent.submit(screen.getByRole('button', { name: mockCopy.submit }));

        await waitFor(() => {
            expect(screen.getByText(mockCopy.success)).toBeInTheDocument();
        });

        expect(mockFetch).toHaveBeenCalledWith(
            '/api/contact',
            expect.objectContaining({ method: 'POST' })
        );
    });

    it('muestra error cuando el mensaje es muy corto', async () => {
        render(<ContactForm locale="es" copy={mockCopy} />);

        fireEvent.change(screen.getByLabelText(mockCopy.fields.name), {
            target: { value: 'Test' }
        });
        fireEvent.change(screen.getByLabelText(mockCopy.fields.email), {
            target: { value: 'test@test.com' }
        });
        fireEvent.change(screen.getByLabelText(mockCopy.fields.topic), {
            target: { value: 'Test' }
        });
        fireEvent.change(screen.getByLabelText(mockCopy.fields.message), {
            target: { value: 'Corto' } // menos de 10 caracteres
        });

        fireEvent.submit(screen.getByRole('button', { name: mockCopy.submit }));

        await waitFor(() => {
            expect(screen.getByText(/at least 10 characters/i)).toBeInTheDocument();
        });
    });

    it('muestra error cuando el email contiene +', async () => {
        render(<ContactForm locale="es" copy={mockCopy} />);

        fireEvent.change(screen.getByLabelText(mockCopy.fields.name), {
            target: { value: 'Test User' }
        });
        fireEvent.change(screen.getByLabelText(mockCopy.fields.email), {
            target: { value: 'test+alias@example.com' }
        });
        fireEvent.change(screen.getByLabelText(mockCopy.fields.topic), {
            target: { value: 'Test Topic' }
        });
        fireEvent.change(screen.getByLabelText(mockCopy.fields.message), {
            target: { value: 'Este es un mensaje válido con suficientes caracteres.' }
        });

        fireEvent.submit(screen.getByRole('button', { name: mockCopy.submit }));

        await waitFor(() => {
            expect(screen.getByText(/\+.*not allowed/i)).toBeInTheDocument();
        });
    });

    it('muestra error cuando el API falla', async () => {
        mockFetch.mockResolvedValueOnce({
            ok: false,
            json: async () => ({ error: 'Server error' })
        } as unknown as Response);

        render(<ContactForm locale="es" copy={mockCopy} />);

        fireEvent.change(screen.getByLabelText(mockCopy.fields.name), {
            target: { value: 'Test' }
        });
        fireEvent.change(screen.getByLabelText(mockCopy.fields.email), {
            target: { value: 'test@test.com' }
        });
        fireEvent.change(screen.getByLabelText(mockCopy.fields.topic), {
            target: { value: 'Test' }
        });
        fireEvent.change(screen.getByLabelText(mockCopy.fields.message), {
            target: { value: 'Mensaje de prueba con suficientes caracteres para pasar.' }
        });

        fireEvent.submit(screen.getByRole('button', { name: mockCopy.submit }));

        await waitFor(() => {
            // El error viene del apiClient cuando ok=false
            expect(screen.getByRole('alert')).toBeInTheDocument();
        });
    });

    it('muestra contador de caracteres del mensaje', () => {
        render(<ContactForm locale="es" copy={mockCopy} />);

        expect(screen.getByText('0/1000')).toBeInTheDocument();

        fireEvent.change(screen.getByLabelText(mockCopy.fields.message), {
            target: { value: 'Test message' }
        });

        expect(screen.getByText('12/1000')).toBeInTheDocument();
    });

    it('resetea el formulario tras envío exitoso', async () => {
        render(<ContactForm locale="es" copy={mockCopy} />);

        const nameInput = screen.getByLabelText(mockCopy.fields.name) as HTMLInputElement;
        const emailInput = screen.getByLabelText(mockCopy.fields.email) as HTMLInputElement;

        fireEvent.change(nameInput, { target: { value: 'Test' } });
        fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
        fireEvent.change(screen.getByLabelText(mockCopy.fields.topic), { target: { value: 'Topic' } });
        fireEvent.change(screen.getByLabelText(mockCopy.fields.message), {
            target: { value: 'Mensaje largo suficiente para validación' }
        });

        fireEvent.submit(screen.getByRole('button', { name: mockCopy.submit }));

        await waitFor(() => {
            expect(screen.getByText(mockCopy.success)).toBeInTheDocument();
        });

        expect(nameInput.value).toBe('');
        expect(emailInput.value).toBe('');
    });

    it('usa locale correcta en hidden input', () => {
        render(<ContactForm locale="fr" copy={mockCopy} />);

        const hiddenInput = document.querySelector('input[name="locale"]') as HTMLInputElement;
        expect(hiddenInput.value).toBe('fr');
    });
});