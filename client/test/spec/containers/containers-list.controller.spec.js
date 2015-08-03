/* global describe, beforeEach, it, expect, inject */

'use strict';

describe('ContainersCtrl', function() {
  /*describe('Init', function () {
    if('should pass this dummy test', function () {
      expect(4).toBe(4);
    });
  });*/
  
  beforeEach(module('docker-manager-ui'));

  var $controller,
      Restangular,
      ngTableParams,
      appCommons;

  beforeEach(inject(function(_$controller_, _Restangular_, _ngTableParams_, _appCommons_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    Restangular = _Restangular_;
    ngTableParams = _ngTableParams_;
    appCommons = _appCommons_;
  }));

  describe('Initialization', function() {
    it('should be loaded', function() {
      var $scope = {};
      var controller = $controller('ContainersCtrl', {
        $scope: $scope,
        Containers: Restangular.all('containers'),
        ngTableParams: ngTableParams,
        appCommons: appCommons
      });
      
      expect(controller).not.toBe(null);
    });
  });
});