import {
  // eslint-disable-next-line max-len
  MenuContentPage, ProductListPage, ShopingCartPage, LoginPage, AddressPage, ShippingPage, PaymentPage, VerifyPage,
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
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.addTShirtToCart();
    shopingCartPage.checkoutPopUpEvent();
    shopingCartPage.checkoutSummaryEvent();
    loginPage.fillEmailField();
    loginPage.fillPasswordField();
    loginPage.submitBtnEvent();
    addresPage.checkoutBtnEvent();
    shippingPage.acceptTermsOfService();
    shippingPage.checkoutBtnEvent();
    paymentPage.selectPayByBankWire();
    paymentPage.confirmOrder();
    verifyPage.verifyPurchase();
  });
});
