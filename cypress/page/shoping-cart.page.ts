class ShopingCartPage {
    private checkoutPopUpBtn: string;

    private checkoutSummaryBtn: string;

    constructor() {
      this.checkoutPopUpBtn = "[style*=\"display: block;\"] .button-container > a";
      this.checkoutSummaryBtn = ".cart_navigation span";
    }

    public checkoutPopUpEvent(): void {
      cy.get(this.checkoutPopUpBtn).click();
    }

    public checkoutSummaryEvent(): void {
      cy.get(this.checkoutSummaryBtn).click();
    }
}
export { ShopingCartPage };
