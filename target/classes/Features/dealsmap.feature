Feature: Deal data creation 

Scenario: Free CRM Create a new deal scenario 

	Given user is already on Login Page_ 
	When title of login page is Free CRM 
	Then users enters username and password 
		| username | password|
		| batchautomation | Test@12345 |
		
	Then users clicks on login buttoon 
	Then users is on home page 
	Then users moves to new deal page 
	Then users enters deal details 
		|title       | amount | probability | commission |
		| test deal1 | 1000 | 50 | 10 |
		| test deal2 | 2000 | 60 | 20 |
		| test deal3 | 3000 | 70 | 30 |
		
	Then Close the browser