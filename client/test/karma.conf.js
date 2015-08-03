// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-12-07 using
// generator-karma 0.8.3

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
	    'src/bower_components/jquery/dist/jquery.js',
	    'src/bower_components/bootstrap/dist/js/bootstrap.js',
	    'src/bower_components/angular/angular.js',
	    'src/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
	    'src/bower_components/ui-router/release/angular-ui-router.js',
	    'src/bower_components/lodash/lodash.js',
	    'src/bower_components/restangular/dist/restangular.js',
	    'src/bower_components/moment/moment.js',
	    'src/bower_components/angular-moment/angular-moment.js',
	    'src/bower_components/ng-table/dist/ng-table.min.js',
	    'src/bower_components/angular-animate/angular-animate.js',
	    'src/bower_components/angular-toastr/dist/angular-toastr.tpls.js',
	    'src/bower_components/angular-sanitize/angular-sanitize.js',
	    'src/bower_components/angular-translate/angular-translate.js',
	    'src/bower_components/angular-dialog-service/dist/dialogs.min.js',
	    'src/bower_components/angular-dialog-service/dist/dialogs-default-translations.min.js',
	    'src/bower_components/Chart.js/Chart.js',
	    'src/bower_components/angular-chart.js/dist/angular-chart.js',
	    'src/bower_components/angular-mocks/angular-mocks.js',
      'src/app/app.module.js',
      'src/app/**/*.module.js',
      'src/app/**/*.js',
      '../.tmp/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // Start these browsers, currently available (*install and load related plugins):
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS',
//      'Chrome'
    ],

    // Which plugins to enable
    plugins: [
      'karma-coverage',
      'karma-jasmine',
      'karma-phantomjs-launcher',
//      'karma-chrome-launcher'
    ],
    
    // A list of reporters to use.
    reporters: [
      'progress',
      'coverage'
    ],
    preprocessors: {
      "**/lib/*js": "coverage"
    },
    coverageReporter: {
      type: "lcov",
      dir: "coverage/"
    },

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
