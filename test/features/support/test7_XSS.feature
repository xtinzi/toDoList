Feature: Adding Item to list
  Try adding an item to the list to see if it works
  
  Scenario: add a new item to the list
    When I add Item to the list to expose XSS vulnerability
    Then Alert must not pop up

