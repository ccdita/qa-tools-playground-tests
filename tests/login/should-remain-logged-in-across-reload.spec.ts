import { test, expect } from '../fixtures';

test.describe('QATools home page', () => {

    test('should remain logged in across reload', async ({ loginPage, qaToolsHomePage }) => {

        await loginPage.goto();

        await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
        
        await qaToolsHomePage.reloadPage();

        await expect(qaToolsHomePage.userNameButton).toBeVisible();
        await expect(qaToolsHomePage.userNameButton).toHaveText(process.env.USER_NAME);
        await expect(qaToolsHomePage.logOutButton).toBeVisible();
        await expect(qaToolsHomePage.logOutButton).toBeEnabled();
        await expect(qaToolsHomePage.signInButton).not.toBeVisible();
    });
});