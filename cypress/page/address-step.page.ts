class AddressPage {
    private checkoutBtn: string;

    constructor() {
      this.checkoutBtn = ".cart_navigation button";
    }

    public checkoutBtnEvent(): void {
      cy.get(this.checkoutBtn).click();
    }
}
export { AddressPage };
