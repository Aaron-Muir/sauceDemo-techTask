const { test, expect } = require('../helpers/test-base.js');

test.describe('Users can login', () => {

  test('locked user cannot successfully login', async ({ loginPage }) => {
    await loginPage.login('locked_out_user');
    await loginPage.assertLockedUserLogin();
  });
});
