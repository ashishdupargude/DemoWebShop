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
  - waiting for locator('.button-1 confirm-order-next-step-button')
  - operation was aborted: Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f46e2]:
  - generic [ref=f46e3]:
    - generic [ref=f46e4]:
      - link [ref=f46e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f46e7]
      - list [ref=f46e10]:
        - listitem [ref=f46e11]:
          - link "ashish.demotest2026@gmail.com" [ref=f46e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=f46e13]:
          - link "Log out" [ref=f46e14] [cursor=pointer]:
            - /url: /logout
        - listitem [ref=f46e15]:
          - link "Shopping cart (20)" [ref=f46e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f46e17]: Shopping cart
            - generic [ref=f46e18]: (20)
        - listitem [ref=f46e19]:
          - link "Wishlist (0)" [ref=f46e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f46e21]: Wishlist
            - generic [ref=f46e22]: (0)
      - generic [ref=f46e24]:
        - status [ref=f46e25]
        - textbox [ref=f46e26]: Search store
        - button "Search" [ref=f46e27] [cursor=pointer]
    - list [ref=f46e29]:
      - listitem [ref=f46e30]:
        - link "Books" [ref=f46e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f46e32]:
        - link "Computers" [ref=f46e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f46e34]:
        - link "Electronics" [ref=f46e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f46e36]:
        - link "Apparel & Shoes" [ref=f46e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f46e38]:
        - link "Digital downloads" [ref=f46e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f46e40]:
        - link "Jewelry" [ref=f46e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f46e42]:
        - link "Gift Cards" [ref=f46e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic [ref=f46e45]:
      - heading "Checkout" [level=1] [ref=f46e47]
      - list [ref=f46e49]:
        - listitem [ref=f46e50]:
          - generic [ref=f46e51] [cursor=pointer]:
            - generic [ref=f46e52]: "1"
            - heading "Billing address" [level=2] [ref=f46e53]
            - text: .
        - listitem [ref=f46e54]:
          - generic [ref=f46e55] [cursor=pointer]:
            - generic [ref=f46e56]: "2"
            - heading "Shipping address" [level=2] [ref=f46e57]
            - text: .
        - listitem [ref=f46e58]:
          - generic [ref=f46e59]:
            - generic [ref=f46e60]: "3"
            - heading "Shipping method" [level=2] [ref=f46e61]
            - text: .
        - listitem [ref=f46e62]:
          - generic [ref=f46e63] [cursor=pointer]:
            - generic [ref=f46e64]: "4"
            - heading "Payment method" [level=2] [ref=f46e65]
            - text: .
        - listitem [ref=f46e66]:
          - generic [ref=f46e67] [cursor=pointer]:
            - generic [ref=f46e68]: "5"
            - heading "Payment information" [level=2] [ref=f46e69]
            - text: .
        - listitem [ref=f46e70]:
          - generic [ref=f46e71]:
            - generic [ref=f46e72]: "6"
            - heading "Confirm order" [level=2] [ref=f46e73]
            - text: .
          - generic [ref=f46e74]:
            - generic [ref=f46e79]:
              - generic [ref=f46e80]:
                - list [ref=f46e81]:
                  - listitem [ref=f46e82]:
                    - strong [ref=f46e83]: Billing Address
                  - listitem [ref=f46e84]: Ashish Tester
                  - listitem [ref=f46e85]: "Email: ashish.demotest2026@gmail.com"
                  - listitem [ref=f46e86]: "Phone: 12121212"
                  - listitem [ref=f46e87]: "Fax:"
                  - listitem [ref=f46e88]: aaaeq qe
                  - listitem [ref=f46e89]: aaa q qeq
                  - listitem [ref=f46e90]: sdad , 1222
                  - listitem [ref=f46e91]: India
                  - listitem [ref=f46e92]:
                    - strong [ref=f46e93]: Payment Method
                  - listitem [ref=f46e94]: Cash On Delivery (COD)
                - list [ref=f46e95]:
                  - listitem [ref=f46e96]:
                    - strong [ref=f46e97]: Shipping Method
                  - listitem [ref=f46e98]: In-Store Pickup
              - generic [ref=f46e99]:
                - table [ref=f46e100]:
                  - rowgroup [ref=f46e107]:
                    - row [ref=f46e108]:
                      - columnheader [ref=f46e109]
                      - columnheader "Product(s)" [ref=f46e110]
                      - columnheader "Price" [ref=f46e111]
                      - columnheader "Qty." [ref=f46e112]
                      - columnheader "Total" [ref=f46e113]
                  - rowgroup [ref=f46e114]:
                    - row [ref=f46e115]:
                      - cell [ref=f46e116]:
                        - img "Picture of Computing and Internet" [ref=f46e117]
                      - cell [ref=f46e118]:
                        - link "Computing and Internet" [ref=f46e119] [cursor=pointer]:
                          - /url: /computing-and-internet
                      - cell "10.00" [ref=f46e120]
                      - cell "20" [ref=f46e121]
                      - cell "200.00" [ref=f46e122]
                - table [ref=f46e128]:
                  - rowgroup [ref=f46e129]:
                    - row [ref=f46e130]:
                      - cell "Sub-Total:" [ref=f46e131]
                      - cell "200.00" [ref=f46e132]
                    - row [ref=f46e134]:
                      - 'cell "Shipping: (In-Store Pickup)" [ref=f46e135]'
                      - cell "0.00" [ref=f46e136]
                    - row [ref=f46e138]:
                      - cell "Payment method additional fee:" [ref=f46e139]
                      - cell "7.00" [ref=f46e140]
                    - row [ref=f46e142]:
                      - cell "Tax:" [ref=f46e143]
                      - cell "0.00" [ref=f46e144]
                    - row [ref=f46e146]:
                      - cell "Total:" [ref=f46e147]
                      - cell [ref=f46e148]:
                        - strong [ref=f46e151]: "207.00"
            - generic [ref=f46e152]:
              - paragraph [ref=f46e153]:
                - link "Back" [ref=f46e154] [cursor=pointer]:
                  - /url: "#"
              - button "Confirm" [ref=f46e155] [cursor=pointer]
  - generic [ref=f46e156]:
    - generic [ref=f46e157]:
      - generic [ref=f46e158]:
        - heading "Information" [level=3] [ref=f46e159]
        - list [ref=f46e160]:
          - listitem [ref=f46e161]:
            - link "Sitemap" [ref=f46e162] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f46e163]:
            - link "Shipping & Returns" [ref=f46e164] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f46e165]:
            - link "Privacy Notice" [ref=f46e166] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f46e167]:
            - link "Conditions of Use" [ref=f46e168] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f46e169]:
            - link "About us" [ref=f46e170] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f46e171]:
            - link "Contact us" [ref=f46e172] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f46e173]:
        - heading "Customer service" [level=3] [ref=f46e174]
        - list [ref=f46e175]:
          - listitem [ref=f46e176]:
            - link "Search" [ref=f46e177] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f46e178]:
            - link "News" [ref=f46e179] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f46e180]:
            - link "Blog" [ref=f46e181] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f46e182]:
            - link "Recently viewed products" [ref=f46e183] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f46e184]:
            - link "Compare products list" [ref=f46e185] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f46e186]:
            - link "New products" [ref=f46e187] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f46e188]:
        - heading "My account" [level=3] [ref=f46e189]
        - list [ref=f46e190]:
          - listitem [ref=f46e191]:
            - link "My account" [ref=f46e192] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f46e193]:
            - link "Orders" [ref=f46e194] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f46e195]:
            - link "Addresses" [ref=f46e196] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f46e197]:
            - link "Shopping cart" [ref=f46e198] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f46e199]:
            - link "Wishlist" [ref=f46e200] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f46e201]:
        - heading "Follow us" [level=3] [ref=f46e202]
        - list [ref=f46e203]:
          - listitem [ref=f46e204]:
            - link "Facebook" [ref=f46e205] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f46e206]:
            - link "Twitter" [ref=f46e207] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f46e208]:
            - link "RSS" [ref=f46e209] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f46e210]:
            - link "YouTube" [ref=f46e211] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f46e212]:
            - link "Google+" [ref=f46e213] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f46e214]:
      - text: Powered by
      - link "nopCommerce" [ref=f46e215] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f46e216]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1   | import { Locator, Page } from '@playwright/test'
  2   | 
  3   | export class ProductPage {
  4   |     readonly page: Page
  5   |     readonly Bookstab: Locator
  6   |     readonly Selectbook: Locator
  7   |     readonly Addtocart: Locator
  8   |     readonly Selectshopingcart: Locator
  9   |     readonly CountryDropDowm: Locator
  10  |     readonly SelectCheckBox: Locator
  11  |     readonly CheckoutButton: Locator
  12  |     readonly BillingContinue: Locator
  13  |     readonly InStorePickup: Locator
  14  |     readonly ShippingContinue: Locator
  15  |     readonly PaymentContinue: Locator
  16  |     readonly PaymentInfoContinue: Locator
  17  |     readonly ConfirmOrderContinue: Locator
  18  | 
  19  | 
  20  | 
  21  | 
  22  | 
  23  | 
  24  |     constructor(page: Page) {
  25  |         this.page = page
  26  |         //this.Bookstab = page.getByRole('link',{name:'BOOKS'})
  27  |         this.Bookstab = page.getByRole('link', { name: 'Books', exact: true }).first()
  28  |         this.Selectbook = page.getByRole('link', { name: 'Computing and Internet', exact: true })
  29  |         this.Addtocart = page.locator('.button-1.add-to-cart-button')
  30  |         this.Selectshopingcart = page.locator('.ico-cart').nth(0)
  31  |         this.CountryDropDowm = page.getByLabel('Country')
  32  |         this.SelectCheckBox = page.locator('#termsofservice').nth(0)
  33  |         this.CheckoutButton = page.locator('.button-1.checkout-button')
  34  |         this.BillingContinue = page.getByRole('button', { name: 'Continue', exact: true })
  35  |         this.InStorePickup = page.getByRole('checkbox', { name: 'In-Store Pickup', exact: true })
  36  |         this.ShippingContinue = page.getByRole('button', { name: 'Continue', exact: true })
  37  |         this.PaymentContinue = page.locator('.button-1.payment-method-next-step-button')
  38  |         this.PaymentInfoContinue = page.locator('.button-1.payment-info-next-step-button')
  39  |         this.ConfirmOrderContinue = page.locator('.button-1.confirm-order-next-step-button')
  40  | 
  41  | 
  42  |         // this.ContinueButton = page
  43  |         //     .getByRole('listitem')
  44  |         //     .filter({ has: page.getByRole('heading', { name: 'Payment method' }) })
  45  |         //     .getByRole('button', { name: 'Continue', exact: true })
  46  | 
  47  | 
  48  | 
  49  | 
  50  |     }
  51  | 
  52  |     async clickonBookslink() {
  53  |         await this.Bookstab.click()
  54  |     }
  55  |     async clickonBook() {
  56  |         await this.Selectbook.click()
  57  | 
  58  |     }
  59  |     async clickAddToCart() {
  60  |         await this.Addtocart.click()
  61  | 
  62  |     }
  63  |     async clickOnShoppingCart() {
  64  |         await this.Selectshopingcart.click()
  65  | 
  66  |     }
  67  |     async selectCountry() {
  68  |         await this.CountryDropDowm.selectOption({ label: 'India' })
  69  |     }
  70  |     async clickOnCheckBox() {
  71  |         await this.SelectCheckBox.check()
  72  | 
  73  |     }
  74  |     async clickOnCheckOutButton() {
  75  |         await this.CheckoutButton.click()
  76  |     }
  77  |     async BillingContinueButton() {
  78  |         await this.BillingContinue.click()
  79  |     }
  80  |     async ClickInStorePickup() {
  81  |         await this.InStorePickup.check()
  82  | 
  83  |     }
  84  |     async ShippingContinueButtonNew() {
  85  |         await this.ShippingContinue.click()
  86  |     }
  87  |     async PaymentContinueButton() {
  88  |         await this.PaymentContinue.click()
  89  |     }
  90  |     async PaymentContinueInfoButton(){
  91  |         
  92  |         await this.PaymentInfoContinue.click()
  93  |     }
  94  |     async ConfirmOrderButton(){
> 95  |         await this.ConfirmOrderContinue.click()
      |                                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
  96  | 
  97  |     }
  98  | 
  99  | 
  100 | 
  101 | }
```