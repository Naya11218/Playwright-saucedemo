// pages/checkoutPage.js
const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.successMessage = page.locator('.complete-header');
  }

  async fillCheckoutDetails(first, last, zip) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async verifySuccessMessage() {
    await expect(this.successMessage).toHaveText('Thank you for your order!');
  }
}

module.exports = { CheckoutPage }; 
