class VerifyPage {
    private confirmationTitle: string;

    constructor() {
      this.confirmationTitle = "p.cheque-indent > strong";
    }

    public getConfirmationTitle() {
      return cy.get(this.confirmationTitle);
    }
}
export { VerifyPage };
