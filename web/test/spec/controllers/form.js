'use strict';

describe('Controller: FormCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var FormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormCtrl = $controller('FormCtrl', {
      $scope: scope
    });
  }));

  it('should have a submit method on the scope', function () {
    expect(typeof scope.submit).toBe('function');
  });
});
