const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { PageObjectManager } = require('../../pageObjects/PageObjectManager');

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
    this.pom = null;
  }

  async launchBrowser() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.pom = new PageObjectManager(this.page);
  }

  async closeBrowser() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
