Feature: Free CRM Login Feature


#without Examples Keyword
Scenario: Free CRM Login Test Scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "naveenk" and "test@123"
Then user clicks on login button
Then user is on home page
Then Close the browser

#with Examples Keyword
Scenario Outline: Free CRM Login Test Scenarioes

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then Close the browser


Examples:
	| username | password |
	| batchautomation  | Test@12345 |
	|  tom     | test456  | 
	
#Feature: Free CRM Create Contacts

Scenario Outline: Free CRM Create a new contact scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then user moves to new contact page
Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
Then Close the browser

Examples:
	| username | password | firstname | lastname | position |
	| batchautomation  | Test@12345 | Tom 	  | Peter    | Manager  |
	| batchautomation  | Test@12345 | David 	  | Dsouza   | Director |	

			
		
		