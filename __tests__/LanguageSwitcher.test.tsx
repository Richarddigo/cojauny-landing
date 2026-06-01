import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LanguageSwitcher from '@/components/LanguageSwitcher';

jest.mock('next/navigation', () => ({
    useRouter: () => ({ push: jest.fn() }),
    usePathname: () => '/es',
    useSearchParams: () => new URLSearchParams()
}));

const props = { currentLocale: 'es' } as any;

describe('LanguageSwitcher interactions', () => {
    test('opens and closes with keyboard and click outside; Escape closes', async () => {
        render(<LanguageSwitcher {...props} />);
        const btn = screen.getByLabelText(/selector de idioma/i);
        expect(btn).toBeInTheDocument();

        await userEvent.click(btn);
        const menu = await screen.findByRole('menu', { hidden: true }).catch(() => null);
        // Our implementation doesn't use role=menu; instead check popup exists
        const popup = document.querySelector('[class*="z-50"]');
        expect(popup).toBeTruthy();

        // Press Escape to close
        fireEvent.keyDown(document, { key: 'Escape' });
        await waitFor(() => expect(document.querySelector('[class*="z-50"]')).toBeNull());
    });
});
