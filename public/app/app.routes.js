(function () {
	angular
		.module('docker-manager-ui')
		.config(config);
	
	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config ($stateProvider, $urlRouterProvider) {
		console.log('Configuring docker-manager-ui module');
		
		// Configure routes
		$urlRouterProvider.otherwise('/');
		$stateProvider
		.state('app', {
			abstract: true,
			templateUrl: 'app/partials/layout.html'
		})
		.state('app.home', {
			url: '/',
			templateUrl: 'app/partials/home.html'
		});
	}
})();