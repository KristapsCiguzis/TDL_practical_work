import BasePage from "./Base.Page"; 
class CheckoutPage extends BasePage{
    static get url(){
        return"/";
        }

        static get totalCheck() {
            return cy.get(" .summary_total_label");
        }
        static get finsihButton() {
            return cy.get("#finish");
          }
          static get thankYouMsg(){
            return     cy.get('.complete-header');
          }
}
export default CheckoutPage