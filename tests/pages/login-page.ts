import { type Locator, type Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly loginHeading: Locator;
    readonly emailLabel: Locator;
    readonly emailInput: Locator;
    readonly passwordLabel: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly emailError: Locator;
    readonly passwordError: Locator;
    readonly authError: Locator;
    readonly navBar: Locator;
    readonly skipTourButton: Locator;

    /**
     * Constructs a LoginPage object
     * 
     * @param page object to use for the login page
     */
    constructor(page: Page) {
        this.page = page;
        this.loginHeading = page.getByRole('heading', { name: 'Login' });
        this.emailLabel = page.getByLabel('Email');
        this.emailInput = page.getByTestId('login-email');
        this.passwordLabel = page.getByLabel('Password');
        this.passwordInput = page.getByTestId('login-password');
        this.signInButton = page.getByTestId('login-submit');
        this.emailError = page.getByTestId('login-email-error');
        this.passwordError = page.getByTestId('login-password-error');
        this.authError = page.getByTestId('login-auth-error');
        this.navBar = page.getByTestId('navbar');
        this.skipTourButton = page.getByTestId('tour-skip');
    }

    /**
     * Navigates to the login page
     */
    async goto(): Promise<void> {
        await this.page.goto('/login');
        if (await this.skipTourButton.isVisible()) { await this.closeWelcomeModal(); }
    }

    /**
     * Enters the email and password into the login form
     * @param email to enter into the email input
     * @param password to enter into the password input
     */
    async enterCredentials(email: string, password: string): Promise<void> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
    }

    /**
     * Logs into the application with the given email and password
     * @param email to log in with
     * @param password to log in with
     */
    async login(email: string, password: string): Promise<void> {
        await this.enterCredentials(email, password);
        await this.signInButton.click();
        await this.page.waitForURL('/');
    }

    /**
     * Closes the Welcome modal by clicking the Skip tour button in the modal
     */
    async closeWelcomeModal(): Promise<void> {
        await this.skipTourButton.click();
    }
}
