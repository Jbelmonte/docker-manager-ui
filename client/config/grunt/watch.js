module.exports = function(grunt, options){
  return {
    bower: {
      files: ['bower.json'],
      tasks: ['wiredep']
    },
    js: {
      files: ['<%= yeoman.app %>/app/{,*/}*.js'],
      tasks: ['docs', 'newer:jshint:all'],
      options: {
        livereload: '<%= connect.options.livereload %>'
      }
    },
    jsTest: {
      files: ['test/spec/{,*/}*.js'],
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
    }
  };
};
