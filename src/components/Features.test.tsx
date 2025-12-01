/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Features from './Features';
import type { LandingCopy, IconName } from '@/locales/copy';

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        article: ({ children, className, ...props }: any) => (
            <article className={className} {...props}>{children}</article>
        )
    }
}));

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

const mockCopy: LandingCopy['features'] = {
    title: 'Características',
    subtitle: 'Todo lo que necesitas',
    items: [
        {
            iconName: 'bolt' as IconName,
            title: 'Rápido',
            description: 'Encuentra compañeros en segundos.'
        },
        {
            iconName: 'users' as IconName,
            title: 'Social',
            description: 'Conoce gente nueva.'
        },
        {
            iconName: 'shield' as IconName,
            title: 'Seguro',
            description: 'Viaja con tranquilidad.'
        }
    ]
};

describe('Features', () => {
    it('renderiza el título y subtítulo', () => {
        render(<Features copy={mockCopy} />);

        expect(screen.getByText(mockCopy.title)).toBeInTheDocument();
        expect(screen.getByText(mockCopy.subtitle)).toBeInTheDocument();
    });

    it('renderiza todas las características', () => {
        render(<Features copy={mockCopy} />);

        mockCopy.items.forEach(item => {
            expect(screen.getByText(item.title)).toBeInTheDocument();
            expect(screen.getByText(item.description)).toBeInTheDocument();
        });
    });

    it('tiene id para navegación por ancla', () => {
        const { container } = render(<Features copy={mockCopy} />);
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const section = container.querySelector('#features');
        expect(section).toBeInTheDocument();
    });

    it('renderiza iconos para cada característica', () => {
        render(<Features copy={mockCopy} />);

        // Cada característica debería tener un artículo
        const articles = screen.getAllByRole('article');
        expect(articles).toHaveLength(mockCopy.items.length);
    });

    it('aplica clases de gradiente al fondo', () => {
        const { container } = render(<Features copy={mockCopy} />);
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const section = container.querySelector('#features');
        expect(section).toHaveClass('bg-gradient-to-b');
    });
});
