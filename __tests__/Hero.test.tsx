import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';
import { getLandingCopy } from '@/locales/copy';

describe('Hero', () => {
    it('muestra el título principal y los CTA', () => {
        const copy = getLandingCopy('es');

        render(<Hero copy={copy.hero} />);

        expect(
            screen.getByRole('heading', { name: /Comparte transporte al aeropuerto con quien ya viaja contigo/i })
        ).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Solicitar acceso beta/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Ver demo interactiva/i })).toBeInTheDocument();
    });
});
