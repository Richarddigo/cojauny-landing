import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '@/components/Header';
import { localeValues } from '@/locales/config';

jest.mock('next/navigation', () => ({
    useRouter: () => ({ push: jest.fn() }),
    usePathname: () => '/es',
    useSearchParams: () => new URLSearchParams()
}));

const copy = {
    home: 'Inicio', demo: 'Demo', benefits: 'Beneficios', impact: 'Impacto', features: 'Características', workflow: 'Cómo funciona', pricing: 'Precios', beta: 'Beta', faq: 'FAQ', feedback: 'Feedback'
} as any;

describe('Header focus behaviour', () => {
    test('focus trap inside menu and restores focus to open button', async () => {
        render(<Header locale={'en'} copy={copy} />);
        const openButton = screen.getByLabelText(/open menu/i);
        await userEvent.click(openButton);

        const dialog = await screen.findByRole('dialog');
        expect(dialog).toBeInTheDocument();

        // find close button inside dialog
        const closeBtn = screen.getByLabelText(/close menu/i);
        expect(document.activeElement === closeBtn).toBeTruthy();

        // press Tab many times and ensure focus stays within dialog
        for (let i = 0; i < 8; i++) {
            fireEvent.keyDown(document, { key: 'Tab' });
        }

        expect(dialog).toContainElement(document.activeElement as HTMLElement);

        // close and ensure focus returns to openButton
        fireEvent.keyDown(document, { key: 'Escape' });
        await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
        expect(document.activeElement).toBe(openButton);
    });
});
