class MenuContentPage {
    private tShirtMenu: string;

    private menuContentPageURL: string;

    constructor(pageURL: string) {
      this.tShirtMenu = "#block_top_menu > ul > li:nth-child(3) > a";
      this.menuContentPageURL = pageURL;
    }

    public visitMenuContentPage(): void {
      cy.visit(this.menuContentPageURL);
    }

    public goToTShirtMenu(): void {
      cy.get(this.tShirtMenu).click();
    }
}
export { MenuContentPage };
