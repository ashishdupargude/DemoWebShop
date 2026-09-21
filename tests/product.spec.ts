import {expect,test} from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { ProductPage } from '../page/ProductPage'

test('Add book to cart', async ({page}) =>{
await page.goto('https://demowebshop.tricentis.com/')

 // Login
    const loginPage = new LoginPage(page)
    await loginPage.clickloginLink()
    await loginPage.enterEmail('ashish.demotest2026@gmail.com')
    await loginPage.enterPassword('DemoTest@2026')
    await loginPage.selectRemeberMe()
    await loginPage.clickOnLoginButton()
    //Product

    const productPage = new ProductPage(page)
    await productPage.clickonBookslink()
    

})