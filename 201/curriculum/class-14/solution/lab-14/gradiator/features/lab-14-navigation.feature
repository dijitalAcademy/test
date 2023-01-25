Feature: navigate to cart
  In order to assess product choices
  As a customer
  I need to view my selections

  Scenario: navigate to cart
    Given I am on home page
    When I click on cart
    Then I should navigate to cart page

  Scenario: navigate to cart with stuff
    Given I am on home page
    And I have already added 1 bag items
    When I click on cart
    Then I should navigate to cart page
    And I should see 1 in cart
    And I should see bag in table
