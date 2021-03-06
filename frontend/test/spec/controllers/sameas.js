'use strict';

describe('Controller: SameasCtrl', function () {

  // load the controller's module
  beforeEach(module('psJwtApp'));

  var SameasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SameasCtrl = $controller('SameasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SameasCtrl.awesomeThings.length).toBe(3);
  });
});
