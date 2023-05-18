import LoginPage from "../../pageObjects/Login.page";
import CartsPage from "../../pageObjects/Cart.page";
import HomePage from "../../pageObjects/home.page";
import CartPage from "../../pageObjects/Cart.page";
import BasePage from "../../pageObjects/Base.Page";
import CheckoutPage from "../../pageObjects/CheckoutPage";

describe("Saucedemo", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("1. Scenario 1", () => {
  //  cy.get('[data-test="username"]').type("standard_user");
    LoginPage.usernameField.type("standard_user");
  //  cy.get('[data-test="password"]').type("secret_sauce");
    LoginPage. passwordField.type("secret_sauce");
  //cy.get('[data-test="login-button"]').should("be.visible");
    LoginPage.loginButton.should("be.visible");
  //   cy.get('[data-test="login-button"]').click();
    LoginPage.loginButton.click();
  //   cy.get('[data-test="login-button"]').should("not.exist");
    LoginPage.loginButton.should("not.exist");
    
  });
  it("2. Login scenario - Negative case",() =>{
    LoginPage.usernameField.type("standard_user");
    LoginPage. passwordField.type("secret_sa");
    LoginPage.loginButton.click();
    LoginPage.errorMessage.should("have.text",
     "Epic sadface: Username and password do not match any user in this service");
  });

  it("3. Logout scenario",() =>{
 // Log into App
 LoginPage.usernameField.type("standard_user");
 LoginPage. passwordField.type("secret_sauce");
 LoginPage.loginButton.click();
 // Click on Burger/Stack icon
 HomePage.sideBar.invoke("attr","aria-hidden").should("eq","true");
 HomePage.stackIcon.click();
 HomePage.sideBar.invoke("attr","aria-hidden").should("eq","false");
 HomePage.logoutButton.should("be.visible");
 // Click logout button
});
 it("4. Add items to cart",() =>{
  LoginPage.usernameField.type("standard_user");
  LoginPage. passwordField.type("secret_sauce");
  LoginPage.loginButton.click();  
  HomePage.addToCartSauceLabsBackpack.click();
  HomePage.addToCartSauceLabsOnesie.click();     
  HomePage.addToCartSauceLabsShirt.click();     
  HomePage.ShopingCartBadge.scrollIntoView().should("have.text","3");
});

it("5. Add  remove items items to cart",() =>{
LoginPage.LoginPage("standard_user","secret_sauce")
HomePage.addToCartSauceLabsBackpack.click();
HomePage.ShopingCartBadge.scrollIntoView().should("have.text","1");
HomePage.removeSauceLabsBackpack.click();
});

it("6. Open specific item and valdate title",() =>{
LoginPage.LoginPage("standard_user","secret_sauce")
HomePage.iteNames.contains("Sauce Labs Backpack").click();
HomePage.iteName.should("have.text","Sauce Labs Backpack")
});

it.only("7. Buy item",() =>{
LoginPage.LoginPage("standard_user","secret_sauce")  
HomePage.addToCartSauceLabsBackpack.click();
HomePage.addToCartSauceLabsShirt.click();     
HomePage.ShopingCartBadge.click(); 
HomePage.iteNames.contains("Backpack");
HomePage.iteNames.contains("Shirt");
HomePage.ShopingCartBadge.scrollIntoView().should("have.text","2");
CartPage.checkoutButton.click(); 
CartPage.nameField.type("xxx");
CartPage.lastNameField.type("xxx");
CartPage.zip.type("xxx");
CartPage.continueButton.click(); 
CheckoutPage.totalCheck.contains("49.66");
CheckoutPage.finsihButton.click();
CheckoutPage.thankYouMsg.should("have.text", "Thank you for your order!");

// Add to cart "Sauce Labs Backpack"
// Add to cart "Sauce Labs Bolt T-Shirt"
// Open Cart (Create CartsPage object)
// Validate that we can see "Sauce Labs Backpack" && "Sauce Labs Bolt T-Shirt"
// Validate that we see 2 items in cart list
// Click checkout (Create new page object - CheckOutStepOne)
// Set Firstname, lastname, zip code
// Click Continue
// (Create step two page object) validate that we see "49.66"
// Click Finish
// (Create Checkout Complete page object) Validate that we see "Thank you for your order!"
});
});