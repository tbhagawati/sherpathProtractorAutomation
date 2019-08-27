exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'jasmine',
    jasmineNodeOpts: {
        isVerbose: false,
        showColors: true,
        includeStackTrace: false,
        defaultTimeoutInterval: 40000
    },

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    // suites: {
    //     homepage: 'tests/e2e/homepage/**/*Spec.js',
    //     search: ['tests/e2e/contact_search/**/*Spec.js',
    //         'tests/e2e/venue_search/**/*Spec.js']
    // },

    //individual tests
    specs: ['specs/sherpathLaunchSpecs.js']

    }