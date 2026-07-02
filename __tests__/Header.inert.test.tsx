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

const copy = { home: 'Inicio' } as any;

describe('Header inert/aria-hidden handling', () => {
    test('applies aria-hidden or inert to main while menu is open', async () => {
        // ensure there is a main element in the DOM
        document.body.innerHTML = '<main id="app-main">content</main><div id="root"></div>';
        render(<Header locale={'en'} copy={copy} />);

        const openButton = screen.getByLabelText(/open menu/i);
        await userEvent.click(openButton);

        const dialog = await screen.findByRole('dialog');
        expect(dialog).toBeInTheDocument();

        const main = document.querySelector('#app-main') as HTMLElement | null;
        expect(main).toBeTruthy();

        // either inert is set or aria-hidden
        const hasInert = main && (main as any).inert === true;
        const hasAriaHidden = main && main.getAttribute('aria-hidden') === 'true';
        expect(hasInert || hasAriaHidden).toBeTruthy();

        // close menu and ensure attributes removed
        fireEvent.keyDown(document, { key: 'Escape' });
        await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
        if (main) {
            expect(main.getAttribute('aria-hidden')).toBeNull();
            expect((main as any).inert === false || (main as any).inert === undefined).toBeTruthy();
        }
    });
});
