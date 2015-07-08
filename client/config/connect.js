module.exports = {
  options: {
    port: 9000,
    hostname: 'localhost',
    livereload: 35729
  },
  livereload: {
    options: {
      open: true,
      middleware: function (connect) {
        return [
          connect.static('<%= yeoman.tmp %>'),
          connect.static('<%= yeoman.app %>'),
          connect().use('/docs', connect.static('dist_docs'))
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
          /*connect().use(
            '/bower_components',
            connect.static('<%= yeoman.app %>/bower_components')
          ),*/
          connect.static('<%= yeoman.app %>')
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