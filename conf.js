exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    getPageTimeout: 120000,
    jasmineNodeOpts: {
        isVerbose: false,
        showColors: true,
        includeStackTrace: false,
        defaultTimeoutInterval: 120000
    },

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
      // use this to run headless chrome
        chromeOptions: {
            args: [ "--headless", "--disable-gpu", "--window-size=1920,1080" ]
        }
    },

    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    // suites: {
    //     homepage: 'tests/e2e/homepage/**/*Spec.js',
    //     search: ['tests/e2e/contact_search/**/*Spec.js',
    //         'tests/e2e/venue_search/**/*Spec.js']
    // },

    //individual tests
    specs: [
        'specs/spec-SherpathLaunch.js',
        'specs/spec-InstructorHomepage.js'
    ],

    highlightDelay: 1000

    // SELENIUM_PROMISE_MANAGER:false,
  //  restartBrowserBetweenTests:true
    };