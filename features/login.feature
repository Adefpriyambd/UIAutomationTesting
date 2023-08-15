@login
Feature: Testing the login functionality in kasirAja

    Background:
        Given The user is on the login page

    Scenario: The user wants to negative test
        When The user inputs its email "<email>" and password "<password>"
        And The user clicks on button login
        Then The user should see error message

        Examples:
            | email             | password    | 
            | jaya45@mail.com   | 125         | 
            |                   | 12345       |
            | jaya45@mail.com   |             | 
            | jaya45@mailcom    | 12345       | 
            |                   |             | 

    Scenario: The user wants to positive test
        When The user inputs its email "<email>" and password "<password>"
        And The user clicks on button login
        Then The user should redirected to dashboard page

        Examples:
            | email           | password    | 
            | jaya45@mail.com | 12345       | 