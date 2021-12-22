import BasePage from "./basePage";
import inventoryPage from "./inventoryPage";

class LoginPage extends BasePage {
  constructor() {
    super();
  }

  logoLabel() { return cy.get(".login_logo"); }
  usernameInput() { return cy.get("#user-name"); }
  passwordInput() { return cy.get("#password"); }
  loginButton() { return cy.get("#login-button"); }

  waitForPageToBeLoaded() {
    super.waitForPageToBeLoaded();
    this.logoLabel().should("be.visible");

    return this;
  }

  loginToTheApp(user) {
    this.usernameInput().clear().type(user.username);
    cy.wait(1000);
    this.passwordInput().clear().type(user.password);
    cy.wait(1000);

    this.loginButton().click();

    return inventoryPage;
  }

  open() {
    this.goto(Cypress.env("UI_HOST"));

    return this;
  }

  continue() {
    this.waitForSpinnerToDisappear();

    return this;
  }

}

export default new LoginPage();
