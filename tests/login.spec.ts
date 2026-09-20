
import { test } from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
test('loginPage ', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/')
    const loginPage = new LoginPage(page)
    await loginPage.clickloginLink()
    await loginPage.enterEmail('pp@gmail.com')
    await loginPage.enterPassword('Peter@08')
    await loginPage.selectRemeberMe()
    await loginPage.clickOnLoginButton()

})
