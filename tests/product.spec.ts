// import { expect, test } from '@playwright/test'
// import { LoginPage } from '../page/LoginPage'
// import { ProductPage } from '../page/ProductPage'

// test('Add book to cart', async ({ page }) => {
//     await page.goto('https://demowebshop.tricentis.com/')

//     // Login
//     const loginPage = new LoginPage(page)
//     await loginPage.clickloginLink()
//     await loginPage.enterEmail('ashish.demotest2026@gmail.com')
//     await loginPage.enterPassword('DemoTest@2026')
//     await loginPage.selectRemeberMe()
//     await loginPage.clickOnLoginButton()
//     //Product

//     const productPage = new ProductPage(page)
//     await productPage.clickonBookslink()
//     await productPage.clickonBook()
//     await productPage.clickAddToCart()
//     await productPage.clickOnShoppingCart()
//     await productPage.selectCountry()
//     await productPage.clickOnCheckBox()
//     await productPage.clickOnCheckOutButton()
//     await expect(page.getByRole('heading', { name: 'Checkout' })).toBeVisible()
//     await expect(page).toHaveURL(/onepagecheckout/)

//     //CheckOutpage
//     await productPage.BillingContinueButton()
//     await productPage.ClickInStorePickup()
//     await productPage.ShippingContinueButtonNew()
//     await productPage.PaymentContinueButton()
//     await productPage.PaymentContinueInfoButton()
//     await productPage.ConfirmOrderButton()
//     await productPage.ThanksContinueButton()
//     await expect(page).toHaveURL('https://demowebshop.tricentis.com/')



// })


import { expect, test } from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { ProductPage } from '../page/ProductPage'
import { CheckoutPage } from '../page/CheckoutPage'

test('Add book to cart', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/')

    // Login
    const loginPage = new LoginPage(page)

    await loginPage.clickloginLink()
    await loginPage.enterEmail('ashish.demotest2026@gmail.com')
    await loginPage.enterPassword('DemoTest@2026')
    await loginPage.selectRemeberMe()
    await loginPage.clickOnLoginButton()

    // Product
    const productPage = new ProductPage(page)

    await productPage.clickonBookslink()
    await productPage.clickonBook()
    await productPage.clickAddToCart()
    await productPage.clickOnShoppingCart()
    await productPage.selectCountry()
    await productPage.clickOnCheckBox()
    await productPage.clickOnCheckOutButton()

    // Checkout page validation
    await expect(
        page.getByRole('heading', { name: 'Checkout' })
    ).toBeVisible()

    await expect(page).toHaveURL(/onepagecheckout/)

    // Checkout
    const checkoutPage = new CheckoutPage(page)

    await checkoutPage.BillingContinueButton()
    await checkoutPage.ClickInStorePickup()
    await checkoutPage.ShippingContinueButtonNew()
    await checkoutPage.PaymentContinueButton()
    await checkoutPage.PaymentContinueInfoButton()
    await checkoutPage.ConfirmOrderButton()
    await checkoutPage.ThanksContinueButton()

    // Homepage validation
    await expect(page).toHaveURL(/demowebshop\.tricentis\.com\/?$/)
})