(function () {
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
				/*containers: ['Restangular', function(Restangular) {
					console.log('Resolving containers');
					return Restangular.all('containers').getList();
				}]*/
			}
		});
	}
})();