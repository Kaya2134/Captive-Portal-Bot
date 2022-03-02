const { Builder, By } = require('selenium-webdriver');

// Browser you want to use Safari, Chrome, etc.
const BROWSER = 'chrome'; 
// URL of the captive portal
const URL = 'http://localhost:3000'; 
// Username to login
const USERNAME = 'test'; 
// Password to login
const PASSWORD = 'test';
// Username field id of the captive portal web page
const USERNAME_FIELD_ID = 'input-username'; 
// Password field id of the captive portal web page
const PASSWORD_FIELD_ID = 'input-password';
// Submit button id of the captive portal web page
const SUBMIT_BUTTON_ID = 'input-submit';

async function login() {
	let driver = await new Builder().forBrowser(BROWSER).build();

	try {
		await driver.get(URL);
		await driver.findElement(By.id(USERNAME_FIELD_ID)).sendKeys(USERNAME);
		await driver.findElement(By.id(PASSWORD_FIELD_ID)).sendKeys(PASSWORD);
		await driver.findElement(By.id(SUBMIT_BUTTON_ID)).click();
	} finally {
		await driver.sleep(5 * 1000);
		await driver.quit();
	}
}

login();
