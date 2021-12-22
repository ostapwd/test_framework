import loginPage from "../../support/pages/loginPage";
import inventoryPage from "../../support/pages/inventoryPage";
import users from "../../data/users";

describe('Login to the application', () => {
    let inventoryPage;
    beforeEach(() => {
        inventoryPage = loginPage.open().loginToTheApp(users.standardUser);
    })

    it('Verify a user can login to the application', () => {
        inventoryPage.waitForPageToBeLoaded().productsLabel().then(label => {
            expect(label.text()).to.be.equal("Products");
        });
    })

    it('Verify a user can add products to cart', () => {
        inventoryPage.waitForPageToBeLoaded().addToCartAllProducts().cartNumberLabel().then(label => {
            expect(label.text()).to.be.equal("6");
        });
    })

    it('Verify a user can logout form the app', () => {
        inventoryPage.waitForPageToBeLoaded().menu().logout();
        loginPage.waitForPageToBeLoaded().logoLabel().should("be.visible");
    })
})