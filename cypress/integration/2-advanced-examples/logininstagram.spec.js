/// <reference types= "cypress" />
//This function is to describe the test suite
describe("Instagram Login Test suite", function () {
    //This function is to describe the test case
    it("Instagram login", function () {
    //Visit instagram.
    cy.visit("https://www.instagram.com/");
    //Spy ont the user name input field.
    cy.get(":nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ")
      // Type yout username 
     .type("ifeomarh");
      //Spy on the password field 
    cy.get(":nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ")
      //Type Password 
     .type("@Ifeoma#1");
     //Spy login button 
    cy.get(":nth-child(3) > .sqdOP").click();
    //Inspect search box
    cy.get(".TqC_a")
    //assert that the serch bar is vissible 
    .should("be.visible")
    //search
    .type("victoroji");
    //Click on search
    cy.get(":nth-child(1) > .-qQT3 > .XfCBB").click();
  });
});