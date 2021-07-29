class VerifyPage {
    private confirmationTitle: string;

    constructor() {
      this.confirmationTitle = "#center_column > div > p > strong";
    }

    public getConfirmationTitle() {
      return cy.get(this.confirmationTitle);
    }
}
export { VerifyPage };
