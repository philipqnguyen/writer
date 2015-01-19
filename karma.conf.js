module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      './vendor/assets/bower_components/jquery/dist/jquery.js',
      './vendor/assets/bower_components/angular/angular.js',
      './vendor/assets/javascripts/angular-route.js',
      './vendor/assets/bower_components/angular-cookie/angular-cookie.js',
      './vendor/assets/bower_components/ng-token-auth/dist/ng-token-auth.js',
      './vendor/assets/bower_components/angular-mocks/angular-mocks.js',
      './app/assets/javascripts/app/app.js',
      './app/assets/javascripts/app/spec/unit/**_spec.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR ||
    //                  LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests
    // whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
