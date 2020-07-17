package com.qa.base;

//import com.aventstack.extentreports.ExtentReports;
//import com.aventstack.extentreports.ExtentTest;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

/**
 * Created by Karthik on 21/09/2019.
 */

public class BaseUtil {

    public static WebDriver driver;

    public WebDriver initializeDriver(){
    	
    	System.setProperty("webdriver.chrome.driver","C:\\chromedriver.exe");
		 driver = new ChromeDriver();
		return driver;
    	
    }
   // public ExtentReports extent;

   // public static ExtentTest scenarioDef;

   // public static ExtentTest features;

    public static String reportLocation = "C:\\Users\\karth\\report";

}