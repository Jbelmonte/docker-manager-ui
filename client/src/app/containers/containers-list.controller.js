(function () {
	'use strict';
	
	angular
		.module('docker-manager-ui.containers')
		.controller('ContainersCtrl', ContainersCtrl);

	ContainersCtrl.$inject = ['$scope', 'ngTableParams', 'Containers', 'appCommons'];
	function ContainersCtrl(   $scope,   NgTableParams,   Containers,   commons) {
		var vm = $scope;
		var logger = commons.logger,
			dialogs = commons.dialogs,
			$q = commons.$q,
			$filter = commons.$filter;
		
		var _searching;

		// Initialize scope
		_initialize();

		// Load
		search();
		
		/**
		 * Functions
		 */
		function search() {
			logger.info('Search containers');
			
			/**
			 * Init a search result promise, or reuse existing one.
			 * 
			 * Promise _searching will be resolved later in _saveData function when valid
			 * data is received.
			 * This way we prevent a network error from break grid updates (sorting, paging, etc.).
			 */
			_searching = _searching || $q.defer();
			
			return Containers
						.search(vm.params)
						.then(_saveData, logger.error)
						.then(_reloadGrid);
		}
		function startAllContainers() {
			logger.log('Start all containers');
			return Containers
						.start()
						.then(search, logger.error);
		}
		function stopAllContainers() {
			var defer = $q.defer();
			dialogs.confirm('Please confirm','Are you sure you want to stop all containers?')
					.result
					.then(function () {
						logger.info('Stopping all containers');
						return Containers
									.stop()
									.then(search, logger.error);
					}, function () {
						logger.log('Uh! Lucky me!');
					});
			return defer.promise;
		}
		function startContainer(cont) {
			var defer = $q.defer();
			dialogs.confirm('Please confirm','Are you sure you want to start this container?')
					.result
					.then(function () {
						logger.info('Start container ', cont);
						return Containers.byId(cont.Id)
									.start()
									.then(search, logger.error);
					}, function () {
						logger.log('Uh! Lucky me!');
					});
			return defer.promise;
		}
		function stopContainer(cont) {
			var defer = $q.defer();
			dialogs.confirm('Please confirm','Are you sure you want to stop this container?')
					.result
					.then(function () {
						logger.log('Stop container', cont);
						return Containers.byId(cont.Id)
									.stop()
									.then(search, logger.error);
					}, function () {
						logger.log('Uh! Lucky me!');
					});
			return defer.promise;
		}
		function isStoppable(cont) {
			var status = $filter('cntStatus')(cont.Status);
			return status.toLowerCase() === 'up';
		}
		function isStartable(cont) {
			var status = $filter('cntStatus')(cont.Status);
			return status.toLowerCase() !== 'up';
		}
		 
		// Private functions
		function _initialize() {
			/**
			* Publish scope
			*/
			// Already loaded containers
			vm.containers = [];
			vm.params = {
				all: 'true',
				//limit: 100
			};
			
			// Chart
			vm.chart = {
				data: [],
				labels: ['Up', 'Exited'],
				colours: ['#46BFBD', '#F7464A'],
				options: { }
			};
			
			// Table configuration
			vm.tableParams = new NgTableParams({
					page: 1,
					count: 5,
					sorting: {
						Image: 'asc'
					}
				}, {
					total: 0,
					getData: function ($defer, params) {
						logger.log('Requesting data for grid.');
						
						/**
						 * Reuse search promise not to perform a search each time
						 * user pages or sorts data in grid.
						 */
						_searchPromise()
							.promise
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
			logger.log('Return page (index %d, count %d) from data', tableParams.page(), tableParams.count());
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

			// Return paged data
			return orderedData;
		}

		function _saveData(data) {
			logger.log('Storing search results (%d elements)', data.length);
			vm.containers = data;
			
			/**
			 * Resolve searching promise.
			 * 
			 * Create a new promise now we have valid data.
			 * Previous one gets replaced.
			 */
			_searchPromise(true).resolve(data);
			
			_updateChart(data);
			
			// Return data again for nested promises.
			return data;
		}

		function _reloadGrid(data) {
			logger.log('Reload grid with incomming data');
			
			// Force a grid reload
			vm.tableParams.reload();
			
			// Show first page
			if (vm.tableParams.page() !== 1) {
				vm.tableParams.page(1);
			}
			
			// Return data again for nested promises.
			return data;
		}
		
		function _searchPromise(newOne) {
			if (newOne === true) {
				_searching = $q.defer();
			}
			return _searching;
		}
		
		function _updateChart(data) {
			logger.log('Refreshing chart');
			var status = data.map(function (container) {
									return container.Status;
								})
								.map($filter('cntStatus'))
								.sort();
			var charData = [];
			for (var idl=0; idl<vm.chart.labels.length; idl++) {
				var label = vm.chart.labels[idl];
				var total = 0;
				for (var idx=0; idx<status.length; idx++) {
					if (status[idx] === label) {
						total++;
					}
				}
				charData.push(total);
			}
			vm.chart.data = charData;
			return data;
		}

	}
})();