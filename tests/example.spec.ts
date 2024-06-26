import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://qa9.legalmatch.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Find a Lawyer Near You | Attorney Search - LegalMatch");
});
