module.exports = function(grunt, options){
  return {
    local: {
      options: {
        context: {
          html5BaseHref: '/'
        }
      },
      files: { '<%= yeoman.tmp %>/index.html': '<%= yeoman.app %>/index.html' }
    },
    development: {
      options: {
        context: {
          html5BaseHref: '/cloud4cities_backoffice_dev/'
        }
      },
      files: { '<%= yeoman.tmp %>/index.html': '<%= yeoman.app %>/index.html' }
    },
    testing: {
      options: {
        context: {
          html5BaseHref: '/cloud4cities_backoffice_test/'
        }
      },
      files: { '<%= yeoman.tmp %>/index.html': '<%= yeoman.app %>/index.html' }
    },
    production: {
      options: {
        context: {
          html5BaseHref: '/admin/'
        }
      },
      files: { '<%= yeoman.tmp %>/index.html': '<%= yeoman.app %>/index.html' }
    }
  };
};
