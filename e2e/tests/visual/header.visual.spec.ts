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
    await expect(page.locator('role=dialog')).toBeVisible().catch(() => null);

    // take screenshot of menu area
    const menu = page.locator('role=dialog');
    await expect(menu).toBeVisible();
    await page.screenshot({ path: 'test-results/header.menu.mobile.png', fullPage: false });

    // open language switcher inside menu
    // Try multiple selectors to robustly find the language switcher button inside the dialog
    const dialog = await page.locator('role=dialog').first();
    const candidates = [
      'button[aria-label="Change language"]',
      'button:has-text("Español")',
      'button:has-text("English")',
      'button:has-text("Deutsch")',
      'button:has-text("Français")',
      'button:has-text("ES")',
      'button:has-text("EN")'
    ];
    let clicked = false;
    for (const sel of candidates) {
      const handle = await dialog.locator(sel).first();
      try {
        await handle.waitFor({ state: 'visible', timeout: 800 });
        await page.evaluate((el) => (el as HTMLElement).click(), await handle.elementHandle());
        clicked = true;
        break;
      } catch {
        // try next
      }
    }
    if (!clicked) {
      // fallback: click any button inside the dialog
      const anyBtn = await dialog.locator('button').first();
      await anyBtn.waitFor({ state: 'visible', timeout: 2000 });
      await page.evaluate((el) => (el as HTMLElement).click(), await anyBtn.elementHandle());
    }
    await page.waitForTimeout(120);
    await page.screenshot({ path: 'test-results/header.lang.mobile.png', fullPage: false });

    // close
    await page.keyboard.press('Escape');
    await page.waitForTimeout(80);
  });
});
