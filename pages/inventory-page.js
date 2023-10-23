const { expect } = require('@playwright/test');

exports.InventoryPage = class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryName = page.locator('id=item_4_title_link');
  }

  async goto() {
    await this.page.goto('/inventory');
  }

  async selectItem(itemName = "") {
    await this.inventoryName.click();
  }
};