/* eslint-disable indent */

const { Builder, By, Key, until } = require('selenium-webdriver')
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const example = async () => {
    // launch the browser
    const driver = await new Builder().forBrowser('firefox').build()

    // add endpoint to test
    const hostname = process.env.HOSTNAME
    await driver.get(`${hostname}/sign-in`)

    // wait until the element is completely loaded
    const waitFind = (locator) => {
        return driver.findElement(async () => {
            await driver.wait(until.elementLocated(locator))
            return driver.findElement(locator)
        })
    }

    // add test

    // key enter will submit the form, alternatively button click can also work

    // login
    await driver.findElement(By.name('email')).sendKeys(process.env.EMAIL)
    await driver.findElement(By.name('password')).sendKeys(process.env.PASSWORD, Key.RETURN)

    // list view
    // await waitFind(By.xpath('/html/body/div[2]/div[2]/div/div/ul/li/div/div[1]/ul')).click()

    // opens property
    await waitFind(By.xpath('/html/body/div[2]/div[2]/div/div/ul/li/div/ul/li[1]/div[1]/p[1]/a')).click()

    // opens units list
    await waitFind(By.xpath('/html/body/div[2]/div[2]/article/div[1]/div[2]/div[1]/div/ul[2]/li[1]')).click()

    // opens unit
    await waitFind(By.xpath('/html/body/div[2]/div[4]/div/table/tbody/tr[1]/td[1]/div[2]/a')).click()

    // people section
    await waitFind(By.xpath('//*[@id="region-header"]/header/div/nav/ul/li[3]')).click()

    await waitFind(By.xpath('/html/body/div[2]/div[2]/div/div/div/a')).click()

    await waitFind(By.xpath('/html/body/div[2]/div[2]/form/div[2]/div[2]/div')).click()

    await waitFind(By.xpath('/html/body/div[2]/div[2]/form/div[2]/div[2]/div/span[2]/span/span[2]/ul/li[1]')).click()

    await waitFind(By.xpath('/html/body/div[2]/div[2]/form/div[2]/div[4]/div[3]/input')).sendKeys('Mahima')

    await waitFind(By.xpath('/html/body/div[2]/div[2]/form/div[2]/div[4]/div[6]/input')).sendKeys(`mahima${Date.now()}@test.com`, Key.RETURN)

    // // home section
    await waitFind(By.xpath('/html/body/div[2]/div[1]/header/div/nav/ul/li[1]/a')).click()

    // // performance section
    // await waitFind(By.xpath('//*[@id="region-header"]/header/div/nav/ul/li[5]')).click()

    // // settings section
    // await waitFind(By.xpath('//*[@id="region-header"]/header/div/ul/li[3]')).click().then(async () => {
    //     // settings -> password
    //     // await waitFind(By.xpath('/html/body/div[2]/div[2]/div/div/ul/li[2]')).click()

    //     // // settings -> accounting
    //     // await waitFind(By.xpath('//*[@id="region-content"]/div/div/ul/li[3]')).click()

    //     // // settings -> plan
    //     // await waitFind(By.xpath('//*[@id="region-content"]/div/div/ul/li[4]')).click()

    //     // // settings -> pendopay
    //     // await waitFind(By.xpath('//*[@id="region-content"]/div/div/ul/li[5]')).click()

    //     // // settings -> users
    //     // await waitFind(By.xpath('//*[@id="region-content"]/div/div/ul/li[6]')).click()
    // })

    // sign out
    // await waitFind(By.xpath('/html/body/div[2]/div[1]/header/div/ul/li[4]')).click()

    // // close the browser
    // await driver.quit()
}

example()
