class AddressPage {
    private checkoutBtn: string;

    constructor() {
      this.checkoutBtn = "[name=processAddress]";
    }

    public confirmAddress(): void {
      cy.get(this.checkoutBtn).click();
    }
}
export { AddressPage };
