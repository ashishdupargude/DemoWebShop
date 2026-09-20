import { Locator, Page } from '@playwright/test'

export class LoginPage {

    readonly page: Page
    readonly loginlink: Locator
    readonly email: Locator
    readonly password: Locator
    readonly rememberMe: Locator
    readonly loginButton: Locator




    constructor(page: Page) {

        this.page = page
        this.loginlink = page.getByRole('link', { name: 'Log in' })
        this.email = page.getByRole('textbox', { name: 'Email' })
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.rememberMe = page.getByRole('checkbox', { name: 'Remember Me?' })
        this.loginButton = page.getByRole('button', { name: 'Log in' })


    }

    async clickloginLink() {
        await this.loginlink.click()

    }
    async enterEmail(email: string) {
        await this.email.fill(email)

    }
    async enterPassword(password: string) {

        await this.password.fill(password)
    }

    async selectRemeberMe() {
        await this.rememberMe.check()

    }
    async clickOnLoginButton() {
        await this.loginButton.click()

    }

}