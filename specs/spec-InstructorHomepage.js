var decache = require( 'decache');
var canvasUserData = require ('../data/dataCanvasUsers.json');
var launchFromCanvas = require('./spec-SherpathLaunch');
var canvasLMS = require("../pages/page-CanvasLMS");
var commonFunctions = require('../utilities/commonFunctions.js')
var sherpathInstructorHomepage = require('../pages/page-sherpathInstructorHome');
var protractor = require("protractor");

    beforeEach(function () {
        canvasLMS = require('../pages/page-CanvasLMS.js');
        launchFromCanvas = require('./spec-SherpathLaunch');
        commonFunctions = require('../utilities/commonFunctions.js')
        sherpathInstructorHomepage = require('../pages/page-sherpathInstructorHome');
        console.log("--------RUNNING BEFOREEACH BLOCK-------");
    });
    afterEach(function() {
        decache('../pages/page-CanvasLMS.js');
        decache('../utilities/commonFunctions');
        decache('../pages/page-sherpathInstructorHome');
        console.log("--------RUNNING AFTEREACH BLOCK----ABOUT TO RESTART BROWSER---");
       // browser.restart();
    });

        describe('validate Instructor Left Navigation Menu', function () {
            it('should validate that on launch, existing instructor is taken to Sherpath Homepage', function () {
                commonFunctions.launchUser(canvasUserData.canvasExistingInstructor.username, canvasUserData.canvasExistingInstructor.password, canvasUserData.env.production.courseName);
                commonFunctions.isAtInstructorHomepage();
                commonFunctions.isAtInstructorHomepage();
                expect(browser.driver.getCurrentUrl()).toContain('https://eols.elsevier.com/#/instructorView');
            });


            it('should validate that instructor is able to click on the course plan tab on the left menu and navigate to the course plan, and then back to the home page', function () {
                commonFunctions.launchUser(canvasUserData.canvasExistingInstructor.username, canvasUserData.canvasExistingInstructor.password, canvasUserData.env.production.courseName);
                commonFunctions.isAtInstructorHomepage();
                browser.refresh(5000);
                commonFunctions.isAtInstructorHomepage();
                sherpathInstructorHomepage.clickCoursePlanLink();
                browser.refresh(5000);
                commonFunctions.isAtInstructorCoursePlanPage();
                sherpathInstructorHomepage.clickHomeLink();
                commonFunctions.isAtInstructorHomepage();
                expect(browser.driver.getCurrentUrl()).toContain('https://eols.elsevier.com/#/instructorView')
            });
        });


