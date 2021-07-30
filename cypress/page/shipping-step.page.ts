class ShippingPage {
    private termsOfServiceCheckbox: string;

    private checkoutBtn: string;

    constructor() {
      this.termsOfServiceCheckbox = "#cgv";
      this.checkoutBtn = "[name=processCarrier]";
    }

    public acceptTermsOfService(): void {
      cy.get(this.termsOfServiceCheckbox).click();
    }

    public proceedToCheckout(): void {
      cy.get(this.checkoutBtn).click();
    }
}
export { ShippingPage };
