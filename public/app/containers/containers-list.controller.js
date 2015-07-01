(function () {
	angular
		.module('docker-manager-ui.containers')
		.controller('ContainersCtrl', ContainersCtrl);
	
	ContainersCtrl.$inject = ['$scope', '$filter', 'ngTableParams', 'Restangular'];
	function ContainersCtrl (  $scope,   $filter,   ngTableParams,   Restangular) {
		var vm = $scope;
		var containerListApi = Restangular.all('containers');
		
		//var _searching = undefined;
		
		/**
		 * Publish scope
		 */
		// Already loaded containers
		vm.containers = [];
		vm.params = {
			all: true,
			limit: 100
		};
		
		// Table configuration
		vm.tableParams = new ngTableParams({
			page: 1,
			count: 10,
			sorting: {
				Image: 'asc'
			}
		}, {
			total: 0,
			getData: function ($defer, params) {
				/*if (_searching) {
					// Already searching
					_searching.then($defer.resolve, $defer.reject);
					return;
				}*/
				
				// Habemus data
				console.log('Looking for containers at page (index %d, count %d) with sort', params.page(), params.count(), params.orderBy());
				var data = vm.containers;

				// Update total count
				params.total(data.length);
				
				// Sort
				var orderedData = params.sorting() ?
                    $filter('orderBy')(data, params.orderBy()) :
                    data;
					
				// Page
				if (orderedData.length > 0) {
					var start = (params.page() - 1) * params.count(),
						end = Math.min(orderedData.length, params.page() * params.count());
					orderedData = orderedData.slice(start, end);
				}
				
				$defer.resolve(orderedData);
			}
		});
		
		// Expose actions to views
		vm.search = search;
		vm.startAllContainers = startAllContainers;
		vm.stopAllContainers = stopAllContainers;
		vm.startContainer = startContainer;
		vm.stopContainer = stopContainer;
		vm.isStoppable = isStoppable;
		vm.isStartable = isStartable;
		
		// Watchs
		/*vm.$watch('params', function (newValue, oldValue) {
			console.log('Updating ngTable limit with form limit');
			//vm.tableParams.limit(vm.params.limit);
		});*/
		
		// Load
		search();
		
		/**
		 * Functions
		 */
		 function search() {
			containerListApi.getList(vm.params)
							.then(function (containers) {
								vm.containers = containers;
								_reloadGrid();
							});
		 }
		 function startAllContainers() {
			 console.log('Start all containers');
			 Restangular.all('containers')
			 			.start()
						.then(function (data) {
							console.log('Start all containers response', arguments);
							search();
						}, function (response) {
							console.log("Start all containers: Error with status code", response.status);
						});
		 }
		 function stopAllContainers() {
			 console.log('Stop all containers');
			 Restangular.all('containers')
			 			.stop()
						.then(function (data) {
							console.log('Stop all containers response', arguments);
							search();
						}, function (response) {
							console.log("Stop all containers: Error with status code", response.status);
						});
		 }
		 function startContainer(cont) {
			 console.log('Start container ', cont);
			 Restangular.one('containers', cont.Id)
			 			.start()
						.then(function (data) {
							console.log('Start container response', arguments);
							search();
						}, function (response) {
							console.log("Start container: Error with status code", response.status);
						});
		 }
		 function stopContainer(cont) {
			 console.log('Stop container', cont);
			 Restangular.one('containers', cont.Id)
			 			.stop()
						.then(function (data) {
							console.log('Stop container response', arguments);
							search();
						}, function (response) {
							console.log("Stop container: Error with status code", response.status);
						});
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
		 function _reloadGrid() {
			 vm.tableParams.reload();
		 }
	}
})();