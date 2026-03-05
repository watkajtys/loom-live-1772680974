import { test, expect } from '@playwright/test';

test('Verify base project configuration', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Loom App/);
  await page.screenshot({ path: 'evidence.png' });
});
