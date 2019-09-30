//var canvasUserData = require ('../data/dataCanvasUsers.json');
var canvasLMS = require("../pages/page-CanvasLMS");
var sherpathInstructorHomepage = require('../pages/page-sherpathInstructorHome');
var protractor = require("protractor");

var commonFunctions = function () {
     this.launchUser = function(canvasUsername, canvasPassword, canvasCourseName) {
         browser.waitForAngularEnabled(false);
         browser.get('https://canvas.instructure.com/login/canvas').then(browser.driver.manage().window().maximize());
         canvasLMS.enterUsername(canvasUsername);
         canvasLMS.enterPassword(canvasPassword);
         canvasLMS.clickCanvasLoginBtn();
         canvasLMS.selectCourse(canvasCourseName);
         canvasLMS.clickExternalToolLink();
         canvasLMS.loadNewWindow();
         browser.getAllWindowHandles().then(function (handles) {
             var newWindowHandle = handles[1]; // this is your new window
             browser.switchTo().window(newWindowHandle);
                 // .then(function () {
                 //     browser.waitForAngularEnabled(true);
                 // });
         });
     };

     //Instructor is at Homepage
    this.isAtInstructorHomepage = function () {
        browser.wait(protractor.ExpectedConditions.visibilityOf(sherpathInstructorHomepage.instructor_Home_heading), 10000, "Instructor Homepage not loaded");
    }

    //Instructor is at Course Plan page
    this.isAtInstructorCoursePlanPage = function () {
        browser.wait(protractor.ExpectedConditions.visibilityOf(sherpathInstructorHomepage.instructorCoursePlanHeading), 10000, "Course Plan not loaded");
    }
}; module.exports = new commonFunctions();