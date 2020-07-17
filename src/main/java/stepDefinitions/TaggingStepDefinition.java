package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

public class TaggingStepDefinition {
//	@Before
//    public void beforeScenario(){
//        System.out.println("This will run before the Scenario");
//    }	
//	
//	@After
//    public void afterScenario(){
//        System.out.println("This will run after the Scenario");
//    }
	
	@Given("^This is a valid login test$")
	public void this_is_a_valid_login_test() {
		System.out.println("1");
	}

	@Given("^This is a invalid login test$")
	public void this_is_a_invalid_login_test() {
		System.out.println("2");
	}

	@Given("^This is a contact test case$")
	public void this_is_a_contact_test_case(){
		System.out.println("3");
	}

	@Given("^This is a deal test case$")
	public void this_is_a_deal_test_case(){
		System.out.println("4");
	}

	@Given("^This is a tasks test case$")
	public void this_is_a_tasks_test_case() throws Throwable {
		System.out.println("5");
	}

	@Given("^This is a case test case$")
	public void this_is_a_case_test_case() throws Throwable {
		System.out.println("6");
	}

	@Given("^clicking on left panel links$")
	public void clicking_on_left_panel_links() throws Throwable {
		System.out.println("7");
	}

	@Given("^This is a search deal test$")
	public void this_is_a_search_deal_test() throws Throwable {
		System.out.println("8");
	}

	@Given("^This is a search contact test$")
	public void this_is_a_search_contact_test() throws Throwable {
		System.out.println("9");
	}

	@Given("^This is a search case test$")
	public void this_is_a_search_case_test() throws Throwable {
		System.out.println("10");
	}

	@Given("^This is a search task test$")
	public void this_is_a_search_task_test() throws Throwable {
		System.out.println("11");
	}

	@Given("^This is a search call test$")
	public void this_is_a_search_call_test() throws Throwable {
		System.out.println("12");
	}

	@Given("^This is a search email test$")
	public void this_is_a_search_email_test() throws Throwable {
		System.out.println("13");
	}

	@Given("^This is a search docs test$")
	public void this_is_a_search_docs_test() throws Throwable {
		System.out.println("14");
	}

	@Given("^This is a search forms test$")
	public void this_is_a_search_forms_test() throws Throwable {
		System.out.println("15");
	}

	@Given("^This is a report test$")
	public void this_is_a_report_test() throws Throwable {
		System.out.println("16");
	}

	@Given("^This is a logout test$")
	public void this_is_a_logout_test() throws Throwable {
		System.out.println("17");
	}
	
	@Given("^This is a close broswer test$")
	public void this_is_a_close_broswer_test() throws Throwable {
		System.out.println("18");
	}
	

}
