class SearchPage {
  elements = {
    searchTitles: () => cy.get("h2.entry-title"),
  };

  scrollToPost(postText) {
    cy.wait(500)
    this.elements.searchTitles().contains(postText).scrollIntoView()
  .then(($title) => {
    let txt = $title.text()
    cy.wrap(txt).as('Title')
  })
  }
  verifyUrl(search){
    let url = `https://hipertextual.com/?s=${search.trim().replaceAll(" ","+")}`
    cy.url()
      .should('be.equal', url)
  }
  openPost(postText){
    this.elements.searchTitles().contains(postText).click()
    cy.wait(5000)
  }

}

export const searchPage = new SearchPage();
