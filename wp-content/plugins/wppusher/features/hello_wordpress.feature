Feature: Accessing WordPress site
  As a WordPress developer
  In order to know if this is working
  It would be pretty awesome if I could have Mink visit the homepage

  Scenario: Visiting the homepage
    Given I am on homepage
    Then I should see "Proudly powered by WordPress"
