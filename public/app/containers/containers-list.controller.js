(function () {
	angular
		.module('docker-manager-ui.containers')
		.controller('ContainersCtrl', ContainersCtrl);

	ContainersCtrl.$inject = ['$scope', '$filter', '$q', 'ngTableParams', 'Containers'];
	function ContainersCtrl($scope, $filter, $q, NgTableParams, Containers) {
		var vm = $scope;
		var _searching = undefined;

		// Initialize scope
		_initialize();

		// Load
		search();
		
		/**
		 * Functions
		 */
		function search() {
			console.log('Search containers');
			_searching = Containers
							.search(vm.params)
							.then(_saveData)
							.then(_reloadGrid);
			return _searching;
		}
		function startAllContainers() {
			console.log('Start all containers');
			return Containers
						.start()
						.then(search, console.error);
		}
		function stopAllContainers() {
			console.log('Stop all containers');
			return Containers
						.stop()
						.then(search, console.error);
		}
		function startContainer(cont) {
			console.log('Start container ', cont);
			return Containers.byId(cont.Id)
						.start()
						.then(search, console.error);
		}
		function stopContainer(cont) {
			console.log('Stop container', cont);
			return Containers.byId(cont.Id)
						.stop()
						.then(search, console.error);
		}
		function isStoppable(cont) {
			var status = $filter('cntStatus')(cont.Status);
			return status.toLowerCase() == 'up';
		}
		function isStartable(cont) {
			var status = $filter('cntStatus')(cont.Status);
			return status.toLowerCase() != 'up';
		}
		 
		// Private functions
		function _initialize() {
			/**
			* Publish scope
			*/
			// Already loaded containers
			vm.containers = [];
			vm.params = {
				all: true,
				//limit: 100
			};
			
			// Table configuration
			vm.tableParams = new NgTableParams({
					page: 1,
					count: 10,
					sorting: {
						Image: 'asc'
					}
				}, {
					total: 0,
					getData: function ($defer, params) {
						_searching
							.then(function (data) {
								return _pageData(data, params);
							})
							.then($defer.resolve, $defer.reject);
					}
				}
			);
			
			// Expose actions to views
			vm.search = search;
			vm.startAllContainers = startAllContainers;
			vm.stopAllContainers = stopAllContainers;
			vm.startContainer = startContainer;
			vm.stopContainer = stopContainer;
			vm.isStoppable = isStoppable;
			vm.isStartable = isStartable;
		}

		function _pageData(data, tableParams) {
			console.log('Return page (index %d, count %d) from data', tableParams.page(), tableParams.count());
			// Update total count
			data = data || [];
			tableParams.total(data.length);
			
			// Sort
			var orderedData = tableParams.sorting() ?
				$filter('orderBy')(data, tableParams.orderBy()) :
				data;
			
			// Page
			if (orderedData.length > 0) {
				var start = (tableParams.page() - 1) * tableParams.count(),
					end = Math.min(orderedData.length, tableParams.page() * tableParams.count());
				orderedData = orderedData.slice(start, end);
			}

			return orderedData;
		}

		function _saveData(data) {
			console.log('Storing search results. Total: ', data.length);
			vm.containers = data;
			return data;
		}

		function _reloadGrid(data) {
			console.log('Reload grid with incomming data');
			vm.tableParams.reload();
			return data;
		}

	}
})();