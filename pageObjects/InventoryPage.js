class InventoryPage {
  constructor(page) {
    this.page = page;
  }

  async addItemToCart(itemName) {
    await this.page.click(`text=${itemName}`);
    await this.page.click('button[id^="add-to-cart"]');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

  async verifyItemInInventory(itemName) {
    await this.page.waitForSelector(`text=${itemName}`);
  }
}

module.exports = { InventoryPage };