const base = require('@playwright/test');
const { LoginPage } = require('../pages/login-page');
const { InventoryPage } = require('../pages/inventory-page');
const { ProductDetailPage } = require('../pages/product-detail-page');
const { CartPage } = require('../pages/cart-page');
const { CheckoutPage } = require('../pages/checkout-page');

exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }, 
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
    productDetailPage: async ({ page }, use) => {
        await use(new ProductDetailPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    }
});

exports.expect = base.expect;