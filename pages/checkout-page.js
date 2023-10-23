const { expect } = require('@playwright/test');

exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.locator('data-test=firstName');
    this.lastNameField = page.locator('data-test=lastName');
    this.postalCodeField = page.locator('data-test=postalCode');
    this.continueButton = page.locator('data-test=continue');
    this.finishButton = page.locator('data-test=finish');
    this.checkoutMessage = page.locator('id=checkout_complete_container');
    this.backHomeButton = page.locator('id=back-to-products');
  }

  async goto() {
    await this.page.goto('/checkout-step-one');
  }

  async enterPersonalInformation() {
    await this.firstNameField.fill('Joe');
    await this.lastNameField.fill('Bloggs');
    await this.postalCodeField.fill('P03TCD');
    await expect(this.continueButton).toBeEnabled();
  }

  async continue() {
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
    await expect(this.checkoutMessage).toContainText('Thank you for your order!');
    await expect(this.backHomeButton).toBeEnabled();
  }
}; 