/* eslint-disable indent */

const { Builder, By, Key } = require('selenium-webdriver')
const assert = require('assert')
const should = require('chai').should()

describe('Add todo tests', () => {
    it('should add new todo', async () => {
        const driver = await new Builder().forBrowser('firefox').build()

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

        // close the browser
        await driver.quit()
    })
})
