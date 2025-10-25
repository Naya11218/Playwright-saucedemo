const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { ProductsPage } = require('../pages/productsPage');
const { CartPage } = require('../pages/cartPage');

test('Add item to cart and verify', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await productsPage.verifyOnProductsPage();
  await productsPage.addItemToCart('Sauce Labs Backpack');
  await productsPage.openCart();
  await cartPage.verifyItemInCart('Sauce Labs Backpack');
});
