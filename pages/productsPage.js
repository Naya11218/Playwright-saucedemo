const { expect } = require('@playwright/test');

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.inventoryItems = page.locator('.inventory_item');
    this.addToCartButton = (itemName) =>
      page.locator(`text=${itemName}`).locator('..').locator('button');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.burgerMenu = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async verifyOnProductsPage() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async addItemToCart(itemName) {
  await this.page.locator(`.inventory_item:has-text("${itemName}") button`).click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async logout() {
    await this.burgerMenu.click();
    await this.logoutLink.click();
  }
}

module.exports = { ProductsPage };
