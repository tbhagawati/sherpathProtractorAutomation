 var canvasLMS = require ('../pageObjects/canvasLMS-Page.js');
 var canvasUserData = require ('../data/dataCanvasUsers.json');
 // import the fs module so that the json file in the data folder can be read. if you want to know more about this, go to https://chercher.tech/protractor/json-file-protractor
var fs = require('fs');

describe('Sherpath Launch',function () {
    it('should launch a sherpath course as an existing user', function () {
        // This is to be added if your application is non-angular
       browser.ignoreSynchronization=true;
        browser.get('https://canvas.instructure.com/login/canvas');
        canvasLMS.enterUsername(canvasUserData.canvasExistingInstructor.username);
        canvasLMS.enterPassword(canvasUserData.canvasExistingInstructor.password);
        canvasLMS.clickCanvasLoginBtn();
        //canvasLMS.clickDashboardLink();
        canvasLMS.selectCourse(canvasUserData.env.production.prodCourseName);
        canvasLMS.clickExternalToolLink();
        canvasLMS.loadNewWindow();
        browser.getAllWindowHandles().then(function (handles) {
            newWindowHandle = handles[1]; // this is your new window
            browser.switchTo().window(newWindowHandle).then(function () {
               browser.ignoreSynchronization=false;
                browser.waitForAngularEnabled(true);
                browser.getTitle();
            });
        });
    });
});