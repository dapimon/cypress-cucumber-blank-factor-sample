class ArticlePage {
  elements = {
    articleTitle: () => cy.get("h1.entry-title--with-subtitle"),
    suscriptionContainer: () => cy.get("div#custom-substack-embed", { timeout: 20000 }),
    suscriptionInput: () => cy.get("div#custom-substack-embed input", { timeout: 20000 }),
    suscriptionButton: () => cy.get("div#custom-substack-embed button"),
    suscriptionMessage: () => cy.get('div#custom-substack-embed p', { timeout: 10000 }),
  };
  subscriptionSuccessMessage = "We've sent you a confirmation email. Please click the link to complete your signup!"


  veryfyTitle(){
    this.elements.articleTitle().invoke('text').then(($text) => {
    this.elements.articleTitle().should('contain', $text)
    })
  }
  subscribeByEmail(email) {
    this.elements.suscriptionContainer().scrollIntoView()
    this.elements.suscriptionInput().scrollIntoView().type(email)
    this.elements.suscriptionButton().click()
    cy.wait(500)
    this.elements.suscriptionMessage().should('have.class', 'success').should('contain',this.subscriptionSuccessMessage )
  }

}

export const articlePage = new ArticlePage();