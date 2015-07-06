(function () {
	'use strict';
	
	angular
		.module('docker-manager-ui', [
			'ui.router',
			'ui.bootstrap',
			'ngTable',
			'restangular',
			'angularMoment',
			'ngAnimate',
			'toastr',
			'dialogs.main',
			'dialogs.default-translations',
			'chart.js',
			
			// App modules
			'app.core',
			'docker-manager-ui.common.directives',
			'docker-manager-ui.common.filters',
			'docker-manager-ui.containers'
		]);
})();