import { test, expect } from '../fixtures';

test.describe('Login page', () => {

    test('should display login page', async ({ loginPage }) => {

        await loginPage.goto();

        await expect(loginPage.page).toHaveURL(/\/login$/);

        await expect(loginPage.loginHeading).toBeVisible();
        await expect(loginPage.emailLabel).toBeVisible();
        await expect(loginPage.emailInput).toBeVisible();
        await expect(loginPage.passwordLabel).toBeVisible();
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.signInButton).toBeVisible();
        await expect(loginPage.signInButton).toBeEnabled();
    });
});