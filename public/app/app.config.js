(function () {
	angular
		.module('docker-manager-ui')
		.config(config);
	
	config.$inject = ['RestangularProvider'];
	function config (RestangularProvider) {
		var baseUrl = '/docker-api';
		console.log('Configurint REST endpoints with base URL', baseUrl);
		
		// Configure REST client
		RestangularProvider.setBaseUrl(baseUrl);
	}
})();