// tests/login.test.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage'); // ✅ Correct import path

test('Valid login navigates to products page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // assertion
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
