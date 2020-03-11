const puppeteer = require('puppeteer');

// update these three variables
const DESTINATION = 'https://www.example.com'
const USERNAME = 'myusername'
const PASSWORD = 'mypassword'

;(async () => {
	const browser = await puppeteer.launch({ headless: false })
	const page = await browser.newPage()
	await page.goto(DESTINATION)
	await page.focus('input[name="username"]')
	await page.keyboard.type(USERNAME, { delay: 103 })
	await page.focus('input[name="password"]')
	await page.keyboard.type(PASSWORD, { delay: 106 })
	await page.click('input#okta-signin-submit')
	page.waitFor(3000)
	await browser.waitForTarget(target => target.url().includes(DESTINATION))
	await page.screenshot({ path: 'screenshot.png' })
	await browser.close()
})()
