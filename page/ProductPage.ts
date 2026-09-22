import { Locator, Page } from '@playwright/test'

export class ProductPage {
    readonly page: Page
    readonly Bookstab: Locator
    readonly Selectbook: Locator
    readonly Addtocart: Locator
    readonly Selectshopingcart :Locator





    constructor(page: Page) {
        this.page = page
        //this.Bookstab = page.getByRole('link',{name:'BOOKS'})
        this.Bookstab = page.getByRole('link', { name: 'Books', exact: true }).first()
        this.Selectbook = page.getByRole('link', { name: 'Computing and Internet', exact: true })
        this.Addtocart = page.locator('.button-1.add-to-cart-button')
        this.Selectshopingcart = page.locator('.ico-cart').nth(0)

    }

    async clickonBookslink() {
        await this.Bookstab.click()
    }
    async clickonBook() {
        await this.Selectbook.click()

    }
    async clickAddToCart(){
        await this.Addtocart.click()

    }
    async clickOnShoppingCart(){
        await this.Selectshopingcart.click()
        
    }
}