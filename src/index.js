'use strict';

require('angular')
  .module('animate-change', [])
  .directive('animateChange', require('./directive'));

module.exports = 'animate-change';
