import { Locator, Page } from '@playwright/test'

export class ProductPage {
    readonly page: Page
    readonly Bookstab: Locator
    readonly Selectbook: Locator
    readonly Addtocart: Locator
    readonly Selectshopingcart: Locator
    readonly CountryDropDowm: Locator
    readonly SelectCheckBox: Locator
    readonly CheckoutButton: Locator
    readonly BillingContinue: Locator
    readonly InStorePickup: Locator
    readonly ShippingContinue: Locator
    readonly PaymentContinue: Locator
    readonly PaymentInfoContinue: Locator
    readonly ConfirmOrderContinue: Locator
    readonly ThanksContinue: Locator






    constructor(page: Page) {
        this.page = page
        //this.Bookstab = page.getByRole('link',{name:'BOOKS'})
        this.Bookstab = page.getByRole('link', { name: 'Books', exact: true }).first()
        this.Selectbook = page.getByRole('link', { name: 'Computing and Internet', exact: true })
        this.Addtocart = page.locator('.button-1.add-to-cart-button')
        this.Selectshopingcart = page.locator('.ico-cart').nth(0)
        this.CountryDropDowm = page.getByLabel('Country')
        this.SelectCheckBox = page.locator('#termsofservice').nth(0)
        this.CheckoutButton = page.locator('.button-1.checkout-button')
        this.BillingContinue = page.getByRole('button', { name: 'Continue', exact: true })
        this.InStorePickup = page.getByRole('checkbox', { name: 'In-Store Pickup', exact: true })
        this.ShippingContinue = page.getByRole('button', { name: 'Continue', exact: true })
        this.PaymentContinue = page.locator('.button-1.payment-method-next-step-button')
        this.PaymentInfoContinue = page.locator('.button-1.payment-info-next-step-button')
        this.ConfirmOrderContinue = page.locator('.button-1.confirm-order-next-step-button')
        this.ThanksContinue = page.locator('.button-2.order-completed-continue-button')


        // this.ContinueButton = page
        //     .getByRole('listitem')
        //     .filter({ has: page.getByRole('heading', { name: 'Payment method' }) })
        //     .getByRole('button', { name: 'Continue', exact: true })




    }

    async clickonBookslink() {
        await this.Bookstab.click()
    }
    async clickonBook() {
        await this.Selectbook.click()

    }
    async clickAddToCart() {
        await this.Addtocart.click()

    }
    async clickOnShoppingCart() {
        await this.Selectshopingcart.click()

    }
    async selectCountry() {
        await this.CountryDropDowm.selectOption({ label: 'India' })
    }
    async clickOnCheckBox() {
        await this.SelectCheckBox.check()

    }
    async clickOnCheckOutButton() {
        await this.CheckoutButton.click()
    }
    async BillingContinueButton() {
        await this.BillingContinue.click()
    }
    async ClickInStorePickup() {
        await this.InStorePickup.check()

    }
    async ShippingContinueButtonNew() {
        await this.ShippingContinue.click()
    }
    async PaymentContinueButton() {
        await this.PaymentContinue.click()
    }
    async PaymentContinueInfoButton(){
        
        await this.PaymentInfoContinue.click()
    }
    async ConfirmOrderButton(){
        await this.ConfirmOrderContinue.click()

    }
    async ThanksContinueButton(){
        await this.ThanksContinue.click()
        
    }



}