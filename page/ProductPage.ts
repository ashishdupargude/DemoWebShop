import{Locator,Page} from '@playwright/test'

export class ProductPage{
    readonly page: Page
    readonly Bookstab : Locator


    constructor(page:Page){
        this.page = page
        //this.Bookstab = page.getByRole('link',{name:'BOOKS'})
        this.Bookstab = page.getByRole('link', { name: 'Books', exact: true }).first()
    }

    async clickonBookslink(){
        await this.Bookstab.click()
    }
}