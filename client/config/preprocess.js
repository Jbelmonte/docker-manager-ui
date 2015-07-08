module.exports = {
  local: {
    options: {
      context: {
        html5BaseHref: '/',
        api: {
          apiKey: '',
          baseUrl: '',
          securityBaseUrl: ''
        },
        ENV: {
          name: 'local',
          foo: 'We are in local!!!!!!'
        }
      }
    },
    files: {
      '<%= yeoman.tmp %>/index.html': '<%= yeoman.app %>/index.html'
    }
  },
  development: {
    options: {
      context: {
        html5BaseHref: '/cloud4cities_backoffice_dev/',
        api: {
          apiKey: '',
          baseUrl: '',
          securityBaseUrl: ''
        },
        ENV: {
          name: 'development',
          foo: 'We are in development!!!!!!'
        }
      }
    },
    files: {
      '<%= yeoman.tmp %>/index.html': '<%= yeoman.app %>/index.html'
    }
  },
  testing: {
    options: {
      context: {
        html5BaseHref: '/cloud4cities_backoffice_test/',
        api: {
          apiKey: '',
          baseUrl: '',
          securityBaseUrl: ''
        },
        ENV: {
          name: 'testing',
          foo: 'We are in testing!!!!!!'
        }
      }
    },
    files: {
      '<%= yeoman.tmp %>/index.html': '<%= yeoman.app %>/index.html'
    }
  },
  production: {
    options: {
      context: {
        html5BaseHref: '/',
        api: {
          apiKey: '',
          baseUrl: '',
          securityBaseUrl: ''
        },
        ENV: {
          name: 'production',
          foo: 'We are in production!!!!!!'
        }
      }
    },
    files: {
      '<%= yeoman.tmp %>/index.html': '<%= yeoman.app %>/index.html'
    }
  }
};