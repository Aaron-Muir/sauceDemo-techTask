const { expect } = require('@playwright/test');

exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('data-test=checkout');
  }

  async goto() {
    await this.page.goto('/cart');
  }

  async checkout() {
    await this.checkoutButton.click();
  }
};