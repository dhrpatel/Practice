(function() {

  angular
    .module('myApp')
    .factory('Project', Project);

  Project.$inject = ['$resource', 'REST_URL'];

  function Project($resource, REST_URL) {
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