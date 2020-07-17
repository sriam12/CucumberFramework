Feature: Deal data creation

Scenario: Free CRM Create a new deal scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters username and password
| batchautomation | Test@12345 |
Then click on companies and click new company
Then complete the details
Then Close the browser

Scenario: Free CRM Edit a new deal scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters username and password
| batchautomation | Test@12345 |
Then user clicks on particular company and edit that
Then save the company details
Then Close the browser