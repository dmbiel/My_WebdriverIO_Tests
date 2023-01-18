import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'


describe('E-commerce website', () => {
    it('should add an item to the cart', async () => {
        await browser.url('https://www.ecommerce-website.com');
  
        const firstItem = await browser.$('.product-card:first-of-type');
        const addToCartButton = await firstItem.$('.add-to-cart-button');
  
        assert.isTrue(await addToCartButton.isDisplayed());
        await addToCartButton.click();
  
        // Assert that the item was added to the cart
        const cartItemCount = await browser.$('.cart-item-count');
        assert.strictEqual(await cartItemCount.getText(), '1');
    });
});