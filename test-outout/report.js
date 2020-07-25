$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Companies.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creationfor compinies",
  "description": "",
  "id": "deal-data-creationfor-compinies",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1891359,
  "status": "passed"
});
formatter.before({
  "duration": 856644,
  "status": "passed"
});
formatter.before({
  "duration": 1482457,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creationfor-compinies;free-crm-create-a-new-deal-scenario",
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
  "duration": 29195736271,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 287891856,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 2416789350,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefinition.click_on_companies_and_click_new_company()"
});
formatter.result({
  "duration": 22723188827,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefinition.complete_the_details()"
});
formatter.result({
  "duration": 8240015037,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2361403519,
  "status": "passed"
});
formatter.after({
  "duration": 1077217,
  "status": "passed"
});
formatter.after({
  "duration": 906475,
  "status": "passed"
});
formatter.after({
  "duration": 1011265,
  "status": "passed"
});
formatter.before({
  "duration": 1022257,
  "status": "passed"
});
formatter.before({
  "duration": 3998895,
  "status": "passed"
});
formatter.before({
  "duration": 1107262,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Free CRM Edit a new deal scenario",
  "description": "",
  "id": "deal-data-creationfor-compinies;free-crm-edit-a-new-deal-scenario",
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
  "duration": 13746538798,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 378008789,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 2086396502,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefinition.user_clicks_on_particular_company_and_edit_that()"
});
formatter.result({
  "duration": 24516997685,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefinition.save_the_company_details()"
});
formatter.result({
  "duration": 24785174264,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 5626378490,
  "status": "passed"
});
formatter.after({
  "duration": 435283,
  "status": "passed"
});
formatter.after({
  "duration": 181002,
  "status": "passed"
});
formatter.after({
  "duration": 167078,
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
  "duration": 251351,
  "status": "passed"
});
formatter.before({
  "duration": 209581,
  "status": "passed"
});
formatter.before({
  "duration": 271136,
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
  "duration": 19635617645,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 41286007,
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
  "duration": 2358631333,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 20207039726,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 36467107,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 9588871538,
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
  "duration": 11453159728,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1629077396,
  "status": "passed"
});
formatter.after({
  "duration": 226436,
  "status": "passed"
});
formatter.after({
  "duration": 795822,
  "status": "passed"
});
formatter.after({
  "duration": 898414,
  "status": "passed"
});
formatter.before({
  "duration": 754052,
  "status": "passed"
});
formatter.before({
  "duration": 2211593,
  "status": "passed"
});
formatter.before({
  "duration": 784097,
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
  "duration": 12125936245,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 55814519,
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
  "duration": 1937535312,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 12966897914,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 17330010,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 7081033865,
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
  "duration": 6656120684,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7685247324,
  "status": "passed"
});
formatter.after({
  "duration": 643399,
  "status": "passed"
});
formatter.after({
  "duration": 461664,
  "status": "passed"
});
formatter.after({
  "duration": 463863,
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
  "duration": 740862,
  "status": "passed"
});
formatter.before({
  "duration": 2235043,
  "status": "passed"
});
formatter.before({
  "duration": 715214,
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
  "duration": 19606376688,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 189692128,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 2538818300,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_clicks_on_login_button_d()"
});
formatter.result({
  "duration": 17766723800,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_is_on_hopme_page_d()"
});
formatter.result({
  "duration": 199842155,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 10486855382,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_enters_contacts_details(DataTable)"
});
formatter.result({
  "duration": 2239787868,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2184396908,
  "status": "passed"
});
formatter.after({
  "duration": 6499212,
  "status": "passed"
});
formatter.after({
  "duration": 490977,
  "status": "passed"
});
formatter.after({
  "duration": 203718,
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
  "duration": 236694,
  "status": "passed"
});
formatter.before({
  "duration": 208849,
  "status": "passed"
});
formatter.before({
  "duration": 823668,
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
  "duration": 26461570818,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 503700279,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.users_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 5584284936,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.users_clicks_on_login_buttoon()"
});
formatter.result({
  "duration": 16155310572,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.users_is_on_hopme_page()"
});
formatter.result({
  "duration": 24933553,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.users_moves_to_new_deals_page()"
});
formatter.result({
  "duration": 8675561161,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.users_enters_contacts_details(DataTable)"
});
formatter.result({
  "duration": 29465949303,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1481699394,
  "status": "passed"
});
formatter.after({
  "duration": 693963,
  "status": "passed"
});
formatter.after({
  "duration": 212512,
  "status": "passed"
});
formatter.after({
  "duration": 238160,
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
  "duration": 1193733,
  "status": "passed"
});
formatter.before({
  "duration": 545204,
  "status": "passed"
});
formatter.before({
  "duration": 216909,
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
  "duration": 194925,
  "status": "passed"
});
formatter.match({
  "location": "Hooks_StepDefinition.user_fills_the_deals_form()"
});
formatter.result({
  "duration": 174407,
  "status": "passed"
});
formatter.match({
  "location": "Hooks_StepDefinition.deal_is_created()"
});
formatter.result({
  "duration": 170743,
  "status": "passed"
});
formatter.after({
  "duration": 141431,
  "status": "passed"
});
formatter.after({
  "duration": 386186,
  "status": "passed"
});
formatter.after({
  "duration": 120179,
  "status": "passed"
});
formatter.before({
  "duration": 770173,
  "status": "passed"
});
formatter.before({
  "duration": 164148,
  "status": "passed"
});
formatter.before({
  "duration": 205917,
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
  "duration": 2775118,
  "status": "passed"
});
formatter.match({
  "location": "Hooks_StepDefinition.user_fills_the_contact_form()"
});
formatter.result({
  "duration": 222039,
  "status": "passed"
});
formatter.match({
  "location": "Hooks_StepDefinition.contact_is_created()"
});
formatter.result({
  "duration": 492442,
  "status": "passed"
});
formatter.after({
  "duration": 612621,
  "status": "passed"
});
formatter.after({
  "duration": 158285,
  "status": "passed"
});
formatter.after({
  "duration": 436750,
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
  "duration": 171475,
  "status": "passed"
});
formatter.before({
  "duration": 145827,
  "status": "passed"
});
formatter.before({
  "duration": 184666,
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
  "duration": 19310393975,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 86644189,
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
  "duration": 1598446316,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 10193631667,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 203238688,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1493994330,
  "status": "passed"
});
formatter.after({
  "duration": 135568,
  "status": "passed"
});
formatter.after({
  "duration": 128973,
  "status": "passed"
});
formatter.after({
  "duration": 432353,
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
  "duration": 725473,
  "status": "passed"
});
formatter.before({
  "duration": 639736,
  "status": "passed"
});
formatter.before({
  "duration": 669780,
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
  "duration": 13579257189,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 136362538,
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
  "duration": 1729016793,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 12554706891,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 22464014,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1266329920,
  "status": "passed"
});
formatter.after({
  "duration": 208115,
  "status": "passed"
});
formatter.after({
  "duration": 190528,
  "status": "passed"
});
formatter.after({
  "duration": 197856,
  "status": "passed"
});
formatter.before({
  "duration": 1156360,
  "status": "passed"
});
formatter.before({
  "duration": 1081614,
  "status": "passed"
});
formatter.before({
  "duration": 1139506,
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
  "duration": 12903306911,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 43850811,
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
  "duration": 1074870276,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 12882629466,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 277917702,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1459360690,
  "status": "passed"
});
formatter.after({
  "duration": 144362,
  "status": "passed"
});
formatter.after({
  "duration": 104058,
  "status": "passed"
});
formatter.after({
  "duration": 87203,
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
  "duration": 197857,
  "status": "passed"
});
formatter.before({
  "duration": 407438,
  "status": "passed"
});
formatter.before({
  "duration": 202986,
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
  "duration": 13320897213,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 66130891,
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
  "duration": 2278916510,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 11890450651,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 20640072,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 6173043623,
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
  "duration": 5885079952,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 3671255222,
  "status": "passed"
});
formatter.after({
  "duration": 477787,
  "status": "passed"
});
formatter.after({
  "duration": 385454,
  "status": "passed"
});
formatter.after({
  "duration": 365668,
  "status": "passed"
});
formatter.before({
  "duration": 653658,
  "status": "passed"
});
formatter.before({
  "duration": 530547,
  "status": "passed"
});
formatter.before({
  "duration": 597233,
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
  "duration": 13498765597,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 188884581,
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
  "duration": 2042917955,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 15592394845,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 111179832,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 10313520105,
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
  "duration": 8973482864,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1214281265,
  "status": "passed"
});
formatter.after({
  "duration": 236695,
  "status": "passed"
});
formatter.after({
  "duration": 670513,
  "status": "passed"
});
formatter.after({
  "duration": 999540,
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
  "duration": 303380,
  "status": "passed"
});
formatter.before({
  "duration": 171475,
  "status": "passed"
});
formatter.before({
  "duration": 158285,
  "status": "passed"
});
formatter.before({
  "duration": 440414,
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
  "duration": 482916,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_second_step()"
});
formatter.result({
  "duration": 192727,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_third_step()"
});
formatter.result({
  "duration": 499770,
  "status": "passed"
});
formatter.after({
  "duration": 155354,
  "status": "passed"
});
formatter.after({
  "duration": 112852,
  "status": "passed"
});
formatter.after({
  "duration": 419895,
  "status": "passed"
});
formatter.after({
  "duration": 491710,
  "status": "passed"
});
formatter.before({
  "duration": 705687,
  "status": "passed"
});
formatter.before({
  "duration": 600164,
  "status": "passed"
});
formatter.before({
  "duration": 161216,
  "status": "passed"
});
formatter.before({
  "duration": 233764,
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
  "duration": 831729,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_second_step()"
});
formatter.result({
  "duration": 435284,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_third_step()"
});
formatter.result({
  "duration": 415498,
  "status": "passed"
});
formatter.after({
  "duration": 484381,
  "status": "passed"
});
formatter.after({
  "duration": 442612,
  "status": "passed"
});
formatter.after({
  "duration": 443345,
  "status": "passed"
});
formatter.after({
  "duration": 441879,
  "status": "passed"
});
formatter.before({
  "duration": 5238794,
  "status": "passed"
});
formatter.before({
  "duration": 1594575,
  "status": "passed"
});
formatter.before({
  "duration": 1107262,
  "status": "passed"
});
formatter.before({
  "duration": 4236322,
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
  "duration": 441879,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_second_step()"
});
formatter.result({
  "duration": 438215,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_third_step()"
});
formatter.result({
  "duration": 455802,
  "status": "passed"
});
formatter.after({
  "duration": 490244,
  "status": "passed"
});
formatter.after({
  "duration": 1348354,
  "status": "passed"
});
formatter.after({
  "duration": 1287531,
  "status": "passed"
});
formatter.after({
  "duration": 1373269,
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
  "duration": 793623,
  "status": "passed"
});
formatter.before({
  "duration": 682238,
  "status": "passed"
});
formatter.before({
  "duration": 698359,
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
  "duration": 693230,
  "status": "passed"
});
formatter.after({
  "duration": 512961,
  "status": "passed"
});
formatter.after({
  "duration": 464596,
  "status": "passed"
});
formatter.after({
  "duration": 624347,
  "status": "passed"
});
formatter.before({
  "duration": 2546483,
  "status": "passed"
});
formatter.before({
  "duration": 647796,
  "status": "passed"
});
formatter.before({
  "duration": 647064,
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
  "duration": 507098,
  "status": "passed"
});
formatter.after({
  "duration": 422826,
  "status": "passed"
});
formatter.after({
  "duration": 405239,
  "status": "passed"
});
formatter.after({
  "duration": 447741,
  "status": "passed"
});
formatter.before({
  "duration": 707886,
  "status": "passed"
});
formatter.before({
  "duration": 584775,
  "status": "passed"
});
formatter.before({
  "duration": 2203532,
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
  "duration": 489511,
  "status": "passed"
});
formatter.after({
  "duration": 407438,
  "status": "passed"
});
formatter.after({
  "duration": 416964,
  "status": "passed"
});
formatter.after({
  "duration": 394979,
  "status": "passed"
});
formatter.before({
  "duration": 688100,
  "status": "passed"
});
formatter.before({
  "duration": 598699,
  "status": "passed"
});
formatter.before({
  "duration": 647064,
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
  "duration": 660987,
  "status": "passed"
});
formatter.after({
  "duration": 449207,
  "status": "passed"
});
formatter.after({
  "duration": 404506,
  "status": "passed"
});
formatter.after({
  "duration": 399376,
  "status": "passed"
});
formatter.before({
  "duration": 601630,
  "status": "passed"
});
formatter.before({
  "duration": 578180,
  "status": "passed"
});
formatter.before({
  "duration": 627278,
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
  "duration": 489511,
  "status": "passed"
});
formatter.after({
  "duration": 383988,
  "status": "passed"
});
formatter.after({
  "duration": 375927,
  "status": "passed"
});
formatter.after({
  "duration": 381790,
  "status": "passed"
});
formatter.before({
  "duration": 796554,
  "status": "passed"
});
formatter.before({
  "duration": 642666,
  "status": "passed"
});
formatter.before({
  "duration": 904277,
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
  "duration": 522487,
  "status": "passed"
});
formatter.after({
  "duration": 416964,
  "status": "passed"
});
formatter.after({
  "duration": 380324,
  "status": "passed"
});
formatter.after({
  "duration": 412567,
  "status": "passed"
});
formatter.before({
  "duration": 679307,
  "status": "passed"
});
formatter.before({
  "duration": 666849,
  "status": "passed"
});
formatter.before({
  "duration": 640468,
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
  "duration": 685169,
  "status": "passed"
});
formatter.after({
  "duration": 414032,
  "status": "passed"
});
formatter.after({
  "duration": 453604,
  "status": "passed"
});
formatter.after({
  "duration": 430154,
  "status": "passed"
});
formatter.before({
  "duration": 1535218,
  "status": "passed"
});
formatter.before({
  "duration": 219107,
  "status": "passed"
});
formatter.before({
  "duration": 148758,
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
  "duration": 187597,
  "status": "passed"
});
formatter.after({
  "duration": 90867,
  "status": "passed"
});
formatter.after({
  "duration": 112119,
  "status": "passed"
});
formatter.after({
  "duration": 88669,
  "status": "passed"
});
formatter.before({
  "duration": 155354,
  "status": "passed"
});
formatter.before({
  "duration": 106256,
  "status": "passed"
});
formatter.before({
  "duration": 174407,
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
  "duration": 200055,
  "status": "passed"
});
formatter.after({
  "duration": 132637,
  "status": "passed"
});
formatter.after({
  "duration": 115050,
  "status": "passed"
});
formatter.after({
  "duration": 103325,
  "status": "passed"
});
formatter.before({
  "duration": 156820,
  "status": "passed"
});
formatter.before({
  "duration": 142896,
  "status": "passed"
});
formatter.before({
  "duration": 160483,
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
  "duration": 208116,
  "status": "passed"
});
formatter.after({
  "duration": 112851,
  "status": "passed"
});
formatter.after({
  "duration": 119447,
  "status": "passed"
});
formatter.after({
  "duration": 101859,
  "status": "passed"
});
formatter.before({
  "duration": 159750,
  "status": "passed"
});
formatter.before({
  "duration": 139965,
  "status": "passed"
});
formatter.before({
  "duration": 167812,
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
  "duration": 219840,
  "status": "passed"
});
formatter.after({
  "duration": 115782,
  "status": "passed"
});
formatter.after({
  "duration": 95264,
  "status": "passed"
});
formatter.after({
  "duration": 111386,
  "status": "passed"
});
formatter.before({
  "duration": 620682,
  "status": "passed"
});
formatter.before({
  "duration": 131171,
  "status": "passed"
});
formatter.before({
  "duration": 165613,
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
  "duration": 206650,
  "status": "passed"
});
formatter.after({
  "duration": 101859,
  "status": "passed"
});
formatter.after({
  "duration": 105524,
  "status": "passed"
});
formatter.after({
  "duration": 104058,
  "status": "passed"
});
formatter.before({
  "duration": 195658,
  "status": "passed"
});
formatter.before({
  "duration": 131904,
  "status": "passed"
});
formatter.before({
  "duration": 158285,
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
  "duration": 208849,
  "status": "passed"
});
formatter.after({
  "duration": 194192,
  "status": "passed"
});
formatter.after({
  "duration": 177338,
  "status": "passed"
});
formatter.after({
  "duration": 100394,
  "status": "passed"
});
formatter.before({
  "duration": 160484,
  "status": "passed"
});
formatter.before({
  "duration": 115049,
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
  "duration": 208115,
  "status": "passed"
});
formatter.after({
  "duration": 109187,
  "status": "passed"
});
formatter.after({
  "duration": 152423,
  "status": "passed"
});
formatter.after({
  "duration": 87204,
  "status": "passed"
});
formatter.before({
  "duration": 138499,
  "status": "passed"
});
formatter.before({
  "duration": 95997,
  "status": "passed"
});
formatter.before({
  "duration": 158285,
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
  "duration": 205184,
  "status": "passed"
});
formatter.after({
  "duration": 105523,
  "status": "passed"
});
formatter.after({
  "duration": 105523,
  "status": "passed"
});
formatter.after({
  "duration": 101127,
  "status": "passed"
});
formatter.before({
  "duration": 158285,
  "status": "passed"
});
formatter.before({
  "duration": 139965,
  "status": "passed"
});
formatter.before({
  "duration": 183200,
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
  "duration": 947511,
  "status": "passed"
});
formatter.after({
  "duration": 104057,
  "status": "passed"
});
formatter.after({
  "duration": 107722,
  "status": "passed"
});
formatter.after({
  "duration": 106989,
  "status": "passed"
});
formatter.before({
  "duration": 159750,
  "status": "passed"
});
formatter.before({
  "duration": 131905,
  "status": "passed"
});
formatter.before({
  "duration": 161216,
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
  "duration": 288723,
  "status": "passed"
});
formatter.after({
  "duration": 115050,
  "status": "passed"
});
formatter.after({
  "duration": 101859,
  "status": "passed"
});
formatter.after({
  "duration": 115050,
  "status": "passed"
});
formatter.before({
  "duration": 142164,
  "status": "passed"
});
formatter.before({
  "duration": 96730,
  "status": "passed"
});
formatter.before({
  "duration": 136301,
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
  "duration": 200055,
  "status": "passed"
});
formatter.after({
  "duration": 109920,
  "status": "passed"
});
formatter.after({
  "duration": 105523,
  "status": "passed"
});
formatter.after({
  "duration": 111385,
  "status": "passed"
});
});