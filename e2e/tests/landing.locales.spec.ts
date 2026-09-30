import { test, expect } from '@playwright/test';

test('English root and explicit locale resolve without a redirect loop', async ({
  page,
}) => {
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'en' });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.goto('/en');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page).toHaveURL(/\/$/);
});

for (const locale of ['es', 'de', 'fr']) {
  test(`${locale} renders the landing and an accessible email field`, async ({
    page,
  }) => {
    await page.goto(`/${locale}`);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('#hero-beta-email')).toHaveAccessibleName(/.+/);
  });
}

test('the app preview can be selected and released with the keyboard', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/es');
  await page.getByRole('dialog').getByRole('button').nth(1).click();
  const card = page.locator('#demo [role="button"]').first();
  await card.scrollIntoViewIfNeeded();
  await card.focus();
  await page.keyboard.press('Enter');
  await expect(card).toHaveAttribute('aria-pressed', 'true');
  await page.keyboard.press('Space');
  await expect(card).toHaveAttribute('aria-pressed', 'false');
});
