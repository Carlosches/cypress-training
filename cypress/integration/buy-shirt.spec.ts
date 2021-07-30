import {
  MenuContentPage, LoginPage, AddressPage, ShippingPage, PaymentPage, VerifyPage,
  ProductListPage, ShopingCartPage,
} from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productListPage: ProductListPage;
  let shopingCartPage: ShopingCartPage;
  let loginPage: LoginPage;
  let addresPage: AddressPage;
  let shippingPage: ShippingPage;
  let paymentPage: PaymentPage;
  let verifyPage: VerifyPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    productListPage = new ProductListPage();
    shopingCartPage = new ShopingCartPage();
    loginPage = new LoginPage();
    addresPage = new AddressPage();
    shippingPage = new ShippingPage();
    paymentPage = new PaymentPage();
    verifyPage = new VerifyPage();
  });
  it("then should be bought a t-shirt", () => {
    // Arrange
    menuContentPage.visitMenuContentPage();
    const email = "aperdomobo@gmail.com";
    const password = "WorkshopProtractor";
    const confirmationTitle = "Your order on My Store is complete.";
    // Action
    menuContentPage.goToTShirtMenu();
    productListPage.addTShirtToCart();
    shopingCartPage.addToCart();
    shopingCartPage.proceedToCheckout();
    loginPage.login(email, password);
    addresPage.confirmAddress();
    shippingPage.acceptTermsOfService();
    shippingPage.proceedToCheckout();
    paymentPage.selectPayByBankWire();
    paymentPage.confirmOrder();
    // Assert
    verifyPage.getConfirmationTitle().should("have.text", confirmationTitle);
  });
});
