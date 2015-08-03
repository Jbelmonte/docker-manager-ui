/* global describe, beforeEach, afterEach, it, expect, inject */

'use strict';

describe('ContainersCtrl', function() {
  /*describe('Init', function () {
    if('should pass this dummy test', function () {
      expect(4).toBe(4);
    });
  });*/
  
  beforeEach(module('docker-manager-ui'));
  beforeEach(module('docker-manager-ui.mock.containers'));
  beforeEach(module('ngMock'));
  
  var $controller,
      $rootScope,
      $httpBackend,
      Restangular,
      ngTableParams,
      appCommons,
      containers;
      
  var scope,
      ContainersCtrl;

  beforeEach(inject(function(_$controller_, _$rootScope_, _$httpBackend_, _Restangular_, _ngTableParams_, _appCommons_, containersMockData){
    // Inject all needed services
    $controller = _$controller_;
    $rootScope =_$rootScope_;
    $httpBackend = _$httpBackend_;
    Restangular = _Restangular_;
    ngTableParams = _ngTableParams_;
    appCommons = _appCommons_;
    containers = containersMockData;
  }));
  
  beforeEach(function() {
    // Load controller
    scope = $rootScope.$new();
    ContainersCtrl = $controller('ContainersCtrl', {
      $scope: scope,
      Containers: Restangular.all('containers'),
      ngTableParams: ngTableParams,
      appCommons: appCommons
    });
  });
  
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
  
  
  describe('Initialization', function() {
    /*it('should be loaded', function() {
      expect(ContainersCtrl).not.toBe(null);
      $httpBackend.flush();
    });*/
    
    it('should request containers on load', function () {
      $httpBackend.expectGET('/containers?all=true').respond(containers.getContainers());
      $httpBackend.flush();
    });
  });
});