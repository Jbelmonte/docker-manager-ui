(function () {
	'use strict';
	
	angular
		.module('docker-manager-ui.containers')
		.run(config);

	config.$inject = ['Restangular'];
	function config(Restangular) {
		// Container collection operations
		Restangular.extendCollection('containers', function (collection) {
			collection.search = collection.getList;
			collection.byId = function (id) {
				return Restangular.one(this.route, id);
			};
			collection.start = function () {
				return this.all('startAll').post();
			};
			collection.stop = function () {
				return this.all('stopAll').post();
			};
			return collection;
		});
		// Single container operations
		Restangular.extendModel('containers', function (model) {
			model.start = function () {
				return this.post('start');
			};
			model.stop = function () {
				return this.post('stop');
			};
			return model;
		});

	}
})();