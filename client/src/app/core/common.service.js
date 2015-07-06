(function () {
	'use strict';
	
	angular
		.module('app.core', [])
		.provider('appCommons', commonProvider);
	
	function commonProvider() {
		var options = {
			logger: 'logger',
			dialogs: 'dialogs'
		};
		return {
			config: function (opts) {
				angular.extend(options, opts || {});
			},
			$get: ['$injector', function ($injector) {
				var service = {
					// Custom services and thirdparty ones
					logger: $injector.get(options.logger),
					dialogs: $injector.get(options.dialogs),
					
					// Custom functions
					$broadcast: $broadcast,
					
					// Angular services
					$q: $injector.get('$q'),
					$filter: $injector.get('$filter'),
					$templateCache: $injector.get('$templateCache'),
					$interval: $injector.get('$interval'),
					$timeout: $injector.get('$timeout'),
					$document: $injector.get('$document'),
					$window: $injector.get('$window'),
					$location: $injector.get('$location'),
					$rootScope: $injector.get('$rootScope'),
					
					// Angular funcions
					// TBD
				};
				
				function $broadcast() {
		            return service.$rootScope.$broadcast.apply(service.$rootScope, arguments);
		        }
				
				return service;
			}]
		};
	}
})();