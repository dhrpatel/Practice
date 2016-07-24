(function() {

  angular
    .module('myApp')
    .factory('Site', Site);

  Site.$inject = ['$resource', 'REST_URL'];

  function Site($resource, REST_URL) {
    return $resource(REST_URL + 'Site/:id', { id: '@id'}, {
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