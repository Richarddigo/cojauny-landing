import { test, expect } from '@playwright/test';

// Visual regression snapshots for header/menu
test.describe('Header visual', () => {
  test('mobile menu and language switcher visuals', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('/es');
    await page.setViewportSize({ width: 390, height: 844 });

    // open menu
    const opener = page.getByRole('button', { name: /open (main )?menu|abrir menú( principal)?|abrir menu( principal)?|menü öffnen|ouvrir le menu( principal)?/i }).first();
    await expect(opener).toBeVisible({ timeout: 10000 });
    await opener.click();
    await page.waitForTimeout(250); // wait for animation
    await expect(page.locator('#__menu_portal [role="dialog"][aria-modal="true"]')).toBeVisible();

    // take screenshot of menu area
    const menu = page.locator('#__menu_portal [role="dialog"][aria-modal="true"]');
    await expect(menu).toBeVisible();
    await page.screenshot({ path: 'test-results/header.menu.mobile.png', fullPage: false });

    // open language switcher inside menu
    const dialog = menu;
    await dialog.getByRole('button', { name: 'Español - Cambiar idioma', exact: true }).click();
    await expect(dialog.getByRole('menu', { name: 'Cambiar idioma', exact: true })).toBeVisible();
    await page.waitForTimeout(120);
    await page.screenshot({ path: 'test-results/header.lang.mobile.png', fullPage: false });

    // close
    await page.keyboard.press('Escape');
    await page.waitForTimeout(80);
  });
});
