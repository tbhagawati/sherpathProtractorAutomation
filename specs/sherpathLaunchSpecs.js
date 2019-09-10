var decache = require( 'decache');
var canvasUserData = require ('../data/dataCanvasUsers.json');
var canvasLMS = require('../pages/canvasLMS-Page');
var commonFunctions = require('../utilities/commonFunctions');

    beforeEach(function () {
    canvasLMS = require('../pages/canvasLMS-Page.js');
    commonFunctions = require('../utilities/commonFunctions');
});

    /*
    If you are using page object pattern and you initialize and define objects,
    these objects will always refer to the first browser instance.
     To solve the issue, you must decache them (https://www.npmjs.com/package/decache) and then use "require" again and also again initialize and define variables.
     reference :  https://github.com/angular/protractor/issues/3881

    From the node.js documentation:
    Modules are cached after the first time they are loaded.
    This means (among other things) that every call to require('foo') will get exactly the same object returned, if it would resolve to the same file.
     */

    afterEach(function() {
        decache('../pages/canvasLMS-Page.js');
        decache('../utilities/commonFunctions');
        browser.restart();
    });

    afterAll(function () {
        //browser.close();
    });

var launchFromCanvas =function(){
    describe('Sherpath Launch',function () {
        xit('should launch a sherpath course as an existing instructor', function () {
            commonFunctions.launchUser(canvasUserData.canvasExistingInstructor.username, canvasUserData.canvasExistingInstructor.password,canvasUserData.env.production.courseName);
            browser.sleep(8000).then(expect(browser.driver.getCurrentUrl()).toContain('https://eols.elsevier.com/#/instructorView'));
            });

      xit('should launch sherpath as existing student', function () {
          commonFunctions.launchUser(canvasUserData.canvasExistingStudent.username, canvasUserData.canvasExistingStudent.password,canvasUserData.env.production.courseName);
          browser.sleep(8000).then(expect(browser.driver.getCurrentUrl()).toContain('https://eols.elsevier.com/#/studentView'));
        });

    });
};module.exports = new launchFromCanvas();