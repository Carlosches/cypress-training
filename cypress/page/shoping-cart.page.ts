class ShopingCartPage {
    private checkoutPopUpBtn: string;

    private checkoutSummaryBtn: string;

    constructor() {
      this.checkoutPopUpBtn = ".clearfix a.btn.btn-default.button.button-medium";
      this.checkoutSummaryBtn = ".cart_navigation span";
    }

    public addToCart(): void {
      cy.get(this.checkoutPopUpBtn).click();
    }

    public proceedToCheckout(): void {
      cy.get(this.checkoutSummaryBtn).click();
    }
}
export { ShopingCartPage };
