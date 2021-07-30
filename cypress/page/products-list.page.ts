class ProductListPage {
    private addToCartBtn: string;

    constructor() {
      this.addToCartBtn = ".button-container > a[data-id-product=1]";
    }

    public addTShirtToCart(): void {
      cy.get(this.addToCartBtn).click();
    }
}
export { ProductListPage };
