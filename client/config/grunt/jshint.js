module.exports = function(grunt, options){
  return {
    options: {
      jshintrc: '.jshintrc',
      reporter: '/Users/juanbelmonterodriguez/Desktop/docker-manager/client/node_modules/jshint-stylish/stylish.js'
    },
    all: {
      src: ['Gruntfile.js', '<%= yeoman.app %>/app/{,*/}*.js']
    },
    test: {
      options: {
        jshintrc: 'test/.jshintrc'
      },
      src: ['test/spec/{,*/}*.js', 'test/e2e/{,*/}*.js']
    }
  };
};
