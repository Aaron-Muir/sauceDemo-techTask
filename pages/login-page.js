const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.userNameField = page.locator('data-test=username');
    this.userPasswordField = page.locator('data-test=password');
    this.loginButton = page.locator('data-test=login-button');
    this.cardButton = page.locator('id=shopping_cart_container');
    this.errorCard = page.locator('data-test=error');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(userName = 'standard_user', password = 'secret_sauce') {
    this.goto();
    await this.userNameField.fill(userName);
    await this.userPasswordField.fill(password);
    await this.loginButton.click();
  }

  async assertLockedUserLogin() {
    await expect(this.errorCard).toContainText('Sorry, this user has been locked out.');
  }

};