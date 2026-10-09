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


import { expect, test } from '../fixtures/hooks-fixtures'
import { LoginPage } from '../page/LoginPage'
import { ProductPage } from '../page/ProductPage'
import { CheckoutPage } from '../page/CheckoutPage'
import { loginData } from '../data/login-data'
import { productData } from '../data/product-data'
//import { Fixtures } from '@playwright/test'

// test('@smoke Add book to cart', async ({ page }) => {

//    // await page.goto('https://demowebshop.tricentis.com/')

//    await page.goto('/')
//     // Login
//     // const loginPage = new LoginPage(page)

//     // await loginPage.clickloginLink()

//     // // await loginPage.enterEmail('ashish.demotest2026@gmail.com')
//     // // await loginPage.enterPassword('DemoTest@2026')

//     // await loginPage.enterEmail(loginData.email)
//     // await loginPage.enterPassword(loginData.password)


//     // await loginPage.selectRemeberMe()
//     // await loginPage.clickOnLoginButton()


//     // Product
//     const productPage = new ProductPage(page)

//     await productPage.clickonBookslink()
//     await productPage.clickonBook()
//     await productPage.clickAddToCart()
//     await productPage.clickOnShoppingCart()
//     await productPage.selectCountry()
//     await productPage.clickOnCheckBox()
//     await productPage.clickOnCheckOutButton()

//     // Checkout page validation
//     await expect(
//         page.getByRole('heading', { name: 'Checkout' })
//     ).toBeVisible()

//     await expect(page).toHaveURL(/onepagecheckout/)

//     // Checkout
//     const checkoutPage = new CheckoutPage(page)

//     await checkoutPage.BillingContinueButton()
//     await checkoutPage.ClickInStorePickup()
//     await checkoutPage.ShippingContinueButtonNew()
//     await checkoutPage.PaymentContinueButton()
//     await checkoutPage.PaymentContinueInfoButton()
//     await checkoutPage.ConfirmOrderButton()
//     await checkoutPage.ThanksContinueButton()

//     // Homepage validation
//     await expect(page).toHaveURL(/demowebshop\.tricentis\.com\/?$/)
// })


// test(' @regression Add jewelry to cart', async ({ page }) => {


//     // Jewelry flow
//   //  await page.goto('https://demowebshop.tricentis.com/')
//   await page.goto('/')

//     // Login
//     const loginPage = new LoginPage(page)

//     await loginPage.clickloginLink()

//     // await loginPage.enterEmail('ashish.demotest2026@gmail.com')
//     // await loginPage.enterPassword('DemoTest@2026')

//     await loginPage.enterEmail(loginData.email)
//     await loginPage.enterPassword(loginData.password)


//     await loginPage.selectRemeberMe()
//     await loginPage.clickOnLoginButton()

//     // Product
//     const productPage = new ProductPage(page)

//     await productPage.clickonJewelrylink()
//     await productPage.clickonJAddtoCart()
//     await productPage.clickOnShoppingCart()
//     await productPage.clickOnCheckBox()
//     await productPage.clickOnCheckOutButton()


//     // Checkout
//     const checkoutPage = new CheckoutPage(page)

//     await checkoutPage.BillingContinueButton()
//     await checkoutPage.ClickInStorePickup()
//     await checkoutPage.ShippingContinueButtonNew()
//     await checkoutPage.PaymentContinueButton()
//     await checkoutPage.PaymentContinueInfoButton()
//     await checkoutPage.ConfirmOrderButton()
//     await checkoutPage.ThanksContinueButton()


// })


test('@smoke Add book to cart', async ({ productPage, checkoutPage }) => {
    await productPage.clickonBookslink()
    await productPage.clickonBook()
    await productPage.clickAddToCart()
    await productPage.clickOnShoppingCart()

    // Verify the book is in the cart before checkout
    // Verify the book in the shopping cart table
    await expect(
        productPage.page.locator('.cart')
            .getByRole('link', {
                name: 'Computing and Internet',
                exact: true
            })
    ).toBeVisible()
    await productPage.selectCountry()
    await productPage.clickOnCheckBox()
    await productPage.clickOnCheckOutButton()

    await expect(
        productPage.page.getByRole('heading', { name: 'Checkout' })
    ).toBeVisible()

    await expect(productPage.page).toHaveURL(/onepagecheckout/)

    await checkoutPage.BillingContinueButton()
    await checkoutPage.ClickInStorePickup()
    await checkoutPage.ShippingContinueButtonNew()
    await checkoutPage.PaymentContinueButton()
    await checkoutPage.PaymentContinueInfoButton()
    await checkoutPage.ConfirmOrderButton()
    await checkoutPage.ThanksContinueButton()
    await expect(
        productPage.page.getByText('Your order has been successfully processed!')
    ).toBeVisible()
})


// test('Add computers to cart', async ({ page }) => {


//     // Jewelry flow
//     await page.goto('https://demowebshop.tricentis.com/')

//     // Login
//     const loginPage = new LoginPage(page)

//     await loginPage.clickloginLink()


//     const productPage = new ProductPage(page)
//     const checkoutPage = new CheckoutPage(page)


//     await productPage.clickonComputers()

//     await productPage.clickonDesktopTab()
//     await productPage.clickOnSimpleComputer()
//     await productPage.selectProcessor()

//     await productPage.clickAddToCart()

//     await productPage.clickOnCheckOutButton()

//     // Checkout
//     // const checkoutPage = new CheckoutPage(page)

//     await checkoutPage.BillingContinueButton()
//     await checkoutPage.ClickInStorePickup()
//     await checkoutPage.ShippingContinueButtonNew()
//     await checkoutPage.PaymentContinueButton()
//     await checkoutPage.PaymentContinueInfoButton()
//     await checkoutPage.ConfirmOrderButton()
//     await checkoutPage.ThanksContinueButton()

// })


test('@smoke Add computers to cart', async ({ productPage, checkoutPage }) => {

    await productPage.clickonComputers()
    await productPage.clickonDesktopTab()
    await productPage.clickOnSimpleComputer()
    //await productPage.selectProcessor()
    await productPage.selectProcessor(productData.processor)

    await productPage.clickAddToCart()


    await productPage.clickOnShoppingCart()
    // VERIFY: product was added to cart
    // expect(await productPage.getShoppingCartCount()).toContain('1')
    await productPage.clickOnCheckBox()
    await productPage.clickOnCheckOutButton()

    await checkoutPage.BillingContinueButton()
    await checkoutPage.ClickInStorePickup()
    await checkoutPage.ShippingContinueButtonNew()
    await checkoutPage.PaymentContinueButton()
    await checkoutPage.PaymentContinueInfoButton()
    await checkoutPage.ConfirmOrderButton()
    await checkoutPage.ThanksContinueButton()

})

test('@regression Add jewelry to cart', async ({ productPage, checkoutPage }) => {

    await productPage.clickonJewelrylink()
    await productPage.clickonJAddtoCart()
    await productPage.clickOnShoppingCart()
    await productPage.clickOnCheckBox()
    await productPage.clickOnCheckOutButton()

    await checkoutPage.BillingContinueButton()
    await checkoutPage.ClickInStorePickup()
    await checkoutPage.ShippingContinueButtonNew()
    await checkoutPage.PaymentContinueButton()
    await checkoutPage.PaymentContinueInfoButton()
    await checkoutPage.ConfirmOrderButton()
    await checkoutPage.ThanksContinueButton()
})