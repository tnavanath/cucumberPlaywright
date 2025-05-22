const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('User is on the login page', async function () {
  await this.page.goto('https://www.saucedemo.com/');
});

When('User logs in with username {string} and password {string}', async function (username, password) {
  const loginPage = this.pom.getLoginPage();
  await loginPage.login(username, password);
});

When('User adds {string} to the cart', async function (productName) {
  const inventoryPage = this.pom.getInventoryPage();
  await inventoryPage.addItemToCart(productName);
  await inventoryPage.goToCart();
});

Then('The cart should contain {string}', async function (productName) {
  const locator = this.page.locator('.inventory_item_name');
  await expect(locator).toHaveText(productName);
});
