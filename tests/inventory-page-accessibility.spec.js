const { test, expect } = require('../helpers/test-base.js');
const AxeBuilder = require('@axe-core/playwright').default; 

test.describe('Inventory Page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto;
    await loginPage.login();
  });

  test('inventory pageshould not have any automatically detectable accessibility issues', async ({ page }, testInfo) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 

    await testInfo.attach('accessibility-scan-results', {
      body: JSON.stringify(accessibilityScanResults, null, 2),
      contentType: 'application/json'
    });

    expect(accessibilityScanResults.violations).toEqual([]); 
  });
});