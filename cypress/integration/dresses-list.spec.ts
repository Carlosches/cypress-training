import { MenuContentPage, DressesListPage } from "../page/index";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  });

  it("show the available dresses", () => {
    // Arrange
    const dresses: Array<string> = ["Printed Dress", "Printed Dress", "Printed Summer Dress", "Printed Summer Dress", "Printed Chiffon Dress"];
    menuContentPage.visitMenuContentPage();

    // Action
    menuContentPage.goToDressesList();

    // Assert
    dressesListPage.getDressProducts().should("have.length", 5);
    dressesListPage.getDressProductsName().each((item, index) => {
      cy.wrap(item).should("contain.text", dresses[index]);
    });
  });
});
