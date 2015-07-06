// Generated on 2014-12-07 using generator-angular 0.10.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var bowerConfig = require('./bower.json');
  var appConfig = {
    app: bowerConfig.appPath || 'app',
    dist: '../server/dist',
    distDocs: 'dist/docs',
    name: bowerConfig.name || '',
    tmp: '.tmp'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/app/{,*/}*.js'],
        tasks: ['docs' ,'newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'], // Not specifying E2E tests
        tasks: ['newer:jshint:test', 'karma']
      },
      styles: {
        files: ['<%= yeoman.app %>/assets/css/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '<%= yeoman.tmp %>/assets/css/{,*/}*.css',
          '<%= yeoman.app %>/assets/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      e2eTest: {
        files: [
          'test/e2e/{,*/}*.js',
          '<%= yeoman.app %>/app/{,*/}*.js',
          '<%= yeoman.app %>/{,*/}*.html',
          '<%= yeoman.tmp %>/assets/css/{,*/}*.css',
          '<%= yeoman.app %>/assets/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
        //, tasks: ['protractor-e2e']
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('<%= yeoman.tmp %>'),
              connect().use(
                '/docs',
                connect.static('dist_docs')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('<%= yeoman.tmp %>'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static(appConfig.app+'/bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      },
      docs: {
        options: {
          open: true,
          base: '<%= yeoman.distDocs %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/app/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: [
          'test/spec/{,*/}*.js',
          'test/e2e/{,*/}*.js'
        ]
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.tmp %>',
            '<%= yeoman.dist %>/{,*/}*',
            '<%= yeoman.dist %>_docs/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '<%= yeoman.tmp %>'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.tmp %>/assets/css/',
          src: '{,*/}*.css',
          dest: '<%= yeoman.tmp %>/assets/css/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/app/{,*/}*.js',
          '<%= yeoman.dist %>/assets/css/{,*/}*.css',
          '<%= yeoman.dist %>/assets/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/assets/css/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        staging: '<%= yeoman.tmp %>',
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/assets/css/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/assets/img']
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/assets/img',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/assets/img'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/assets/img',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/assets/img'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'app/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.tmp %>/concat/app',
          src: ['*.js', '!oldieshim.js'],
          dest: '<%= yeoman.tmp %>/concat/app'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html'],
        css: true
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',          // Icons and other stuff
            '.htaccess',                // .htaccess config file
            '*.html',                   // HTML files
            'app/{,*/}*.html',          // App partials
            'app/{,*/}locale-*.json',   // L10n files
            'assets/img/{,*/}*.{webp}', // Non minify files
            'assets/fonts/{,*/}*.*'     // Fonts
          ]
        }, {
          expand: true,
          cwd: '<%= yeoman.tmp %>/assets/img',
          dest: '<%= yeoman.dist %>/assets/img',
          src: ['generated/*']
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>',
        dest: '<%= yeoman.tmp %>/assets/css/',
        src: [
          'assets/css/{,*/}*.css',      // App CSS
          'bower_components/**/*.css'   // CSS in Bower dependencies
        ]
      },
      docsjs: {
        expand: true,
        cwd: '<%= yeoman.dist %>',
        dest: '<%= yeoman.distDocs %>/js',
        src: ['app/*.js']
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ],
      protractorTest: [
        'protractor:chrome',
        'protractor:safari',
        'protractor:firefox'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },

    // E2E protractor settings
    /*protractor_webdriver: {
      start: {
        options: {
          path: 'node_modules/protractor/bin/',
          command: 'webdriver-manager start'
        }
      }
    },*/
    protractor: {
      options: {
        configFile: 'test/protractor.conf.js', //your protractor config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        }
      },
      chrome: {
        options: {
          args: {
            browser: 'chrome'
          }
        }
      },
      safari: {
        options: {
          args: {
            browser: 'safari'
          }
        }
      },
      firefox: {
        options: {
          args: {
            browser: 'firefox'
          }
        }
      }
    },

    // ngDocs
    ngdocs: {
      options: {
        dest: '<%= yeoman.distDocs %>',
        html5Mode: false,
        image: '<%= yeoman.app %>/assets/img/worldline-logo.jpg',
        imageLink: 'https://tempos21.bluekiwi.net/space/in/Connected_Citizen/home',
        title: '<%= yeoman.name %>',
        bestMatch: true,
        scripts: [
          'angular.js',
          '../js/app/app.min.js',
          '../js/app/app.cities.min.js',
          '../js/app/app.widgets.min.js'
        ],
        /*startPage: '/api',
        titleLink: "/api"*/
      },
      api: {
        src: ['<%= yeoman.app %>/app/**/*.js', '!<%= yeoman.app %>/**/*.spec.js'],
        title: 'App Documentation'
      },
      all: [
        '<%= yeoman.app %>/app/**/*.js'
      ]
    }
  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  // Running environments
  grunt.registerTask('dev', ['serve']);
  grunt.registerTask('uat', ['serve']);
  grunt.registerTask('pro', ['serve:dist']);

  grunt.registerTask('serve-test', [
    'clean:server',
    'autoprefixer',
    'connect:test',
    'watch'
  ]);

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  // End-to-end testing tasks
  grunt.registerTask('protractor-e2e', ['protractor:chrome']);

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('test-e2e', [
    'clean:server',
    'autoprefixer',
    'connect:test',
    // It fails when launching webdriver from Grunt. Launch it in Terminal instead and then run 'test-e2e' task.
    //'protractor_webdriver',
    'protractor:chrome'
  ]);

  grunt.registerTask('docs', [
    'build',
    'copy:docsjs',
    'ngdocs:api'
  ]);

  grunt.registerTask('docsserve', [
    'connect:docs:keepalive',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'jshint',
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

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
