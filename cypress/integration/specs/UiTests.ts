import loginPage from "../../support/pages/loginPage";
import inventoryPage from "../../support/pages/inventoryPage";
import users from "../../data/users";

describe('Login to the application', () => {
    let inventoryPage;
    beforeEach(() => {
        inventoryPage = loginPage.open().loginToTheApp(users.standardUser);
    });

    it('Verify a user can login to the application', () => {
        inventoryPage.waitForPageToBeLoaded().productsLabel().then(label => {
            expect(label.text()).to.be.equal("Products");
        });
    });

    it('Verify a user can add products to cart', () => {
        inventoryPage.waitForPageToBeLoaded().addToCartAllProducts().cartNumberLabel().then(label => {
            expect(label.text()).to.be.equal("5");
        });
    });

    it('Verify a user can logout form the app', () => {
        inventoryPage.waitForPageToBeLoaded().menu().logout();
        loginPage.waitForPageToBeLoaded().loginPageLogoLabel().should("be.visible");
    });
});

it.skip('Verify a user can login to the app', () => {
    cy.visit("https://www.saucedemo.com/");

    cy.get("#user-name").clear().type("standard_user");
    cy.get("#password").clear().type("secret_sauce");
    cy.xpath(".//*[@id = 'login-button']").click();

    cy.get(".app_logo").should("be.visible");
});

it.skip('Verify a user can login to the app', () => {
    let user = {
        username: "standard_user",
        password: "secret_sauce"
    }

    loginPage.open()
        .loginToTheApp(user)
        .inventoryPageLogoLabel().should("be.visible");
});

it.skip('Verify a user can login to the app', () => {
    loginPage.open()
        .loginToTheApp(users.standardUser)
        .inventoryPageLogoLabel().should("be.visible");
});