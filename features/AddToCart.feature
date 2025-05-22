Feature: Add To Cart functionality on Sauce Demo

  Background:
    Given User is on the login page
    When User logs in with username "standard_user" and password "secret_sauce"

  Scenario Outline: Add product to cart
    When User adds "<product>" to the cart
    Then The cart should contain "<product>"

    Examples:
      | product              |
      | Sauce Labs Backpack |
