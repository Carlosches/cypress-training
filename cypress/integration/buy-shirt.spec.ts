import {
  MenuContentPage, LoginPage, AddressPage, ShippingPage, PaymentPage, VerifyPage,
  ProductListPage, ShopingCartPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shopingCartPage = new ShopingCartPage();
const loginPage = new LoginPage();
const addresPage = new AddressPage();
const shippingPage = new ShippingPage();
const paymentPage = new PaymentPage();
const verifyPage = new VerifyPage();

describe("Buy a t-shirt", () => {
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
