Feature: home page
  In order to evaluate your layout skills
  As a grader
  I need to see some wicked laying out

  Scenario: check main image
    Given I am on home page
    Then I see hero image 2 with width of 960 pixels and height of 450 pixels

  Scenario: check nav Logo
    Given I am on home page
    Then I see nav image 1 with width of 200 pixels and height of 70 pixels

  Scenario: check nav items
    Given I am on home page
    Then I see "Nav Item 1"
    And I see "Nav Item 2"
    And I see "Nav Item 3"
    And I see "Nav Item 4"

  Scenario: check smaller list images
    Given I am on home page
    Then I see list image 3 with width of 300 pixels and height of 375 pixels
    And I see list image 4 with width of 300 pixels and height of 375 pixels
    And I see list image 5 with width of 300 pixels and height of 375 pixels
