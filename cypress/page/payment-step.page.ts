class PaymentPage {
    private payByBankWire: string;

    private confirmOrderBtn: string;

    constructor() {
      this.payByBankWire = "p.payment_module > a.bankwire";
      this.confirmOrderBtn = "p.cart_navigation > button.button.btn.btn-default.button-medium";
    }

    public selectPayByBankWire(): void {
      cy.get(this.payByBankWire).click();
    }

    public confirmOrder(): void {
      cy.get(this.confirmOrderBtn).click();
    }
}
export { PaymentPage };