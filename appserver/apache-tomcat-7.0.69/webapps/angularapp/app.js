(function() {
  'use strict';

  angular
    .module('myApp', [
      'ngResource',
      'ui.router'
    ])
    .constant('REST_URL', 'https://' + document.domain + '/g300training/api/'); // change according to current instance
  
})();