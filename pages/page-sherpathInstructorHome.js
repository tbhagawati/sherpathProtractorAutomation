var pageSherpathInstructorHome = function () {
   this.instructor_Home_heading = element(by.cssContainingText('div.u-els-display-none\\@mobile > h1:nth-child(1)','Home'));
   var coursePlanLink = element(by.cssContainingText('.c-els-site-nav__section > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > span:nth-child(2)','Course Plan'))
   var homeLink = element(by.cssContainingText('.c-els-site-nav__section > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > span:nth-child(2)','Home'));
   this.instructorCoursePlanHeading = element(by.cssContainingText('.u-els-display-none\\@mobile > h1:nth-child(1)','Course Plan'));

   //click on Course Plan Link
   this.clickCoursePlanLink = function () {
      coursePlanLink.click();
   }

   //click on Home Link
   this.clickHomeLink = function () {
      homeLink.click();
   }

   // this.atInstructorHomepage = function () {
   //    browser.wait(protractor.ExpectedConditions.visibilityOf(this.instructor_Home_heading), 10000, "Instructor Homepage not loaded");
   // }
   //
   // this.atInstructorCoursePlanPage = function () {
   //    browser.wait(protractor.ExpectedConditions.visibilityOf(this.instructorCoursePlanHeading), 10000, "Course Plan not loaded");
   // }

};module.exports = new pageSherpathInstructorHome();