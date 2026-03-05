import { test, expect } from '@playwright/test';

test('verify layout', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Advoloom Logger')).toBeVisible();
  await page.screenshot({ path: 'evidence.png' });
});
