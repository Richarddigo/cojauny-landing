import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { NAVIGATION_CONTRACT } from '../src/lib/navigationContract';

type Target = {
    name: string;
    url: string;
};

type DesktopMetrics = {
    headerHeight: number;
    navHeight: number;
};

type MobileMetrics = {
    mobileHeaderHeight: number;
    mobileNavHeight: number;
    mobileMenuPanelWidth: number;
    bodyOverflowAfterClose: string;
    scrollbarWidth: string;
    scrollbarThumbColor: string;
    openerFocusedAfterClose: boolean;
    dialogAriaHiddenAfterClose: string | null;
};

type TargetReport = {
    name: string;
    url: string;
    desktop?: DesktopMetrics;
    mobile?: MobileMetrics;
    error?: string;
};

type Check = {
    target: string;
    metric: string;
    expected: string | number | boolean;
    actual: string | number | boolean | null;
    pass: boolean;
};

const TARGETS: Target[] = [
    {
        name: 'cojauny-landing',
        url: process.env.HEADER_URL_LANDING ?? 'http://localhost:3001/en?audit=ci-parity',
    },
    {
        name: 'cojauny-studio',
        url: process.env.HEADER_URL_STUDIO ?? 'http://localhost:3000/en?audit=ci-parity',
    },
    {
        name: 'cuatrosotas-landing',
        url: process.env.HEADER_URL_CUATROSOTAS ?? 'http://localhost:3003/en?audit=ci-parity',
    },
];

const EXPECTED = {
    desktopHeaderHeight: NAVIGATION_CONTRACT.headerDesktopHeightPx,
    desktopNavHeight: NAVIGATION_CONTRACT.headerDesktopHeightPx,
    mobileHeaderHeight: NAVIGATION_CONTRACT.headerMobileHeightPx,
    mobileNavHeight: NAVIGATION_CONTRACT.headerMobileHeightPx,
    mobileMenuPanelWidth: NAVIGATION_CONTRACT.mobileMenuPanelWidthPx,
    bodyOverflowAfterClose: NAVIGATION_CONTRACT.bodyOverflowAfterClose,
    scrollbarWidth: `${NAVIGATION_CONTRACT.scrollbarWidthPx}px`,
    scrollbarThumbColor: NAVIGATION_CONTRACT.scrollbarThumbColorRgb,
    openerFocusedAfterClose: true,
    dialogAriaHiddenAfterClose: 'true',
} as const;

function normalizeOverflow(value: string): string {
    return value.trim().replace(/\s+/g, ' ');
}

async function collectDesktopMetrics(url: string): Promise<DesktopMetrics> {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const page = await context.newPage();

    try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
        await page.waitForSelector('header', { timeout: 30_000 });

        return await page.evaluate(() => {
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
    } finally {
        await context.close();
        await browser.close();
    }
}

async function collectMobileMetrics(url: string): Promise<MobileMetrics> {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();

    try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
        await page.waitForSelector('header', { timeout: 30_000 });

        const opener = page.locator('button[aria-controls="__menu_portal"]').first();
        await opener.waitFor({ state: 'visible', timeout: 30_000 });

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

        await opener.click();
        await page.waitForTimeout(260);

        const menu = await page.evaluate(() => {
            const dialog = document.querySelector('[role="dialog"]');
            if (!(dialog instanceof HTMLElement)) {
                throw new Error('Mobile menu dialog not found.');
            }

            const panel = dialog.querySelector(':scope > div:last-child');
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
        await page.waitForTimeout(320);

        const closed = await page.evaluate(() => {
            const dialog = document.querySelector('[role="dialog"]');
            const openerEl = document.querySelector('button[aria-controls="__menu_portal"]');

            return {
                dialogAriaHidden: dialog?.getAttribute('aria-hidden') ?? null,
                openerFocused: openerEl !== null && document.activeElement === openerEl,
                bodyOverflow: getComputedStyle(document.body).overflow,
            };
        });

        return {
            mobileHeaderHeight: base.headerHeight,
            mobileNavHeight: base.navHeight,
            mobileMenuPanelWidth: menu.panelWidth,
            bodyOverflowAfterClose: normalizeOverflow(closed.bodyOverflow),
            scrollbarWidth: menu.scrollbarWidth,
            scrollbarThumbColor: menu.scrollbarThumbColor,
            openerFocusedAfterClose: closed.openerFocused,
            dialogAriaHiddenAfterClose: closed.dialogAriaHidden,
        };
    } finally {
        await context.close();
        await browser.close();
    }
}

function buildChecks(target: TargetReport): Check[] {
    if (!target.desktop || !target.mobile) {
        return [
            {
                target: target.name,
                metric: 'audit-complete',
                expected: true,
                actual: false,
                pass: false,
            },
        ];
    }

    const checks: Check[] = [
        {
            target: target.name,
            metric: 'desktop-header-height',
            expected: EXPECTED.desktopHeaderHeight,
            actual: target.desktop.headerHeight,
            pass: target.desktop.headerHeight === EXPECTED.desktopHeaderHeight,
        },
        {
            target: target.name,
            metric: 'desktop-nav-height',
            expected: EXPECTED.desktopNavHeight,
            actual: target.desktop.navHeight,
            pass: target.desktop.navHeight === EXPECTED.desktopNavHeight,
        },
        {
            target: target.name,
            metric: 'mobile-header-height',
            expected: EXPECTED.mobileHeaderHeight,
            actual: target.mobile.mobileHeaderHeight,
            pass: target.mobile.mobileHeaderHeight === EXPECTED.mobileHeaderHeight,
        },
        {
            target: target.name,
            metric: 'mobile-nav-height',
            expected: EXPECTED.mobileNavHeight,
            actual: target.mobile.mobileNavHeight,
            pass: target.mobile.mobileNavHeight === EXPECTED.mobileNavHeight,
        },
        {
            target: target.name,
            metric: 'mobile-menu-panel-width',
            expected: EXPECTED.mobileMenuPanelWidth,
            actual: target.mobile.mobileMenuPanelWidth,
            pass: target.mobile.mobileMenuPanelWidth === EXPECTED.mobileMenuPanelWidth,
        },
        {
            target: target.name,
            metric: 'body-overflow-after-close',
            expected: EXPECTED.bodyOverflowAfterClose,
            actual: target.mobile.bodyOverflowAfterClose,
            pass: target.mobile.bodyOverflowAfterClose === EXPECTED.bodyOverflowAfterClose,
        },
        {
            target: target.name,
            metric: 'scrollbar-width',
            expected: EXPECTED.scrollbarWidth,
            actual: target.mobile.scrollbarWidth,
            pass: target.mobile.scrollbarWidth === EXPECTED.scrollbarWidth,
        },
        {
            target: target.name,
            metric: 'scrollbar-thumb-color',
            expected: EXPECTED.scrollbarThumbColor,
            actual: target.mobile.scrollbarThumbColor,
            pass: target.mobile.scrollbarThumbColor === EXPECTED.scrollbarThumbColor,
        },
        {
            target: target.name,
            metric: 'opener-focused-after-close',
            expected: EXPECTED.openerFocusedAfterClose,
            actual: target.mobile.openerFocusedAfterClose,
            pass: target.mobile.openerFocusedAfterClose === EXPECTED.openerFocusedAfterClose,
        },
        {
            target: target.name,
            metric: 'dialog-aria-hidden-after-close',
            expected: EXPECTED.dialogAriaHiddenAfterClose,
            actual: target.mobile.dialogAriaHiddenAfterClose,
            pass: target.mobile.dialogAriaHiddenAfterClose === EXPECTED.dialogAriaHiddenAfterClose,
        },
    ];

    return checks;
}

async function run(): Promise<void> {
    const reports: TargetReport[] = [];

    for (const target of TARGETS) {
        try {
            const desktop = await collectDesktopMetrics(target.url);
            const mobile = await collectMobileMetrics(target.url);

            reports.push({
                name: target.name,
                url: target.url,
                desktop,
                mobile,
            });
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            reports.push({
                name: target.name,
                url: target.url,
                error: message,
            });
        }
    }

    const checks = reports.flatMap(buildChecks);
    const failedChecks = checks.filter((check) => !check.pass);

    const report = {
        generatedAt: new Date().toISOString(),
        expected: EXPECTED,
        targets: reports,
        checks,
        summary: {
            totalChecks: checks.length,
            failedChecks: failedChecks.length,
            passedChecks: checks.length - failedChecks.length,
            allPassed: failedChecks.length === 0,
        },
    };

    const outputDir = path.join(process.cwd(), 'reports');
    const outputPath = path.join(outputDir, 'header-parity-report.json');

    await mkdir(outputDir, { recursive: true });
    await writeFile(outputPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

    console.log(`Header parity report saved to ${outputPath}`);
    console.table(
        checks.map((check) => ({
            target: check.target,
            metric: check.metric,
            expected: check.expected,
            actual: check.actual,
            pass: check.pass,
        })),
    );

    if (failedChecks.length > 0) {
        process.exitCode = 1;
    }
}

run().catch((error) => {
    console.error('Header parity report failed:', error);
    process.exit(1);
});
