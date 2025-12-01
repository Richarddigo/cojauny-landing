/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import FaqSection from './FaqSection';
import type { LandingCopy } from '@/locales/copy';

// Mock SectionIntro
jest.mock('@/components/SectionIntro', () => ({
    __esModule: true,
    default: ({ title, description }: { title: string; description: string }) => (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}));

const mockCopy: LandingCopy['faq'] = {
    title: 'Preguntas Frecuentes',
    subtitle: 'Todo lo que necesitas saber',
    items: [
        { question: '¿Cómo funciona?', answer: 'Es muy fácil de usar.' },
        { question: '¿Es seguro?', answer: 'Sí, muy seguro.' },
        { question: '¿Cuánto cuesta?', answer: 'Tiene versión gratuita.' }
    ]
};

describe('FaqSection', () => {
    it('renderiza el título y subtítulo', () => {
        render(<FaqSection copy={mockCopy} />);

        expect(screen.getByText(mockCopy.title)).toBeInTheDocument();
        expect(screen.getByText(mockCopy.subtitle)).toBeInTheDocument();
    });

    it('renderiza todas las preguntas', () => {
        render(<FaqSection copy={mockCopy} />);

        mockCopy.items.forEach(item => {
            expect(screen.getByText(item.question)).toBeInTheDocument();
        });
    });

    it('las respuestas están ocultas inicialmente', () => {
        render(<FaqSection copy={mockCopy} />);

        // Las respuestas no deberían estar visibles
        mockCopy.items.forEach(item => {
            expect(screen.queryByText(item.answer)).not.toBeInTheDocument();
        });
    });

    it('muestra la respuesta al hacer clic en una pregunta', async () => {
        render(<FaqSection copy={mockCopy} />);

        const firstQuestion = screen.getByText(mockCopy.items[0].question);
        fireEvent.click(firstQuestion);

        expect(await screen.findByText(mockCopy.items[0].answer)).toBeInTheDocument();
    });

    it('oculta la respuesta al hacer clic de nuevo', async () => {
        render(<FaqSection copy={mockCopy} />);

        const firstQuestion = screen.getByText(mockCopy.items[0].question);

        // Abrir
        fireEvent.click(firstQuestion);
        expect(await screen.findByText(mockCopy.items[0].answer)).toBeInTheDocument();

        // Cerrar
        fireEvent.click(firstQuestion);
        expect(screen.queryByText(mockCopy.items[0].answer)).not.toBeInTheDocument();
    });

    it('puede abrir múltiples preguntas a la vez', async () => {
        render(<FaqSection copy={mockCopy} />);

        const firstQuestion = screen.getByText(mockCopy.items[0].question);
        const secondQuestion = screen.getByText(mockCopy.items[1].question);

        fireEvent.click(firstQuestion);
        fireEvent.click(secondQuestion);

        expect(await screen.findByText(mockCopy.items[0].answer)).toBeInTheDocument();
        expect(await screen.findByText(mockCopy.items[1].answer)).toBeInTheDocument();
    });

    it('tiene id para navegación por ancla', () => {
        render(<FaqSection copy={mockCopy} />);

        const section = document.getElementById('faq');
        expect(section).toBeInTheDocument();
    });
});
