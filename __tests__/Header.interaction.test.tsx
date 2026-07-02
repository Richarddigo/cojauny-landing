import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '@/components/Header';
import { localeValues } from '@/locales/config';

// Mock next/navigation hooks used in components
jest.mock('next/navigation', () => ({
    useRouter: () => ({ push: jest.fn() }),
    usePathname: () => '/es',
    useSearchParams: () => new URLSearchParams()
}));

const copy = {
    home: 'Inicio',
    demo: 'Demo',
    benefits: 'Beneficios',
    impact: 'Impacto',
    features: 'Características',
    workflow: 'Cómo funciona',
    pricing: 'Precios',
    beta: 'Beta',
    faq: 'FAQ',
    feedback: 'Feedback'
} as any;

describe('Header mobile menu interactions', () => {
    beforeEach(() => {
        // ensure document.body is clean
        document.body.innerHTML = '<div id="root"></div>';
    });

    test('opens and closes the mobile menu via button and overlay click', async () => {
        render(<Header locale={'en'} copy={copy} />);

        const openButton = screen.getByLabelText(/open menu/i);
        expect(openButton).toBeInTheDocument();

        await userEvent.click(openButton);

        // dialog should appear
        const dialog = await screen.findByRole('dialog');
        expect(dialog).toBeInTheDocument();

        // click overlay area - overlay is the first child of the dialog
        const overlay = dialog.children && dialog.children[0];
        expect(overlay).toBeTruthy();
        if (overlay) fireEvent.click(overlay);

        // dialog should be removed (wait for exit animation)
        await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument(), { timeout: 1000 });
    });

    test('closes on Escape', async () => {
        render(<Header locale={'en'} copy={copy} />);
        const openButton = screen.getByLabelText(/open menu/i);
        await userEvent.click(openButton);

        expect(await screen.findByRole('dialog')).toBeInTheDocument();

        fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

        // wait for removal
        await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument(), { timeout: 1000 });
    });

    test('swipe to close triggers on touch events', async () => {
        render(<Header locale={'en'} copy={copy} />);
        const openButton = screen.getByLabelText(/open menu/i);
        await userEvent.click(openButton);

        const dialog = await screen.findByRole('dialog');
        expect(dialog).toBeInTheDocument();

        // panel is the second child of dialog (first is overlay)
        const panel = dialog.children && dialog.children[1];
        expect(panel).toBeTruthy();
        if (panel) {
            // simulate touch start at x=10 and touch end at x=100 (swipe right)
            fireEvent.touchStart(panel, { touches: [{ clientX: 10 }] });
            fireEvent.touchEnd(panel, { changedTouches: [{ clientX: 100 }] });
        }

        // wait for close
        await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument(), { timeout: 1000 });
    });
});
