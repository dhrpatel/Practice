(function() {
  'use strict';

  angular
    .module('myApp', [
      'ngResource',
      'ui.router'
    ])
    .constant('REST_URL', 'https://g300training-dhrpatel.c9users.io/g300training/api/'); // change according to current instance
  
})();