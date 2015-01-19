exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:3000',
  specs: ['./app/assets/javascripts/app/spec/**/**_spec.js'],
  multiCapabilities: [
    {'browserName': 'chrome'},
    {'browserName': 'firefox'},
    {'browserName': 'safari'}
  ],
  jasmineNodeOpts: {
    showColors: true
  }
};
