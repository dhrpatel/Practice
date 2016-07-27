(function() {

  angular
    .module('myApp')
    .factory('Site', Site);

  Site.$inject = ['$resource', 'REST_URL'];

  function Site($resource, REST_URL) {

    /* ADD CODE FOR THE SITE SERVICE HERE */
return $resource(REST_URL + 'Project/:id', { id: '@id'}, {
      update: {
        method: 'PUT'
      },
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function(data) {
          return angular.fromJson(data).responseData;
        }
      }
    });

  };

})();