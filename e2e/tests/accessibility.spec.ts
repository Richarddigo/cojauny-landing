import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const locale of ['en', 'es', 'de', 'fr']) {
  test(`${locale}: language, layout and WCAG checks`, async ({ page, request }) => {
    const path = locale === 'en' ? '/' : `/${locale}`;
    const response = await request.get(path, { headers: { 'Accept-Language': locale } });
    expect(await response.text()).toMatch(new RegExp(`<html[^>]*lang="${locale}"`));
    await page.goto(path);
    await page.getByRole('dialog').getByRole('button').nth(1).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    await page.addStyleTag({ content: '.cv-auto { content-visibility: visible !important; }' });
    const audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(audit.violations).toEqual([]);
    await page.setViewportSize({ width: 320, height: 800 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
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
