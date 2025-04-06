import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginpage.js';

test('User should be able to login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate('https://practice.expandtesting.com/login');
    await loginPage.login('practice', 'SuperSecretPassword!');

    // Assertion
    //await expect(page).toHaveURL('https://practice.expandtesting.com/login');
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle('Secure Page page for Automation Testing Practice');
    
});
