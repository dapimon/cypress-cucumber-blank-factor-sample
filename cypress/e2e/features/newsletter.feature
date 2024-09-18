Feature: NewsLetter page

    Feature NewsLetter page you can search an article and subscribe.

    Background:
        Given A web browser is at the newsletter Page

    @news
    Scenario: Subscribe NewsLetter
        When A user navigates to the NewsLetter tab
        Then He Subscribes to the NewsLetter using the mail "ejempl@mail.com"
        
    @news 
    Scenario: Success Test
        When A user search for "Steve Jobs" and clicks on the search button
        And Scroll down to the first post about "Reed Jobs" and saves the Title
        Then the user check the url for the search of "Steve Jobs"
        And the user open the first post about "Reed Jobs"
        And the user verifys the Title 

    

    