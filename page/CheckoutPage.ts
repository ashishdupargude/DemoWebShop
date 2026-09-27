import { Locator, Page } from '@playwright/test'

export class CheckoutPage {
    readonly page: Page
    readonly BillingContinue: Locator
    readonly InStorePickup: Locator
    readonly ShippingContinue: Locator
    readonly PaymentContinue: Locator
    readonly PaymentInfoContinue: Locator
    readonly ConfirmOrderContinue: Locator
    readonly ThanksContinue: Locator

    constructor(page: Page) {
        this.page = page

        this.BillingContinue = page
            .getByRole('listitem')
            .filter({
                has: page.getByRole('heading', { name: 'Billing address' })
            })
            .getByRole('button', { name: 'Continue', exact: true })

        this.InStorePickup = page.getByRole('checkbox', {
            name: 'In-Store Pickup',
            exact: true
        })

        this.ShippingContinue = page
            .getByRole('listitem')
            .filter({
                has: page.getByRole('heading', { name: 'Shipping address' })
            })
            .getByRole('button', { name: 'Continue', exact: true })

        this.PaymentContinue = page.locator(
            '.button-1.payment-method-next-step-button'
        )

        this.PaymentInfoContinue = page.locator(
            '.button-1.payment-info-next-step-button'
        )

        this.ConfirmOrderContinue = page.locator(
            '.button-1.confirm-order-next-step-button'
        )

        this.ThanksContinue = page.locator(
            '.button-2.order-completed-continue-button'
        )
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

    async PaymentContinueInfoButton() {
        await this.PaymentInfoContinue.click()
    }

    async ConfirmOrderButton() {
        await this.ConfirmOrderContinue.click()
    }

    async ThanksContinueButton() {
        await this.ThanksContinue.click()
    }
}