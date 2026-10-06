import { test as setup } from '@playwright/test'

import { expect, test } from '@playwright/test'

import { LoginPage } from '../page/LoginPage'
import { loginData } from '../data/login-data'

test.use({ storageState: undefined })
setup('authenticate', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/')

    const loginPage = new LoginPage(page)

    await loginPage.clickloginLink()
    await loginPage.enterEmail(loginData.email)
    await loginPage.enterPassword(loginData.password)
    await loginPage.selectRemeberMe()
    await loginPage.clickOnLoginButton()

    await page.context().storageState({
        path: 'auth/auth.json'
    })
})