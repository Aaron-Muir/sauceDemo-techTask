const { expect } = require('@playwright/test');

exports.ProductDetailPage = class ProductDetailPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('data-test=add-to-cart-sauce-labs-backpack');
    this.goToCartButton = page.locator('id=shopping_cart_container');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.goToCartButton.click();
  }
};