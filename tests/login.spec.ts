
import { expect,test } from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { loginData } from '../data/login-data'
test.use({
    storageState: {
        cookies: [],
        origins: []
    }
})


test('loginPage ', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/')
    const loginPage = new LoginPage(page)
    await loginPage.clickloginLink()

    //await loginPage.enterEmail('ashish.demotest2026@gmail.com')
    //await loginPage.enterPassword('DemoTest@2026')

    await loginPage.enterEmail(loginData.email)
    await loginPage.enterPassword(loginData.password)
    

    await loginPage.selectRemeberMe()
    await loginPage.clickOnLoginButton()

    await expect(page.getByRole('link',{name:'Log out'})).toBeVisible()
    
})
