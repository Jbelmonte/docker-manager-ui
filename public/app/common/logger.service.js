(function () {
	angular
		.module('app.common', [])
		.provider('logger', loggerProvider);
		
	
	function loggerProvider() {
		var options = {
			console: true,
		};
		return {
			config: function (opts) {
				angular.extend(options, opts);
			},
			$get: ['toastr', function (toastr) {
				var service = {
					log: log,
					info: info,
					warn: warn,
					error: error
				};
				return service;
		
				////// Functions
				function log (msg, title) {
					console.log('LOG:   ', msg);
					//toastr.info(msg, title);
				}
				function info (msg, title) {
					console.log('INFO:  ', msg);
					toastr.info(msg, title);
				}
				function warn (msg, title) {
					console.warn('WARN:  ', msg);
					toastr.warning(msg, title);
				}
				function error (msg, title) {
					console.error('ERROR: ', msg);
					toastr.error(msg, title);
				}
			}]	
		};
	} 
})();