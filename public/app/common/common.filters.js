(function () {
    angular
        .module('docker-manager-ui.common.filters', [])
        .filter('dmTruncate', truncateFilter);
       
    function truncateFilter() {
        return function (text, size, append) {
            var suffix = append || '...';
            var end = size || 10;
            var txt = text || '';
            return txt.length > end? txt.substring(0, end) + suffix : txt;
        };
    }
})();