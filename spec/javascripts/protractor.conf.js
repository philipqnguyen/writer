// An example configuration file.
// require('coffee-script');

exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  // capabilities: {
  //     'browserName': 'chrome'
  // },

  multiCapabilities: [
    {'browserName': 'chrome'}
    {'browserName': 'firefox'},
    {'browserName': 'safari'}
  ],

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  // specs: ['example_spec.js ', 'protractor_specs/**/*.js', 'protractor_specs/**/*.coffee'],
  specs: ['../../app/assets/javascripts/app/spec/**/**_spec.js'],

  baseUrl: 'http://localhost:4000'

  // Options to be passed to Jasmine-node.
  // jasmineNodeOpts: {
  //     showColors: true,
  //     defaultTimeoutInterval: 30000
  // },

};
