/**
 * @jest-environment jsdom
 */
import { renderHook, act } from '@testing-library/react';
import { useConsent } from './useConsent';

describe('useConsent', () => {
    const STORAGE_KEY = 'cojauny-consent';

    beforeEach(() => {
        window.localStorage.clear();
    });

    it('inicia con estado unknown si no hay valor guardado', () => {
        const { result } = renderHook(() => useConsent());
        expect(result.current.consent).toBe('unknown');
    });

    it('recupera estado accepted de localStorage', () => {
        window.localStorage.setItem(STORAGE_KEY, 'accepted');
        const { result } = renderHook(() => useConsent());
        expect(result.current.consent).toBe('accepted');
    });

    it('recupera estado rejected de localStorage', () => {
        window.localStorage.setItem(STORAGE_KEY, 'rejected');
        const { result } = renderHook(() => useConsent());
        expect(result.current.consent).toBe('rejected');
    });

    it('ignora valores inválidos en localStorage', () => {
        window.localStorage.setItem(STORAGE_KEY, 'invalid-value');
        const { result } = renderHook(() => useConsent());
        expect(result.current.consent).toBe('unknown');
    });

    it('accept() guarda en localStorage y actualiza estado', () => {
        const { result } = renderHook(() => useConsent());
        
        act(() => {
            result.current.accept();
        });

        expect(result.current.consent).toBe('accepted');
        expect(window.localStorage.getItem(STORAGE_KEY)).toBe('accepted');
    });

    it('reject() guarda en localStorage y actualiza estado', () => {
        const { result } = renderHook(() => useConsent());
        
        act(() => {
            result.current.reject();
        });

        expect(result.current.consent).toBe('rejected');
        expect(window.localStorage.getItem(STORAGE_KEY)).toBe('rejected');
    });

    it('permite cambiar de accepted a rejected', () => {
        window.localStorage.setItem(STORAGE_KEY, 'accepted');
        const { result } = renderHook(() => useConsent());
        
        expect(result.current.consent).toBe('accepted');

        act(() => {
            result.current.reject();
        });

        expect(result.current.consent).toBe('rejected');
    });
});
