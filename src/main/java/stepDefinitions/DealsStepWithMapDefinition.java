package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import com.qa.base.BaseUtil;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

//data table with maps : for parameterization of test cases

public class DealsStepWithMapDefinition extends BaseUtil {

//	WebDriver driver;

	@Given("^user is already on Login Page_$")
	public void user_already_on_login_page_() {
		driver = initializeDriver();
		 driver.get("https://classic.crmpro.com");
		 driver.get("https://classic.crmpro.com");
	}

	/*@When("^title of login page is Free CRM_$")
	public void title_of_login_page_is_free_CRM_() {
		String title = driver.getTitle();
		System.out.println(title);
	//	Assert.assertEquals("#1 Free CRM for Any Business: Online Customer Relationship Software", title);
	}*/

	@Then("^users enters username and password$")
	public void users_enters_username_and_password(DataTable credentials) {
		for (Map<String, String> data : credentials.asMaps(String.class, String.class)) {

			driver.findElement(By.name("username")).sendKeys(data.get("username"));
			driver.findElement(By.name("password")).sendKeys(data.get("password"));

		}

	}

	@Then("^users clicks on login buttoon$")
	public void users_clicks_on_login_buttoon() {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginBtn);
	}

	@Then("^users is on home page$")
	public void users_is_on_hopme_page() {
		String title = driver.getTitle();
		System.out.println("Home Page title ::" + title);
	//	Assert.assertEquals("CRMPRO", title);
	}

	@Then("^users moves to new deal page$")
	public void users_moves_to_new_deals_page() {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();

	}

	@Then("^users enters deal details$")
	public void users_enters_contacts_details(DataTable dealData) {

		for (Map<String, String> data : dealData.asMaps(String.class, String.class)) {

			driver.findElement(By.id("title")).sendKeys(data.get("title"));
			driver.findElement(By.id("amount")).sendKeys(data.get("amount"));
			driver.findElement(By.id("probability")).sendKeys(data.get("probability"));
			driver.findElement(By.id("commission")).sendKeys(data.get("commission"));
			
			driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click(); //save button
			
			//move to new deal page:
			Actions action = new Actions(driver);
			action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
			driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();

		}

		
	}

	/*@Then("^Close the browsers$")
	public void close_the_browsers() {
		driver.quit();
	}*/

}
