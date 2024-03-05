class homePage {
  elements = {
    btnOpenLogIn: () => cy.get("#login2"),
    btnLogIn: () => cy.get("#logInModal > div > div > div.modal-footer > button.btn.btn-primary"),
    contactForm: () => cy.get("#navbarExample > ul > li:nth-child(2) > a"),
    emailContactInput: () => cy.get("#recipient-email"),
    nameContactInput: () => cy.get("#recipient-name"),
    messageContact: () => cy.get("#message-text"),
    btnSendContactMessage: () =>
      cy.get(
        "#exampleModal > div > div > div.modal-footer > button.btn.btn-primary"
      ),
    firstCard: () => cy.get("#tbodyid > div:nth-child(1) > div > div > h4 > a"),
    secondElement: () =>
      cy.get("#tbodyid > div:nth-child(2) > div > div > h4 > a"),
    thirdElement: () =>
      cy.get("#tbodyid > div:nth-child(3) > div > div > h4 > a"),
  };

  logIn() {
    this.elements.btnOpenLogIn().click();
    cy.wait(1000);
    cy.loginForm('hola:123', 'hola1234');
    this.elements.btnLogIn().click();
  }

  fillContactForm(email, name, message) {
    this.elements.contactForm().click();
    this.elements.emailContactInput().type(email);
    this.elements.nameContactInput().type(name);
    this.elements.messageContact().type(message);
    this.elements.btnSendContactMessage().click();
  }
}

module.exports = new homePage();
