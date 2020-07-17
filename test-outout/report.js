$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Companies.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3141518,
  "status": "passed"
});
formatter.before({
  "duration": 301914,
  "status": "passed"
});
formatter.before({
  "duration": 553997,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "batchautomation",
        "Test@12345"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on companies and click new company",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "complete the details",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 50167624559,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 379335892,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 3701670860,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefinition.click_on_companies_and_click_new_company()"
});
formatter.result({
  "duration": 30836564864,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefinition.complete_the_details()"
});
formatter.result({
  "duration": 8134788480,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 4550735842,
  "status": "passed"
});
formatter.after({
  "duration": 244756,
  "status": "passed"
});
formatter.after({
  "duration": 349546,
  "status": "passed"
});
formatter.after({
  "duration": 290189,
  "status": "passed"
});
formatter.before({
  "duration": 2522301,
  "status": "passed"
});
formatter.before({
  "duration": 283594,
  "status": "passed"
});
formatter.before({
  "duration": 9870830,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Free CRM Edit a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-edit-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "batchautomation",
        "Test@12345"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on particular company and edit that",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "save the company details",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 19053567019,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 363752146,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 3055885601,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefinition.user_clicks_on_particular_company_and_edit_that()"
});
formatter.result({
  "duration": 25887264432,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefinition.save_the_company_details()"
});
formatter.result({
  "duration": 22844693092,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1690879633,
  "status": "passed"
});
formatter.after({
  "duration": 191994,
  "status": "passed"
});
formatter.after({
  "duration": 160483,
  "status": "passed"
});
formatter.after({
  "duration": 167811,
  "status": "passed"
});
formatter.uri("contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345",
        "Tom",
        "Peter",
        "Manager"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345",
        "David",
        "Dsouza",
        "Director"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 282128,
  "status": "passed"
});
formatter.before({
  "duration": 279930,
  "status": "passed"
});
formatter.before({
  "duration": 2184480,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"batchautomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Tom\" and \"Peter\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 19779484064,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 302983160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batchautomation",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 3719821607,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 25828744412,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 56753970,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 9211969278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 29
    },
    {
      "val": "Peter",
      "offset": 39
    },
    {
      "val": "Manager",
      "offset": 51
    }
  ],
  "location": "LoginStepDefinition.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "duration": 16520125280,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 3605056180,
  "status": "passed"
});
formatter.after({
  "duration": 182467,
  "status": "passed"
});
formatter.after({
  "duration": 240359,
  "status": "passed"
});
formatter.after({
  "duration": 213978,
  "status": "passed"
});
formatter.before({
  "duration": 255015,
  "status": "passed"
});
formatter.before({
  "duration": 1068424,
  "status": "passed"
});
formatter.before({
  "duration": 287991,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"batchautomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"David\" and \"Dsouza\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 21378658784,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 114528732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batchautomation",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 3441382883,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 16375936428,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 30048504,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 9326325802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 29
    },
    {
      "val": "Dsouza",
      "offset": 41
    },
    {
      "val": "Director",
      "offset": 54
    }
  ],
  "location": "LoginStepDefinition.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "duration": 9177479267,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2114580028,
  "status": "passed"
});
formatter.after({
  "duration": 241825,
  "status": "passed"
});
formatter.after({
  "duration": 159751,
  "status": "passed"
});
formatter.after({
  "duration": 150957,
  "status": "passed"
});
formatter.uri("deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 223504,
  "status": "passed"
});
formatter.before({
  "duration": 185399,
  "status": "passed"
});
formatter.before({
  "duration": 225702,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page_d",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "batchautomation",
        "Test@12345"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button_d",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page_d",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefnition.user_already_on_login_page_d()"
});
formatter.result({
  "duration": 20169943142,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 235870314,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 2174298911,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_clicks_on_login_button_d()"
});
formatter.result({
  "duration": 27483312290,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_is_on_hopme_page_d()"
});
formatter.result({
  "duration": 123366312,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 6398075811,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: chrome\u003d83.0.4103.116)\n  (Driver info: chromedriver\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027COMPUTER\u0027, ip: \u0027192.168.43.18\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591088 (7b2b2dca23cca0..., userDataDir: C:\\Users\\COMPUT~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:3564}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 83.0.4103.116, webStorageEnabled: true}\nSession ID: 736200f699531c0d0f6351993a24f610\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat stepDefinitions.DealStepDefnition.user_moves_to_new_contact_page(DealStepDefnition.java:71)\r\n\tat ✽.Then user moves to new deal page(deals.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DealStepDefnition.user_enters_contacts_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 220573,
  "status": "passed"
});
formatter.after({
  "duration": 209581,
  "status": "passed"
});
formatter.after({
  "duration": 976091,
  "status": "passed"
});
formatter.uri("dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 331226,
  "status": "passed"
});
formatter.before({
  "duration": 197856,
  "status": "passed"
});
formatter.before({
  "duration": 246954,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page_",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "users enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "users clicks on login buttoon",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "users is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "users moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "users enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "60",
        "20"
      ],
      "line": 17
    },
    {
      "cells": [
        "test deal3",
        "3000",
        "70",
        "30"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_already_on_login_page_()"
});
formatter.result({
  "duration": 55599248000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 516772715,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.users_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 4867244309,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.users_clicks_on_login_buttoon()"
});
formatter.result({
  "duration": 35786009657,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.users_is_on_hopme_page()"
});
formatter.result({
  "duration": 20824006,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.users_moves_to_new_deals_page()"
});
formatter.result({
  "duration": 7499598792,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.users_enters_contacts_details(DataTable)"
});
formatter.result({
  "duration": 85645633569,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 11173349201,
  "status": "passed"
});
formatter.after({
  "duration": 795822,
  "status": "passed"
});
formatter.after({
  "duration": 122378,
  "status": "passed"
});
formatter.after({
  "duration": 292388,
  "status": "passed"
});
formatter.uri("hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM app test",
  "description": "",
  "id": "free-crm-app-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 206650,
  "status": "passed"
});
formatter.before({
  "duration": 200788,
  "status": "passed"
});
formatter.before({
  "duration": 222771,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "free crm create deal test",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-deal-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on deal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user fills the deals form",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "deal is created",
  "keyword": "Then "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_is_on_deal_oage()"
});
formatter.result({
  "duration": 165613,
  "status": "passed"
});
formatter.match({
  "location": "Hooks_StepDefinition.user_fills_the_deals_form()"
});
formatter.result({
  "duration": 534945,
  "status": "passed"
});
formatter.match({
  "location": "Hooks_StepDefinition.deal_is_created()"
});
formatter.result({
  "duration": 941649,
  "status": "passed"
});
formatter.after({
  "duration": 990014,
  "status": "passed"
});
formatter.after({
  "duration": 1438488,
  "status": "passed"
});
formatter.after({
  "duration": 474855,
  "status": "passed"
});
formatter.before({
  "duration": 807546,
  "status": "passed"
});
formatter.before({
  "duration": 713748,
  "status": "passed"
});
formatter.before({
  "duration": 835393,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "free crm create contact test",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-contact-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user is on contact page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user fills the contact form",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "contact is created",
  "keyword": "Then "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_is_on_contact_page()"
});
formatter.result({
  "duration": 948977,
  "status": "passed"
});
formatter.match({
  "location": "Hooks_StepDefinition.user_fills_the_contact_form()"
});
formatter.result({
  "duration": 220573,
  "status": "passed"
});
formatter.match({
  "location": "Hooks_StepDefinition.contact_is_created()"
});
formatter.result({
  "duration": 206650,
  "status": "passed"
});
formatter.after({
  "duration": 132637,
  "status": "passed"
});
formatter.after({
  "duration": 837592,
  "status": "passed"
});
formatter.after({
  "duration": 177338,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 346615,
  "status": "passed"
});
formatter.before({
  "duration": 146560,
  "status": "passed"
});
formatter.before({
  "duration": 230832,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#without Examples Keyword"
    }
  ],
  "line": 5,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 85402102552,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 153606810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 2486305782,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 22324718037,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 250214894,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 40491625184,
  "status": "passed"
});
formatter.after({
  "duration": 711550,
  "status": "passed"
});
formatter.after({
  "duration": 632407,
  "status": "passed"
});
formatter.after({
  "duration": 131904,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 14,
      "value": "#with Examples Keyword"
    }
  ],
  "line": 15,
  "name": "Free CRM Login Test Scenarioes",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenarioes",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenarioes;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 26,
      "id": "free-crm-login-feature;free-crm-login-test-scenarioes;;1"
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345"
      ],
      "line": 27,
      "id": "free-crm-login-feature;free-crm-login-test-scenarioes;;2"
    },
    {
      "cells": [
        "tom",
        "test456"
      ],
      "line": 28,
      "id": "free-crm-login-feature;free-crm-login-test-scenarioes;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 756983,
  "status": "passed"
});
formatter.before({
  "duration": 213978,
  "status": "passed"
});
formatter.before({
  "duration": 868370,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Free CRM Login Test Scenarioes",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenarioes;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"batchautomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 29627804521,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 62587799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batchautomation",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1594094943,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 44537448695,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 25033214,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 11293790904,
  "status": "passed"
});
formatter.after({
  "duration": 1627551,
  "status": "passed"
});
formatter.after({
  "duration": 142896,
  "status": "passed"
});
formatter.after({
  "duration": 119447,
  "status": "passed"
});
formatter.before({
  "duration": 198589,
  "status": "passed"
});
formatter.before({
  "duration": 780433,
  "status": "passed"
});
formatter.before({
  "duration": 887422,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Free CRM Login Test Scenarioes",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenarioes;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"tom\" and \"test456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 27789077895,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 73139400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "test456",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 2347104374,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 22054845756,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 464549653,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 5680972163,
  "status": "passed"
});
formatter.after({
  "duration": 628743,
  "status": "passed"
});
formatter.after({
  "duration": 331959,
  "status": "passed"
});
formatter.after({
  "duration": 109921,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 30,
      "value": "#Feature: Free CRM Create Contacts"
    }
  ],
  "line": 32,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 44,
      "id": "free-crm-login-feature;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345",
        "Tom",
        "Peter",
        "Manager"
      ],
      "line": 45,
      "id": "free-crm-login-feature;free-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345",
        "David",
        "Dsouza",
        "Director"
      ],
      "line": 46,
      "id": "free-crm-login-feature;free-crm-create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1240632,
  "status": "passed"
});
formatter.before({
  "duration": 274800,
  "status": "passed"
});
formatter.before({
  "duration": 205917,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user enters \"batchautomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user enters contact details \"Tom\" and \"Peter\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 27419444288,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 85688617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batchautomation",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 3706885471,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 27295951934,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 35847891,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 9648871817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 29
    },
    {
      "val": "Peter",
      "offset": 39
    },
    {
      "val": "Manager",
      "offset": 51
    }
  ],
  "location": "LoginStepDefinition.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "duration": 12328324883,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 3054639107,
  "status": "passed"
});
formatter.after({
  "duration": 128240,
  "status": "passed"
});
formatter.after({
  "duration": 170010,
  "status": "passed"
});
formatter.after({
  "duration": 110653,
  "status": "passed"
});
formatter.before({
  "duration": 197856,
  "status": "passed"
});
formatter.before({
  "duration": 142896,
  "status": "passed"
});
formatter.before({
  "duration": 201520,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user enters \"batchautomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user enters contact details \"David\" and \"Dsouza\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 23477323107,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 96974485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batchautomation",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 2591215769,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 17788858054,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 82142593,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 12436135295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 29
    },
    {
      "val": "Dsouza",
      "offset": 41
    },
    {
      "val": "Director",
      "offset": 54
    }
  ],
  "location": "LoginStepDefinition.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "duration": 12631578446,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 31878549230,
  "status": "passed"
});
formatter.after({
  "duration": 128241,
  "status": "passed"
});
formatter.after({
  "duration": 132637,
  "status": "passed"
});
formatter.after({
  "duration": 152422,
  "status": "passed"
});
formatter.uri("taggedhooks.feature");
formatter.feature({
  "line": 1,
  "name": "Test Tagged Hooks",
  "description": "",
  "id": "test-tagged-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 194925,
  "status": "passed"
});
formatter.before({
  "duration": 141431,
  "status": "passed"
});
formatter.before({
  "duration": 174407,
  "status": "passed"
});
formatter.before({
  "duration": 197856,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "This is First test",
  "description": "",
  "id": "test-tagged-hooks;this-is-first-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "this is the first step",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "this is the second step",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "this is the third step",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_first_step()"
});
formatter.result({
  "duration": 299716,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_second_step()"
});
formatter.result({
  "duration": 161216,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_third_step()"
});
formatter.result({
  "duration": 176605,
  "status": "passed"
});
formatter.after({
  "duration": 184666,
  "status": "passed"
});
formatter.after({
  "duration": 122378,
  "status": "passed"
});
formatter.after({
  "duration": 394247,
  "status": "passed"
});
formatter.after({
  "duration": 124576,
  "status": "passed"
});
formatter.before({
  "duration": 391315,
  "status": "passed"
});
formatter.before({
  "duration": 160484,
  "status": "passed"
});
formatter.before({
  "duration": 169277,
  "status": "passed"
});
formatter.before({
  "duration": 1463404,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "This is Second test",
  "description": "",
  "id": "test-tagged-hooks;this-is-second-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "this is the first step",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "this is the second step",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "this is the third step",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_first_step()"
});
formatter.result({
  "duration": 124576,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_second_step()"
});
formatter.result({
  "duration": 134103,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_third_step()"
});
formatter.result({
  "duration": 283594,
  "status": "passed"
});
formatter.after({
  "duration": 143629,
  "status": "passed"
});
formatter.after({
  "duration": 110653,
  "status": "passed"
});
formatter.after({
  "duration": 806081,
  "status": "passed"
});
formatter.after({
  "duration": 98195,
  "status": "passed"
});
formatter.before({
  "duration": 1875238,
  "status": "passed"
});
formatter.before({
  "duration": 1070623,
  "status": "passed"
});
formatter.before({
  "duration": 160483,
  "status": "passed"
});
formatter.before({
  "duration": 3391402,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "This is Third test",
  "description": "",
  "id": "test-tagged-hooks;this-is-third-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Third"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "this is the first step",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "this is the second step",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "this is the third step",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_first_step()"
});
formatter.result({
  "duration": 142896,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_second_step()"
});
formatter.result({
  "duration": 180269,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_third_step()"
});
formatter.result({
  "duration": 123111,
  "status": "passed"
});
formatter.after({
  "duration": 180269,
  "status": "passed"
});
formatter.after({
  "duration": 1752127,
  "status": "passed"
});
formatter.after({
  "duration": 1009067,
  "status": "passed"
});
formatter.after({
  "duration": 1655398,
  "status": "passed"
});
formatter.uri("tagging.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM application testing",
  "description": "",
  "id": "free-crm-application-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "duration": 349546,
  "status": "passed"
});
formatter.before({
  "duration": 496106,
  "status": "passed"
});
formatter.before({
  "duration": 274727820,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login with correct username and correct password",
  "description": "",
  "id": "free-crm-application-testing;login-with-correct-username-and-correct-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "This is a valid login test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_valid_login_test()"
});
formatter.result({
  "duration": 20715551,
  "status": "passed"
});
formatter.after({
  "duration": 144362,
  "status": "passed"
});
formatter.after({
  "duration": 137034,
  "status": "passed"
});
formatter.after({
  "duration": 154621,
  "status": "passed"
});
formatter.before({
  "duration": 33246447,
  "status": "passed"
});
formatter.before({
  "duration": 151690,
  "status": "passed"
});
formatter.before({
  "duration": 8719599,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login with incorrect username and correct password",
  "description": "",
  "id": "free-crm-application-testing;login-with-incorrect-username-and-correct-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "This is a invalid login test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_invalid_login_test()"
});
formatter.result({
  "duration": 279930,
  "status": "passed"
});
formatter.after({
  "duration": 90867,
  "status": "passed"
});
formatter.after({
  "duration": 93065,
  "status": "passed"
});
formatter.after({
  "duration": 85737,
  "status": "passed"
});
formatter.before({
  "duration": 159018,
  "status": "passed"
});
formatter.before({
  "duration": 119346165,
  "status": "passed"
});
formatter.before({
  "duration": 18582367,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create a contact",
  "description": "",
  "id": "free-crm-application-testing;create-a-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "This is a contact test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_contact_test_case()"
});
formatter.result({
  "duration": 11982762,
  "status": "passed"
});
formatter.after({
  "duration": 90135,
  "status": "passed"
});
formatter.after({
  "duration": 107722,
  "status": "passed"
});
formatter.after({
  "duration": 86470,
  "status": "passed"
});
formatter.before({
  "duration": 53276097,
  "status": "passed"
});
formatter.before({
  "duration": 211046,
  "status": "passed"
});
formatter.before({
  "duration": 899113824,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Create a deal",
  "description": "",
  "id": "free-crm-application-testing;create-a-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@SmokeTest"
    },
    {
      "line": 16,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "This is a deal test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_deal_test_case()"
});
formatter.result({
  "duration": 281396,
  "status": "passed"
});
formatter.after({
  "duration": 98928,
  "status": "passed"
});
formatter.after({
  "duration": 98928,
  "status": "passed"
});
formatter.after({
  "duration": 96729,
  "status": "passed"
});
formatter.before({
  "duration": 162682,
  "status": "passed"
});
formatter.before({
  "duration": 157553,
  "status": "passed"
});
formatter.before({
  "duration": 388384,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Create a tasks",
  "description": "",
  "id": "free-crm-application-testing;create-a-tasks",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "This is a tasks test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_tasks_test_case()"
});
formatter.result({
  "duration": 202986,
  "status": "passed"
});
formatter.after({
  "duration": 104058,
  "status": "passed"
});
formatter.after({
  "duration": 95264,
  "status": "passed"
});
formatter.after({
  "duration": 147293,
  "status": "passed"
});
formatter.before({
  "duration": 173674,
  "status": "passed"
});
formatter.before({
  "duration": 118714,
  "status": "passed"
});
formatter.before({
  "duration": 172208,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Create a case",
  "description": "",
  "id": "free-crm-application-testing;create-a-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "This is a case test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_case_test_case()"
});
formatter.result({
  "duration": 214711,
  "status": "passed"
});
formatter.after({
  "duration": 121645,
  "status": "passed"
});
formatter.after({
  "duration": 260877,
  "status": "passed"
});
formatter.after({
  "duration": 181002,
  "status": "passed"
});
formatter.before({
  "duration": 165613,
  "status": "passed"
});
formatter.before({
  "duration": 163415,
  "status": "passed"
});
formatter.before({
  "duration": 194192,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify left panel links",
  "description": "",
  "id": "free-crm-application-testing;verify-left-panel-links",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@SmokeTest"
    },
    {
      "line": 28,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "clicking on left panel links",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.clicking_on_left_panel_links()"
});
formatter.result({
  "duration": 241824,
  "status": "passed"
});
formatter.after({
  "duration": 338441933,
  "status": "passed"
});
formatter.after({
  "duration": 202986,
  "status": "passed"
});
formatter.after({
  "duration": 122378,
  "status": "passed"
});
formatter.before({
  "duration": 218374,
  "status": "passed"
});
formatter.before({
  "duration": 131171,
  "status": "passed"
});
formatter.before({
  "duration": 425024,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Search a deal",
  "description": "",
  "id": "free-crm-application-testing;search-a-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "This is a search deal test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_deal_test()"
});
formatter.result({
  "duration": 201521,
  "status": "passed"
});
formatter.after({
  "duration": 100393,
  "status": "passed"
});
formatter.after({
  "duration": 109920,
  "status": "passed"
});
formatter.after({
  "duration": 115049,
  "status": "passed"
});
formatter.before({
  "duration": 151690,
  "status": "passed"
});
formatter.before({
  "duration": 114317,
  "status": "passed"
});
formatter.before({
  "duration": 175873,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Search a contact",
  "description": "",
  "id": "free-crm-application-testing;search-a-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "This is a search contact test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_contact_test()"
});
formatter.result({
  "duration": 222039,
  "status": "passed"
});
formatter.after({
  "duration": 119446,
  "status": "passed"
});
formatter.after({
  "duration": 97463,
  "status": "passed"
});
formatter.after({
  "duration": 124576,
  "status": "passed"
});
formatter.before({
  "duration": 161216,
  "status": "passed"
});
formatter.before({
  "duration": 126042,
  "status": "passed"
});
formatter.before({
  "duration": 218375,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search a case",
  "description": "",
  "id": "free-crm-application-testing;search-a-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@SmokeTest"
    },
    {
      "line": 40,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "This is a search case test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_case_test()"
});
formatter.result({
  "duration": 197124,
  "status": "passed"
});
formatter.after({
  "duration": 106989,
  "status": "passed"
});
formatter.after({
  "duration": 110653,
  "status": "passed"
});
formatter.after({
  "duration": 106256,
  "status": "passed"
});
formatter.before({
  "duration": 229367,
  "status": "passed"
});
formatter.before({
  "duration": 120913,
  "status": "passed"
});
formatter.before({
  "duration": 195658,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Search a task",
  "description": "",
  "id": "free-crm-application-testing;search-a-task",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@SmokeTest"
    },
    {
      "line": 44,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "This is a search task test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_task_test()"
});
formatter.result({
  "duration": 233764,
  "status": "passed"
});
formatter.after({
  "duration": 129705,
  "status": "passed"
});
formatter.after({
  "duration": 148026,
  "status": "passed"
});
formatter.after({
  "duration": 115050,
  "status": "passed"
});
formatter.before({
  "duration": 274800,
  "status": "passed"
});
formatter.before({
  "duration": 128973,
  "status": "passed"
});
formatter.before({
  "duration": 196391,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Search a call",
  "description": "",
  "id": "free-crm-application-testing;search-a-call",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@SmokeTest"
    },
    {
      "line": 48,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "This is a search call test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_call_test()"
});
formatter.result({
  "duration": 219107,
  "status": "passed"
});
formatter.after({
  "duration": 194193,
  "status": "passed"
});
formatter.after({
  "duration": 115049,
  "status": "passed"
});
formatter.after({
  "duration": 101859,
  "status": "passed"
});
formatter.before({
  "duration": 214711,
  "status": "passed"
});
formatter.before({
  "duration": 146560,
  "status": "passed"
});
formatter.before({
  "duration": 136301,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Search an email",
  "description": "",
  "id": "free-crm-application-testing;search-an-email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@SmokeTest"
    },
    {
      "line": 52,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "This is a search email test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_email_test()"
});
formatter.result({
  "duration": 188330,
  "status": "passed"
});
formatter.after({
  "duration": 92333,
  "status": "passed"
});
formatter.after({
  "duration": 74013,
  "status": "passed"
});
formatter.after({
  "duration": 134103,
  "status": "passed"
});
formatter.before({
  "duration": 157552,
  "status": "passed"
});
formatter.before({
  "duration": 129706,
  "status": "passed"
});
formatter.before({
  "duration": 148758,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Search a docs",
  "description": "",
  "id": "free-crm-application-testing;search-a-docs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@SmokeTest"
    },
    {
      "line": 56,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "This is a search docs test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_docs_test()"
});
formatter.result({
  "duration": 213245,
  "status": "passed"
});
formatter.after({
  "duration": 106989,
  "status": "passed"
});
formatter.after({
  "duration": 106256,
  "status": "passed"
});
formatter.after({
  "duration": 246221,
  "status": "passed"
});
formatter.before({
  "duration": 227901,
  "status": "passed"
});
formatter.before({
  "duration": 98928,
  "status": "passed"
});
formatter.before({
  "duration": 165613,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Search a forms",
  "description": "",
  "id": "free-crm-application-testing;search-a-forms",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@SmokeTest"
    },
    {
      "line": 60,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "This is a search forms test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_forms_test()"
});
formatter.result({
  "duration": 276999,
  "status": "passed"
});
formatter.after({
  "duration": 110652,
  "status": "passed"
});
formatter.after({
  "duration": 107722,
  "status": "passed"
});
formatter.after({
  "duration": 107722,
  "status": "passed"
});
formatter.before({
  "duration": 168545,
  "status": "passed"
});
formatter.before({
  "duration": 129706,
  "status": "passed"
});
formatter.before({
  "duration": 238893,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "validate a report",
  "description": "",
  "id": "free-crm-application-testing;validate-a-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 64,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "This is a report test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_report_test()"
});
formatter.result({
  "duration": 1129979,
  "status": "passed"
});
formatter.after({
  "duration": 109920,
  "status": "passed"
});
formatter.after({
  "duration": 103325,
  "status": "passed"
});
formatter.after({
  "duration": 115049,
  "status": "passed"
});
formatter.before({
  "duration": 155354,
  "status": "passed"
});
formatter.before({
  "duration": 120912,
  "status": "passed"
});
formatter.before({
  "duration": 163414,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Application Logout",
  "description": "",
  "id": "free-crm-application-testing;application-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "This is a logout test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_logout_test()"
});
formatter.result({
  "duration": 266740,
  "status": "passed"
});
formatter.after({
  "duration": 90868,
  "status": "passed"
});
formatter.after({
  "duration": 68884,
  "status": "passed"
});
formatter.after({
  "duration": 87203,
  "status": "passed"
});
formatter.before({
  "duration": 135568,
  "status": "passed"
});
formatter.before({
  "duration": 95264,
  "status": "passed"
});
formatter.before({
  "duration": 172941,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "browser closed",
  "description": "",
  "id": "free-crm-application-testing;browser-closed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 73,
  "name": "This is a close broswer test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_close_broswer_test()"
});
formatter.result({
  "duration": 205185,
  "status": "passed"
});
formatter.after({
  "duration": 109920,
  "status": "passed"
});
formatter.after({
  "duration": 106256,
  "status": "passed"
});
formatter.after({
  "duration": 105523,
  "status": "passed"
});
});