(function () {
	angular
		.module('docker-manager-ui', [
			'ui.router',
			'ui.bootstrap',
			'ngTable',
			'restangular',
			'angularMoment',
			
			// App modules
			'docker-manager-ui.common.directives',
			'docker-manager-ui.common.filters',
			'docker-manager-ui.containers'
		]);
})();