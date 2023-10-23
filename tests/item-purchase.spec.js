const { test, expect } = require('../helpers/test-base.js');

test.describe('User can buy an item', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto;
    await loginPage.login();
  });

  test('successful checkout', async ({ inventoryPage, productDetailPage, cartPage, checkoutPage}) => {
    await inventoryPage.selectItem();
    await productDetailPage.addToCart();
    await productDetailPage.goToCart();
    await cartPage.checkout();
    await checkoutPage.enterPersonalInformation();
    await checkoutPage.continue();
    await checkoutPage.finishCheckout();
  });
});
