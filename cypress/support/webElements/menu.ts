/// <reference types="cypress-xpath" />

import {WebElement} from "./webElement";

export class Menu extends WebElement {
  public constructor(searchStrategy: any, locator: string) {
    super(searchStrategy, locator);
  }

  private expandMenuButton() { return cy.get("#react-burger-menu-btn"); }
  private logoutMenuItemLabel() { return cy.get("#logout_sidebar_link"); }
  private menuContainer() { return cy.get(".bm-menu-wrap"); }

  private expandMenuIfHidden() {
    this.menuContainer().invoke("attr", "aria-hidden").then(elementAttribute => {
      // @ts-ignore
      if (elementAttribute.includes("true")) {
        this.expandMenuButton().click({force: true});
        cy.wait(2000);
      }
    });
  }

  public logout() {
    this.expandMenuIfHidden();
    this.logoutMenuItemLabel().click();
  }
}
