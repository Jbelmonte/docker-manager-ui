module.exports = function(grunt, options){
  return {
    options: {
      space: '   ',
      wrap: true,
      name: '<%= yeoman.name %>.env.config',
      deps: [],
      dest: '.tmp/app/app.environment.js'
    },
    local: {
      constants: {
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
    development: {
      constants: {
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
    testing: {
      constants: {
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
    production: {
      constants: {
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
    }
  };
};
