(function() {

  angular
    .module('myApp')
    .config(routeConfig)
    .run(routeRun);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$resourceProvider'];
  routeRun.$inject = ['$state'];

  function routeConfig($stateProvider, $urlRouterProvider, $resourceProvider) {

    $stateProvider
      .state('projects', {
        url: '/projects',
        controller: 'ProjectController as projectController',
        templateUrl: 'projects/projects.html'
      })
      .state('newProject', {
        url: '/projects/new',
        controller: 'ProjectController as projectController',
        templateUrl: 'projects/project-add.html'
      })
      .state('editProject', {
        url: '/projects/:pId',
        controller: 'ProjectController as projectController',
        templateUrl: 'projects/project-edit.html'
      })
      .state('sites', {
        url: '/sites',
        controller: 'SiteController as siteController',
        templateUrl: 'sites/sites.html'
      })
      .state('newSite', {
        url: '/sites/new',
        controller: 'SiteController as siteController',
        templateUrl: 'sites/site-add.html'
      })
      .state('editSite', {
        url: '/sites/:sId',
        controller: 'SiteController as siteController',
        templateUrl: 'sites/site-edit.html'
      });
    $urlRouterProvider.otherwise('/projects');

    $resourceProvider.defaults.stripTrailingSlashes = false; // ensure that Angular does not strip the trailing slash for ReST calls
  };

  function routeRun($state) {
    $state.go('projects'); // make a transition to projects state when app starts
  };

})();