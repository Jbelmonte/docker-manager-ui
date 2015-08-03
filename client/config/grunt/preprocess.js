module.exports = function(grunt, options){
  return {
    local: {
      options: { context: options.envConfig.local },
      files: { '<%= yeoman.tmp %>/index.html': '<%= yeoman.app %>/index.html' }
    },
    test: {
      options: { context: options.envConfig.test },
      files: { '<%= yeoman.tmp %>/index.html': '<%= yeoman.app %>/index.html' }
    },
    development: {
      options: { context: options.envConfig.development },
      files: { '<%= yeoman.tmp %>/index.html': '<%= yeoman.app %>/index.html' }
    },
    staging: {
      options: { context: options.envConfig.staging },
      files: { '<%= yeoman.tmp %>/index.html': '<%= yeoman.app %>/index.html' }
    },
    production: {
      options: { context: options.envConfig.production },
      files: { '<%= yeoman.tmp %>/index.html': '<%= yeoman.app %>/index.html' }
    }
  };
};
