const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

let page;

Given('the user is on the login page', async function () {
  page = await this.browser.newPage();
  await page.goto('https://www.saucedemo.com');
});

When('the user logs in using {string} and {string}', async function (username, password) {
  await page.fill('#user-name', username);
  await page.fill('#password', password);
  await page.click('#login-button');
});

Then('the user should be redirected to the inventory page', async function () {
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

When('the user adds {string} to the cart', async function (item) {
  const formattedItemId = item.toLowerCase().replaceAll(' ', '-');
  await page.click(`#add-to-cart-${formattedItemId}`);
});

When('navigates to the cart page', async function () {
  await page.click('.shopping_cart_link');
});

Then('the cart should display {string}', async function (item) {
  const cartItem = await page.locator('.inventory_item_name').innerText();
  expect(cartItem).toBe(item);
});

When('the user removes {string} from the cart', async function (item) {
  const formattedItemId = item.toLowerCase().replaceAll(' ', '-');
  await page.click(`#remove-${formattedItemId}`);
});

Then('the cart should be empty', async function () {
  const items = await page.locator('.cart_item').count();
  expect(items).toBe(0);
});
