// Generated on 2014-12-07 using generator-angular 0.10.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  var path = require('path');

  /**
   * Load grunt tasks automatically
   */
  require('load-grunt-tasks')(grunt);

  /**
   * Time how long tasks take. Can help when optimizing build times
   */
  require('time-grunt')(grunt);

  /**
   * Configurable paths for the application
   */
  var bowerConfig = require('./bower.json');
  var paths = {
    js: [
      
    ],
    css: [
      
    ],
    img: [
      
    ],
    tests: [
      
    ],
    bowerComponents: grunt.file.readJSON('.bowerrc').directory
  };
  var yeoman = {
    app: bowerConfig.appPath || 'app',
    name: bowerConfig.name || 'app',
    test: 'client/test',
    dist: 'server/dist',
    distDocs: 'reports/docs',
    tmp: '.tmp'
  };
  var envConfig = {
    local: grunt.file.readJSON('client/config/env/local.json'),
    test: grunt.file.readJSON('client/config/env/test.json'),
    development: grunt.file.readJSON('client/config/env/development.json'),
    staging: grunt.file.readJSON('client/config/env/staging.json'),
    production: grunt.file.readJSON('client/config/env/production.json'),
  };
  
  var options = {
    configPath: path.join(process.cwd(), 'client/config/grunt'),
    data: {
      paths: paths,
      yeoman: yeoman,
      envConfig: envConfig
    }
  };

  /**
   * Define the configuration for all the tasks
   */
  var configs = require('load-grunt-config')(grunt, options);
  grunt.initConfig(configs);

  /**
   * Register tasks
   */
  grunt.registerTask('serve', 'Compile then start a connect web server. Can use different endpoint environments: local, development, staging and production.', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    target = target || 'local';

    grunt.task.run([
      'clean:server',
      'ngconstant:'+target,
      'preprocess:local',
      'wiredep',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('build', 'Build base on different targets: local, development, staging and production.', function (target) {
    target = target || 'local';

    grunt.task.run([
      'clean:dist',
      'wiredep',
      'ngconstant:'+target,
      'preprocess:'+target,
      'jshint',
      'jscs',
      'useminPrepare',
      'concurrent:dist',
      'autoprefixer',
      'concat',
      'ngAnnotate',
      'copy:dist',
      'cdnify',
      'cssmin',
      'uglify',
      'filerev',
      'usemin',
      'htmlmin'
    ]);
  });

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build:local'
  ]);


  /**
   * Test related tasks
   */
  // Unit testing
  grunt.registerTask('test', [
    'clean:server',
    'ngconstant:test',
    'preprocess:test',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  // End to end (browser)
  grunt.registerTask('test-e2e', [
    'clean:server',
    'autoprefixer',
    'connect:test',
    // It fails when launching webdriver from Grunt. Launch it in Terminal instead and then run 'test-e2e' task.
    //'protractor_webdriver',
    'protractor:chrome'
  ]);

  // Serve application with test configuration
  grunt.registerTask('serve-test', [
    'clean:server',
    'autoprefixer',
    'connect:test',
    'watch'
  ]);

  // End-to-end testing tasks
  grunt.registerTask('protractor-e2e', ['protractor:chrome']);

  /**
   * Documentation related tasks
   */
  // Generate ngdocs documentation
  grunt.registerTask('docs', [
    'build',
    'copy:docsjs',
    'ngdocs:api'
  ]);

  // Serve ngdocs generated documentation
  grunt.registerTask('docsserve', [
    'docs',
    'connect:docs:keepalive',
    'watch'
  ]);

  /**
   * Run against different server environments.
   * Useful shortcuts.
   */
  grunt.registerTask('dev', ['serve:development']);
  grunt.registerTask('uat', ['serve:staging']);
  grunt.registerTask('pro', ['serve:production']);
};
