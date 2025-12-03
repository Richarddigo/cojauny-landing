import '@testing-library/jest-dom';

// Suppress React warnings about unknown props from framer-motion in tests
const originalError = console.error;
beforeAll(() => {
    console.error = (...args: any[]) => {
        if (
            typeof args[0] === 'string' &&
            (args[0].includes('React does not recognize') ||
             args[0].includes('whileInView') ||
             args[0].includes('whileinview'))
        ) {
            return;
        }
        originalError.call(console, ...args);
    };
});

afterAll(() => {
    console.error = originalError;
});
