(function () {
	angular
		.module('docker-manager-ui.containers.helpers', [])
		.filter('cntStatus', cntStatusFilter)
		.filter('cntStatusClass', cntStatusClassFilter)
		.directive('dmContainerStatus', containerStatusDirective);
	
	function containerStatusDirective() {
		return {
			restrict: 'A',
			scope: {
				container: '=dmContainerStatus'
			},
			template: '<span class="label label-{{container.Status | cntStatusClass}}">{{statusText}} <span class="badge">{{extraInfo}}</span></span>',
			link: function (scope, elem, attr) {
				var container = scope.container;
				var parsed = _parseContainerStatus(container.Status);
				scope.statusText = parsed[0];
				scope.extraInfo = parsed[1];
			}
		};
	}
	
	function cntStatusFilter() {
		return _containerStatus;
	}
	
	function cntStatusClassFilter() {
		return _containerStatusClass;
	}
	
	function _containerStatus(statusText) {
		return _parseContainerStatus(statusText)[0];
	}
	
	function _parseContainerStatus(statusText) {
		return /^(\w+) (.+)$/.exec(statusText).slice(1);
	}
	
	function _containerStatusClass(statusText) {
		var status = _containerStatus(statusText);
		switch(status) {
			case 'Exit': return 'danger';
			case 'Up': return 'success';
			default: return 'default';
		}
	}
})();