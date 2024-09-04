class HomePage {
  elements = {
    searchButton: () => cy.get("#search-toggle"),
    searchField: () => cy.get("input#search-form-2.search-field"),
    searchSubmit: () => cy.get("button.search-submit").eq(1),
  };

  searchText(searchtext) {
    cy.wait(5000)
    this.elements.searchButton().trigger('mouseover').click({ force: true });
    cy.wait(500)
    this.elements.searchField().type(searchtext)
    this.elements.searchSubmit().click()
  }

}

export const homePage = new HomePage();
