import { type Locator, type Page } from '@playwright/test';

export class ShopHomePage {

    readonly page: Page;
    readonly navBar: Locator;
    readonly signInButton: Locator;
    readonly userNameButton: Locator;
    readonly logOutButton: Locator;
    readonly skipTourButton: Locator;

    /**
     * Constructs a ShopHomePage object
     * 
     * @param page object to use for the Shop home page
     */
    constructor(page: Page) {
        this.page = page;
        this.navBar = page.getByTestId('navbar');
        this.signInButton = page.getByTestId('nav-login');
        this.userNameButton = page.getByTestId('nav-profile');
        this.logOutButton = page.getByTestId('logout-btn');
        this.skipTourButton = page.getByTestId('tour-skip');
    }

    /**
     * Navigates to the Shop home page
     */
    async goto(): Promise<void> {
        await this.page.goto('/products');
        if (await this.skipTourButton.isVisible()) { await this.closeWelcomeModal(); }
    }

    /**
     * Clicks the Sign in button to navigate to the login page
     */
    async clickSignInButton(): Promise<void> {
        await this.signInButton.click();
        await this.page.waitForURL(/\/login$/);
    }

    /**
     * Clicks the Log out button to log out of the application
     */
    async logOut(): Promise<void> {
        await this.logOutButton.click();
    }

    /**
     * Closes the Welcome modal by clicking the Skip tour button in the modal
     */
    async closeWelcomeModal(): Promise<void> {
        await this.skipTourButton.click();
    }
}