module.exports = function(grunt, options){
  return {
    unit: {
      configFile: 'test/karma.conf.js',
      singleRun: true
    }
  };
};
