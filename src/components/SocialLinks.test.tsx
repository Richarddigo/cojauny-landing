/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { SocialIcons, socialLinks } from './SocialLinks';

describe('socialLinks', () => {
    it('contiene todos los enlaces de redes sociales esperados', () => {
        const labels = socialLinks.map(link => link.label);

        expect(labels).toContain('Instagram');
        expect(labels).toContain('Facebook');
        expect(labels).toContain('TikTok');
        expect(labels).toContain('LinkedIn');
        expect(labels).toContain('X (Twitter)');
        expect(labels).toContain('WhatsApp');
    });

    it('cada enlace tiene href válido', () => {
        socialLinks.forEach(link => {
            expect(link.href).toMatch(/^https?:\/\//);
        });
    });

    it('cada enlace tiene un icono definido', () => {
        socialLinks.forEach(link => {
            expect(link.icon).toBeDefined();
        });
    });

    it('WhatsApp tiene la URL de canal correcta', () => {
        const whatsapp = socialLinks.find(l => l.label === 'WhatsApp');
        expect(whatsapp?.href).toContain('whatsapp.com/channel');
    });
});

describe('SocialIcons component', () => {
    it('renderiza todos los iconos de redes sociales', () => {
        render(<SocialIcons />);

        expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
        expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
        expect(screen.getByLabelText('TikTok')).toBeInTheDocument();
        expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
        expect(screen.getByLabelText('X (Twitter)')).toBeInTheDocument();
        expect(screen.getByLabelText('WhatsApp')).toBeInTheDocument();
    });

    it('aplica variante light por defecto', () => {
        render(<SocialIcons />);

        const link = screen.getByLabelText('Instagram');
        expect(link).toHaveClass('text-white/60');
    });

    it('aplica variante dark cuando se especifica', () => {
        render(<SocialIcons variant="dark" />);

        const link = screen.getByLabelText('Instagram');
        expect(link).toHaveClass('text-slate-500');
    });

    it('aplica className adicional', () => {
        render(<SocialIcons className="custom-class" />);

        const link = screen.getByLabelText('Instagram');
        // eslint-disable-next-line testing-library/no-node-access
        const container = link.parentElement;
        expect(container).toHaveClass('custom-class');
    });

    it('todos los enlaces abren en nueva pestaña', () => {
        render(<SocialIcons />);

        socialLinks.forEach(link => {
            const anchor = screen.getByLabelText(link.label);
            expect(anchor).toHaveAttribute('target', '_blank');
            expect(anchor).toHaveAttribute('rel', 'noreferrer');
        });
    });
});
