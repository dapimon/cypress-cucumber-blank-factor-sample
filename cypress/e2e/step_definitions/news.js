import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {homePage} from '@pages/HomePage'
import {searchPage} from '@pages/SearchPage'
import {articlePage} from '@pages/ArticlePage'

Given("A web browser is at the newsletter Page", () => {
  cy.visit("/");
});

When("A user search for {string} and clicks on the search button", (searchtext) => {
  homePage.searchText(searchtext)
});

When("Scroll down to the first post about {string} and saves the Title", (postText) => {
  searchPage.scrollToPost(postText)
  
});
Then("the user check the url for the search of {string}", (search) => {
  searchPage.verifyUrl(search)
});
Then("the user open the first post about {string}", (postText) => {
  searchPage.openPost(postText)
      
});

Then("the user verifys the Title and subscribe to the newsletter unsing the mail {string}", (email) => {
  articlePage.subscribeByEmail(email)
});

