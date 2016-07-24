(function() {

  angular
    .module('myApp')
    .controller('SiteController', SiteController);

  SiteController.$inject = ['$state', '$stateParams', 'Site'];

  function SiteController($state, $stateParams, Site) {

    var siteController = this;

    siteController.sites = Site.query(); // fetches all sites via GET  to /api/Site

    siteController.deleteSite = function() { // deletes a site via DELETE to /api/Site/:id

      siteController.site.$delete(function() {
        $state.go('sites'); // redirect to sites list page
      });

    };

    if($state.current.name == 'newSite') {
      siteController.site = new Site(); // create new site instance
    }
    siteController.addSite = function() {
      siteController.site.$save(function() {
        $state.go('sites'); // redirect to sites list page
      });

    };

    siteController.updateSite = function() { // update the edited site via a PUT to /api/Site/:id 
      siteController.site.$update(function() {
        $state.go('sites'); // redirect to sites list page
      });
    };

    siteController.loadSite = function() {

      for (var i = 0, len = siteController.sites.length; i < len; i++) {
        if (siteController.sites[i].id == $stateParams.sId) {
          siteController.site = siteController.sites[i];
          return false;
        }
      }
      // siteController.site = Site.get({ id: $stateParams.sId }); // load a site via a GET to /api/Site/:id
    };

    /** Only load a specific site if a sId is passed */
    if($stateParams.sId) {
      siteController.sites.$promise.then(function() {
        siteController.loadSite();
      });
    }


  };

})();