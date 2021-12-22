import BasePage from "./basePage";
import {SearchStrategy} from "../webElements/searchStrategy";
import {Menu} from "../webElements/menu";

class InventoryPage extends BasePage {
  constructor() {
    super();
  }

  menu() { return new Menu(SearchStrategy.CSS, "#menu_button_container"); }
  logoLabel() { return cy.get(".app_logo"); }
  productsLabel() { return cy.get(".header_secondary_container > .title"); }
  cartNumberLabel() { return cy.xpath(".//*[contains(@class, 'shopping_cart_badge')]"); }
  products() { return cy.get(".inventory_item button[id^=add-to-cart]"); }

  waitForPageToBeLoaded() {
    super.waitForPageToBeLoaded();
    this.logoLabel().should("be.visible");

    return this;
  }

  addToCartAllProducts() {
    cy.wait(2000);
    this.products().each((element, i, array) => {
      array[i].click();
    });
    cy.wait(3000);

    return this;
  }

}

export default new InventoryPage();
