import '@testing-library/jest-dom';
import { getCommonCopy } from '@/locales/common';
import { getLandingCopy } from '@/locales/copy';

// jsdom has no IntersectionObserver. AnimateIn (scroll-reveal) relies on it;
// stub it so components using it render synchronously in tests without
// crashing, defaulting to "already visible" behavior isn't required since
// tests only assert on content, not reveal-state classes.
class IntersectionObserverStub implements IntersectionObserver {
    readonly root: Element | Document | null = null;
    readonly rootMargin: string = '';
    readonly scrollMargin: string = '';
    readonly thresholds: ReadonlyArray<number> = [];
    observe() { /* no-op */ }
    unobserve() { /* no-op */ }
    disconnect() { /* no-op */ }
    takeRecords(): IntersectionObserverEntry[] { return []; }
}

if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).IntersectionObserver = IntersectionObserverStub;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).IntersectionObserver = IntersectionObserverStub;
}

jest.mock('next-intl', () => {
    const messages = {
        landing: getLandingCopy('es'),
        common: getCommonCopy('es')
    };

    const resolvePath = (source: unknown, path?: string): unknown => {
        if (!path) return source;
        return path.split('.').reduce<unknown>((acc, key) => {
            if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
                return (acc as Record<string, unknown>)[key];
            }
            return undefined;
        }, source);
    };

    const interpolate = (template: string, values?: Record<string, string | number>): string => {
        if (!values) return template;
        return template.replace(/\{(.*?)\}/g, (_, token) => String(values[token] ?? `{${token}}`));
    };

    const useTranslations = (namespace?: string) => {
        const scoped = resolvePath(messages, namespace) as Record<string, unknown> | undefined;
        const translate = ((key: string, values?: Record<string, string | number>) => {
            const raw = scoped?.[key];
            return typeof raw === 'string' ? interpolate(raw, values) : key;
        }) as ((key: string, values?: Record<string, string | number>) => string) & { rich: (key: string) => string };

        translate.rich = (key: string) => translate(key);
        return translate;
    };

    return {
        NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => children,
        useMessages: () => messages,
        useLocale: () => 'es',
        useTranslations
    };
});

// Suppress React warnings about unknown props from framer-motion in tests
const originalError = console.error.bind(console);
beforeAll(() => {
    console.error = (...args: unknown[]) => {
        if (
            typeof args[0] === 'string' &&
            (args[0].includes('React does not recognize') ||
             args[0].includes('whileInView') ||
             args[0].includes('whileinview'))
        ) {
            return;
        }
        originalError(...(args as Parameters<typeof originalError>));
    };
});

afterAll(() => {
    console.error = originalError;
});
