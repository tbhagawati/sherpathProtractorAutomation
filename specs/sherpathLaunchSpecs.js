
var decache = require( 'decache');
var canvasUserData = require ('../data/dataCanvasUsers.json');
 // import the fs module so that the json file in the data folder can be read. if you want to know more about this, go to https://chercher.tech/protractor/json-file-protractor
var fs = require('fs');
var canvasLMS = require("../pages/canvasLMS-Page");
var protractor = require("protractor");

var launchFromCanvas =function(){beforeEach(function () {
    canvasLMS = require('../pages/canvasLMS-Page.js');
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
        protractor.browser.restart();
    });

    afterAll(function () {
        browser.close();
    });

    //declaring the specs as function variables, so that they can be reused
    describe('Sherpath Launch',function () {
        var launchAsExistingInstructor =      it('should launch a sherpath course as an existing instructor', function () {
            // This is to be added if your application is non-angular
            browser.waitForAngularEnabled(false);
            browser.get('https://canvas.instructure.com/login/canvas');
            canvasLMS.enterUsername(canvasUserData.canvasExistingInstructor.username);
            canvasLMS.enterPassword(canvasUserData.canvasExistingInstructor.password);
            canvasLMS.clickCanvasLoginBtn();
            canvasLMS.selectCourse(canvasUserData.env.production.courseName);
            canvasLMS.clickExternalToolLink();
            canvasLMS.loadNewWindow();
            browser.getAllWindowHandles().then(function (handles) {
                var newWindowHandle = handles[1]; // this is your new window
                browser.switchTo().window(newWindowHandle)
                    .then(function () {
                        browser.waitForAngularEnabled(true);
                    });
                browser.sleep(8000).then(expect(browser.driver.getCurrentUrl()).toContain('https://eols.elsevier.com/#/instructorView'));
            });
        });

      var launchAsExistingStudent =   it('should launch sherpath as existing student', function () {
            browser.waitForAngularEnabled(false);
            browser.get('https://canvas.instructure.com/login/canvas');
            //browser.sleep(3000);
            canvasLMS.enterUsername(canvasUserData.canvasExistingStudent.username);
            canvasLMS.enterPassword(canvasUserData.canvasExistingStudent.password);
            canvasLMS.clickCanvasLoginBtn();
            canvasLMS.selectCourse(canvasUserData.env.production.courseName);
            canvasLMS.clickExternalToolLink();
            canvasLMS.loadNewWindow();
            browser.getAllWindowHandles().then(function (handles) {
                var newWindowHandle = handles[1]; // this is your new window
                browser.switchTo().window(newWindowHandle).then(function () {
                    browser.waitForAngularEnabled(true);
                });
                browser.sleep(5000).then(expect(browser.driver.getCurrentUrl()).toContain('https://eols.elsevier.com/#/studentView'));
            });
        });

    });
};module.exports = new launchFromCanvas();
