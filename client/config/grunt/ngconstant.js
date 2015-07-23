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
        $$apiConfig: {
          baseUrl: 'http://localhost:3000/docker-api',
          apiKey: '',
          securityBaseUrl: 'http://localhost:3000/oauth/token'
        }
      }
    },
    development: {
      constants: {
        $$apiConfig: {
          baseUrl: 'http://devel.host.com/docker-api',
          apiKey: '',
          securityBaseUrl: 'http://devel.host.com/oauth/token'
        }
      }
    },
    testing: {
      constants: {
        $$apiConfig: {
          baseUrl: 'https://test.host.com/docker-api',
          apiKey: '',
          securityBaseUrl: 'https://test.host.com/oauth/token'
        }
      }
    },
    production: {
      constants: {
        $$apiConfig: {
          baseUrl: 'https://host.com/docker-api',
          apiKey: '',
          securityBaseUrl: 'https://host.com/oauth/token'
        }
      }
    }
  };
};
