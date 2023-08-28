/* eslint-disable indent */

const { Builder, By, Key } = require('selenium-webdriver')

const example = async () => {
    // launch the browser
    const driver = await new Builder().forBrowser('firefox').build()

    // add endpoint to test
    await driver.get('http://pendo.development')

    // add test

    // key enter will submit the form, alternatively button click can also work
    await driver.findElement(By.name('email')).sendKeys('mahima.gajiwala@growexx.com')
    await driver.findElement(By.name('password')).sendKeys('Test@123', Key.RETURN)

    // wait until page is fully loaded
    await driver.manage().setTimeouts({
        implicit: 5000,
        pageLoad:
            5000,
        script: 5000
    })

    // await driver.findElement(By.xpath('/html/body/div[2]/div[2]/div/div/ul/li/div/div/div/a')).click()

    // await driver.findElement(By.xpath('//*[@id="region-wizard-content"]/div[2]/span/span[1]/span/span[2]')).click()

    // lease section
    await driver.findElement(By.xpath('/html/body/div[2]/div[2]/div/ul/li[2]')).click()

    // units section
    await driver.findElement(By.xpath('/html/body/div[2]/div[2]/div/div/ul/li[3]')).click()

    await driver.manage().setTimeouts({
        implicit: 5000,
        pageLoad:
            5000,
        script: 5000
    })

    // people section
    await driver.findElement(By.xpath('//*[@id="region-header"]/header/div/nav/ul/li[3]')).click()

    await driver.manage().setTimeouts({
        implicit: 5000,
        pageLoad:
            5000,
        script: 5000
    })

    // payments section
    await driver.findElement(By.xpath('//*[@id="region-header"]/header/div/nav/ul/li[4]')).click()

    await driver.manage().setTimeouts({
        implicit: 5000,
        pageLoad:
            5000,
        script: 5000
    })
    // performance section
    // await driver.findElement(By.xpath('//*[@id="region-header"]/header/div/nav/ul/li[5]')).click()

    await driver.manage().setTimeouts({
        implicit: 5000,
        pageLoad:
            5000,
        script: 5000
    })

    // settings section
    // profile
    await driver.findElement(By.xpath('//*[@id="region-header"]/header/div/ul/li[3]')).click()

    await driver.manage().setTimeouts({
        implicit: 5000,
        pageLoad:
            5000,
        script: 5000
    })
    // password
    await driver.findElement(By.xpath('/html/body/div[2]/div[2]/div/div/ul/li[2]')).click()

    await driver.manage().setTimeouts({
        implicit: 5000,
        pageLoad:
            5000,
        script: 5000
    })
    // accounting
    await driver.findElement(By.xpath('/html/body/div[2]/div[2]/div/div/ul/li[3]')).click()

    await driver.manage().setTimeouts({
        implicit: 5000,
        pageLoad:
            5000,
        script: 5000
    })
    // plan
    await driver.findElement(By.xpath('/html/body/div[2]/div[2]/div/div/ul/li[4]')).click()

    await driver.manage().setTimeouts({
        implicit: 5000,
        pageLoad:
            5000,
        script: 5000
    })
    // pendopay
    await driver.findElement(By.xpath('/html/body/div[2]/div[2]/div/div/ul/li[5]')).click()

    await driver.manage().setTimeouts({
        implicit: 5000,
        pageLoad:
            5000,
        script: 5000
    })
    // users
    await driver.findElement(By.xpath('/html/body/div[2]/div[2]/div/div/ul/li[6]')).click()

    // close the browser
    await driver.quit()
}

example()
