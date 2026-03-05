import { test, expect } from '@playwright/test';

test('verify twitter client UI integration', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
  await page.screenshot({ path: 'evidence.png' });
});

test('verify advoloom UI integration', async ({ page }) => {
  await page.goto('/?view=dashboard');
  
  // Verify main heading
  const heading = page.locator('h1', { hasText: 'Advoloom' });
  await expect(heading).toBeVisible();

  // Verify dashboard view specific text
  await expect(page.locator('text=Operations Dashboard')).toBeVisible();
  await expect(page.locator('text=Active Nodes')).toBeVisible();
  
  // Click on Settings to navigate and verify URL and text changes
  await page.click('button:has-text("SETTINGS")');
  await expect(page.locator('text=System Settings')).toBeVisible();
  await expect(page).toHaveURL(/.*view=settings/);

  // Take screenshot for verification
  await page.screenshot({ path: 'evidence.png' });
});
