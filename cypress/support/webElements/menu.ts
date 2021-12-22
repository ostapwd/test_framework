/// <reference types="cypress-xpath" />

import {WebElement} from "./webElement";

export class Menu extends WebElement {
  constructor(searchStrategy: any, locator: string) {
    super(searchStrategy, locator);
  }

  expandMenuButton() { return cy.get("#react-burger-menu-btn"); }
  logoutMenuItemLabel() { return cy.get("#logout_sidebar_link"); }
  menuContainer() { return cy.get(".bm-menu-wrap"); }

  private expandMenuIfHidden() {
    this.menuContainer().invoke("attr", "aria-hidden").then(elementAttribute => {
      // @ts-ignore
      if (elementAttribute.includes("true")) {
        this.expandMenuButton().click({force: true});
        cy.wait(2000);
      }
    });
  }

  logout() {
    this.expandMenuIfHidden();
    this.logoutMenuItemLabel().click();
  }
}
