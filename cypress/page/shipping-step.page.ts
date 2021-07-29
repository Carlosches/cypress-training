class ShippingPage {
    private termsOfServiceCheckbox: string;

    private checkoutBtn: string;

    constructor() {
      this.termsOfServiceCheckbox = "[id=cgv]";
      this.checkoutBtn = "[name=processCarrier]";
    }

    public acceptTermsOfService(): void {
      cy.get(this.termsOfServiceCheckbox).click();
    }

    public checkoutBtnEvent(): void {
      cy.get(this.checkoutBtn).click();
    }
}
export { ShippingPage };
