Feature: add to cart
  In order to choose products
  As a customer
  I need to be able to add items to a cart

  Background:
    Given I am on home page

  Scenario: check product line
    Then I should see full product line

  Scenario: no items in cart
    Then I should see nothing in cart

  Scenario: add 1 item to cart
    Given I have selected pet-sweep
    And I have entered quantity of 1
    When I click add to cart button
    Then I should see 1 in cart
    And I should see 1: pet-sweep in right column

  Scenario: add 1 x 5 item to cart
    Given I have selected dragon
    And I have entered quantity of 5
    When I click add to cart button
    Then I should see 1 in cart
    And I should see 5: dragon in right column

  Scenario: add 2 different items to cart
    Given I have already added 1 bag items
    And I have selected boots
    And I have entered quantity of 5
    When I click add to cart button
    Then I should see 2 in cart
    And I should see 1: bag in right column
    And I should see 5: boots in right column


  Scenario: add 3 different items to cart
    Given I have already added 5 unicorn items
    And I have already added 10 chair items
    And I have selected water-can
    And I have entered quantity of 3
    When I click add to cart button
    Then I should see 3 in cart
    And I should see 5: unicorn in right column
    And I should see 10: chair in right column
    And I should see 3: water-can in right column
