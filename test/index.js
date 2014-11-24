'use strict';

var angular = require('angular');
var expect  = require('chai').expect;

describe('animate-change', function () {

  var $scope, $animate, $timeout, element;
  beforeEach(angular.mock.module(require('../')));
  beforeEach(angular.mock.inject(function ($injector) {
    $compile = $injector.get('$compile');
    $scope   = $injector.get('$rootScope').$new();
    $timeout = $injector.get('$timeout');
    $animate = $injector.get('$animate');
    element  = $compile('<span animate-change="foo" change-class="on"></span>')($scope);
  }));

  it('adds the toggles class when the model changes', function () {
    $scope.$digest();
    $scope.foo = 'bar';
    $scope.$digest();
    expect(element.hasClass('on')).to.be.true;
    $timeout.flush();
    expect(element.hasClass('on')).to.be.false;
  });

  it('does not animate the initial value', function () {
    $scope.foo = 'bar';
    $scope.$digest();
    expect(element.hasClass('on')).to.be.false;
  });

});
