module.exports = function(grunt, options){
  return {
    options: {
      port: 9000,
      hostname: 'localhost',
      livereload: 35729
    },
    livereload: {
      options: {
        open: true,
        middleware: function middleware (connect) {
          return [
            connect.static(options.yeoman.tmp),
            connect.static(options.yeoman.app)
          ];
        }
      }
    },
    test: {
      options: {
        port: 9001,
        middleware: function (connect) {
          return [
            connect.static(options.yeoman.tmp),
            connect.static('test'),
            /*connect().use(
              '/bower_components',
              connect.static('<%= yeoman.app %>/bower_components')
            ),*/
            connect.static(options.yeoman.app)
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
  };
};
