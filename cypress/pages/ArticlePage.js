class ArticlePage {
  elements = {
    suscriptionInput: () => cy.get("div#custom-substack-embed input", { timeout: 20000 }),
    suscriptionButton: () => cy.get("div#custom-substack-embed button"),
    suscriptionMessage: () => cy.get('div#custom-substack-embed p', { timeout: 10000 }),
  };
  subscriptionSuccessMessage = "We've sent you a confirmation email. Please click the link to complete your signup!"


  VeryfyTitel(){
    //elements.articleTitle().should('have.text', 'success')
  }
  subscribeByEmail(email) {
    elements.suscriptionInput().scrollIntoView().type(email)
    elements.suscriptionButton().click()
    elements.suscriptionMessage().should('have.class', 'success').should('contain',subscriptionSuccessMessage )
  }

}

export const articlePage = new ArticlePage();
