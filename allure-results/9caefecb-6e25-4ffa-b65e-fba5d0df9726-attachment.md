# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product.spec.ts >> Add book to cart
- Location: tests\product.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('listitem').filter({ has: getByRole('heading', { name: 'Payment method' }) }).getByRole('button', { name: 'Continue', exact: true })
  - operation was aborted: Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f22e2]:
  - generic [ref=f22e3]:
    - generic [ref=f22e4]:
      - link [ref=f22e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f22e7]
      - list [ref=f22e10]:
        - listitem [ref=f22e11]:
          - link "ashish.demotest2026@gmail.com" [ref=f22e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=f22e13]:
          - link "Log out" [ref=f22e14] [cursor=pointer]:
            - /url: /logout
        - listitem [ref=f22e15]:
          - link "Shopping cart (6)" [ref=f22e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f22e17]: Shopping cart
            - generic [ref=f22e18]: (6)
        - listitem [ref=f22e19]:
          - link "Wishlist (0)" [ref=f22e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f22e21]: Wishlist
            - generic [ref=f22e22]: (0)
      - generic [ref=f22e24]:
        - status [ref=f22e25]
        - textbox [ref=f22e26]: Search store
        - button "Search" [ref=f22e27] [cursor=pointer]
    - list [ref=f22e29]:
      - listitem [ref=f22e30]:
        - link "Books" [ref=f22e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f22e32]:
        - link "Computers" [ref=f22e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f22e34]:
        - link "Electronics" [ref=f22e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f22e36]:
        - link "Apparel & Shoes" [ref=f22e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f22e38]:
        - link "Digital downloads" [ref=f22e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f22e40]:
        - link "Jewelry" [ref=f22e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f22e42]:
        - link "Gift Cards" [ref=f22e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic [ref=f22e45]:
      - heading "Checkout" [level=1] [ref=f22e47]
      - list [ref=f22e49]:
        - listitem [ref=f22e50]:
          - generic [ref=f22e51] [cursor=pointer]:
            - generic [ref=f22e52]: "1"
            - heading "Billing address" [level=2] [ref=f22e53]
            - text: .
        - listitem [ref=f22e54]:
          - generic [ref=f22e55]:
            - generic [ref=f22e56]: "2"
            - heading "Shipping address" [level=2] [ref=f22e57]
            - text: .
          - generic [ref=f22e58]:
            - generic [ref=f22e62]:
              - paragraph [ref=f22e63]:
                - checkbox "In-Store Pickup" [checked] [active] [ref=f22e64]
                - text: In-Store Pickup
              - paragraph [ref=f22e65]: Pick up your items at the store (put your store address here)
            - generic [ref=f22e66]:
              - paragraph [ref=f22e67]:
                - link "Back" [ref=f22e68] [cursor=pointer]:
                  - /url: "#"
              - button "Continue" [ref=f22e69] [cursor=pointer]
        - listitem [ref=f22e70]:
          - generic [ref=f22e71]:
            - generic [ref=f22e72]: "3"
            - heading "Shipping method" [level=2] [ref=f22e73]
            - text: .
        - listitem [ref=f22e74]:
          - generic [ref=f22e75]:
            - generic [ref=f22e76]: "4"
            - heading "Payment method" [level=2] [ref=f22e77]
            - text: .
        - listitem [ref=f22e78]:
          - generic [ref=f22e79]:
            - generic [ref=f22e80]: "5"
            - heading "Payment information" [level=2] [ref=f22e81]
            - text: .
        - listitem [ref=f22e82]:
          - generic [ref=f22e83]:
            - generic [ref=f22e84]: "6"
            - heading "Confirm order" [level=2] [ref=f22e85]
            - text: .
  - generic [ref=f22e86]:
    - generic [ref=f22e87]:
      - generic [ref=f22e88]:
        - heading "Information" [level=3] [ref=f22e89]
        - list [ref=f22e90]:
          - listitem [ref=f22e91]:
            - link "Sitemap" [ref=f22e92] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f22e93]:
            - link "Shipping & Returns" [ref=f22e94] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f22e95]:
            - link "Privacy Notice" [ref=f22e96] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f22e97]:
            - link "Conditions of Use" [ref=f22e98] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f22e99]:
            - link "About us" [ref=f22e100] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f22e101]:
            - link "Contact us" [ref=f22e102] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f22e103]:
        - heading "Customer service" [level=3] [ref=f22e104]
        - list [ref=f22e105]:
          - listitem [ref=f22e106]:
            - link "Search" [ref=f22e107] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f22e108]:
            - link "News" [ref=f22e109] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f22e110]:
            - link "Blog" [ref=f22e111] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f22e112]:
            - link "Recently viewed products" [ref=f22e113] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f22e114]:
            - link "Compare products list" [ref=f22e115] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f22e116]:
            - link "New products" [ref=f22e117] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f22e118]:
        - heading "My account" [level=3] [ref=f22e119]
        - list [ref=f22e120]:
          - listitem [ref=f22e121]:
            - link "My account" [ref=f22e122] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f22e123]:
            - link "Orders" [ref=f22e124] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f22e125]:
            - link "Addresses" [ref=f22e126] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f22e127]:
            - link "Shopping cart" [ref=f22e128] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f22e129]:
            - link "Wishlist" [ref=f22e130] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f22e131]:
        - heading "Follow us" [level=3] [ref=f22e132]
        - list [ref=f22e133]:
          - listitem [ref=f22e134]:
            - link "Facebook" [ref=f22e135] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f22e136]:
            - link "Twitter" [ref=f22e137] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f22e138]:
            - link "RSS" [ref=f22e139] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f22e140]:
            - link "YouTube" [ref=f22e141] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f22e142]:
            - link "Google+" [ref=f22e143] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f22e144]:
      - text: Powered by
      - link "nopCommerce" [ref=f22e145] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f22e146]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test'
  2  | 
  3  | export class ProductPage {
  4  |     readonly page: Page
  5  |     readonly Bookstab: Locator
  6  |     readonly Selectbook: Locator
  7  |     readonly Addtocart: Locator
  8  |     readonly Selectshopingcart: Locator
  9  |     readonly CountryDropDowm: Locator
  10 |     readonly SelectCheckBox: Locator
  11 |     readonly CheckoutButton: Locator
  12 |     readonly Continue: Locator
  13 |     readonly InStorePickup: Locator
  14 |     readonly ContinueButton: Locator
  15 | 
  16 | 
  17 | 
  18 | 
  19 | 
  20 | 
  21 |     constructor(page: Page) {
  22 |         this.page = page
  23 |         //this.Bookstab = page.getByRole('link',{name:'BOOKS'})
  24 |         this.Bookstab = page.getByRole('link', { name: 'Books', exact: true }).first()
  25 |         this.Selectbook = page.getByRole('link', { name: 'Computing and Internet', exact: true })
  26 |         this.Addtocart = page.locator('.button-1.add-to-cart-button')
  27 |         this.Selectshopingcart = page.locator('.ico-cart').nth(0)
  28 |         this.CountryDropDowm = page.getByLabel('Country')
  29 |         this.SelectCheckBox = page.locator('#termsofservice').nth(0)
  30 |         this.CheckoutButton = page.locator('.button-1.checkout-button')
  31 |         this.Continue = page.getByRole('button', { name: 'Continue', exact: true })
  32 |         this.InStorePickup = page.getByRole('checkbox', { name: 'In-Store Pickup', exact: true })
  33 |        // this.ContinueButton = page.getByRole('button', { name: 'Continue', exact: true })
  34 | 
  35 |        this.ContinueButton = page
  36 |     .getByRole('listitem')
  37 |     .filter({ has: page.getByRole('heading', { name: 'Payment method' }) })
  38 |     .getByRole('button', { name: 'Continue', exact: true })
  39 | 
  40 | 
  41 | 
  42 | 
  43 |     }
  44 | 
  45 |     async clickonBookslink() {
  46 |         await this.Bookstab.click()
  47 |     }
  48 |     async clickonBook() {
  49 |         await this.Selectbook.click()
  50 | 
  51 |     }
  52 |     async clickAddToCart() {
  53 |         await this.Addtocart.click()
  54 | 
  55 |     }
  56 |     async clickOnShoppingCart() {
  57 |         await this.Selectshopingcart.click()
  58 | 
  59 |     }
  60 |     async selectCountry() {
  61 |         await this.CountryDropDowm.selectOption({ label: 'India' })
  62 |     }
  63 |     async clickOnCheckBox() {
  64 |         await this.SelectCheckBox.check()
  65 | 
  66 |     }
  67 |     async clickOnCheckOutButton() {
  68 |         await this.CheckoutButton.click()
  69 |     }
  70 |     async clickOnContinue() {
  71 |         await this.Continue.click()
  72 |     }
  73 |     async ClickInStorePickup() {
  74 |         await this.InStorePickup.check()
  75 | 
  76 |     }
  77 |     // async ContinueButtonNew() {
  78 |     //     await this.ContinueButton.click()
  79 |     // }
  80 |     async ContinueButtonNew() {
> 81 |     await this.ContinueButton.click()
     |                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  82 | }
  83 | 
  84 | 
  85 | }
```