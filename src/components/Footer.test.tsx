/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import type { LandingCopy } from '@/locales/copy';

jest.mock('next/navigation', () => ({
    useRouter: () => ({ push: jest.fn() }),
    usePathname: () => '/es',
}));

// Mock LanguageSwitcher
jest.mock('@/components/LanguageSwitcher', () => ({
    __esModule: true,
    default: ({ currentLocale }: { currentLocale: string }) => (
        <div data-testid="language-switcher">{currentLocale}</div>
    )
}));

const mockCopy: LandingCopy['footer'] = {
    description: 'Comparte transporte al aeropuerto',
    appStoreSoon: 'App Store (próximamente)',
    playStoreSoon: 'Google Play (próximamente)',
    privacy: 'Privacidad',
    cookies: 'Cookies',
    terms: 'Términos',
    accountDeletion: 'Eliminación de cuenta',
    acceptableUse: 'Uso Aceptable',
    faq: 'FAQ',
    subprocessors: 'Subprocesadores',
    blog: 'Blog',
    contact: 'Contacto',
    languageLabel: 'Idioma',
    rights: 'Todos los derechos reservados.',
    madeInEurope: 'Hecho en Europa'
};

describe('Footer', () => {
    it('renderiza el nombre de la empresa', () => {
        render(<Footer copy={mockCopy} locale="es" />);
        expect(screen.getByText('Cojauny')).toBeInTheDocument();
    });

    it('renderiza la descripción', () => {
        render(<Footer copy={mockCopy} locale="es" />);
        expect(screen.getByText(mockCopy.description)).toBeInTheDocument();
    });

    it('renderiza enlaces del ecosistema', () => {
        render(<Footer copy={mockCopy} locale="es" />);
        const studioLink = screen.getByRole('link', { name: /Cojauny Studio/i });
        expect(studioLink).toHaveAttribute('href', 'https://studio.cojauny.com');
        const cuatroSotasLink = screen.getByRole('link', { name: /Cuatro Sotas/i });
        expect(cuatroSotasLink).toHaveAttribute('href', 'https://cuatrosotas.cojauny.com');
    });

    it('renderiza todos los enlaces de navegación legal', () => {
        render(<Footer copy={mockCopy} locale="es" />);

        expect(screen.getByText(mockCopy.privacy)).toHaveAttribute('href', '/es/legal/privacy');
        expect(screen.getByText(mockCopy.cookies)).toHaveAttribute('href', '/es/legal/cookies');
        expect(screen.getByText(mockCopy.terms)).toHaveAttribute('href', '/es/legal/terms');
        expect(screen.getByText(mockCopy.acceptableUse!)).toHaveAttribute('href', '/es/legal/acceptable-use');
        expect(screen.getByText(mockCopy.faq!)).toHaveAttribute('href', '/es/legal/faq');
        expect(screen.getByText(mockCopy.subprocessors!)).toHaveAttribute('href', '/es/legal/subprocessors');
    });

    it('renderiza enlaces a blog y contacto', () => {
        render(<Footer copy={mockCopy} locale="es" />);

        expect(screen.getByText(mockCopy.blog)).toHaveAttribute('href', '/es/blog');
        expect(screen.getByText(mockCopy.contact)).toHaveAttribute('href', 'https://studio.cojauny.com/es/contact');
    });

    it('renderiza la sección de ecosistema con descripción', () => {
        render(<Footer copy={mockCopy} locale="es" />);

        // The Ecosystem section label and description are rendered in the footer
        expect(screen.getByText('Ecosistema')).toBeInTheDocument();
        expect(screen.getByText(/familia de productos digitales/i)).toBeInTheDocument();
    });

    it('renderiza el copyright con el año actual', () => {
        render(<Footer copy={mockCopy} locale="es" />);
        const currentYear = new Date().getFullYear();
        expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
    });

    it('renderiza el LanguageSwitcher', () => {
        render(<Footer copy={mockCopy} locale="fr" />);
        expect(screen.getByTestId('language-switcher')).toHaveTextContent('fr');
    });

    it('usa locale correcta en los enlaces', () => {
        render(<Footer copy={mockCopy} locale="de" />);

        expect(screen.getByText(mockCopy.privacy)).toHaveAttribute('href', '/de/legal/privacy');
        expect(screen.getByText(mockCopy.blog)).toHaveAttribute('href', '/de/blog');
    });
});
