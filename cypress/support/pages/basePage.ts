export default abstract class BasePage {

  protected constructor() {
  }

  protected waitForPageToBeLoaded() {
    cy.wait(1000);

    return this;
  }

  protected goto(url) {
    cy.visit(url, { failOnStatusCode: false });

    return this;
  }
}
