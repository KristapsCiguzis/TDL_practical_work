import BasePage from "./Base.Page";


class HomePage extends BasePage {
    static get url() {
      return "/inventory.html";
    }
  
    static get stackIcon() {
      return cy.get("#react-burger-menu-btn");
    }
    static get sideBar() {
        return cy.get(".bm-menu-wrap");
      }
      static get logoutButton() {
        return cy.get("#logout_sidebar_link");
      } 
      static get addToCartSauceLabsBackpack() {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
      } 
      static get addToCartSauceLabsOnesie() {
        return cy.get('[data-test="add-to-cart-sauce-labs-onesie"]');
      }
      static get addToCartSauceLabsShirt() {
        return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
      }
      static get ShopingCartBadge() {
        return cy.get(".shopping_cart_badge");
      }
      static get removeSauceLabsBackpack() {
        return cy.get('[data-test="remove-sauce-labs-backpack"]');
    }
    static get iteNames() {
        return cy.get(".inventory_item_name");
    }
    static get iteName() {
        return cy.get(".inventory_details_name");
    }
    static get twoItems() {
        cy.get(locator).should(have.length,count)
    }
    

}
  
  
  export default HomePage;