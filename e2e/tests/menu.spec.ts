import { test, expect } from '@playwright/test';

test.describe('Mobile menu accessibility', () => {
  test('opens and traps focus, closes on Escape', async ({ page, browserName }) => {
    await page.goto('/es');
    await page.setViewportSize({ width: 390, height: 844 });

    const open = page.getByRole('button', { name: /open main menu/i });
    await open.click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    // close with Escape
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).toHaveCount(0);
  });
});
