import homePage from "../pages/homePage";
import PDP from "../pages/PDP";

describe("test funcionality of the home page", () => {
  beforeEach("visit page", () => {
    cy.visit("/");
  });

  it("send contact message", () => {
    homePage.fillContactForm(
      "hola:123@hotmail.com",
      "hola",
      "hola, como estas?"
    );
  });

  it.only("open product", () => {
    homePage.elements.firstCard().click();
    PDP.elements.productTitle().should("be.visible");
    PDP.elements.btnAddToCart().click();
  });
});
