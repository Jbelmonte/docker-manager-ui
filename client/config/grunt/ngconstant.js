module.exports = function(grunt, options){
  return {
    options: {
      space: '   ',
      wrap: true,
      name: '<%= yeoman.name %>.env.config',
      deps: [],
      dest: '<%= yeoman.tmp %>/app/app.environment.js'
    },
    local: { constants: options.envConfig.local },
    test: { constants: options.envConfig.test },
    development: { constants: options.envConfig.development },
    staging: { constants: options.envConfig.staging },
    production: { constants: options.envConfig.production }
  };
};
