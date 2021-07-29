class VerifyPage {
    private confirmationText: string;

    constructor() {
      this.confirmationText = "#center_column > div > p > strong";
    }

    public verifyPurchase(): void {
      cy.get(this.confirmationText).should("have.text", "Your order on My Store is complete.");
    }
}
export { VerifyPage };
