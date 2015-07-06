(function () {
	'use strict';
	
	angular
		.module('docker-manager-ui')
		.config(config);
	
	config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
	function config (  $stateProvider,   $urlRouterProvider,   $locationProvider) {
		console.log('Configuring docker-manager-ui module');
		
		// Configure routes
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true).hashPrefix('!');
		
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