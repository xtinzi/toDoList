Feature: Deleting Item from list
  Try deleting an item to the list to see if it works
  
  Scenario: delete a new item from the list
    When I delete Item from the list
    Then Item should be removed to list

