(function() {
  'use strict';

  angular
      .module('app.core')
      .provider('logger', loggerProvider);


  function loggerProvider() {
    var options = {
      $log: true
    };
    return {
      config: function(opts) {
        angular.extend(options, opts);
      },
      $get: ['$log', 'toastr', function($log, toastr) {
        var service = {
          log: log,
          info: info,
          warn: warn,
          error: error
        };
        return service;

        ////// Functions
        function log(msg, title) {
          _logWithPreffix($log.log, 'LOG:   ', arguments);
        }
        function info(msg, title) {
          _logWithPreffix($log.log, 'INFO:  ', arguments);
          toastr.info(msg, title);
        }
        function warn(msg, title) {
          _logWithPreffix($log.warn, 'WARN:  ', arguments);
          toastr.warning(msg, title);
        }
        function error(msg, title) {
          _logWithPreffix($log.error, 'ERROR: ', arguments);
          toastr.error(msg, title);
        }

        function _logWithPreffix(logFn, preffix, argArray) {
          var args = Array.prototype.slice.call(argArray);
          if (args.length === 0) {
            args.push('');
          }
          args[0] = preffix + ' ' + args[0];

          // Log
          logFn.apply(null, args);
        }
      }]
    };
  }
})();
