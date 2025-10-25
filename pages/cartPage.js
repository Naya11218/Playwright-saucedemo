// pages/cartPage.js
const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
  }

  async verifyItemInCart(itemName) {
    await expect(this.page.locator('.cart_item_label', { hasText: itemName })).toBeVisible();
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage }; 
