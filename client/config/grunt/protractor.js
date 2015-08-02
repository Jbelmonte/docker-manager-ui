module.exports = function(grunt, options){
  return {
    options: {
      configFile: '<%= yeoman.test %>/protractor.conf.js',
      keepAlive: true,
      noColor: false,
      args: {}
    },
    chrome: { options: { args: { browser: 'chrome' } } },
    safari: { options: { args: { browser: 'safari' } } },
    firefox: { options: { args: { browser: 'firefox' } } }
  };
};
