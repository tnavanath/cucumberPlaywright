const { Before, After, AfterStep, Status } = require('@cucumber/cucumber');

Before(async function () {
  await this.launchBrowser();
});

AfterStep(async function ({ result }) {
  if (result.status === Status.FAILED) {
    const buffer = await this.page.screenshot();
    await this.attach(buffer.toString('base64'), 'base64:image/png');
  }
});

After(async function () {
  await this.closeBrowser();
});
