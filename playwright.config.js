// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  retries: 1, 

  use: {
    baseURL: 'https://www.saucedemo.com/',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    testIdAttribute: 'data-test'
  }
});

