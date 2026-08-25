import { test, expect } from '../fixtures';

test.describe('login page', () => {

    test('should log in with valid credentials', async ({ loginPage, qaToolsHomePage }) => {
        await loginPage.goto();

        await loginPage.login(process.env.EMAIL, process.env.PASSWORD);

        await expect(qaToolsHomePage.page).toHaveURL('/');

        await expect(qaToolsHomePage.userNameButton).toBeVisible();
        await expect(qaToolsHomePage.userNameButton).toHaveText(process.env.USER_NAME);
        await expect(qaToolsHomePage.logOutButton).toBeVisible();
        await expect(qaToolsHomePage.logOutButton).toBeEnabled();
        await expect(qaToolsHomePage.signInButton).not.toBeVisible();
    });
});