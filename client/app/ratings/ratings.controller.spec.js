'use strict';

describe('Controller: RatingsCtrl', function () {

  // load the controller's module
  beforeEach(module('nytBooksApp'));

  var RatingsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RatingsCtrl = $controller('RatingsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
