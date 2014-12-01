'use strict';

module.exports = require('angular')
  .module('animate-change', [])
  .directive('animateChange', require('./directive'))
  .name;
