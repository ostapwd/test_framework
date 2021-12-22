export default abstract class BasePage {

  protected constructor() {
  }

  waitForPageToBeLoaded() {
    cy.wait(1000);

    return this;
  }

  waitForSpinnerToDisappear() {

    return this;
  }

  goto(url) {
    cy.visit(url, { failOnStatusCode: false });
  }
}
