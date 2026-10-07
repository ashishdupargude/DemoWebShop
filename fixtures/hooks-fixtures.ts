import { test as base } from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { ProductPage } from '../page/ProductPage'
import { CheckoutPage } from '../page/CheckoutPage'
import { loginData } from '../data/login-data'

type Fixtures = {
    loginPage: LoginPage
    productPage: ProductPage
    checkoutPage: CheckoutPage
}

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)

        await page.goto('https://demowebshop.tricentis.com/')

        await loginPage.clickloginLink()
        await loginPage.enterEmail(loginData.email)
        await loginPage.enterPassword(loginData.password)
        await loginPage.selectRemeberMe()
        await loginPage.clickOnLoginButton()

        await use(loginPage)
    },

   productPage: async ({ page }, use) => {
    await use(new ProductPage(page))
},

    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page))
    },
})

export { expect } from '@playwright/test'