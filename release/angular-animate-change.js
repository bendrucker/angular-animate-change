!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.angularAnimateChange=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

module.exports = (typeof window !== "undefined" ? window.angular : typeof global !== "undefined" ? global.angular : null)
  .module('animate-change', [])
  .directive('animateChange', require('./directive'))
  .name;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./directive":2}],2:[function(require,module,exports){
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

},{}]},{},[1])(1)
});