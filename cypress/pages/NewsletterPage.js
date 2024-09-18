class NewsletterPage {
  elements = {
    suscriptionContainer: () => cy.get("div#custom-substack-embed", { timeout: 20000 }),
    suscriptionInput: () => cy.get("input", { timeout: 20000 }).should('contain',"Escribe tu correo electrónico..." ),
    suscriptionButton: () => cy.get("button.subscribe-btn"),
    suscriptionMessage: () => cy.get('div#custom-substack-embed p', { timeout: 10000 }),
  };
  subscriptionSuccessMessage = "We've sent you a confirmation email. Please click the link to complete your signup!"
   getIframeSubscription = () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
    .get('.subscribe__style-1 iframe')
    .its('0.contentDocument.body').should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then(cy.wrap)
  }

  

  subscribeByEmail(email) {
    //this.elements.suscriptionInput().scrollIntoView().type(email)
    getIframeSubscription().find('input').should('have.text', 'Escribe tu correo electrónico...').scrollIntoView().type(email)
    getIframeSubscription().find('button.subscribe-btn').click()
    //this.elements.suscriptionButton().click()
    cy.wait(500)
    getIframeSubscription().find('button.subscribe-btn').should('contain',"✓" )
  }

}

export const newsletterPage = new NewsletterPage();