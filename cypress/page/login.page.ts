class LoginPage {
    private emailField: string;

    private passwordField: string;

    private submitBtn: string;

    constructor() {
      this.emailField = "#email";
      this.passwordField = "#passwd";
      this.submitBtn = "[id=SubmitLogin]";
    }

    public fillEmailField(): void {
      cy.get(this.emailField).type("aperdomobo@gmail.com");
    }

    public fillPasswordField(): void {
      cy.get(this.passwordField).type("WorkshopProtractor");
    }

    public submitBtnEvent(): void {
      cy.get(this.submitBtn).click();
    }
}
export { LoginPage };
