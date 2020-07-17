package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import com.qa.base.BaseUtil;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CompaniesStepDefinition extends BaseUtil {

	/*@Given("^user is already on Login Page$")
	 public void user_already_on_login_page(){
		 driver = initializeDriver();
		 driver.get("https://classic.crmpro.com");
	 }
	@When("^title of login page is Free CRM$")
	 public void title_of_login_page_is_Free_CRM(){
	 String title = driver.getTitle();
	 System.out.println(title);
	// Assert.assertEquals("#1 Free CRM for Any Business: Online Customer Relationship Software", title);
	 }
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	 public void user_enters_username_and_password(String username, String password){
	 driver.findElement(By.name("username")).sendKeys(username);
	 driver.findElement(By.name("password")).sendKeys(password);
	 }
	*/
	@Then("^click on companies and click new company$")
	public void click_on_companies_and_click_new_company() {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@value='Login']"));
		loginBtn.click();
	    driver.switchTo().frame("mainpanel");
	    Actions action = new Actions(driver);
	    action.moveToElement(driver.findElement(By.xpath("//a[text()='Companies']"))).build().perform();
	    driver.findElement(By.xpath("//a[text()='New Company']")).click();
	}

	@Then("^complete the details$")
	public void complete_the_details()  {
	    driver.findElement(By.xpath("//input[@id='company_name']")).sendKeys("Sriram");
	    driver.findElement(By.xpath("//input[@name='industry']")).sendKeys("kallam");
	    Select se = new Select(driver.findElement(By.name("status")));
	    se.selectByValue("New");
	    driver.findElement(By.xpath("//form[@id='companyForm']//tbody/tr/td/input[@value='Save']")).click();
	}
	
	/*-- Edit the company  --*/
	
	@Then("^user clicks on particular company and edit that$")
	public void user_clicks_on_particular_company_and_edit_that() {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@value='Login']"));
		loginBtn.click();
	    driver.switchTo().frame("mainpanel");
	    Actions action = new Actions(driver);
	    action.moveToElement(driver.findElement(By.xpath("//a[text()='Companies']"))).build().perform();
	    driver.findElement(By.xpath("//a[@title='Full Search Form' and text()='Full Search Form']")).click();
	}

	@Then("^save the company details$")
	public void save_the_company_details() {
	    driver.findElement(By.xpath("//input[@id='cs_name']")).sendKeys("%Sriram%");
	    driver.findElement(By.xpath("//input[@value='Search Companies'][1]")).click();
	    driver.findElement(By.xpath("//a[text()='Sriram']//parent::td[@class='datalistrow']//preceding-sibling::td[@class='datalistrow']//input[@type='checkbox']")).click();
	    driver.findElement(By.xpath("//a[text()='Sriram']//parent::td[@class='datalistrow']//following-sibling::td[3][@class='datalistrow']/a/i[@title='Edit']")).click();
	    driver.findElement(By.xpath("//input[@id='phone']")).clear();
	    driver.findElement(By.xpath("//input[@id='phone']")).sendKeys("7989694823");
	    driver.findElement(By.xpath("//form[@id='companyForm']/table/tbody/tr[1]/td//input[@type='submit']")).click();
	    
	    
	}

	
}
