(function () {
	'use strict';
	
	angular
		.module('docker-manager-ui.containers')
		.config(config);
	
	config.$inject = ['$stateProvider'];
	function config ($stateProvider) {
		$stateProvider
		.state('app.containers', {
			url: '/containers',
			abstract: true,
			template: '<div ui-view></div>'
		})
		.state('app.containers.list', {
			url: '/list',
			templateUrl: 'app/containers/containers.list.html',
			controller: 'ContainersCtrl',
			resolve: {
				Containers: ['Restangular', function(Restangular) {
					return Restangular.all('containers');
				}]
			}
		});
	}
})();