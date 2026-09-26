# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product.spec.ts >> Add book to cart
- Location: tests\product.spec.ts:5:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://demowebshop.tricentis.com/", waiting until "load"

```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test'
  2  | import { LoginPage } from '../page/LoginPage'
  3  | import { ProductPage } from '../page/ProductPage'
  4  | 
  5  | test('Add book to cart', async ({ page }) => {
> 6  |     await page.goto('https://demowebshop.tricentis.com/')
     |                ^ Error: page.goto: Target page, context or browser has been closed
  7  | 
  8  |     // Login
  9  |     const loginPage = new LoginPage(page)
  10 |     await loginPage.clickloginLink()
  11 |     await loginPage.enterEmail('ashish.demotest2026@gmail.com')
  12 |     await loginPage.enterPassword('DemoTest@2026')
  13 |     await loginPage.selectRemeberMe()
  14 |     await loginPage.clickOnLoginButton()
  15 |     //Product
  16 | 
  17 |     const productPage = new ProductPage(page)
  18 |     await productPage.clickonBookslink()
  19 |     await productPage.clickonBook()
  20 |     await productPage.clickAddToCart()
  21 |     await productPage.clickOnShoppingCart()
  22 |     await productPage.selectCountry()
  23 |     await productPage.clickOnCheckBox()
  24 |     await productPage.clickOnCheckOutButton()
  25 |     await expect(page.getByRole('heading', { name: 'Checkout' })).toBeVisible()
  26 |     await expect(page).toHaveURL(/onepagecheckout/)
  27 | 
  28 |     //CheckOutpage
  29 |     await productPage.BillingContinueButton()
  30 |     await productPage.ClickInStorePickup()
  31 |     await productPage.ShippingContinueButtonNew()
  32 |     await productPage.PaymentContinueButton()
  33 |     await productPage.PaymentContinueInfoButton()
  34 |     await productPage.ConfirmOrderButton()
  35 |     await productPage.ThanksContinueButton()
  36 | 
  37 | 
  38 | 
  39 | })
```