var decache = require( 'decache');
var canvasUserData = require ('../data/dataCanvasUsers.json');
var launchFromCanvas = require('./sherpathLaunchSpecs');
var canvasLMS = require("../pages/canvasLMS-Page");
var commonFunctions = require('../utilities/commonFunctions.js')
var sherpathInstructorHomepage = require('../pages/sherpathInstructorHome-Page');

    beforeEach(function () {
        canvasLMS = require('../pages/canvasLMS-Page.js');
        launchFromCanvas = require('./sherpathLaunchSpecs');
        commonFunctions = require('../utilities/commonFunctions.js')
        sherpathInstructorHomepage = require('../pages/sherpathInstructorHome-Page');
    });
    afterEach(function() {
        decache('../pages/canvasLMS-Page.js');
        decache('../utilities/commonFunctions');
        decache('../pages/sherpathInstructorHome-Page');
        browser.restart();
    });
    afterAll(function () {
        browser.close();
    });

var validateInstructorLeftNavBar = function(){
    describe('validate Instructor Left Navigation Menu', function () {
        it('should validate that on launch, existing instructor is taken to Sherpath Homepage', function () {
commonFunctions.launchUser(canvasUserData.canvasExistingInstructor.username, canvasUserData.canvasExistingInstructor.password,canvasUserData.env.production.courseName);
            browser.sleep(8000).then(expect(browser.driver.getCurrentUrl()).toContain('https://eols.elsevier.com/#/instructorView'));
        });

        it('should validate that instructor is able to click on the course plan tab on the left menu and navigate to the course plan', function () {
            
        });
    });
};module.exports = new  validateInstructorLeftNavBar();

