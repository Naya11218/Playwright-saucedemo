const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { ProductsPage } = require('../pages/productsPage');

test.describe('Products Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Verify all products are displayed', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.verifyOnProductsPage();

    const itemCount = await productsPage.inventoryItems.count();
    console.log('Total products:', itemCount);
    expect(itemCount).toBeGreaterThan(0);
  });

  test('Add single item to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.addItemToCart('Sauce Labs Backpack');

    const removeButton = page.locator('button', { hasText: 'Remove' });
    await expect(removeButton).toBeVisible();
  });

  test('Logout from products page', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.logout();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});
