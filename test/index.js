'use strict';

var angular = require('angular');
var expect  = require('chai').use(require('sinon-chai')).expect;
var sinon   = require('sinon');
var sap     = require('sinon-as-promised');

describe('animate-change', function () {

  var $scope, $animate, element;
  beforeEach(angular.mock.module(require('../')));
  beforeEach(angular.mock.module(function ($provide) {
    $provide.value('$animate', ($animate = {}));
  }));
  beforeEach(angular.mock.inject(function ($injector) {
    $compile = $injector.get('$compile');
    $scope = $injector.get('$rootScope').$new();
    sap($injector.get('$q'));
    sap.setScheduler(function (fn) {
      $scope.$evalAsync(fn);
    });
    $animate.addClass = sinon.stub().resolves();
    element = $compile('<span animate-change="foo" change-class="on"></span>')($scope);
  }));

  it('adds the toggles class when the model changes', function () {
    $scope.$digest();
    sinon.stub(element, 'removeClass');
    $scope.foo = 'bar';
    $scope.$digest();
    expect($animate.addClass).to.have.been.calledWith(element, 'on');
    expect(element.removeClass).to.have.been.calledWith('on');
  });

  it('does not animate the initial value', function () {
    $scope.foo = 'bar';
    $scope.$digest();
    expect($animate.addClass).to.not.have.been.called;
  });

});
