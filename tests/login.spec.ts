import { test, expect, Browser, Page } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('login test', async () => {
    const browser: Browser = await chromium.launch({
        headless: false
    })
    const context = await browser.newContext()
    const page: Page = await context.newPage()
    await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
    await page.locator('#txt-username').fill('John Doe');
    await page.locator('#txt-password').fill('ThisIsNotAPassword');
    await page.locator('#btn-login').click();
    await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/#appointment');
    await browser.close()
})