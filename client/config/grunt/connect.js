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
        base: [
          options.yeoman.tmp,
          options.yeoman.app
        ]
      }
    },
    test: {
      options: {
        port: 9001,
        base: [
          options.yeoman.tmp,
          options.yeoman.test,
          options.yeoman.app
        ]
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
