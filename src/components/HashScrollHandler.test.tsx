/**
 * @jest-environment jsdom
 */
import { render, act } from '@testing-library/react';
import HashScrollHandler from './HashScrollHandler';

describe('HashScrollHandler', () => {
    const originalScrollTo = window.scrollTo;
    const originalLocation = window.location;
    let mockScrollTo: jest.Mock;

    beforeEach(() => {
        mockScrollTo = jest.fn();
        window.scrollTo = mockScrollTo;

        // Reset hash
        Object.defineProperty(window, 'location', {
            value: { ...originalLocation, hash: '' },
            writable: true
        });

        document.body.innerHTML = '';
        jest.useFakeTimers();
    });

    afterEach(() => {
        window.scrollTo = originalScrollTo;
        Object.defineProperty(window, 'location', {
            value: originalLocation,
            writable: true
        });
        jest.useRealTimers();
    });

    it('no renderiza nada visible', () => {
        const { container } = render(<HashScrollHandler />);
        expect(container.firstChild).toBeNull();
    });

    it('no hace scroll si no hay hash', () => {
        render(<HashScrollHandler />);
        act(() => {
            jest.runAllTimers();
        });
        expect(mockScrollTo).not.toHaveBeenCalled();
    });

    it('hace scroll al elemento cuando hay hash', () => {
        // Create target element
        const target = document.createElement('div');
        target.id = 'features';
        target.getBoundingClientRect = jest.fn().mockReturnValue({ top: 500 });
        document.body.appendChild(target);

        // Create header
        const header = document.createElement('header');
        header.getBoundingClientRect = jest.fn().mockReturnValue({ height: 80 });
        document.body.appendChild(header);

        // Set hash
        Object.defineProperty(window, 'location', {
            value: { ...originalLocation, hash: '#features' },
            writable: true
        });

        render(<HashScrollHandler />);

        act(() => {
            jest.runAllTimers();
        });

        expect(mockScrollTo).toHaveBeenCalledWith(
            expect.objectContaining({ behavior: 'smooth' })
        );
    });

    it('escucha eventos hashchange', () => {
        const target = document.createElement('div');
        target.id = 'contact';
        target.getBoundingClientRect = jest.fn().mockReturnValue({ top: 1000 });
        document.body.appendChild(target);

        render(<HashScrollHandler />);

        // Simular cambio de hash
        Object.defineProperty(window, 'location', {
            value: { ...originalLocation, hash: '#contact' },
            writable: true
        });

        act(() => {
            window.dispatchEvent(new HashChangeEvent('hashchange'));
            jest.runAllTimers();
        });

        expect(mockScrollTo).toHaveBeenCalled();
    });

    it('limpia event listener al desmontar', () => {
        const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

        const { unmount } = render(<HashScrollHandler />);
        unmount();

        expect(removeEventListenerSpy).toHaveBeenCalledWith('hashchange', expect.any(Function));
        removeEventListenerSpy.mockRestore();
    });
});
