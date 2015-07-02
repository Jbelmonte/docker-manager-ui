(function () {
	angular
		.module('docker-manager-ui', [
			'ui.router',
			'ui.bootstrap',
			'ngTable',
			'restangular',
			'angularMoment',
			'ngAnimate',
			'toastr',
			
			// App modules
			'app.common',
			'docker-manager-ui.common.directives',
			'docker-manager-ui.common.filters',
			'docker-manager-ui.containers'
		]);
})();