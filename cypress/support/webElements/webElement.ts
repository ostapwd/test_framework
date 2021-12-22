import { SearchStrategy } from "./searchStrategy";

export abstract class WebElement {
  protected readonly searchStrategy: SearchStrategy;
  protected readonly locator: string;

  protected constructor(searchStrategy: SearchStrategy, locator: string) {
    this.searchStrategy = searchStrategy;
    this.locator = locator;
  }

  public getRootElement() {
    if (this.searchStrategy === SearchStrategy.CSS)
      return cy.get(this.locator);
    else
      return cy.xpath(this.locator);
  }
}


