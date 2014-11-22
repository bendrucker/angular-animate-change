'use strict';

module.exports = function ($animate) {
  return {
    restrict: 'EA',
    link: function (scope, element, attributes) {
      scope.$watch(attributes.animateChange, function (newVal, oldVal) {
        if (newVal !== oldVal) {
          $animate.addClass(element, attributes.changeClass)
            .then(function () {
              element.removeClass(attributes.changeClass);
            });
        }
      });
    }
  };
};
module.exports.$inject = ['$animate'];
