import { test, expect } from '@playwright/test';

test.describe('Mobile menu focus behavior', () => {
  test('focus trap and inert/aria-hidden handling', async ({ page }) => {
    await page.goto('/es');
    await page.setViewportSize({ width: 390, height: 844 });

    const open = page.getByRole('button', { name: /open main menu/i });
    await open.click();

    // Close button should receive focus
    const close = page.getByRole('button', { name: /close menu/i });
    await expect(close).toBeVisible();
    await expect(close).toBeFocused();

    // Tab/Shift+Tab should keep focus inside the menu dialog (focus trap)
    const dialogHandle = await page.getByRole('dialog').elementHandle();
    if (!dialogHandle) throw new Error('Menu dialog not found');

    const maxTabs = 20;
    for (let i = 0; i < maxTabs; i++) {
      await page.keyboard.press('Tab');
      const inside = await dialogHandle.evaluate((d) => d.contains(document.activeElement));
      if (!inside) {
        throw new Error('Focus left the menu dialog during Tab navigation');
      }
    }

    // Shift+Tab should also remain inside
    for (let i = 0; i < maxTabs; i++) {
      await page.keyboard.down('Shift');
      await page.keyboard.press('Tab');
      await page.keyboard.up('Shift');
      const inside = await dialogHandle.evaluate((d) => d.contains(document.activeElement));
      if (!inside) {
        throw new Error('Focus left the menu dialog during Shift+Tab navigation');
      }
    }

    // main content should have aria-hidden or inert set
    const main = page.locator('#main-content').first().or(page.locator('main').first());
    const ariaHidden = await main.getAttribute('aria-hidden');
    const hasInert = await main.evaluate((el) => (el as any).inert === true).catch(() => false);
    expect(ariaHidden === 'true' || hasInert).toBeTruthy();

    // Close the menu and verify it's closed; opener must regain focus and inert removed
    await close.click();
    await expect(page.getByRole('dialog')).toHaveCount(0);
    await expect(open).toBeVisible();
    await expect(open).toBeEnabled();
    // opener must be focused (strict)
    await expect(open).toBeFocused();
    const ariaHiddenAfter = await main.getAttribute('aria-hidden');
    const hasInertAfter = await main.evaluate((el) => (el as any).inert === true).catch(() => false);
    expect(ariaHiddenAfter === null || ariaHiddenAfter === 'false' || hasInertAfter === false).toBeTruthy();
  });
});
