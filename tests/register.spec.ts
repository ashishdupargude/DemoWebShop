import { test } from '@playwright/test'
test('RegisterUser ', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/')
    await page.getByRole('link', { name: 'Register' }).click()
    await page.getByRole('radio', { name: 'Male', exact: true }).click()
    await page.getByRole('radio', { name: 'Female', exact: true }).click()
    //await page.getByText('Male').nth(0).click()
    // await page.getByRole('radio',{name:'Female'}).nth(1).click()
    //await page.getByText('Female').nth(0).click()
    //await page.getByText('Male', { exact: true }).click()
    //await page.getByText('Female', { exact: true }).click()
    await page.getByRole('textbox', { name: 'First name' }).fill('P')
    await page.getByRole('textbox', { name: 'Last name' }).fill('P')
    await page.getByRole('textbox', { name: 'Email' }).fill('pp@gmail.com')
    await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Peter@08')
    await page.getByRole('textbox', { name: 'Confirm password:', exact: true }).fill('Peter@08')
    await page.getByRole('button', { name: 'Register' }).click()
    await page.pause()

})


