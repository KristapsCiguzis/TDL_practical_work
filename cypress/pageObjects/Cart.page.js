import BasePage from "./Base.Page";
class CartPage extends BasePage{
  
    static get url(){
        return"/";
        }
        static get checkoutButton() {
            return cy.get("#checkout");
          }

          static get nameField(){
            return cy.get('#first-name');
        }
    
        static get lastNameField(){
            return cy.get('#last-name');
        }
      static get zip(){
            return     cy.get('#postal-code');
        
        }
        static get continueButton() {
            return cy.get("#continue");
          }
        }
export default CartPage