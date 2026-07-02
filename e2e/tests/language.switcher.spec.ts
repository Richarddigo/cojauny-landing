import { test, expect } from '@playwright/test';

test.describe('Language switcher', () => {
  test('shows language names and supports keyboard navigation', async ({ page }) => {
    await page.goto('/es');
    await page.setViewportSize({ width: 390, height: 844 });

    // On mobile the language switcher sits inside the menu; open the menu first if needed
    const openMenu = page.getByRole('button', { name: /open (main )?menu|abrir menú( principal)?|abrir menu( principal)?|menü öffnen|ouvrir le menu( principal)?/i }).first();
    if (await openMenu.isVisible()) {
      await openMenu.click();
    }

    const dialog = page.getByRole('dialog').first();
    await expect(dialog).toBeVisible();

    // Open the language switcher
    const button = dialog.getByRole('button', { name: /change language|cambiar idioma|changer de langue|sprache ändern/i }).first();
    await expect(button).toBeVisible();
    await button.click();

    // Menu should be visible and contain language names
    const menu = dialog.getByRole('menu', { name: /change language|cambiar idioma|changer de langue|sprache ändern|language selector|selector de idioma|sélecteur de langue|sprachauswahl/i });
    await expect(menu).toBeVisible();

    // Options can be buttons with role=menuitem or links; use text fallback
    const spanishBtn = menu.getByRole('menuitem', { name: /español/i });
    const englishBtn = menu.getByRole('menuitem', { name: /english/i });
    await expect(spanishBtn).toBeVisible();
    await expect(englishBtn).toBeVisible();
    const spanishText = await spanishBtn.innerText();
    const englishText = await englishBtn.innerText();
    expect(spanishText.trim().toLowerCase()).toContain('español');
    expect(englishText.trim().toLowerCase()).toContain('english');

    // Keyboard navigation: ArrowDown then Enter selects (we check focus and click works)
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    // ensure focus is inside menu
    const activeIsInMenu = await menu.evaluate((el) => el.contains(document.activeElement));
    expect(activeIsInMenu).toBeTruthy();

    // Close with Escape
    await page.keyboard.press('Escape');
    await expect(menu).toHaveCount(0);
  });
});
