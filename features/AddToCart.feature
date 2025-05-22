Feature: SauceDemo E2E Flow

  Scenario Outline: User logs in, adds an item to cart, and removes it
    Given the user is on the login page
    When the user logs in using "<username>" and "<password>"
    Then the user should be redirected to the inventory page

    When the user adds "<item>" to the cart
    And navigates to the cart page
    Then the cart should display "<item>"

    When the user removes "<item>" from the cart
    Then the cart should be empty

  Examples:
    | username      | password     | item                   |
    | standard_user | secret_sauce | Sauce Labs Backpack    |
    | standard_user | secret_sauce | Sauce Labs Bike Light  |
