class LoginPage {
    private emailField: string;

    private passwordField: string;

    private submitBtn: string;

    constructor() {
      this.emailField = "#email";
      this.passwordField = "#passwd";
      this.submitBtn = "[id=SubmitLogin]";
    }

    public login(email: string, password: string): void {
      cy.get(this.emailField).type(email);
      cy.get(this.passwordField).type(password);
      cy.get(this.submitBtn).click();
    }
}
export { LoginPage };
