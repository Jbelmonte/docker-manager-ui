module.exports = function(grunt, options){
  return {
    options: {
      jshintrc: '.jshintrc',
      reporter: require('jshint-stylish')
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
