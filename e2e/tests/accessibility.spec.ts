import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const locale of ['en', 'es', 'de', 'fr']) {
  test(`${locale}: language, layout and WCAG checks`, async ({ page, request }) => {
    const path = locale === 'en' ? '/' : `/${locale}`;
    const response = await request.get(path, { headers: { 'Accept-Language': locale } });
    expect(await response.text()).toMatch(new RegExp(`<html[^>]*lang="${locale}"`));
    // Audit stable colors, not intermediate opacity frames during entrance animations.
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(path);
    // Audit the real optimized first-visit banner before dismissing it. A
    // transform utility surviving CSS minification must not hide its message.
    const originalViewport = page.viewportSize();
    const banner = page.getByRole('dialog');
    await expect(banner).toBeVisible();
    for (const viewport of [{ width: 1280, height: 800 }, { width: 390, height: 844 }]) {
      await page.setViewportSize(viewport);
      for (const element of [banner, banner.locator('p').first(), ...await banner.getByRole('button').all()]) {
        await expect.poll(async () => (await element.boundingBox())?.x ?? -1).toBeGreaterThanOrEqual(0);
        await expect.poll(async () => {
          const bounds = await element.boundingBox();
          return bounds ? bounds.x + bounds.width : Infinity;
        }).toBeLessThanOrEqual(viewport.width + 1);
      }
    }
    if (originalViewport) await page.setViewportSize(originalViewport);
    await page.getByRole('dialog').getByRole('button').nth(1).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    await page.addStyleTag({ content: '.cv-auto { content-visibility: visible !important; }' });
    const audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(audit.violations).toEqual([]);
    await page.setViewportSize({ width: 320, height: 800 });
    // The mobile layout also reacts to matchMedia; wait for that resize render.
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth), { timeout: 3000 }).toBeLessThanOrEqual(320);
  });
}

test('cookie preferences can be reopened and analytics revoked', async ({ page }) => {
  await page.goto('/es');
  const banner = page.getByRole('dialog');
  await banner.getByRole('button').first().click();
  await expect(banner).toBeHidden();
  await page.getByRole('button', { name: 'Preferencias de cookies' }).click();
  await expect(banner).toBeVisible();
  await banner.getByRole('button').nth(1).click();
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('cojauny-consent-v2') ?? '{}').analytics)).toBe(false);
});

test('new articles have one main heading and accessible content', async ({ page }) => {
  await page.goto('/es/blog/airport-transfer-options');
  await page.getByRole('dialog').getByRole('button').nth(1).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  const audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(audit.violations).toEqual([]);
});
