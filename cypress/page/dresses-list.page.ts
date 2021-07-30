class DressesListPage {
    private dressItem: string;

    private dressName: string;

    constructor() {
      this.dressItem = ".product-container";
      this.dressName = `${this.dressItem} .product-name`;
    }

    getDressProducts() {
      return cy.get(this.dressItem);
    }

    getDressProductsName() {
      return cy.get(this.dressName);
    }
}
export { DressesListPage };
