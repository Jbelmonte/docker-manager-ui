module.exports = function(grunt, options){
  return {
    options: {
      space: '   ',
      wrap: true,
      name: '<%= yeoman.name %>.env.config',
      deps: [],
      dest: '.tmp/app/app.environment.js'
    },
    local: { constants: options.envConfig.local },
    development: { constants: options.envConfig.development },
    testing: { constants: options.envConfig.testing },
    production: { constants: options.envConfig.production }
  };
};
