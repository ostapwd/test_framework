import BasePage from "./basePage";
import inventoryPage from "./inventoryPage";

class LoginPage extends BasePage {
  public constructor() {
    super();
  }

  private usernameInput() { return cy.get("#user-name"); }
  private passwordInput() { return cy.get("#password"); }
  private loginButton() { return cy.get("#login-button"); }
  public loginPageLogoLabel() { return cy.get(".login_logo"); }

  public waitForPageToBeLoaded() {
    super.waitForPageToBeLoaded();
    this.loginPageLogoLabel().should("be.visible");

    return this;
  }

  public loginToTheApp(user) {
    this.usernameInput().clear().type(user.username);
    cy.wait(1000);
    this.passwordInput().clear().type(user.password);
    cy.wait(1000);

    this.loginButton().click();

    return inventoryPage;
  }

  public open() {
    this.goto(Cypress.env("UI_HOST"));

    return this;
  }

}

export default new LoginPage();
