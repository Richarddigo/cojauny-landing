import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';
import { getLandingCopy } from '@/locales/copy';

describe('Hero', () => {
    it('muestra el título principal y los CTA', () => {
        const copy = getLandingCopy('es');

        render(
            <Hero
                copy={copy.hero}
                quickSignupCopy={copy.heroQuickSignup}
                betaCopy={copy.forms.beta}
                locale="es"
            />
        );

        // Use copy values so tests don't break when copy changes
        expect(
            screen.getByRole('heading', { name: new RegExp(copy.hero.title, 'i') })
        ).toBeInTheDocument();
        expect(screen.getByRole('link', { name: new RegExp(copy.hero.secondaryCta, 'i') })).toBeInTheDocument();
        expect(screen.getByText(copy.heroQuickSignup.referralHint)).toBeInTheDocument();
    });
});
