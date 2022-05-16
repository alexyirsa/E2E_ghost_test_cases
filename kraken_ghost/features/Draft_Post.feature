Feature: Hacer un Post en Ghost

@user1 @web

Scenario: Como primer usuario inicio sesion
    Given I navigate to page "http://localhost:3001/ghost/#/signin"
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    When I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click Sign In
    
    And I click Post
    And I wait for 2 seconds
    And I click on Drafts
    And I wait for 2 seconds
    And I enter to first draft
    And I enter post title "<POSTTITLE>"
    And I wait for 2 seconds
    And I click on Publish button
    And I click on Publish option
    
    And I wait for 5 seconds
    
    And I click Post Draft
    
    And I wait for 1 seconds
    And I click on profile
    And I wait for 1 seconds
    And I click Sign Out