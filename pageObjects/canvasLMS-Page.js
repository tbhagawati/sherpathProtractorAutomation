var canvasLMSPage = function(){

    //Canvas Login page
    var canvas_username = element(by.id('pseudonym_session_unique_id'));
    var canvas_password = element(by.id('pseudonym_session_password'));
    var canvasLoginBtn  = element(by.className('Button Button--login'));

    this.enterUsername = function(canvasUsername){
        canvas_username.sendKeys(canvasUsername);
    };

    this.enterPassword = function(canvasPassword) {
        canvas_password.sendKeys(canvasPassword);
    };

    this.clickCanvasLoginBtn = function() {
        canvasLoginBtn.click();
    };
//-------------------------------****-----------------------------------------

    //Canvas Dashboard
    var dashboardLink = element(by.id('global_nav_dashboard_link'));
    //TODO :  Write a better selector for this element (course selection link on canvas dashboard)
    var courseLink = element(by.css('[aria-label=\'global flag\'] .ic-DashboardCard__link span'));

    this.clickDashboardLink = function(){
        dashboardLink.click();
    };
    this.selectCourse = function(courseName){
        courseLink.click();
    };

    //Canvas Modules Page
    this.externalToolLink = element(by.className('ig-title title item_link'));
    this.clickExternalToolLink = function() {
        this.externalToolLink.click();

        this.loadNewWindowBtn = element(by.css('.btn'));
        this.loadNewWindow = function () {
        this.loadNewWindowBtn.click();
}
    };


};module.exports = new canvasLMSPage();


