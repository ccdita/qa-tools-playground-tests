import { test, expect } from '../fixtures';

test.describe('Shop home page', () => {

    test('should navigate to login page', async ({ shopHomePage, loginPage }) => {

        await shopHomePage.goto();

        if (await shopHomePage.skipTourButton.isVisible()) { await shopHomePage.closeWelcomeModal(); }

        await expect(shopHomePage.page).toHaveURL(/\/products$/);

        await expect(shopHomePage.navBar).toBeVisible();
        await expect(shopHomePage.signInButton).toBeVisible();
        await shopHomePage.clickSignInButton();
        await expect(loginPage.page).toHaveURL(/\/login$/);
    })
});