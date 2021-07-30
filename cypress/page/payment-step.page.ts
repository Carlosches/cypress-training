class PaymentPage {
    private payByBankWire: string;

    private confirmOrderBtn: string;

    constructor() {
      this.payByBankWire = ".bankwire";
      this.confirmOrderBtn = ".cart_navigation";
    }

    public selectPayByBankWire(): void {
      cy.get(this.payByBankWire).click();
    }

    public confirmOrder(): void {
      cy.get(this.confirmOrderBtn).contains("I confirm my order").click();
    }
}
export { PaymentPage };
