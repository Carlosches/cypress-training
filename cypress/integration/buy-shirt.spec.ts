import {
  MenuContentPage, LoginPage, AddressPage, ShippingPage, PaymentPage, VerifyPage,
  ProductListPage, ShopingCartPage,
} from "../page/index";

const menuContentPage = new MenuContentPage("http://automationpractice.com/");
const productListPage = new ProductListPage();
const shopingCartPage = new ShopingCartPage();
const loginPage = new LoginPage();
const addresPage = new AddressPage();
const shippingPage = new ShippingPage();
const paymentPage = new PaymentPage();
const verifyPage = new VerifyPage();

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.addTShirtToCart();
    shopingCartPage.addToCart();
    shopingCartPage.proceedToCheckout();
    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");
    addresPage.confirmAddress();
    shippingPage.acceptTermsOfService();
    shippingPage.proceedToCheckout();
    paymentPage.selectPayByBankWire();
    paymentPage.confirmOrder();
    verifyPage.getConfirmationTitle().should("have.text", "Your order on My Store is complete.");
  });
});
