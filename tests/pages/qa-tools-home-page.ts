import { type Locator, type Page } from '@playwright/test';

export class QAToolsHomePage {

    readonly page;
    readonly userNameButton: Locator;
    readonly logOutButton: Locator;
    readonly signInButton: Locator;

    /**
     * Constructs a QAToolsHomePage object
     * 
     * @param page object to use for the QATools home page
     */
    constructor(page: Page) {
        this.page = page;
        this.userNameButton = page.getByTestId('nav-profile');
        this.logOutButton = page.getByTestId('logout-btn');
        this.signInButton = page.getByTestId('nav-login');
    }

    /**
     * Reloads the page
     */
    async reloadPage(): Promise<void> {
        await this.page.reload();
    }
}