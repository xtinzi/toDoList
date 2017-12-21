Feature: Deleting multiple items from list
  Try deleting remaining items from the list to see if it works
  
  Scenario: delete multiple items from the list
    When I delete remaning items from the list
    Then Remaining items should be removed from the list

