function ShoppingCartPage() {
    Page.call(this, "./src/pages/shopping-cart/shopping-cart.html");
}

ShoppingCartPage.prototype = new Page();
ShoppingCartPage.prototype.constructor = ShoppingCartPage;