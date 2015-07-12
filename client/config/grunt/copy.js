module.exports = function(grunt, options){
  return {
    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: '<%= yeoman.app %>',
        dest: '<%= yeoman.dist %>',
        src: ['*.{ico,png,txt}',
          '.htaccess',
          '*.html',
          'app/**/*.html',
          'app/{,*/}locale-*.json',
          'assets/img/{,*/}*.{webp}',
          'assets/fonts/{,*/}*.*'
        ]
      }, {
        expand: true,
        cwd: '<%= yeoman.tmp %>/assets/img',
        dest: '<%= yeoman.dist %>/assets/img',
        src: ['generated/*']
      }, {
        expand: true,
        cwd: '<%= yeoman.tmp %>',
        dest: '<%= yeoman.dist %>',
        src: ['index.html']
      }, {
        expand: true,
        cwd: '<%= yeoman.app %>/',
        dest: '<%= yeoman.dist %>',
        src: ['bower_components/**/*.*']
      }]
    },
    styles: {
      expand: true,
      cwd: '<%= yeoman.app %>',
      dest: '<%= yeoman.tmp %>',
      src: ['assets/css/{,*/}*.css']
    },
    docsjs: {
      expand: true,
      cwd: '<%= yeoman.dist %>',
      dest: '<%= yeoman.distDocs %>/js',
      src: ['app/*.js']
    }
  };
};
