Feature: Deal data creation

Scenario: Free CRM Create a new deal scenario

Given user is already on Login Page_d
When title of login page is Free CRM
Then user enters username and password
| batchautomation | Test@12345 |

Then user clicks on login button_d
Then user is on home page_d
Then user moves to new deal page
Then user enters deal details
| test deal | 1000 | 50 | 10 |

Then Close the browser