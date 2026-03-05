import { test, expect } from '@playwright/test';

test('verify twitter client UI integration', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
  await page.screenshot({ path: 'evidence.png' });
});
