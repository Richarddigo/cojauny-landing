import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const locale of ['en', 'es', 'de', 'fr']) {
  test(`${locale}: app support is reachable and accessible`, async ({ page }) => {
    await page.setExtraHTTPHeaders({ 'Accept-Language': locale });
    const path = locale === 'en' ? '/support' : `/${locale}/support`;
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', locale);
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    const banner = page.getByRole('dialog');
    await banner.getByRole('button').nth(1).click();
    const main = page.getByRole('main');
    await expect(main.getByRole('link', { name: 'soporte@cojauny.com' })).toHaveAttribute(
      'href',
      'mailto:soporte@cojauny.com',
    );
    const nav = main.getByRole('navigation');
    for (const target of [
      '/legal/privacy',
      '/account-deletion',
      '/legal/terms',
      '/legal/faq',
    ]) {
      const href = locale === 'en' ? target : `/${locale}${target}`;
      await expect(nav.locator(`a[href="${href}"]`)).toHaveCount(1);
    }
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://cojauny.com${path}`,
    );
    const audit = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(audit.violations).toEqual([]);
    await page.setViewportSize({ width: 320, height: 800 });
    await expect
      .poll(() => page.evaluate(() => document.documentElement.scrollWidth))
      .toBeLessThanOrEqual(320);
    await nav.locator('a').filter({ hasText: /./ }).nth(1).click();
    await expect(page).toHaveURL(new RegExp('/account-deletion$'));
  });
}
