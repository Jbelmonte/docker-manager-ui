module.exports = function(grunt, options){
  return {
    src: [
      '<%= yeoman.app %>/**/*.js',
      '!<%= yeoman.app %>/bower_components/**/*.js'
    ],
    options: {
        config: '.jscsrc',
        fix: true,
        force: true,
        reporter: 'console',
//        verbose: true, // If you need output with rule names http://jscs.info/overview.html#verbose
        requireCurlyBraces: [ 'if' ]
    }
  };
};
