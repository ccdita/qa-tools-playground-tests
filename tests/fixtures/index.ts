import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { ShopHomePage } from '../pages/shop-home-page';
import { QAToolsHomePage } from '../pages/qa-tools-home-page';

type Fixtures = {
    loginPage: LoginPage;
    shopHomePage: ShopHomePage;
    qaToolsHomePage: QAToolsHomePage;
}

export const test = base.extend<Fixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    shopHomePage: async ({ page }, use) => {
        await use(new ShopHomePage(page));
    },

    qaToolsHomePage: async ({ page }, use) => {
        await use(new QAToolsHomePage(page));
    },
});

export { expect };