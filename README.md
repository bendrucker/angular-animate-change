angular-animate-change [![Build Status](https://travis-ci.org/bendrucker/angular-animate-change.svg?branch=master)](https://travis-ci.org/bendrucker/angular-animate-change)
======================

Angular directive for applying an animation class to an element whenever a value changes. Useful for applying attention-calling animation like flashes or shakes.

## Installing

```bash
# npm
$ npm install angular-animate-change
# bower
$ bower install angular-animate-change
```

## Setup

```js
// node module exports the string 'animate-change' for convenience
angular.module('myApp', [
  require('angular-animate-change')
]);
// otherwise, include the code first then the module name
angular.module('myApp', [
  'animate-change'
]);
```

## API

##### `animateChange` (directive)

```html
<span animate-change="value" change-class="flash"></span>
```

When `$scope.value` changes, the class `'flash'` will be added. [Animation classes will applied during the transition](https://docs.angularjs.org/api/ngAnimate/service/$animate#addClass).
