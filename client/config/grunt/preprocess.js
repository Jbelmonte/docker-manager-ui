module.exports = function(grunt, options){
  return {
    local: {
      options: { context: options.envConfig.local },
      files: { '<%= yeoman.tmp %>/index.html': '<%= yeoman.app %>/index.html' }
    },
    development: {
      options: { context: options.envConfig.development },
      files: { '<%= yeoman.tmp %>/index.html': '<%= yeoman.app %>/index.html' }
    },
    testing: {
      options: { context: options.envConfig.testing },
      files: { '<%= yeoman.tmp %>/index.html': '<%= yeoman.app %>/index.html' }
    },
    production: {
      options: { context: options.envConfig.production },
      files: { '<%= yeoman.tmp %>/index.html': '<%= yeoman.app %>/index.html' }
    }
  };
};
