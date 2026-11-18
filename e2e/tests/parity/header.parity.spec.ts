import { expect, test, type Browser, type Page } from '@playwright/test';

const TARGETS = [
    {
        name: 'cojauny-landing',
        url: process.env.HEADER_URL_LANDING ?? 'http://localhost:3001/en?audit=parity',
    },
    {
        name: 'cojauny-studio',
        url: process.env.HEADER_URL_STUDIO ?? 'http://localhost:3000/en?audit=parity',
    },
    {
        name: 'cuatrosotas-landing',
        url: process.env.HEADER_URL_CUATROSOTAS ?? 'http://localhost:3003/en?audit=parity',
    },
] as const;

const EXPECTED = {
    desktopHeaderHeightPx: 70,
    desktopNavHeightPx: 70,
    mobileHeaderHeightPx: 68,
    mobileNavHeightPx: 68,
    mobileMenuPanelWidthPx: 202,
    bodyOverflowAfterClose: 'hidden auto',
    scrollbarWidth: '6px',
    scrollbarThumbColor: 'rgb(42, 53, 80)',
} as const;

function normalizeOverflow(value: string): string {
    return value.trim().replace(/\s+/g, ' ');
}

async function collectScrolledHeaderMetrics(page: Page, url: string) {
    const header = page.locator('header');
    const initialClass = await header.getAttribute('class');
    await page.evaluate(() => window.scrollTo({ top: 160, behavior: 'instant' }));
    await expect.poll(() => page.evaluate(() => window.scrollY), {
        message: `${url}: the viewport scrolls to the header test position`,
        timeout: 5000,
    }).toBe(160);
    await expect(header, `${url}: scrolling applies the scrolled header state`).not.toHaveAttribute('class', initialClass ?? '');

    const metrics = await header.evaluate(async element => {
        // Flush the changed style so measurements include completed transitions.
        element.getBoundingClientRect();
        await Promise.all(element.getAnimations().map(animation => animation.finished));
        const nav = element.querySelector('nav');
        if (!(nav instanceof HTMLElement)) throw new Error('Header nav element not found.');
        return {
            headerHeight: Math.round(element.getBoundingClientRect().height),
            navHeight: Math.round(nav.getBoundingClientRect().height),
        };
    });

    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await expect.poll(() => page.evaluate(() => window.scrollY), {
        message: `${url}: the viewport returns to its initial scroll position`,
        timeout: 5000,
    }).toBe(0);
    await expect(header, `${url}: returning to the top restores the initial header state`).toHaveAttribute('class', initialClass ?? '');
    return metrics;
}

async function collectDesktopMetrics(browser: Browser, url: string) {
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const page = await context.newPage();

    try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
        await page.waitForSelector('header', { timeout: 30_000 });

        const initial = await page.evaluate(() => {
            const header = document.querySelector('header');
            const nav = document.querySelector('header nav');
            if (!(header instanceof HTMLElement) || !(nav instanceof HTMLElement)) {
                throw new Error('Header or nav element not found.');
            }

            return {
                headerHeight: Math.round(header.getBoundingClientRect().height),
                navHeight: Math.round(nav.getBoundingClientRect().height),
            };
        });
        const scrolled = await collectScrolledHeaderMetrics(page, url);
        return {
            ...initial,
            scrolledHeaderHeight: scrolled.headerHeight,
            scrolledNavHeight: scrolled.navHeight,
        };
    } finally {
        await context.close();
    }
}

async function collectMobileMetrics(browser: Browser, url: string) {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();

    try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
        await page.waitForSelector('header', { timeout: 30_000 });

        const opener = page.locator('button[aria-controls="__menu_portal"]').first();
        await expect(opener).toBeVisible();

        const base = await page.evaluate(() => {
            const header = document.querySelector('header');
            const nav = document.querySelector('header nav');
            if (!(header instanceof HTMLElement) || !(nav instanceof HTMLElement)) {
                throw new Error('Header or nav element not found.');
            }

            return {
                headerHeight: Math.round(header.getBoundingClientRect().height),
                navHeight: Math.round(nav.getBoundingClientRect().height),
            };
        });
        const scrolled = await collectScrolledHeaderMetrics(page, url);

        await opener.click();

        const dialog = page.locator('#__menu_portal [role="dialog"][aria-modal="true"]');
        await expect(opener, `${url}: metric collection opens the menu`).toHaveAttribute('aria-expanded', 'true');
        await expect(dialog, `${url}: metric collection shows the controlled modal`).toHaveAttribute('aria-hidden', 'false');

        const menuMetrics = await page.evaluate(() => {
            const dialogEl = document.querySelector('#__menu_portal [role="dialog"][aria-modal="true"]');
            if (!(dialogEl instanceof HTMLElement)) {
                throw new Error('Mobile menu dialog not found.');
            }

            const panel = dialogEl.querySelector(':scope > div:last-child');
            if (!(panel instanceof HTMLElement)) {
                throw new Error('Mobile menu panel not found.');
            }

            const rootScrollbarStyle = getComputedStyle(document.documentElement, '::-webkit-scrollbar');
            const thumbStyle = getComputedStyle(document.documentElement, '::-webkit-scrollbar-thumb');

            return {
                panelWidth: Math.round(panel.getBoundingClientRect().width),
                scrollbarWidth: rootScrollbarStyle.width,
                scrollbarThumbColor: thumbStyle.backgroundColor,
            };
        });

        await page.keyboard.press('Escape');
        await expect.poll(
            () => dialog.evaluateAll(nodes => nodes.every(el => el.getAttribute('aria-hidden') === 'true')),
            { message: `${url}: metric collection closes or unmounts the menu with Escape`, timeout: 5000 },
        ).toBe(true);
        await expect(opener, `${url}: metric collection restores opener focus`).toBeFocused();

        const closed = await page.evaluate(() => {
            const dialogEl = document.querySelector('#__menu_portal [role="dialog"][aria-modal="true"]');
            const openerEl = document.querySelector('button[aria-controls="__menu_portal"]');

            return {
                dialogClosed: dialogEl === null || dialogEl.getAttribute('aria-hidden') === 'true',
                openerFocused: openerEl !== null && document.activeElement === openerEl,
                bodyOverflow: getComputedStyle(document.body).overflow,
            };
        });

        return {
            mobileHeaderHeight: base.headerHeight,
            mobileNavHeight: base.navHeight,
            scrolledMobileHeaderHeight: scrolled.headerHeight,
            scrolledMobileNavHeight: scrolled.navHeight,
            mobileMenuPanelWidth: menuMetrics.panelWidth,
            scrollbarWidth: menuMetrics.scrollbarWidth,
            scrollbarThumbColor: menuMetrics.scrollbarThumbColor,
            bodyOverflowAfterClose: normalizeOverflow(closed.bodyOverflow),
            openerFocusedAfterClose: closed.openerFocused,
            dialogClosedAfterClose: closed.dialogClosed,
        };
    } finally {
        await context.close();
    }
}

async function collectTelemetryReasons(browser: Browser, url: string) {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();

    try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
        await page.waitForSelector('header', { timeout: 30_000 });

        await page.evaluate(() => {
            const bucket: Array<{ action: string; reason: string }> = [];
            (window as Window & { __menuTelemetry?: Array<{ action: string; reason: string }> }).__menuTelemetry = bucket;
            window.addEventListener('eco:mobile-menu', (event) => {
                const customEvent = event as CustomEvent<{ action: string; reason: string }>;
                bucket.push({
                    action: customEvent.detail?.action ?? 'unknown',
                    reason: customEvent.detail?.reason ?? 'unknown',
                });
            });
        });

        const opener = page.locator('button[aria-controls="__menu_portal"]').first();
        await expect(opener).toBeVisible();

        const dialog = page.locator('#__menu_portal [role="dialog"][aria-modal="true"]');
        await opener.click();
        await expect(opener, `${url}: first click expands the menu control`).toHaveAttribute('aria-expanded', 'true');
        await expect(dialog, `${url}: first click opens the controlled modal`).toHaveAttribute('aria-hidden', 'false');

        const overlay = dialog.locator(':scope > div').first();
        await overlay.click();
        await expect(opener, `${url}: overlay collapses the menu control`).toHaveAttribute('aria-expanded', 'false');
        await expect.poll(
            () => dialog.evaluateAll(nodes => nodes.every(el => el.getAttribute('aria-hidden') === 'true')),
            { message: `${url}: overlay closes or unmounts the controlled modal`, timeout: 5000 },
        ).toBe(true);

        await opener.click();
        await expect(opener, `${url}: second click expands the menu control`).toHaveAttribute('aria-expanded', 'true');
        await expect(dialog, `${url}: second click opens the controlled modal`).toHaveAttribute('aria-hidden', 'false');

        await page.keyboard.press('Escape');
        await expect(opener, `${url}: Escape collapses the menu control`).toHaveAttribute('aria-expanded', 'false');
        await expect.poll(
            () => dialog.evaluateAll(nodes => nodes.every(el => el.getAttribute('aria-hidden') === 'true')),
            { message: `${url}: Escape closes or unmounts the controlled modal`, timeout: 5000 },
        ).toBe(true);
        await expect(opener, `${url}: Escape restores opener focus`).toBeFocused();

        const events = await page.evaluate(() => {
            return (
                (window as Window & { __menuTelemetry?: Array<{ action: string; reason: string }> }).__menuTelemetry ?? []
            ).map((item) => `${item.action}:${item.reason}`);
        });

        return new Set(events);
    } finally {
        await context.close();
    }
}

test.describe('Header parity cross-project', () => {
    test.beforeEach(async ({}, testInfo) => {
        test.skip(testInfo.project.name !== 'chromium', 'Runs once in chromium project to avoid duplicate parity runs.');
    });

    test('desktop and mobile metrics match navigation contract', async ({ browser }) => {
        for (const target of TARGETS) {
            const desktop = await collectDesktopMetrics(browser, target.url);
            expect(
                desktop.headerHeight,
                `${target.name}: desktop header height must stay aligned with shared contract`,
            ).toBe(EXPECTED.desktopHeaderHeightPx);
            expect(
                desktop.navHeight,
                `${target.name}: desktop nav height must stay aligned with shared contract`,
            ).toBe(EXPECTED.desktopNavHeightPx);
            expect(
                desktop.scrolledHeaderHeight,
                `${target.name}: scrolled desktop header height must stay aligned with shared contract`,
            ).toBe(EXPECTED.desktopHeaderHeightPx);
            expect(
                desktop.scrolledNavHeight,
                `${target.name}: scrolled desktop nav height must stay aligned with shared contract`,
            ).toBe(EXPECTED.desktopNavHeightPx);

            const mobile = await collectMobileMetrics(browser, target.url);
            expect(
                mobile.mobileHeaderHeight,
                `${target.name}: mobile header height must stay aligned with shared contract`,
            ).toBe(EXPECTED.mobileHeaderHeightPx);
            expect(
                mobile.mobileNavHeight,
                `${target.name}: mobile nav height must stay aligned with shared contract`,
            ).toBe(EXPECTED.mobileNavHeightPx);
            expect(
                mobile.scrolledMobileHeaderHeight,
                `${target.name}: scrolled mobile header height must stay aligned with shared contract`,
            ).toBe(EXPECTED.mobileHeaderHeightPx);
            expect(
                mobile.scrolledMobileNavHeight,
                `${target.name}: scrolled mobile nav height must stay aligned with shared contract`,
            ).toBe(EXPECTED.mobileNavHeightPx);
            expect(
                mobile.mobileMenuPanelWidth,
                `${target.name}: mobile menu panel width must stay aligned with shared contract`,
            ).toBe(EXPECTED.mobileMenuPanelWidthPx);
            expect(
                mobile.bodyOverflowAfterClose,
                `${target.name}: body overflow after menu close must stay aligned with shared contract`,
            ).toBe(EXPECTED.bodyOverflowAfterClose);
            expect(
                mobile.scrollbarWidth,
                `${target.name}: scrollbar width must stay aligned with shared contract`,
            ).toBe(EXPECTED.scrollbarWidth);
            expect(
                mobile.scrollbarThumbColor,
                `${target.name}: scrollbar thumb color must stay aligned with shared contract`,
            ).toBe(EXPECTED.scrollbarThumbColor);
            expect(
                mobile.openerFocusedAfterClose,
                `${target.name}: menu opener should restore focus after closing with Escape`,
            ).toBeTruthy();
            expect(
                mobile.dialogClosedAfterClose,
                `${target.name}: menu should be absent or aria-hidden=true after close`,
            ).toBeTruthy();
        }
    });

    test('mobile menu emits standardized telemetry reasons', async ({ browser }) => {
        for (const target of TARGETS) {
            const telemetryEvents = await collectTelemetryReasons(browser, target.url);

            expect(telemetryEvents.has('open:open-button'), `${target.name}: open telemetry should use open-button reason`).toBeTruthy();
            expect(telemetryEvents.has('close:overlay'), `${target.name}: overlay close telemetry should be emitted`).toBeTruthy();
            expect(telemetryEvents.has('close:escape'), `${target.name}: Escape close telemetry should be emitted`).toBeTruthy();
        }
    });
});
