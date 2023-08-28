/* eslint-disable indent */

const { Builder, By, Key } = require('selenium-webdriver')
const assert = require('assert')
const should = require('chai').should()
const ltCapabilities = require('../capabilities')

describe('Add another todo tests', () => {
    let driver
    const USERNAME = ltCapabilities.capability['LT:Options'].username
    const KEY = ltCapabilities.capability['LT:Options'].accessKey

    const GRID_HOST = 'hub.lambdatest.com/wd/hub'

    const gridURL = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST

    beforeEach(() => {
        // ltCapabilities.capability['LT:Options'].project = this.currentTest.title

        // driver = new Builder().forBrowser('firefox').build()
        driver = new Builder()
            .usingServer(gridURL)
            .withCapabilities(ltCapabilities.capability)
            .build()
    })

    afterEach(async () => {
        // driver = new Builder().forBrowser('firefox').build()
        await driver.quit()
    })

    it('should add new todo', async () => {
        // add endpoint to test
        await driver.get('https://lambdatest.github.io/sample-todo-app/')

        // add test

        // key enter will submit the form, alternatively button click can also work
        await driver.findElement(By.id('sampletodotext')).sendKeys('Hello world!', Key.RETURN)

        const todoText = await driver.findElement(By.xpath('//li[last()]')).getText().then((value) => {
            return value
        })

        assert.strictEqual(todoText, 'Hello world!')

        // chai test
        todoText.should.equal('Hello world!')
    })
    it('should add new todo for reporting', async () => {
        // add endpoint to test
        await driver.get('https://lambdatest.github.io/sample-todo-app/')

        // add test

        // key enter will submit the form, alternatively button click can also work
        await driver.findElement(By.id('sampletodotext')).sendKeys('Hello world!', Key.RETURN)

        const todoText = await driver.findElement(By.xpath('//li[last()]')).getText().then((value) => {
            return value
        })

        // assert.strictEqual(todoText, 'Hello world!')

        // chai test
        todoText.should.equal('Hello world!')
    })
})
