(function () {
	angular
		.module('docker-manager-ui')
		.config(config);
	
	config.$inject = ['RestangularProvider', 'dialogsProvider', '$translateProvider', '$logProvider'];
	function config (  RestangularProvider,   dialogsProvider,   $translateProvider,   $logProvider) {
		// Configure logs
		$logProvider.debugEnabled(false);
		
		// Configure REST client
		var baseUrl = '/docker-api';
		console.log('Configurint REST endpoints with base URL', baseUrl);		
		RestangularProvider.setBaseUrl(baseUrl);
		
		// Translations
		$translateProvider.preferredLanguage('es');
		
		// Configure dialogs
		dialogsProvider.useBackdrop('static');
		dialogsProvider.useEscClose(false);
		dialogsProvider.useCopy(false);
		dialogsProvider.setSize('sm');
	}
})();