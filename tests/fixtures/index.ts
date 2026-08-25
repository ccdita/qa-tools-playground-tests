import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { ShopHomePage } from '../pages/shop-home-page';

type Fixtures = {
    loginPage: LoginPage;
    shopHomePage: ShopHomePage;
}

export const test = base.extend<Fixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    shopHomePage: async ({ page }, use) => {
        await use(new ShopHomePage(page));
    },
});

export { expect };