import BasePage from "./basePage";
import {SearchStrategy} from "../webElements/searchStrategy";
import {Menu} from "../webElements/menu";

class InventoryPage extends BasePage {
  public constructor() {
    super();
  }

  private products() { return cy.get(".inventory_item button[id^=add-to-cart]"); }
  public inventoryPageLogoLabel() { return cy.get(".app_logo"); }
  public productsLabel() { return cy.get(".header_secondary_container > .title"); }
  public cartNumberLabel() { return cy.xpath(".//*[contains(@class, 'shopping_cart_badge')]"); }
  public menu() { return new Menu(SearchStrategy.CSS, "#menu_button_container"); }

  public waitForPageToBeLoaded() {
    super.waitForPageToBeLoaded();
    this.inventoryPageLogoLabel().should("be.visible");

    return this;
  }

  public addToCartAllProducts() {
    cy.wait(2000);
    this.products().each((element, i, array) => {
      array[i].click();
    });
    cy.wait(3000);

    return this;
  }

}

export default new InventoryPage();
