module.exports = function(grunt, options){
  return {
    unit: {
      configFile: '<%= yeoman.test %>/karma.conf.js',
      singleRun: true
    }
  };
};
