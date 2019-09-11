//var canvasUserData = require ('../data/dataCanvasUsers.json');
var canvasLMS = require("../pages/canvasLMS-Page");

var sherpathLaunchFromCanvas = function () {
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
             browser.switchTo().window(newWindowHandle)
                 .then(function () {
                     browser.waitForAngularEnabled(true);
                 });
});
     };
}; module.exports = new sherpathLaunchFromCanvas();