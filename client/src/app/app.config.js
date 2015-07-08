(function () {
	'use strict';
	
	angular
		.module('docker-manager-ui')
		.config(config)
		.run(run);
	
	config.$inject = ['RestangularProvider', 'dialogsProvider', '$translateProvider', '$logProvider'];
	function config (  RestangularProvider,   dialogsProvider,   $translateProvider,   $logProvider) {
		/**
		 * Configure logs
		 */
		$logProvider.debugEnabled(false);
		
		/**
		 * Configure REST client
		 */
		// Base URL
		var baseUrl = 'http://localhost:3000/docker-api';
		console.log('Configurint REST endpoints with base URL', baseUrl);		
		RestangularProvider.setBaseUrl(baseUrl);
		
		/**
		 * Translations
		 */
		$translateProvider.preferredLanguage('es');
		
		// Configure dialogs
		dialogsProvider.useBackdrop('static');
		dialogsProvider.useEscClose(false);
		dialogsProvider.useCopy(false);
		dialogsProvider.setSize('sm');
	}
	
	run.$inject = ['Restangular', 'appCommons', 'ENV'];	
	function run (  Restangular,   common,       ENV) {
		common.logger.log('Detected environment config', ENV);
		
		// Error interceptor
		Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
			// Error not handler
			common.logger.error('Server returned status code ' + response.status);
			console.dir(response);
			return true;
		});
	}
})();