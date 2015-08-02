module.exports = function(grunt, options){
  return {
    options: {
      jshintrc: '.jshintrc',
      reporter: 'node_modules/jshint-stylish/stylish.js'
    },
    all: {
      src: ['Gruntfile.js', '<%= yeoman.app %>/app/{,*/}*.js']
    },
    test: {
      options: {
        jshintrc: '<%= yeoman.test %>/.jshintrc'
      },
      src: [
        '<%= yeoman.test %>/spec/{,*/}*.js',
        '<%= yeoman.test %>/e2e/{,*/}*.js'
      ]
    }
  };
};
