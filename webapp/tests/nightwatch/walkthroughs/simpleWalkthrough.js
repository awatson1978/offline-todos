// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  tags: ['layout'],
  "Layout & Static Pages" : function (client) {
    client
      .url("http://localhost:3000/entrySignUp")
      .resizeWindow(1024, 768)

      //============================================================================================
      .sectionBreak("A. Sign In Page")

      .waitForPage("#entrySignUp")
      .saveScreenshot("tests/nightwatch/screenshots/ipad/A-signInPage.png")
      .reviewSignUpPage()
      .verify.elementNotPresent("#logoutButton")
      .signUp("janedoe@gmail.com", "janedoe123")


      //============================================================================================
      .sectionBreak("B. Home Page")

      .waitForPage("#checklistPage")
      .reviewMainLayout()
      .reviewSidebar()


      //============================================================================================
      .sectionBreak("C. Static Pages")

      .click("#aboutButton")
      .waitForPage("#aboutPage")

      .click("#eulaButton")
      .waitForPage("#eulaPage")

      .click("#privacyButton")
      .waitForPage("#privacyPage")

      .verify.elementPresent("#logoutButton")
      .verify.elementPresent("#logoutButton")
      .click("#logoutButton").pause(300)
      .verify.containsText("#usernameLink", "Sign In")
      .verify.elementNotPresent("#logoutButton")

      .dropEntryUsers()
      .end();
  }
};
