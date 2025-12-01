import { smoothScrollTo } from './smoothScroll';

describe('smoothScrollTo', () => {
    const originalScrollTo = window.scrollTo;
    const mockScrollTo = jest.fn();

    beforeEach(() => {
        window.scrollTo = mockScrollTo;
        mockScrollTo.mockClear();
        document.body.innerHTML = '';
    });

    afterEach(() => {
        window.scrollTo = originalScrollTo;
    });

    it('no hace nada si el elemento no existe', () => {
        smoothScrollTo('nonexistent-id');
        expect(mockScrollTo).not.toHaveBeenCalled();
    });

    it('hace scroll al elemento cuando existe', () => {
        // Create target element
        const target = document.createElement('div');
        target.id = 'target-section';
        document.body.appendChild(target);
        
        // Mock getBoundingClientRect
        target.getBoundingClientRect = jest.fn().mockReturnValue({
            top: 500,
            height: 200
        });

        smoothScrollTo('target-section');
        
        expect(mockScrollTo).toHaveBeenCalledWith(
            expect.objectContaining({
                behavior: 'smooth'
            })
        );
    });

    it('considera la altura del header en el offset', () => {
        // Create header
        const header = document.createElement('header');
        header.getBoundingClientRect = jest.fn().mockReturnValue({ height: 80 });
        document.body.appendChild(header);

        // Create target
        const target = document.createElement('div');
        target.id = 'with-header';
        target.getBoundingClientRect = jest.fn().mockReturnValue({ top: 600 });
        document.body.appendChild(target);

        smoothScrollTo('with-header');

        expect(mockScrollTo).toHaveBeenCalled();
        const scrollCall = mockScrollTo.mock.calls[0][0];
        expect(scrollCall.top).toBeDefined();
    });

    it('funciona sin header presente', () => {
        const target = document.createElement('div');
        target.id = 'no-header-target';
        target.getBoundingClientRect = jest.fn().mockReturnValue({ top: 300 });
        document.body.appendChild(target);

        smoothScrollTo('no-header-target');
        
        expect(mockScrollTo).toHaveBeenCalledWith(
            expect.objectContaining({
                behavior: 'smooth'
            })
        );
    });
});
