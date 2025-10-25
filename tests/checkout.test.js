const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { ProductsPage } = require('../pages/productsPage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage'); // ✅ path must match exactly


test('Complete checkout process', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await productsPage.addItemToCart('Sauce Labs Backpack');
  await productsPage.openCart();
  await cartPage.goToCheckout();
  await checkoutPage.fillCheckoutDetails('Nayab', 'Khan', '11234');
  await checkoutPage.finishCheckout();
  await checkoutPage.verifySuccessMessage();
});
