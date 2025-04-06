Feature: Login functionality

  Scenario Outline: User logs in with different credentials
    Given user should navigate to the URL - Test <index>
    When user should enter the username - Test <index>
    When user should enter the password - Test <index>
    When user should click on login button - Test <index>
    Then user should be navigated to the home page - Test <index>

  Examples:
    | index |
    | 1     |
    | 2     |
    | 3     |
    | 4     |
    | 5     |


