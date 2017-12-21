Feature: Deleting multiple items from list
  Try deleting multiple items from the list to see if it works
  
  Scenario: delete multiple items from the list
    When I delete multiple items from the list
    Then Items should be removed from the list

